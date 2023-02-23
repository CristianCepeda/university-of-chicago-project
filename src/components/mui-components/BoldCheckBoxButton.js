import * as React from "react";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { Button } from "@mui/material";

export default function BoldCheckBoxButton({
  checked,
  onClickFunction,
  children,
}) {
  return (
    <Button
      sx={{ fontWeight: "bold" }}
      variant={"contained"}
      size={"large"}
      startIcon={
        checked ? (
          <CheckBoxOutlinedIcon />
        ) : (
          <CheckBoxOutlineBlankOutlinedIcon />
        )
      }
      onClick={onClickFunction}
    >
      {children}
    </Button>
  );
}
