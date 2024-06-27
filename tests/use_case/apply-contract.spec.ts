import { JobOffer } from '../../src/model/job-offer/job-offer';
import { Candidate } from '../../src/model/candidate/candidate';
import { DiplomaType } from '../../src/model/job-offer/diploma-type';
import { apply } from '../../src/use_case/apply-candidacy';
import { ContractType } from '../../src/model/job-offer/contract-type';
import { PositionType } from '../../src/model/job-offer/position-type';

jest.mock('../../src/use_case/candidacy-repository', () => {
  return jest.requireActual('../__mocks__/candidacy-repository');
});

jest.mock('../../src/use_case/candidate-repository', () => {
  return jest.requireActual('../__mocks__/candidate-repository');
});

jest.mock('../../src/use_case/job-offer-repository', () => {
  return jest.requireActual('../__mocks__/job-offer-repository');
});

describe('Candidacy creation contract tests', () => {

  it('Should create candidacy for "CDI" contract when candidate has required diploma and experience', () => {
    const candidacy = apply({
      jobOfferId: 5,
      candidateId: 2
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "CDI" contract when candidate has higher diploma and experience than required', () => {
    const candidacy = apply({
      jobOfferId: 5,
      candidateId: 5
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "CDD" contract when candidate has required diploma', () => {
    const candidacy = apply({
      jobOfferId: 1,
      candidateId: 2
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "CDD" contract when candidate has higher diploma', () => {
    const candidacy = apply({
      jobOfferId: 1,
      candidateId: 1
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "Stage" contract when candidate is a student', () => {
    const candidacy = apply({
      jobOfferId: 2,
      candidateId: 1
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "Alternance" contract when candidate is a student', () => {
    const candidacy = apply({
      jobOfferId: 4,
      candidateId: 1
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "Interim" contract when candidate apply', () => {
    const candidacy = apply({
      jobOfferId: 7,
      candidateId: 4
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "Independant" contract when candidate apply', () => {
    const candidacy = apply({
      jobOfferId: 6,
      candidateId: 4
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should throw when candidate does not have required experience for "CDI" contract', () => {
    expect(() => apply({
      jobOfferId: 5,
      candidateId: 1
    })).toThrow("Experience not high enough for CDI contract");   
  });

  it('Should throw when candidate does not have required diploma for "CDI" contract', () => {
    expect(() => apply({
      jobOfferId: 5,
      candidateId: 3
    })).toThrow("Diploma not high enough for CDI contract");   
  });

  it('Should throw when candidate does not have required diploma for "CDD" contract', () => {
    expect(() => apply({
      jobOfferId: 1,
      candidateId: 3
    })).toThrow("Diploma not high enough for CDD contract");   
  });
  
  it('Should throw when candidate is not a student for "Stage" contract', () => {
    expect(() => apply({
      jobOfferId: 2,
      candidateId: 2
    })).toThrow("Student status required for stage contract");
  });

  it('Should throw when candidate is not a student for "Alternance" contract', () => {
    expect(() => apply({
      jobOfferId: 4,
      candidateId: 2
    })).toThrow("Student status required for alternance contract");
  });

  it('Should throw when job offer have incorrect contract', () => {
    expect(() => apply({
      jobOfferId: 3,
      candidateId: 1
    })).toThrow("Contract type not supported");
  });
});