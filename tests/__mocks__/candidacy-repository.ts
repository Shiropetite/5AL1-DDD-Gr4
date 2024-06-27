import { Candidacy } from "../../src/model/candidate/candidacy";

export const candidacies: Candidacy[] = [];

export const createCandidacy = jest.fn((candidateId: number, jobOfferId: number): Candidacy => {
  const candidacy = {
    id: candidacies.length++,
    candidateId: candidateId,
    jobOfferId: jobOfferId,
  };

  candidacies.push(candidacy);

  return candidacy;
});