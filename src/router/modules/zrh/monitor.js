/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const monitorRouter = {
  path: '/monitor',
  component: Layout,
  redirect: 'noRedirect',
  name: 'monitor',
  meta: {
    title: '在线监控',
    icon: 'chart'
  },
  children: [
    {
      path: '/monitor/device-monitor',
      // component: () => import('@/views/monitor/device-monitor'),
      name: 'device-monitor',
      meta: { title: '设备监控', noCache: true }
    }
  ]
}

export default monitorRouter
