import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import getToken from '../../api/services/token';
import {
  getStorageToken,
  setStorageToken,
} from '../../utils/tokenLocalStorage';
import { Loading } from '../../components';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const { classes } = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  const fetchToken = async (): Promise<void> => {
    getToken().then(({ data }) => {
      if (data.token) {
        setIsLoading(false);
        setStorageToken(data.token);
      }
    });
  };

  useEffect(() => {
    const token = getStorageToken();

    if (!token) {
      fetchToken();

      return;
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <Box className={classes.root}>{children}</Box>;
};

export default MainLayout;
