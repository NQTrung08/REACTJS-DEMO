import {
  mdiCashRefund,
  mdiMonitorDashboard,
  mdiTextBoxSearchOutline
} from '@mdi/js';
import { SubNavigation } from 'src/based/components/layout/Navigation/subNavigation';


export const SubNavAccountant = () => {
  const subMenu = [
    {
     icon: mdiMonitorDashboard, title: 'Dashboard',
     path: '/accountant'
    },
    {
      icon: mdiTextBoxSearchOutline,
      title: 'Đề nghị thanh toán',
      path: '/accountant/payment-approve'
    },
    {
      icon: mdiCashRefund,
      title: 'Tạm ứng/hoàn ứng',
      path: '/accountant/advance-refund'
    }
  ];

  return (
   <SubNavigation subNavData={subMenu} />
  );
}

