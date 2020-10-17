import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Route ,Link} from 'react-router-dom';
import Signin from "./Signin" ;
import ForumIcon from '@material-ui/icons/Forum';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
    
    <div className='header'>
      <Link to='/home'>
        <img
          className='header__logo'
          src='logo_banner\LOGO.png'
          alt="LOGO"
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <Link to="/complain" style={{textDecoration: 'none'}}>
          <div className="complain__box">
            <ForumIcon/>
            <p className="hide">Complain</p>
          </div>
        </Link>
        <Link to="/signin" style={{textDecoration: 'none'}}>
          <div className='header__option'>
              <PersonOutlineIcon/>
              <p className="hide">SignIn</p>
          </div>
        </Link>
        <Link to='/checkout' style={{textDecoration: 'none'}}>
          <div className='header__optionBasket'>
            <div className="shopping"><ShoppingBasketIcon /></div>
            <div className="hide"> <p>Add to cart</p></div>        
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
