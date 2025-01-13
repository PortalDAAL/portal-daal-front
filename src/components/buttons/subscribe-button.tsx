import { ButtonOwnProps, SxProps } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import { useUser } from "../../UserContext";
import { Actions } from "../../actions/actions";

interface SubscribeButtonProps {
  label: string;
  eventId: string;
  variant: ButtonOwnProps["variant"];
  className?: string;
  sx?: SxProps;
}

const SubscribeButton = ({
  label,
  eventId,
  variant,
  className,
  sx,
}: SubscribeButtonProps): React.ReactElement => {
  // TODO: se user já tiver se inscrito, desabilitar botão
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  // TODO: implementar operação de vincular usuário a evento
  const handleClick = (): void => {
    if (user) {
      setLoading(true);
      Actions.subscribeUserOnEvent(eventId, user)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
      setLoading(false);
    }
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
