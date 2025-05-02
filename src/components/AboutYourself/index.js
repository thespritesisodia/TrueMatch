import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AboutContainer,
  AboutWrapper,
  AboutForm,
  FormTitle,
  FormSubtitle,
  FormGroup,
  FormLabel,
  FormTextArea,
  SubmitButton,
  FormBackground,
  HeartIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  SuccessMessage
} from './AboutElements';
import { FaHeart, FaCheckCircle } from 'react-icons/fa';

const AboutYourself = () => {
  const navigate = useNavigate();
  const [aboutText, setAboutText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setAboutText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aboutText.trim()) {
      return;
    }
    
    // Store the about text in localStorage
    localStorage.setItem('aboutYourself', aboutText);
    
    // Show success message
    setShowSuccess(true);
    
    // Navigate to profile complete page after 2 seconds
    setTimeout(() => {
      navigate('/profile-complete');
    }, 2000);
  };

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

  return (
    <AboutContainer>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">TrueMatch</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/after-login">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/search">Search</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/premium">Premium</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavLinks style={{ marginRight: '20px' }}>Welcome, Sprite</NavLinks>
            <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <AboutWrapper>
        <FormBackground>
          <HeartIcon>
            <FaHeart />
          </HeartIcon>
          {showSuccess ? (
            <SuccessMessage>
              <FaCheckCircle />
              <h2>Congratulations, Sprite!</h2>
              <p>Your profile is being created successfully...</p>
            </SuccessMessage>
          ) : (
            <AboutForm onSubmit={handleSubmit}>
              <FormTitle>About Yourself</FormTitle>
              <FormSubtitle>Tell us more about who you are</FormSubtitle>

              <FormGroup>
                <FormLabel>Write about yourself</FormLabel>
                <FormTextArea
                  name="about"
                  value={aboutText}
                  onChange={handleChange}
                  placeholder="Share your interests, hobbies, values, and what you're looking for in a partner..."
                  required
                  rows="8"
                />
              </FormGroup>

              <SubmitButton type="submit">Complete Profile</SubmitButton>
            </AboutForm>
          )}
        </FormBackground>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutYourself; 