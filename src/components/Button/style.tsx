import styled from "@emotion/styled";

type buttonType = { [key: string]: string };

const buttonSize: buttonType = {
  small: `
    padding: 4px 12px;
    font-size: 14px;
  `,
  medium: `
    padding: 6px 18px;
    font-size: 16px;
  `,
  large: `
    padding: 8px 24px;
    font-size: 18px;
  `,
};

const radius: buttonType = {
  small: `4px`,
  medium: `6px`,
  large: `8px`,
};

export const ButtonComponent = styled.button<{
  $size: string,
  $fullwidth: boolean,
  $rounded: boolean,
}>`
  ${(props) => buttonSize[props.$size]};
  width: ${(props) => props.$fullwidth ? '100%' : 'fit-content'};
  border-radius: ${(props) => props.$rounded ? '40px' : radius[props.$size]};

  background-color: transparent;
  border: 1px solid red;
  transition: all 0.2s;
  cursor: pointer;
`;