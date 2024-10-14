import { ReactNode, createContext, useContext, useState } from 'react';
import { StaffModel } from '../../../models/staff-model';
import { staffsData } from './data-staff';

interface StaffContextType {
  staffs: StaffModel[];
  selectedStaff: StaffModel | null;
  setSelectedStaff: (staff: StaffModel | null) => void;
  addStaff: (staff: StaffModel) => void;
  updateStaff: (id: number, staff: StaffModel) => void;
  deleteStaff: (id: number) => void;
  searchStaff: (q: string) => StaffModel[];
  filterStaff: (filterValue: string) => StaffModel[];
  onCreateOrUpdate: (value: boolean) => void;
  isCreateOrUpdate: boolean;
}

const StaffContext = createContext<StaffContextType>({
  staffs: [],
  selectedStaff: null,
  setSelectedStaff: () => {},
  addStaff: () => {},
  updateStaff: () => {},
  deleteStaff: () => {},
  onCreateOrUpdate: () => {},
  isCreateOrUpdate: false,
  searchStaff: () => [],
  filterStaff: () => [],
});

interface IProps {
  children: ReactNode;
}

const ListStaffProvider = ({ children }: IProps) => {
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);
  const [staffs, setStaffs] = useState<StaffModel[]>(staffsData);
  // todo: item update
  const [selectedStaff, setSelectedStaff] = useState<StaffModel | null>(null);

  const addStaff = (staff: StaffModel) => {
    setStaffs((prevStaffs) => [...prevStaffs, staff]);
  };

  const updateStaff = (id: number, updatedStaff: StaffModel) => {
    setStaffs((prevStaffs) =>
      prevStaffs.map((staff) => (staff.id === id ? updatedStaff : staff))
    );
  };

  const deleteStaff = (id: number) => {
    setStaffs((prevStaffs) => prevStaffs.filter((staff) => staff.id !== id));
  };

  const searchStaff = (q: string) => {
    return staffs.filter((staff) =>
      staff.name.toLowerCase().includes(q.toLowerCase())
    );
  };

  const filterStaff = (filterValue: string) => {
    return staffs.filter((staff) =>
      staff.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const onCreateOrUpdate = (value: boolean) => {
    setIsCreateOrUpdate(value);
  };

  return (
    <StaffContext.Provider value={{
      staffs,
      selectedStaff,
      setSelectedStaff,
      addStaff,
      updateStaff,
      deleteStaff,
      searchStaff,
      filterStaff,
      isCreateOrUpdate,
      onCreateOrUpdate,
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
