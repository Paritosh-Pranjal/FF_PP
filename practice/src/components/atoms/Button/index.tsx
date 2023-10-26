import React from 'react';

import { Button as MUIButton, ButtonProps } from '@mui/material';

export interface IButtonProps extends ButtonProps {}

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <MUIButton {...rest} data-testid={children}>
      {children}
    </MUIButton>
  );
};

export default Button;
