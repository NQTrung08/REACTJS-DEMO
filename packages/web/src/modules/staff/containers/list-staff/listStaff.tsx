import { useEffect, useState } from 'react';
import Filter from 'src/based/components/common/Filter';
import Search from 'src/based/components/common/Search';
import CardListStaff from '../../components/list-staff/cardListStaff';


import { mdiFilterMultipleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { StaffModel } from "core-model";
import { useStaffContext } from 'core-modules';
import HeaderListStaff from '../../components/list-staff/header';
import {
  CreateOrUpdateStaffContainer
} from './create-or-update-staff';

const ListStaff = () => {
  const [viewStaff, setviewStaff] = useState<StaffModel[]>([]);

  const [filterStaff, setFilterStaff] = useState<StaffModel[]>([]);
  const { staffs,
    addStaff,
    updateStaff,
    isCreateOrUpdate,
    onCreateOrUpdate,
    selectedStaff,
    setSelectedStaff

  } = useStaffContext();


  useEffect(() => {
    setviewStaff(staffs);
    setFilterStaff(staffs);
  }, [staffs]);

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
        <div className='bg-gray-200 py-1 px-2 rounded-[24px]'>
          <span>Hoạt động</span>
        </div>
        <div className='bg-blue-100 py-1 px-2 rounded-[24px]'>
          <span className='text-blue-600 font-[550]'>Ngừng hoạt động</span>
        </div>
      </div>
      <div className='bg-gray-200 py-1 px-2'>
        <span className='text-xs text-gray-500'>
          Có tất cả {viewStaff.length} tài khoản nhân viên
        </span>
      </div>
      {/* list staff */}
      <div className={`overflow-y-auto ${isCreateOrUpdate ? 'max-h-[calc(100vh-600px)]' : 'h-[calc(100vh-300px)]'}`}>
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