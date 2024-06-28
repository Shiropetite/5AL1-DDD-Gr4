import { Candidate } from "../candidate/candidate";
import { DiplomaType } from "./diploma-type";

// Value object
export enum ContractType {
  "CDI",
  "CDD",
  "STAGE",
  "ALTERNANCE",
  "INTERIM",
  "INDEPENDANT",
}

export const compareContracts = (c1: ContractType, c2: ContractType): boolean => {
  return c1 === c2;
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

export const checkStage = (candidate: Candidate): void => {
  if (!candidate.isStudent) {
    throw new Error("Student status required for stage contract");
  }
}

export const checkAlternance = (candidate: Candidate): void => {
  if (!candidate.isStudent) {
    throw new Error("Student status required for alternance contract");
  }
}

export const checkInterim = (candidate: Candidate): void => {
  // no check for interim contract
}

export const checkIndependant = (candidate: Candidate): void => {
  // no check for independant contract
};