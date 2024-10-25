import { AdvanceRefundModel } from "core-model";
import { ToolBarRefund } from "src/modules/accountant/containers/advance-refund/list-advance-refund/toolbar-refund";

interface BaseListProps {
  renderTitle: () => JSX.Element;  // Hàm render tiêu đề
  renderItem: (item: AdvanceRefundModel, index: number) => JSX.Element;  // Hàm render từng item
  data: AdvanceRefundModel[]; // Dữ liệu của danh sách
  title: string,
}

const BaseList = ({ renderTitle, renderItem, data, title}: BaseListProps) => {
  const quantity = data.length
  return (
    <div className="overflow-y-auto h-full">
      <ToolBarRefund title={title} quantity={quantity}/>
      <div className="flex text-black font-medium p-3 border-b">
        {renderTitle()} {/* Gọi hàm render tiêu đề */}
      </div>

      {/* Hiển thị các items */}
      <div className="">
        {data.map((item, index) => (
          renderItem(item, index)
        ))}
      </div>
    </div>
  );
};

export { BaseList };
