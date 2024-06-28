import { Candidate } from "../candidate/candidate";
import { ContractType, checkAlternance, checkCDD, checkCDI, checkIndependant, checkInterim, checkStage, compareContracts } from "./contract-type";
import { PositionType, checkCadrePosition, checkDesignerPosition, checkDevPosition, comparePositions } from "./position-type";

// Aggregate root
// Entity
export type JobOffer = {
  readonly id: number;
  readonly position: PositionType;
  readonly contract: ContractType;
};

// Not used in this use case but needed for entity
/* istanbul ignore next */
export const compareJobOffers = (j1: JobOffer, j2: JobOffer): boolean => {
  return j1.id === j2.id;
}

export const checkContract = (jobOffer: JobOffer, candidate: Candidate): void => {
  if (compareContracts(jobOffer.contract, ContractType.CDD)) {
    checkCDD(candidate);
    return;
  } 
  else if (compareContracts(jobOffer.contract, ContractType.CDI)) {
    checkCDI(candidate);
    return;
  }
  else if (compareContracts(jobOffer.contract, ContractType.STAGE)) {
    checkStage(candidate);
    return;
  }
  else if (compareContracts(jobOffer.contract, ContractType.ALTERNANCE)) {
    checkAlternance(candidate);
    return;
  }
  else if (compareContracts(jobOffer.contract, ContractType.INTERIM)) {
    checkInterim(candidate);
    return;
  }
  else if (compareContracts(jobOffer.contract, ContractType.INDEPENDANT)) {
    checkIndependant(candidate);
    return;
  }

  throw new Error("Contract type not supported");
};

export const checkPosition = (jobOffer: JobOffer, candidate: Candidate): void => {
  if (comparePositions(jobOffer.position, PositionType.CADRE)) {
    checkCadrePosition(candidate);
    return;
  }
  else if (comparePositions(jobOffer.position, PositionType.DEV)) {
    checkDevPosition(candidate);
    return;
  }
  else if (comparePositions(jobOffer.position, PositionType.DESIGNER)) {
    checkDesignerPosition(candidate);
    return;
  }

  throw new Error("Position type not supported");
};
