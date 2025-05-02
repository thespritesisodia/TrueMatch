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

export const QualificationsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
`;

export const QualificationsWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  margin: 2rem auto;
  padding: 0 2rem;
`;

export const FormBackground = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 142, 142, 0.1) 100%);
    z-index: 0;
  }
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

export const QualificationsForm = styled.form`
  position: relative;
  z-index: 1;
`;

export const FormTitle = styled.h1`
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 600;
`;

export const FormSubtitle = styled.p`
  color: #636e72;
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  color: #2d3436;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #dfe6e9;
  border-radius: 10px;
  font-size: 1rem;
  color: #2d3436;
  background-color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232d3436' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
  }

  &:hover {
    border-color: #ff6b6b;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #dfe6e9;
  border-radius: 10px;
  font-size: 1rem;
  color: #2d3436;
  background-color: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
  }

  &:hover {
    border-color: #ff6b6b;
  }

  &::placeholder {
    color: #b2bec3;
  }
`;

export const CreateProfileButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
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

export const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #2d3436;

  svg {
    font-size: 4rem;
    color: #00b894;
    margin-bottom: 1rem;
    animation: scaleIn 0.5s ease-out;

    @keyframes scaleIn {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #2d3436;
  }

  p {
    font-size: 1.1rem;
    color: #636e72;
  }
`; 