import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { StaffModel } from '../../../models/staff-model';
import { useStaffContext } from './staff-context';

interface CreateOrUpdateContextType {
  // 
  formData: StaffModel & { confirmPassword: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  resetFormData: () => void;
  validateForm: () => { isValid: boolean; error?: string };
  handleSubmit: () => boolean;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const CreateOrUpdateContext = createContext<CreateOrUpdateContextType>({
  formData: {
    id: 0,
    fullName: '',
    middleName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    email: '',
    role: 'staff',
    manager: '',
    avatar: '',
    status: 'active',
  },
  setFormData: () => {},
  resetFormData: () => { },
  handleSubmit: () => false,
  errorMessage: '',
  setErrorMessage: () => { },
  validateForm: () => ({ isValid: true }),
});

interface IProps {
  children: ReactNode;
}

const CreateOrUpdateProvider = ({ children }: IProps) => {
  const { itemUpdate, addStaff, updateStaff } = useStaffContext();

  const [formData, setFormData] = useState<StaffModel & { confirmPassword: string }>({
    id: 0,
    fullName: '',
    middleName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    email: '',
    role: 'staff',
    manager: '',
    avatar: '',
    status: 'active',
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (itemUpdate) {
      setFormData({
        ...itemUpdate,
        password: '', // Không hiển thị mật khẩu
        confirmPassword: '', // Chỉ sử dụng khi xác nhận mật khẩu
      });
    } else {
      resetFormData();
    }
  }, [itemUpdate]);

  const resetFormData = () => {
    setFormData({
      id: 0,
      fullName: '',
      middleName: '',
      username: '',
      password: '',
      confirmPassword: '',
      phone: '',
      email: '',
      role: 'staff', // Default role
      manager: '',
      avatar: '',
      status: 'active',
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

    const newStaff: StaffModel = {
      ...formData,
      password: itemUpdate ? itemUpdate.password : formData.password, // Keep existing password when editing
    };

    if (itemUpdate) {
      updateStaff(newStaff.id, newStaff); // Update staff
    } else {
      addStaff(newStaff); // Add new staff
    }

    resetFormData(); 
    return true; 
  };



  return (
    <CreateOrUpdateContext.Provider value={{
      formData,
      setFormData,
      resetFormData,
      validateForm,
      handleSubmit,
      errorMessage,
      setErrorMessage
    }}>
      {children}
    </CreateOrUpdateContext.Provider>
  );
};

const useCreateOrUpdateContext = () => {
  return useContext(CreateOrUpdateContext);
};

export { CreateOrUpdateProvider, useCreateOrUpdateContext };
