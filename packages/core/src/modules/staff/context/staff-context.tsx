import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { StaffModel } from '../../../models/staff-model';
import { staffsData } from './data-staff';


class FilterStaff {
  keyword: string = '';
  status: 'active' | 'inactive' = 'active';
  sort: 'asc' | 'desc' = 'asc';
}
interface StaffContextType {
  staffs: StaffModel[];
  itemUpdate: StaffModel | null;
  setItemUpdate: (staff: StaffModel | null) => void;
  addStaff: (staff: StaffModel) => void;
  updateStaff: (id: number, staff: StaffModel) => void;
  deleteStaff: (id: number) => void;
  searchStaff: (q: string) => StaffModel[];
  filterStaff: (filterValue: string) => StaffModel[];
  onCreateOrUpdate: (value: boolean) => void;
  isCreateOrUpdate: boolean;
  filter: FilterStaff,
  dataView: StaffModel[],
  setDataView: React.Dispatch<React.SetStateAction<StaffModel[]>>
  setFilter: React.Dispatch<React.SetStateAction<FilterStaff>>
}

const StaffContext = createContext<StaffContextType>({
  staffs: [],
  itemUpdate: null,
  setItemUpdate: () => { },
  addStaff: () => { },
  updateStaff: () => { },
  deleteStaff: () => { },
  onCreateOrUpdate: () => { },
  isCreateOrUpdate: false,
  searchStaff: () => [],
  filterStaff: () => [],
  filter: new FilterStaff(),
  dataView: [],
  setDataView: () => { },
  setFilter: () => { }
});

interface IProps {
  children: ReactNode;
}


const ListStaffProvider = ({ children }: IProps) => {
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);
  const [staffs, setStaffs] = useState<StaffModel[]>(staffsData);
  // todo: item update
  const [itemUpdate, setItemUpdate] = useState<StaffModel | null>(null);
  const [filter, setFilter] = useState<FilterStaff>(new FilterStaff());
  const [dataView, setDataView] = useState<StaffModel[]>([]);

  useEffect(() => {
    let dataTemp: StaffModel[] = [];

    dataTemp = staffs.filter((staff) => staff.status === filter.status);
    if (filter.keyword) {
      dataTemp = dataTemp.filter((staff) =>
        staff.fullName.toLowerCase().includes(filter.keyword.toLowerCase())
      );
    }
    if (filter.sort === 'asc') {
      dataTemp = dataTemp.sort((a, b) => a.fullName.localeCompare(b.fullName));
    } else if (filter.sort === 'desc') {
      dataTemp = dataTemp.sort((a, b) => b.fullName.localeCompare(a.fullName));

    }
    
    setDataView(dataTemp);
  }, [filter.keyword, filter.status, filter.sort, staffs]);

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
      staff.fullName.toLowerCase().includes(q.toLowerCase())
    );
  };

  const filterStaff = (filterValue: string) => {
    return staffs.filter((staff) =>
      staff.fullName.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const onCreateOrUpdate = (value: boolean) => {
    setIsCreateOrUpdate(value);
  };

  return (
    <StaffContext.Provider value={{
      staffs,
      itemUpdate,
      setItemUpdate,
      addStaff,
      updateStaff,
      deleteStaff,
      searchStaff,
      filterStaff,
      isCreateOrUpdate,
      onCreateOrUpdate,
      filter,
      dataView,
      setDataView,
      setFilter
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
