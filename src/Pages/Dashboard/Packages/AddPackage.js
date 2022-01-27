import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();

    /* take input and send to server */
    const onSubmit = data => {
        //console.log(data)
        axios.post('https://vast-chamber-83281.herokuapp.com/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Good job!", "Successfully submitted!", "success");
                    reset();
                }
            })
    };
    // add new product by admin
    return (
        <div>
         <h2 className="text-center">Add a new blog</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Box
                sx={{
                    // width: 500,
                    minWidth: '100%',
                }}
                className='d-flex justify-content-between '
                >
                <div className='pe-3'>
                <TextField {...register("thumb")} fullWidth label="Thumbnail" id="fullWidth" />&nbsp;
                <TextField {...register("title")} fullWidth label="Title in 4 words" id="fullWidth" />&nbsp;
                <TextField {...register("totalHotel")} fullWidth label="Available hotels Number" id="fullWidth" />&nbsp;
                <TextField {...register("avgPrice")} fullWidth label="Total expenses" id="fullWidth" />&nbsp;
                <TextField {...register("descAbout")} fullWidth label="Description minimum 200 words" id="fullWidth" />&nbsp;
                <TextField {...register("desc1")} fullWidth label="Description minimum 150 words" id="fullWidth" />&nbsp;
                <TextField {...register("visitPlace")} fullWidth label="You have visited" id="fullWidth" />&nbsp;
                
                </div>
                <div className='ps-3' >
                <TextField {...register("image1")} fullWidth label="Image" id="fullWidth" />&nbsp;
                <TextField {...register("image2")} fullWidth label="Image" id="fullWidth" />&nbsp;
                <TextField {...register("image3")} fullWidth label="Image" id="fullWidth" />&nbsp;
                <TextField {...register("rating")} fullWidth label="Rating out of 5" id="fullWidth" />&nbsp;
                <TextField {...register("day")} fullWidth label="How many days you have stayed" id="fullWidth" />&nbsp;
                <TextField {...register("Latitude")} fullWidth label="Area Latitude" id="fullWidth" />&nbsp;
                <TextField {...register("longitude")} fullWidth label="Area longitude" id="fullWidth" />&nbsp;

                </div>
                
                </Box>
                <input type="submit" value="Add Blog" />
            </form>
        </div>
    );
};

export default AddPackage;