/* eslint-disable no-nested-ternary */
import styled, { keyframes } from 'styled-components';
import start from 'images/start.png'
import image1 from 'images/level1.png'
import image2 from 'images/level2.png'
import image3 from 'images/level3.png'
import image4 from 'images/level4.png'
import image5 from 'images/level5.png'
import image6 from 'images/level6.png'
import image7 from 'images/level7.png'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.coordinates === undefined || props.coordinates === '0,0' ? image1 : props.coordinates === '1,0' ? image2 : props.coordinates === '1,1' ? image3 : props.coordinates === '0,1' ? image4 : props.coordinates === '0,2' ? image5 : props.coordinates === '0,3' ? image6 : props.coordinates === '1,3' ? image7 : '')})
`

export const StartBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${start})
`
const FadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const LevelCard = styled.div`
  padding: 0 20px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`
export const DescriptionCard = styled.div`
  position: absolute;
  right: ${(props) => (props.direction === 'East' && '20px')};
  top: ${(props) => (props.direction === 'North' && '20px')};
  bottom: ${(props) => (props.direction === 'South' && '20px')};
  left: ${(props) => (props.direction === 'West' && '20px')};
  display: flex;
  gap: 12px;
  animation: ${FadeIn} 2s ease-in forwards;
  flex-direction: ${(props) => (props.direction === 'North' ? 'column' : props.direction === 'South' ? 'column-reverse' : props.direction === 'East' ? 'row-reverse' : 'row')};
  
  @media(min-width: 1025px) {
    gap: 20px;
  }
  `

export const MainDescription = styled.p`
  font-family: 'Teko', sans-serif;
  color: #FFFAF0;
  font-weight: 800;
  font-size: 20px;
  line-height:  24px;
  letter-spacing: 1px;
  margin-top: 0;
`

export const DirectionButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

export const ShowMoreButton = styled(DirectionButton)`
  color: #FFFAF0;
  text-align: left;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 900;
  width: 150px;
  height: 30px;
  font-family: 'Bebas Neue', cursive;
  cursor: pointer;

  &:hover {
    font-size: 21px;
  }
`

export const MainDescriptionCard = styled.div`
  border-radius: 6px;
  padding: 15px;
  background: rgb(151 71 255 / 70%);
  max-width: 100%;
  animation: ${FadeIn} 2s ease-in forwards;

  @media(min-width: 1025px) {
    max-width: 40%;
  }
`

export const Description = styled.p`
  font-family: 'Teko', sans-serif;
  padding: 15px;
  width: 80%;
  border-radius: 6px;
  color: #FFFAF0;
  background: rgb(151 71 255 / 70%);
  font-weight: 800;
  font-size: 20px;
  line-height:  24px;
  letter-spacing: 1px;
  max-width: 200px;
  margin: 0;
`

export const GreetingText = styled.h1`
  color: white;
  font-size: 60px;
  letter-spacing: 1px;
`

export const Arrow = styled.img`
  width: 60px;
  padding: 0;
  transform: ${(props) => (props.direction === 'East' ? '' : props.direction === 'West' ? 'rotate(180deg)' : props.direction === 'North' ? 'rotate(-90deg)' : props.direction === 'South' ? 'rotate(90deg)' : '')}

`
export const SpaceButton = styled.button`
width:150px;
    background: none;
    border:none;
    display: flex;

    img{
      width: 50%;
      padding: 10px;
    }
  `

export const StarterForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`

const flyAway = keyframes`
0% {
  transform: translate(-50%, -50%);
  opacity: 1;
}
10% {
  transform: translate(-50%, -50%) rotate(5deg);
}
15% {
  transform: translate(-50%, -48%) rotate(-8deg);
}
20% {
  transform: translate(-50%, -50%) rotate(8deg);
}
23% {
  transform: translate(-50%, -57%) rotate(-10deg);
}
28% {
  transform: translate(-50%, -53%) rotate(10deg);
}
35% {
  transform: translate(-50%, -50%) rotate(-12deg);
}
44% {
  transform: translate(-50%, -53%) rotate(12deg);
}
48% {
  transform: translate(-50%, -45%) rotate(-15deg) scale(1.3);
}

100% {
  transform: translate(-50%, -500%) rotate(-12deg) scale(1.2);
  opacity: 1;
}
`;

export const PlayerWrapper = styled.div`
  position: relative;
  .player {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    animation: ${flyAway} 2s ease forwards;
  }
`;
