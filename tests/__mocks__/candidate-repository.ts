import { Candidate } from "../../src/model/candidate/candidate";
import { DiplomaType } from "../../src/model/job-offer/diploma-type";

const candidates: Candidate[] = [
  {
    id: 1,
    isStudent: true,
    hasPortfolio: true,
    highestDiploma: DiplomaType.BAC_5,
    yearsOfExperience: 0
  },
  {
    id: 2,
    isStudent: false,
    hasPortfolio: true,
    highestDiploma: DiplomaType.BAC_3,
    yearsOfExperience: 2
  },
  {
    id: 3,
    isStudent: false,
    hasPortfolio: false,
    highestDiploma: DiplomaType.BAC_2,
    yearsOfExperience: 1
  },
  {
    id: 4,
    isStudent: false,
    hasPortfolio: false,
    highestDiploma: DiplomaType.NONE,
    yearsOfExperience: 0
  },
  {
    id: 5,
    isStudent: false,
    hasPortfolio: false,
    highestDiploma: DiplomaType.BAC_7,
    yearsOfExperience: 14
  },
  {
    id: 6,
    isStudent: false,
    hasPortfolio: false,
    highestDiploma: DiplomaType.BAC_7,
    yearsOfExperience: 0
  },
  {
    id: 7,
    isStudent: false,
    hasPortfolio: false,
    highestDiploma: DiplomaType.BAC_5,
    yearsOfExperience: 8
  },
];

export const findCandidateById = jest.fn((id: number): Candidate => {
  const candidate = candidates.find(candidate => candidate.id === id);
  if (!candidate) {
    throw new Error("Candidate not found");
  }

  return candidate;
});