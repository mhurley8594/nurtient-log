import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

interface ITotalHeaderProps {
  label: string,
  amount: number
}

export default function TotalHeader(props: ITotalHeaderProps) {
  return (
    <Card>
      <CardContent>
        <h2>
          {props.label}
        </h2>
        <p>
          {props.amount}
        </p>
      </CardContent>
    </Card>
  )
}
