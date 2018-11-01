import * as React from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { DateTimePicker } from 'react-widgets';

import TotalHeaderSection from "../TotalHeaderSection/TotalHeaderSection";

class LogForm extends React.Component {
  public render() {
    return (
      <div>
        <form>
            <InputLabel>Log Date/Time</InputLabel>
            <DateTimePicker
              id="log-date"
              defaultValue={new Date()}
            />
          <TextField
            label="Food"
            id="food"
            type="text"
            placeholder="Search for a food name"
          />
          <TextField
            label="Grams"
            id="qty"
            type="number"
            placeholder="100"
          />
          <TotalHeaderSection />
          <Button color="primary">Add Log</Button>
        </form>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default LogForm;
