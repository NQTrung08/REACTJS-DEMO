// Dropdown.tsx
import React, { useEffect, useRef } from 'react';

interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  children: React.ReactNode; // Thêm children để truyền nút tuỳ chỉnh
}

export const Dropdown = ({ isOpen, toggleDropdown, children }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      toggleDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div ref={dropdownRef} className="absolute mt-7 right-1 w-32 bg-white border rounded shadow-lg z-10 py-1 hover:bg-gray-100">
      {children}
    </div>
  );
};
