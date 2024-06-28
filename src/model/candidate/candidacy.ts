// Entity
export type Candidacy = {
  readonly id: number;
  readonly candidateId: number;
  readonly jobOfferId: number;
};

export const compareCandidacies = (c1: Candidacy, c2: Candidacy): boolean => {
  return c1.id === c2.id;
};
