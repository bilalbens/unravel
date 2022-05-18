import { useState,useCallback,useEffect } from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/index';
import { useNavigate } from "react-router-dom";



const theme = createTheme();

const  LoginPage = (props) => {

    const [user, setUser] = useState({
        email:"",
        password:""
})

let navigate = useNavigate();



const {userlogin} = useSelector((state)=> state);
const dispatch = useDispatch()

  const  {login, logout} = bindActionCreators(actionCreators, dispatch)

// console.log(userlogin)



  const handleChange = (e) =>{
    setUser({...user, [e.target.id]:e.target.value})

  }

  useEffect(() => {
    if(userlogin.data.status){
      navigate('/welcome')

  }

  }, [userlogin])
  


  const handleSubmit =   useCallback(async (e) => {
        e.preventDefault()
        await login(user)
        // console.log(userlogin)
      }
      )
  

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: '#236CE0'}}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
            {/* {userlogin? userlogin : " "} */}
          </Typography>
          <Box  noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,  backgroundColor: '#236CE0' }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                  Forgot password?
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


// const mapStateToProps = state => {
//   return {
//     state
//   };
// }
 
// const mapDispatchToProps = dispatch => {
//   return {
//     getPostById: getPostByIdFunc(dispatch),
//     getPostBulk: getPostsBulkFunc(dispatch)
//   }
// };

export default  LoginPage;