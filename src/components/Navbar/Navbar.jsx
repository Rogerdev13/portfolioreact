import { FaBars } from "react-icons/fa";
import {useRef} from 'react'
import {Link} from "react-router-dom";


export const Navbar = () =>{

  
    const menuNav = useRef()
    const nav = useRef()

    const activeMenu = ()=>{
       menuNav.current.classList.toggle('nav__menu--active')
    }




    return(
            <nav ref={nav} className='nav container'>
                <Link to='/' className='nav__title'>Roger </Link>
                <FaBars  onClick={activeMenu} className='nav__hamburguer'/>
                <ul ref={menuNav}  className= 'nav__menu'>
                    <li><Link to='/article' className='nav__link'>Article</Link></li>
                    <li><Link to='/history' className='nav__link'>History</Link></li>
                    <li><a href="#" className='nav__link'>Link #3</a></li>
                    <li><a href="#" className='nav__link'>Link #4</a></li>
                </ul>
            </nav>
    )
}