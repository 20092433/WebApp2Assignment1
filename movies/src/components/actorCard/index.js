import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
// import StarRateIcon from "@mui/icons-material/StarRate";
// import IconButton from "@mui/material/IconButton";
// import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'

export default function ActorCard({ actor }) {
    //const movie = props.movie;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={actor.name} />
            <CardMedia
                sx={{ height: 500 }}
                image={
                    actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : img
                }
            />

            <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites" onClick={null}>
          <FavoriteIcon color="primary" fontSize="large" />
        </IconButton> */}
      
                <Button variant="outlined" size="medium" color="primary">
                    More Info ...
                </Button>
            
            </CardActions>
        </Card>
    );
}