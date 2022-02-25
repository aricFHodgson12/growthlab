import * as React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Link,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';

interface CollectItemProps {
  userName: string;
  collectName: string;
  src: string;
}

export default function Collectibles({
  userName,
  collectName,
  src,
}: CollectItemProps) {
  const theme = useTheme();

  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        paddingTop: '0px !important',
        paddingBottom: '0px !important',
        margin: 0,
      }}
      secondaryAction={
        <IconButton edge="end" aria-label="right">
          <ChevronRightIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          src={src}
          alt={collectName}
          sx={{ width: 60, height: 60 }}
        />
      </ListItemAvatar>
      <ListItemText
        sx={{ margin: 2 }}
        primary={collectName}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline', marginRight: 1 }}
              component="span"
              variant="body2"
              color={theme.palette.grey['400']}
            >
              by
            </Typography>
            <Typography component="span">
              <Link underline="none" color={theme.palette.success.light}>
                {userName}
              </Link>
            </Typography>
          </>
        }
      />
    </ListItem>
  );
}
