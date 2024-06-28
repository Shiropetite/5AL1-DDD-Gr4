import { apply } from '../../src/use_case/apply-candidacy';
import { mockCreateCandidacy } from '../__mocks__/candidacy-repository';
import { mockFindCandidateById } from '../__mocks__/candidate-repository';
import { mockFindJobOfferById } from '../__mocks__/job-offer-repository';

describe('Candidacy creation position tests', () => {
  it('Should create candidacy for "cadre position" when candidate has required experience and diploma', () => {
    const candidacy = apply({
      jobOfferId: 10,
      candidateId: 7,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "cadre position" when candidate has higher experience and diploma than required', () => {
    const candidacy = apply({
      jobOfferId: 10,
      candidateId: 5,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "designer position" when candidate has required portfolio', () => {
    const candidacy = apply({
      jobOfferId: 9,
      candidateId: 2,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "dev" when candidate apply', () => {
    const candidacy = apply({
      jobOfferId: 6,
      candidateId: 4,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });
 
  it('Should throw when candidate does not have required experience for "cadre position"', () => {
    expect(() => apply({
      jobOfferId: 10,
      candidateId: 6,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    })).toThrow("Experience not high enough for cadre position");
  });

  it('Should throw when candidate does not have required diploma for "cadre position"', () => {    
    expect(() => apply({
      jobOfferId: 10,
      candidateId: 4,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    })).toThrow("Diploma not high enough for cadre position");
  });

  it('Should throw when candidate does not have a portfolio for "designer position"', () => {
    expect(() => apply({
      jobOfferId: 9,
      candidateId: 3,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    })).toThrow("Portfolio required for designer position");
  });
  
  it('Should throw when job offer have incorrect position', () => {
    expect(() => apply({
      jobOfferId: 8,
      candidateId: 1,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    })).toThrow("Position type not supported");
  });
});
