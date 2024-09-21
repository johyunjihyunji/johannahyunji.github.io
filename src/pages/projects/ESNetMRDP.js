import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import App from '../index';


const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
`;

const HeaderImage = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  text-align: right;
`;

const InfoItem = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const InfoContent = styled.p`
  font-size: 16px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

`;

const Subsection = styled.div`
  flex: '1';
  max-width: '50%;
`;

const SubsectionTitle = styled.h3`
  font-size: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TeamPhoto = styled.a`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

function Yelp() {
  return (
    <App>
      <Container>
        <HeaderImage>
        <StaticImage 
          src="../../../static/ESNetMRDPHeader.png"
          alt="Project Header"
          placeholder="blurred" // Optional placeholder
          layout="constrained" // Layout options
          style={{ borderRadius: '10px' }}
        />
        </HeaderImage>
      
      <InfoRow>
        <InfoItem>
          <InfoTitle>Role</InfoTitle>
          <InfoContent>Creative Design Consultant</InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Skills</InfoTitle>
          <InfoContent>
            Performance Marketing
            <br />
            Content Ideation
            <br />
            User Survey and AB Testings
            <br />
            Brand Design System
            <br />
            User Persona
          </InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Timeline</InfoTitle>
          <InfoContent>Jan 2024 - June 2024</InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Team</InfoTitle>
          <InfoContent>
            UMA Design Team: 
            <br />
            Jazzy Rao, Jenny Wang, Amber Louie, Andrea Yang, Isabella He, Jenny Kim, Johanna Lee, Kimmy Pruit, Naomi Manuel, Vivian Butler 
          </InfoContent>
        </InfoItem>
      </InfoRow>

      <Section>
      <SectionTitle>Background</SectionTitle>
      <FlexContainer>

        <Subsection>
        <SubsectionTitle style ={{ color: '#5a5a5a' }}>Yelp Home Services</SubsectionTitle>
        <Paragraph>
          <b>Yelp</b>, founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. 
          As part of this project, my team focused on promoting <b>Yelp's Home Services</b>, which connects consumers with trusted professionals for various home improvement tasks. 
          By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to <b>broaden the scope of Yelp's recognition and 
          enhance visibility</b> for these home service providers. 
        </Paragraph>

        </Subsection>
        <Subsection>
        <SubsectionTitle style ={{ color: '#5a5a5a' }}>UMA Design</SubsectionTitle>
        <Paragraph>
        <b>Design Team at the Undergraduate Marketing Association</b> is a creative group of individuals passionate about <b>visual 
        storytelling and crafting impactful brand experiences</b>. We are dedicated to pushing the boundaries of design and creating innovative 
        marketing solutions.  With our expertise in interface & graphic design, user experience, and all visual communications, we <b>collaborate with 
        clients spanning diverse industries.</b>
        </Paragraph>
        </Subsection>

      </FlexContainer>
      </Section>



      <Section>
      <SectionTitle>Project Scope</SectionTitle>
      <FlexContainer>
      <TeamPhoto style={{ flex: '1', maxWidth: '40%' }}>
          <StaticImage 
            src="../../../static/YelpFinal.jpeg"
            alt="Project Header"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '10px' }}
          />
        </TeamPhoto>

        <Subsection style ={{ maxWidth: '60%' }}>
        <SubsectionTitle style ={{color: '#FF1A1A' }}>Performance Marketing</SubsectionTitle>
        <Paragraph>
        Deliver Performance Marketing ideations for <b>Home Services project</b> to enhance engagement <b> among Gen Z, millennials, 
        and young homeowners </b> needing home services 
        </Paragraph>

        <SubsectionTitle style ={{ color: '#FF1A1A' }}>Brand Design System</SubsectionTitle>
        <Paragraph>
        Establish a robust <b>graphic design system</b> that reinforces brand consistency and strengthens connection with three 
        distinct audiences: <b>Consumers, Local Businesses, and Brand stakeholders</b>.
        </Paragraph>

        <br />
        <Paragraph>
        {"<---"}During our <b>final deliverable</b> with Yelp's marketing team :)
        </Paragraph>
        </Subsection>

        </FlexContainer>
      </Section>

      <Section>
      <SectionTitle>Reflection</SectionTitle>
      <FlexContainer>

        <Subsection style ={{ maxWidth: '50%' }}>
        <SubsectionTitle style ={{color: '#5a5a5a'}}>Designing Branding System:</SubsectionTitle>
        <Paragraph>
        The biggest challenge was creating a branding system for Yelp that remained cohesive 
        under the main brand while catering to different target groups. Took trial and error to successfully differentiate
        the design system for consumers, brands, and businesses, maintaining Yelp's overall identity while addressing the unique needs of each audience.

        </Paragraph>

        <SubsectionTitle style ={{color: '#5a5a5a' }}>Video Concept Ideation and Storyboarding:</SubsectionTitle>
        <Paragraph>
        I particularly enjoyed the video concept ideation and storyboard mock-ups stage, leveraging my experience 
        in personal video content creation. This project offered a new perspective as I approached video creation from a marketing standpoint,
        contrasting to catering personal memories and experiences.


        </Paragraph>
        
        </Subsection>

        <TeamPhoto style={{ flex: '1', maxWidth: '50%' }}>
          <StaticImage 
            src="../../../static/YelpClientReveal.jpg"
            alt="Project Header"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '10px' }}
          />
        </TeamPhoto>

      </FlexContainer>
      </Section>
    </Container>
    </App>
  );
};

export default Yelp;