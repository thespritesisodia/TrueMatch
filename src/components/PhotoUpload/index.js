import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PhotoContainer,
  PhotoWrapper,
  PhotoForm,
  FormTitle,
  FormSubtitle,
  FormGroup,
  FormLabel,
  UploadBox,
  UploadInput,
  UploadButton,
  PreviewImage,
  GuidelinesContainer,
  GuidelinesTitle,
  GuidelinesList,
  GuidelineItem,
  DoItem,
  DontItem,
  PrivacyText,
  ButtonContainer,
  SubmitButton,
  SkipButton,
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
} from './PhotoElements';
import { FaHeart, FaCheck, FaTimes, FaUpload } from 'react-icons/fa';

const PhotoUpload = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage) {
      // Store the image in localStorage or handle upload
      localStorage.setItem('profilePhoto', previewUrl);
    }
    // Navigate to hobbies page
    navigate('/hobbies');
  };

  const handleSkip = () => {
    navigate('/hobbies');
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
    <PhotoContainer>
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
      <PhotoWrapper>
        <FormBackground>
          <HeartIcon>
            <FaHeart />
          </HeartIcon>
          <PhotoForm onSubmit={handleSubmit}>
            <FormTitle>Upload Your Photo</FormTitle>
            <FormSubtitle>Help others get to know you better</FormSubtitle>

            <FormGroup>
              <FormLabel>Profile Photo</FormLabel>
              <UploadBox>
                <UploadInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  id="photo-upload"
                />
                <UploadButton htmlFor="photo-upload">
                  <FaUpload />
                  <span>Choose Photo</span>
                </UploadButton>
                {previewUrl && (
                  <PreviewImage src={previewUrl} alt="Preview" />
                )}
              </UploadBox>
            </FormGroup>

            <GuidelinesContainer>
              <GuidelinesTitle>Photo Guidelines</GuidelinesTitle>
              <GuidelinesList>
                <DoItem>
                  <FaCheck />
                  <span>Clear, well-lit photos</span>
                </DoItem>
                <DoItem>
                  <FaCheck />
                  <span>Front-facing portrait</span>
                </DoItem>
                <DoItem>
                  <FaCheck />
                  <span>Recent photo (within 6 months)</span>
                </DoItem>
                <DontItem>
                  <FaTimes />
                  <span>No group photos</span>
                </DontItem>
                <DontItem>
                  <FaTimes />
                  <span>No selfies</span>
                </DontItem>
                <DontItem>
                  <FaTimes />
                  <span>No side profiles</span>
                </DontItem>
                <DontItem>
                  <FaTimes />
                  <span>No blurry or unclear photos</span>
                </DontItem>
              </GuidelinesList>
            </GuidelinesContainer>

            <PrivacyText>
              <FaCheck />
              <span>100% Privacy Guaranteed</span>
            </PrivacyText>

            <ButtonContainer>
              <SkipButton type="button" onClick={handleSkip}>
                Skip for Now
              </SkipButton>
              <SubmitButton type="submit">
                Continue
              </SubmitButton>
            </ButtonContainer>
          </PhotoForm>
        </FormBackground>
      </PhotoWrapper>
    </PhotoContainer>
  );
};

export default PhotoUpload; 