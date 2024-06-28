import { Candidate } from "../candidate/candidate";
import { DiplomaType } from "./diploma-type";

// Value object
export enum PositionType {
  "CADRE",
  "DEV",
  "DESIGNER",
}

export const comparePositions = (p1: PositionType, p2: PositionType): boolean => {
  return p1 === p2;
}

export const checkCadrePosition = (candidate: Candidate): void => {
  if (candidate.highestDiploma < DiplomaType.BAC_5) {
    throw new Error("Diploma not high enough for cadre position");
  }

  if (candidate.yearsOfExperience < 8) {
    throw new Error("Experience not high enough for cadre position");
  }
};

export const checkDevPosition = (candidate: Candidate): void => {
  // no check for dev position
}

export const checkDesignerPosition = (candidate: Candidate): void => {
  if (!candidate.hasPortfolio) {
    throw new Error("Portfolio required for designer position");
  }
};