import React from 'react';
import {
  PremiumContainer,
  PremiumWrapper,
  PremiumRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  PremiumButton
} from './PremiumElements';
import { useNavigate } from 'react-router-dom';

const Premium = () => {
  const navigate = useNavigate();

  const handleTryPremium = () => {
    navigate('/premium');
  };

  return (
    <PremiumContainer id="premium" lightBg={true}>
      <PremiumWrapper>
        <PremiumRow imgStart={true}>
          <Column1>
            <TextWrapper>
              <TopLine>Premium Features</TopLine>
              <Heading lightText={false}>Unlock Your Perfect Match</Heading>
              <Subtitle darkText={true}>
                Get access to exclusive features that will help you find your perfect match:
                <br /><br />
                • Advanced AI-powered matching
                <br />
                • Unlimited profile views
                <br />
                • Priority in search results
                <br />
                • Direct messaging with matches
                <br />
                • Detailed compatibility reports
                <br />
                • Verified profile badges
                <br />
                • 24/7 premium support
              </Subtitle>
              <BtnWrap>
                <PremiumButton onClick={handleTryPremium}>
                  Try Premium Features
                </PremiumButton>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Premium" />
            </ImgWrap>
          </Column2>
        </PremiumRow>
      </PremiumWrapper>
    </PremiumContainer>
  );
};

export default Premium; 