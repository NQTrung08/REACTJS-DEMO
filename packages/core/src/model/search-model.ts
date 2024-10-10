export interface ISearch<T> {
  data: T[]
  searchField: keyof T
  placeholder?: string
  onResults: (data: T[]) => void
}