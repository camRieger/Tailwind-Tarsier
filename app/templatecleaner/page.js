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

  function formatJSX(code) {
    const lines = code.split("\n");
    let indent = 0;
    const indentSize = 2;

    return lines
      .map((line) => {
        const trimmed = line.trim();

        // Decrease indent for closing tags
        if (trimmed.startsWith("</")) {
          indent -= 1;
        }

        const formatted =
          " ".repeat(indent * indentSize) + trimmed;

        // Increase indent for opening tags (not self-closing)
        if (
          trimmed.startsWith("<") &&
          !trimmed.startsWith("</") &&
          !trimmed.endsWith("/>")
        ) {
          indent += 1;
        }

        return formatted;
      })
      .join("\n");
    }


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
            {console.log(map.template)}
            <pre className="whitespace-pre-wrap">
              {formatJSX(map.template?.replace(/space/g, "\n"))}
            </pre>
          </pre>
        </li>
      ))}
    </div>
  );
}
