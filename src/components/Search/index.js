import React, { useState } from 'react';
import {
  SearchContainer,
  SearchWrapper,
  SearchHeader,
  SearchTitle,
  SearchSubtitle,
  SearchForm,
  FilterGrid,
  FilterGroup,
  FilterLabel,
  FilterSelect,
  SearchButton,
  ResultsContainer,
  ResultCard,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileDetails,
  ProfileLocation,
  ConnectButton,
  AIButton,
  MatchModal,
  MatchContent,
  CongratulationGif,
  CongratulationText,
  MatchMessage,
  MatchProfiles,
  MatchProfile,
  MatchProfileImage,
  MatchProfileName,
  CloseButton,
  NoResultsMessage
} from './SearchElements';

// Sample data for different attributes
const sampleData = {
  names: [
    'Priya Sharma', 'Rahul Patel', 'Ananya Singh', 'Vikram Mehta', 'Neha Gupta',
    'Arjun Reddy', 'Divya Kapoor', 'Karthik Nair', 'Meera Joshi', 'Rohan Verma',
    'Sneha Iyer', 'Aditya Kumar', 'Pooja Desai', 'Rajesh Malhotra', 'Tanvi Shah',
    'Amit Trivedi', 'Kavita Chopra', 'Suresh Menon', 'Deepika Agarwal', 'Vivek Saxena'
  ],
  languages: ['Hindi', 'English', 'Punjabi', 'Gujarati', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali'],
  castes: ['Brahmin', 'Kshatriya', 'Vaishya', 'Rajput', 'Jat', 'Gujjar', 'Yadav', 'Kurmi', 'Lohar', 'Kumhar'],
  areas: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'],
  images: [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c',
    'https://images.unsplash.com/photo-1552058544-f2b08422138a',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  ]
};

// Function to get random items from an array
const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to generate random age between 25 and 45
const getRandomAge = () => Math.floor(Math.random() * (45 - 25 + 1)) + 25;

const Search = () => {
  const [filters, setFilters] = useState({
    language: '',
    caste: '',
    area: '',
    sex: ''
  });

  const [results, setResults] = useState([]);
  const [showMatch, setShowMatch] = useState(false);
  const [perfectMatch, setPerfectMatch] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Generate 6 random profiles
    const randomProfiles = getRandomItems(sampleData.names, 6).map((name, index) => ({
      name,
      age: getRandomAge(),
      language: getRandomItems(sampleData.languages, 1)[0],
      caste: getRandomItems(sampleData.castes, 1)[0],
      location: getRandomItems(sampleData.areas, 1)[0],
      image: sampleData.images[index % sampleData.images.length]
    }));

    setResults(randomProfiles);
  };

  const handleAISearch = () => {
    // Generate two random profiles for AI match
    const randomProfiles = getRandomItems(sampleData.names, 2).map((name, index) => ({
      name,
      age: getRandomAge(),
      language: getRandomItems(sampleData.languages, 1)[0],
      caste: getRandomItems(sampleData.castes, 1)[0],
      location: getRandomItems(sampleData.areas, 1)[0],
      image: sampleData.images[index % sampleData.images.length],
      gender: index === 0 ? 'male' : 'female'
    }));

    if (randomProfiles.length === 2) {
      setPerfectMatch({
        male: randomProfiles[0],
        female: randomProfiles[1]
      });
      setShowMatch(true);
    }
  };

  const closeMatchModal = () => {
    setShowMatch(false);
    setPerfectMatch(null);
  };

  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchHeader>
          <SearchTitle>Find Your Perfect Match</SearchTitle>
          <SearchSubtitle>Search through thousands of profiles to find your ideal partner</SearchSubtitle>
        </SearchHeader>

        <SearchForm onSubmit={handleSearch}>
          <FilterGrid>
            <FilterGroup>
              <FilterLabel>Language</FilterLabel>
              <FilterSelect
                name="language"
                value={filters.language}
                onChange={handleFilterChange}
              >
                <option value="">Select Language</option>
                {sampleData.languages.map((lang, index) => (
                  <option key={index} value={lang}>{lang}</option>
                ))}
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>Caste</FilterLabel>
              <FilterSelect
                name="caste"
                value={filters.caste}
                onChange={handleFilterChange}
              >
                <option value="">Select Caste</option>
                {sampleData.castes.map((caste, index) => (
                  <option key={index} value={caste}>{caste}</option>
                ))}
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>Area</FilterLabel>
              <FilterSelect
                name="area"
                value={filters.area}
                onChange={handleFilterChange}
              >
                <option value="">Select Area</option>
                {sampleData.areas.map((area, index) => (
                  <option key={index} value={area}>{area}</option>
                ))}
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>Gender</FilterLabel>
              <FilterSelect
                name="sex"
                value={filters.sex}
                onChange={handleFilterChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </FilterSelect>
            </FilterGroup>
          </FilterGrid>

          <SearchButton type="submit">Search Matches</SearchButton>
          <AIButton onClick={handleAISearch}>AI Integrated Search</AIButton>
        </SearchForm>

        <ResultsContainer>
          {results.length > 0 ? (
            results.map((profile, index) => (
              <ResultCard key={index}>
                <ProfileImage src={profile.image} alt={profile.name} />
                <ProfileInfo>
                  <ProfileName>{profile.name}, {profile.age}</ProfileName>
                  <ProfileDetails>
                    <div>Language: {profile.language}</div>
                    <div>Caste: {profile.caste}</div>
                  </ProfileDetails>
                  <ProfileLocation>Location: {profile.location}</ProfileLocation>
                  <ConnectButton>Connect</ConnectButton>
                </ProfileInfo>
              </ResultCard>
            ))
          ) : (
            <NoResultsMessage>Use the filters above to find your perfect match</NoResultsMessage>
          )}
        </ResultsContainer>

        {showMatch && perfectMatch && (
          <MatchModal>
            <MatchContent>
              <CongratulationGif src="https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif" alt="Congratulations" />
              <CongratulationText>Congratulations! You Found a Perfect Match!</CongratulationText>
              <MatchMessage>
                Based on your preferences and compatibility analysis, we've found an ideal match for you.
                These two profiles have shown remarkable compatibility in terms of interests, values, and life goals.
              </MatchMessage>
              <MatchProfiles>
                <MatchProfile>
                  <MatchProfileImage src={perfectMatch.male.image} alt={perfectMatch.male.name} />
                  <MatchProfileName>{perfectMatch.male.name}</MatchProfileName>
                </MatchProfile>
                <MatchProfile>
                  <MatchProfileImage src={perfectMatch.female.image} alt={perfectMatch.female.name} />
                  <MatchProfileName>{perfectMatch.female.name}</MatchProfileName>
                </MatchProfile>
              </MatchProfiles>
              <CloseButton onClick={closeMatchModal}>Close</CloseButton>
            </MatchContent>
          </MatchModal>
        )}
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search; 