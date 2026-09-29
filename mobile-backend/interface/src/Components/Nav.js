import { Link, useLocation, matchPath } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import {links} from '../Paths';
import { cloneElement } from 'react';
function useMatchedRoute() {
    const { pathname } = useLocation();
    for (const route of ['/','/manageteachers','/manageposts','/managebulletin','/managetv','/manageofficehours']) {
      if (matchPath({ path: route }, pathname)) {
        return route;
      }
    }
  }



const Nav = () => {
    const route = useMatchedRoute();
    return (
        <AppBar position="static" className="Nav" sx={{ display: "flex", flexDirection: 'row', flexWrap: "wrap" }} color='error'>
            {links.map((element)=>{
                return <Link to={element.path} style={{ textDecoration: "none" }} key={element.name}>
                <Typography variant="h6" noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 700, color: 'black', textDecoration: 'none'  }}>
                    {cloneElement(element.icon, {sx: {height: "100%", color: (route === element.path)?"blue":"unset"}})}
                    {(route === element.path)?<b style={{fontWeight: "900", color: "blue"}}>{element.name}</b>:element.name}
                </Typography>
            </Link>
            })}
        </AppBar>
    )
}

export default Nav