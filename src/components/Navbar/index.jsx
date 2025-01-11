'use client'
import estilos from "./Navbar.module.css"
import Link from 'next/link';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return(
    <navbar className={estilos.navbar}>
      <div className={estilos.logo}>
        <h2>Lucas Gervasoni</h2>
      </div>
      <ul className={estilos.links}>
        <li><Link className={estilos.link} href="/">Home</Link></li>
        <li>
        <Button
            id={estilos.btn}
            className={estilos.link}
            onClick={handleClick}
          >
            Projects
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><Link className={estilos.link} href="/Projetos">Web</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link className={estilos.link} href="/Projetos">Dashboards</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link className={estilos.link} href="/Projetos">Automation</Link></MenuItem>
          </Menu>
          </li>
      </ul>
    </navbar>
  )
}