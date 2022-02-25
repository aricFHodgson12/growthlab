import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function UnstyledTabsCustomized() {
  const theme = useTheme();

  const Tab = styled(TabUnstyled)`
    cursor: pointer;
    background-color: transparent;
    padding: 6px 12px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    &:focus {
      color: ${theme.palette.grey['500']};
      border-radius: 10px;
      outline: 1px solid ${theme.palette.grey['200']};
      outline-offset: 2px;
    }

    &.${tabUnstyledClasses.selected} {
      color: ${theme.palette.grey['500']};
    }
  `;

  const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
  `;

  const TabsList = styled(TabsListUnstyled)`
    width: 300px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `;
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>
          <Typography>All</Typography>
        </Tab>
        <Tab>
          <Typography>Sent</Typography>
        </Tab>
        <Tab>
          <Typography>Recieved</Typography>
        </Tab>
      </TabsList>
      <TabPanel value={0}>All Content</TabPanel>
      <TabPanel value={1}>Sent content</TabPanel>
      <TabPanel value={2}>Recieved content</TabPanel>
    </TabsUnstyled>
  );
}
