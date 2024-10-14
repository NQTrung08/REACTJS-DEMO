import { useEffect, useState } from 'react';
import Filter from 'src/based/components/common/Filter';
import Search from 'src/based/components/common/Search';


import { mdiFilterMultipleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { StaffModel } from "core-model";
import { useStaffContext } from 'core-modules';
import Toolbar from 'src/based/components/common/Toolbar';
import HeaderListStaff from '../../components/list-staff/header';
import ItemStaff from '../../components/list-staff/item-staff';
import {
  CreateOrUpdateStaffContainer
} from './create-or-update-staff';

const ListStaff = () => {

  const [filteredViewStaff, setfilteredViewStaff] = useState<StaffModel[]>([]);
  const { staffs,
    addStaff,
    updateStaff,
    isCreateOrUpdate,
    onCreateOrUpdate,
    selectedStaff,
    setSelectedStaff

  } = useStaffContext();


  useEffect(() => {
    setfilteredViewStaff(staffs);
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
   
        {/*TODO: Header */}
        <HeaderListStaff initialData={selectedStaff} />
        {/* header end */}

        {isCreateOrUpdate && (
            <CreateOrUpdateStaffContainer onCancel={handleCancelAdd}
              onSubmit={handleCreateOrUpdateStaff}
              initialData={selectedStaff}
            />
        )}

        {/* TODO: advanced */}
      <div className='border-y p-2 flex justify-between items-center'>
        <Search
          data={staffs}
          placeholder='Tìm kiếm nhân viên...'
          searchField='name'
          onResults={(results) => setfilteredViewStaff(results)}
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

      {/* TODO: toolbar */}
      <Toolbar quantity={filteredViewStaff.length} title='Tài khoản nhân viên' />
      
      {/* list staff */}
      {/* TODO: merge filterStaff and viewStaff */}
      <div className={`overflow-y-auto ${isCreateOrUpdate ? 'max-h-[calc(100vh-600px)]' : 'h-[calc(100vh-300px)]'}`}>
      {filteredViewStaff.length > 0 ? (
          filteredViewStaff.map((staff) => (
            <ItemStaff key={staff.id} staff={staff} onEdit={() => handleEditStaff(staff)} />
          ))
        ) : (
          <span className=''>Không có nhân viên nào để hiển thị.</span>
        )}
      </div>
    </div>
  )
}

export default ListStaff