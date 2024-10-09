import React from 'react'
import ListStaff from '../containers/list-staff/listStaff'
import MainNavigation from '../../../based/components/common/mainNavigation';
import Header from '../../../based/components/common/Header';
import SubNavigation from '../../../based/components/common/subNavigation';
const StaffScreen = () => {
  return (

    <div className='flex h-screen'>
      <MainNavigation />
      <div className='flex flex-col w-screen'>
        <Header />
        <div className='py-2 px-3 relative bg-[#EEF3FE]'>
          <span className='text-xs font-medium'>Nhân viên / Danh sách nhân viên</span>
        </div>
        <div className='flex h-screen'>
          <SubNavigation />
          <ListStaff />

        </div>
      </div>

    </div>

  )
}

export default StaffScreen