import React from 'react';
import {
  PremiumPageContainer,
  PremiumHeader,
  PremiumTitle,
  PremiumSubtitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  PriceSection,
  PriceCard,
  PriceTitle,
  PriceAmount,
  PriceDuration,
  PriceFeatures,
  PriceFeature,
  PriceButton,
  PremiumImage
} from './PremiumFeaturesElements';
import { FaRobot, FaInfinity, FaStar, FaComments, FaChartLine, FaCheckCircle, FaHeadset } from 'react-icons/fa';

const PremiumFeatures = () => {
  const features = [
    {
      icon: <FaRobot />,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithm to find your perfect match based on compatibility and preferences.'
    },
    {
      icon: <FaInfinity />,
      title: 'Unlimited Views',
      description: 'Browse through unlimited profiles without any restrictions.'
    },
    {
      icon: <FaStar />,
      title: 'Priority Matching',
      description: 'Get your profile featured at the top of search results.'
    },
    {
      icon: <FaComments />,
      title: 'Direct Messaging',
      description: 'Chat directly with your matches without any limitations.'
    },
    {
      icon: <FaChartLine />,
      title: 'Compatibility Reports',
      description: 'Detailed analysis of your compatibility with potential matches.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Verified Badges',
      description: 'Stand out with a verified profile badge for increased trust.'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your needs.'
    }
  ];

  return (
    <PremiumPageContainer>
      <PremiumHeader>
        <PremiumTitle>Premium Features</PremiumTitle>
        <PremiumSubtitle>Unlock the full potential of TrueMatch.com</PremiumSubtitle>
      </PremiumHeader>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>

      <PriceSection>
        <PriceCard>
          <PriceTitle>Premium Plan</PriceTitle>
          <PriceAmount>$29.99</PriceAmount>
          <PriceDuration>per month</PriceDuration>
          <PriceFeatures>
            <PriceFeature>✓ All Premium Features</PriceFeature>
            <PriceFeature>✓ Unlimited Matches</PriceFeature>
            <PriceFeature>✓ Priority Support</PriceFeature>
            <PriceFeature>✓ Advanced Filters</PriceFeature>
            <PriceFeature>✓ Profile Boost</PriceFeature>
          </PriceFeatures>
          <PriceButton>Get Started</PriceButton>
        </PriceCard>
      </PriceSection>

      <PremiumImage src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Premium" />
    </PremiumPageContainer>
  );
};

export default PremiumFeatures; 