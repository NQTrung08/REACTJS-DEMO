
import { TAB_ADVANCE_REFUND } from 'core-params';
import { Search } from 'src/based/components/common/Search';
import { AdvanceRefundSort } from '../sort-refund';
import { FilterDefaultTabNew } from './filter-default-tab-new';
import { StatusFilterAdvanceRefund } from './status-filter-refund';

interface IProps {
  tab: number
}

export const FilterAdvanced = ({
  tab
}: IProps) => {

  return (
    <div>
      <div className='border-y p-2 flex justify-between items-center'>
        <Search placeholder='Tìm kiếm' />
        {/* Filter */}
        <AdvanceRefundSort />
      </div>
      {
        tab === TAB_ADVANCE_REFUND.OVERDUE ? (
          <StatusFilterAdvanceRefund tab={tab} />
        ) : tab === TAB_ADVANCE_REFUND.REFUND ? (
          <StatusFilterAdvanceRefund tab={tab} />
        ) : (
          <FilterDefaultTabNew />
        )
      }

    </div>

  )
}
