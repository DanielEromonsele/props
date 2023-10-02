import { styled } from "styled-components";
import pix from '../Components/Coffee.jpg'
import Wrap from "../Props/Wrap";
import Conter from "../Props/Conter";
import { AiFillHeart } from "react-icons/ai";



const Shop = () =>{
    return(
        <>
        <Container>
            <Wrapper>
                <ImageHold>
                    <ImgHold>
                    <img src={pix} alt="" />
                    </ImgHold>
                </ImageHold>
                <TextHold>
                   <Wrap
                   title="Andre Rose-75cl"
                   Product="Andre"
                   bName="Brand:"
                   identify="Product Code:"
                   num= "8290362"
                   />
                   <Line />
                   <Wrap
                   title="₦17,000"
                   />
                   <Line />
                   <Hold>
                    <Counter>
                       <Write> Quantity: </Write><Conter/>
                    </Counter>
                    <Write>
                    Call us for bulk purchases:
                    <Write2>Click here to show phone number</Write2>
                    </Write>
                   </Hold>
                   <Line/>
                   <ButtonHold>
                    <Button1>
                        Buy Now
                    </Button1>
                    <IconHold>
                        <Circle><AiFillHeart/></Circle>
                        <Write>Save for later</Write>
                    </IconHold>
                   </ButtonHold>
                   <Line/>
                </TextHold>
            </Wrapper>
        </Container>
        
        </>
    )

}

export default Shop;

const Circle = styled.div`
width: 40px;
height: 40px;
border-radius: 100px;
background-color: gray;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
`
const Button1 = styled.div`
width: 50%;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
background-color: green;
border-radius: 5px;
`
const IconHold = styled.div`
display: flex;justify-content: center;
align-items: center;
gap: 10px;
width: 50%;
`
const ButtonHold = styled.div`
width: 100%;
padding: 10px 0px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;
`
const Write2 = styled.div`
color: black;
`
const Write = styled.div`
display: flex;
flex-direction: column;
color: #d3d0d0;
font-size: 13px;
`
const Counter = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 10px;
`
const Hold = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
const Line = styled.div`
width: 100%;
height: 1px;
background-color: #d3d0d0;
`

const TextHold = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
gap: 30px;`
const ImgHold = styled.div`
width: 300px;
height: 400px;
img{
    object-fit: contain;
    width: 100%;
    height: 100%;
}
`
const ImageHold = styled.div`
width: 50%;
height: 80%;
`
const Wrapper = styled.div`
width: 80%;
height: 95%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0px;
/* background-color: rebeccapurple; */
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`