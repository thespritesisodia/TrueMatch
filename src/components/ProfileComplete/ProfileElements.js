import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ff6b6b;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.button`
  border-radius: 50px;
  background: #ff6b6b;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  line-height: 1.5;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff8e8e;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ProfileContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

export const WelcomeSection = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  margin-bottom: 2rem;
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #ff6b6b;
  font-size: 1.5rem;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const WelcomeTitle = styled.h1`
  color: #2d3436;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const WelcomeSubtitle = styled.p`
  color: #636e72;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

export const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatNumber = styled.div`
  color: #ff6b6b;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  color: #636e72;
  font-size: 1rem;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const FeatureIcon = styled.div`
  color: #ff6b6b;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  color: #2d3436;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const FeatureDescription = styled.p`
  color: #636e72;
  font-size: 0.9rem;
`;

export const MatchesSection = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  color: #2d3436;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`;

export const MatchesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const MatchCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const MatchImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const MatchInfo = styled.div`
  padding: 1.5rem;
`;

export const MatchName = styled.h3`
  color: #2d3436;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const MatchDetails = styled.p`
  color: #636e72;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ChatContainer = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  transition: all 0.3s ease;
`;

export const ChatHeader = styled.div`
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  padding: 1rem;
  color: white;
`;

export const ChatTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OnlineStatus = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: normal;

  svg {
    color: #4CAF50;
    margin-right: 0.5rem;
    font-size: 0.6rem;
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

export const MessageContent = styled.div`
  background: ${props => props.isUser ? 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)' : '#f0f0f0'};
  color: ${props => props.isUser ? 'white' : '#2d3436'};
  padding: 0.8rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export const MessageTime = styled.span`
  font-size: 0.7rem;
  color: #636e72;
  margin-top: 0.3rem;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

export const ChatInputForm = styled.form`
  display: flex;
  padding: 1rem;
  gap: 0.5rem;
  background: #f8f9fa;
  border-top: 1px solid #eee;
`;

export const ChatInputField = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #eee;
  border-radius: 25px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff6b6b;
  }
`;

export const SendButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 1rem;
  }
`;

export const MinimizeButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  z-index: 1001;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 1rem;
  }
`;

export const ChatIcon = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
`;

export const ChatListBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #4CAF50;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
`;

export const ChatList = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ChatListHeader = styled.div`
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChatListTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ChatListClose = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 1rem;
  }
`;

export const ChatListSearch = styled.div`
  padding: 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ChatListSearchIcon = styled.div`
  color: #636e72;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatListSearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 0.9rem;
  color: #2d3436;

  &::placeholder {
    color: #636e72;
  }
`;

export const ChatListContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`;

export const ChatListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const ChatListAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ChatListInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ChatListName = styled.div`
  font-weight: 600;
  color: #2d3436;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
`;

export const ChatListPreview = styled.div`
  color: #636e72;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatListTime = styled.div`
  font-size: 0.8rem;
  color: #636e72;
  white-space: nowrap;
`;

export const ChatListUnread = styled.div`
  background: #ff6b6b;
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  margin-left: 0.5rem;
`; 