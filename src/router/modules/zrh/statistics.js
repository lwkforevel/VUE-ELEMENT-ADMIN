/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const statisticsRouter = {
  path: '/statistics',
  component: Layout,
  redirect: 'noRedirect',
  name: 'statistics',
  meta: {
    title: '能源统计',
    icon: 'chart'
  },
  children: [
    {
      path: '/statistics/electricity-statistics',
      name: 'electricity-statistics',
      meta: { title: '天然气统计', noCache: true }
    }
  ]
}

export default statisticsRouter
