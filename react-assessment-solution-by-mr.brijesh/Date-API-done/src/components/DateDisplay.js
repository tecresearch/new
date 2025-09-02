import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Paper } from '@mui/material';

const DateDisplay = (({ data }) => {
  const t= data?data.date:'10-09-2011';
  const [m,d,y]= t.split('-').map(Number);
  console.log(d,m,y);
  

  // console.log(day,month,year);
  return <Paper className="container">
    <List>
      <ListItem>
        <ListItemText data-testid="day">Day: {d}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText data-testid="month">Month: {m}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText data-testid="year">Year: {y}</ListItemText>
      </ListItem>
    </List>
  </Paper>
});

DateDisplay.propTypes = {
  apiResponse: PropTypes.string
}

export default DateDisplay;