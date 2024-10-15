import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import {
  FilterStaff
} from '../../../models/filter-staff';
import { IStaff } from '../../../models/staff-model';
import { staffsData } from './data-staff';


interface StaffContextType {
  staffs: IStaff[];
  itemUpdate: IStaff | null;
  setItemUpdate: (staff: IStaff | null) => void;
  addStaff: (staff: IStaff) => void;
  updateStaff: (id: number, staff: IStaff) => void;
  deleteStaff: (id: number) => void
  onCreateOrUpdate: (value: boolean) => void;
  isCreateOrUpdate: boolean;
  filter: FilterStaff,
  dataView: IStaff[],
  setDataView: React.Dispatch<React.SetStateAction<IStaff[]>>
  setFilter: React.Dispatch<React.SetStateAction<FilterStaff>>

  currentPage: number; // Thêm biến trạng thái cho trang hiện tại
  perPage: number; // Số lượng bản ghi trên mỗi trang
  totalPages: number; // Tổng số trang
  handleNextPage: () => void; // Hàm để chuyển sang trang tiếp theo
  handlePreviousPage: () => void; // Hàm để quay lại trang trước
  currentStaffs: IStaff[]; // Danh sách nhân viên hiển thị trên trang hiện tại
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
  filter: new FilterStaff(),
  dataView: [],
  setDataView: () => { },
  setFilter: () => { },
  currentPage: 0,
  perPage: 0,
  totalPages: 0,
  handleNextPage: () => { },
  handlePreviousPage: () => { },
  currentStaffs: [],
});

interface IProps {
  children: ReactNode;
}


const ListStaffProvider = ({ children }: IProps) => {
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);
  const [staffs, setStaffs] = useState<IStaff[]>(staffsData);
  // todo: item update
  const [itemUpdate, setItemUpdate] = useState<IStaff | null>(null);
  const [filter, setFilter] = useState<FilterStaff>(new FilterStaff());
  const [dataView, setDataView] = useState<IStaff[]>([]);

  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 10; 

  useEffect(() => {
    let dataTemp: IStaff[] = [];

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

  // TODO: pagination
  const totalPages = Math.ceil(dataView.length / perPage);
  const currentStaffs = dataView.slice(currentPage * perPage, (currentPage + 1) * perPage);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  
  const addStaff = (staff: IStaff) => {
    setStaffs((prevStaffs) => [...prevStaffs, staff]);
  };

  const updateStaff = (id: number, updatedStaff: IStaff) => {
    setStaffs((prevStaffs) =>
      prevStaffs.map((staff) => (staff.id === id ? updatedStaff : staff))
    );
  };

  const deleteStaff = (id: number) => {
    setStaffs((prevStaffs) => prevStaffs.filter((staff) => staff.id !== id));
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
      isCreateOrUpdate,
      onCreateOrUpdate,
      filter,
      dataView,
      setDataView,
      setFilter,
      currentPage,
      perPage,
      totalPages,
      handleNextPage,
      handlePreviousPage,
      currentStaffs
    }}>
      {children}
    </StaffContext.Provider>
  );
};

const useStaffContext = (): StaffContextType => {
  return useContext(StaffContext);
};

export { ListStaffProvider, useStaffContext };
