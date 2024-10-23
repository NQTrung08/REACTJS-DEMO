import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";

// Interface cho từng cột của bảng
interface Column<T> {
  title: string;
  className: string;
  render: (item: T) => React.ReactNode; // Hàm render cho mỗi ô trong bảng
}

// Interface cho props của TableAdvance
interface TableAdvanceProps<T> {
  columns: Column<T>[]; // Mảng các cột
  items: T[]; // Mảng dữ liệu (các hàng)
}

// Component TableAdvance
const TableAdvance = <T extends { id: string }>({ columns, items }: TableAdvanceProps<T>) => {
  return (
    <>
      <div className="flex text-black font-medium p-3 border-b">
        {columns.map((col, index) => (
          <span key={index} className={col.className}>{col.title}</span>
        ))}
      </div>
      {items.map(item => (
        <div className="flex p-3 border-b hover:bg-gray-50 transition-colors" key={item.id}>
          {columns.map((col, index) => (
            <span key={index} className={col.className}>{col.render(item)}</span>
          ))}
          <div className="w-[15%] text-right flex justify-end">
            <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-md font-medium">
              <span>Cập nhật</span>
              <Icon path={mdiChevronDown} className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TableAdvance;
