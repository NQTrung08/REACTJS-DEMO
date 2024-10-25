import { useListAdvanceRefundContext } from "core-modules";
import { observer } from "mobx-react";
import { Search } from "src/based/components/common/search";

export const SearchAdvanceRefund = observer(({
  placeholder = 'Tìm kiếm',
}
) => {
  const { filter } = useListAdvanceRefundContext();
  return (
    <div className="max-w-md w-full">
      <Search placeholder={placeholder} filter={filter} />
    </div>
  )
})