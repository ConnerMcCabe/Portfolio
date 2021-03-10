import React from "react";
import './Portfolio.css';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 250,
  }
})
export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className='card-container'>
      <Card className={classes.root}>
        <CardActionArea href="https://github.com/ConnerMcCabe/React-Tracker" target="_blank">
          <CardMedia 
            className={classes.media}
            image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8aW5mb3JtYXRpb24lMjBncmFwaHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="COVID 19 graph"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Covid Tracker
            </Typography>
            <Typography variant="body2" color="textSecondary">
              pulling data from an API to display nation COVID-19 rates of infections, recoveries, and deaths
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea href="https://github.com/ConnerMcCabe/JS-CatChat" target="_blank">
          <CardMedia 
            className={classes.media}
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            title="Message Board"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Message Board
            </Typography>
            <Typography variant="body2" color="textSecondary">
              this demo chat application features the abiltiy to generate comments on a board with auto-moderation
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea href="https://github.com/ConnerMcCabe/ZoomZoom" target="_blank">
          <CardMedia 
            className={classes.media}
            image="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            title="Video Conference"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Video Conference Application
            </Typography>
            <Typography variant="body2" color="textSecondary">
              using a generated key to host live video feed between computers or smartphones
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea href="https://github.com/ConnerMcCabe/React-Weather-App" target="_blank">
          <CardMedia 
            className={classes.media}
            image="https://images.unsplash.com/photo-1614480633894-f3b7f4bb0e76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            title="Weather application"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Weather Application
            </Typography>
            <Typography variant="body2" color="textSecondary">
              a weather application pulling information from the OpenWeather API
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
