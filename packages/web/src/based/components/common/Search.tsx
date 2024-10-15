import {
  mdiMagnify
} from '@mdi/js';
import Icon from '@mdi/react';
import { ISearch } from 'core-model';
import React from 'react';

const Search = ({
  placeholder = 'Tìm kiếm',
  filter,
  setFilter,
}: ISearch) => {

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({
      ...prev,
      keyword: e.target.value,
    }));
  };

  return (
    <div className='flex border rounded-md p-2 max-w-[480px] w-full'>
      <Icon path={mdiMagnify} size={1} className='text-gray-500' />
      <input
        type="text"
        placeholder={placeholder}
        className='focus:outline-none px-2 flex-grow'
        value={filter.keyword}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search