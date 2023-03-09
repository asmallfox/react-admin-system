import { HomeOutlined } from '@ant-design/icons'
import Main from '@/views/main/main'

export const Layout = {
  path: '/layout',
  element: <Main />,
  meta: {
    label: '首页',
    icon: <HomeOutlined />,
    sortIndex: 0
  },
}

export default Layout
