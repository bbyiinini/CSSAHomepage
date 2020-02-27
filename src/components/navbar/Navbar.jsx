import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import logoFile from '../../assets/logo_name.png'
import logoMobile from '../../assets/logo.png'
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import PropTypes from 'prop-types'

const Navbar = (props) => {

  const isMobile = window.innerWidth < 480;

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Logo src={isMobile ? logoMobile : logoFile} alt="CSSA Logo" />
          <NavLinks style={linkAnimation}>
            <li><a href="/">PM</a>
              <ul>
                <li>abs</li>
                <li>abs</li>
                <li>abs</li>
                <li>abs</li>
              </ul>
            </li>
            <li><a href="/">学术</a></li>
            <li><a href="/">宣传</a></li>
            <li><a href="/">外联</a></li>
            <li><a href="/">技术</a>
              <ul>
                <li>abs</li>
                <li>bs</li>
                <li>as</li>
                <li>aasfasfasbs</li>
              </ul>
            </li>
            <li><a href="/">文体</a>
              <ul>
                <li>abs</li>
                <li>abs</li>
                <li>abs</li>
                <li>abs</li>
              </ul>
            </li>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 1;
  font-size: 1.8rem;
`;

Navbar.propTypes = {
  navbarState: PropTypes.bool, 
  handleNavbar: PropTypes.func
}



const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 10rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: 0 0;
  display: flex;

  & ul {
    display: none;
    background-color: #ffffff;
    position: absolute;
    width: 160px;
    list-style: none;
    & li{
      float: none;
      padding: 0;
      border-left: 1px solid #eaeaea;
      border-right: 1px solid #eaeaea;
      border-top: 1px solid #eaeaea;
      color: #666666;
      transition: all 300ms linear 0s;
      cursor: pointer;
      &:hover{
        color: #89aac5;
        border-bottom: 1px solid #89aac5;
      }
    }
  }

  & li:hover {
    ul{
      display: block;
    }
  }

  & a {
    color: #666666;
    line-height: 100px;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #89aac5;
      border-bottom: 1px solid #89aac5;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 85%;
  margin: auto 0;
`;