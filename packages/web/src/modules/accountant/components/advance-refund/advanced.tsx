
import { Search } from 'src/based/components/common/Search';
import { AdvanceRefundSort } from './sort-refund';
import { StatusFilterAdvanceRefund } from './status-filter-refund';


export const AdvancedRefund = () => {

  return (
    <div>
      <div className='border-y p-2 flex justify-between items-center'>
        <Search placeholder='Tìm kiếm'/>
        {/* Filter */}
        <AdvanceRefundSort />
      </div>

      <StatusFilterAdvanceRefund />

    </div>

  )
}
