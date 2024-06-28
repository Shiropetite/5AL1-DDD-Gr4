import { Candidacy } from '../model/candidate/candidacy';
import { Candidate } from '../model/candidate/candidate';
import { JobOffer, checkContract, checkPosition } from '../model/job-offer/job-offer';

// Application service
export const apply = ({ 
  jobOfferId, 
  candidateId, 
  findJobOfferById, 
  findCandidateById, 
  createCandidacy 
}: { 
  jobOfferId: number, 
  candidateId: number, 
  findJobOfferById: (jobOfferId: number) => JobOffer,
  findCandidateById: (candidateId: number) => Candidate,
  createCandidacy: (candidateId: number, jobOfferId: number) => Candidacy,
}): Candidacy | null => {
  const jobOffer = findJobOfferById(jobOfferId);
  const candidate = findCandidateById(candidateId);

  checkContract(jobOffer, candidate);
  checkPosition(jobOffer, candidate);

  const candidacy = createCandidacy(candidate.id, jobOffer.id);
  
  return candidacy;
};