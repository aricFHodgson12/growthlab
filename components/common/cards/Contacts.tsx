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
import Image from 'next/image';
import { contactsData } from 'components/mockData';
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

export default function Contacts() {
  const theme = useTheme();
  const contacts = (
    <ContactsBox component="div">
      {contactsData.map((item, index) => (
        <Box key={index} className="accountItem">
          <Image src={item.src} alt="Splash" width={'38px'} height={'38px'} />
        </Box>
      ))}
    </ContactsBox>
  );

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
              sx={{ color: theme.palette.grey['500'] }}
              component="div"
            >
              Contacts
            </Typography>
            <ChevronRightIcon sx={{ color: theme.palette.grey['500'] }} />
          </Stack>
          {contacts}
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
        background: theme.palette.primary.light,
        border: 'none',
      }}
    >
      {card}
    </Card>
  );
}
