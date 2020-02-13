import React, {useState} from "react";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const App = props => {
  
  const [name, setName] = useState(String)
  const [start_date, setDate] = useState(new Date('2014-08-18T21:11:54'))
  const [end_date, setEndDate] = useState(new Date('2014-08-18T21:11:54'))

  const handleDateChange = date => {
    console.log('!!')
  };

  const registerEvent = ()=> {

    // const body = {
    //   name: name,
    //   start_date: start_date,
    //   end_date: end_date
    // }

   const  body = {  
      id: "122222",
      buzz: "1222222",
      title: "Ardavan's Empire",
      description: "I love Microsoft",
      abbreviation: "LA",
      start_date: "14/02/2020",
      end_date: "15/02/2020",
      date_created: "23/01/2020",
      date_modified: "22/01/2020"
      }

      fetch('https://livebus.azurewebsites.net/odata/Events', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      })
      .then((response) => response.json(response))
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      
      }
  
return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField onChange={e => {
          setName(e.target.value)
          }} id="standard-basic" label="Event Title">
      </TextField>
        </Grid>
        <Grid item xs={12}>
        <TextField id="standard-basic" label="Event Description">
      </TextField>
        </Grid>
        <Grid item xs={12}>
        <TextField id="standard-basic" label="Event Abreviation">
      </TextField>
        </Grid>
        <Grid item xs={12}>
        <Button onClick={registerEvent} variant="contained" color="primary">
       Register
      </Button>
        </Grid>
    </Grid>
  )
}

export default App;



