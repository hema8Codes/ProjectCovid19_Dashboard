import React from 'react';
import { CountrySummary, StateDaily} from './components';
import { Box, Typography } from '@material-ui/core';
import styles from './App.module.css'



class App extends React.Component {

  render() {
   
    return (
      <Box className={styles.container}>
        <Box className={styles.heading}>
            <Typography variant="h3" align="center" color="tomato">India Covid 19 Dashboard</Typography>
        </Box>
        <CountrySummary/>
      </Box>
    );
  }
}

export default App;

