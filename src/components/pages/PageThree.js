import { Grid } from "@mui/material";

/*
- The third page will show a calculator that you will embed starting from this project: https://github.com/ahfarmer/calculator
 */
export default function PageThree() {
  return (
    <>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item sx={{ marginTop: "5%" }}>
          <iframe
            style={{ height: "50vh", width: "50vw" }}
            src={"https://ahfarmer.github.io/calculator/"}
          />
        </Grid>
      </Grid>
    </>
  );
}
