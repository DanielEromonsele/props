import { styled } from "styled-components";

const Conter = () =>{
    return(
        <>
        <Hold>
            <Box>0</Box>
            <Box1>+</Box1>
            <Box>1</Box>
        </Hold>
        </>
    )
}

export default Conter;

const Box1 = styled.div`
width: 40%;
border: 1px solid #d3d0d0;
display: flex;
justify-content: center;
align-items:center;
`
const Box = styled.div`
width: 30%;
border: 1px solid #d3d0d0;
display: flex;
justify-content: center;
align-items:center;
`
const Hold = styled.div`
width: 100px;
height: 35px;
display: flex;
&:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`