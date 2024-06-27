import { Candidate } from "../candidate/candidate";
import { DiplomaType } from "./diploma-type";

export enum ContractType {
  "CDI",
  "CDD",
  "STAGE",
  "ALTERNANCE",
  "INTERIM",
  "INDEPENDANT",
}

export const checkCDD = (candidate: Candidate): void => {
  if (candidate.highestDiploma < DiplomaType.BAC_3) {
    throw new Error("Diploma not high enough for CDD contract");
  }
};

export const checkCDI = (candidate: Candidate): void => {
  if (candidate.highestDiploma < DiplomaType.BAC_3) {
    throw new Error("Diploma not high enough for CDI contract");
  }

  if (candidate.yearsOfExperience < 2) {
    throw new Error("Experience not high enough for CDI contract");
  }
};