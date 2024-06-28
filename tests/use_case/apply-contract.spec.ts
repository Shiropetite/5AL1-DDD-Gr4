import { apply } from '../../src/use_case/apply-candidacy';
import { mockCreateCandidacy } from '../__mocks__/candidacy-repository';
import { mockFindCandidateById } from '../__mocks__/candidate-repository';
import { mockFindJobOfferById } from '../__mocks__/job-offer-repository';

describe('Candidacy creation contract tests', () => {

  it('Should create candidacy for "CDI" contract when candidate has required diploma and experience', () => {
    const candidacy = apply({
      jobOfferId: 5,
      candidateId: 2,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "CDI" contract when candidate has higher diploma and experience than required', () => {
    const candidacy = apply({
      jobOfferId: 5,
      candidateId: 5,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "CDD" contract when candidate has required diploma', () => {
    const candidacy = apply({
      jobOfferId: 1,
      candidateId: 2,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "CDD" contract when candidate has higher diploma', () => {
    const candidacy = apply({
      jobOfferId: 1,
      candidateId: 1,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "Stage" contract when candidate is a student', () => {
    const candidacy = apply({
      jobOfferId: 2,
      candidateId: 1,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "Alternance" contract when candidate is a student', () => {
    const candidacy = apply({
      jobOfferId: 4,
      candidateId: 1,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "Interim" contract when candidate apply', () => {
    const candidacy = apply({
      jobOfferId: 7,
      candidateId: 4,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should create candidacy for "Independant" contract when candidate apply', () => {
    const candidacy = apply({
      jobOfferId: 6,
      candidateId: 4,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    });
    
    expect(candidacy).not.toBeNull();
  });

  it('Should throw when candidate does not have required experience for "CDI" contract', () => {
    expect(() => apply({
      jobOfferId: 5,
      candidateId: 1,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    })).toThrow("Experience not high enough for CDI contract");   
  });

  it('Should throw when candidate does not have required diploma for "CDI" contract', () => {
    expect(() => apply({
      jobOfferId: 5,
      candidateId: 3,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    })).toThrow("Diploma not high enough for CDI contract");   
  });

  it('Should throw when candidate does not have required diploma for "CDD" contract', () => {
    expect(() => apply({
      jobOfferId: 1,
      candidateId: 3,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    })).toThrow("Diploma not high enough for CDD contract");   
  });
  
  it('Should throw when candidate is not a student for "Stage" contract', () => {
    expect(() => apply({
      jobOfferId: 2,
      candidateId: 2,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    })).toThrow("Student status required for stage contract");
  });

  it('Should throw when candidate is not a student for "Alternance" contract', () => {
    expect(() => apply({
      jobOfferId: 4,
      candidateId: 2,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    })).toThrow("Student status required for alternance contract");
  });

  it('Should throw when job offer have incorrect contract', () => {
    expect(() => apply({
      jobOfferId: 3,
      candidateId: 1,
      findJobOfferById: mockFindJobOfferById,
      findCandidateById: mockFindCandidateById,
      createCandidacy: mockCreateCandidacy
    })).toThrow("Contract type not supported");
  });
});
