import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operation';
import authSelectors from 'redux/auth/auth-selectors';

import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute/PrivatRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const ContactsPage = lazy(() => import('../views/ContactsPage/ContactsPage'));
const Login = lazy(() => import('../views/LoginPage/LoginPage'));
const Register = lazy(() => import('../views/RegisterPage/Register'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingUser && (
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<PrivateRoute />}>
              <Route index element={<Navigate to="/contacts" />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  );
};

export { App };
