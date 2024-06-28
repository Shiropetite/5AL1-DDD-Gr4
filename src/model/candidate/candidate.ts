import { DiplomaType } from "../job-offer/diploma-type";

// Entity
export type Candidate = {
  readonly id: number;
  isStudent?: boolean;
  hasPortfolio?: boolean;
  highestDiploma: DiplomaType;
  yearsOfExperience: number;
};

export const compareCandidates = (c1: Candidate, c2: Candidate): boolean => {
  return c1.id === c2.id;
};