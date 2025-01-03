import { ButtonOwnProps, SxProps } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import { useUser } from "../../UserContext";

interface SubscribeButtonProps {
  label: string;
  variant: ButtonOwnProps["variant"];
  className?: string;
  sx?: SxProps;
}

const SubscribeButton = ({
  label,
  variant,
  className,
  sx,
}: SubscribeButtonProps): React.ReactElement => {
  // TODO: se user já tiver se inscrito, desabilitar botão
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  // TODO: implementar operação de vincular usuário a evento
  const handleClick = (): void => {
    setLoading(true);
    setTimeout(async () => {
      console.log(user);
      setLoading(false);
    }, 5000);
  };

  return (
    <LoadingButton
      className={className ?? ""}
      sx={{ textTransform: "uppercase", ...sx }}
      variant={variant}
      onClick={handleClick}
      loading={loading}
    >
      {label}
    </LoadingButton>
  );
};

export default SubscribeButton;
