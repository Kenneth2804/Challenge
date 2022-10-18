import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import imagen from '../sets/Vector.png'
import texto from '../sets/texto.png'
import texto2 from '../sets/texto2.png'
import texto3 from '../sets/dentrolorem.png'
import linea from '../sets/Vector6.png'
import texto4 from '../sets/texto4derecha.png'
import texto5 from '../sets/t5.png'
import texto6 from '../sets/t6.png'
import vacations from '../sets/vacations.png'
import animal from '../sets/animal.png'
import slogan from '../sets/slogan.png'
import waves from '../sets/ola2.png'
import bstar from '../sets/bstar.png'
import star from '../sets/star.png'
import words from '../sets/words.png'
import after from '../sets/after.png'
import Dots from './Dots'

import p1 from '../sets/profile1.jpg';
import p2 from '../sets/profile2.jpg';
import p3 from '../sets/profile3.jpg';
import p4 from '../sets/profile4.jpg';




const Navbar = () => {




    
     
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }


    return (
     <div>
    <header className="header__middle">
         <div className="wknd">
                
                <p>WKND</p>
         
           </div>
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
               

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Galería <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Online Shop </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li>
                        </ul>
                    </li>

                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Servicios <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Online Shop </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li>
                        </ul>
                    </li>


                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Sobre nosotros <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Online Shop </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li>
                        </ul>
                    </li>
                    
                    <li className="menu-item sub__menus__arrows" > <Link to="#"> Contacto <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Online Shop </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li>
                        </ul>
                    </li>
        <div className='cuadrado'><a href="#"><img className='vector' src={imagen} alt='nop'/>
        </a><div className='ingresar'>Ingresar</div></div>
                </ul>
<div>
    <img className='vacations' src={texto}></img>
</div>

                    
                    </nav>     

                </div>   

        
        
            </div>
	    </div>

    </header><br></br>
        <div className='part2' >      
        <div>
        <img   className='textolorem' src={texto2}/> 
        </div>
        
        <div>
        <img   className='textolorem2' src={texto3}/> 
        </div>
        <div>
        <img   className='t4derecha' src={texto4}/> 
        </div>
        <div>
        <img   className='t5derecha' src={texto5}/> 
        </div>
        <div>
        <img   className='t6derecha' src={texto6}/> 
        </div>
        <div>
        <img   className='linea' src={linea}/> 
        </div>
        <div className='rectangle'>
          <div><img className='slogan' src={slogan}/></div>
          <div><img className='animal' src={animal}/></div>
          <div><img className='vacations2' src={vacations}/></div>
        <div><img className='waves' src={waves}/></div>
        </div>

        <div>
            <img src={bstar} className="bstar"></img>
            <img src={star} className="star"></img>
            <img src={bstar} className="bstar2"></img>
            <img src={star} className="star2"></img>
            <img src={bstar} className="bstar3"></img>
            <img src={star} className="star3"></img>
            <img src={bstar} className="bstar4"></img>
            <img src={star} className="star4"></img>
            <img src={bstar} className="bstar5"></img>
            <img src={star} className="star5"></img>
            <img src={words} className="words"></img>
            <img src={after} className="after"></img>

        </div>


     

</div> 

</div> 

    )
}
export default Navbar