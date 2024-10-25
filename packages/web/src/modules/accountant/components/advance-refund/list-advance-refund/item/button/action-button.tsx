import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import { AdvanceRefundModel } from 'core-model';
import { useManagerRefundContext } from 'core-modules';
import { observer } from 'mobx-react';
import { Dropdown } from './dropdown';

interface ActionButtonProps {
  status: string;
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  onCancel: () => void; // Thực hiện hành động hủy bỏ
  advance: AdvanceRefundModel;
}

export const ActionButton = observer(({ status, isDropdownOpen, toggleDropdown, onCancel, advance }: ActionButtonProps) => {
  
  const {
    onCreateOrUpdate, 
    setItemUpdate, itemUpdate } = useManagerRefundContext();
  const handleEdit = (advance: AdvanceRefundModel) => {
    setItemUpdate(advance);
    onCreateOrUpdate(true);
    const targetElement = document.querySelector('#create-or-update'); // ID của phần tử bạn muốn cuộn đến
    console.log('targetElement', targetElement);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',  // Cuộn mượt
        block: 'nearest',      // Đưa phần tử lên đầu viewport
      });
    }
  };
  console.log('itemUpdate', itemUpdate);
  
  return (
    <>
      {status === 'completed' ? (
        <button className="text-blue-500 w-full flex justify-end mr-3 hover:text-blue-600 text-md font-medium">
          <span className="">Xem chi tiết</span>
        </button>
      ) : (
        <>
          <button className="w-full flex justify-end items-center gap-2 text-blue-500 hover:text-blue-600 text-md font-medium" onClick={toggleDropdown}>
            <span onClick={() => handleEdit(advance)}>Cập nhật</span>
            <div>
              <Icon path={mdiChevronDown} className="w-4 h-4" />
            </div>
          </button>

          {/* Dropdown */}
          <Dropdown isOpen={isDropdownOpen} toggleDropdown={toggleDropdown}>
            <button className="block w-full h-8 text-md text-left px-4" onClick={() => {}}>
              Hủy bỏ
            </button>
          </Dropdown>
        </>
      )}
    </>
  );
});

