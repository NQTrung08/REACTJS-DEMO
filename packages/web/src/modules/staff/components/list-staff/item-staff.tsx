import {
  mdiAccountOutline,
  mdiDelete,
  mdiEmailOutline,
  mdiPencil,
  mdiPhoneInTalkOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import { Switch } from 'antd';
import React from 'react';

import { StaffModel } from 'core-model';

import { useStaffContext } from 'core/src/modules/staff';


const ItemStaff = ({ staff, onEdit }: { staff: StaffModel, onEdit: () => void }) => {
  const { staffs,
    updateStaff,
    deleteStaff,

  } = useStaffContext();

  const handleDeleteStaff = (e: React.MouseEvent<HTMLButtonElement>) => {
    const confirmDelete = window.confirm(`Bạn có chắc chắn muốn xóa nhân viên ${staff.fullName}?`);
    if (confirmDelete) {
      deleteStaff(staff.id);
    }
  }

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };



  return (
    <div className="flex h-[56px] group transition-all duration-200 justify-between items-center p-4 border-b hover:shadow-md">

      <div className='min-w-[592px] flex'>
        {/* Avatar */}
        <div className="flex items-center">
          <img
            src={staff?.avatar || 'https://via.placeholder.com/50'}
            alt={`${staff.fullName} avatar`}
            className="rounded-full w-8 h-8 mr-4"
          />
        </div>

        {/* Info: Name, Phone, Email, Role */}
        <div className="flex flex-col">
          <div className="font-medium text-black text-md">{staff.fullName} ({staff.middleName})</div>
          <div className="flex gap-2 mt-1 text-xs">
            <div className="flex items-center gap-1">
              <Icon path={mdiPhoneInTalkOutline} className='w-[12px] h-[12px]' />
              <span>{staff.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon path={mdiEmailOutline} className='w-[12px] h-[12px]' />
              <span>{staff.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon path={mdiAccountOutline} className='w-[12px] h-[12px]' />
              <span>{staff.role}</span>
            </div>
          </div>
        </div>

      </div>


      {/* Manager */}
      <div className="flex flex-col justify-center items-center min-w-[196px] w-[15%]">
        <span className="text-[#757575] text-xs mb-[2px]">Người quản lý</span>
        <span className="font-medium text-black text-md">{staff.manager}</span>
      </div>


      <div className='min-w-[196px] w-[15%] items-center justify-center flex'>
        <button className="hidden border-[#ECEDEF] group-hover:flex border font-medium items-center px-[12px] py-[8px] rounded-[2px] mr-2
        "
          onClick={onEdit}
        >
          <Icon path={mdiPencil} className="mr-2 w-[16px] h-[16px]" />
          Cập nhật
        </button>

      </div>

      {/* Switch and Delete */}
      <div className="flex justify-end items-center min-w-[196px] w-[15%]">
        <div className='flex items-center gap-12'>
          <div className='flex items-center justify-center w-[20px] h-[12px]'>
            <Switch onChange={onChange} size="small"/>
          </div>
          <button className="flex items-center justify-center w-[40px] h-[40px]"
            onClick={handleDeleteStaff}>
            <Icon path={mdiDelete} className="w-[20px] text-[#AFAFAF] hover:text-red-500" />
          </button>

        </div>

      </div>
    </div>
  );
};

export default ItemStaff;
