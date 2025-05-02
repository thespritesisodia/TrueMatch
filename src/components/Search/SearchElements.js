import styled from "styled-components";

export const SearchContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(243, 184, 73, 0.945) 0%,
    rgba(242, 179, 61, 1) 100%
  );
  padding: 2rem 0;
`;

export const SearchWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SearchHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const SearchTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const SearchSubtitle = styled.p`
  color: #fff;
  font-size: 1.2rem;
  opacity: 0.9;
`;

export const SearchForm = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterLabel = styled.label`
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const FilterSelect = styled.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    border-color: #f2b33d;
    outline: none;
    box-shadow: 0 0 0 2px rgba(242, 179, 61, 0.2);
  }
`;

export const SearchButton = styled.button`
  background: #f2b33d;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;

  &:hover {
    background: #e6a62e;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(242, 179, 61, 0.3);
  }
`;

export const ResultsContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const ResultCard = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileName = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ProfileDetails = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

export const ProfileLocation = styled.p`
  color: #888;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export const ConnectButton = styled.button`
  background: #f2b33d;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  width: fit-content;

  &:hover {
    background: #e6a62e;
  }
`;

export const AIButton = styled.button`
  background: #4a90e2;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  margin: 1rem auto;
  display: block;

  &:hover {
    background: #357abd;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  }
`;

export const MatchModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const MatchContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  max-width: 600px;
  width: 90%;
`;

export const CongratulationGif = styled.img`
  width: 200px;
  height: 200px;
  margin: 1rem auto;
`;

export const CongratulationText = styled.h2`
  color: #ff0000;
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: bold;
`;

export const MatchMessage = styled.p`
  color: #333;
  font-size: 1.2rem;
  margin: 1rem 0;
  line-height: 1.6;
`;

export const MatchProfiles = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
`;

export const MatchProfile = styled.div`
  text-align: center;
`;

export const MatchProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f2b33d;
`;

export const MatchProfileName = styled.h3`
  color: #333;
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export const CloseButton = styled.button`
  background: #f2b33d;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: #e6a62e;
  }
`;

export const NoResultsMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 20px 0;
`; 