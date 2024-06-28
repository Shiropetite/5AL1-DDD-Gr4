import { ContractType } from "../../src/model/job-offer/contract-type";
import { JobOffer } from "../../src/model/job-offer/job-offer";
import { PositionType } from "../../src/model/job-offer/position-type";

const jobOffers: JobOffer[] = [
  {
    id: 1,
    position: PositionType.DEV,
    contract: ContractType.CDD
  },
  {
    id: 2,
    position: PositionType.DEV,
    contract: ContractType.STAGE
  },
  {
    id: 3,
    position: PositionType.DESIGNER,
    contract: 'UNSUPORTED' as unknown as ContractType
  },
  {
    id: 4,
    position: PositionType.DEV,
    contract: ContractType.ALTERNANCE
  },
  {
    id: 5,
    position: PositionType.DEV,
    contract: ContractType.CDI
  },
  {
    id: 6,
    position: PositionType.DEV,
    contract: ContractType.INDEPENDANT
  },
  {
    id: 7,
    position: PositionType.DEV,
    contract: ContractType.INTERIM
  },
  {
    id: 8,
    position: 'UNSUPORTED' as unknown as PositionType,
    contract: ContractType.INDEPENDANT
  },
  {
    id: 9,
    position: PositionType.DESIGNER,
    contract: ContractType.INDEPENDANT
  },
  {
    id: 10,
    position: PositionType.CADRE,
    contract: ContractType.INDEPENDANT
  },
];

export const mockFindJobOfferById = (jobOfferId: number): JobOffer => {
  const jobOffer = jobOffers.find(jobOffer => jobOffer.id === jobOfferId);

  if (!jobOffer) {
    throw new Error("Job offer not found");
  }

  return jobOffer;
};