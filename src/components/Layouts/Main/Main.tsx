/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from "../../Navigation/Navbar";
// import { useNavigate } from "react-router-dom";
// import { getDataFromSession } from '../../../utils/localstorage';

const useStyles = makeStyles((theme: any) => ({
  appBarSpacer: { ...theme.mixins.toolbar, marginTop: '50px' },
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  container: {
    paddingBottom: theme.spacing(2),
  }
}));

const MainLayout = ({ children }: any) => {
  const classes = useStyles();
  // const navigate = useNavigate();
  const address = ["/login", "/register"].includes(window.location.pathname);

  // React.useEffect(() => {
  //   const userToken = getDataFromSession("token");
  //   if (!userToken) {
  //     navigate('/login');
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      {!address && <Navbar />}
      <main className={classes.content}>
        {address && <div className={classes.appBarSpacer} />}
        <div className={classes.container}>
          {children}
        </div>
      </main>

    </>
  );
};

export default MainLayout;