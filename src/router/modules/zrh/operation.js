/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const operationRouter = {
  path: '/operation',
  component: Layout,
  redirect: 'noRedirect',
  name: 'operation',
  meta: {
    title: '运维管理',
    icon: 'chart'
  },
  children: [
    {
      path: '/operation/device-operation',
    //   component: () => import('@/views/operation/device-operation'),
      name: 'device-operation',
      meta: { title: '设备运维', noCache: true }
    }
  ]
}

export default operationRouter
