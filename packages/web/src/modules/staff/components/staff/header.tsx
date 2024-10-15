import {
  useStaffContext
} from 'core-modules';

import { ButtonAdd } from 'src/based/components/common/ButtonAdd';

export const HeaderListStaff = ({
}) => {
  const {
    isCreateOrUpdate,
    onCreateOrUpdate,
    itemUpdate,
  } = useStaffContext();

  return (
    <div className='flex justify-between items-center py-2 px-3 border-b'>
      {/*  */}
      <span className='font-[550] text-[18px]'>
        {itemUpdate 
          ? 'Cập nhật thông tin nhân viên' 
          : (isCreateOrUpdate ? 'Thêm mới nhân viên' : 'Danh sách nhân viên')}
      </span>
      <ButtonAdd onClick={() => onCreateOrUpdate(!isCreateOrUpdate)}
        title={itemUpdate ? 'Cập nhật' : 'Thêm mới'} />
    </div>
  )
}
