import type { CSSProperties } from 'react'

import { EChart } from '@/components/Echart'
import { personFinishOption } from '../data'
import { useDesign } from '@/hooks/web/useDesign'

function PersonFinished(props: { style?: CSSProperties }) {
  const { prefixCls } = useDesign('large-screen-finished')
  return (
    <div className={prefixCls} style={props.style}>
      <EChart option={personFinishOption} />
    </div>
  )
}

export default PersonFinished
