import styled from 'styled-components';

interface ButtonContainerProps {
    disabled?: boolean;
    children: React.ReactNode;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${(props) => (props.disabled ? '#ccc' : '#007BFF')};
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? '#ccc' : '#0056b3'}; // Azul mais escuro ao passar o mouse
  }
`;
