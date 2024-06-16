import React from 'react';
import Metadata from './Metadata';
import Group from './Group';

function App(props) {
  return (
    <div>
      <h1>Welcome to the OSCAL Catalogue Frontend</h1>

      {console.log(props.OSCAL)}

      {props.OSCAL.catalog.metadata && <Metadata metadata={props.OSCAL.catalog.metadata} />}
      {props.OSCAL.catalog.groups && props.OSCAL.catalog.groups.map((group) => (
        <Group key={group.id} group={group} OSCALProcessor={props.OSCALProcessor} />
      ))}
      {/* Further components to display other parts of the OSCAL data */}


    </div>
  );
}

export default App;
