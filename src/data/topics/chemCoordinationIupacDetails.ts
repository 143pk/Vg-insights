import { chemCoordinationFundamentalsDetails } from './chemCoordinationFundamentalsDetails';

// Backwards compatibility alias for chem-coordination-iupac pointing to the comprehensive fundamentals content
export const chemCoordinationIupacDetails = {
  ...chemCoordinationFundamentalsDetails,
  topicId: "chem-coordination-iupac"
};
