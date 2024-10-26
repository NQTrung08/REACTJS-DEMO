import {
  mdiAccountLockOutline,
  mdiBullhornVariantOutline,
  mdiCarLiftedPickup,
  mdiChartBoxPlusOutline,
  mdiChatProcessingOutline,
  mdiCogOutline,
  mdiCreditCardOutline,
  mdiFormatListBulleted,
  mdiInvoiceTextMultipleOutline,
  mdiInvoiceTextPlus,
  mdiMonitorDashboard,
  mdiPackageVariantClosed,
  mdiPrinterPosEditOutline,
  mdiStorefrontOutline
} from '@mdi/js';
import Icon from '@mdi/react';

export const MainNavigation = () => {
  // Mảng chứa thông tin icon và tiêu đề
  const navigationItems = [
    { icon: mdiFormatListBulleted, title: '' },
    { icon: mdiMonitorDashboard, title: 'Dashboard' },
    { icon: mdiBullhornVariantOutline, title: 'Marketing' },
    { icon: mdiPrinterPosEditOutline, title: 'Sales' },
    { icon: mdiStorefrontOutline, title: 'Kho' },
    { icon: mdiCarLiftedPickup, title: 'Vận chuyển' },
    { icon: mdiCreditCardOutline, title: 'Thanh toán' },
    { icon: mdiChartBoxPlusOutline, title: 'Báo cáo' },
    { icon: mdiAccountLockOutline, title: 'Nhân viên' },
    { icon: mdiPackageVariantClosed, title: 'Sản phẩm' },
    { icon: mdiInvoiceTextMultipleOutline, title: 'Đơn hàng' },
    { icon: mdiChatProcessingOutline, title: 'Chat' },
    { icon: mdiInvoiceTextPlus, title: 'Kế toán' },

  ];

  return (
    <div className='bg-[#EEF3FE] py-4 flex flex-col text-xs font-medium px-2'>
      <div className='flex flex-col items-center flex-1'>
        {navigationItems.map((item, index) => (
          <div key={index} className='flex flex-col items-center mb-4'>
            <Icon path={item.icon} size={1} />
            {item.title && <span className='whitespace-nowrap'>{item.title}</span>}
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center mt-auto'>
        <Icon path={mdiCogOutline} size={1} />
        <span>Settings</span>
      </div>
    </div>
  );
};

