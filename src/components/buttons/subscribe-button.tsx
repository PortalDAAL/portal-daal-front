import { ButtonOwnProps, SxProps } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import { useUser } from "../../UserContext";

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
  const { user, subscribe } = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  const isUserInscripted: boolean | undefined = user?.eventIds?.some(
    (e) => e === eventId
  );

  const handleClick = (): void => {
    if (user) {
      setLoading(true);
      setTimeout(() => {
        subscribe(eventId);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <LoadingButton
      className={className ?? ""}
      disabled={isUserInscripted}
      sx={{ textTransform: "uppercase", ...sx }}
      variant={variant}
      onClick={handleClick}
      loading={loading}
    >
      {isUserInscripted ? "Já inscrito" : label}
    </LoadingButton>
  );
};

export default SubscribeButton;
