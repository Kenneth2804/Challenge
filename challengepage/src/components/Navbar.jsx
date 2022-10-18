import React,{useState} from 'react';
import { useEffect } from 'react';
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
import About from './About';




const Navbar = ({script}) => {

     
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
        <div className="containe">
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
                    </nav>     
<div>
    <p className='vacations'>Las mejores vacaciones de tu vida</p>
</div>

                    
	    </div>

                </div>   

        
        
            </div>

    </header><br></br>
        <div className='part2' >      
        <div>
        <p className='textone'>Lorem ipsum</p> 
        </div>
        
        <div>
       <p className='texttwo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna </p>
        </div>
        <div>
        <p className='t4derecha'>Lorem ipsum </p> 
        </div>
        <div>
        <p  className='t5derecha'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p> 
        </div>
        <div>
        <p  className='t6derecha'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna </p> 
        </div>
        <div>
        <img   className='linea' src={linea}/> 
        </div>
        <div >
          <div className='rectangle'><p>.</p></div>
          <div> <img className='waves' src={waves}/></div>
          <div><p className='slogan'>Ready <br></br>to<br></br> sail</p></div>
          <div><img className='animal' src={animal}/></div>
          <div><p className='vacations2'>Your vacation is here</p></div>

        </div>

       <div >
       <div><p>.</p></div>
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
            <p className="words">Tus palabra, no nuestra </p>
            <p className="after">After 15 years running The Yacht Week, people have a lot to say about us</p></div>
<div className='cartitas'>
  <div className='containerr'>
  <div className="card">
                     
      <div><img src={p1}/>      <h2>Pablo Martinez</h2>
      <p>"Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.”</p>
      </div>
      
    </div>
    </div>  <div className='containerr'>
  <div className="card">

  <div><img src={p1}/>
  <h2>Pablo Martinez</h2>
  <p>"Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.”</p>
      </div>
      
    </div>
    </div>  <div className='containerr'>
  <div className="card">

  <div><img src={p1}/>      <h2>Pablo Martinez</h2>
      <p>"Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.”</p>
      </div>
      
    </div>
        </div>
        </div>
        </div>
        
</div> 

 

    )
}
export default Navbar