import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AfterLoginContainer,
  AfterLoginWrapper,
  AfterLoginContent,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './AfterLoginElements';

const AfterLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    // Check if profile is already created
    const profileData = localStorage.getItem('profileData');
    if (!profileData) {
      // Redirect to profile creation page
      navigate('/create-profile');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear all user data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('profileData');
    localStorage.removeItem('userHobbies');
    localStorage.removeItem('profilePhoto');
    localStorage.removeItem('qualificationsData');
    localStorage.removeItem('aboutYourself');
    
    // Navigate to home page
    navigate('/');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <AfterLoginContainer>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick={() => handleNavigation('/')}>TrueMatch</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={() => handleNavigation('/after-login')}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => handleNavigation('/search')}>Search</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => handleNavigation('/premium')}>Premium</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => handleNavigation('/about')}>About Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavLinks style={{ marginRight: '20px' }}>Welcome, {localStorage.getItem('userEmail')?.split('@')[0] || 'User'}</NavLinks>
            <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <AfterLoginWrapper>
        <AfterLoginContent>
          <h1>Welcome to TrueMatch!</h1>
          <p>Your profile is being set up. Please wait...</p>
        </AfterLoginContent>
      </AfterLoginWrapper>
    </AfterLoginContainer>
  );
};

export default AfterLogin; 