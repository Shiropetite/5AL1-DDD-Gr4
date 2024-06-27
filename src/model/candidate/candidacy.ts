export type Candidacy = {
  id: number;
  candidateId: number;
  jobOfferId: number;
};

let idSequence = 1;

export const createCandidacy = (candidateId: number, jobOfferId: number): Candidacy => {
  return {
    id: idSequence++,
    candidateId: candidateId,
    jobOfferId: jobOfferId,
  };
}