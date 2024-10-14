import { StaffModel } from 'core-model';
import {
  useStaffContext
} from 'core-modules';

import ButtonAdd from 'src/based/components/common/ButtonAdd';

interface HeaderListProps {
  initialData?: StaffModel | null; 

}

const HeaderListStaff = ({
  initialData,
} : HeaderListProps) => {
  const {
    isCreateOrUpdate,
    onCreateOrUpdate
  } = useStaffContext();

  return (
    <div className='flex justify-between items-center py-2 px-3 border-b'>
      {/*  */}
      <span className='font-[550] text-[18px]'>
        {initialData 
          ? 'Cập nhật thông tin nhân viên' 
          : (isCreateOrUpdate ? 'Thêm mới nhân viên' : 'Danh sách nhân viên')}
      </span>
      <ButtonAdd onClick={() => onCreateOrUpdate(!isCreateOrUpdate)}
        title={initialData ? 'Cập nhật' : 'Thêm mới'} />
    </div>
  )
}

export default HeaderListStaff