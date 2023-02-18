import {Grid} from "@mui/material";

export default function PageOne() {
    return (
        <Grid container justifyContent={'center'} alignItems={'center'}>
            <Grid item>
                <p>Page One</p>
                <p>Hello World!</p>
            </Grid>
        </Grid>
    );
}