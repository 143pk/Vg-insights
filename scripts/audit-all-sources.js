import fs from 'fs';
import path from 'path';

// Audit all topics referenced in physicsData, chemistryData, biologyData, neetData
import { physicsChapters } from './src/data/physicsData.js';
import { chemistryChapters } from './src/data/chemistryData.js';
import { biologyChapters } from './src/data/biologyData.js';
import { TOPIC_DETAILS } from './src/data/topicDetails.js';

console.log('Import test passed');
