import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "./Blogs.css";
import Box from "@mui/material/Box";
import TopRated from "./TopRated";

import axios from "axios";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import swal from "sweetalert";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;

  useEffect(() => {
    fetch(`https://vast-chamber-83281.herokuapp.com/blogs?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  console.log(blogs);

  const { register, handleSubmit, reset } = useForm();

  /* take input and send to server */
  const onSubmit = (data) => {
    //console.log(data)
    axios
      .post("https://vast-chamber-83281.herokuapp.com/blogs", data, (data.status = "pending"))
      .then((res) => {
        if (res.data.insertedId) {
          swal(
            "Good job!",
            "Successfully submitted! An admin will approve your post",
            "success"
          );
          reset();
        }
      });
  };
  // add new product by admin
  return (
    <div>
      <section className="part mt-5">
        <div className="col-big">
          <Box
            className="bg-white pt-2 pb-1 ps-2 mb-3 border border-start-1"
            sx={{ boxShadow: 3 }}
          >
            <h5>These destinations are just a click away</h5>
          </Box>
          <div className="card-container">
            {blogs.map((blog) =>
              blog.status === "approved" ? (
                <Blog key={blog._id} blog={blog} />
              ) : null
            )}
          </div>
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={number === page ? "selected" : ""}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
        <aside className="col-small">
          <Box
            className="bg-white pt-2 pb-1 ps-2 mb-3 border border-start-1"
            sx={{ boxShadow: 3 }}
          >
            <h5>Top rated spots</h5>
          </Box>
          {blogs
            .slice(0, 4)
            .map((blog) =>
              blog.rating > 2.5 ? <TopRated key={blog._id} blog={blog} /> : null
            )}

          <div className="mt-5">
            <Box
              className="bg-white pt-2ps-2 border border-start-1"
              sx={{ boxShadow: 3 }}
            >
              <p className="my-2 ps-3">Add your experience as blog</p>
            </Box>
            <form
              action=""
              className="mx-0 px-0"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Box
                sx={{
                  // width: 500,
                  minWidth: "100%",
                }}
                className="d-flex justify-content-between "
              >
                <div className="pe-3">
                  <TextField
                    {...register("thumb")}
                    fullWidth
                    label="Thumbnail"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("title")}
                    fullWidth
                    label="Title in 4 words"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("totalHotel")}
                    fullWidth
                    label="Available hotels Number"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("avgPrice")}
                    fullWidth
                    label="Total expenses"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("descAbout")}
                    fullWidth
                    label="Description minimum 200 words"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("desc1")}
                    fullWidth
                    label="Description minimum 150 words"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("visitPlace")}
                    fullWidth
                    label="You have visited"
                    id="fullWidth"
                  />
                  &nbsp;
                </div>
                <div className="ps-3">
                  <TextField
                    {...register("image1")}
                    fullWidth
                    label="Image"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("image2")}
                    fullWidth
                    label="Image"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("image3")}
                    fullWidth
                    label="Image"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("rating")}
                    fullWidth
                    label="Rating out of 5"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("day")}
                    fullWidth
                    label="How many days you have stayed"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("Latitude")}
                    fullWidth
                    label="Area Latitude"
                    id="fullWidth"
                  />
                  &nbsp;
                  <TextField
                    {...register("longitude")}
                    fullWidth
                    label="Area longitude"
                    id="fullWidth"
                  />
                  &nbsp;
                </div>
              </Box>
              <input
                className=" border-0 text-white"
                style={{ backgroundColor: "rgb(0 81 255)" }}
                type="submit"
                value="Add Blog"
              />
            </form>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Blogs;
