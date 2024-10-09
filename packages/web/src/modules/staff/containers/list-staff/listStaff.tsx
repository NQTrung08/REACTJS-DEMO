import React from 'react'
import MainNavigation from '../../../../based/components/layout/Navigation/mainNavigation';
import Header from '../../../../based/components/layout/Header/Header';
import SubNavigation from 'src/based/components/layout/Navigation/subNavigation';
import ButtonAdd from 'src/based/components/common/ButtonAdd';
import Search from 'src/based/components/common/Search';
import CardListStaff from '../../components/list-staff/cardListStaff';

import Icon from '@mdi/react';
import { mdiFilterMultipleOutline } from '@mdi/js';

const listStaff = () => {
  const staffs = [
    {
      id: 1,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân viên Sale',
      manager: 'SM Nghĩa Trần',
      avatar: ''
    }, {
      id: 2,
      name: 'Đ nonprofits',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân.nlm Sale',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 3,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 4,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 5,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 6,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 7,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 8,
      name: 'Đ Burma',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân viên Sale',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }, {
      id: 9,
      name: 'Đặng Thị Chinh',
      middleName: 'chinh dt',
      phone: '0123456789',
      email: 'chinhdt',
      role: 'Nhân làm',
      manager: 'SM Nghĩa Tr-Christian',
      avatar: ''
    }
  ]

  return (
    <div className='flex-1 py-1'>
      <div className='flex justify-between items-center py-2 px-3'>
        <span className='font-[550] text-[18px]'>
          Danh sách nhân viên
        </span>
        <ButtonAdd />
      </div>

      {/* Search */}
      <Search />

      {/* Status */}
      <div className='flex gap-2 p-2 items-center text-xs'>
        <Icon path={mdiFilterMultipleOutline} className='size-4' />
        <span className='text-[#000] font-[460]'>
          Trạng thái:
        </span>
        <div className='bg-gray-200 py-1 px-2 rounded-lg'>
          <span>Hoạt động</span>
        </div>
        <div className='bg-blue-100 py-1 px-2 rounded-lg'>
          <span className='text-blue-600 font-[550]'>Ngừng họat động</span>
        </div>
      </div>
      {/* <Status /> */}

      {/* total amount staff */}
      <div className='bg-gray-200 py-1 px-2'>
        <span className='text-xs text-gray-500'>
          Có tất cả {
            staffs.length
          } tài khoản nhân viên
        </span>

      </div>

      {/* card list staff*/}
      <div className='overflow-y-auto h-[calc(100vh-300px)]'>
        {
          staffs.map((staff) => {
            return <CardListStaff key={staff.id} staff={staff} />
          })
        }
      </div>

    </div>
  )
}

export default listStaff