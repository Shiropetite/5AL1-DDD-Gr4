import { JobOffer } from './../../src/model/job-offer/job-offer';
import { Candidate } from '../../src/model/candidate/candidate';
import { DiplomaType } from '../../src/model/job-offer/diploma-type';
import { apply } from '../../src/use_case/apply-candidacy';
import { ContractType } from '../../src/model/job-offer/contract-type';
import { PositionType } from '../../src/model/job-offer/position-type';

describe('Should apply', () => {
  it('Candidate can apply for "CDI" contract with minimum diploma required', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.BAC_3,
      yearsOfExperience: 3
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.CDI,
      position: PositionType.DEV
    }

    const candidacy = apply(jobOffer, candidate);
    
    expect(candidacy).not.toBeNull();
  });

  it('Candidate can apply for "CDI" contract with higher diploma than required', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.BAC_7,
      yearsOfExperience: 2
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.CDI,
      position: PositionType.DEV
    }

    const candidacy = apply(jobOffer, candidate);
    
    expect(candidacy).not.toBeNull();
  });

  it('Candidate can apply for "CDD" contract with minimum diploma required', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.BAC_3,
      yearsOfExperience: 0
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.CDD,
      position: PositionType.DEV
    }

    const candidacy = apply(jobOffer, candidate);
    
    expect(candidacy).not.toBeNull();
  });

  it('Candidate can apply for "CDD" contract with higher diploma than required', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.BAC_5,
      yearsOfExperience: 4
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.CDD,
      position: PositionType.DEV
    }

    const candidacy = apply(jobOffer, candidate);
    
    expect(candidacy).not.toBeNull();
  });

  it('Candidate can apply for "cadre" position with minimum experience required', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.BAC_5,
      yearsOfExperience: 8
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.INDEPENDANT,
      position: PositionType.CADRE
    }

    const candidacy = apply(jobOffer, candidate);
    
    expect(candidacy).not.toBeNull();
  });

  it('Candidate can apply for "cadre" position with higher experience than required', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.BAC_5,
      yearsOfExperience: 15
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.INDEPENDANT,
      position: PositionType.CADRE
    }

    const candidacy = apply(jobOffer, candidate);
    
    expect(candidacy).not.toBeNull();
  });
  
  it('Candidate does not have required diploma for "CDD" contract', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.NONE,
      yearsOfExperience: 0
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.CDD,
      position: PositionType.DEV
    }

    expect(() => apply(jobOffer, candidate)).toThrow("Diploma not high enough for CDD contract");   
  });

  it('Candidate does not have required experience for "CDI" contract', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.BAC_3,
      yearsOfExperience: 0
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.CDI,
      position: PositionType.DEV
    }

    expect(() => apply(jobOffer, candidate)).toThrow("Experience not high enough for CDI contract");   
  });

  it('Candidate does not have required diploma for "CDI" contract', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.NONE,
      yearsOfExperience: 2
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.CDI,
      position: PositionType.DEV
    }

    expect(() => apply(jobOffer, candidate)).toThrow("Diploma not high enough for CDI contract");   
  });

  it('Candidate does not have required experience for "cadre" position', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.BAC_5,
      yearsOfExperience: 0
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.INDEPENDANT,
      position: PositionType.CADRE
    }

    expect(() => apply(jobOffer, candidate)).toThrow("Experience not high enough for cadre position");
  });

  it('Candidate does not have required diploma for "cadre" position', () => {
    const candidate: Candidate = {
      id: 1,
      highestDiploma: DiplomaType.NONE,
      yearsOfExperience: 8
    };

    const jobOffer: JobOffer = {
      id: 1,
      contract: ContractType.INDEPENDANT,
      position: PositionType.CADRE
    }
    
    expect(() => apply(jobOffer, candidate)).toThrow("Diploma not high enough for cadre position");
  });
});
