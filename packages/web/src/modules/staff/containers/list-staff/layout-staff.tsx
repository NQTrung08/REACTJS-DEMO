import { useEffect, useState } from 'react';


import { StaffModel } from "core-model";
import { CreateOrUpdateProvider, useStaffContext } from 'core-modules';
import Toolbar from 'src/based/components/common/Toolbar';
import Advanced from 'src/based/components/layout/Advanced/advanced';
import HeaderListStaff from '../../components/list-staff/header';
import {
  CreateOrUpdateStaffContainer
} from './create-or-update-staff';
import ListStaff from './list-staff';
const LayoutStaff = () => {

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
    <div className='w-full h-full py-1'>

      {/*TODO: Header */}
      <HeaderListStaff initialData={selectedStaff} />
      {/* header end */}

      <CreateOrUpdateProvider>
        {isCreateOrUpdate && (
          <CreateOrUpdateStaffContainer onCancel={handleCancelAdd}
            onSubmit={handleCreateOrUpdateStaff}
            initialData={selectedStaff}
          />
        )}

      </CreateOrUpdateProvider>


      {/* TODO: advanced */}
      <Advanced setfilteredViewStaff={setfilteredViewStaff} />
      {/* TODO: toolbar */}
      <Toolbar quantity={filteredViewStaff.length} title='Tài khoản nhân viên' />

      {/* List Staff */}
      <ListStaff
        filteredViewStaff={filteredViewStaff}
        isCreateOrUpdate={isCreateOrUpdate}
        onEdit={handleEditStaff}
      />
    </div>
  )
}

export default LayoutStaff