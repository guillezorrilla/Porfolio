import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import javaScript from '../assets/javascript.png'
import web from '../assets/web.jpeg'
import react from '../assets/react.png'
import reactNative from '../assets/reactNative.png'
import vue from '../assets/vue.png'
import './Education.scss';
import ScrollAnimation from 'react-animate-on-scroll'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  inline: {
    display: 'inline',
  },
}));

const Education = forwardRef((props, ref) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section ref={ref} className='education'>
        <ScrollAnimation animateIn='fadeInUp' duration={1} animateOnce={true}>
      <p style={{ fontSize: '12px' }}>Educaction</p>
      <h5
        className='section-heading'
        style={{ color: 'black', fontWeight: '600' }}>
        My education
      </h5>
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            aria-controls='panel1bh-content'
            id='panel1bh-header'>
            <p className={classes.heading}>Graduated in María Virgen School</p>
            <p className={classes.secondaryHeading}>2012</p>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            aria-controls='panel2bh-content'
            id='panel2bh-header'>
            <p className={classes.heading}> Mechanical Engineering Student</p>
            <p className={classes.secondaryHeading}>2014-Present (Last Year)</p>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel3bh-content'
            id='panel3bh-header'>
            <p className={classes.heading}>Courses</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List className={classes.root}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt='Remy Sharp' src={javaScript} />
                </ListItemAvatar>
                <ListItemText
                  primary='Modern JavaScript'
                  secondary={
                    <React.Fragment>
                      <p
                        component='span'
                        variant='body2'
                        sizes='large'
                        color='textPrimary'>
                        Udemy
                      </p>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar
                    alt='Travis Howard'
                    src={web}
                    className={classes.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='Complete 2020 Web Development Bootcamp'
                  secondary={
                    <React.Fragment>
                      <p
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'>
                        Udemy
                      </p>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt='Cindy Baker' src={react} />
                </ListItemAvatar>
                <ListItemText
                  primary='React - The complete Guide'
                  secondary={
                    <React.Fragment>
                      <p
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'>
                        Udemy
                      </p>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt='Cindy Baker' src={reactNative} />
                </ListItemAvatar>
                <ListItemText
                  primary='React Native'
                  secondary={
                    <React.Fragment>
                      <p
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'>
                        Udemy
                      </p>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt='Cindy Baker' src={vue} />
                </ListItemAvatar>
                <ListItemText
                  primary='Vue JS 2'
                  secondary={
                    <React.Fragment>
                      <p
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'>
                        Udemy
                      </p>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      </ScrollAnimation>
    </section>
  );
});

export default Education;
