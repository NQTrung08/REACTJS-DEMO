import { ListStaffProvider } from 'core-modules';
import { BreadCrumb } from 'src/based/components/common/BreadCrumb';
import { SubNavStaff } from '../components/staff/sub-nav-staff';
import { LayoutStaff } from '../containers/staff/layout-staff';

export const StaffScreen = () => {
  return (
    <ListStaffProvider>
      <BreadCrumb title='Nhân viên / Danh sách nhân viên' />
      <div className='flex h-full w-full'>
        <SubNavStaff />
        <LayoutStaff />
      </div>

    </ListStaffProvider>
  )


}

