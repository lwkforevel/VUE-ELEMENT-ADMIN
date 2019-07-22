/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const controlRouter = {
  path: '/control',
  component: Layout,
  redirect: 'noRedirect',
  name: 'control',
  meta: {
    title: '运行管控',
    icon: 'chart'
  },
  children: [
    {
      path: '/control/device-control',
      // component: () => import('@/views/control/device-control'),
      name: 'device-control',
      meta: { title: '设备管控', noCache: true }
    }
  ]
}

export default controlRouter
