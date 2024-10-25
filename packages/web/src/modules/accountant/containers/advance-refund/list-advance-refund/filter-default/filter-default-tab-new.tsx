import { useListAdvanceRefundContext } from 'core-modules';
import { TAB_ADVANCE_REFUND } from 'core-params';
import { observer } from 'mobx-react';
import { StatusFilter } from 'src/based/components/common/status-filter';
import { FilterExtend } from './filter-extend';

interface IProps {
  isOpen: boolean
}

export const FilterDefaultTabNew = observer(({
  isOpen
}: IProps) => {
  const { filter } = useListAdvanceRefundContext(); // Lấy filter từ context
  const filterOptions = [
    {
      label: 'Tất cả',
      value: 'all',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    }
  ];

  console.log('isOpen', isOpen);

  return (
    <div>
      <StatusFilter title="Người đề nghị" filterOptions={filterOptions} filter={filter} />
      {isOpen && (
        <FilterExtend tab={TAB_ADVANCE_REFUND.NEW}/>
      )}
    </div>
  );
});
