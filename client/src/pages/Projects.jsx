import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const BaseURL = process.env.BASE_URI;

    // Method to fetch projects data
    const fetchProjects = async () => {
        fetch('https://portfolio-aryan-backend.vercel.app/api/projects/get', { method: "GET" })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setProjects(data.products);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    };

    useEffect(() => {
        fetchProjects();
    }, [BaseURL]);

    return (
        <div className='flex justify-center w-full mt-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {projects.map(project => (
                    <Card key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
}
