import React from 'react';

// Utility function to replace placeholders with links or text
const replacePlaceholdersWithLinks = (text, resolveReference) => {
  // Regular expression to match the placeholder pattern {{ insert: type, id }}
  const regex = /{{\s*insert:\s*(\w+),\s*(\w+)\s*}}/g;

  // Split the text by the regex, but keep the delimiter parts
  const parts = text.split(regex);

  return parts.map((part, index) => {
    // Even indexes (0, 2, ...) are regular text, odd indexes are the matched delimiters
    if (index % 3 === 0) {
      return part; // Regular text
    } else if (index % 3 === 1) {
      // Type (e.g., "param") is not used in this simple example but could dictate how to resolve the reference
      return (<a href={`#${parts[index + 1]}`} key={index}>{resolveReference(parts[index + 1])}</a>);
    }
    // Skip every third element since it's already handled as part of the link
    return null;
  }).filter(Boolean); // Filter out nulls (the skipped elements)
};

const Control = ({ control, OSCALProcessor }) => {
  const resolveReference = OSCALProcessor.resolveReference;

  // Function to recursively render parts (e.g., statement, guidance)
  const renderParts = (parts) => {
    return parts.map((part) => (
      <div id={part.id} key={part.id}>
        {/* Part ID for searching / indexing. It will be an anchor. */}
        <h4>{part.id}</h4>
        {/* Part name could be 'statement', 'guidance', 'information', etc. */}
        <h4>{part.name.charAt(0).toUpperCase() + part.name.slice(1)}</h4>
        {/* Render the prose if available */}
        {part.prose && <p>{part.prose}</p>}
        {/* Check if part has prose and needs placeholder replacement */}
        {part.prose && (
          <p>
            {replacePlaceholdersWithLinks(part.prose, resolveReference)}
          </p>
        )}

        {/* If the part has nested parts, recursively render them */}
        {part.parts && <div>{renderParts(part.parts)}</div>}
      </div>
    ));
  };

  return (
    <div className="control">
      <h3>{control.title}</h3>
      {/* Render properties */}
      {control.props && control.props.map((prop, index) => (
        <div key={index}>
          <strong>{prop.name}:</strong> {prop.value}
        </div>
      ))}
      {/* Render parts like 'statement', 'guidance', etc. */}
      {control.parts && renderParts(control.parts)}
    </div>
  );
};

export default Control;
