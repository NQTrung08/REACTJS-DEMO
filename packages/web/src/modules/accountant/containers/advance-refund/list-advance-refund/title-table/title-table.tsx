import { TAB_ADVANCE_REFUND } from "core-params";

interface TitleTableProps {
  tab: number;
}

export const TitleTable = ({tab}: TitleTableProps) => {
  const renderTitle = () => {
    switch (tab) {
      case TAB_ADVANCE_REFUND.ALL:
        return (
          <>
            <span className="w-[10%]">Trạng thái</span>
            <span className="w-[10%]">Ngày ứng</span>
            <span className="w-[10%]">Hạn hoàn</span>
            <span className="w-[20%]">Người thụ hưởng</span>
            <span className="w-[25%]">Tài khoản hưởng thụ</span>
            <span className="w-[15%] text-right">Số tiền tạm ứng</span>
            <span className="w-[10%]"></span>
          </>
        );

      case TAB_ADVANCE_REFUND.NEW:
      case TAB_ADVANCE_REFUND.PROCESSING:
      case TAB_ADVANCE_REFUND.CONFIRM:
      case TAB_ADVANCE_REFUND.REJECT:
      case TAB_ADVANCE_REFUND.COMPLETE:
        return (
          <>
            <span className="w-[10%]">Ngày ứng</span>
            <span className="w-[10%]">Hạn hoàn</span>
            <span className="w-[20%]">Người thụ hưởng</span>
            <span className="w-[30%]">Tài khoản hưởng thụ</span>
            <span className="w-[15%] text-right">Số tiền tạm ứng</span>
            <span className="w-[15%]"></span>
          </>
        );

      case TAB_ADVANCE_REFUND.OVERDUE:
      case TAB_ADVANCE_REFUND.REFUND:
        return (
          <>
            <span className="w-[18%]">Trạng thái</span>
            <span className="w-[10%]">Quá hạn</span>
            <span className="w-[10%]">Hạn hoàn</span>
            <span className="w-[12%]">Thực hoàn</span>
            <span className="w-[25%]">Người thụ hưởng</span>
            <span className="w-[20%] text-right">Số tiền đã ứng</span>
            <span className="w-[15%]"></span>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex text-black font-medium p-3 border-b">
      {renderTitle()}
    </div>
  );
};
