/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const analyseRouter = {
  path: '/analyse',
  component: Layout,
  redirect: 'noRedirect',
  name: 'analyse',
  meta: {
    title: '运行管控',
    icon: 'chart'
  },
  children: [
    {
      path: '/analyse/electricity-analyse',
    //  component: () => import('@/views/analyse/electricity-analyse'),
      name: 'electricity-analyse',
      meta: { title: '电量分析', noCache: true }
    }
  ]
}

export default analyseRouter
