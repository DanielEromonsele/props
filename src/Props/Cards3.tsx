import { styled } from "styled-components"
import img from '../Assets/spider.jpg'
import Shop from "../Pages/Shop"

interface IProps {
    img: string
    title: string
    cPrice: number
    oldPrice: number
    percentage: number
    discount: number;
}

export default function Card3 ({img, title, cPrice, oldPrice, percentage, discount}:IProps){
    return(
        <>
            <Container>
                <Wrapper>
                <ImageWrap>
                    <img src={img} alt= 'image'/>
                </ImageWrap>
                <ContentWrap>
                    <Title> {title}</Title>
                    <PriceWrap>
                        <Current>{cPrice}</Current>
                        <Old>{oldPrice}</Old>
                        <Percentage>{percentage}%</Percentage>
                    </PriceWrap>
                    <Discount>
                       You saved {discount}
                    </Discount>
                </ContentWrap>
                </Wrapper>
            </Container>
        </>
    )
}



const Wrapper = styled.div`
width: 90%;
height: 90%;
/* background-color: red; */
border-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
transition: all 350ms;
&:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`
const Percentage = styled.div`
width: 35px;
height: 20px;
background-color: #F68B1E;
border-radius: 5px;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
`
const Old = styled.div`
text-decoration: line-through;
font-size: 10px;
color: grey;
`
const Current = styled.div``
const Discount = styled.div`
color: green;
font-size: 10px;
font-weight: 700;
`
const Title = styled.div`
font-size: 16px;
font-weight: 500;
`
const PriceWrap = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
gap: 10px;
`
const ContentWrap = styled.div`
gap: 10px;
width: 65%;
height: 80%;
display: flex;
justify-content: center;
/* align-items: center;  */
flex-direction: column;
cursor: pointer;
`
const ImageWrap = styled.div`
width: 25%;
height: 80%;
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
}alt{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
`
const Container = styled.div`
width: 350px;
height: 150px;
/* background-color: gray; */
display: flex;
justify-content: center;
align-items: center;
`
