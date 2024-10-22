import {
  mdiAccountCogOutline,
  mdiCardAccountDetailsOutline,
  mdiCardAccountPhoneOutline
} from '@mdi/js';
import { SubNavigation } from '../../../../based/components/layout/Navigation/subNavigation';


export const SubNavStaff = () => {
  const subMenu = [
    {
      icon: mdiCardAccountDetailsOutline,
      title: 'Danh sách nhân viên',
      path: '/staff'
    },
    {
      icon: mdiAccountCogOutline,
      title: 'Quản lý vai trò',
      path: '/staff/role'
    },
    {
      icon: mdiCardAccountPhoneOutline,
      title: 'Quản lý nhân viên Sale',
      path: '/staff/sale'
    }
  ];

  return (
   <SubNavigation subNavData={subMenu} />
  );
}

