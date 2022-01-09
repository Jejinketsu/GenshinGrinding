import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 400px 400px;
  column-gap: 50px;
  margin-bottom: 15px;

  & .left-column{
    grid-column: 1 / 2;
    margin-top: 10px;
  }
  
  & .right-column{
    grid-column: 2 / -1;
    justify-self: center;
  }
  

  &{
    @media (max-width: 1024px) {
    .ItensCadForm {
      grid-template-columns: 1fr;
      grid-template-areas:
        'input1 '
        'select1'
        'select2'
        'input2'
        'input3'
        'button';
    }

    .input3 {
      margin-top: 0px;
    }
  }
  }
`;
