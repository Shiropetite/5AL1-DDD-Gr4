import { DiplomaType } from "../job-offer/diploma-type";

export type Candidate = {
  id: number;
  isStudent?: boolean;
  hasPortfolio?: boolean;
  highestDiploma: DiplomaType;
  yearsOfExperience: number;
};