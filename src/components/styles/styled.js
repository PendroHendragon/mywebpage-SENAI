import styled from 'styled-components';




const titleRow = styled.div`
    
`;




const Row = styled.div`

    display: flex;
    justify-content: space-around;
    .cardw{
        width:400px;
    }
   
    @media(max-width:900px){
        flex-direction: column;


        .cardw{
            width:100%;
        }
    }

`;

export default Row;