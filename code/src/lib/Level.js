/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
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

export const LevelCard = styled.div`
  padding: 0 20px;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const DescriptionCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Description = styled.p`
  font-family: 'Teko', sans-serif;
  padding: 20px;
  width: 80%;
  border-radius: 6px;
  color: #FFFAF0;
  background: rgb(151 71 255 / 70%);
  font-weight: 800;
  font-size: 24px;
  line-height:  27px;
  letter-spacing: 1px;
`

export const GreetingText = styled.h1`
  color: white;
  font-size: 60px;
  letter-spacing: 1px;
`

export const DirectionButton = styled.button`
  background: #9747FF;
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