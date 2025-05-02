import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileForm,
  FormTitle,
  FormSubtitle,
  FormGroup,
  FormLabel,
  FormSelect,
  ContinueButton,
  FormBackground,
  HeartIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './ProfileElements';
import { FaHeart } from 'react-icons/fa';

const ProfileCreation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city: '',
    livingWithFamily: '',
    maritalStatus: '',
    diet: '',
    height: ''
  });

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai',
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
    'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal',
    'Visakhapatnam', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana'
  ];

  const maritalStatuses = [
    'Never Married',
    'Divorced',
    'Widowed',
    'Awaiting Divorce'
  ];

  const diets = [
    'Vegetarian',
    'Non-Vegetarian',
    'Eggetarian',
    'Vegan',
    'Jain'
  ];

  const heights = Array.from({ length: 31 }, (_, i) => {
    const feet = Math.floor((i + 150) / 30.48);
    const inches = Math.round(((i + 150) % 30.48) / 2.54);
    return `${feet}'${inches}"`;
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in localStorage or state management
    localStorage.setItem('profileData', JSON.stringify(formData));
    // Navigate to qualifications page
    navigate('/qualifications');
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
    <ProfileContainer>
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
      <ProfileWrapper>
        <FormBackground>
          <HeartIcon>
            <FaHeart />
          </HeartIcon>
          <ProfileForm onSubmit={handleSubmit}>
            <FormTitle>Create Your Profile</FormTitle>
            <FormSubtitle>Let's find your perfect match</FormSubtitle>

            <FormGroup>
              <FormLabel>City</FormLabel>
              <FormSelect
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">Select your city</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel>Do you live with your family?</FormLabel>
              <FormSelect
                name="livingWithFamily"
                value={formData.livingWithFamily}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel>Marital Status</FormLabel>
              <FormSelect
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                required
              >
                <option value="">Select marital status</option>
                {maritalStatuses.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel>Diet</FormLabel>
              <FormSelect
                name="diet"
                value={formData.diet}
                onChange={handleChange}
                required
              >
                <option value="">Select your diet</option>
                {diets.map((diet, index) => (
                  <option key={index} value={diet}>{diet}</option>
                ))}
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel>Height</FormLabel>
              <FormSelect
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
              >
                <option value="">Select your height</option>
                {heights.map((height, index) => (
                  <option key={index} value={height}>{height}</option>
                ))}
              </FormSelect>
            </FormGroup>

            <ContinueButton type="submit">Continue</ContinueButton>
          </ProfileForm>
        </FormBackground>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

export default ProfileCreation; 