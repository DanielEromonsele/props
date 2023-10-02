import { styled } from "styled-components";
import Cards2 from "../Props/Cards2";
import data from '../Components/data2.json'
import piix from '../Assets/pic.jpg'
import pic from '../Assets/ALtimg.jpg'

const CradsDisplay = () =>{
    return(
        <div>
           <Container>
           <Head>Top selling Items</Head>
           <Wrapper>
        
            {
                data.map((props)=>
                <Cards2
                key={props.id}
                Pic= {props.Pic}
                num= {props.num}
                Pricedesc= {props.Pricedesc}
                Pricetag= {props.Pricetag}
                Oldprice= {props.OldPrice}

                
                />
                )
            }
           </Wrapper>
           </Container>
        </div>
    )
}

export default CradsDisplay;
const Head = styled.div`
font-size: 25px;
font-weight: 500;
width: 90%;
height: 10%;
/* background-color: blue; */
`
const Wrapper = styled.div`
width: 90%;
height: 90%;
padding: 10px 10px;
display: flex;
/* flex-direction: column; */
align-items: center;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
/* background-color: gray; */
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
  flex-wrap: wrap;
`