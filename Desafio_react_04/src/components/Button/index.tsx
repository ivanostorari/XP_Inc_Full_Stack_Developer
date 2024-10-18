import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ children, disabled, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled}>{children}</ButtonContainer>;
};

export default Button;
