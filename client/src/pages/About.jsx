import React from 'react';
import { Typography, ListItem } from '@mui/material';

const EducationSection = () => {
    return (
        <div className='about mt-32 flex flex-col lg:flex-row items-center lg:justify-between gap-5 w-full lg:px-32 lg:pb-16 px-7'>
            <div className="flex flex-col gap-5">
                <div className="flex gap-6 flex-col">
                    <Typography variant='' className='mb-4 border-l-4 pl-5 lg:text-3xl text-2xl' sx={{ borderColor: "#fb923c", fontWeight: "600" }}>Education</Typography>
                    <div className="flex gap-3  justify-start  flex-col border-l-2 border-black">
                        <ListItem sx={{ display: "flex", alignItems: "center", paddingTop: "0px" }}>
                            <span className='bg-black' style={{ height: "10px", position: "absolute", left: "-6px", borderRadius: "50%", width: "10px" }}></span>
                            <div className="flex w-72 justify-between items-center">
                                <span>UPES BCA</span>
                                <span>2023 - 2026</span>
                            </div>
                        </ListItem>
                        <ListItem sx={{ display: "flex", alignItems: "center", paddingTop: "0" }}>
                            <span className='bg-black' style={{ height: "10px", position: "absolute", left: "-6px", borderRadius: "50%", width: "10px" }}></span>
                            <div className="flex w-72 justify-between items-center">
                                <span>K.V.S  12th</span>
                                <span>2021 - 2023</span>
                            </div>
                        </ListItem>
                    </div>
                </div>
                <div className="flex gap-6 flex-col">
                    <Typography variant='' className='mb-4 border-l-4 pl-5 lg:text-3xl text-2xl' sx={{ borderColor: "#fb923c", fontWeight: "600" }}>Certifications</Typography>
                    <div className="flex gap-3  justify-start  flex-col border-l-2 border-black">
                        <ListItem sx={{ display: "flex", alignItems: "center", paddingTop: "0px" }}>
                            <span className='bg-black' style={{ height: "10px", position: "absolute", left: "-6px", borderRadius: "50%", width: "10px" }}></span>
                            <div className="flex w-72 justify-between items-center">
                                <span>Sigma 3.0 By Apna College</span>
                                <span className='text-sky-600'>Download</span>
                            </div>
                        </ListItem>
                        <ListItem sx={{ display: "flex", alignItems: "center", paddingTop: "0" }}>
                            <span className='bg-black' style={{ height: "10px", position: "absolute", left: "-6px", borderRadius: "50%", width: "10px" }}></span>
                            <div className="flex w-72 justify-between items-center">
                                <span>Cohort 0-100 By Harkirat</span>
                                <span className='text-sky-600'>Download</span>
                            </div>
                        </ListItem>
                    </div>
                </div>
            </div>
            <div className="flex flex-col" style={{ flex: "0.7" }}>
                <div className="flex gap-6 flex-col">
                    <Typography variant='' className='mb-4 border-l-4 pl-5 lg:text-3xl text-2xl' sx={{ borderColor: "#fb923c", fontWeight: "600" }}>Skills</Typography>
                    <div className="flex gap-3  justify-start  flex-col border-l-2 border-black">
                        <ListItem sx={{ display: "flex", alignItems: "center", paddingTop: "0px" }}>
                            <span className='bg-black' style={{ height: "10px", position: "absolute", left: "-6px", borderRadius: "50%", width: "10px" }}></span>
                            <div className="flex w-full justify-between items-center">
                                <span style={{flex:"0.5"}}>Frontend</span>
                                <span  className='flex justify-start' style={{flex:".6"}}>React Js</span>
                            </div>
                        </ListItem>
                        <ListItem sx={{ display: "flex", alignItems: "center", paddingTop: "0" }}>
                            <span className='bg-black' style={{ height: "10px", position: "absolute", left: "-6px", borderRadius: "50%", width: "10px" }}></span>
                            <div className="flex w-full justify-between items-center">
                                <span style={{flex:"0.5"}}>Backend</span>
                                <span  className='flex justify-start' style={{flex:".6"}}>Node Js ,  Python (Django) , Php </span>
                            </div>
                        </ListItem>
                        <ListItem sx={{ display: "flex", alignItems: "center", paddingTop: "0px" }}>
                            <span className='bg-black' style={{ height: "10px", position: "absolute", left: "-6px", borderRadius: "50%", width: "10px" }}></span>
                            <div className="flex w-full justify-between items-center">
                                <span style={{flex:"0.5"}}>Database</span>
                                <span  className='flex justify-start' style={{flex:".6"}}>MongoDb & MySQL</span>
                            </div>
                        </ListItem>
                        <ListItem sx={{ display: "flex", alignItems: "center", paddingTop: "0px" }}>
                            <span className='bg-black' style={{ height: "10px", position: "absolute", left: "-6px", borderRadius: "50%", width: "10px" }}></span>
                            <div className="flex w-full justify-between items-center">
                                <span style={{flex:"0.5"}}>DSA </span>
                                <span className='flex justify-start' style={{flex:".6"}}>CPP</span>
                            </div>
                        </ListItem>
                        <ListItem sx={{ display: "flex", alignItems: "center", paddingTop: "0px" }}>
                            <span className='bg-black' style={{ height: "10px", position: "absolute", left: "-6px", borderRadius: "50%", width: "10px" }}></span>
                            <div className="flex w-full justify-between items-center">
                                <span style={{flex:"0.5"}}>Version Control </span>
                                <span className='flex justify-start' style={{flex:".6"}}>Git & Github  </span>
                            </div>
                        </ListItem>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EducationSection;
