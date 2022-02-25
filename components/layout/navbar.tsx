import { Grid, Box, Stack, Link } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import Account from 'components/common/buttons/account';

export default function Navbar({}) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ flexGrow: 1, background: theme.palette.grey['50'] }}>
        <Grid container spacing={2} sx={{ height: '71px' }}>
          <Grid
            item
            xs={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link href="/">
              <Image
                src="/logo@2x.png"
                alt="Splash"
                width={'21px'}
                height={'22px'}
              />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Account />
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Link href="#">
                <Image
                  src="/notification@2x.png"
                  alt="Notification"
                  width={'26px'}
                  height={'26px'}
                />
              </Link>
              <Link
                href="#"
                sx={{
                  marginLeft: '16px !important',
                  marginRight: '20px !important',
                }}
              >
                <Image
                  src="/settings@2x.png"
                  alt="Settings"
                  width={'26px'}
                  height={'26px'}
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
