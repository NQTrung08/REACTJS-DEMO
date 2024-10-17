import { observer } from 'mobx-react-lite';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { StaffModel } from '../../../models/staff-model';
import { useStaffContext } from './staff-context';

interface CreateOrUpdateContextType {
  formData: StaffModel;
  resetFormData: () => void;
  validateForm: () => { isValid: boolean; errors: Record<string, string> };
  handleSubmit: () => boolean;
  errorMessages: Record<string, string>;
  setErrorMessage: (field: string, message: string) => void;
  isSubmitDisabled: boolean;
  handleCancel: () => void;
}

const CreateOrUpdateContext = createContext<CreateOrUpdateContextType>({
  formData: new StaffModel(),
  resetFormData: () => { },
  handleSubmit: () => false,
  errorMessages: {},
  setErrorMessage: () => { },
  validateForm: () => ({ isValid: true, errors: {} }),
  isSubmitDisabled: true,
  handleCancel: () => { },
});

interface IProps {
  children: ReactNode;
}

const CreateOrUpdateProvider = observer(({ children }: IProps) => {
  const { itemUpdate, addStaff, updateStaff, onCreateOrUpdate, setItemUpdate } = useStaffContext();
  const [formData, setFormData] = useState<StaffModel>(new StaffModel());

  const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    if (itemUpdate) {
      // Nếu có itemUpdate, cập nhật formData từ itemUpdate
      formData.setAll(itemUpdate);
    } else {
      resetFormData();
    }
  }, [itemUpdate, formData]);

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleCancel = () => {
    onCreateOrUpdate(false);
    setItemUpdate(null);
    resetFormData();
  };

  useEffect(() => {
    const isFormChanged = formData.fullName ||
      formData.middleName ||
      formData.username ||
      formData.password ||
      formData.confirmPassword ||
      formData.phone ||
      formData.email ||
      formData.manager ||
      formData.avatar ||
      formData.status !== 'active';

    setIsSubmitDisabled(!isFormChanged);
  }, [formData.fullName, formData.middleName, formData.username, formData.password, formData.confirmPassword, formData.phone, formData.email, formData.manager, formData.avatar, formData.status]);


  const resetFormData = () => {
    formData.setFullName('');
    formData.setMiddleName('');
    formData.setUsername('');
    formData.setPassword('');
    formData.setConfirmPassword('');
    formData.setPhone('');
    formData.setEmail('');
    formData.setManager('');
    formData.setAvatar('');
    formData.setStatus('active');
    setErrorMessages({});
  };

  const validateForm = () => {
    let isValid = true;
    const errors: Record<string, string> = {};

    if (!formData.fullName) {
      errors.fullName = 'Họ và tên không được để trống.';
      isValid = false;
    }
    if (!formData.email) {
      errors.email = 'Email không được để trống.';
      isValid = false;
    }
    if (!formData.phone) {
      errors.phone = 'Số điện thoại không được để trống.';
      isValid = false;
    }
    if (!formData.username) {
      errors.username = 'Tên đăng nhập không được để trống.';
      isValid = false;
    }
    if (!itemUpdate && !formData.password) {
      errors.password = 'Mật khẩu là bắt buộc cho nhân viên mới.';
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Mật khẩu không khớp.';
      isValid = false;
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = 'Vui lòng nhập email hợp lệ.';
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.phone = 'Vui lòng nhập số điện thoại hợp lệ.';
      isValid = false;
    }

    setErrorMessages(errors);
    return { isValid, errors };
  };

  const handleSubmit = () => {
    const { isValid } = validateForm();
    if (!isValid) {
      return false;
    }

    const newStaff = new StaffModel({
      id: itemUpdate ? itemUpdate.id : Date.now(),
      fullName: formData.fullName,
      middleName: formData.middleName,
      username: formData.username,
      password: itemUpdate ? itemUpdate.password : formData.password,
      phone: formData.phone,
      email: formData.email,
      role: formData.role,
      manager: formData.manager,
      avatar: formData.avatar,
      status: formData.status,
      confirmPassword: formData.confirmPassword,
    });

    if (itemUpdate) {
      updateStaff(newStaff.id, newStaff);
    } else {
      addStaff(newStaff);
    }

    resetFormData();
    return true;
  };

  return (
    <CreateOrUpdateContext.Provider value={{
      formData,
      resetFormData,
      validateForm,
      handleSubmit,
      errorMessages,
      setErrorMessage: (field, message) => setErrorMessages(prev => ({ ...prev, [field]: message })),
      isSubmitDisabled,
      handleCancel,
    }}>
      {children}
    </CreateOrUpdateContext.Provider>
  );
});

const useCreateOrUpdateContext = () => {
  return useContext(CreateOrUpdateContext);
};

export { CreateOrUpdateProvider, useCreateOrUpdateContext };
