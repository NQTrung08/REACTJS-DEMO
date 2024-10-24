import { useListAdvanceRefundContext } from "core-modules"
import { Toolbar } from "src/based/components/common/Toolbar"

interface IToolBarRefund {
  title: string
}

export const ToolBarRefund = ({
  title
}: IToolBarRefund) => {
  const {dataView} = useListAdvanceRefundContext()

  return (
    <Toolbar title={title} quantity={dataView.length} label={title} />
  )
}