import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "./Blogs.css";
import Box from "@mui/material/Box";
import TopRated from "./TopRated";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;

  useEffect(() => {
    fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.products);
        const count = data.count;
        const pageNumber = Math.round(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  console.log(blogs);
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
            {blogs.map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
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
           {blogs.slice(0, 6).map((blog) => blog.rating > 2.5 ? (
              <TopRated key={blog._id} blog={blog} />
            ): null)}
        </aside>
      </section>
    </div>
  );
};

export default Blogs;
