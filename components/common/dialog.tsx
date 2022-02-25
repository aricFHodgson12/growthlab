import React, { useState } from 'react';

import {
  Button,
  ButtonProps,
  Dialog,
  DialogProps,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogTitleProps,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IDialogTitle extends DialogTitleProps {
  children: React.ReactChild;
  hasCloseButton: boolean;
  onClose: () => void;
}

function CustomDialogTitle({
  children,
  hasCloseButton,
  onClose,
  ...props
}: IDialogTitle) {
  return (
    <DialogTitle {...props}>
      {children}
      {hasCloseButton && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: `absolute`,
            right: 16,
            top: 12,
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  );
}

interface DialogAction {
  content?: string;
  clickHandler?: () => void;
  props?: ButtonProps;
}

interface DialogI extends Omit<DialogProps, 'open'> {
  action?: {
    main: DialogAction;
    cancel?: DialogAction;
  };
  children?: React.ReactNode;
  open?: {
    label?: string;
    control?: {
      open: boolean;
      setOpen: (open: boolean) => void;
    };
  };
  title?: string;
}

export default function CustomDialog({
  action,
  children,
  open,
  title,
  ...props
}: DialogI) {
  const [localOpen, setLocalOpen] = useState<boolean>(false);

  const handleOpen = (value: boolean) => {
    if (open?.control) {
      open.control.setOpen(value);
    } else {
      setLocalOpen(value);
    }
  };

  const handleActionClick = async (callback?: () => void) => {
    callback && (await callback());
    handleOpen(false);
  };
  const getBtnProps = (props?: ButtonProps) => props || {};

  return (
    <>
      {open?.label && (
        <Button variant="outlined" onClick={() => handleOpen(true)}>
          {open.label}
        </Button>
      )}
      <Dialog
        onClose={() => handleOpen(false)}
        open={open?.control?.open || localOpen}
        {...props}
      >
        {title && (
          <CustomDialogTitle
            hasCloseButton={!action?.main}
            onClose={() => handleOpen(false)}
          >
            {title}
          </CustomDialogTitle>
        )}
        {children && <DialogContent dividers>{children}</DialogContent>}
        {action?.main && (
          <DialogActions>
            <Button
              onClick={() => handleActionClick(action?.cancel?.clickHandler)}
              {...getBtnProps(action?.cancel?.props)}
            >
              {action?.cancel?.content || `Cancel`}
            </Button>

            <Button
              onClick={() => handleActionClick(action.main.clickHandler)}
              {...getBtnProps(action.main.props)}
            >
              {action.main.content || `Save`}
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}
