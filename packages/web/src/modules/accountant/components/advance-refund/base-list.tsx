import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";


interface IBeneficiary {
  accountNumber: string;
  bank: string;
  accountImage: string;

}
interface ItemBaseList {
  status?: string;
  requestDate: string;
  overdue?: number;
  refundDeadline: string;
  beneficiary: string;
  beneficiaryAccount: IBeneficiary;
  advanceAmount: number;
}

// Props interface cho component
interface ItemBaseListProps {
  items: ItemBaseList[];
}



export const BaseList = ({ items }: ItemBaseListProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow text-md">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b last:border-b-0 p-4 hover:bg-gray-50 transition-colors flex items-center"
          >
            {/* cột ngày ứng */}
            <div className="w-[10%]">
              {item.requestDate}
            </div>

            {/* Cột Hạn hoàn */}
            <div className="w-[10%]">
              {item.refundDeadline}
            </div>


            {/* Cột Người thụ hưởng */}
            <div className="w-[20%]">
              {item.beneficiary}
            </div>

            {/* Cột Tài khoản hưởng thụ */}
            <div className="w-[25%] flex">
              {item.beneficiaryAccount.accountImage}
              <div className="">
                {item.beneficiaryAccount.accountNumber}
                {item.beneficiaryAccount.bank}

              </div>
            </div>
            {/* Cột Số tiền tạm ứng */}
            <div className="w-[15%] text-right font-medium text-lg">
              {formatCurrency(item.advanceAmount)}
            </div>

            {/* Nút hành động */}
            <div className="w-[15%] text-right flex justify-end">

              <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-md font-medium">
                <span>
                  Cập nhật
                </span>
                <Icon path={mdiChevronDown} className="w-4 h-4" />
              </button>


            </div>
          </div>
        ))}
      </div>
    </div>
  )
}