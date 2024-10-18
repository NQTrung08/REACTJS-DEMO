import {
  mdiMagnify
} from '@mdi/js';
import Icon from '@mdi/react';
import { ISearch } from 'core-model';
import { useStaffContext } from 'core-modules';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

export const Search = observer(({
  placeholder = 'Tìm kiếm',
}: ISearch) => {
  const { filter } = useStaffContext();
  const [inputValue, setInputValue] = useState(filter.keyword);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      filter.setKeyword(inputValue);
    }
  };
  return (
    <div className='flex border rounded-md p-2 max-w-[480px] w-full'>
      <Icon path={mdiMagnify} size={1} className='text-gray-500' />
      <input
        type="text"
        placeholder={placeholder}
        className='focus:outline-none px-2 flex-grow'
        value={inputValue}
        onKeyDown={handleKeyPress}
        onChange={handleSearch}
      />
    </div>
  )
})
