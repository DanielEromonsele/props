import {styled} from 'styled-components';

type Props = {
    Pic: string;
    num: string;
    Pricedesc: string;
    Pricetag: string;
    Oldprice: string;
    
}

export default function Cards2 ({Pic, num, Pricedesc, Pricetag, Oldprice}:Props){
    return(
        <div>
           
              <Container>
              <Hold>
                    <ImageHold>
                             <Img src = {Pic}></Img>
                        <Numb>{num}</Numb>
                        </ImageHold>
                        <TextHold>
                        <Description>{Pricedesc}</Description>
                        <PriceHold>{Pricetag}</PriceHold>
                        <PriceHold2><u>{Oldprice}</u></PriceHold2>
                        </TextHold>
                </Hold>
           
              </Container>
        </div>
    )
}



const Container = styled.div`
width: 100%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
margin: 5px;
/* background-color: red; */
`
const TextHold = styled.div``
const PriceHold2 = styled.div`
font-size: 12px;
font-weight: 200;
color: #888585;
`
const PriceHold = styled.div`
color: #313030;
font-size: 17px;
font-weight: 400;
`
const Description = styled.div`
color: gray;
font-size: 17px;
font-weight: 400;
`
const Numb = styled.div`
height: 20px;
width: 44px;
background-color: #FEF3E9;
display: flex;
justify-content: end;
color: #F68B1E;
position: absolute;
right: -190px;
top: 0px;
`
const Img = styled.img`
object-fit: cover;
border-radius: 10px;

`
const ImageHold = styled.div`
width: 30%;
height: 95%;
position: relative;
alt{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
`
const Hold = styled.div`
width: 98%;
height: 85%;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
display: flex;
padding: 10px 10px;
flex-direction: column;
`
