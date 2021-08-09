import React from 'react'
import styled from 'styled-components'


function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
            </Background>
            <ImgTitle>
               <img  src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"/>
            </ImgTitle>
            <Control>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Control>
            <SubTitle>
                2018 . 7m . Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Description>
        </Container>
    )
}

export default Detail;


const Container=styled.div`
     min-height: calc(100vh - 70px);
     padding: 0 calc(3.5vw + 5px);
     position:relative;

`
const Background=styled.div`
     position:fixed;
     top:0;
     left:0;
     bottom:0;
     right:0;
     z-index:-1;
     opacity:0.8;
     img{
         width:100%;
         height:100%;
         object-fit:cover;
     }

`
const ImgTitle=styled.div`
     height:30vh;
     width:35vw;
     min-height:170px;
     min-width:200px;
     img{
         width:100%;
         height:100%;
         object-fit:contain;
     }

`
const Control=styled.div`
    display:flex;
    align-items:center;
`

const PlayButton=styled.button`
    Border-radius:4px;
    font-size:15px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249, 249, 249);
    border:none;
    padding:0 24px;
    margin-right:22px;
    letter-spacing:1.8px;
    cursor:pointer;
    &:hover{
        background:rgb(198, 198, 198);
    } 
`

const TrailerButton=styled(PlayButton)`
    background:rgb(0, 0, 0, 0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;
`

const AddButton=styled.button`
     margin-right:16px;
     width:44px;
     height:44px;
     display:flex;
     align-items:center;
     justify-content:center;
     border-radius:50%;
     border: 2px solid white;
     background-color: rgba(0, 0, 0, 0.6);
     cursor:pointer;
     span{
         font-size:30px;
         color:white;
     }
`

const GroupWatchButton=styled(AddButton)`
    background:rgb(0, 0, 0);
`

const SubTitle=styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`

const Description=styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249,249,249);
`