/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const warnRouter = {
  path: '/warn',
  component: Layout,
  redirect: 'noRedirect',
  name: 'warn',
  meta: {
    title: '报警记录',
    icon: 'chart'
  },
  children: [
    {
      path: '/warn/device-warn',
      // component: () => import('@/views/warn/device-warn'),
      name: 'device-warn',
      meta: { title: '设备报警', noCache: true }
    }
  ]
}

export default warnRouter
