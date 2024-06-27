import { DiplomaType } from "../job-offer/diploma-type";

export type Candidate = {
  id: number;
  highestDiploma: DiplomaType;
  yearsOfExperience: number;
};