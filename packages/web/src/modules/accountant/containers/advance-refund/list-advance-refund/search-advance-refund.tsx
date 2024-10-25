import {useListAdvanceRefundContext} from "core-modules";
import {observer} from "mobx-react";
import {Search} from "src/based/components/common/search";
import {Dispatch, SetStateAction} from "react";

export const SearchAdvanceRefund = observer(({
                                               placeholder = 'Tìm kiếm',
                                               value,
                                               onChange
                                             }: {
                                               placeholder: string,
                                               value: string,
                                               onChange: (v: string) => void
                                             }
) => {



  const {filter} = useListAdvanceRefundContext();
  return (
    <div className="max-w-md w-full">
      <Search placeholder={placeholder} filter={filter}/>
    </div>
  )
})
