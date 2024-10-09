/* eslint-disable no-unused-vars */
import {
  // action,
  // flow,
  // autorun,
  // computed,
  makeAutoObservable,
  observable,
  makeObservable,
  action
} from 'mobx';
import { clearPersistedStore, getPersistedStore, makePersistable } from 'mobx-persist-store';
import { ObserverablePersis, localStore, platform } from './ObserverablePersis';

class CompanyInfo {
  id!: string;
  name!: string;
  address!: string;
}
export interface Staff {
  id: number;
  name: string;
  middleName: string;
  phone: string;
  email: string;
  role: string;
  manager: string;
  avatar: string;
}

export class StaffStore {
  staffs: Staff[] = [];

  constructor() {
    makeObservable(this, {
      staffs: observable,
      addStaff: action,
      updateStaff: action,
      deleteStaff: action,
      searchStaff: action,
    });

    // tạo dữ liệu mẫu
    this.staffs = [
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
    ]

  }

  addStaff = (staff: Staff) => {
    this.staffs.push(staff);
  }

  updateStaff = (staff: Staff) => {
    const index = this.staffs.findIndex(s => s.id === staff.id);
    if (index !== -1) {
      this.staffs[index] = staff;
    }
  };

  deleteStaff = (id: number) => {
    this.staffs = this.staffs.filter(s => s.id !== id);
  };

  searchStaff = (query: string) => {
    this.staffs = this.staffs.filter(s =>
      s.name.toLowerCase().includes(query.toLowerCase())
    );
  };



}