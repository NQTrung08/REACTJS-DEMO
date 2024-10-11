import React from 'react';
import Icon from '@mdi/react';
import {
  mdiPencil,
  mdiDelete,
  mdiPhoneInTalkOutline,
  mdiEmailOutline,
  mdiAccountOutline,
} from '@mdi/js';
import { Switch } from 'antd';

import { StaffModel } from 'core-model';

import { useStaffContext } from 'core/src/modules/staff';


const CardListStaff = ({ staff, onEdit }: { staff: StaffModel, onEdit: () => void }) => {
  const { staffs,
    updateStaff,
    deleteStaff,
    isCreateOrUpdate,
    onCreateOrUpdate

  } = useStaffContext();

  const handleDeleteStaff = (e: React.MouseEvent<HTMLButtonElement>) => {
    const confirmDelete = window.confirm(`Bạn có chắc chắn muốn xóa nhân viên ${staff.name}?`);
    if (confirmDelete) {
      deleteStaff(staff.id);
    }
  }

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };



  return (
    <div className="flex group transition-all duration-200 justify-between items-center p-4 border-b">

      <div className='min-w-[592px] flex'>
        {/* Avatar */}
        <div className="flex items-center ">
          <img
            src={staff?.avatar || 'https://via.placeholder.com/50'}
            alt={`${staff.name} avatar`}
            className="rounded-full w-12 h-12 mr-4"
          />
        </div>

        {/* Info: Name, Phone, Email, Role */}
        <div className="flex flex-col">
          <div className="font-bold text-lg">{staff.name} ({staff.middleName})</div>
          <div className="flex gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Icon path={mdiPhoneInTalkOutline} size={1} />
              <span>{staff.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon path={mdiEmailOutline} size={1} />
              <span>{staff.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon path={mdiAccountOutline} size={1} />
              <span>{staff.role}</span>
            </div>
          </div>
        </div>

      </div>


      {/* Manager */}
      <div className="flex flex-col justify-center items-center min-w-[196px] w-[15%]">
        <span className="text-gray-500 text-xs">Người quản lý</span>
        <span className="font-semibold text-black text-xs">{staff.manager}</span>
      </div>


      <div className='min-w-[196px] w-[15%] items-center justify-center flex'>
        <button className="hidden group-hover:flex border font-medium items-center px-[12px] py-[10px] rounded-md mr-2
        "
          onClick={onEdit}
          >
          <Icon path={mdiPencil} size={1} className="mr-1" />
          Cập nhật
        </button>

      </div>

      {/* Switch and Delete */}
      <div className="flex justify-end items-center min-w-[196px] w-[15%]">
        <div className='flex items-center gap-12'>

          <Switch defaultChecked onChange={onChange} />
          <button className="flex items-center w-[40px] h-[40px]"
            onClick={handleDeleteStaff}>
            <Icon path={mdiDelete} size={1} className="mr-1" />
          </button>

        </div>

      </div>
    </div>
  );
};

export default CardListStaff;
