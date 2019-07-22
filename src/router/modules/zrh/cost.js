/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const costRouter = {
  path: '/cost',
  component: Layout,
  redirect: 'noRedirect',
  name: 'cost',
  meta: {
    title: '费用管理',
    icon: 'chart'
  },
  children: [
    {
      path: '/cost/device-cost',
      // component: () => import('@/views/cost/device-cost'),
      name: 'device-cost',
      meta: { title: '设备费用', noCache: true }
    }
  ]
}

export default costRouter
