import * as React from 'react';
import { DateTimePicker } from 'react-widgets';
import Grid from '@material-ui/core/Grid';

// Component imports.
import LogList from "../LogList/LogList";
import TotalHeaderSection from "../TotalHeaderSection/TotalHeaderSection";

class Dashboard extends React.Component {
    public render() {
        return (
            <Grid container={true}>
                <Grid item={true} xs={6}>
                    <h1>
                        Daily Summary
                    </h1>
                </Grid>
                <Grid item={true} xs={6}>
                    <DateTimePicker
                        id="log-date"
                        onCurrentDateChange={this.dateChange}
                        time={false}
                        format="DD-MM-YYYY"
                        defaultValue={new Date()}
                    />
                </Grid>
                <TotalHeaderSection />
                <h3>
                    Log Entries
                </h3>
                <LogList />
            </Grid>
        );
    }

    private dateChange(date?: Date | undefined) {
        console.log(date);
    }
}

export default Dashboard;
