import React from 'react';
import Icon from '@mdi/react';
import {
  mdiPencil,
  mdiDelete,
  mdiPhoneInTalkOutline,
  mdiEmailOutline,
  mdiAccountOutline,
} from '@mdi/js';

interface Staff {
  id: number;
  name: string;
  middleName: string;
  phone: string;
  email: string;
  role: string;
  manager: string;
  avatar: string;
}

const CardListStaff: React.FC<{ staff: Staff }> = ({ staff }) => {
  return (
    <div className="grid grid-cols-5 items-center p-4 border-b">
     
     <div className='col-span-3 flex'>
       {/* Avatar */}
       <div className="flex items-center">
        <img
          src={staff?.avatar || 'https://via.placeholder.com/50'}
          alt={`${staff.name} avatar`}
          className="rounded-full w-12 h-12 mr-4"
        />
      </div>

      {/* Info: Name, Phone, Email, Role */}
      <div className="flex flex-col ">
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
      <div className="flex flex-col col-span-1 justify-center items-center">
        <span className="text-gray-500 text-xs">Người quản lý</span>
        <span className="font-semibold text-black text-xs">{staff.manager}</span>
      </div>

      {/* Update and Delete */}
      <div className="flex items-center justify-end col-span-1">
        <button className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
          <Icon path={mdiPencil} size={1} className="mr-1" />
          Cập nhật
        </button>
        <button className="flex items-center bg-red-500 text-white px-2 py-1 rounded-md">
          <Icon path={mdiDelete} size={1} className="mr-1" />
          Xóa
        </button>
      </div>
    </div>
  );
};

export default CardListStaff;
