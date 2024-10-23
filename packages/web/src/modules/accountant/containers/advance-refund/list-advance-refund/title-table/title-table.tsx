interface TitleTableProps {
  tabName: 'overdue' | 'new' | 'processing' | 'confirm' | 'reject' | 'complete' | 'all' | 'refund';
}

export const TitleTable = ({ tabName }: TitleTableProps) => {
  const renderTitle = () => {
    switch (tabName) {
      case 'all':
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

      case 'new':
      case 'processing':
      case 'confirm':
      case 'reject':
      case 'complete':
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

      case 'overdue':
      case 'refund':
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
