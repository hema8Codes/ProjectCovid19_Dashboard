import React from 'react';
import { CountrySummary, StateSummary, StateDaily} from './components';
import { Box, MenuItem, Select, Typography } from '@material-ui/core';
import styles from './App.module.css'
import statesList from './api/stateList'


class App extends React.Component {
  state = {
    selectedState: 'Delhi'
  }

  handleStateChange = (e) => {
    this.setState({selectedState: e.target.value})
  }
  render() {
    const {selectedState} = this.state
    return (
      <Box className={styles.container}>
        <Box className={styles.heading}>
            <Typography variant="h4" align="center" color="textPrimary">India Covid 19 Dashboard</Typography>
        </Box>
        <CountrySummary/>
        <Box className={styles.heading}>
            <Typography variant="h4" align="center" color="textPrimary">State Statistics</Typography>
        </Box>
        <Box>
          <Select onChange={this.handleStateChange}
          value = {selectedState}
          >
            {statesList.map((stateName, index) => (
              <MenuItem 
              key={index}
              value={stateName}>
                {stateName}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <StateSummary selectedState={selectedState}/>
        <Box>
          <StateSummary/>
        </Box>
      </Box>
    );
  }
}

export default App;

