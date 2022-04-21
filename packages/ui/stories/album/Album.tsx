import React from 'react'
import styled from "styled-components";
import {Composition, Box} from "atomic-layout";
import {Button} from "../buttons/Button";
import {IoMdHeartEmpty, IoIosMore} from "react-icons/io";

const templateMobile = `
  image
  content
`;
const templateMd = `
  image content
  / 150px auto
`;

const StyledAlbum = styled.div`
  background-color: #181818;
  color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 16px;
  //padding: 1.818rem;
  //border-radius: 1.455rem;
`

const StyledTitle = styled.h3`
  font-size: 23px;
  margin: 0 0 10px 0;
  //font-size: 1.4rem;
  //margin: 0 0 0.909rem 0;
`;

const StyledInfo = styled.div`
  color: rgb(179, 179, 179);
  font-size: 0.7rem;
  margin: 10px 0;
`;

const StyledBox = styled.span`
  color: rgb(179, 179, 179);
`;

const StyledIcon = styled.div`
  height: 24px;
  width: 24px;
  justify-self: center;
`;

const StyledImg = styled.img`
    width: 100%;
`;

interface Props {
    image: string,
    title: string,
    author: string,
    info: string
}

export const Album: React.FC<Props> = props => {
    return (
        <Composition
            as={StyledAlbum}
            template={templateMobile}
            templateMd={templateMd}
            gap={12}
            maxWidth={320}
            maxWidthMd={480}
            maring="auto"
        >
            {(Areas) => (
                <>
                    <Areas.Image>
                        <Box flex justifyContent="center">
                            <StyledImg src={props.image} alt="album"/>
                        </Box>
                    </Areas.Image>
                    <Areas.Content
                        flex flexDirection="column"
                        justifyContent="space-between"
                    >
                        <StyledTitle>{props.title}</StyledTitle>
                        <span>
                            {" "}
                            <StyledBox>By</StyledBox> {props.author}
                        </span>
                        <StyledInfo>{props.info}</StyledInfo>
                        <Composition
                            templateCols="1fr auto auto"
                            gap={10}
                            alignItems="center"
                            paddingTop={1}
                        >
                            <Box as={Button} flexGrowMobileDown={1}/>
                            <StyledIcon as={IoMdHeartEmpty} />
                            <StyledIcon as={IoIosMore}/>
                        </Composition>
                    </Areas.Content>
                </>
            )}
        </Composition>
    )
}

