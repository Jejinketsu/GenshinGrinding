import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas:
    'input1 input3'
    'select1 input3'
    'select2 input3'
    'select3 input3'
    'input2 input3'
    'button input3';
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  .input1 {
    grid-area: input1;
  }

  .input2 {
    grid-area: input2;
  }

  .input3 {
    grid-area: input3;
    align-self: start;
  }

  .select1 {
    grid-area: select1;
  }

  .select2 {
    grid-area: select2;
  }

  .button {
    grid-area: button;
  }

  & {
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
