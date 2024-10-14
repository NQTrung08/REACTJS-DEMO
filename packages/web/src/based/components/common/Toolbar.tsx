
const Toolbar = ({
  quantity,
  title
}: any) => {
  return (
    <div className='bg-gray-200 py-1 px-2'>
        <span className='text-xs text-gray-500'>
          Có tất cả {quantity} {title}
        </span>
      </div>
  )
}

export default Toolbar