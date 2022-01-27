import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import TopRated from "../../Home/Blogs/TopRated";
import Package from "./AddPackage";
import "../../Home/Blogs/Blogs.css";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import HoverRating from "../../Home/Blogs/Rating";
  import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
  import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
  import "./Package.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [deleted, setDeleted] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setPackages(data.products);
      });
  }, [deleted, packages]);

  // delete item by admin from products collection
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm('Are you confirm to delete this item?');
    if (proceed) {
        const url = `http://localhost:5000/blogs/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                    setDeleted(true)
                } else {
                    setDeleted(false)
                }
            })
    }
}

  return (
    <div>
      <div>
        <div>
          <div>
            <section className="">
              <div className="">
                <Box
                  className="bg-white pt-2 pb-1 ps-2 mb-3 border border-start-1"
                  sx={{ boxShadow: 3 }}
                >
                  <h5>These destinations are just a click away</h5>
                </Box>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                  {packages.map((blog) => (

                    <div>
                    <Card className="card-width">
                      {/* <Link className="text-decoration-none" to={`blog/${_id}`}> */}
                      <CardActionArea>
                        <div className="container-ll">
                          <CardMedia
                            class="image"
                            component="img"
                            height="340"
                            image={blog.thumb}
                            alt="green iguana"
                          />
                          <div class="middle">
                            <span class="text">
                              {/* <span><DeleteOutlineIcon /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                              <span
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete Item"
                              >
                                
                                <button onClick={() => handleDeleteOrder(blog._id)}><DeleteOutlineIcon /></button>
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Update Item"
                              >
                                <SystemUpdateAltIcon />
                              </span>
                            </span>
                          </div>
                        </div>
                        <CardContent className="py-1 px-2">
                          <Typography
                            gutterBottom
                            variant="body"
                            className="mb-0"
                            component="div"
                          >
                            {blog.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="d-flex justify-content-between align-items-center"
                          >
                            <HoverRating rating={blog.rating}></HoverRating>
                            <span className="fw-bold text-dark">
                              <span className="text-success">Avg $</span> {blog.avgPrice}
                            </span>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      {/* </Link> */}
                      <CardActions className="pt-0">
                        <Typography
                          gutterBottom
                          variant="body"
                          className="mb-0"
                          component="div"
                        >
                          <span>{blog.day} day accommodation with all expenses</span>
                        </Typography>
                      </CardActions>
                    </Card>
                  </div>

                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
