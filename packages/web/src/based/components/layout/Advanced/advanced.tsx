
import { useStaffContext } from 'core-modules';
import Search from '../../common/Search';
import {
  SortDropdown
} from '../../common/sort';

import { StatusFilter } from '../../common/status-filter';

export const Advanced = () => {

  const { filter, setFilter } = useStaffContext();
  return (
    <div>
      <div className='border-y p-2 flex justify-between items-center'>
        <Search placeholder='Tìm kiếm nhân viên' filter={filter} setFilter={setFilter} />
        {/* Filter */}
        <SortDropdown />
      </div>

      <StatusFilter />

    </div>

  )
}
