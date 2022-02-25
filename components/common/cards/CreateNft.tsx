import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
} from '@mui/material';
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
    backgroundImage: `url(/nft-logo@2x.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    backgroundSize: '60% 100%',
  },
};

export default function CreateNft() {
  const theme = useTheme();
  const CreateButton = styled(Button)({
    padding: '10px',
    borderRadius: '10px',
    height: '40px',
    backgroundColor: theme.palette.secondary.main,
    textTransform: 'none',
    color: theme.palette.grey['50'],
    border: `1px solid ${theme.palette.grey['100']}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {},
  });

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
              variant="h5"
              sx={{ color: theme.palette.grey['600'], width: '50%' }}
              component="p"
            >
              Start <br />
              Creating your NFT Today
            </Typography>
            <ChevronRightIcon sx={{ color: theme.palette.grey['50'] }} />
          </Stack>
          <Box sx={{ paddingLeft: 2, display: 'flex' }}>
            <CreateButton variant="outlined" endIcon={<ChevronRightIcon />}>
              Create NFT
            </CreateButton>
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
        height: '168px',
        background: theme.palette.secondary.light,
        border: 'none',
      }}
      style={styles.paperContainer}
    >
      {card}
    </Card>
  );
}
