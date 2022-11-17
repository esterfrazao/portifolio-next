import { IProps } from "../../interfaces/reactProps.interface";
import { ButtonContainer } from "./style";

export default function IconButton({ children, color, icon }: IProps) {
  return (
    <ButtonContainer color={color}>
      <span> {icon} </span>
      <p>{children}</p>
    </ButtonContainer>
  );
}
