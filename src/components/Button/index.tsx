import React from 'react';
import { ButtonContainer } from './ButtonContainer';

interface IButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ title, onClick, disabled }) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
