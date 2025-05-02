import styled from 'styled-components';

export const AboutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #010606 0%, #1a1a1a 100%);
  padding: 80px 0;
  color: #fff;
`;

export const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

export const AboutTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #f2b33d;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const AboutSubtitle = styled.p`
  font-size: 20px;
  color: #fff;
  opacity: 0.8;
`;

export const AboutSection = styled.section`
  margin-bottom: 60px;
`;

export const AboutCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    color: #f2b33d;
    margin-bottom: 20px;
    font-size: 32px;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #fff;
    opacity: 0.9;
    margin-bottom: 15px;
  }
`;

export const TeamSection = styled.section`
  margin-bottom: 60px;
`;

export const TeamTitle = styled.h2`
  text-align: center;
  color: #f2b33d;
  font-size: 36px;
  margin-bottom: 40px;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

export const TeamMember = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const TeamMemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #f2b33d;
`;

export const TeamMemberName = styled.h3`
  color: #f2b33d;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const TeamMemberRole = styled.p`
  color: #fff;
  opacity: 0.8;
  font-size: 16px;
`;

export const TechSection = styled.section`
  margin-bottom: 60px;
`;

export const TechTitle = styled.h2`
  text-align: center;
  color: #f2b33d;
  font-size: 36px;
  margin-bottom: 40px;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

export const TechCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const TechIcon = styled.div`
  font-size: 40px;
  color: #f2b33d;
  margin-bottom: 15px;
`;

export const TechName = styled.h3`
  color: #f2b33d;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const TechDescription = styled.p`
  color: #fff;
  opacity: 0.8;
  font-size: 14px;
`;

export const SiteInfoSection = styled.section`
  margin-bottom: 60px;
`;

export const SiteInfoTitle = styled.h2`
  text-align: center;
  color: #f2b33d;
  font-size: 36px;
  margin-bottom: 40px;
`;

export const SiteInfoContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

export const SiteInfoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #f2b33d;
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const SiteInfoText = styled.p`
  color: #fff;
  opacity: 0.8;
  font-size: 16px;
  line-height: 1.6;
`;

export const InitialsCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #f2b33d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 72px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 15px rgba(242, 179, 61, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`; 