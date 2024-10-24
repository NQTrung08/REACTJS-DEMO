import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from 'react';
import { ItemStaff } from './item-staff';

interface Option {
  name: string;
  position: string;
}

interface DropdownStaffProps {
  label?: string;
  placeholder: string;
  options: Option[];
  onSelect: (option: Option) => void;
}
const DropdownStaff = ({ label, placeholder, options, onSelect }: DropdownStaffProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedValue(option.name);
    onSelect(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <input
          type="text"
          value={selectedValue}
          onClick={handleDropdownToggle}
          readOnly
          className="border-b focus:outline-none focus:border-blue-500 w-full"
          placeholder={placeholder}
        />
        <Icon path={mdiChevronDown} className="absolute right-2 top-1 w-4 h-4 text-gray-500" />
        {isDropdownOpen && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md">
            {options.map((option, index) => (
              <div
                key={index}
                className="hover:bg-blue-100 cursor-pointer"
                onClick={() => handleSelectOption(option)}
              >
                <ItemStaff option={option} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownStaff;
