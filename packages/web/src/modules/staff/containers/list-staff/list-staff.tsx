import { StaffModel } from 'core-model';
import ItemStaff from '../../components/list-staff/item-staff';

interface ListStaffProps {
  filteredViewStaff: StaffModel[];
  isCreateOrUpdate: boolean;
  onEdit: (staff: StaffModel) => void;
}

const ListStaff = ({ filteredViewStaff, isCreateOrUpdate, onEdit }: ListStaffProps) => {
  return (
    <div className='overflow-y-auto'>
      {filteredViewStaff.length > 0 ? (
        filteredViewStaff.map((staff) => (
          <ItemStaff key={staff.id} staff={staff} onEdit={() => onEdit(staff)} />
        ))
      ) : (
        <span className=''>Không có nhân viên nào để hiển thị.</span>
      )}
    </div>
  );
};

export default ListStaff;
