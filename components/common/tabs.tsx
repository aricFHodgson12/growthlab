import React, { useState } from 'react';
import { Box, BoxProps, Tab, Tabs } from '@mui/material';

interface ITabPanel {
  children: React.ReactChild;
  value: number;
  index: number;
  tabPanelProps?: BoxProps;
}

function TabPanel({ children, value, index, tabPanelProps }: ITabPanel) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box {...tabPanelProps}>{children}</Box>}
    </div>
  );
}

interface ICustomTabs {
  tabs: {
    label: string;
    content: React.ReactChild;
  }[];
  tabPanelProps?: BoxProps;
  tabsContainerProps?: BoxProps;
}

export default function CustomTabs({
  tabs,
  tabsContainerProps,
  tabPanelProps,
}: ICustomTabs) {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        {...tabsContainerProps}
        sx={{
          borderBottom: 1,
          borderColor: `divider`,
          ...tabsContainerProps?.sx,
        }}
      >
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          {tabs.map(({ label }) => (
            <Tab label={label} key={label} />
          ))}
        </Tabs>
      </Box>
      {tabs.map(({ content }, index) => (
        <TabPanel
          value={value}
          index={index}
          key={index}
          tabPanelProps={tabPanelProps}
        >
          {content}
        </TabPanel>
      ))}
    </>
  );
}
