import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchProject = async () => {
      try {
        // const response = await fetch(`api.aryanbhandari.online/api/project/${id}`);
        const response = await fetch(`api.aryanbhandari.online/api/projects?id=${id}`); // Repl
        if (!response.ok) {
          throw new Error('Failed to fetch project');
        }
        const data = await response.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {project ? (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      ) : (
        <p>No project found</p>
      )}
    </div>
  );
}
