import Icon from '@mdi/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SubNavItem {
  icon: string;
  title: string;
  path: string;
}

interface SubNavigationProps {
  subNavData: SubNavItem[];
}


export const SubNavigation = ({subNavData}: SubNavigationProps) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNavigation = (path: string, index: number) => {
    setActiveIndex(index);
    navigate(path);
  }

  return (
    <div className='flex flex-col gap-4 min-w-[300px] text-md text[#141414] px-4 py-2 bg-[#EEF3FE]'>
      {subNavData.map((item, index) => (
        <div 
          key={index} 
          onClick={() => handleNavigation(item?.path, index)}
          className={`flex items-center p-2 rounded-r-2xl hover:bg-[#D4E2FC]
            ${activeIndex === index ? 'bg-[#D4E2FC]' : ''}`}
        >
          <Icon path={item.icon} className='w-[18px] h-[20px]' />
          <span className='ml-2'>{item.title}</span>
        </div>
      ))}
    </div>
  );
}

