import React from 'react';

interface Props {
  title?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;  // Hàm nhận một sự kiện chuột
}

const Tbutton: React.FC<Props> = ({ title = '', onClick }) => {
  return (
    <div className="mt-12">
      <button 
        type="button" 
        className="w-full shadow-xl py-2.5 px-4 text-sm rounded-md text-white bg-green-500 hover:bg-green-200 focus:outline-none"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}

export default Tbutton;
