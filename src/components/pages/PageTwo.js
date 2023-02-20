import {Grid} from "@mui/material";

/*
- The second page will show a function on a graph using D3. The function to draw is Fibonacci in the x range of [0,10]
  When loaded the page shows the X and Y axis, and a button, with the same style as the one on the first page, but with the text “Draw” on it.
  After pressing a button, the function line is added to the graph.
 */
export default function PageTwo() {
    return (
        <>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid item>
                    <p>Page Two</p>
                </Grid>
            </Grid>
        </>
    );
}