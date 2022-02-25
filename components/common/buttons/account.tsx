import React, { useState } from 'react';
import { Button, Avatar, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Dialog from 'components/common/dialog';

export default function Account() {
  const theme = useTheme();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const handleShowDialog = () => {
    setShowDialog(true);
  };

  const AccountButon = styled(Button)({
    padding: '10px',
    borderRadius: '30px',
    height: '45px',
    backgroundColor: '#fff',
    textTransform: 'none',
    color: theme.palette.grey['600'],
    border: `1px solid ${theme.palette.grey['100']}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {},
  });
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ height: '100%' }}
    >
      <AccountButon
        variant="outlined"
        startIcon={<Avatar src={'/avatars/user-1.png'} />}
        endIcon={<ArrowDropDownIcon />}
        onClick={() => setShowDialog(true)}
      >
        Jonhdoe.near
      </AccountButon>
      <Dialog
        maxWidth="sm"
        fullWidth
        title=""
        open={{ control: { open: showDialog, setOpen: handleShowDialog } }}
      >
        <Typography>My Accounts Dialog Test</Typography>
      </Dialog>
    </Stack>
  );
}
