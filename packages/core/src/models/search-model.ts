import { FilterStaff } from './filter-staff';

export interface ISearch {
  placeholder?: string;
  filter: { keyword: string }; // Define the shape of the filter object
  setFilter: React.Dispatch<React.SetStateAction<FilterStaff>>; // Set the filter update function
}
