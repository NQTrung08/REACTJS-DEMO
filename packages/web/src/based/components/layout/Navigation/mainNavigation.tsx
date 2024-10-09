import React from 'react';
import Icon from '@mdi/react';
import {
  mdiFormatListBulleted,
  mdiMonitorDashboard,
  mdiBullhornVariantOutline,
  mdiPrinterPosEditOutline,
  mdiStorefrontOutline,
  mdiCarLiftedPickup,
  mdiCreditCardOutline,
  mdiChartBoxPlusOutline,
  mdiAccountLockOutline,
  mdiPackageVariantClosed,
  mdiInvoiceTextMultipleOutline,
  mdiCogOutline // settings
} from '@mdi/js';

const MainNavigation = () => {
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
  ];

  return (
    <div className='bg-[#EEF3FE] py-4 flex flex-col text-[12px] font-[500] px-2'>
      <div className='flex-1'>
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

export default MainNavigation;
