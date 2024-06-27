import { Candidate } from "../candidate/candidate";
import { ContractType, checkCDD, checkCDI } from "./contract-type";
import { PositionType, checkCadrePosition } from "./position-type";

export type JobOffer = {
  id: number;
  position: PositionType;
  contract: ContractType;
};

export const checkContract = (jobOffer: JobOffer, candidate: Candidate): void => {
  if (jobOffer.contract === ContractType.CDD) {
    checkCDD(candidate);
    return;
  } 
  else if (jobOffer.contract === ContractType.CDI) {
    checkCDI(candidate);
    return;
  }
  else if (jobOffer.contract === ContractType.INDEPENDANT) {
    return;
  }

  throw new Error("Contract type not supported");
};

export const checkPosition = (jobOffer: JobOffer, candidate: Candidate): void => {
  if (jobOffer.position === PositionType.CADRE) {
    checkCadrePosition(candidate);
    return;
  }
  else if (jobOffer.position === PositionType.DEV) {
    return;
  }

  throw new Error("Position type not supported");
};

