import React, { FC } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';
const StyledContainer = styled.div`
    width: 37px;
    height: 37px;
`;
const StyledIconContainer = styled.div`
    position: relative;
    width: 22.584px;
    height: 22.995px;
    left: 0;
    top: 0;
`;
const StyledPath1 = styled.path`
    fill: rgba(202, 152, 229, 1);
`;
const StyledSvg1 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 22.584px;
    height: 20.93px;
    left: 0;
    top: 2.065px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath2 = styled.path`
    fill: rgba(255, 255, 255, 1);
`;
const StyledSvg2 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 18.215px;
    height: 15.907px;
    left: 2.185px;
    top: 3.747px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath3 = styled.path`
    fill: rgba(247, 165, 57, 1);
`;
const StyledSvg3 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 3.022px;
    height: 3.307px;
    left: 5.191px;
    top: 12.914px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath4 = styled.path`
    fill: rgba(247, 165, 57, 1);
`;
const StyledSvg4 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 6.092px;
    height: 7.955px;
    left: 9.656px;
    top: 6.93px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath5 = styled.path`
    fill: rgba(247, 165, 57, 1);
`;
const StyledSvg5 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 4.695px;
    height: 5.824px;
    left: 7.419px;
    top: 9.731px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath6 = styled.path`
    fill: rgba(255, 204, 62, 1);
`;
const StyledSvg6 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 5.714px;
    height: 7.198px;
    left: 8.469px;
    top: 8.042px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath7 = styled.path`
    fill: rgba(255, 204, 62, 1);
`;
const StyledSvg7 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 4.051px;
    height: 4.684px;
    left: 6.232px;
    top: 11.226px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath8 = styled.path`
    fill: rgba(255, 204, 62, 1);
`;
const StyledSvg8 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 2.071px;
    height: 2.06px;
    left: 4.328px;
    top: 14.395px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath9 = styled.path`
    fill: rgba(255, 217, 57, 1);
`;
const StyledSvg9 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 2.832px;
    height: 2.041px;
    left: 13.926px;
    top: 8.199px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath10 = styled.path`
    fill: rgba(255, 217, 57, 1);
`;
const StyledSvg10 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 2.303px;
    height: 1.066px;
    left: 14.767px;
    top: 10.76px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath11 = styled.path`
    fill: rgba(255, 217, 57, 1);
`;
const StyledSvg11 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 0.792px;
    height: 0.772px;
    left: 17.463px;
    top: 11.316px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath12 = styled.path`
    fill: rgba(255, 217, 57, 1);
`;
const StyledSvg12 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 0.792px;
    height: 0.772px;
    left: 16.904px;
    top: 7.604px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath13 = styled.path`
    fill: rgba(255, 217, 57, 1);
`;
const StyledSvg13 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 0.792px;
    height: 0.772px;
    left: 13.625px;
    top: 5.65px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath14 = styled.path`
    fill: rgba(255, 217, 57, 1);
`;
const StyledSvg14 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 1.095px;
    height: 2.243px;
    left: 13.075px;
    top: 6.704px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath15 = styled.path`
    fill: transparent;
    stroke: rgba(202, 152, 229, 1);
    stroke-width: 1.2521957159042358px;
    stroke-linejoin: miter;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    shape-rendering: auto;
`;
const StyledSvg15 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 4.324px;
    height: 4.258px;
    left: 6.394px;
    top: 0;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath16 = styled.path`
    fill: transparent;
    stroke: rgba(202, 152, 229, 1);
    stroke-width: 1.2521957159042358px;
    stroke-linejoin: miter;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    shape-rendering: auto;
`;
const StyledSvg16 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 4.324px;
    height: 4.258px;
    left: 13.637px;
    top: 0;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath17 = styled.path`
    fill: rgba(210, 224, 255, 1);
`;
const StyledSvg17 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 1.694px;
    height: 1.651px;
    left: 14.495px;
    top: 20.479px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath18 = styled.path`
    fill: rgba(210, 224, 255, 1);
`;
const StyledSvg18 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 1.694px;
    height: 1.651px;
    left: 17.068px;
    top: 20.479px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;

type Props = {};
export const Icon70: FC<Props> = (props: Props) => {
    return (
        <Box as={StyledContainer} flex justifyContent="center" alignItems="center">
            <StyledIconContainer id="n_3">
                <StyledSvg1 className="n_5" viewBox="6.723 8.006 22.584 20.93">
                    <StyledPath1
                        id="n_5"
                        d="M 25.86614418029785 8.005595207214355 L 23.00747871398926 8.005595207214355 L 10.16554832458496 8.005595207214355 C 8.264381408691406 8.005595207214355 6.723429203033447 9.506582260131836 6.723429203033447 11.3577995300293 L 6.723429203033447 25.58381271362305 C 6.723429203033447 27.43503189086914 8.264381408691406 28.93601417541504 10.16554832458496 28.93601417541504 L 23.00747871398926 28.93601417541504 L 25.86614418029785 28.93601417541504 C 27.76665306091309 28.93601417541504 29.3076057434082 27.43503189086914 29.3076057434082 25.58381271362305 L 29.3076057434082 11.3577995300293 C 29.3076057434082 9.506582260131836 27.76665306091309 8.005595207214355 25.86614418029785 8.005595207214355"
                    ></StyledPath1>
                </StyledSvg1>
                <StyledSvg2 className="n_6" viewBox="8.755 9.569 18.214 15.907">
                    <StyledPath2
                        id="n_6"
                        d="M 24.19365882873535 9.569496154785156 L 21.88815689086914 9.569496154785156 L 11.53084468841553 9.569496154785156 C 9.997794151306152 9.569496154785156 8.755155563354492 10.70998954772949 8.755155563354492 12.11732482910156 L 8.755155563354492 22.92891883850098 C 8.755155563354492 24.33625221252441 9.997794151306152 25.47674560546875 11.53084468841553 25.47674560546875 L 21.88815689086914 25.47674560546875 L 24.19365882873535 25.47674560546875 C 25.72670745849609 25.47674560546875 26.96934700012207 24.33625221252441 26.96934700012207 22.92891883850098 L 26.96934700012207 12.11732482910156 C 26.96934700012207 10.70998954772949 25.72670745849609 9.569496154785156 24.19365882873535 9.569496154785156"
                    ></StyledPath2>
                </StyledSvg2>
                <StyledSvg3 className="n_7" viewBox="11.551 18.094 3.023 3.307">
                    <StyledPath3
                        id="n_7"
                        d="M 11.55064392089844 19.57528495788574 L 12.75838088989258 21.40148544311523 L 14.57328224182129 21.08974266052246 L 12.59177398681641 18.09418296813965 L 11.55064392089844 19.57528495788574 Z"
                    ></StyledPath3>
                </StyledSvg3>
                <StyledSvg4 className="n_8" viewBox="15.702 12.53 6.092 7.955">
                    <StyledPath4
                        id="n_8"
                        d="M 21.68875312805176 19.33738136291504 L 17.3780345916748 12.82156085968018 C 17.12450408935547 12.43861770629883 16.55290222167969 12.43092155456543 16.28883171081543 12.80680847167969 L 15.70208644866943 13.64197254180908 L 20.22945976257324 20.48493003845215 L 21.25280570983887 20.30981636047363 C 21.7131175994873 20.23091697692871 21.94228363037109 19.72032356262207 21.68875312805176 19.33738136291504"
                    ></StyledPath4>
                </StyledSvg4>
                <StyledSvg5 className="n_9" viewBox="13.622 15.134 4.696 5.824">
                    <StyledPath5
                        id="n_9"
                        d="M 13.62174129486084 16.62902069091797 L 16.48567199707031 20.95814895629883 L 18.31769371032715 20.64383697509766 L 14.67274951934814 15.13381004333496 L 13.62174129486084 16.62902069091797 Z"
                    ></StyledPath5>
                </StyledSvg5>
                <StyledSvg6 className="n_10" viewBox="14.599 13.564 5.714 7.198">
                    <StyledPath6
                        id="n_10"
                        d="M 14.59890270233154 15.25211048126221 L 18.24451065063477 20.76214218139648 L 20.31294059753418 20.40678215026855 L 15.785569190979 13.56382274627686 L 14.59890270233154 15.25211048126221 Z"
                    ></StyledPath6>
                </StyledSvg6>
                <StyledSvg7 className="n_11" viewBox="12.518 16.524 4.051 4.684">
                    <StyledPath7
                        id="n_11"
                        d="M 12.51849842071533 18.21261024475098 L 14.5006628036499 21.20816612243652 L 16.56909561157227 20.85344886779785 L 13.70516395568848 16.52431869506836 L 12.51849842071533 18.21261024475098 Z"
                    ></StyledPath7>
                </StyledSvg7>
                <StyledSvg8 className="n_12" viewBox="10.749 19.471 2.071 2.06">
                    <StyledPath8
                        id="n_12"
                        d="M 10.86484432220459 20.5334529876709 C 10.53755569458008 20.99914360046387 10.94715976715088 21.61813926696777 11.51810359954834 21.5206413269043 L 12.81935214996338 21.29677581787109 L 11.61161422729492 19.47121810913086 L 10.86484432220459 20.5334529876709 Z"
                    ></StyledPath8>
                </StyledSvg8>
                <StyledSvg9 className="n_13" viewBox="19.673 13.709 2.832 2.041">
                    <StyledPath9
                        id="n_13"
                        d="M 19.97272109985352 15.74223709106445 C 19.87789344787598 15.72235488891602 19.79030990600586 15.66654777526855 19.73367691040039 15.58059406280518 C 19.6197509765625 15.4086856842041 19.67045974731445 15.17968940734863 19.8469409942627 15.06871795654297 L 21.91866874694824 13.76850509643555 C 22.09515190124512 13.65753555297852 22.33024597167969 13.70692729949951 22.44417190551758 13.87947654724121 C 22.55809593200684 14.05138397216797 22.50739097595215 14.28037929534912 22.33090782165527 14.39135074615479 L 20.25918197631836 15.69156360626221 C 20.17093849182129 15.74672794342041 20.06755065917969 15.76212406158447 19.97272109985352 15.74223709106445"
                    ></StyledPath9>
                </StyledSvg9>
                <StyledSvg10 className="n_14" viewBox="20.454 16.091 2.303 1.066">
                    <StyledPath10
                        id="n_14"
                        d="M 22.29569816589355 17.14823722839355 L 20.75409126281738 16.82366561889648 C 20.54862785339355 16.78004837036133 20.41823768615723 16.58312225341797 20.46236038208008 16.38299179077148 C 20.50714111328125 16.182861328125 20.70930862426758 16.05585289001465 20.91476821899414 16.0994701385498 L 22.45637893676758 16.42404365539551 C 22.66184234619141 16.46702003479004 22.79222869873047 16.66458511352539 22.74810600280762 16.86471748352051 C 22.70332527160645 17.06420707702637 22.50115966796875 17.19121360778809 22.29569816589355 17.14823722839355"
                    ></StyledPath10>
                </StyledSvg10>
                <StyledSvg11 className="n_15" viewBox="22.962 16.608 0.792 0.772">
                    <StyledPath11
                        id="n_15"
                        d="M 23.74493789672852 17.07524490356445 C 23.69883918762207 17.28371620178223 23.48811149597168 17.41585159301758 23.27409172058105 17.3709545135498 C 23.0600700378418 17.32605171203613 22.92441368103027 17.12014389038086 22.97051048278809 16.91231536865234 C 23.01726531982422 16.7038459777832 23.22799491882324 16.57171058654785 23.44135856628418 16.61661148071289 C 23.65537643432617 16.66150856018066 23.79103469848633 16.86677360534668 23.74493789672852 17.07524490356445"
                    ></StyledPath11>
                </StyledSvg11>
                <StyledSvg12 className="n_16" viewBox="22.442 13.156 0.792 0.772">
                    <StyledPath12
                        id="n_16"
                        d="M 23.22567939758301 13.62356758117676 C 23.1795825958252 13.8320369720459 22.96885299682617 13.96417617797852 22.75483322143555 13.91927528381348 C 22.54081153869629 13.8743724822998 22.40515518188477 13.66847038269043 22.45125389099121 13.46063995361328 C 22.49800872802734 13.25217056274414 22.70873832702637 13.12003135681152 22.92210006713867 13.16493225097656 C 23.13611793518066 13.20983505249023 23.27177429199219 13.41509819030762 23.22567939758301 13.62356758117676"
                    ></StyledPath12>
                </StyledSvg12>
                <StyledSvg13 className="n_17" viewBox="19.392 11.339 0.792 0.772">
                    <StyledPath13
                        id="n_17"
                        d="M 20.17564010620117 11.80677223205566 C 20.12888717651367 12.01524257659912 19.91815948486328 12.14738178253174 19.70479583740234 12.10247898101807 C 19.49077606201172 12.05757904052734 19.35511779785156 11.8516731262207 19.40121650695801 11.6438455581665 C 19.44731140136719 11.43537425994873 19.65804100036621 11.30323696136475 19.87140083312988 11.34813785552979 C 20.08542442321777 11.39303970336914 20.22173881530762 11.59830284118652 20.17564010620117 11.80677223205566"
                    ></StyledPath13>
                </StyledSvg13>
                <StyledSvg14 className="n_18" viewBox="18.882 12.32 1.094 2.243">
                    <StyledPath14
                        id="n_18"
                        d="M 19.18219757080078 14.55391979217529 C 18.97673797607422 14.51094055175781 18.84634590148926 14.31337642669678 18.89112663269043 14.11324501037598 L 19.22434234619141 12.61161708831787 C 19.26846313476562 12.41148567199707 19.47129249572754 12.28447914123535 19.67609405517578 12.32809734344482 C 19.88155364990234 12.37107372283936 20.01193618774414 12.5679988861084 19.96781921386719 12.7681303024292 L 19.63460731506348 14.27039909362793 C 19.58982276916504 14.46988964080811 19.38765716552734 14.59689617156982 19.18219757080078 14.55391979217529"
                    ></StyledPath14>
                </StyledSvg14>
                <StyledSvg15 className="n_3_c" viewBox="0 0 2.553 2.487">
                    <StyledPath15
                        id="n_3_c"
                        d="M 2.553108930587769 2.486890077590942 L 0 0"
                    ></StyledPath15>
                </StyledSvg15>
                <StyledSvg16 className="n_4" viewBox="0 0 2.553 2.487">
                    <StyledPath16
                        id="n_4"
                        d="M 0 2.486890077590942 L 2.553107738494873 0"
                    ></StyledPath16>
                </StyledSvg16>
                <StyledSvg17 className="n_19" viewBox="20.202 25.128 1.694 1.651">
                    <StyledPath17
                        id="n_19"
                        d="M 21.89651870727539 25.95352172851562 C 21.89651870727539 26.40958976745605 21.51720428466797 26.77906227111816 21.04899597167969 26.77906227111816 C 20.58143997192383 26.77906227111816 20.20212936401367 26.40958976745605 20.20212936401367 25.95352172851562 C 20.20212936401367 25.49745178222656 20.58143997192383 25.12797737121582 21.04899597167969 25.12797737121582 C 21.51720428466797 25.12797737121582 21.89651870727539 25.49745178222656 21.89651870727539 25.95352172851562"
                    ></StyledPath17>
                </StyledSvg17>
                <StyledSvg18 className="n_20" viewBox="22.595 25.128 1.694 1.651">
                    <StyledPath18
                        id="n_20"
                        d="M 24.28952217102051 25.95352172851562 C 24.28952217102051 26.40958976745605 23.91020774841309 26.77906227111816 23.44199752807617 26.77906227111816 C 22.97444343566895 26.77906227111816 22.59513282775879 26.40958976745605 22.59513282775879 25.95352172851562 C 22.59513282775879 25.49745178222656 22.97444343566895 25.12797737121582 23.44199752807617 25.12797737121582 C 23.91020774841309 25.12797737121582 24.28952217102051 25.49745178222656 24.28952217102051 25.95352172851562"
                    ></StyledPath18>
                </StyledSvg18>
            </StyledIconContainer>
        </Box>
    );
};
