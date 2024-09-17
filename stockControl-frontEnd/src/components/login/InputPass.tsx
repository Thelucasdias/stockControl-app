import React from 'react';
import {Input} from './Input';
import { TextInputProps, TextInput } from 'react-native';
import { ExecutionProps } from 'styled-components/native';
import { FastOmit, Substitute } from 'styled-components/native/dist/types';

const InputPass = (props: React.JSX.IntrinsicAttributes & FastOmit<Substitute<FastOmit<TextInputProps & React.RefAttributes<TextInput>, never>, FastOmit<{}, never>>, keyof ExecutionProps> & FastOmit<ExecutionProps, "as" | "forwardedAs"> & { as?: void | undefined; forwardedAs?: void | undefined; }) => {
  return <Input {...props} secureTextEntry={true} />;
};

export default InputPass;
