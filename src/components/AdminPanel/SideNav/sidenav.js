import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faToolbox } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

function Sidenav (props) {

 const location=useLocation();
 const pathname=location.pathname;

  return (
    <>
      <div id='sidebar' className='sidebar'>
        <strong className='logo w-100 d-flex justify-content-center'>
        </strong>
        <ul className='main-nav list-unstyled' id="style-4">
          <li className={pathname==="/admin/dashboard1"?"active":""}>
            <span className='admin-show'>
              <FontAwesomeIcon className='me-2' icon={faChartPie} />
            </span>
            <Link className='admin-none' to='dashboard1'>
              <span>
                <FontAwesomeIcon className='me-2' icon={faChartPie} />
              </span>
            </Link>
            <Link className='admin-show active' to='dashboard1'>Dashboard</Link>
          </li>
          <li className={pathname==="/admin/managepools"?"active":""}>
            <span className='admin-show'>
              <FontAwesomeIcon className='me-2' icon={faToolbox} />
            </span>
            <Link to='managepools' className='admin-none'>
              <span>
                <FontAwesomeIcon className='me-2' icon={faToolbox} />
              </span>
            </Link>
            <Link to='managepools' className='text-white admin-show active'>
              Manage Pools
            </Link>
          </li>
          
          <li className={pathname==="/admin/faqs"?"active":""}>
            <span className='admin-show'>
              <FontAwesomeIcon className='me-2' icon={faWrench} />
            </span>
            <Link to='faqs' className='admin-none'>
              <span>
                <FontAwesomeIcon className='me-2' icon={faWrench} />
              </span>
            </Link>
            <Link to='faqs' className='text-white admin-show'>
              Manage Faqs
            </Link>
          </li>
          <li className={pathname==="/admin/cmspages"?"active":""}> 
            <span className='admin-show'>
              <FontAwesomeIcon className='me-2' icon={faPrint} />
            </span>
            <Link to='cmspages' className='admin-none'>
              <span>
                <FontAwesomeIcon className='me-2' icon={faPrint} />
              </span>
            </Link>
            <Link to='cmspages' className='text-white admin-show'>
              CMS Pages
            </Link>
          </li> 

          <li className={pathname==="/admin/settings"?"active":""}>
            <span className='admin-show'>
              <FontAwesomeIcon className='me-2' icon={faWrench} />
            </span>
            <Link to='settings' className='admin-none'>
              <span>
                <FontAwesomeIcon className='me-2' icon={faWrench} />
              </span>
            </Link>
            <Link to='settings' className='text-white admin-show'>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidenav
