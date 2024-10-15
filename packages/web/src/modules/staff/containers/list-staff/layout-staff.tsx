

import { StaffModel } from "core-model";
import { CreateOrUpdateProvider, useStaffContext } from 'core-modules';
import { useState } from "react";
import { Toolbar } from 'src/based/components/common/Toolbar';
import { Advanced } from 'src/based/components/layout/Advanced/advanced';
import { HeaderListStaff } from '../../components/list-staff/header';
import { CreateOrUpdateStaffContainer } from './create-or-update-staff';
import { ListStaff } from './list-staff';
export const LayoutStaff = () => {
  const { staffs,
    addStaff,
    updateStaff,
    isCreateOrUpdate,
    onCreateOrUpdate,
    itemUpdate,
    setItemUpdate,
    filter,
    dataView,
  } = useStaffContext();
  
  // TODO: pagination
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 10;

  const totalPages = Math.ceil(dataView.length / perPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * perPage;
  const currentStaffs = dataView.slice(startIndex, startIndex + perPage);
  // end Pagination 
  const handleCancelAdd = () => {
    onCreateOrUpdate(false);
    setItemUpdate(null);
  }

  const handleCreateOrUpdateStaff = (staff: StaffModel) => {
    if (itemUpdate) {
      updateStaff(itemUpdate.id, staff);
      setItemUpdate(null);

    } else {
      addStaff(staff);
    }
    onCreateOrUpdate(false);

  };

  const handleEditStaff = (staff: StaffModel) => {
    setItemUpdate(staff);
    onCreateOrUpdate(true);
  };

  return (
    <div className='w-full h-full py-1 overflow-y-auto relative'>

      {/*TODO: Header */}
      <HeaderListStaff initialData={itemUpdate} />
      {/* header end */}

      <CreateOrUpdateProvider>
        {isCreateOrUpdate && (
          <CreateOrUpdateStaffContainer onCancel={handleCancelAdd}
            onSubmit={handleCreateOrUpdateStaff}
            initialData={itemUpdate}
          />
        )}
      </CreateOrUpdateProvider>


      <div className="flex flex-col w-full h-full">
        {/* TODO: advanced */}
      <Advanced />
      {/* TODO: toolbar */}
      <Toolbar quantity={dataView.length} title='tài khoản nhân viên'
        currentPage={currentPage} totalPages={totalPages} onNextPage={handleNextPage} onPreviousPage={handlePreviousPage} />

      {/* List Staff */}
      <ListStaff
        filteredViewStaff={currentStaffs}
        isCreateOrUpdate={isCreateOrUpdate}
        onEdit={handleEditStaff}
      />
      </div>
    </div>
  )
}
