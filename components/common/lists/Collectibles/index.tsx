import * as React from 'react';
import List from '@mui/material/List';
import CollectItem from 'components/common/lists/Collectibles/CollectItem';
import { collectiblesData } from 'components/mockData';

export default function Collectibles() {
  return (
    <List sx={{ width: '100%' }}>
      {collectiblesData.map((collect, index) => (
        <CollectItem
          key={index}
          userName={collect.userName}
          collectName={collect.collectName}
          src={collect.src}
        />
      ))}
    </List>
  );
}
