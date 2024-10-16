import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { StaffModel } from '../../../models/staff-model';
import { useStaffContext } from './staff-context';

interface CreateOrUpdateContextType {
  formData: StaffModel;
  resetFormData: () => void;
  validateForm: () => { isValid: boolean; error?: string };
  handleSubmit: () => boolean;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
  isSubmitDisabled: boolean;
  handleCancel: () => void;
}

const CreateOrUpdateContext = createContext<CreateOrUpdateContextType>({
  formData: new StaffModel(),
  resetFormData: () => { },
  handleSubmit: () => false,
  errorMessage: '',
  setErrorMessage: () => { },
  validateForm: () => ({ isValid: true }),
  isSubmitDisabled: true,
  handleCancel: () => { },
});

interface IProps {
  children: ReactNode;
}

const CreateOrUpdateProvider = observer(({ children }: IProps) => {
  const { itemUpdate, addStaff, updateStaff, onCreateOrUpdate, setItemUpdate } = useStaffContext();
  const [formData, setFormData] = useState<StaffModel>(new StaffModel());

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (itemUpdate) {
      // Nếu có itemUpdate, cập nhật formData từ itemUpdate
      runInAction(() => {
        formData.setAll(itemUpdate);
      });
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
      console.log('formData', formData);
  
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
    runInAction(() => {
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
    });
  };

  const validateForm = () => {
    let isValid = true;
    let error: string | undefined;

    if (!formData.fullName || !formData.email || !formData.phone || !formData.username) {
      error = 'Please fill in all required fields.';
      isValid = false;
    }

    if (!itemUpdate && !formData.password) {
      error = 'Password is required for new staff.';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      error = 'Passwords do not match.';
      isValid = false;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      error = 'Please enter a valid email.';
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      error = 'Please enter a valid phone number.';
      isValid = false;
    }

    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage('');
    }

    return { isValid, error };
  };

  const handleSubmit = () => {
    const { isValid, error } = validateForm();
    if (!isValid) {
      console.error(error);
      return false;
    }

    const newStaff = new StaffModel({
      id: itemUpdate ? itemUpdate.id : 0,
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
      errorMessage,
      setErrorMessage,
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
