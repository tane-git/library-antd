import * as React from 'react';
import { Button as AntButton } from 'antd';
import { NativeButtonProps } from "antd/lib/button/button.d";

export interface IProps extends NativeButtonProps {
  label?: string;
}

const Button: React.FC<IProps> = ({
  label,
}) => {
  return (
    <AntButton >
      {label}
    </AntButton>
  );
}

export default Button;