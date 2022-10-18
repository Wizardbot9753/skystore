import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import sky_store_logo from "../../../images/sky-logo.png"
import Menu from "../menu/Menu";
import "./header.css"

const Header = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
    console.log("name");
  };

  const addFocusHandler = () => {
    setActiveSearch(true)
    console.log("first")
  }

  const removeFocusHandler = () => {
    setActiveSearch(false)
  }
  
  const searchHandler = () => {
    if(isSearch) {
      setIsSearch(false)
    }else{
      setIsSearch(true)
    }
  }

  return (
    <>
      <aside
        className={`drawer ${isOpen === true ? "display" : "-no-display"}`}
        id="drawer"
      >
        <div className="drawer-inner-wrapper">
          <button
            className="btn btn--icon close-button"
            onClick={toggleSidebar}
          >
            <span className="icon close-icon">
              <i className="fa-solid fa-xmark"></i>
            </span>
          </button>
          <ul className="left-hand-menu">
            <li className="menu-item" data-cta="home menu--home">
              <NavLink to="/" className="anchor" onClick={toggleSidebar}>
                <span className="text">Home</span>
              </NavLink>
            </li>
            <li className="left-user-menu-wrapper">
              <div className="user-menu-wrapper">
                <ul className="user-menu">
                  <li
                    className="menu-item"
                    data-cta="sign-in navigation-header--sign-in"
                  >
                    <NavLink to="/signin" className="anchor">
                      <span className="text">Sign In</span>
                    </NavLink>
                  </li>
                  <li
                    className="menu-item"
                    data-cta="sign-up navigation-header--sign-up"
                  >
                    <NavLink to="/signup" className="anchor">
                      <span className="text">Sign Up</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <NavLink to="/newtorent" className="anchor" onClick={toggleSidebar}>
                <span className="text"> Movies</span>
              </NavLink>
            </li>
            <li className="menu-item browse">
              <NavLink to="/skystorepremiere" className="anchor" onClick={toggleSidebar}>
                <span className="text">Sky Store Premiere</span>
              </NavLink>
            </li>
            <li className="menu-item browse">
              <NavLink to="/storepicks" className="anchor" onClick={toggleSidebar}>
                <span className="text">Sale</span>
              </NavLink>
            </li>
            <li className="menu-item active">
              <NavLink to="skyvipgifts" className="anchor" onClick={toggleSidebar}>
                <span className="text"> Sky VIP</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/mostpopular" className="anchor" onClick={toggleSidebar}>
                <span className="text">TV</span>
              </NavLink>
            </li>
            <li className="menu-item menu-item-featured redeem-voucher"
              data-cta="rdvc menu--rdvc">
                <NavLink to="/redeemvoucher" className="anchor" onClick={toggleSidebar}>
                  <span className="text">Redeem Voucher</span>
                </NavLink>
              </li>
          </ul>
        </div>
      </aside>
      <div className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
      onClick={toggleSidebar}></div>
      <header className="header-wrapper" id="header-view">
        <div className="header-bar">
          <div className="header-outer-wrapper">
            <div className="header-inner-wrapper">
              <div className="logo-wrapper">
                <div className="header-left-container">
                  <button className="hidden-b1 toggle-navigation btn btn--icon"
                  onClick={toggleSidebar}>
                    <span className="hamburger">
                    <i className="fa-solid fa-bars"></i>
                    </span>
                    <span className="text hiddern-b3 hidden-xs">Browse</span>
                  </button>
                </div>
                <NavLink to="/" className="logo-anchor anchor">
                  <picture className="logo">
                    <img 
                    className="main-logo" 
                    src={sky_store_logo}
                    alt="sky_store_logo"
                    />
                  </picture>
                </NavLink>
                <div className="header-right-container search-hidden">
                  <nav className="top-user-menu-wrapper">
                    <ul className="top-user-menu">
                      <li className="menu-item"
                      data-cta="sign-in navigation-header--sign-in">
                        <NavLink to="/signin" className="anchor">
                          <span className="text">Sign In</span>
                        </NavLink>
                      </li>
                      <li 
                      className="menu-item"
                      data-cta="sign-up navigation-header--sign-up">
                        <NavLink to="/signup" className="anchor">
                          <span className="text">Sign Up</span>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                  <div className="search-inner-wrapper">
                    <section className="search-input__container hide-search">
                      <div className="search-input">
                        <input 
                        type="search"
                        placeholder={activeSearch
                        ? "search for title,actors, directors" 
                        : "search"}
                        className={`search-input__textbox ${
                          activeSearch ? "focused" : ""
                        }`}
                        onClick={addFocusHandler}
                        onBlur={removeFocusHandler} />
                        <span className="search-active">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="toggle-search hidden-b1">
                  <div className="google-cast-button"></div>
                  <button 
                  className="btn btn--icon icon-clip-fix"
                  onClick={searchHandler}>
                    {isSearch ? (
                      <span className="search-text">Cancel</span>
                    ) : (
                      <span className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                    )}
                  </button>
                </div>
                {isSearch ? (
                  <input type="search"
                  placeholder = "Search for title, actors, directors"
                  name= ""
                  className="searchinputMobile"/>
                ): null}
              </div>
            </div>

            <Menu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
