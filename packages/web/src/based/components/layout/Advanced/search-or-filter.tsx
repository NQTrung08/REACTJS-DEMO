import React from 'react'

import Filter from '../../common/Filter'
import Search from '../../common/Search'
import { useStaffContext } from 'core-modules';

const SearchOrFilter = () => {
  const {
    staffs
  } = useStaffContext();
  const [filterStaff, setFilterStaff] = React.useState(staffs);
  return (
    <div className='border-y p-2 flex justify-between items-center'>
        <Search
          data={staffs}
          placeholder='Tìm kiếm nhân viên...'
          searchField='name'
          onResults={(results) => setFilterStaff(results)}
        />
        {/* Filter */}
        <Filter />
      </div>
  )
}

export default SearchOrFilter