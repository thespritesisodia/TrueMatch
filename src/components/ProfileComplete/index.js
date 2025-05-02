import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProfileContainer,
  ProfileWrapper,
  WelcomeSection,
  WelcomeTitle,
  WelcomeSubtitle,
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  MatchesSection,
  SectionTitle,
  MatchesGrid,
  MatchCard,
  MatchImage,
  MatchInfo,
  MatchName,
  MatchDetails,
  ActionButton,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  HeartIcon,
  ChatContainer,
  ChatHeader,
  ChatTitle,
  ChatMessages,
  Message,
  MessageContent,
  MessageTime,
  ChatInput,
  ChatInputForm,
  ChatInputField,
  SendButton,
  OnlineStatus,
  MinimizeButton,
  ChatIcon,
  ChatList,
  ChatListItem,
  ChatListHeader,
  ChatListTitle,
  ChatListClose,
  ChatListSearch,
  ChatListSearchInput,
  ChatListSearchIcon,
  ChatListContent,
  ChatListAvatar,
  ChatListInfo,
  ChatListName,
  ChatListPreview,
  ChatListTime,
  ChatListUnread,
  ChatListBadge
} from './ProfileElements';
import { FaHeart, FaSearch, FaStar, FaUserFriends, FaBell, FaCog, FaUserEdit, FaPaperPlane, FaCircle, FaMinus, FaComments, FaTimes, FaSearch as FaSearchIcon } from 'react-icons/fa';

const ProfileComplete = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [matches, setMatches] = useState([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showChatList, setShowChatList] = useState(false);
  const [activeChat, setActiveChat] = useState('Sarah');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Sarah',
      content: 'Hi! I noticed we have a lot in common. How are you?',
      time: '10:30 AM',
      isUser: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Hello! Yes, I saw that too. I\'m doing great, thanks!',
      time: '10:32 AM',
      isUser: true
    },
    {
      id: 3,
      sender: 'Sarah',
      content: 'That\'s wonderful! Would you like to know more about me?',
      time: '10:33 AM',
      isUser: false
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: 'Sarah',
      lastMessage: 'That\'s wonderful! Would you like to know more about me?',
      time: '10:33 AM',
      unread: 2,
      online: true,
      avatar: 'https://source.unsplash.com/random/300x300?portrait=1'
    },
    {
      id: 2,
      name: 'Emma',
      lastMessage: 'I love hiking too! We should plan something.',
      time: '9:45 AM',
      unread: 0,
      online: false,
      avatar: 'https://source.unsplash.com/random/300x300?portrait=2'
    },
    {
      id: 3,
      name: 'Sophie',
      lastMessage: 'Thanks for the recommendation!',
      time: 'Yesterday',
      unread: 1,
      online: true,
      avatar: 'https://source.unsplash.com/random/300x300?portrait=3'
    }
  ];

  useEffect(() => {
    // Load profile data from localStorage
    const storedProfile = localStorage.getItem('profileData');
    const storedHobbies = localStorage.getItem('userHobbies');
    const storedPhoto = localStorage.getItem('profilePhoto');
    
    if (storedProfile) {
      setProfileData(JSON.parse(storedProfile));
    }

    // Simulate loading matches (in a real app, this would be an API call)
    setMatches([
      {
        id: 1,
        name: 'Sarah',
        age: 28,
        location: 'New York',
        matchPercentage: 95,
        image: 'https://source.unsplash.com/random/300x300?portrait=1'
      },
      {
        id: 2,
        name: 'Emma',
        age: 26,
        location: 'Boston',
        matchPercentage: 88,
        image: 'https://source.unsplash.com/random/300x300?portrait=2'
      },
      {
        id: 3,
        name: 'Sophie',
        age: 29,
        location: 'Chicago',
        matchPercentage: 82,
        image: 'https://source.unsplash.com/random/300x300?portrait=3'
      }
    ]);
  }, []);

  useEffect(() => {
    // Scroll to bottom of messages
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

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

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: true
      };
      setMessages([...messages, message]);
      setNewMessage('');

      // Simulate response after 1 second
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'Sarah',
          content: 'That\'s interesting! Tell me more about it.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isUser: false
        };
        setMessages(prev => [...prev, response]);
      }, 1000);
    }
  };

  const handleMinimize = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMinimized(true);
    setShowChatList(false);
  };

  const handleChatIconClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowChatList(true);
  };

  const handleChatSelect = (chat) => {
    setActiveChat(chat.name);
    setIsMinimized(false);
    setShowChatList(false);
  };

  const handleCloseChatList = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowChatList(false);
  };

  const features = [
    {
      icon: <FaSearch />,
      title: 'Smart Search',
      description: 'Find your perfect match using our advanced matching algorithm'
    },
    {
      icon: <FaStar />,
      title: 'Premium Features',
      description: 'Unlock exclusive features to enhance your dating experience'
    },
    {
      icon: <FaUserFriends />,
      title: 'Match Suggestions',
      description: 'Get daily recommendations based on your preferences'
    },
    {
      icon: <FaBell />,
      title: 'Real-time Notifications',
      description: 'Never miss a message or match with instant notifications'
    }
  ];

  return (
    <ProfileContainer>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">TrueMatch</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/profile-complete">Home</NavLinks>
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
        <WelcomeSection>
          <HeartIcon>
            <FaHeart />
          </HeartIcon>
          <WelcomeTitle>Welcome to TrueMatch!</WelcomeTitle>
          <WelcomeSubtitle>Your journey to find true love begins here</WelcomeSubtitle>

          <StatsContainer>
            <StatCard>
              <StatNumber>95%</StatNumber>
              <StatLabel>Profile Complete</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>3</StatNumber>
              <StatLabel>New Matches</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>12</StatNumber>
              <StatLabel>Profile Views</StatLabel>
            </StatCard>
          </StatsContainer>
        </WelcomeSection>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <MatchesSection>
          <SectionTitle>Your Top Matches</SectionTitle>
          <MatchesGrid>
            {matches.map(match => (
              <MatchCard key={match.id}>
                <MatchImage src={match.image} alt={match.name} />
                <MatchInfo>
                  <MatchName>{match.name}, {match.age}</MatchName>
                  <MatchDetails>{match.location}</MatchDetails>
                  <MatchDetails>{match.matchPercentage}% Match</MatchDetails>
                  <ActionButton>View Profile</ActionButton>
                </MatchInfo>
              </MatchCard>
            ))}
          </MatchesGrid>
        </MatchesSection>
      </ProfileWrapper>

      {!isMinimized && !showChatList && (
        <ChatContainer>
          <ChatHeader>
            <ChatTitle>
              {activeChat}
              <OnlineStatus>
                <FaCircle />
                Online
              </OnlineStatus>
            </ChatTitle>
            <MinimizeButton 
              onClick={handleMinimize} 
              type="button"
              aria-label="Minimize chat"
            >
              <FaMinus />
            </MinimizeButton>
          </ChatHeader>
          <ChatMessages>
            {messages.map(message => (
              <Message key={message.id} isUser={message.isUser}>
                <MessageContent>{message.content}</MessageContent>
                <MessageTime>{message.time}</MessageTime>
              </Message>
            ))}
            <div ref={messagesEndRef} />
          </ChatMessages>
          <ChatInputForm onSubmit={handleSendMessage}>
            <ChatInputField
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <SendButton type="submit">
              <FaPaperPlane />
            </SendButton>
          </ChatInputForm>
        </ChatContainer>
      )}

      {isMinimized && !showChatList && (
        <ChatIcon 
          onClick={handleChatIconClick}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleChatIconClick(e);
            }
          }}
        >
          <FaComments />
          <ChatListBadge>3</ChatListBadge>
        </ChatIcon>
      )}

      {showChatList && (
        <ChatList>
          <ChatListHeader>
            <ChatListTitle>Messages</ChatListTitle>
            <ChatListClose 
              onClick={handleCloseChatList}
              type="button"
              aria-label="Close chat list"
            >
              <FaTimes />
            </ChatListClose>
          </ChatListHeader>
          <ChatListSearch>
            <ChatListSearchIcon>
              <FaSearchIcon />
            </ChatListSearchIcon>
            <ChatListSearchInput placeholder="Search messages..." />
          </ChatListSearch>
          <ChatListContent>
            {chats.map(chat => (
              <ChatListItem 
                key={chat.id} 
                onClick={() => handleChatSelect(chat)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleChatSelect(chat);
                  }
                }}
              >
                <ChatListAvatar src={chat.avatar} alt={chat.name} />
                <ChatListInfo>
                  <ChatListName>
                    {chat.name}
                    {chat.online && <OnlineStatus><FaCircle /></OnlineStatus>}
                  </ChatListName>
                  <ChatListPreview>{chat.lastMessage}</ChatListPreview>
                </ChatListInfo>
                <ChatListTime>{chat.time}</ChatListTime>
                {chat.unread > 0 && (
                  <ChatListUnread>{chat.unread}</ChatListUnread>
                )}
              </ChatListItem>
            ))}
          </ChatListContent>
        </ChatList>
      )}
    </ProfileContainer>
  );
};

export default ProfileComplete; 