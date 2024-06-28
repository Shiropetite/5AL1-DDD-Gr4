import { Candidacy } from '../model/candidate/candidacy';
import { checkContract, checkPosition } from '../model/job-offer/job-offer';
import { createCandidacy } from './candidacy-repository';
import { findCandidateById } from './candidate-repository';
import { findJobOfferById } from './job-offer-repository';

// Application service
export const apply = ({ jobOfferId, candidateId }: { jobOfferId: number, candidateId: number }): Candidacy | null => {
  const jobOffer = findJobOfferById(jobOfferId);
  const candidate = findCandidateById(candidateId);

  checkContract(jobOffer, candidate);
  checkPosition(jobOffer, candidate);

  const candidacy = createCandidacy(candidate.id, jobOffer.id);
  
  return candidacy;
};