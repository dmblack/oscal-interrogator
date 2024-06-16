// Metadata.js
import React from 'react';

const Metadata = ({ metadata }) => {
  return (
    <div className="metadata">
      <h2>Metadata</h2>
      {metadata.title && <p><strong>Title:</strong> {metadata.title}</p>}
      {metadata.version && <p><strong>Version:</strong> {metadata.version}</p>}
      {metadata.lastModified && <p><strong>Last Modified:</strong> {metadata.lastModified}</p>}
      {/* Add more metadata fields as needed */}
    </div>
  );
};

export default Metadata;
