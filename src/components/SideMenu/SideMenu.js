 import React from 'react';
 import "./SideMenu.css"
 import { Nav, Navbar } from 'react-bootstrap';

 export default function SideMenu() {
   return <div>
       <Navbar className="d-inline-flex align-items-start text-light flex-column sidebar">
       <div>
         <Nav.Item>
             <Nav.Link className='a-link' href="/">Option
             </Nav.Link>
         </Nav.Item>
         </div>
         <div>
         <Nav.Item bg="dark">
             <Nav.Link  className='a-link' href="/">Option 2
             </Nav.Link>
         </Nav.Item>
         </div>
         <Nav.Item>
             <Nav.Link className='a-link'  href="/">Option
             </Nav.Link>
         </Nav.Item>
       </Navbar>
   </div>;
 }