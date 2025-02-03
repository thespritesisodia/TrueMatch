import styled from "styled-components";
import { Link } from "react-router-dom";

const containerColor = "#010606";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: rgb(193, 69, 255);
  background: linear-gradient(
    90deg,
    rgba(243, 184, 73, 0.9450630594034489) 0%,
    rgba(242, 179, 61, 1) 100%
  );
`;

export const FormWrap = styled.div`
  display: flex;  /* Aligns items horizontally */
  height: 100vh;  /* Full viewport height */
  width: 100%;  /* Full width of the screen */
  
  @media screen and (max-width: 768px) {
    flex-direction: column;  /* Stack the elements on smaller screens */
  }
`;

export const FormContainer = styled.div`
  flex: 1;  /* Take up 50% of the screen */
  height: 110%;  /* Full height */
 
 
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
  
  @media screen and (max-width: 768px) {
    width: 100%;  /* Take full width on smaller screens */
    height: auto;  /* Let it adjust based on content */
  }
`;

export const Icon = styled(Link)`
  margin-left: -3.8rem;
  margin-top: 0rem;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    margin-left: 1rem;
    margin-top: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;  /* Take up 50% of the screen */
  height: 100%;  /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;  /* Image takes the full width of the container */
    height: 100%;  /* Image takes the full height of the container */
    object-fit: cover;  /* Ensures image covers the entire container */
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    display: none;  /* Hide image on smaller screens */
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Form = styled.form`
  background: ${containerColor};
  max-width: 400px;  /* Set to a reasonable max-width */
  width: 200%;  /* Full width of its container */
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 5rem 2rem;  /* Adjust padding as needed */
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;


export const H1 = styled.h1`
  margin-bottom: 2.5rem;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #fff;
`;

export const Input = styled.input`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 4px;
`;

export const Button = styled.button`
  background: #f2b33d;
  padding: 1rem 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 1.5rem;
  color: #fff;
  font-size: 0.8rem;
`;