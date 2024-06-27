import { Candidate } from "../candidate/candidate";
import { DiplomaType } from "./diploma-type";

export enum PositionType {
  "CADRE",
  "MANAGER",
  "DEV",
}

export const checkCadrePosition = (candidate: Candidate): void => {
  if (candidate.highestDiploma < DiplomaType.BAC_5) {
    throw new Error("Diploma not high enough for cadre position");
  }

  if (candidate.yearsOfExperience < 8) {
    throw new Error("Experience not high enough for cadre position");
  }
};