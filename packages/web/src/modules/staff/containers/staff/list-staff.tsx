import { useStaffContext } from 'core-modules';
import { ItemStaff } from '../../components/staff/item-staff';



export const ListStaff = () => {
  const {
    currentStaffs
  } = useStaffContext();

  
  return (
    <div className='overflow-y-auto h-full'>
      {currentStaffs.length > 0 ? (
        currentStaffs.map((staff) => (
          <ItemStaff key={staff.id} staff={staff} />
        ))
      ) : (
        <span className=''>Không có nhân viên nào để hiển thị.</span>
      )}
    </div>
  );
};
