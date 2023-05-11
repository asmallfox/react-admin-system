import { useState } from 'react'
import { Layout } from 'antd'
// import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import { SideBar } from '@/components/SideBar'
import { LayoutHeader } from '@/components/Header'
import { useDesign } from '@/hooks/web/useDesign'
import { ScrollBar } from '@/components/ScrollBar'

import './style/layout.scss'

function AppLayout() {
  const { prefixCls } = useDesign('layout')
  const [collapsed, setCollapsed] = useState(false)
  // const {
  //   token: { colorBgContainer }
  // } = theme.useToken()
  return (
    <Layout className={prefixCls}>
      <SideBar collapsed={collapsed} />
      <Layout className={`${prefixCls}-site`} style={{ background: '#f0f2f5' }}>
        <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout.Content className="flex-auto h-full">
          <ScrollBar always>
            <Outlet />
          </ScrollBar>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
