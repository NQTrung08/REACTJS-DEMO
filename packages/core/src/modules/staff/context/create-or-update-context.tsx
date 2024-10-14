import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { StaffModel } from '../../../models/staff-model';
import { useStaffContext } from './staff-context';

interface CreateOrUpdateContextType {
  // 
  formData: {
    fullName: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    confirmPassword: string;
    status: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  resetFormData: () => void;
  validateForm: () => { isValid: boolean; error?: string };
  handleSubmit: () => boolean;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const CreateOrUpdateContext = createContext<CreateOrUpdateContextType>({
  formData: {
    fullName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
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
  const { selectedStaff, addStaff, updateStaff } = useStaffContext();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    status: 'active',
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Khi selectedStaff thay đổi, cập nhật formData nếu có selectedStaff
    if (selectedStaff) {
      setFormData({
        fullName: selectedStaff.fullName,
        email: selectedStaff.email,
        phone: selectedStaff.phone,
        username: selectedStaff.username,
        password: '', // Không hiển thị mật khẩu
        confirmPassword: '',
        status: selectedStaff.status,
      });
    } else {
      resetFormData();
    }
  }, [selectedStaff]);

  const resetFormData = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      confirmPassword: '',
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

    if (!selectedStaff && !formData.password) {
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

    const phoneRegex = /^\d{10}$/; // Assuming phone numbers are 10 digits
    if (!phoneRegex.test(formData.phone)) {
      error = 'Please enter a valid phone number.';
      isValid = false;
    }

    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage(''); // Clear error message if valid
    }

    return { isValid, error };
  };

  const handleSubmit = () => {
    const { isValid, error } = validateForm();
    if (!isValid) {
      console.error(error); // Handle error, e.g., show a toast notification
      return false;
    }

    const newStaff: StaffModel = {
      id: selectedStaff ? selectedStaff.id : Date.now(), // Generate new ID if adding
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      username: formData.username,
      password: selectedStaff ? selectedStaff.password : formData.password, // Keep existing password when editing
      status: formData.status,
      middleName: '', // Add default value for unused fields
      role: 'staff',
      manager: '',
      avatar: '',
    };

    if (selectedStaff) {
      updateStaff(newStaff.id, newStaff); // Update staff
    } else {
      addStaff(newStaff); // Add new staff
    }

    resetFormData(); // Clear form after submission
    return true; // Return true to indicate successful submission
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
