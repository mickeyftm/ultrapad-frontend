import React from 'react'
import Sidenav from './SideNav/sidenav'
import Setting from './Settings/setting'
import { Routes, Route } from 'react-router-dom'
import BannerAdmin from './Banner/BannerAdmin'
import ManagePools from './ManagePools/ManagePools'
import CmsPage from './CMSPAGES/cmspage'
// import Createpool from '../CreatePool/createpool'
import ManageFaq from './ManageFaqs/managefaq'
function AdminPanel () {
  return (
    <div className='admin-side-wraper'>
      <Sidenav />
      <Routes>
        <Route path='dashboard1' element={<BannerAdmin />}></Route>

        <Route path='managepools'  element={<ManagePools />}></Route>
        <Route path='faqs' element={<ManageFaq />}></Route>
        <Route path='cmspages' element={<CmsPage />}></Route>
        <Route path='settings' element={<Setting />}></Route>
        {/* <Route path='createpool' element={<Createpool />}></Route> */}
      </Routes>

      {/* <BannerAdmin /> */}
      {/* <ManagePools /> */}
      {/* <CmsPage /> */}
      {/* <Setting /> */}
    </div>
  )
}

export default AdminPanel
