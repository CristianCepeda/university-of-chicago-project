import * as React from "react";
import { Grid } from "@mui/material";
import BoldCheckBoxButton from "../mui-components/BoldCheckBoxButton";

/*
- The first page will show a button which disappear when clicked and the text “Hello World!”
appears instead. The button must be custom and include a glyphicon and a text that can change.
It will display the text “Click” on it. Only for this page the text in the button must be bolded.
 */
export default function PageOne() {
  const [displayButton, setDisplayButton] = React.useState(true);
  return (
    <Grid container justifyContent={"center"}>
      <Grid item sx={{ marginTop: "calc(50vh - 64px)" }}>
        {displayButton ? (
          <BoldCheckBoxButton
            checked={false}
            onClickFunction={() => setDisplayButton(false)}
          >
            Click
          </BoldCheckBoxButton>
        ) : (
          <p>Hello World!</p>
        )}
      </Grid>
    </Grid>
  );
}
