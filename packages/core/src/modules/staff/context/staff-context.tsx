import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  StaffModel
} from '../../../models/staff-model';

// Kiểu cho context
interface StaffContextType {
  staffs: StaffModel[];
  addStaff: (staff: StaffModel) => void;
  updateStaff: (id: number, staff: StaffModel) => void;
  deleteStaff: (id: number) => void;
  onCreateOrUpdate: (value: boolean) => void;
  isCreateOrUpdate: boolean;
}

// Tạo context
const StaffContext = createContext<StaffContextType>({
  staffs: [],
  addStaff: () => {},
  updateStaff: () => {},
  deleteStaff: () => {},
  onCreateOrUpdate: () => {},
  isCreateOrUpdate: false,

});

interface IProps {
  children: ReactNode;
}

const ListStaffProvider = ({ children }: IProps) => {
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);
  const [staffs, setStaffs] = useState<StaffModel[]>([]);

  const addStaff = (staff: StaffModel) => {
    setStaffs((prevStaffs) => [...prevStaffs, staff]);
  };

  const onCreateOrUpdate = (value: boolean) => {
    setIsCreateOrUpdate(value);
  }

  const updateStaff = (id: number, updatedStaff: StaffModel) => {
    setStaffs((prevStaffs) =>
      prevStaffs.map((staff) => (staff.id === id ? updatedStaff : staff))
    );
  };

  const deleteStaff = (id: number) => {
    setStaffs((prevStaffs) => prevStaffs.filter((staff) => staff.id !== id));
  };

  return (
    <StaffContext.Provider value={{
      staffs, addStaff, updateStaff, deleteStaff, isCreateOrUpdate, onCreateOrUpdate
    }}>
      {children}
    </StaffContext.Provider>
  );
};

// Hook để sử dụng StaffContext
const useStaffContext = (): StaffContextType => {
  return useContext(StaffContext);
  
  
};

export { ListStaffProvider, useStaffContext };
