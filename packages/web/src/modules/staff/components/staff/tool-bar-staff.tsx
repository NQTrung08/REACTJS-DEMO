import { useStaffContext } from "core-modules"
import { Toolbar } from "src/based/components/common/Toolbar"


export const ToolBarStaff = () => {
  const {dataView} = useStaffContext()
  return (
    <Toolbar title='tài khoản nhân viên' quantity={dataView.length} />
  )
}