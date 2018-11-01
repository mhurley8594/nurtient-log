import * as React from "react";
import Grid from '@material-ui/core/Grid';
import TotalHeader from "../TotalHeader/TotalHeader";

class TotalHeaderSection extends React.Component {
    public render() {
        return (
            <Grid container={true} spacing={16}>
                <Grid item={true} xs={3}>
                    <TotalHeader label="kCal" amount={0} />
                </Grid>
                <Grid item={true} xs={3}>
                    <TotalHeader label="Protein" amount={0} />
                </Grid>
                <Grid item={true} xs={3}>
                    <TotalHeader label="Carb" amount={0} />
                </Grid>
                <Grid item={true} xs={3}>
                    <TotalHeader label="Fat" amount={0} />
                </Grid>
            </Grid>
        )
    }
}

export default TotalHeaderSection;