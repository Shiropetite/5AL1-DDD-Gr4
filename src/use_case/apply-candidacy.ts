import { createCandidacy } from './../model/candidate/candidacy';
import { Candidacy } from '../model/candidate/candidacy';
import { Candidate } from '../model/candidate/candidate';
import { JobOffer, checkContract, checkPosition } from '../model/job-offer/job-offer';

export const apply = (jobOffer: JobOffer, candidate: Candidate): Candidacy | null => {
  checkContract(jobOffer, candidate);
  checkPosition(jobOffer, candidate);

  const candidacy = createCandidacy(candidate.id, jobOffer.id);
  
  return candidacy;
};