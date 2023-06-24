/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import type { Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { deleteUser } from '../../redux/action/user';
import { RemoveDataFromSession } from '../../utils/localstorage';
import { getWindowPath } from "../../redux/action/window";

const useStyles = makeStyles(() => ({
  navButtons: {
    color: '#F14D54',
    marginLeft: '10px',
    borderColor: "#F14D54"
  }
}));

const LogoutButton = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();

  // setDataToSession("pathName", window.location.pathname);
  useEffect(() => {
    dispatch(getWindowPath(window.location.pathname))
  }, []);
  const handleLogout = () => {
    RemoveDataFromSession('token');
    RemoveDataFromSession('user');
    navigate('/login');
    // dispatch(deleteUser());
  };

  return (
    <IconButton
      className={classes.navButtons}
      onClick={handleLogout}
    >
      <PowerSettingsNewOutlinedIcon />
    </IconButton>
  );
}

export default LogoutButton;



