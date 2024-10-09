import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StaffStore } from '../../../stores/StaffStore'; // Import lớp StaffStore
import { Staff } from 'core/src/model/staff-model'

// Kiểu cho context
interface StaffContextType {
  staffs: Staff[];
  addStaff: (staff: Staff) => void;
  updateStaff: (id: number, staff: Staff) => void;
  deleteStaff: (id: number) => void;
  searchStaff: (query: string) => void;
}

// Tạo context
const StaffContext = createContext<StaffContextType | null>(null);

interface IProps {
  children: ReactNode;
}

const StaffProvider: React.FC<IProps> = ({ children }) => {

  const [staffs, setStaffs] = useState<Staff[]>([
    {
      id: 1,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân viên Sale',
      manager: 'SM Nghĩa Trần',
      avatar: ''
    }, {
      id: 2,
      name: 'Đ nonprofits',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân.nlm Sale',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 3,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 4,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 5,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 6,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 7,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 8,
      name: 'Đ Burma',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân viên Sale',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 9,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }
  ]);

  const addStaff = (staff: Staff) => {
    setStaffs((prevStaffs) => [...prevStaffs, staff]);
  };

  const updateStaff = (id: number, updatedStaff: Staff) => {
    setStaffs((prevStaffs) =>
      prevStaffs.map((staff) => (staff.id === id ? updatedStaff : staff))
    );
  };

  const deleteStaff = (id: number) => {
    setStaffs((prevStaffs) => prevStaffs.filter((staff) => staff.id !== id));
  };

  const searchStaff = (query: string) => {
    setStaffs((prevStaffs) =>
      prevStaffs.filter((staff) =>
        staff.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <StaffContext.Provider value={{
      staffs, addStaff, updateStaff, deleteStaff, searchStaff   
    }}>
      {children}
    </StaffContext.Provider>
  );
};

// Hook để sử dụng StaffContext
const useStaffContext = (): StaffContextType => {
  const context = useContext(StaffContext);
  if (!context) {
    throw new Error('useStaffContext must be used within a StaffProvider');
  }
  return context;
};

export { StaffProvider, useStaffContext };
