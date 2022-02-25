import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { Box, Typography, Stack } from '@mui/material';
import styles from 'styles/Home.module.css';
import Image from 'next/image';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/reg-email');
    }, 3000);
  });
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Box sx={{ textAlign: 'center' }}>
          <Image
            className={styles.logo}
            src="/splash-logo.png"
            alt="Splash"
            width={'171.58px'}
            height={'36px'}
          />
          <Typography
            component="p"
            sx={{
              color: 'primary.contrastText',
              fontWeight: '500',
              marginTop: 1,
            }}
          >
            a web3 gateway to hidden experiences
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }} className={styles.footer}>
          <Typography
            component="p"
            sx={{
              color: 'primary.contrastText',
              fontWeight: '500',
              marginBottom: 3,
            }}
          >
            powered by
          </Typography>
          <Image
            className={styles.logo}
            src="/layer.png"
            alt="Splash"
            width={'114px'}
            height={'30px'}
          />
        </Box>
      </main>
    </div>
  );
};

export default Home;
