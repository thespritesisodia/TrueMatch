import React from 'react';
import {
  AboutContainer,
  AboutWrapper,
  AboutHeader,
  AboutTitle,
  AboutSubtitle,
  AboutSection,
  AboutCard,
  TeamSection,
  TeamTitle,
  TeamGrid,
  TeamMember,
  TeamMemberImage,
  TeamMemberName,
  TeamMemberRole,
  TechSection,
  TechTitle,
  TechGrid,
  TechCard,
  TechIcon,
  TechName,
  TechDescription,
  InitialsCircle
} from './AboutUsElements';
import { FaReact, FaNodeJs, FaDatabase, FaFire, FaCreditCard, FaLock } from 'react-icons/fa';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Sprite Nestorial Sisodia',
      role: 'Backend Developer',
      initial: 'S'
    },
    {
      name: 'Shikhar Upadhyay',
      role: 'Backend Developer',
      initial: 'S'
    },
    {
      name: 'Ayush Kumar Gupta',
      role: 'Frontend Developer',
      initial: 'A'
    },
    {
      name: 'Aashima Singh',
      role: 'Frontend Developer',
      initial: 'A'
    }
  ];

  const technologies = [
    {
      icon: <FaReact />,
      name: 'React.js',
      description: 'Frontend framework for building user interfaces'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
      description: 'Backend runtime environment'
    },
    {
      icon: <FaDatabase />,
      name: 'MongoDB',
      description: 'NoSQL database for storing user data'
    },
    {
      icon: <FaFire />,
      name: 'Firebase',
      description: 'Authentication and real-time database'
    },
    {
      icon: <FaCreditCard />,
      name: 'Stripe',
      description: 'Secure payment processing'
    },
    {
      icon: <FaLock />,
      name: 'Security',
      description: 'End-to-end encryption and data protection'
    }
  ];

  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutHeader>
          <AboutTitle>About TrueMatch.com</AboutTitle>
          <AboutSubtitle>Connecting Hearts, Building Futures</AboutSubtitle>
        </AboutHeader>

        <AboutSection>
          <AboutCard>
            <h2>Our Story</h2>
            <p>
              TrueMatch.com is a modern matrimonial platform developed by a team of passionate MCA students
              from 4th semester. Our mission is to revolutionize the way people find their life partners
              by combining traditional values with cutting-edge technology.
            </p>
            <p>
              As part of our MCA curriculum project, we have created a full-stack application that
              demonstrates our understanding of modern web development practices and technologies.
              The project showcases our ability to integrate various services and create a secure,
              user-friendly platform for matrimonial services.
            </p>
          </AboutCard>
        </AboutSection>

        <TeamSection>
          <TeamTitle>Meet Our Team</TeamTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember key={index}>
                <InitialsCircle>{member.initial}</InitialsCircle>
                <TeamMemberName>{member.name}</TeamMemberName>
                <TeamMemberRole>{member.role}</TeamMemberRole>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamSection>

        <TechSection>
          <TechTitle>Technologies We Use</TechTitle>
          <TechGrid>
            {technologies.map((tech, index) => (
              <TechCard key={index}>
                <TechIcon>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
                <TechDescription>{tech.description}</TechDescription>
              </TechCard>
            ))}
          </TechGrid>
        </TechSection>

        <AboutSection>
          <AboutCard>
            <h2>Project Overview</h2>
            <p>
              This project is a comprehensive matrimonial platform that includes:
            </p>
            <ul>
              <li>User authentication and profile management using Firebase</li>
              <li>Advanced search and matching algorithms</li>
              <li>Secure payment processing with Stripe integration</li>
              <li>Real-time messaging and notifications</li>
              <li>Responsive design for all devices</li>
              <li>Premium features and subscription management</li>
            </ul>
            <p>
              Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this project
              demonstrates our team's ability to create scalable, secure, and user-friendly web
              applications. The integration of Firebase for authentication and Stripe for payments
              showcases our understanding of third-party service integration and security best practices.
            </p>
          </AboutCard>
        </AboutSection>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutUs; 