import type { NextPage } from 'next';
import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import Contacts from 'components/common/cards/Contacts';
import WebApps from 'components/common/cards/WebApps';
import CreateNft from 'components/common/cards/CreateNft';
import Collectibles from 'components/common/lists/Collectibles';
import Transactions from 'components/common/lists/Transactions';
import Tabs from 'components/common/tabs';

const Home: NextPage = () => {
  return (
    <main>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ padding: 2 }}
      >
        <Contacts />
        <WebApps />
      </Stack>
      <Stack sx={{ paddingLeft: 2, paddingRight: 2 }}>
        <CreateNft />
      </Stack>
      <Stack sx={{ marginTop: 1 }}>
        <Tabs
          tabs={[
            {
              label: 'Collectibles',
              content: <Collectibles></Collectibles>,
            },
            {
              label: 'Transactions',
              content: <Transactions></Transactions>,
            },
          ]}
        />
      </Stack>
    </main>
  );
};

export default Home;
