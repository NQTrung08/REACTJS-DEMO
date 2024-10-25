import { AdvanceRefundModel } from "core-model";
import { observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";
import { ActionButton } from "./button/action-button";

interface IProps {
  item: AdvanceRefundModel;
  tab: number;
}

export const ItemAllAdvance = observer(({ item, tab }: IProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Tạo ref cho dropdown

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  const getStatusColor = (status: string) => {
    if (status === 'completed') return 'text-green-500 bg-green-50';
    if (status === 'not_collected') return 'text-[#FFC043] bg-[#FFF2D9]';
    if (status === 'overdue') return 'text-red-300 bg-red-50';
    if (status === 'processing') return 'text-[#ED6E33] bg-orange-50';
    if (status === 'confirm') return 'text-blue-600 bg-blue-50';
    if (status === 'reject') return 'text-red-300 bg-red-50';
    if (status === 'canceled') return 'text-red-300 bg-red-50';
  };

  const getStatusText = (status: string) => {
    if (status === 'completed') return 'Hoàn thành';
    if (status === 'not_collected') return 'Chưa thu';
    if (status === 'overdue') return 'Quá hạn';
    if (status === 'processing') return 'Đang phê duyệt';
    if (status === 'confirm') return 'Đồng ý';
    if (status === 'reject') return 'Từ chối';
    if (status === 'canceled') return 'Đã huỷ';
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false); // Đóng dropdown khi click bên ngoài
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      // Lắng nghe sự kiện click ra ngoài
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Nếu dropdown đóng, gỡ bỏ sự kiện
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    };
  }, [isDropdownOpen]);

  return (
    <div className="border-b p-4 hover:shadow-lg transition-shadow duration-200 ease-in-out flex items-center relative">
      {/* Cột trạng thái */}
      <div className="w-[15%]">
        <span className={`font-medium px-2 py-1 rounded-3xl ${getStatusColor(item.status)}`}>
          {getStatusText(item.status)}
        </span>
      </div>

      {/* Cột Ngày ứng */}
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
      <div className='w-[20%]'>
        {item.beneficiaryAccount.bank}
      </div>

      {/* Cột Số tiền tạm ứng */}
      <div className="w-[15%] text-right">
        {formatCurrency(item.advanceAmount)}
      </div>

      {/* Nút hành động */}
      <div className="w-[15%] flex">
        <ActionButton
          status={item.status}
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          onCancel={() => { }}
          advance={item}
        />
      </div>
    </div>
  );
});
