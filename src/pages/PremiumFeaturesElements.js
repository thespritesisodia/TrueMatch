import styled from 'styled-components';

export const PremiumPageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #010606 0%, #1a1a1a 100%);
  padding: 80px 0;
  color: #fff;
`;

export const PremiumHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

export const PremiumTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #f2b33d;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const PremiumSubtitle = styled.p`
  font-size: 20px;
  color: #fff;
  opacity: 0.8;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 60px;
`;

export const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 40px;
  color: #f2b33d;
  margin-bottom: 20px;
`;

export const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: #fff;
`;

export const FeatureDescription = styled.p`
  font-size: 16px;
  color: #fff;
  opacity: 0.8;
  line-height: 1.6;
`;

export const PriceSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 60px;
`;

export const PriceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const PriceTitle = styled.h2`
  font-size: 32px;
  color: #f2b33d;
  margin-bottom: 20px;
`;

export const PriceAmount = styled.div`
  font-size: 48px;
  color: #fff;
  margin-bottom: 10px;
`;

export const PriceDuration = styled.div`
  font-size: 18px;
  color: #fff;
  opacity: 0.8;
  margin-bottom: 30px;
`;

export const PriceFeatures = styled.div`
  margin-bottom: 30px;
`;

export const PriceFeature = styled.div`
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
  opacity: 0.9;
`;

export const PriceButton = styled.button`
  background: #f2b33d;
  color: #010606;
  padding: 15px 40px;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(242, 179, 61, 0.3);
  }
`;

export const PremiumImage = styled.img`
  width: 100%;
  max-width: 1200px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 0 auto;
  display: block;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`; 