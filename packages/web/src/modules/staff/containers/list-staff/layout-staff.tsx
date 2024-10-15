

import { StaffModel } from "core-model";
import { CreateOrUpdateProvider, useStaffContext } from 'core-modules';
import Toolbar from 'src/based/components/common/Toolbar';
import {
  Advanced
} from 'src/based/components/layout/Advanced/advanced';
import HeaderListStaff from '../../components/list-staff/header';
import {
  CreateOrUpdateStaffContainer
} from './create-or-update-staff';
import ListStaff from './list-staff';
const LayoutStaff = () => {

  // const [filteredViewStaff, setfilteredViewStaff] = useState<StaffModel[]>([]);
  const { staffs,
    addStaff,
    updateStaff,
    isCreateOrUpdate,
    onCreateOrUpdate,
    itemUpdate,
    setItemUpdate,
    filter,
    dataView,
    setDataView,
    setFilter,
    filterStaff,
    searchStaff,
    deleteStaff

  } = useStaffContext();


  // useEffect(() => {
  //   setfilteredViewStaff(staffs);
  // }, [staffs]);

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
    <div className='w-full h-full py-1'>

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


      {/* TODO: advanced */}
      <Advanced />
      {/* TODO: toolbar */}
      <Toolbar quantity={dataView.length} title='tài khoản nhân viên' />

      {/* List Staff */}
      <ListStaff
        filteredViewStaff={dataView}
        isCreateOrUpdate={isCreateOrUpdate}
        onEdit={handleEditStaff}
      />
    </div>
  )
}

export default LayoutStaff