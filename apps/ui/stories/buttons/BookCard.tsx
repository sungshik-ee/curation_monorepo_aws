import React from "react";
import { Composition, Box } from "atomic-layout";
import { StyledGmarketFont, StyledGmarketBoldFont } from "./styles/button";
import styled from "styled-components";
import image from "../assets/RA_01_01.png";

type Props = {};
const StyledText = styled.div`
  text-align: center;
  font-family: "GmarketSansMedium";
  font-size: 20px;
  letter-spacing: -1.4px;
  font-stretch: normal;
  //font-weight: 500;
`;

const StyledBoldText = styled(StyledText)`
  //font-family: "GmarketSansBold";
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.2px;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  display: block;
  margin: 0 auto;
`;

export const BookCard: React.FC<Props> = (props: Props) => {
  return (
    <Composition gap={10}>
      <StyledImage src={image} />
      <Composition gap={8}>
        <StyledGmarketFont />
        <StyledBoldText>고구마구마(2017)</StyledBoldText>
        <Composition gap={6}>
          <StyledText>주요 온라인 서점 TOP 100 등</StyledText>
          <StyledText>킨더랜드 / 언어,표현</StyledText>
        </Composition>
      </Composition>
    </Composition>
  );
};
