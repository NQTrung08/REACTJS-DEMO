import { ListStaffProvider } from 'core-modules';
import { LayoutStaff } from '../containers/staff/layout-staff';

export const StaffScreen = () => {
  return (
    <ListStaffProvider>
        <LayoutStaff />
    </ListStaffProvider>
  )


}

