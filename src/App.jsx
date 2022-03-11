import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom';
import 'lib-flexible';
import "@/assets/css/reset.css"
import { routeConfigs } from './router';
// 网络请求




// app默认显示启动页

export default memo(function App() {
  const element = useRoutes(routeConfigs)
  return element
})

