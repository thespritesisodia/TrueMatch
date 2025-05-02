import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HobbiesContainer,
  HobbiesWrapper,
  HobbiesForm,
  FormTitle,
  FormSubtitle,
  CategoryContainer,
  CategoryTitle,
  HobbiesGrid,
  HobbyItem,
  HobbyCheckbox,
  HobbyLabel,
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
  NavBtnLink
} from './HobbiesElements';
import { FaHeart } from 'react-icons/fa';

const Hobbies = () => {
  const navigate = useNavigate();
  const [selectedHobbies, setSelectedHobbies] = useState({
    creative: [],
    fun: [],
    fitness: [],
    other: []
  });

  const hobbies = {
    creative: [
      'Painting', 'Photography', 'Writing', 'Music', 'Dancing',
      'Cooking', 'Crafting', 'Design', 'Drawing', 'Sewing'
    ],
    fun: [
      'Travel', 'Movies', 'Reading', 'Gaming', 'Board Games',
      'Puzzles', 'Theater', 'Concerts', 'Museums', 'Festivals'
    ],
    fitness: [
      'Yoga', 'Running', 'Swimming', 'Cycling', 'Hiking',
      'Dancing', 'Gym', 'Martial Arts', 'Team Sports', 'Fitness Classes'
    ],
    other: [
      'Volunteering', 'Meditation', 'Gardening', 'Pets', 'Technology',
      'Fashion', 'Languages', 'History', 'Science', 'Nature'
    ]
  };

  const handleHobbyChange = (category, hobby) => {
    setSelectedHobbies(prev => {
      const categoryHobbies = [...prev[category]];
      const index = categoryHobbies.indexOf(hobby);
      
      if (index === -1) {
        categoryHobbies.push(hobby);
      } else {
        categoryHobbies.splice(index, 1);
      }

      return {
        ...prev,
        [category]: categoryHobbies
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store selected hobbies in localStorage
    localStorage.setItem('userHobbies', JSON.stringify(selectedHobbies));
    // Navigate to profile complete page
    navigate('/profile-complete');
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
    <HobbiesContainer>
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
      <HobbiesWrapper>
        <FormBackground>
          <HeartIcon>
            <FaHeart />
          </HeartIcon>
          <HobbiesForm onSubmit={handleSubmit}>
            <FormTitle>Your Interests</FormTitle>
            <FormSubtitle>Select your hobbies to find your perfect match</FormSubtitle>

            {Object.entries(hobbies).map(([category, categoryHobbies]) => (
              <CategoryContainer key={category}>
                <CategoryTitle>{category.charAt(0).toUpperCase() + category.slice(1)}</CategoryTitle>
                <HobbiesGrid>
                  {categoryHobbies.map(hobby => (
                    <HobbyItem key={hobby}>
                      <HobbyCheckbox
                        type="checkbox"
                        id={`${category}-${hobby}`}
                        checked={selectedHobbies[category].includes(hobby)}
                        onChange={() => handleHobbyChange(category, hobby)}
                      />
                      <HobbyLabel htmlFor={`${category}-${hobby}`}>
                        {hobby}
                      </HobbyLabel>
                    </HobbyItem>
                  ))}
                </HobbiesGrid>
              </CategoryContainer>
            ))}

            <SubmitButton type="submit">
              Save and Continue
            </SubmitButton>
          </HobbiesForm>
        </FormBackground>
      </HobbiesWrapper>
    </HobbiesContainer>
  );
};

export default Hobbies; 