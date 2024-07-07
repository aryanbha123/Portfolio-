import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Loader from '../components/Loader';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading state
    const BaseURL = process.env.BASE_URI || 'https://portfolio-aryan-backend.vercel.app'; // Default base URL

    // Method to fetch projects data
    const fetchProjects = async () => {
        try {
            const response = await fetch(`${BaseURL}/api/projects/get`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setProjects(data.products);
            setTimeout(() => {setLoading(false)}, 3000 );
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            setTimeout(() => {setLoading(false)}, 3000 ); // Set loading to false on error as well
        }
    };

    useEffect(() => {
        fetchProjects();
    }, [BaseURL]); // Fetch projects when BaseURL changes

    return (
        <div style={{minHeight:"80vh"}} className=" left-0 flex justify-center w-full mt-32">
            {loading ? (
                <div className="flex items-center justify-center left-0 w-full h-full">
                    <Loader />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {projects.map(project => (
                        <Card key={project._id} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
}
