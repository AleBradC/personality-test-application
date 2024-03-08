import React from "react";
import styled from "styled-components";

interface PersonalityTypeProps {
  name: string;
  image: string;
}

const PersonalityType: React.FC<PersonalityTypeProps> = ({ name, image }) => {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const Name = styled.h2`
  font-size: 20px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.white};
  font-family: "Montserrat", sans-serif;
`;

export default PersonalityType;
