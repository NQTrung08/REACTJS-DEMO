import React, { useState } from 'react'
import MainNavigation from '../../../../based/components/layout/Navigation/mainNavigation';
import Header from '../../../../based/components/layout/Header/Header';
import SubNavigation from 'src/based/components/layout/Navigation/subNavigation';
import ButtonAdd from 'src/based/components/common/ButtonAdd';
import Search from 'src/based/components/common/Search';
import Filter from 'src/based/components/common/Filter';
import CardListStaff from '../../components/list-staff/cardListStaff';
import { useStaffContext } from '../../../../../../core/src/modules/staff';


import Icon from '@mdi/react';
import { mdiFilterMultipleOutline } from '@mdi/js';

import AddStaff from '../list-staff/addStaff'
import { Staff } from 'core/src/model/staff-model';

const ListStaff: React.FC = () => {
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);
  const [filterStaff, setFilterStaff] = useState<Staff[]>([]);
  const { staffs,
    addStaff,
  } = useStaffContext();

  const handleAddButtonClick = () => {
    setIsAddingNew(!isAddingNew);
  }

  const handleCancelAdd = () => {
    setIsAddingNew(false);
  }

  const handleAddStaff = (staff: Staff) => {
    addStaff(staff);
    setIsAddingNew(false);
  };

  return (
    <div className='flex-1 py-1'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center py-2 px-3'>
          <span className='font-[550] text-[18px]'>
            {isAddingNew ? 'Thêm mới nhân viên' : 'Danh sách nhân viên'}
          </span>
          <ButtonAdd onClick={handleAddButtonClick} />
        </div>

        {isAddingNew && (
          <div className="p-4">
            <AddStaff onCancel={handleCancelAdd} onAdd={handleAddStaff} />
          </div>
        )}
      </div>

      <div className='border-y p-2 flex justify-between items-center'>
        <Search
          data={staffs}
          placeholder='Tìm kiếm nhân viên...'
          searchField='name'
          onResults={(results) => setFilterStaff(results)}
        />
        {/* Filter */}
        <Filter />
      </div>

      <div className='flex gap-2 p-2 items-center text-xs'>
        <Icon path={mdiFilterMultipleOutline} className='size-4' />
        <span className='text-[#000] font-[460]'>
          Trạng thái:
        </span>
        <div className='bg-gray-200 py-1 px-2 rounded-lg'>
          <span>Hoạt động</span>
        </div>
        <div className='bg-blue-100 py-1 px-2 rounded-lg'>
          <span className='text-blue-600 font-[550]'>Ngừng hoạt động</span>
        </div>
      </div>
      <div className='bg-gray-200 py-1 px-2'>
        <span className='text-xs text-gray-500'>
          Có tất cả {staffs.length} tài khoản nhân viên
        </span>
      </div>
      {/* list staff */}
      <div className={`overflow-y-auto ${isAddingNew ? 'h-[280px]' : 'h-[calc(100vh-300px)]'}`}>

        {
          filterStaff.length > 0 ?
            filterStaff.map((staff) => (
              <CardListStaff key={staff.id} staff={staff} />
            )) :
            staffs.map((staff) => (
              <CardListStaff key={staff.id} staff={staff} />
            ))}
      </div>
    </div>
  )
}

export default ListStaff