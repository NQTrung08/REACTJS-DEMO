import {
  mdiAccountCircleOutline,
  mdiBellOutline,
  mdiCartOutline,
  mdiChevronDown,
  mdiStorefrontOutline
} from '@mdi/js';
import Icon from '@mdi/react';
import { } from 'react';

const Header = () => {


  return (
    <header className='bg-white shadow-md w-full flex items-center justify-between px-4 py-2'>
      {/* Logo và tên */}
      <div className='flex items-center'>
        <span className='text-lg font-semibold text-green-500'>CLOUD
          <span className='text-green-100 font-[500]'>
            WORKS</span>
        </span>
      </div>

      {/* infor */}
      <div className='flex items-center gap-4 border-2 rounded-sm p-1'>

        {/* Kho image */}
        <div className='flex items-center bg-gray-100 py-1 px-4 rounded-sm'>
          <Icon path={mdiStorefrontOutline} size={1} />
        </div>
        {/* Dropdown chọn chi nhánh */}
        {/* Dropdown */}

        <div className='flex flex-col'>
          <div className='flex items-center'>
            <span className='block font-semibold text-xs'>Kho hàng Trần Đại Nghĩa cơ sở 1</span>
            <Icon path={mdiChevronDown} size={0.5} />
          </div>
          <span className='text-gray-500 text-sm'>Địa chỉ: Trần Đại Nghĩa, Quận 1, TP.HCM</span>
        </div>



        {/* Giỏ hàng */}
        <div className='flex items-center size-4'>
          <Icon path={mdiCartOutline} size={1} />
        </div>

        {/* Notification */}
        <div className='flex items-center size-4'>
          <Icon path={mdiBellOutline} size={1} />
        </div>

        {/* Avatar người dùng */}
        <div className='flex items-center'>
          <Icon path={mdiAccountCircleOutline} size={1} />
        </div>
      </div >
    </header >
  );
};

export default Header;
