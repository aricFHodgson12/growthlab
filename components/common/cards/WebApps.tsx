import * as React from 'react';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';

const ContactsBox = styled(Box)({
  display: 'grid',
  paddingLeft: '13px',
  gridTemplateColumns: 'repeat(auto-fit,  minmax(10px, max-content))',
  '& .accountItem': {
    width: '50px',
    height: '50px',
    paddingRight: '10px',
  },
});
const styles = {
  paperContainer: {
    backgroundImage: `url(/group.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
  },
};
export default function Webapps() {
  const theme = useTheme();

  const card = (
    <>
      <CardContent sx={{ padding: '0px' }}>
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ marginBottom: '5px', padding: '9px 13px' }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.grey['50'] }}
              component="div"
            >
              Web3 Apps
            </Typography>
            <ChevronRightIcon sx={{ color: theme.palette.grey['50'] }} />
          </Stack>
          <Box sx={{ paddingLeft: 2, display: 'flex' }}>
            <Typography
              sx={{
                color: theme.palette.grey['50'],
                background: '#18D7A9',
                padding: '3px 10px',
                borderRadius: 3,
              }}
              variant="caption"
            >
              12 connected
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </>
  );
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        height: '99px',
        background: theme.palette.secondary.main,
        border: 'none',
      }}
      style={styles.paperContainer}
    >
      {card}
    </Card>
  );
}
