

import { CreateOrUpdateProvider } from 'core-modules';
import { Toolbar } from 'src/based/components/common/Toolbar';
import { Advanced } from 'src/based/components/layout/Advanced/advanced';
import { HeaderListStaff } from '../../components/staff/header';
import { CreateOrUpdateStaffContainer } from './create-or-update-staff';
import { ListStaff } from './list-staff';
export const LayoutStaff = () => {
  return (
    <div className='w-full h-full py-1 overflow-y-auto relative'>

      {/*TODO: Header */}
      <HeaderListStaff />
      {/* header end */}

      <CreateOrUpdateProvider>

        <CreateOrUpdateStaffContainer />

      </CreateOrUpdateProvider>


      <div className="flex flex-col w-full h-full">
        {/* TODO: advanced */}
        <Advanced />
        {/* TODO: toolbar */}
        {/* // TODO : CREATE thêm toolbar for nhân viên */}
        <Toolbar title='tài khoản nhân viên'/>

        {/* List Staff */}
        <ListStaff />
      </div>
    </div>
  )
}
