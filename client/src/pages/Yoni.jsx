import React, { useEffect } from 'react'
import Sidenav from '../components/Yoni/Sidenav'
import Service from '../components/service'


export default function Yoni() {
  useEffect(() => {
    function scrolll() {
      window.scrollTo({ top: 0 });
    }
    scrolll();
  }, [])
  return (
    <>
      <Sidenav />
    </>
  )
}
