export class FilterStaff {
  keyword: string = '';
  status: 'active' | 'inactive' = 'active';
  sort: 'asc' | 'desc' = 'asc';
}