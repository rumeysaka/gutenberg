 import React from 'react';
 import "./SideMenu.css"
 import { Nav, Navbar } from 'react-bootstrap';

 export default function SideMenu() {
   return <div>
       <Navbar className="d-inline-flex align-items-start text-light flex-column sidebar">
       <div>
         <Nav.Item>
             <Nav.Link className='a-link' href="/">Home
             </Nav.Link>
         </Nav.Item>
         </div>
         <div>
         <Nav.Item bg="dark">
             <Nav.Link  className='a-link' href="/">Books
             </Nav.Link>
         </Nav.Item>
         </div>
         <Nav.Item>
             <Nav.Link className='a-link'  href="/">Favorites
             </Nav.Link>
         </Nav.Item>
       </Navbar>
   </div>;
 }