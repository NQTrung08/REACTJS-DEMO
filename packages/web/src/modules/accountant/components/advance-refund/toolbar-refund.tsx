import { useAdvanceRefundContext } from "core-modules"
import { Toolbar } from "src/based/components/common/Toolbar"


export const ToolBarRefund = () => {
  const {} = useAdvanceRefundContext()
  const dataView = []
  return (
    <Toolbar title='tạm ứng/ hoàn ứng' quantity={dataView.length} label='tạm ứng/ hoàn ứng' />
  )
}