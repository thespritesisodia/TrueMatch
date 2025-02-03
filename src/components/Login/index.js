import React from "react";
import {
  Container,
  FormWrap,
  FormContainer,
  ImageContainer,
  Icon,
  FormContent,
  Form,
  H1,
  Label,
  Input,
  Button,
  Text
} from "./LoginElements";

// Import image
import TrueMatchImage from "../../Media/truematch.png";

const LogIn = () => {
  return (
    <Container id="login">
      <FormWrap>
        {/* Left Side: Login Form */}
        <FormContainer>
          <Icon to="/">TrueMatch.com</Icon>
          <FormContent>
            <Form action="#">
              <H1>Log In to your account</H1>
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" required />
              <Label htmlFor="password">Password</Label>
              <Input type="password" required />
              <Button type="submit">Log In</Button>
              <Text>Forgot my password</Text>
            </Form>
          </FormContent>
        </FormContainer>

        {/* Right Side: Image */}
        <ImageContainer>
          <img src={TrueMatchImage} alt="TrueMatch" />
        </ImageContainer>
      </FormWrap>
    </Container>
  );
};

export default LogIn;