import { styled } from "styled-components";
import Card3 from "../Props/Cards3";
import data from'../Components/data3.json'
import {Link} from "react-router-dom";


export default function Card3Display(){
    return(
        <div>
           <Container>
            <Wrapper>
            {data?.map((props)=>(
                   <Wrap to = {`/detail/${props.id}`} key = {props.id}>
                     <Card3 
                    title={props.title} 
                    cPrice={props.cPric3}
                     percentage={props.percentage} 
                     oldPrice={props.OldPrice} 
                     discount={props.discount} 
                     img={props.productImg}
                    />
                   </Wrap>
            ))}
          
            </Wrapper>
            
           </Container>
        </div>
    )
}

const Wrap = styled(Link)`
text-decoration: none;
`

const Wrapper = styled.div`
width: 80%;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 10px;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`