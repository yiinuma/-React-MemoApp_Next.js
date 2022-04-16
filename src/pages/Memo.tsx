/* eslint-disable react/display-name */
import { PrimaryButton } from 'components/button/PrimaryButton';
import { InputForm } from 'components/InputForm';
import { Layout } from 'components/Layout/Layout';
import { MainLayout } from 'components/Layout/MainLayout';
import { Modal } from 'components/Modal';
import { Title } from 'components/Title';
import { TodoList } from 'components/TodoList';

import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { authState } from 'store/authState';
import { NextPage } from 'next';

const Memo: NextPage = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const auth = useRecoilValue(authState);

  useEffect(() => {
    if (auth) return;
    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {auth && (
        <Layout>
          <div className='mr-8 mt-2 flex flex-row justify-end'>
            <PrimaryButton onClick={logout}>Logout!</PrimaryButton>
          </div>
          <MainLayout>
            <Title />
            <InputForm />
            <TodoList />
            <Modal />
          </MainLayout>
        </Layout>
      )}
    </>
  );
};

export default Memo;
