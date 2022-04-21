import React from "react";
import styled, {css} from "styled-components";
import {Composition, Box} from "atomic-layout";

import {Button} from "./Button"

interface Props {

}
export const Buttons: React.FC<Props> = props => {
    return (
        <Box flex justifyContent="center">
            <Button key={0} label="책과 친해져요 단계"/>
            <Button key={1} label="책과 생활해요 단계"/>

        </Box>
    )
}
