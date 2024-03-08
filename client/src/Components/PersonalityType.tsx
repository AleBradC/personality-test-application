import React from "react";
import styled from "styled-components";
import extrovertImg from "../assets/extrovert-mascot.svg";
import introvertImg from "../assets/introvert-mascot.svg";

export enum PersonalityTypeVariants {
  INTROVERT = "INTROVERT",
  EXTROVERT = "EXTROVERT",
}

const variantType = {
  [PersonalityTypeVariants.EXTROVERT]: extrovertImg,
  [PersonalityTypeVariants.INTROVERT]: introvertImg,
};

interface PersonalityTypeProps {
  name?: string;
  variant: PersonalityTypeVariants;
}

export const PersonalityType: React.FC<PersonalityTypeProps> = ({
  name,
  variant,
}) => {
  return (
    <Container>
      <Image src={variantType[variant]} alt={name} />
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
  height: 140px;
  object-fit: cover;
`;

const Name = styled.h2`
  font-size: 20px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.white};
  font-family: "Montserrat", sans-serif;
`;
