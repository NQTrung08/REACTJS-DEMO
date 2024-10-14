import { ListStaffProvider } from '../../../../../core/src/modules/staff';
import LayoutStaff from '../containers/list-staff/layout-staff';

const StaffScreen = () => {
  return (
    <ListStaffProvider>
        <LayoutStaff />
    </ListStaffProvider>
  )


}

export default StaffScreen