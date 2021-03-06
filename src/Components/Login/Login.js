import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Head from '../Helpers/Head';
import NotFound from '../NotFound';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import styles from './Login.module.css';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  return (
    <section className={`${styles.login} animeRight`}>
      <Head
        title="Cadê meu pet? | Login"
        description="Faça login e procure por seu pet"
      />

      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="cadastro" element={<FormRegister />} />
        <Route path="esqueceu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default Login;
