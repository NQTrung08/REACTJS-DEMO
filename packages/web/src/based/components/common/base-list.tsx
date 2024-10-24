import { AdvanceRefundModel } from "core-model";

interface BaseListProps {
  renderTitle: () => JSX.Element;  // Hàm render tiêu đề
  renderItem: (item: AdvanceRefundModel, index: number) => JSX.Element;  // Hàm render từng item
  items: AdvanceRefundModel[]; // Dữ liệu của danh sách
}

const BaseList = ({ renderTitle, renderItem, items }: BaseListProps) => {
  return (
    <>
      <div className="">
        {renderTitle()} {/* Gọi hàm render tiêu đề */}
      </div>

      {/* Hiển thị các items */}
      <div className="divide-y">
        {items.map((item, index) => (
          renderItem(item, index)
        ))}
      </div>
    </>
  );
};

export { BaseList };
