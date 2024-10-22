
export const BreadCrumb = ({title = ''}) => {
  return (
    <div className='w-full py-2 px-3 relative bg-[#EEF3FE]'>
      <span className='text-md font-medium text-[#000]'>{title}</span>
    </div>
  )
}
