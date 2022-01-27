import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import HoverRating from "./Rating";
import './Blogs.css'
import { Link } from "react-router-dom";


const Blog = (props) => {
    const {_id, avgPrice, day, thumb, title, rating} = props.blog;
  return (
    <div>
      <Card className="card-width">
        <Link className="text-decoration-none" to={`blog/${_id}`}>
          <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image={thumb}
                alt="green iguana"
              />
              <CardContent className="py-1 px-2">
                <Typography gutterBottom variant="body" className="mb-0" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="d-flex justify-content-between align-items-center">
                  <HoverRating rating={rating}></HoverRating>
                  <span className="fw-bold text-dark"><span className="text-success">Avg $</span> {avgPrice}</span>
                </Typography>
              </CardContent>
            </CardActionArea>
        </Link>
        <CardActions className="pt-0">
            <Typography gutterBottom variant="body" className="mb-0" component="div">
              
              <span>{day} day accommodation with all expenses</span>
            </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default Blog;
