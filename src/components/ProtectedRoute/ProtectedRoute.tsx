import React, { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { isAuthorizated } from '../../features/userSlice';

import { Outlet, useNavigate } from "react-router-dom";
import { Unauthorized } from '../Unauthorized';


export const ProtectedRoute: React.FC = () => {
  const authorizated = useAppSelector(isAuthorizated);
  const navigate = useNavigate();
    useEffect(() => {
      if (!authorizated) {
        const timeoutId = setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2000);

        return () => clearTimeout(timeoutId);
      }
    }, [authorizated, navigate]);

  if (!authorizated) {
    return <Unauthorized/>;
  }

  return <Outlet />;
};

