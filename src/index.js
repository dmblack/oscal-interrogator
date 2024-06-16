import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assume you have an App.js component

/** 
 * OSCAL Processor, and required libraries.
 */
import OSCALProcessor from 'oscal-processor';
import ajv from 'ajv';
import ajvFormats from 'ajv-formats';
import struct from 'struct.js';

const CatalogDemo = require('./NIST_SP-800-53_rev5_catalog.json');

const OSCALDependencies = {
  ajv: ajv,
  ajvFormats: ajvFormats,
  struct: struct
}

// Will expose a processed catalog (and subsequent interface to) our OSCAL content.
const OSCALInterface = OSCALProcessor(OSCALDependencies).process(CatalogDemo);

ReactDOM.render(
  <App OSCALProcessor={OSCALInterface} Catalog={CatalogDemo} OSCAL={OSCALInterface} />,
    document.getElementById('root')
);
