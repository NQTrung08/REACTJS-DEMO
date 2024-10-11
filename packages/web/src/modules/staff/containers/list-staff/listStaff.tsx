import React, { useState, useEffect } from 'react'
import MainNavigation from '../../../../based/components/layout/Navigation/mainNavigation';
import SubNavigation from 'src/based/components/layout/Navigation/subNavigation';
import ButtonAdd from 'src/based/components/common/ButtonAdd';
import Search from 'src/based/components/common/Search';
import Filter from 'src/based/components/common/Filter';
import CardListStaff from '../../components/list-staff/cardListStaff';


import Icon from '@mdi/react';
import { mdiFilterMultipleOutline } from '@mdi/js';
import {StaffModel} from "core-model"
import {
  CreateOrUpdateStaffContainer
} from './create-or-update-staff';
import { useStaffContext } from 'core-modules';
import HeaderListStaff from '../../components/list-staff/header'

const ListStaff = () => {
  const [viewStaff, setviewStaff] = useState<StaffModel[]>([]);

  const [filterStaff, setFilterStaff] = useState<StaffModel[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<StaffModel | null>(null);
  const { staffs,
    addStaff,
    updateStaff,
    isCreateOrUpdate,
    onCreateOrUpdate
  } = useStaffContext();


  useEffect(() => {
    setviewStaff(staffs);
    setFilterStaff(staffs);
  }, [staffs]);

  const handleCreateOrUpdateButtonClick = () => {
    onCreateOrUpdate(!isCreateOrUpdate);
  }

  const handleCancelAdd = () => {
    onCreateOrUpdate(false);
    setSelectedStaff(null);
  }

  const handleCreateOrUpdateStaff = (staff: StaffModel) => {
    if (selectedStaff) {
      updateStaff(selectedStaff.id, staff);
      setSelectedStaff(null);

    } else {
      addStaff(staff);
    }
    onCreateOrUpdate(false);

  };

  const handleEditStaff = (staff: StaffModel) => {
    setSelectedStaff(staff);
    onCreateOrUpdate(true);
  };

  return (
    <div className='w-full py-1'>
      <div className='flex flex-col'>
        {/*TODO: Header */}
        <HeaderListStaff />
        {/* header end */}

        {isCreateOrUpdate && (
          <div className="p-4">
            <CreateOrUpdateStaffContainer onCancel={handleCancelAdd}
              onSubmit={handleCreateOrUpdateStaff}
              initialData={selectedStaff}
            />
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
          Có tất cả {viewStaff.length} tài khoản nhân viên
        </span>
      </div>
      {/* list staff */}
      <div className={`overflow-y-auto ${isCreateOrUpdate ? 'h-[280px]' : 'h-[calc(100vh-300px)]'}`}>
        {
          filterStaff.length > 0 ?
            filterStaff.map((staff) => (
              <CardListStaff key={staff.id} staff={staff} onEdit={() => handleEditStaff(staff)} />
            )) :
            viewStaff.map((staff) => (
              <CardListStaff key={staff.id} staff={staff} onEdit={() => handleEditStaff(staff)} />
            ))}
      </div>
    </div>
  )
}

export default ListStaff