import {Grid} from "@mui/material";

/*
- The second page will show a function on a graph using D3. The function to draw is Fibonacci in the x range of [0,10]
  When loaded the page shows the X and Y axis, and a button, with the same style as the one on the first page, but with the text “Draw” on it.
  After pressing a button, the function line is added to the graph.

  [0,   1,  1,  2,  3,  5,  8,  13, 21, 34, 55]
  [0,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10]

 */
export default function PageTwo() {
    const createFibonacciSequence = (length) => {
        const fibonacciSequence = [];
        for(let i = 0; i <= length; i++){
            if(i === 0) {
                fibonacciSequence.push(0);
            } else if (i === 1) {
                fibonacciSequence.push(1);
            } else {
                fibonacciSequence.push(fibonacciSequence[i-2] + fibonacciSequence[i-1])
            }
        }

        return fibonacciSequence;
    }

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