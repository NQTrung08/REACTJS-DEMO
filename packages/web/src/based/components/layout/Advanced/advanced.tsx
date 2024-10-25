
import { SearchStaff } from '../../../../modules/staff/components/staff/Search-staff';
import {
  SortDropdownStaff
} from '../../common/sort-staff';

import { StatusFilterStaff } from '../../../../modules/staff/components/staff/status-filter-staff';

export const Advanced = () => {

  return (
    <div>
      <div className='border-y p-2 flex justify-between items-center'>
        <SearchStaff placeholder='Tìm kiếm nhân viên'/>
        {/* Filter */}
        <SortDropdownStaff />
      </div>

      <StatusFilterStaff />

    </div>

  )
}
