import style from '@/styles/Navbar.module.css';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Dropdown, Menu, Space } from "antd";
import Link from 'next/link';
import { useState } from "react";
const items = [
  {
    label: 'Cpu',
    key: '1',
  },
  {
    label: 'Motherboard',
    key: '2',
  },
  {
    label: 'Ram',
    key: '3',
  },
  {
    label: 'Power Supply',
    key: '4',
  },
  {
    label: 'Storage Device',
    key: '5',
  },
];


const   Navbar =()=>  {




  
  const [openMenu, setOpenMenu]= useState(false)

  return (
    <div >
    
    <div className={style.menuIcon} style={{ backgroundColor: "#5BC0BE",height:"75px" ,fontSize: "30px" , padding:"5px", color:"white"}}>
    <MenuOutlined onClick ={()=> setOpenMenu(true)} bodystyle={{fontSize:"30px" }} />
    </div>
 <span className={style.headerIcon}>
  <AppMenu></AppMenu> 
 </span>
  
   <Drawer 
   placement='left'
   open ={openMenu}
   onClose={()=> setOpenMenu(false)}
   closable={false} bodystyle={{backgroundColor: '#5BC0BE'}}>
    <AppMenu isInline></AppMenu>
   </Drawer>
        
    </div>
  )
}


export function AppMenu({isInline =false }) {

  return(
    <Menu
    style={{backgroundColor: '#5BC0BE' , color: "white", fontSize: '24px', border:'none'}}
    mode={isInline ? 'inline' : 'horizontal'}
    items={[
      {
        label: <Link href={'/'}>
        Home</Link>,
        key  : 'home'
      },
     
      {
        label: <Dropdown
        overlayStyle={{
          backgroundColor: '#5BC0BE'
        }}
        
        menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Categories
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>,
        key  : 'dashBoard'
      },

      {
        label:<Button style={{border:"none",backgroundColor:"#5BC0BE" , color:"white" , fontSize:"24px"}}>Pc builder</Button>,
        key  : 'pcbuilders'
      },
      
     
    ]}>

    </Menu>
  )
}

export default Navbar
