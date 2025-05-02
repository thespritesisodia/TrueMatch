import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  QualificationsContainer,
  QualificationsWrapper,
  QualificationsForm,
  FormTitle,
  FormSubtitle,
  FormGroup,
  FormLabel,
  FormSelect,
  FormInput,
  CreateProfileButton,
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
} from './QualificationsElements';
import { FaHeart, FaCheckCircle } from 'react-icons/fa';

const Qualifications = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    highestQualification: '',
    occupation: '',
    company: '',
    salary: ''
  });

  const qualifications = [
    'High School',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Diploma',
    'Other'
  ];

  const occupations = [
    'Software Engineer',
    'Doctor',
    'Teacher',
    'Business Owner',
    'Government Employee',
    'Private Sector Employee',
    'Self Employed',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in localStorage
    localStorage.setItem('qualificationsData', JSON.stringify(formData));
    // Show success message
    setShowSuccess(true);
    // Navigate to about yourself page after 2 seconds
    setTimeout(() => {
      navigate('/about-yourself');
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
    <QualificationsContainer>
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
      <QualificationsWrapper>
        <FormBackground>
          <HeartIcon>
            <FaHeart />
          </HeartIcon>
          {showSuccess ? (
            <SuccessMessage>
              <FaCheckCircle />
              <h2>Profile Created Successfully!</h2>
              <p>Redirecting to the next step...</p>
            </SuccessMessage>
          ) : (
            <QualificationsForm onSubmit={handleSubmit}>
              <FormTitle>Tell us about your career</FormTitle>
              <FormSubtitle>Help us find your perfect match</FormSubtitle>

              <FormGroup>
                <FormLabel>Highest Qualification</FormLabel>
                <FormSelect
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your qualification</option>
                  {qualifications.map((qual, index) => (
                    <option key={index} value={qual}>{qual}</option>
                  ))}
                </FormSelect>
              </FormGroup>

              <FormGroup>
                <FormLabel>Occupation</FormLabel>
                <FormSelect
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your occupation</option>
                  {occupations.map((occ, index) => (
                    <option key={index} value={occ}>{occ}</option>
                  ))}
                </FormSelect>
              </FormGroup>

              <FormGroup>
                <FormLabel>Company/Organization</FormLabel>
                <FormInput
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Annual Salary (in LPA)</FormLabel>
                <FormInput
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="Enter your annual salary"
                  min="0"
                  required
                />
              </FormGroup>

              <CreateProfileButton type="submit">Create Profile</CreateProfileButton>
            </QualificationsForm>
          )}
        </FormBackground>
      </QualificationsWrapper>
    </QualificationsContainer>
  );
};

export default Qualifications; 