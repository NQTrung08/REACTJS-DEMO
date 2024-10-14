import { CreateOrUpdateProvider, ListStaffProvider } from '../../../../../core/src/modules/staff';
import ListStaff from '../containers/list-staff/listStaff';

const StaffScreen = () => {
  return (
    <ListStaffProvider>
      <CreateOrUpdateProvider>
        <ListStaff />
      </CreateOrUpdateProvider>
    </ListStaffProvider>
  )


}

export default StaffScreen