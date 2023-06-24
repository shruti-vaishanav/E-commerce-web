/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useState } from "react";
import type { Dispatch, ChangeEvent, FC } from 'react'
import { useNavigate } from "react-router-dom";
import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from "react-redux";
import loginUser from "../redux/action/user";
import { ILoginUser } from "../interface/user.interface";
import { RemoveDataFromSession, getDataFromSession } from "../utils/localstorage";


const LogIn: FC = (): ReactElement => {
  const dispatch: Dispatch<any> = useDispatch();
  const { currentPath } = useSelector((state: any) => state.window);
  console.log('currentPath: ', currentPath);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ILoginUser>({
    username: 'kminchelle',
    password: '0lelplR',
  });


  const handleLogin = async () => {
    const userData: any = await dispatch(loginUser(formData));
    if (userData.token) {
      navigate(`${currentPath}`);
      RemoveDataFromSession('pathName')
    }
  };
  const FormValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email Address"
            name="username"
            autoComplete="username"
            onChange={FormValue}
            value={formData.username}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={FormValue}
            value={formData.password}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LogIn;