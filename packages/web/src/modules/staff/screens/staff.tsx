import React from 'react'
import ListStaff from '../containers/list-staff/listStaff'
import MainNavigation from '../../../based/components/layout/Navigation/mainNavigation';
import Header from '../../../based/components/layout/Header/Header';
import SubNavigation from '../../../based/components/layout/Navigation/subNavigation';
import { ListStaffProvider } from '../../../../../core/src/modules/staff';

const StaffScreen = () => {
  return (
    <ListStaffProvider>
      <ListStaff />
    </ListStaffProvider>
  )


}

export default StaffScreen