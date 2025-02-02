import { ButtonComponent } from "./style";

interface ButtonProps {
  size?: string;
  fullWidth?: boolean;
  rounded?: boolean;
};

const Button = ({
  size = 'medium',
  fullWidth = false,
  rounded = false,
}: ButtonProps) => {
  return (
    <ButtonComponent
      $size={size}
      $fullwidth={fullWidth}
      $rounded={rounded}>
      Button
    </ButtonComponent>
  )
};

export default Button;