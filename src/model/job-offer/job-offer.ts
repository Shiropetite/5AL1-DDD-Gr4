import { Candidate } from "../candidate/candidate";
import { ContractType, checkAlternance, checkCDD, checkCDI, checkIndependant, checkInterim, checkStage } from "./contract-type";
import { PositionType, checkCadrePosition, checkDesignerPosition, checkDevPosition } from "./position-type";

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
  else if (jobOffer.contract === ContractType.STAGE) {
    checkStage(candidate);
    return;
  }
  else if (jobOffer.contract === ContractType.ALTERNANCE) {
    checkAlternance(candidate);
    return;
  }
  else if (jobOffer.contract === ContractType.INTERIM) {
    checkInterim(candidate);
    return;
  }
  else if (jobOffer.contract === ContractType.INDEPENDANT) {
    checkIndependant(candidate);
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
    checkDevPosition(candidate);
    return;
  }
  else if (jobOffer.position === PositionType.DESIGNER) {
    checkDesignerPosition(candidate);
    return;
  }

  throw new Error("Position type not supported");
};
