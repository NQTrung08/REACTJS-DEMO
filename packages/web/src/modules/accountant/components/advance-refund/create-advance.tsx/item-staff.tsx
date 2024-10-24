
interface Option {
  name: string;
  position: string
}

interface ItemStaffProps {
  option: Option
}

export const ItemStaff = ({
  option
}: ItemStaffProps) => {
  return (
    <div className="flex items-center h-14 px-3 py-2 gap-1">
      <img
        src={'https://via.placeholder.com/50'}
        alt={`avatar`}
        className="rounded-full w-10 h-10"
      />
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">{option.name}</span>
        <span className="text-gray-700">{option.position}</span>
      </div>
    </div>
  )
}