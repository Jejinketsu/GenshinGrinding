import React from 'react';
import { DashboardPage, Forms } from './styles';
import { Route, Routes } from 'react-router';
import LateralMenuBar from '../../components/LateralMenuBar';
import UserList from '../UserList';
import DomainForm from '../DomainForm';
import CharactersForms from '../CharactersForms';
import ItemForm from "../ItemForm";

const Dashboard = () => {
  return (
    <DashboardPage>
      <header className='adminmenu'>
        <LateralMenuBar />
      </header>

      <Forms>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='formDomain' element={<DomainForm />} />
          <Route path='formCharacters' element={<CharactersForms />} />
          <Route path='ItemForm/*' element={<ItemForm />} />
        </Routes>
      </Forms>
    </DashboardPage>
  );
};

export default Dashboard;
