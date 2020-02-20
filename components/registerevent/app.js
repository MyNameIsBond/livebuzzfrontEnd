import withRoot from './modules/withRoot'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Field, Form, FormSpy } from 'react-final-form'
import Typography from './modules/components/Typography'
import AppFooter from './modules/views/AppFooter'
import AppForm from './modules/views/AppForm'
import { email, required } from './modules/form/validation'
import FormButton from './modules/form/FormButton'
import TextField from './modules/components/TextField'

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6)
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  feedback: {
    marginTop: theme.spacing(2)
  }
}))

function SignUp() {
  const classes = useStyles()
  const [sent, setSent] = React.useState(false)
  const [title, setTitle] = useState('rer')
  const [description, setDescription] = React.useState(String)
  const [abbreviation, setAbbreviation] = React.useState(String)
  const [start_date, setStart_date] = React.useState(String)
  const [end_date, setEnd_date] = React.useState(String)
  const [date_created, setDate_created] = React.useState('12/12/12')
  const [date_modified, setDate_modified] = React.useState('12/12/12')

  // Adress
  const [line1, setLine1] = React.useState('Coventry')
  const [line2, setLine2] = React.useState('England')
  const [line3, setLine3] = React.useState('West Midlands')
  const [line4, setLine4] = React.useState('United kingdom')
  const [address_note, setAddress_note] = React.useState('Address Note')

  const registerEvent = () => {
    console.log('success!!!!')
    const body = {
      Event: {
        title: title,
        description: description,
        abbreviation: abbreviation,
        start_date: start_date,
        end_date: end_date,
        date_created: date_created,
        date_modified: date_modified
      },
      Address: {
        line_1: line1,
        line_2: line2,
        line_3: line3,
        line_4: line4,
        postcode: 'CV5 8DU',
        address_note: address_note
      }
    }
    fetch(
      'https://prod-31.uksouth.logic.azure.com:443/workflows/13ac2ac87d3e4ea3aabe8d6c6b5981cf/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=_NuQ-zY3Uu-JQYASlcIGFfqpA-dNTSFIUQMo20HCM8M',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    )
      .then(response => response.json(response))
      .then(data => {
        console.log('Success:', data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  const validate = values => {
    const errors = required(
      ['firstName', 'lastName', 'email', 'password'],
      values
    )

    if (!errors.email) {
      const emailError = email(values.email, values)
      if (emailError) {
        errors.email = email(values.email, values)
      }
    }

    return errors
  }

  const handleSubmit = () => {
    setSent(true)
  }

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Register Event
          </Typography>
          <Typography variant="body2" align="center">
            <Link underline="always">Do you have a badge?</Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    required
                    component={TextField}
                    fullWidth
                    label="Title"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    required
                    component={TextField}
                    autoComplete="lname"
                    fullWidth
                    label="Description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                  />
                </Grid>
              </Grid>
              <Field
                required
                component={TextField}
                autoComplete="fname"
                fullWidth
                label="Abbreviation"
                onChange={e => setAbbreviation(e.target.value)}
                value={abbreviation}
              />
              <Field
                required
                component={TextField}
                autoComplete="fname"
                fullWidth
                label="Start Date"
                onChange={e => setStart_date(e.target.value)}
                value={start_date}
              />
              <Field
                required
                component={TextField}
                autoComplete="fname"
                fullWidth
                label="End Date"
                onChange={e => setEnd_date(e.target.value)}
                value={end_date}
              />
              <FormButton
                onClick={registerEvent}
                className={classes.button}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              >
                Register Event
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(SignUp)
