
import { Search } from '../../common/Search';
import {
  SortDropdownStaff
} from '../../common/sort-staff';

import { StatusFilterStaff } from '../../common/status-filter-staff';

export const Advanced = () => {

  return (
    <div>
      <div className='border-y p-2 flex justify-between items-center'>
        <Search placeholder='Tìm kiếm nhân viên'/>
        {/* Filter */}
        <SortDropdownStaff />
      </div>

      <StatusFilterStaff />

    </div>

  )
}
