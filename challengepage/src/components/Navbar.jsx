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
<div className='abajo'>
<div  id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div   class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
     <div className='border'> <img src={p1} class="d-block w-100" alt="..."/></div>
      <div >
        <h5>First slide label</h5>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div className='border'> <img src={p2} class="d-block w-100" alt="..."/></div>
      <div >
        <h5>Second slide label</h5>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".</p>
      </div>
    </div>
    <div class="carousel-item">
    <div className='border'> <img src={p3} class="d-block w-100" alt="..."/></div>
      <div>
        <h5>Third slide label</h5>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </div>

     


</div> 

    )
}
export default Navbar