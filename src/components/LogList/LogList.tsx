import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class LogList extends React.Component {
  public render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Food</TableCell>
            <TableCell>Grams</TableCell>
            <TableCell>kCal</TableCell>
            <TableCell>Protein</TableCell>
            <TableCell>Carb</TableCell>
            <TableCell>Fat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>06:55</TableCell>
            <TableCell>String Cheese</TableCell>
            <TableCell>100</TableCell>
            <TableCell>90</TableCell>
            <TableCell>9</TableCell>
            <TableCell>3</TableCell>
            <TableCell>7</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12:35</TableCell>
            <TableCell>Hamburger</TableCell>
            <TableCell>300</TableCell>
            <TableCell>350</TableCell>
            <TableCell>20</TableCell>
            <TableCell>30</TableCell>
            <TableCell>15</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default LogList;
