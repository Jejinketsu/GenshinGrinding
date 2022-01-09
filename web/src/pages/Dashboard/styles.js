import styled from 'styled-components';

export const DashboardPage = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'adminmenu forms';
`;

export const Forms = styled.section`
  height: 100vh;
  overflow-y: auto;
  padding: 20px 0px 0px 50px;

  .CardsListing {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
