import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import MailIcon from '@material-ui/icons/Mail';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MenuIcon from '@material-ui/icons/Menu';
import React, { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { signOut } from '../../utils/firebase';
import { useUser } from '../../utils/hooks/user';
import { useFirebaseReady } from '../../utils/hooks/firebase';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

const LoadingScreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: ${theme.spacing.xl};
  width: 100%;
`;

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

interface ResponsiveDrawerProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container?: any;
  children: ReactNode;
}

export function AppFrame(props: ResponsiveDrawerProps) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const user = useUser();
  const firebaseReady = useFirebaseReady();

  let title = '';
  if (location.pathname.includes('/login')) {
    title = 'Login';
  }
  if (location.pathname.includes('/cartas')) {
    title = 'Cartas anónimas';
  }
  if (location.pathname.includes('/cartas/new')) {
    title = 'Escribe tu carta';
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileDrawer = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          button
          component={NavLink}
          to="/cartas/new"
          onClick={closeMobileDrawer}
          activeClassName="Mui-selected"
        >
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Escribe tu carta" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/cartas"
          onClick={closeMobileDrawer}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Cartas anónimas" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {user ? (
          <ListItem
            button
            onClick={async () => {
              await signOut();
              closeMobileDrawer();
            }}
          >
            <ListItemIcon>
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary={'Logout'} />
          </ListItem>
        ) : (
          <ListItem
            button
            component={NavLink}
            to="/login"
            onClick={closeMobileDrawer}
            activeClassName="Mui-selected"
          >
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary={'Login'} />
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {firebaseReady ? (
          props.children
        ) : (
          <LoadingScreen>
            <CircularProgress size="100px" />
          </LoadingScreen>
        )}
      </main>
    </div>
  );
}
