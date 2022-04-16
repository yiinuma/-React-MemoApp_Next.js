/* eslint-disable react/display-name */
import { NextPage } from 'next';

import { PrimaryButton } from 'components/button/PrimaryButton';
import { InputForm } from 'components/InputForm';
import { Layout } from 'components/Layout/Layout';
import { MainLayout } from 'components/Layout/MainLayout';
import { Modal } from 'components/Modal';
import { Title } from 'components/Title';
import { TodoList } from 'components/TodoList';
import { useAuth } from 'hooks/useAuth';
import { memo } from 'react';

export default function Memo() {
  const { logout } = useAuth();
  return (
    <Layout>
      <div className='mr-8 mt-2 flex flex-row justify-end'>
        <PrimaryButton onClick={logout}>Logout</PrimaryButton>
      </div>
      <MainLayout>
        <Title />
        <InputForm />
        <TodoList />
        <Modal />
      </MainLayout>
    </Layout>
  );
}
