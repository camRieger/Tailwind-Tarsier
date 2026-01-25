"use client"
import { useEffect, useState } from 'react';
import {getMaps} from '@/app/utils/get-maps';

export default function DisplayUsers() {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchMaps() {
      try { 
        const mapsList = await getMaps();
        setMaps(mapsList);
      } catch (err) {
        setError('Failed to fetch maps: ' + err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMaps();
  }, []); 

  if (loading) {
    return <p>Loading maps...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (

    <div>
      <ul>
        {maps.map((map) => (
          <li key={map.id}>
            <button
              onClick={() => setSelectedId(map.id)}
              className="underline text-blue-600 hover:text-blue-800"
            >
              {map.id}
            </button>
          </li>
        ))}
      </ul>
      <h1>Maps from Firestore</h1>
     {maps
      .filter((map) => map.id === selectedId)
      .map((map) => (
        <li key={map.id}>
          <strong>Description:</strong> {map.description}<br />
          <strong>Solution:</strong> {map.solution}<br />
          <strong>Template:</strong>
          <pre className="whitespace-pre-wrap">
            {map.template?.replace("space", "\n\n")}
          </pre>
        </li>
      ))}
    </div>
  );
}
