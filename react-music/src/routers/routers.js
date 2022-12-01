import React from 'react'
import { Navigate } from 'react-router-dom'
import MuDiscover from '../pages/discover'
const routes = [
  {path:'/',exact:true,render:()=>{<Navigate to='/discover'/>}},
  {
    path:'/discover',
    component:MuDiscover,

  }
]

export default routes