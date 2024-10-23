import { useListAdvanceRefundContext } from "core-modules"
import { Toolbar } from "src/based/components/common/Toolbar"


export const ToolBarRefund = () => {
  const {} = useListAdvanceRefundContext()
  const dataView = []
  return (
    <Toolbar title='tạm ứng/ hoàn ứng' quantity={dataView.length} label='tạm ứng/ hoàn ứng' />
  )
}