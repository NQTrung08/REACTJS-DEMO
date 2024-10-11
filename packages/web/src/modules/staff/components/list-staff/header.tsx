import React from 'react'
import {
  useStaffContext
} from 'core-modules'

import ButtonAdd from 'src/based/components/common/ButtonAdd';

const HeaderListStaff = () => {
  const {
    isCreateOrUpdate,
    onCreateOrUpdate
  } = useStaffContext();
  return (
    <div className='flex justify-between items-center py-2 px-3 border-b'>
          {/*  */}
          <span className='font-[550] text-[18px]'>
            {isCreateOrUpdate ? 'Thêm mới nhân viên' : 'Danh sách nhân viên'}
          </span>
          <ButtonAdd onClick={() => onCreateOrUpdate(!isCreateOrUpdate)} title='Thêm mới' />
        </div>
  )
}

export default HeaderListStaff