import React from "react";
import { useNavigate } from "react-router-dom";

import { ButtonContainer } from "./styles";

const Button = ({ title, variant = "primary", onClick }) => {
  const navigate = useNavigate();

  return (
    <ButtonContainer variant={variant} onClick={() => navigate(onClick)}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
