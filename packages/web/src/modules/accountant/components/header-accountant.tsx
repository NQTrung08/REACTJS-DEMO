import {
  useManagerRefundContext
} from 'core-modules';

import { ButtonAdd } from 'src/based/components/common/ButtonAdd';

export const HeaderAccountant = ({
  title = ''
}) => {
  const {
    isCreateOrUpdate,
    onCreateOrUpdate,
    // itemUpdate,
  } = useManagerRefundContext();

  return (
    <div className='flex justify-between items-center py-2 px-3 border-b'>
      {/*  */}
      <span className='font-medium text-lg'>
        {title}
      </span>
      <ButtonAdd onClick={() => onCreateOrUpdate(!isCreateOrUpdate)}
        title={false ? 'Cập nhật' : 'Thêm mới'} />
    </div>
  )
}
