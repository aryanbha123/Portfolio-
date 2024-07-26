import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function List() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const BASE_URL = process.env.REACT_APP_BACKEND;

    async function getProjects() {
        try {
            const response = await fetch(`${BASE_URL}/api/projects/get`);
            const result = await response.json();
            console.log('API Response:', result);  // Log the entire result to see its structure
            setData(result.products || result || []);  // Adjust based on the actual structure
            setFilteredData(result.products || result || []);  // Initialize filteredData
        } catch (err) {
            console.error('Error fetching projects:', err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        console.log('Search Query:', searchQuery);  // Debug search query value
        console.log('Data:', data);  // Debug data before filtering

        if (searchQuery) {
            const filtered = data.filter(project => {
                const title = project.title || '';  // Use empty string if title is undefined
                const description = project.description || '';  // Use empty string if description is undefined

                return title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    description.toLowerCase().includes(searchQuery.toLowerCase());
            });
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [searchQuery, data]);

    return (
        <div>
            <section id="portfolio" className="portfolio-section py-16 px-6">
                <div className="contaier mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Project Showcase</h2>
                        <p className="text-lg text-indigo-500 font-semibold">
                            Discover our latest projects 
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center mb-8">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="mt-4 px-4 py-2 border rounded"
                        />
                    </div>

                    {loading ? (
                        <div className="text-center">Loading...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredData.length > 0 ? (
                                filteredData.map((project) => (
                                    <Card project={project} key={project.id} />
                                ))
                            ) : (
                                <div className="text-center col-span-full">No projects found</div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
