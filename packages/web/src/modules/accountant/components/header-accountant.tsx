import {
  useManagerRefundContext
} from 'core-modules';

import { ButtonAdd } from 'src/based/components/common/ButtonAdd';
import {Dispatch, FC, SetStateAction} from "react";

export const HeaderAccountant:FC<{title: string, openState:  [boolean, Dispatch<SetStateAction<boolean>>]}> = ({
  title = '',
  openState
}) => {
  const {
    isCreateOrUpdate,
    onCreateOrUpdate,
    // itemUpdate,
  } = useManagerRefundContext();

  const [_, setState] = openState;

  return (
    <div className='flex justify-between items-center py-2 px-3 border-b'>
      {/*  */}
      <span className='font-medium text-lg'>
        {title}
      </span>
      <ButtonAdd onClick={() => {
        setState(true);

        // onCreateOrUpdate(!isCreateOrUpdate);
      }}
        title={false ? 'Cập nhật' : 'Thêm mới'} />
    </div>
  )
}
