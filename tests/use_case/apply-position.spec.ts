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

describe('Candidacy creation position tests', () => {
  it('Should create candidacy for "cadre position" when candidate has required experience and diploma', () => {
    const candidacy = apply({
      jobOfferId: 10,
      candidateId: 7
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "cadre position" when candidate has higher experience and diploma than required', () => {
    const candidacy = apply({
      jobOfferId: 10,
      candidateId: 5
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "designer position" when candidate has required portfolio', () => {
    const candidacy = apply({
      jobOfferId: 9,
      candidateId: 2
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "dev" when candidate apply', () => {
    const candidacy = apply({
      jobOfferId: 6,
      candidateId: 4
    });
    
    expect(candidacy).not.toBeNull();
  });
 
  it('Should throw when candidate does not have required experience for "cadre position"', () => {
    expect(() => apply({
      jobOfferId: 10,
      candidateId: 6
    })).toThrow("Experience not high enough for cadre position");
  });

  it('Should throw when candidate does not have required diploma for "cadre position"', () => {    
    expect(() => apply({
      jobOfferId: 10,
      candidateId: 4
    })).toThrow("Diploma not high enough for cadre position");
  });

  it('Should throw when candidate does not have a portfolio for "designer position"', () => {
    expect(() => apply({
      jobOfferId: 9,
      candidateId: 3
    })).toThrow("Portfolio required for designer position");
  });
  
  it('Should throw when job offer have incorrect position', () => {
    expect(() => apply({
      jobOfferId: 8,
      candidateId: 1
    })).toThrow("Position type not supported");
  });
});
