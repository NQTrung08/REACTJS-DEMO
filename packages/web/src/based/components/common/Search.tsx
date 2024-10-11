import React from 'react'
import Icon from '@mdi/react';
import {
  mdiMagnify,
  mdiSortAscending,
  mdiChevronDown
} from '@mdi/js'
import { ISearch } from 'core-model';


const Search = <T extends object> ({
  data,
  searchField,
  placeholder = 'Tìm kiếm',
  onResults
}: ISearch<T>) => {
  const [query, setQuery] = React.useState<string>('');
  const handleSearch = (q: string) => {
    setQuery(q);
    const filteredData = data.filter((item) => {
      const field = item[searchField] as string;
      return field.toLowerCase().includes(q.toLowerCase());
    })

    onResults(filteredData);
  }

  return (
    <div className='flex border rounded-md p-2 max-w-[480px] w-full'>
      <Icon path={mdiMagnify} size={1} className='text-gray-500' />
      <input
        type="text"
        placeholder={placeholder}
        className='focus:outline-none px-2 flex-grow'
        value={query}
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default Search