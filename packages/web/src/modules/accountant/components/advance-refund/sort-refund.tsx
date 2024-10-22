import { useAdvanceRefundContext } from 'core-modules';
import { SortDropdown } from 'src/based/components/common/sort';

export const AdvanceRefundSort = () => {
  const { filter } = useAdvanceRefundContext(); // Lấy filter từ context

  const sortOptions = [
    {
      label: 'Hạn hoàn ứng: mới -> cũ',
      value: 'date_desc',
    },
    {
      label: 'Hạn hoàn ứng: cũ -> mới',
      value: 'date_asc',
    },
    // Thêm các tùy chọn khác nếu cần
  ];

  return (
    <div>
      <SortDropdown title="Hạn hoàn ứng: mới -> cũ" sortOptions={sortOptions} filter={filter} />
      {/* Các thành phần khác của StaffList */}
    </div>
  );
};
