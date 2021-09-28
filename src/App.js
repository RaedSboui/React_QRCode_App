import React from 'react';
import clsx from "clsx";
import './App.css'

//Material ui components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//Icons
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import CameraIcon from '@material-ui/icons/Camera';
import InboxIcon from "@material-ui/icons/MoveToInbox";

//Router
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

//Components
import  GenerateQrCode from './components/GenerateQrCode';
import ReadQrCodeByScan from './components/ReadQrCodeByScan';
import ReadQrCodeByCam from './components/ReadQrCodeByCam';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  link: { textDecoration: 'none', color: theme.palette.text.primary}
}));

const App = () => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{backgroundColor: '#576574', color: '#EEE685'}}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className="headerLogoCenter">
            <div id="logo">
                <h1>QR <sub> SR </sub> Code</h1>
            </div>
          </div>
            
        </Toolbar>
      </AppBar>
      <Drawer 
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          <Link to='/' className={classes.link}>
            <ListItem button key='Generate QR Code'>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Generate QR Code' />
            </ListItem>
          </Link>
          <Divider />
          <Link to='/scan' className={classes.link}>
            <ListItem button key='Scan QR Code'>
              <ListItemIcon>
                <SettingsOverscanIcon />
              </ListItemIcon>
              <ListItemText primary='Scan QR Code' />
            </ListItem>
          </Link>
          <Divider />
          <Link to='/cam' className={classes.link}>
            <ListItem button key='Scan Web Cam QR Code'>
              <ListItemIcon>
                <CameraIcon />
              </ListItemIcon>
              <ListItemText primary='Scan Web Cam QR Code' />
            </ListItem>
          </Link>
          <Divider />
        </List> 

      </Drawer>
      
      <Switch>
        <Route exact path="/">
        <main  style={{ background: '#c8d6e5'}}
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <GenerateQrCode/>
      </main>
        </Route>
        <Route exact path="/scan">
        <main  style={{ background: '#c8d6e5'}}
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <ReadQrCodeByScan/>
      </main>
        </Route>
        <Route exact path="/cam">
        <main  style={{ background: '#c8d6e5'}}
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <ReadQrCodeByCam/>
      </main>
        </Route>
      </Switch>


    </div>
    </Router>
  );
}

export default  App;