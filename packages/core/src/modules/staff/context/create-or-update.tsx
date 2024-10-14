import { ReactNode, createContext, useContext, useState } from 'react';
import { StaffModel } from '../../../models/staff-model';

interface CreateOrUpdateContextType {
  currentStaff: StaffModel | null;
  isCreateOrUpdate: boolean;
  onCreateOrUpdate: (value: boolean) => void;
  setCurrentStaff: (staff: StaffModel | null) => void;
  resetForm: () => void;
}

const CreateOrUpdateContext = createContext<CreateOrUpdateContextType>({
  currentStaff: null,
  isCreateOrUpdate: false,
  onCreateOrUpdate: () => {},
  setCurrentStaff: () => {},
  resetForm: () => {},
});

interface IProps {
  children: ReactNode;
}

const CreateOrUpdateProvider = ({ children }: IProps) => {
  const [currentStaff, setCurrentStaff] = useState<StaffModel | null>(null);
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);

  const onCreateOrUpdate = (value: boolean) => {
    setIsCreateOrUpdate(value);
  }
  const resetForm = () => {
    setCurrentStaff(null);
    setIsCreateOrUpdate(true);
  };

  return (
    <CreateOrUpdateContext.Provider value={{
      currentStaff,
      isCreateOrUpdate,
      onCreateOrUpdate,
      setCurrentStaff,
      resetForm
    }}>
      {children}
    </CreateOrUpdateContext.Provider>
  );
};

const useCreateOrUpdateContext = () => {
  return useContext(CreateOrUpdateContext);
};

export { CreateOrUpdateProvider, useCreateOrUpdateContext };
