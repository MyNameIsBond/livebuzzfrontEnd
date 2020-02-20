import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const App = props => {
  const [name, setName] = useState(String)
  const [start_date, setDate] = useState(new Date('2014-08-18T21:11:54'))
  const [end_date, setEndDate] = useState(new Date('2014-08-18T21:11:54'))

  const handleDateChange = date => {
    console.log('!!')
  }

  const registerEvent = () => {
    const body = {
      id: '122222',
      buzz: '1222222',
      title: "Ardavan's Empire",
      description: 'I love Microsoft',
      abbreviation: 'LA',
      start_date: '14/02/2020',
      end_date: '15/02/2020',
      date_created: '23/01/2020',
      date_modified: '22/01/2020'
    }
    const body2 = {
      Event: {
        title: "Tony's Speach",
        description: 'Macs are better than windows',
        abbreviation: 'macOS vs Windows',
        start_date: '12/12/12',
        end_date: '12/12/12',
        date_created: '12/12/12',
        date_modified: '12/12/12'
      },
      Address: {
        line_1: 'this is line 1',
        line_2: 'this is line 2',
        line_3: 'this is line 3',
        line_4: 'this is line 4',
        postcode: 'CV5 8DU',
        address_note: 'Earlsdon St 86'
      }
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          onChange={e => {
            setName(e.target.value)
          }}
          id="standard-basic"
          label="Event Title"
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField id="standard-basic" label="Event Description"></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField id="standard-basic" label="Event Abreviation"></TextField>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={registerEvent} variant="contained" color="primary">
          Register
        </Button>
      </Grid>
    </Grid>
  )
}

export default App
