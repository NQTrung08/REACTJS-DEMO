import { Toolbar } from "src/based/components/common/Toolbar"

interface IToolBarRefund {
  title: string,
  quantity?: number
}

export const ToolBarRefund = ({
  title,
  quantity
}: IToolBarRefund) => {
  
  return (
    <Toolbar title={title} quantity={quantity} label={title} />
  )
}