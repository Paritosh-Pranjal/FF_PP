import React from 'react';
import { TextField as MUITextField, TextFieldProps, styled } from '@mui/material';

const CustomField = styled(MUITextField)({
  border: '1px',
  borderColor:'black',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'black',
      color: 'black',
    },
  },
});
const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return <CustomField autoComplete="off" {...props} />;
};

export default TextField;
