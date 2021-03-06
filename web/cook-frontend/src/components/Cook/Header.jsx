import React, {useEffect, useState} from 'react';
import {makeStyles, createMuiTheme, ThemeProvider, withStyles, useTheme} from '@material-ui/core/styles';
import {AppBar, Toolbar, Tabs, Tab, Badge} from '@material-ui/core'
import {Link} from 'react-router-dom'
import AccountDropdown from "../AccountDropdown";

const StyledTabs = withStyles({
  indicator: {
    height: '100%',
    backgroundColor: '#0b658a33',
    pointerEvents: 'none'
  },
})(props => <Tabs {...props} />);

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#f1f1f1',
  },
  toolbar: {
    alignItems: 'center',
    padding: theme.spacing(0, 1),
  },
  tabs: {
    margin: theme.spacing(0,3)
  },
  tab: {
    outline: 'none!important',
    padding: theme.spacing(3,0,2,0),
    textDecoration: 'none!important'
  },
  account: {
    marginLeft: 'auto'
  },
  logo: {
    color: 'black',
    marginLeft: theme.spacing(2),
    borderRadius: "5px"
  },
  badge: {
    paddingRight: '7px',
  }
}));

function Header(props){

  const theme = useTheme();
  const classes = useStyles(theme);

  const {cookies, restaurantData, serviceData} = props;

  const logoData = restaurantData.restaurant.logo.data;
  const buffer = Buffer.from(logoData).toString('base64');
  const companyLogo = "data:image/png;base64,"+buffer;

  // Changes which tab is highlighted
  const [tab, setTab] = React.useState(props.tab);
  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };

  function renderBadge(){
    const count = updateRequestCount();
    if(count > 0){
      return (
        <Badge badgeContent={
          <span style={{color: theme.palette.text.primary}}>{count}</span>
        } color="secondary" className={classes.badge}>
          <span>Service Requests</span>
        </Badge>
      );
    }
    return <span>Service Requests</span>;
  }

  function updateRequestCount(){
    let count = 0;
    if(Object.keys(serviceData).length > 0){
      Object.values(serviceData).forEach(table => {
        if(table.status !== 'Good'){
          count++;
        }
      });
    }
    return count;
  }

  return(
    <ThemeProvider theme={theme}>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar className={classes.toolbar}>
          <img src={companyLogo}  width="auto" height="45px" alt="company logo" className={classes.logo}/>
          <StyledTabs value={tab} onChange={handleTabChange} indicatorColor="primary" textColor="primary" className={classes.tabs} >
            <Tab label="Orders" color="primary" className={classes.tab} component={Link} to={'/cook/orders'} />
            <Tab label={ renderBadge() } color="primary" className={classes.tab + " px-3"} component={Link} to={'/cook/service'} />
          </StyledTabs>
          <div className={classes.account}>
            <AccountDropdown firstName={cookies.staff.first_name} lastName={cookies.staff.last_name} />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header;