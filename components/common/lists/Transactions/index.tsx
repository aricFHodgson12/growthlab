import * as React from 'react';
import { List, Stack, Button } from '@mui/material';
import Tabs from 'components/common/lists/Transactions/tabs';

export default function Transactions() {
  return (
    <>
      <Stack direction="row" justifyContent="center" sx={{ marginTop: 2 }}>
        <Tabs />
      </Stack>
    </>
  );
}
