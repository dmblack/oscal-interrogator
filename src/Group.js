// Group.js
import React from 'react';
import Control from './Control'; // Assuming you have a Control component

const Group = ({group, OSCALProcessor}) => {
  return (
    <div>
      <h2>{group.title}</h2>
      {group.props && group.props.map((prop) => (
        <p key={prop.name}>{`${prop.name}: ${prop.value}`}</p>
      ))}
      {group.parts && group.parts.map((part) => (
        <div key={part.id}>
          <h3>{part.name}</h3>
          <p>{part.prose}</p>
        </div>
      ))}
      {group.controls && group.controls.map((control) => (
        <Control key={control.id} control={control} OSCALProcessor={OSCALProcessor} />
      ))}
      {group.groups && group.groups.map((subGroup) => (
        <Group key={subGroup.id} group={subGroup} />
      ))}
    </div>
  );
};

export default Group;
