import {styled} from'styled-components'
import { useParams } from 'react-router-dom';
import data from "../Components/data3.json"
interface iProps{
    title: string;
    identify?:string;
    num?: string;
    bName?: string;
    Product?: string
}
const Wrap = ({title, identify, num, bName, Product}:iProps) =>{

    const params:any = useParams();
    
  const details = data[params.id - 1];
    
    return(
        <>
        <ContentWrap>
                   <Title>{title}</Title>
                    <Key>{identify} <span>{num}</span></Key>
                    <BrandName>{bName} <span>{Product}</span></BrandName>
                   </ContentWrap>
        </>
    )
}

export default Wrap;


const BrandName = styled.div`
font-size: 15px;
margin-bottom: 10px;
font-weight: 400;
color: #d3d0d0;
span{
    color: #7DB2E6;
}
`
const Key = styled.div`
font-size: 15px;
font-weight: 400;
margin-bottom: 10px;
color: #d3d0d0;
span{
    color: black;
}
`
const Title = styled.div`
font-size: 30px;
margin-bottom: 10px;
font-weight: 700;
`
const ContentWrap = styled.div``


