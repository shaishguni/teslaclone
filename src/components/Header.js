import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'

const Header = () => {
    const [BurgerStatus, setBurgerStatus] = useState(false);
  return (
   <Container>
    <a href='localhost:3000'>
        <img src="/images/logo.svg" alt="" />
    </a>
    <Menu>
        <a href="localhost:3000">Model S</a>
        <a href="localhost:3000">Model 3</a>
        <a href="localhost:3000">Model X</a>
        <a href="localhost:3000">Model Y</a>
    </Menu>
    <RightMenu> 

        <a href="localhost:3000">Shop</a>
        <a href="localhost:3000">Tesla Account</a>

        <CustomMenu onClick={()=>{setBurgerStatus(true)}}/>
    </RightMenu>
    <BurgerNav show={BurgerStatus}>
        <CloseWrapper>
            <CustomClose onClick={()=>{setBurgerStatus(false)}}/>
        </CloseWrapper>
       
        <li><a href="localhost:3000">Existing Inventory</a></li>
        <li><a href="localhost:3000">Used Inventory</a></li>
        <li><a href="localhost:3000">Trade-In</a></li>
        <li><a href="localhost:3000">CyberTruck</a></li>
        <li><a href="localhost:3000">Roadster</a></li>
        <li><a href="localhost:3000">Existing Inventory</a></li> 
        <li><a href="localhost:3000">Existing Inventory</a></li>
        <li><a href="localhost:3000">Existing Inventory</a></li> 
    </BurgerNav>
   </Container>
  )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position: fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
    `
const Menu = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 1;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  padding:2px;
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition:transform 0.2s ease-in;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2)
        a {
            font-weight:600;

        }
    }

`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper= styled.div` 
    display:flex;
    justify-content:flex-end;
`