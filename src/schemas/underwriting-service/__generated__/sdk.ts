import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date custom scalar type */
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AdditionalInfo = {
  __typename?: 'AdditionalInfo';
  /** Debt amount exception */
  debtAmountException?: Maybe<Scalars['String']['output']>;
  /** EOM first draft date exception */
  eomFirstDraftDateException?: Maybe<Scalars['Boolean']['output']>;
  /** Include unacceptable creditor */
  includeUnacceptableCreditor?: Maybe<Scalars['Boolean']['output']>;
  /** Standalone debts exception */
  standaloneDebtsException?: Maybe<Scalars['Boolean']['output']>;
  /** Term extension exception value */
  termExtensionException?: Maybe<Scalars['Float']['output']>;
};

/** Additional underwriting configuration options and exceptions */
export type AdditionalInfoInput = {
  /** Debt amount exception */
  debtAmountException?: InputMaybe<Scalars['String']['input']>;
  /** EOM first draft date exception */
  eomFirstDraftDateException?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include unacceptable creditor */
  includeUnacceptableCreditor?: InputMaybe<Scalars['Boolean']['input']>;
  /** Standalone debts exception */
  standaloneDebtsException?: InputMaybe<Scalars['Boolean']['input']>;
  /** Term extension exception value */
  termExtensionException?: InputMaybe<Scalars['Float']['input']>;
};

export type ApplicantContactInfo = {
  __typename?: 'ApplicantContactInfo';
  /** Applicant state. */
  applicantState: Scalars['String']['output'];
  /** Applicant bank account holder name. */
  bankAccountHolderName?: Maybe<Scalars['String']['output']>;
  /** Applicant bank account number. */
  bankAccountNumber?: Maybe<Scalars['String']['output']>;
  /** Applicant bank account type. */
  bankAccountType?: Maybe<Scalars['String']['output']>;
  /** Applicant bank name. */
  bankName?: Maybe<Scalars['String']['output']>;
  /** The Forth Pay company ID that the applicant belongs to. */
  belongsToCompanyId?: Maybe<Scalars['String']['output']>;
  /** Applicant cell phone number. */
  cellPhone?: Maybe<Scalars['String']['output']>;
  /** Applicant date of birth. */
  dob?: Maybe<Scalars['String']['output']>;
  /** Applicant eligibility requirement for bankruptcy. */
  eligibilityReqBankruptcy?: Maybe<Scalars['String']['output']>;
  /** Applicant eligibility requirement for credit counselling. */
  eligibilityReqCreditCounselling?: Maybe<Scalars['String']['output']>;
  /** Applicant eligibility requirement for federal government debt. */
  eligibilityReqFederalGovDebt?: Maybe<Scalars['String']['output']>;
  /** Applicant eligibility requirement for military. */
  eligibilityReqMilitary?: Maybe<Scalars['String']['output']>;
  /** Applicant eligibility requirement for secured debt. */
  eligibilityReqSecuredDebt?: Maybe<Scalars['String']['output']>;
  /** Applicant email. */
  email?: Maybe<Scalars['String']['output']>;
  /** Applicant employer name */
  employerName?: Maybe<Scalars['String']['output']>;
  /** Has the applicant filed bankruptcy. */
  filedBankruptcy?: Maybe<Scalars['String']['output']>;
  /** Applicant first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Applicant hardship reason. */
  hardship?: Maybe<Scalars['String']['output']>;
  /** Applicant home address. */
  homeAddress?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if the applicant is married to the co-applicant */
  isMarriedToCoApplicant?: Maybe<Scalars['Boolean']['output']>;
  /** Applicant job title. */
  jobTitle?: Maybe<Scalars['String']['output']>;
  /** Applicant last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Applicant phone number. */
  phone?: Maybe<Scalars['String']['output']>;
  /** Applicant routing number. */
  routingNumber?: Maybe<Scalars['String']['output']>;
  /** Applicant SSN. */
  ssn?: Maybe<Scalars['String']['output']>;
};

/** Applicant contact and personal information for eligibility check */
export type ApplicantContactInfoInput = {
  /**
   * Applicant state. Must be a valid U.S. state.
   *
   * Sample Values:
   *
   * - AL
   *
   * - AK
   *
   * - AZ
   *
   * - AR
   *
   * - CA
   *
   * - CO
   */
  applicantState: Scalars['String']['input'];
  /** Applicant bank account holder name */
  bankAccountHolderName?: InputMaybe<Scalars['String']['input']>;
  /** Applicant bank account number. */
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  /** Applicant bank account type */
  bankAccountType?: InputMaybe<Scalars['String']['input']>;
  /** Applicant bank name. */
  bankName?: InputMaybe<Scalars['String']['input']>;
  /** The Forth Pay company ID that the applicant belongs to. */
  belongsToCompanyId?: InputMaybe<Scalars['String']['input']>;
  /** Applicant cell phone number must be U.S. phone number in E.164 format. */
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  /** Applicant date of birth must be in the format YYYY-MM-DD. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /**
   * An answer must be provided for Question:
   *
   * Are you currently involved in a Bankruptcy proceeding?
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  eligibilityReqBankruptcy?: InputMaybe<Scalars['String']['input']>;
  /**
   * An answer must be provided for Question:
   *
   * Are you currently enrolled in a credit counseling program?
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  eligibilityReqCreditCounselling?: InputMaybe<Scalars['String']['input']>;
  /**
   * An answer must be provided for Question:
   *
   * Are any of the accounts being submitted for enrollment backed by the U.S. Federal government?
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  eligibilityReqFederalGovDebt?: InputMaybe<Scalars['String']['input']>;
  /**
   * An answer must be provided for Question:
   *
   * Are you in the military, work in law enforcement, work for a Financial institution or have security clearance?
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  eligibilityReqMilitary?: InputMaybe<Scalars['String']['input']>;
  /**
   * An answer must be provided for Question:
   *
   * Are any of the accounts being submitted for enrollment secured by any type of collateral?
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  eligibilityReqSecuredDebt?: InputMaybe<Scalars['String']['input']>;
  /** Applicant email must be a valid email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Employer name */
  employerName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Has the applicant filed bankruptcy.
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  filedBankruptcy?: InputMaybe<Scalars['String']['input']>;
  /** Applicant first name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Applicant hardship reason.
   *
   * Sample Values:
   *
   * - Significant decrease in income.
   *
   * - Loss of employment.
   *
   * - Significant medical expenses.
   */
  hardship?: InputMaybe<Scalars['String']['input']>;
  /** Applicant home address */
  homeAddress?: InputMaybe<Scalars['String']['input']>;
  /**
   * Identify if the applicant is married to the co-applicant.
   *
   * Values:
   *
   * - true
   *
   * - false
   */
  isMarriedToCoApplicant?: InputMaybe<Scalars['Boolean']['input']>;
  /** Applicant job title. */
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  /** Applicant last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Applicant phone number must be U.S. phone number in E.164 format. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Applicant routing number. */
  routingNumber?: InputMaybe<Scalars['String']['input']>;
  /** Applicant SSN must be 9 digits long. Ex:000000000. */
  ssn?: InputMaybe<Scalars['String']['input']>;
};

/** Applicant contact and personal information for eligibility update */
export type ApplicantContactInfoUpdateInput = {
  /**
   * Applicant state. Must be a valid U.S. state.
   *
   * Sample Values:
   *
   * - AL
   *
   * - AK
   *
   * - AZ
   *
   * - AR
   *
   * - CA
   *
   * - CO
   */
  applicantState: Scalars['String']['input'];
  /** Applicant bank account holder name */
  bankAccountHolderName?: InputMaybe<Scalars['String']['input']>;
  /** Applicant bank account number. */
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  /** Applicant bank account type */
  bankAccountType?: InputMaybe<Scalars['String']['input']>;
  /** Applicant bank name. */
  bankName?: InputMaybe<Scalars['String']['input']>;
  /** The Forth Pay company ID that the applicant belongs to. */
  belongsToCompanyId?: InputMaybe<Scalars['String']['input']>;
  /** Applicant cell phone number must be U.S. phone number in E.164 format. */
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  /** Applicant date of birth must be in the format YYYY-MM-DD. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /**
   * An answer must be provided for Question:
   *
   * Are you currently involved in a Bankruptcy proceeding?
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  eligibilityReqBankruptcy?: InputMaybe<Scalars['String']['input']>;
  /**
   * An answer must be provided for Question:
   *
   * Are you currently enrolled in a credit counseling program?
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  eligibilityReqCreditCounselling?: InputMaybe<Scalars['String']['input']>;
  /**
   * An answer must be provided for Question:
   *
   * Are any of the accounts being submitted for enrollment backed by the U.S. Federal government?
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  eligibilityReqFederalGovDebt?: InputMaybe<Scalars['String']['input']>;
  /**
   * An answer must be provided for Question:
   *
   * Are you in the military, work in law enforcement, work for a Financial institution or have security clearance?
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  eligibilityReqMilitary?: InputMaybe<Scalars['String']['input']>;
  /**
   * An answer must be provided for Question:
   *
   * Are any of the accounts being submitted for enrollment secured by any type of collateral?
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  eligibilityReqSecuredDebt?: InputMaybe<Scalars['String']['input']>;
  /** Applicant email must be a valid email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Employer name */
  employerName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Has the applicant filed bankruptcy.
   *
   * Values:
   *
   * - YES
   *
   * - NO
   */
  filedBankruptcy?: InputMaybe<Scalars['String']['input']>;
  /** Applicant first name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Applicant hardship reason.
   *
   * Sample Values:
   *
   * - Significant decrease in income.
   *
   * - Loss of employment.
   *
   * - Significant medical expenses.
   */
  hardship?: InputMaybe<Scalars['String']['input']>;
  /** Applicant home address */
  homeAddress?: InputMaybe<Scalars['String']['input']>;
  /**
   * Identify if the applicant is married to the co-applicant.
   *
   * Values:
   *
   * - true
   *
   * - false
   */
  isMarriedToCoApplicant?: InputMaybe<Scalars['Boolean']['input']>;
  /** Applicant job title. */
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  /** Applicant last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Applicant phone number must be U.S. phone number in E.164 format. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Applicant routing number. */
  routingNumber?: InputMaybe<Scalars['String']['input']>;
  /** Applicant SSN must be 9 digits long. */
  ssn?: InputMaybe<Scalars['String']['input']>;
};

export type ApplicantInfo = {
  __typename?: 'ApplicantInfo';
  /** Additional info */
  additionalInfo?: Maybe<AdditionalInfo>;
  /** Agent userId set by the integrating CRM to identify the agent in its system. */
  agentAssigned?: Maybe<Scalars['String']['output']>;
  /** Applicant's contact information */
  applicantContactInfo?: Maybe<ApplicantContactInfo>;
  /** Budget. */
  budget?: Maybe<Budget>;
  /** Co-applicant's contact information */
  coApplicantContactInfo?: Maybe<ApplicantContactInfo>;
  /** Enrollment plan. */
  plan?: Maybe<Plan>;
  /** Public records from the credit report. */
  publicRecords?: Maybe<Array<Maybe<PublicRecord>>>;
};

/** V2: Applicant information including itemized budget breakdown. */
export type ApplicantInfoV2 = {
  __typename?: 'ApplicantInfoV2';
  /** Additional info */
  additionalInfo?: Maybe<AdditionalInfo>;
  /** Agent userId set by the integrating CRM to identify the agent in its system. */
  agentAssigned?: Maybe<Scalars['String']['output']>;
  /** Applicant's contact information */
  applicantContactInfo?: Maybe<ApplicantContactInfo>;
  /** Itemized budget breakdown. */
  budget?: Maybe<BudgetV2>;
  /** Co-applicant's contact information */
  coApplicantContactInfo?: Maybe<ApplicantContactInfo>;
  /** Enrollment plan. */
  plan?: Maybe<Plan>;
  /** Public records from the credit report. */
  publicRecords?: Maybe<Array<Maybe<PublicRecord>>>;
};

export type ApplicantRootFilters = {
  __typename?: 'ApplicantRootFilters';
  /** True/False flag to identify if this underwriting check passed */
  addressCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  applicantEmployerCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  bankAccountHolderNameCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  bankAccountNumberCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  bankAccountTypeCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  bankNameCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  bankruptcyCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  budgetAffordabilityCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if the co-applicant has ssn when state is CA and application type is JOINT */
  caStateFileCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  coApplicantCellPhoneCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  coApplicantDobCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  coApplicantEmployerCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  coApplicantFirstNameCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  coApplicantJobTitleCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  coApplicantLastNameCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  coApplicantPhoneCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  coApplicantSsnCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  companyIsAuthorizedCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  debtsBackedByUsFedGovCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  dobCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  duplicateCoApplicantSsnCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  duplicateSsnCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  eligibilityReqBankruptcyCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  eligibilityReqCreditCounsellingCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  eligibilityReqFederalGovDebtCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  eligibilityReqMilitaryCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  eligibilityReqSecuredDebtCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  emailCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  enrollmentPlanCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  feeValidationCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  firstDraftDateCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  firstNameCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  frequencyMinimumPaymentCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  hardshipCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  jobTitleCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  lastNameCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  phoneCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  routingNumberCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  secondDraftDateCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  ssnCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  stateServiceCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  termExtensionExceptionCheck?: Maybe<Scalars['Boolean']['output']>;
};

/** Reference information for an applicant's underwriting result */
export type ApplicantUwResultInfo = {
  __typename?: 'ApplicantUwResultInfo';
  /** Underwriting result ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Current revision number of the underwriting result */
  revision?: Maybe<Scalars['Int']['output']>;
};

export type ApplicationRootFilters = {
  __typename?: 'ApplicationRootFilters';
  /** True/False flag to identify if this underwriting check passed */
  agentAssignedCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  budgetHardshipCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  creditReport30DaysCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  programTermCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  psStateServiceCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  tenPercentRuleCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  totalDebtValueCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  uniqueEmailPhoneCheck?: Maybe<Scalars['Boolean']['output']>;
};

/** Application type identifier */
export enum ApplicationType {
  /** Joint application with both applicants */
  Joint = 'JOINT',
  /** Primary applicant in a joint application */
  JointApplicant = 'JOINT_APPLICANT',
  /** Co-applicant in a joint application */
  JointCoApplicant = 'JOINT_CO_APPLICANT',
  /** Single applicant application */
  Single = 'SINGLE'
}

/** Application type for underwriting */
export enum ApplicationTypeInput {
  /** Joint application with primary applicant and co-applicant */
  Joint = 'JOINT',
  /** Single applicant application */
  Single = 'SINGLE'
}

export type ApplicationUwResult = {
  __typename?: 'ApplicationUwResult';
  /** True/False flag to identify if this application passed all underwriting criteria */
  applicantPrequalified: Scalars['Boolean']['output'];
  /** Type of application can be SINGLE or JOINT */
  applicationType?: Maybe<Scalars['String']['output']>;
  /**
   * Deprecating.
   *
   * Application level filters
   * @deprecated Removed in V2. Use ApplicationUwResultV2 instead.
   */
  rootFilters: ApplicationRootFilters;
  /** Total selected debts balance */
  totalDebt?: Maybe<Scalars['Float']['output']>;
  /** Total eligible and selected debts balance */
  totalEligibleDebt?: Maybe<Scalars['Float']['output']>;
  /** Additional metadata about UW application */
  tradelineMetadata?: Maybe<TradelineMetadata>;
};

/** V2: Application-level underwriting result. */
export type ApplicationUwResultV2 = {
  __typename?: 'ApplicationUwResultV2';
  /** True/False flag to identify if this application passed all underwriting criteria */
  applicantPrequalified: Scalars['Boolean']['output'];
  /** Type of application can be SINGLE or JOINT */
  applicationType?: Maybe<Scalars['String']['output']>;
  /** Total selected debts balance */
  totalDebt?: Maybe<Scalars['Float']['output']>;
  /** Total eligible and selected debts balance */
  totalEligibleDebt?: Maybe<Scalars['Float']['output']>;
  /** Additional metadata about UW application */
  tradelineMetadata?: Maybe<TradelineMetadata>;
};

export type Budget = {
  __typename?: 'Budget';
  /**
   * Deprecating: Use BudgetV2 with itemized expense breakdown instead.
   *
   * Total monthly expenses.
   * @deprecated Use BudgetV2 with itemized expense breakdown instead.
   */
  totalMonthlyExpense?: Maybe<Scalars['Float']['output']>;
  /**
   * Deprecating: Use BudgetV2 with itemized income breakdown instead.
   *
   * Total monthly income.
   * @deprecated Use BudgetV2 with itemized income breakdown instead.
   */
  totalMonthlyIncome?: Maybe<Scalars['Float']['output']>;
};

/** Applicant budget information for affordability calculations */
export type BudgetInput = {
  /**
   * Deprecating: Use BudgetInputV2 with itemized expense breakdown instead.
   *
   * Total monthly expenses.
   * @deprecated Use BudgetInputV2 with itemized expense breakdown instead.
   */
  totalMonthlyExpense?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Deprecating: Use BudgetInputV2 with itemized income breakdown instead.
   *
   * Total monthly income.
   * @deprecated Use BudgetInputV2 with itemized income breakdown instead.
   */
  totalMonthlyIncome?: InputMaybe<Scalars['Float']['input']>;
};

/** V2: Applicant budget with itemized income and expense breakdown. */
export type BudgetInputV2 = {
  /** Itemized expense breakdown */
  expenses?: InputMaybe<ExpensesInput>;
  /** Itemized income breakdown */
  income?: InputMaybe<IncomeInput>;
};

/** V2: Budget with itemized income and expense breakdown. */
export type BudgetV2 = {
  __typename?: 'BudgetV2';
  /** Itemized expense breakdown */
  expenses?: Maybe<ExpensesBreakdown>;
  /** Itemized income breakdown */
  income?: Maybe<IncomeBreakdown>;
};

/** Applicant information input for debts eligibility check */
export type CheckDebtsApplicantInfoInput = {
  /** Applicant state (required, must be a valid U.S. state code) */
  applicantState: Scalars['String']['input'];
  /** Applicant employer name */
  employerName?: InputMaybe<Scalars['String']['input']>;
  /** Applicant home address */
  homeAddress?: InputMaybe<Scalars['String']['input']>;
  /** Whether the applicant is married to the co-applicant */
  isMarriedToCoApplicant?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Response from debts eligibility check */
export type DebtsEligibilityResponse = {
  __typename?: 'DebtsEligibilityResponse';
  /** Debts underwriting result data */
  data?: Maybe<UwDebtsResult>;
  /** List of eligibility errors */
  errors?: Maybe<Array<Maybe<EligibilityResponseError>>>;
};

/** Response from eligibility check or update operations */
export type EligibilityResponse = {
  __typename?: 'EligibilityResponse';
  /** The underwriting eligibility result data */
  data?: Maybe<UwEligibilityResult>;
  /** List of errors or warnings from underwriting checks */
  errors?: Maybe<Array<Maybe<EligibilityResponseError>>>;
};

/**
 * Includes a list of reasons why the underwriting did not pass
 *
 * Possible reason are Ineligible, Condition, and Update Needed.
 *
 * If an error does not include a debtId then it is an application level error.
 */
export type EligibilityResponseError = {
  __typename?: 'EligibilityResponseError';
  /** The debtId of the debt that caused the error. */
  debtId?: Maybe<Scalars['String']['output']>;
  /**
   * Deprecating: Removed in V2. Use EligibilityResponseErrorV2 instead.
   *
   * The name of the underwriting check that caused the error.
   * @deprecated Removed in V2. Use EligibilityResponseErrorV2 instead.
   */
  filterName?: Maybe<Scalars['String']['output']>;
  /** The list of reasons why the underwriting check did not pass. */
  message?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/**
 * V2: Includes a list of reasons why the underwriting did not pass
 *
 * Possible reason are Ineligible, Condition, and Update Needed.
 *
 * If an error does not include a debtId then it is an application level error.
 */
export type EligibilityResponseErrorV2 = {
  __typename?: 'EligibilityResponseErrorV2';
  /** The debtId of the debt that caused the error. Absent for application-level errors. */
  debtId?: Maybe<Scalars['String']['output']>;
  /** Human-readable descriptions of what caused the error. */
  message?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** V2: Response from eligibility check or update operations. */
export type EligibilityResponseV2 = {
  __typename?: 'EligibilityResponseV2';
  /** The underwriting eligibility result data */
  data?: Maybe<UwEligibilityResultV2>;
  /** List of errors grouped by debtId. Application-level errors have no debtId. */
  errors?: Maybe<Array<Maybe<EligibilityResponseErrorV2>>>;
};

/** Eligibility status for a debt */
export enum EligibilityStatus {
  /** Debt requires additional conditions to be met before enrollment */
  Conditional = 'CONDITIONAL',
  /** Debt meets all underwriting criteria and can be enrolled */
  Eligible = 'ELIGIBLE',
  /** Debt does not meet underwriting criteria and cannot be enrolled */
  Ineligible = 'INELIGIBLE',
  /** Unable to process the debt eligibility check */
  UnableToProcess = 'UNABLE_TO_PROCESS',
  /** Debt requires additional information to determine eligibility */
  UpdateNeeded = 'UPDATE_NEEDED'
}

/** Enrollment eligibility result */
export type EnrollmentEligibility = {
  __typename?: 'EnrollmentEligibility';
  /** Eligibility status (e.g., ELIGIBLE, INELIGIBLE) */
  eligibility?: Maybe<Scalars['String']['output']>;
  /** Reason for the eligibility status */
  reason?: Maybe<Scalars['String']['output']>;
};

/** Response from enrollment eligibility check */
export type EnrollmentEligibilityResponse = {
  __typename?: 'EnrollmentEligibilityResponse';
  /** Enrollment eligibility result data */
  data?: Maybe<EnrollmentEligibility>;
  /** List of errors from the eligibility check */
  errors?: Maybe<Array<Maybe<EnrollmentEligibilityResponseError>>>;
};

/** Error from enrollment eligibility check */
export type EnrollmentEligibilityResponseError = {
  __typename?: 'EnrollmentEligibilityResponseError';
  /** Error message */
  message: Scalars['String']['output'];
};

/** Itemized monthly expense breakdown */
export type ExpensesBreakdown = {
  __typename?: 'ExpensesBreakdown';
  /** Charitable contributions */
  charitableContributions?: Maybe<Scalars['Float']['output']>;
  /** Court-ordered payments */
  court?: Maybe<Scalars['Float']['output']>;
  /** Dependent care expenses */
  dependents?: Maybe<Scalars['Float']['output']>;
  /** Groceries */
  groceries?: Maybe<Scalars['Float']['output']>;
  /** Health-related expenses */
  health?: Maybe<Scalars['Float']['output']>;
  /** Housing costs (rent or mortgage) */
  housing?: Maybe<Scalars['Float']['output']>;
  /** Insurance premiums */
  insurance?: Maybe<Scalars['Float']['output']>;
  /** Involuntary deductions */
  involuntary?: Maybe<Scalars['Float']['output']>;
  /** Loan payments (excluding enrolled debts) */
  loans?: Maybe<Scalars['Float']['output']>;
  /** Miscellaneous expenses */
  misc?: Maybe<Scalars['Float']['output']>;
  /** Personal expenses */
  personal?: Maybe<Scalars['Float']['output']>;
  /** Tax payments */
  tax?: Maybe<Scalars['Float']['output']>;
  /** Transportation costs */
  transportation?: Maybe<Scalars['Float']['output']>;
};

/** Itemized monthly expenses */
export type ExpensesInput = {
  /** Charitable contributions */
  charitableContributions?: InputMaybe<Scalars['Float']['input']>;
  /** Court-ordered payments */
  court?: InputMaybe<Scalars['Float']['input']>;
  /** Dependent care expenses */
  dependents?: InputMaybe<Scalars['Float']['input']>;
  /** Groceries */
  groceries?: InputMaybe<Scalars['Float']['input']>;
  /** Health-related expenses */
  health?: InputMaybe<Scalars['Float']['input']>;
  /** Housing costs (rent or mortgage) */
  housing?: InputMaybe<Scalars['Float']['input']>;
  /** Insurance premiums */
  insurance?: InputMaybe<Scalars['Float']['input']>;
  /** Involuntary deductions */
  involuntary?: InputMaybe<Scalars['Float']['input']>;
  /** Loan payments */
  loans?: InputMaybe<Scalars['Float']['input']>;
  /** Miscellaneous expenses */
  misc?: InputMaybe<Scalars['Float']['input']>;
  /** Personal expenses */
  personal?: InputMaybe<Scalars['Float']['input']>;
  /** Tax payments */
  tax?: InputMaybe<Scalars['Float']['input']>;
  /** Transportation costs */
  transportation?: InputMaybe<Scalars['Float']['input']>;
};

/** Itemized monthly income breakdown */
export type IncomeBreakdown = {
  __typename?: 'IncomeBreakdown';
  /** Business income */
  business?: Maybe<Scalars['Float']['output']>;
  /** Gross employment income */
  gross?: Maybe<Scalars['Float']['output']>;
  /** Other miscellaneous income */
  otherIncome?: Maybe<Scalars['Float']['output']>;
  /** Pension income */
  pension?: Maybe<Scalars['Float']['output']>;
};

/** Itemized monthly income sources */
export type IncomeInput = {
  /** Business income */
  business?: InputMaybe<Scalars['Float']['input']>;
  /** Gross employment income */
  gross?: InputMaybe<Scalars['Float']['input']>;
  /** Other miscellaneous income */
  otherIncome?: InputMaybe<Scalars['Float']['input']>;
  /** Pension income */
  pension?: InputMaybe<Scalars['Float']['input']>;
};

export type JointUwApplicantInfo = {
  __typename?: 'JointUwApplicantInfo';
  /** Applicant's contact information */
  applicantContactInfo?: Maybe<ApplicantContactInfo>;
  /** Co-applicant's contact information */
  coApplicantContactInfo?: Maybe<ApplicantContactInfo>;
};

/** Joint underwriting result containing shared debts between applicants */
export type JointUwResult = {
  __typename?: 'JointUwResult';
  /** Applicant information needed for the root filters */
  applicantInfo: JointUwApplicantInfo;
  /** Co-applicant uw result id */
  coApplicantUwResult?: Maybe<ApplicantUwResultInfo>;
  /** Secondary applicant credit report ID, if applicable (For JOINT application only) */
  coCreditReportId?: Maybe<Scalars['String']['output']>;
  /** Date and time this joint underwriting result was created */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** Primary applicant credit report ID */
  creditReportId?: Maybe<Scalars['String']['output']>;
  /** Source can be SPINWHEEL, CRS_TRANSUNION, or CRS_EQUIFAX */
  creditReportSource: Scalars['String']['output'];
  /** List of debts. Each debt will have additional underwriting pass/fail information */
  debts: Array<Maybe<UwResultDebt>>;
  /** Unique identifier for the joint underwriting result */
  id: Scalars['ID']['output'];
  /** Sigma lead ID */
  leadId?: Maybe<Scalars['String']['output']>;
  /** Primary applicant uw result id */
  primaryApplicantUwResult?: Maybe<ApplicantUwResultInfo>;
  /** Requesting organization ID */
  reqOrgId?: Maybe<Scalars['String']['output']>;
  /** Document revision number. Each time the document is edited the revision number is incremented */
  revision: Scalars['Int']['output'];
  /** History of edits applied to the top level fields of this application */
  rootHistory?: Maybe<Array<Maybe<JointUwResultHistory>>>;
  /** The organization underwriting rules used for this application. For example alv or glg */
  uwOrgId?: Maybe<Scalars['String']['output']>;
};

/** Historical record of changes made to a joint underwriting result */
export type JointUwResultHistory = {
  __typename?: 'JointUwResultHistory';
  /** Applicant information at this revision */
  applicantInfo?: Maybe<JointUwApplicantInfo>;
  /** The revision number this history entry was created from */
  fromRevision?: Maybe<Scalars['Int']['output']>;
  /** Lead ID at this revision */
  leadId?: Maybe<Scalars['String']['output']>;
  /** User ID who made this update */
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

/** Input for updating JOINT underwriting */
export type JointUwResultUpdateFieldsInput = {
  /** Application debts */
  debts?: InputMaybe<Array<InputMaybe<UwResultDebtUpdateInput>>>;
};

/** V2: Joint underwriting result containing shared debts between applicants */
export type JointUwResultV2 = {
  __typename?: 'JointUwResultV2';
  /** Applicant information needed for the root filters */
  applicantInfo: JointUwApplicantInfo;
  /** Co-applicant uw result id */
  coApplicantUwResult?: Maybe<ApplicantUwResultInfo>;
  /** Secondary applicant credit report ID, if applicable (For JOINT application only) */
  coCreditReportId?: Maybe<Scalars['String']['output']>;
  /** Date and time this joint underwriting result was created */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** Primary applicant credit report ID */
  creditReportId?: Maybe<Scalars['String']['output']>;
  /** Source can be SPINWHEEL, CRS_TRANSUNION, or CRS_EQUIFAX */
  creditReportSource: Scalars['String']['output'];
  /** List of debts. */
  debts: Array<Maybe<UwResultDebtV2>>;
  /** Unique identifier for the joint underwriting result */
  id: Scalars['ID']['output'];
  /** Sigma lead ID */
  leadId?: Maybe<Scalars['String']['output']>;
  /** Primary applicant uw result id */
  primaryApplicantUwResult?: Maybe<ApplicantUwResultInfo>;
  /** Requesting organization ID */
  reqOrgId?: Maybe<Scalars['String']['output']>;
  /** Document revision number. Each time the document is edited the revision number is incremented */
  revision: Scalars['Int']['output'];
  /** History of edits applied to the top level fields of this application */
  rootHistory?: Maybe<Array<Maybe<JointUwResultHistory>>>;
  /** The organization underwriting rules used for this application. For example alv or glg */
  uwOrgId?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Deprecating: Use checkApplicantEligibilityV2 instead.
   *
   * Run underwriting on a credit report and generate an underwriting document listing eligible and ineligible debts.
   * @deprecated Use checkApplicantEligibilityV2 instead
   */
  checkApplicantEligibility: EligibilityResponse;
  /** V2: Run underwriting on a credit report and generate an underwriting document listing eligible and ineligible debts. */
  checkApplicantEligibilityV2: EligibilityResponseV2;
  /** Run underwriting on debts. */
  checkDebtsEligibility: DebtsEligibilityResponse;
  /** Check if an applicant is eligible for enrollment based on SSN */
  checkEnrollmentEligibility?: Maybe<EnrollmentEligibilityResponse>;
  /**
   * Deprecating: Use updateApplicantEligibilityV2 instead.
   *
   * Update debts on an existing underwriting document. Used to overwrite auto generated underwriting results and update debts by either removing, adding or editing them. Underwriting is run against the updated input.
   * @deprecated Use updateApplicantEligibilityV2 instead
   */
  updateApplicantEligibility: EligibilityResponse;
  /**
   * V2: Update debts on an existing underwriting document. Used to overwrite auto generated underwriting results and update debts by either removing, adding or editing them. Underwriting is run against the updated input.
   * Validation: The same debtId may not appear in more than one section (applicantUwResult, coApplicantUwResult, jointUwResult).
   */
  updateApplicantEligibilityV2: EligibilityResponseV2;
};


export type MutationCheckApplicantEligibilityArgs = {
  applicationType: ApplicationTypeInput;
  input: UwResultCheckInput;
};


export type MutationCheckApplicantEligibilityV2Args = {
  applicationType: ApplicationTypeInput;
  input: UwResultCheckInputV2;
};


export type MutationCheckDebtsEligibilityArgs = {
  applicationType: ApplicationTypeInput;
  input: UwResultCheckDebtsInput;
};


export type MutationCheckEnrollmentEligibilityArgs = {
  ssn: Scalars['String']['input'];
};


export type MutationUpdateApplicantEligibilityArgs = {
  applicationType: ApplicationTypeInput;
  updatedUWFields: UwResultUpdateInput;
};


export type MutationUpdateApplicantEligibilityV2Args = {
  applicationType: ApplicationTypeInput;
  updatedUWFields: UwResultUpdateInputV2;
};

/** Direction of ordering. */
export enum OrderDirection {
  /** Ascending order (A-Z, 0-9, oldest to newest) */
  Asc = 'ASC',
  /** Descending order (Z-A, 9-0, newest to oldest) */
  Desc = 'DESC'
}

/** Page information for navigating collections. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor for the last item in the current page */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Whether there are more items after the current page */
  hasNextPage: Scalars['Boolean']['output'];
  /** Cursor for the first item in the current page */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Plan = {
  __typename?: 'Plan';
  /**
   * depositIntervals values can be
   * If depositFrequency is biWeekly valid options are 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - Default is 'Monday'. Example 'Monday'
   * If depositFrequency is 'semiMonthly' then 2 values need to be passed  where valid options are the 1-30. Example '1,15'
   * If depositFrequency is 'monthly' valid options are the 1-30. Example '1'
   */
  depositIntervals?: Maybe<Scalars['String']['output']>;
  /** EPF reduction. Ex: YES, NO */
  epfReduction?: Maybe<Scalars['String']['output']>;
  /** Fee percentage. */
  feePercentage?: Maybe<Scalars['Float']['output']>;
  /** First draft exception. */
  firstDraftException?: Maybe<Scalars['String']['output']>;
  /** First payment amount. Ex: 100, 123.45, */
  firstPaymentAmount?: Maybe<Scalars['Float']['output']>;
  /** First payment date. */
  firstPaymentDate?: Maybe<Scalars['String']['output']>;
  /** Frequency of the enrollment plan. Values: 'BW' (biWeekly), 'SM' (semiMonthly), 'M' (monthly). */
  frequency?: Maybe<Scalars['String']['output']>;
  /** sentry fee opt-out by setting to false */
  includeSentryFee?: Maybe<Scalars['Boolean']['output']>;
  /** Enrollment plan ID. */
  planId?: Maybe<Scalars['String']['output']>;
  /** Program term. */
  programTerm?: Maybe<Scalars['Int']['output']>;
  /** Second payment amount. Ex: 100, 123.45, */
  secondPaymentAmount?: Maybe<Scalars['Float']['output']>;
  /** Second payment date. */
  secondPaymentDate?: Maybe<Scalars['String']['output']>;
};

/** Enrollment payment plan configuration */
export type PlanInput = {
  /**
   * depositIntervals values can be
   * If depositFrequency is biWeekly valid options are 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - Default is 'Monday'. Example 'Monday'
   * If depositFrequency is 'semiMonthly' then 2 values need to be passed  where valid options are the 1-30. Example '1,15'
   * If depositFrequency is 'monthly' valid options are the 1-30. Example '1'
   */
  depositIntervals?: InputMaybe<Scalars['String']['input']>;
  /** EPF reduction. Ex: YES, NO */
  epfReduction?: InputMaybe<Scalars['String']['input']>;
  /** Fee percentage. Ex: 27 */
  feePercentage?: InputMaybe<Scalars['Float']['input']>;
  /** First draft exception. Ex: YES, NO */
  firstDraftException?: InputMaybe<Scalars['String']['input']>;
  /** First payment amount. Ex: 100, 123.45, */
  firstPaymentAmount?: InputMaybe<Scalars['Float']['input']>;
  /** First payment date. */
  firstPaymentDate?: InputMaybe<Scalars['String']['input']>;
  /** Payment frequency. Ex: Monthly, Bi-Weekly */
  frequency?: InputMaybe<Scalars['String']['input']>;
  /** sentry fee opt-out by setting to false */
  includeSentryFee?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enrollment plan ID. */
  planId?: InputMaybe<Scalars['String']['input']>;
  /** Program term. */
  programTerm?: InputMaybe<Scalars['Int']['input']>;
  /** Second payment amount. Ex: 100, 123.45, */
  secondPaymentAmount?: InputMaybe<Scalars['Float']['input']>;
  /** Second payment date. */
  secondPaymentDate?: InputMaybe<Scalars['String']['input']>;
};

/** V2: Enrollment payment plan configuration. */
export type PlanInputV2 = {
  /**
   * depositIntervals values can be
   * If frequency is BW (biWeekly) valid options are 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - Default is 'Monday'. Example 'Monday'
   * If frequency is SM (semiMonthly) then 2 values need to be passed  where valid options are the 1-30. Example '1,15'
   * If frequency is M (monthly) valid options are the 1-30. Example '1'
   */
  depositIntervals?: InputMaybe<Scalars['String']['input']>;
  /** EPF reduction. Ex: YES, NO */
  epfReduction?: InputMaybe<Scalars['String']['input']>;
  /** Fee percentage. Ex: 27 */
  feePercentage?: InputMaybe<Scalars['Float']['input']>;
  /** First draft exception. Ex: YES, NO */
  firstDraftException?: InputMaybe<Scalars['String']['input']>;
  /** First payment amount. Ex: 100, 123.45, */
  firstPaymentAmount?: InputMaybe<Scalars['Float']['input']>;
  /** First payment date. */
  firstPaymentDate?: InputMaybe<Scalars['String']['input']>;
  /** Payment frequency code. Accepted values: 'BW' (biWeekly), 'SM' (semiMonthly), 'M' (monthly). */
  frequency?: InputMaybe<Scalars['String']['input']>;
  /** sentry fee opt-out by setting to false */
  includeSentryFee?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enrollment plan ID. */
  planId?: InputMaybe<Scalars['String']['input']>;
  /** Program term. */
  programTerm?: InputMaybe<Scalars['Int']['input']>;
  /** Second payment amount. Ex: 100, 123.45, */
  secondPaymentAmount?: InputMaybe<Scalars['Float']['input']>;
  /** Second payment date. */
  secondPaymentDate?: InputMaybe<Scalars['String']['input']>;
};

/** Public Record */
export type PublicRecord = {
  __typename?: 'PublicRecord';
  /** Bankcrupty code */
  bankruptcyCode: Scalars['String']['output'];
  /** Bankcrupty date filed */
  bankruptcyDateFiled?: Maybe<Scalars['String']['output']>;
  /** Bankcrupty disposition type */
  bankruptcyDispositionType?: Maybe<Scalars['String']['output']>;
};

/** Public record information from credit report (e.g., bankruptcy) */
export type PublicRecordInput = {
  /** Bankcrupty code */
  bankruptcyCode: Scalars['String']['input'];
  /** Bankcrupty date filed */
  bankruptcyDateFiled?: InputMaybe<Scalars['String']['input']>;
  /** Bankcrupty disposition type */
  bankruptcyDispositionType?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** fetch Underwriting Results with various filtering and pagination options. */
  debtsUwResults?: Maybe<UwDebtsResultResponse>;
  /** Fetch uwConfig by reqOrgId */
  uwConfig?: Maybe<UwConfigResponse>;
  /**
   * Deprecating: Use uwResultsV2 instead.
   *
   * fetch Underwriting Results with various filtering and pagination options.
   * @deprecated Use uwResultsV2 instead
   */
  uwResults?: Maybe<UwResultsResponse>;
  /**
   * V2: Fetch Underwriting Results with various filtering and pagination options.
   * Filter-related fields are removed from the response to improve data security.
   * Errors are grouped by debtId.
   */
  uwResultsV2?: Maybe<UwResultsResponseV2>;
};


export type QueryDebtsUwResultsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<UwResultOrder>>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UwDebtsResultWhereInput>;
};


export type QueryUwConfigArgs = {
  reqOrgId: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  uwOrgId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUwResultsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<UwResultOrder>>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UwResultWhereInput>;
};


export type QueryUwResultsV2Args = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<UwResultOrder>>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UwResultWhereInput>;
};

export type TradelineMetadata = {
  __typename?: 'TradelineMetadata';
  /** List of externalDebtsId's that belong to selected Catipal One debts, if empty then none */
  enrolledCapitalOneDebtAccountNumbers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of externalDebtsId's that belong to selected Discover debts, if empty then none */
  enrolledDiscoverDebtAccountNumbers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of externalDebtsId's that belong to selected Upstart debts, if empty then none */
  enrolledUpstartDebtAccountNumbers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Uw Filter Config */
export type UwConfig = {
  __typename?: 'UwConfig';
  /** Aggregate debts filter configuration (JSON string) */
  aggregateDebtsFilterConfig?: Maybe<Scalars['String']['output']>;
  /** Debt-level filter configuration (JSON string) */
  debtFilterConfig?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the configuration */
  id?: Maybe<Scalars['ID']['output']>;
  /** Notes configuration (JSON string) */
  notesConfig?: Maybe<Scalars['String']['output']>;
  /** Post-debt filter configuration (JSON string) */
  postDebtFilterConfig?: Maybe<Scalars['String']['output']>;
  /** Prescreen filter configuration (JSON string) */
  prescreenFilterConfig?: Maybe<Scalars['String']['output']>;
  /** Requesting organization ID */
  reqOrgId?: Maybe<Scalars['String']['output']>;
  /** Configuration revision number */
  revision?: Maybe<Scalars['Int']['output']>;
  /** Root-level filter configuration (JSON string) */
  rootFilterConfig?: Maybe<Scalars['String']['output']>;
  /** Underwriting organization ID (ALV or GLG) */
  uwOrgId?: Maybe<Scalars['String']['output']>;
  /** Underwriting settings configuration (JSON string) */
  uwSettingsConfig?: Maybe<Scalars['String']['output']>;
};

/** UwConfig Response */
export type UwConfigResponse = {
  __typename?: 'UwConfigResponse';
  /** Uw Result Connection. */
  data?: Maybe<UwConfig>;
  /** Error(s) list */
  errors?: Maybe<Array<Maybe<UwConfigResponseError>>>;
};

/** UwConfigResponse Error */
export type UwConfigResponseError = {
  __typename?: 'UwConfigResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type UwDebtsApplicantInfo = {
  __typename?: 'UwDebtsApplicantInfo';
  /** Applicant's contact information */
  applicantContactInfo?: Maybe<ApplicantContactInfo>;
};

/** Debts underwriting result */
export type UwDebtsResult = {
  __typename?: 'UwDebtsResult';
  /** Applicant information */
  applicantInfo?: Maybe<UwDebtsApplicantInfo>;
  /** Application type */
  applicationType?: Maybe<Scalars['String']['output']>;
  /** Fileter configuration revision number */
  configRevision?: Maybe<Scalars['Int']['output']>;
  /** Created at */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** List of debts. Each debt will have additional underwriting pass/fail information */
  debts?: Maybe<Array<Maybe<UwDebtsResultDebt>>>;
  /** Unique identifier for the debts underwriting result */
  id: Scalars['ID']['output'];
  /** Flag to identify if the latest revision is enrolled */
  isLatestRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Lead ID */
  leadId?: Maybe<Scalars['String']['output']>;
  /** Requesting organization contact ID */
  reqOrgContactId?: Maybe<Scalars['String']['output']>;
  /** Requesting organization ID */
  reqOrgId?: Maybe<Scalars['String']['output']>;
  /** Updated at */
  updatedAt?: Maybe<Scalars['Date']['output']>;
  /** Underwriting organization ID */
  uwOrgId?: Maybe<Scalars['String']['output']>;
};

/** Pagination connection for debts underwriting results */
export type UwDebtsResultConnection = {
  __typename?: 'UwDebtsResultConnection';
  /** List of result edges */
  edges: Array<Maybe<UwDebtsResultEdge>>;
  /** Pagination information */
  pageInfo: PageInfo;
  /** Total count of results matching the query */
  totalCount: Scalars['Int']['output'];
};

/** Debt with underwriting check results */
export type UwDebtsResultDebt = {
  __typename?: 'UwDebtsResultDebt';
  /** Debt Id assigned on the credit report */
  accountNumber?: Maybe<Scalars['String']['output']>;
  /** Account type */
  accountType?: Maybe<Scalars['String']['output']>;
  /** Primary applicant ID */
  applicantId?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  approvedAccountTypeCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Secondary applicant ID, if applicable (For JOINT application only) */
  coApplicantId?: Maybe<Scalars['String']['output']>;
  /** Only applicable to JOINT debt. True/False flag to identify if this debt is selected by the co-applicant */
  coApplicantIsSelected?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  creditUnionAndStateCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Creditor ID from Forth */
  creditorId?: Maybe<Scalars['ID']['output']>;
  /** creditor name */
  creditorName?: Maybe<Scalars['String']['output']>;
  /** creditor type */
  creditorType?: Maybe<Scalars['String']['output']>;
  /** Current and original balance check */
  currAndOgBalanceCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Current debt balance */
  currentBalance?: Maybe<Scalars['Float']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  debtOwnershipCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Debt type */
  debtType?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if this debt is selected and a duplicate debt */
  duplicateDebtsCheck?: Maybe<Scalars['Boolean']['output']>;
  /** ECOA Code */
  ecoaCode?: Maybe<Scalars['String']['output']>;
  /** Identify the eligibility status */
  eligibilityStatus: EligibilityStatus;
  /** True/False flag to identify if the creditor is the same as employer */
  employerIsCreditorCheck?: Maybe<Scalars['Boolean']['output']>;
  /** List of reasons the eligibility status is being overridden */
  exceptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Optional field to identify the debt in the requesting CRM */
  externalCrmId?: Maybe<Scalars['String']['output']>;
  /**
   * This is replaced by accountNumber
   * @deprecated Use accountNumber instead
   * @deprecated Use accountNumber instead
   */
  externalDebtId?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the debt */
  id: Scalars['ID']['output'];
  /** Flag to show if the debt is in collection */
  isCollection?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if the eligibility status is being overriden */
  isOverridden?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this debt is selected for program enrollment */
  isSelected?: Maybe<Scalars['Boolean']['output']>;
  /** Date of the last payment */
  lastPaymentDate?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  minimumDebtValueCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  multipleCreditUnionCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Date debt was opened */
  openDate?: Maybe<Scalars['String']['output']>;
  /** Original debt balance */
  originalBalance?: Maybe<Scalars['Float']['output']>;
  /** Original creditor name */
  originalCreditorName?: Maybe<Scalars['String']['output']>;
  /** Parent creditor name */
  parentCreditorName?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  paymentHistoryCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Portfolio type */
  portfolioType?: Maybe<Scalars['String']['output']>;
  /** Remarks */
  remarks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** True/False flag to identify if the creditor is a standalone debt */
  standaloneDebtsCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  unacceptableCreditorCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  unsecuredDebtCheck?: Maybe<Scalars['Boolean']['output']>;
};

/** Input for updating underwriting individual debts */
export type UwDebtsResultDebtInput = {
  /** Debt Id assigned on the credit report */
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  /** Account type */
  accountType?: InputMaybe<Scalars['String']['input']>;
  /** Primary applicant ID */
  applicantId?: InputMaybe<Scalars['String']['input']>;
  /** Bankruptcy Record Date */
  bankruptcyDateFiled?: InputMaybe<Scalars['String']['input']>;
  /** Co-applicant ID (for JOINT applications) */
  coApplicantId?: InputMaybe<Scalars['String']['input']>;
  /** Only applicable to JOINT debt. True/False flag to identify if this debt is selected by the co-applicant */
  coApplicantIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  /** creditorId used to map to the credit report debt */
  creditorId?: InputMaybe<Scalars['String']['input']>;
  /** Creditor name */
  creditorName?: InputMaybe<Scalars['String']['input']>;
  /** Creditor Type */
  creditorType?: InputMaybe<Scalars['String']['input']>;
  /** Current balance as of the date the credit report was originally pulled */
  currentBalance?: InputMaybe<Scalars['Float']['input']>;
  /** Debt type */
  debtType?: InputMaybe<Scalars['String']['input']>;
  /** ECOA Code */
  ecoaCode?: InputMaybe<Scalars['String']['input']>;
  /** Optional field to identify the debt in the requesting CRM */
  externalCrmId?: InputMaybe<Scalars['String']['input']>;
  /**
   * This is replaced by accountNumber
   * @deprecated Use accountNumber instead
   * @deprecated Use accountNumber instead
   */
  externalDebtId?: InputMaybe<Scalars['String']['input']>;
  /** True/False flag to identify if this debts most recet payment was made */
  hasLastPayment?: InputMaybe<Scalars['Boolean']['input']>;
  /** True/False flag to identify if proof of liability has been provided for the debt */
  hasProofOfLiability?: InputMaybe<Scalars['Boolean']['input']>;
  /** Debt ID (for existing debts) */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Flag to show if the debt is in collection */
  isCollection?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the eligibility status is being overridden */
  isOverridden?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this debt is selected for enrollment */
  isSelected?: InputMaybe<Scalars['Boolean']['input']>;
  /** Date of last payment since the credit report was originally pulled */
  lastPaymentDate?: InputMaybe<Scalars['String']['input']>;
  /** Narrative codes that might include bankcruptcy codes */
  narrativeCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Debt open date */
  openDate?: InputMaybe<Scalars['String']['input']>;
  /** Original debt balance */
  originalBalance?: InputMaybe<Scalars['Float']['input']>;
  /** Original creditor name from credit report */
  originalCreditorName?: InputMaybe<Scalars['String']['input']>;
  /** Parent creditor ID */
  parentCreditorId?: InputMaybe<Scalars['String']['input']>;
  /** Parent creditor name */
  parentCreditorName?: InputMaybe<Scalars['String']['input']>;
  /** Portfolio type */
  portfolioType?: InputMaybe<Scalars['String']['input']>;
  /** Remarks */
  remarks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Edge type for Debts Uw Results. */
export type UwDebtsResultEdge = {
  __typename?: 'UwDebtsResultEdge';
  /** Cursor for pagination */
  cursor: Scalars['String']['output'];
  /** List of eligibility errors for this result */
  errors?: Maybe<Array<Maybe<EligibilityResponseError>>>;
  /** The debts underwriting result */
  node?: Maybe<UwDebtsResult>;
};

/** Response from debts underwriting results query */
export type UwDebtsResultResponse = {
  __typename?: 'UwDebtsResultResponse';
  /** Debts underwriting result connection */
  data?: Maybe<UwDebtsResultConnection>;
  /** List of errors from the query */
  errors?: Maybe<Array<Maybe<UwResultsResponseError>>>;
};

/** Where conditions for filtering Uw Results. */
export type UwDebtsResultWhereInput = {
  /** Filter to only return the latest revision */
  isLatestRevision?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by lead ID */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** Filter by requesting organization contact ID */
  reqOrgContactId?: InputMaybe<Scalars['String']['input']>;
  /** Filter by requesting organization ID */
  reqOrgId?: InputMaybe<Scalars['String']['input']>;
  /** Filter by underwriting result ID */
  uwResultId?: InputMaybe<Scalars['String']['input']>;
};

export type UwEligibilityResult = {
  __typename?: 'UwEligibilityResult';
  /** Applicant's debts (tradeline) specific underwriting results */
  applicantUwResult?: Maybe<UwResult>;
  /** Underwriting result for the application as a whole. */
  applicationUwResult?: Maybe<ApplicationUwResult>;
  /**
   * Co-applicant's debts (tradeline) specific underwriting results.
   *
   * Only applicable to JOINT application.
   */
  coApplicantUwResult?: Maybe<UwResult>;
  /** Date and time this underwriting document revision was created */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** Underwriting document ID */
  id: Scalars['ID']['output'];
  /**
   * Joint debts (tradeline) specific underwriting results.
   *
   * Only applicable to JOINT application.
   */
  jointUwResult?: Maybe<JointUwResult>;
  /** Maximum term (in months) calculated for this underwriting application */
  maxTerm?: Maybe<Scalars['Int']['output']>;
  /**
   * Revision number of this underwriting document.
   *
   * Each time the document is edited the revision number is incremented
   */
  revision: Scalars['Int']['output'];
  /** Additional metadata about UW application */
  tradelineMetadata?: Maybe<TradelineMetadata>;
};

/** V2: Underwriting eligibility result. */
export type UwEligibilityResultV2 = {
  __typename?: 'UwEligibilityResultV2';
  /** Applicant's debts (tradeline) specific underwriting results */
  applicantUwResult?: Maybe<UwResultV2>;
  /** Underwriting result for the application as a whole. */
  applicationUwResult?: Maybe<ApplicationUwResultV2>;
  /**
   * Co-applicant's debts (tradeline) specific underwriting results.
   * Only applicable to JOINT application.
   */
  coApplicantUwResult?: Maybe<UwResultV2>;
  /** Date and time this underwriting document revision was created */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** Underwriting document ID */
  id: Scalars['ID']['output'];
  /**
   * Joint debts (tradeline) specific underwriting results.
   * Only applicable to JOINT application.
   */
  jointUwResult?: Maybe<JointUwResultV2>;
  /** Maximum term (in months) calculated for this underwriting application */
  maxTerm?: Maybe<Scalars['Int']['output']>;
  /**
   * Revision number of this underwriting document.
   *
   * Each time the document is edited the revision number is incremented
   */
  revision: Scalars['Int']['output'];
  /** Additional metadata about UW application */
  tradelineMetadata?: Maybe<TradelineMetadata>;
};

export type UwResult = {
  __typename?: 'UwResult';
  /** Applicant information. */
  applicantInfo: ApplicantInfo;
  /** Type of application can be SINGLE or JOINT */
  applicationType?: Maybe<Scalars['String']['output']>;
  /** Co-Applicant normalized credit report ID from the credit report service */
  coCreditReportId?: Maybe<Scalars['String']['output']>;
  /** Date and time this underwriting document revision was created */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** Applicant normalized credit report ID from the credit report service */
  creditReportId?: Maybe<Scalars['String']['output']>;
  /**
   * Credit report source
   *
   * Values:
   *
   * - SPINWHEEL
   *
   * - CRS_TRANSUNION
   *
   * - CRS_EQUIFAX
   */
  creditReportSource: Scalars['String']['output'];
  /** List of debts. Each debt will have additional underwriting pass/fail information */
  debts: Array<Maybe<UwResultDebt>>;
  /** Underwriting document ID */
  id: Scalars['ID']['output'];
  /** Applicant leadId set by the integrating CRM to identify the lead in its system. */
  leadId?: Maybe<Scalars['String']['output']>;
  /** Requesting organization contact ID */
  reqOrgContactId?: Maybe<Scalars['String']['output']>;
  /** Requesting organization ID. Based on the credentials of the system making the request. */
  reqOrgId?: Maybe<Scalars['String']['output']>;
  /** Document revision number. Each time the document is edited the revision number is incremented */
  revision: Scalars['Int']['output'];
  /**
   * Deprecating.
   *
   * Root level filters (All underwriting filters that are not specific to a debt)
   * @deprecated Removed in V2. Use UwResultV2 instead.
   */
  rootFilters: ApplicantRootFilters;
  /** Audit history of edits applied to the top level fields of this application */
  rootHistory?: Maybe<Array<Maybe<UwResultHistory>>>;
  /**
   * The organization underwriting rules used for this application.
   *
   * Values:
   *
   * - ALV
   *
   * - GLG
   */
  uwOrgId?: Maybe<Scalars['String']['output']>;
};

/** Input for checking debts eligibility. Contains applicant info and list of debts to check. */
export type UwResultCheckDebtsInput = {
  /** Application basic info input */
  applicantInfo: CheckDebtsApplicantInfoInput;
  /** Contact ID */
  contactId: Scalars['ID']['input'];
  /** Enrolled debts */
  enrolledDebts?: InputMaybe<Array<InputMaybe<UwDebtsResultDebtInput>>>;
  /** Lead ID */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** Application debts */
  unenrolledDebts: Array<InputMaybe<UwDebtsResultDebtInput>>;
};

/** Input for checking applicant eligibility. Contains credit report IDs, contact information, and enrollment details. */
export type UwResultCheckInput = {
  /** Additional underwriting configuration options */
  additionalInfo?: InputMaybe<AdditionalInfoInput>;
  /** Agent userId set by the integrating CRM to identify the agent in its system. */
  agentAssigned?: InputMaybe<Scalars['String']['input']>;
  /** Applicant contact information */
  applicantContactInfo: ApplicantContactInfoInput;
  /** Budget */
  budget?: InputMaybe<BudgetInput>;
  /** Co-applicant contact information. Required for JOINT application. */
  coApplicantContactInfo?: InputMaybe<ApplicantContactInfoInput>;
  /** Applicant leadId set by the integrating CRM to identify the lead in its system. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** Enrollment payment plan */
  plan?: InputMaybe<PlanInput>;
  /** Applicant normalized credit report ID from the credit report service */
  primaryReportId: Scalars['String']['input'];
  /** Co-Applicant normalized credit report ID from the credit report service */
  secondaryReportId?: InputMaybe<Scalars['String']['input']>;
};

/** V2: Input for checking applicant eligibility. Contains credit report IDs, contact information, and enrollment details.. */
export type UwResultCheckInputV2 = {
  /** Additional underwriting configuration options */
  additionalInfo?: InputMaybe<AdditionalInfoInput>;
  /** Agent userId set by the integrating CRM to identify the agent in its system. */
  agentAssigned?: InputMaybe<Scalars['String']['input']>;
  /** Applicant contact information */
  applicantContactInfo: ApplicantContactInfoInput;
  /** Budget with itemized income and expense breakdown */
  budget?: InputMaybe<BudgetInputV2>;
  /** Co-applicant contact information. Required for JOINT application. */
  coApplicantContactInfo?: InputMaybe<ApplicantContactInfoInput>;
  /** Applicant leadId set by the integrating CRM to identify the lead in its system. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** Enrollment payment plan */
  plan?: InputMaybe<PlanInputV2>;
  /** Applicant normalized credit report ID from the credit report service */
  primaryReportId: Scalars['String']['input'];
  /** Co-Applicant normalized credit report ID from the credit report service */
  secondaryReportId?: InputMaybe<Scalars['String']['input']>;
};

/** Input for checking joint applicant eligibility. Contains credit report IDs for both applicants, contact information, and enrollment details. */
export type UwResultCheckJointInput = {
  /** Additional underwriting configuration options */
  additionalInfo?: InputMaybe<AdditionalInfoInput>;
  /** Agent userId set by the integrating CRM to identify the agent in its system. */
  agentAssigned?: InputMaybe<Scalars['String']['input']>;
  /** Applicant contact information */
  applicantContactInfo: ApplicantContactInfoInput;
  /** Budget */
  budget?: InputMaybe<BudgetInput>;
  /** Co-applicant contact information. Required for JOINT application. */
  coApplicantContactInfo: ApplicantContactInfoInput;
  /** Applicant leadId set by the integrating CRM to identify the lead in its system. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** Enrollment payment plan */
  plan?: InputMaybe<PlanInput>;
  /** Applicant normalized credit report ID from the credit report service */
  primaryReportId: Scalars['String']['input'];
  /** Co-Applicant normalized credit report ID from the credit report service */
  secondaryReportId: Scalars['String']['input'];
  /**
   * By default underwriting is based on the applicants state.
   *
   * Pass a value to override the default behavior and force ALV or GLG underwriting.
   *
   * Values:
   *
   * - ALV
   *
   * - GLG
   */
  uwOrgId?: InputMaybe<Scalars['String']['input']>;
};

/** V2: Input for checking joint applicant eligibility. Contains credit report IDs for both applicants, contact information, and enrollment details. */
export type UwResultCheckJointInputV2 = {
  /** Additional underwriting configuration options */
  additionalInfo?: InputMaybe<AdditionalInfoInput>;
  /** Agent userId set by the integrating CRM to identify the agent in its system. */
  agentAssigned?: InputMaybe<Scalars['String']['input']>;
  /** Applicant contact information */
  applicantContactInfo: ApplicantContactInfoInput;
  /** Budget with itemized income and expense breakdown */
  budget?: InputMaybe<BudgetInputV2>;
  /** Co-applicant contact information. Required for JOINT application. */
  coApplicantContactInfo: ApplicantContactInfoInput;
  /** Applicant leadId set by the integrating CRM to identify the lead in its system. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** Enrollment payment plan */
  plan?: InputMaybe<PlanInputV2>;
  /** Applicant normalized credit report ID from the credit report service */
  primaryReportId: Scalars['String']['input'];
  /** Co-Applicant normalized credit report ID from the credit report service */
  secondaryReportId: Scalars['String']['input'];
  /**
   * By default underwriting is based on the applicants state.
   *
   * Pass a value to override the default behavior and force ALV or GLG underwriting.
   *
   * Values:
   *
   * - ALV
   *
   * - GLG
   */
  uwOrgId?: InputMaybe<Scalars['String']['input']>;
};

/** Pagination connection for Uw Results. */
export type UwResultConnection = {
  __typename?: 'UwResultConnection';
  /** List of result edges */
  edges: Array<Maybe<UwResultEdge>>;
  /** Pagination information */
  pageInfo: PageInfo;
  /** Total count of results matching the query */
  totalCount: Scalars['Int']['output'];
};

/** V2: Pagination connection for Uw Results. */
export type UwResultConnectionV2 = {
  __typename?: 'UwResultConnectionV2';
  /** List of result edges */
  edges: Array<Maybe<UwResultEdgeV2>>;
  /** Pagination information */
  pageInfo: PageInfo;
  /** Total count of results matching the query */
  totalCount: Scalars['Int']['output'];
};

/** Debt information with underwriting check results */
export type UwResultDebt = {
  __typename?: 'UwResultDebt';
  /** Debt account number */
  accountNumber?: Maybe<Scalars['String']['output']>;
  /** Account type */
  accountType?: Maybe<Scalars['String']['output']>;
  /** Primary applicant ID */
  applicantId?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  approvedAccountTypeCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  bankruptcyCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Bankruptcy Record Date. This come from the credit report and does not need to be updated. */
  bankruptcyDateFiled?: Maybe<Scalars['String']['output']>;
  /** Only applicable to JOINT debt. True/False flag to identify if this underwriting check passed */
  coApplicantCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Secondary applicant ID, if applicable (For JOINT application only) */
  coApplicantId?: Maybe<Scalars['String']['output']>;
  /** Only applicable to JOINT debt. True/False flag to identify if this debt is selected by the co-applicant */
  coApplicantIsSelected?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  creditUnionAndStateCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Creditor ID from Forth */
  creditorId?: Maybe<Scalars['ID']['output']>;
  /** creditor name */
  creditorName?: Maybe<Scalars['String']['output']>;
  /** creditor type */
  creditorType?: Maybe<Scalars['String']['output']>;
  /** Current and original balance check */
  currAndOgBalanceCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Current debt balance */
  currentBalance?: Maybe<Scalars['Float']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  debtOwnershipCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Debt type */
  debtType?: Maybe<Scalars['String']['output']>;
  /** account rating /delinquency value */
  delinquency?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if this debt is selected and a duplicate debt */
  duplicateDebtsCheck?: Maybe<Scalars['Boolean']['output']>;
  /** ECOA Code */
  ecoaCode?: Maybe<Scalars['String']['output']>;
  /** Identify the eligibility status */
  eligibilityStatus: EligibilityStatus;
  /** True/False flag to identify if the creditor is the same as employer */
  employerIsCreditorCheck?: Maybe<Scalars['Boolean']['output']>;
  /** List of reasons the eligibility status is being overridden */
  exceptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Optional field to identify the debt in the requesting CRM */
  externalCrmId?: Maybe<Scalars['String']['output']>;
  /**
   * This is replaced by accountNumber
   * @deprecated Use accountNumber instead
   * @deprecated Use accountNumber instead
   */
  externalDebtId?: Maybe<Scalars['ID']['output']>;
  /** Forth Debt Type ID */
  forthDebtTypeId?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if last payment was amde */
  hasLastPayment?: Maybe<Scalars['Boolean']['output']>;
  /** Has provided proof of liability */
  hasProofOfLiability?: Maybe<Scalars['Boolean']['output']>;
  /** History of all the updates made to this debt */
  history?: Maybe<Array<Maybe<UwResultDebtHistory>>>;
  /** JSON version of history with non-existent attributes excluded */
  historyJson?: Maybe<Scalars['JSON']['output']>;
  /** Unique identifier for the debt */
  id: Scalars['ID']['output'];
  /** Flag to show if the debt is in collection */
  isCollection?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if the eligiblity status is being overriden */
  isOverridden?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this debt is selected for program enrollment */
  isSelected: Scalars['Boolean']['output'];
  /** Date of the last payment */
  lastPaymentDate?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  minimumDebtValueCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Monthly payment */
  monthlyPayment?: Maybe<Scalars['Float']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  multipleCreditUnionCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Narrative codes that might include bankcruptcy codes */
  narrativeCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Only applicable to JOINT debt. The date when the non-applicant waiver has been signed. */
  nawSignedDate?: Maybe<Scalars['Date']['output']>;
  /** Only applicable to JOINT debt. The url to the non-applicant waiver document's file */
  nawUrl?: Maybe<Scalars['String']['output']>;
  /** Debt Notes */
  notes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Date debt was opened */
  openDate?: Maybe<Scalars['String']['output']>;
  /** Original debt balance */
  originalBalance?: Maybe<Scalars['Float']['output']>;
  /** Original creditor name */
  originalCreditorName?: Maybe<Scalars['String']['output']>;
  /** Parent creditor ID */
  parentCreditorId?: Maybe<Scalars['String']['output']>;
  /** Parent creditor name */
  parentCreditorName?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  paymentHistoryCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Portfolio type */
  portfolioType?: Maybe<Scalars['String']['output']>;
  /** Proof of liability */
  proofOfLiabilityCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Remarks */
  remarks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Source of the debt entry can be MANUAL or CREDIT_REPORT */
  source: Scalars['String']['output'];
  /** True/False flag to identify if the creditor is a standalone debt */
  standaloneDebtsCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  unacceptableCreditorCheck?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this underwriting check passed */
  unsecuredDebtCheck?: Maybe<Scalars['Boolean']['output']>;
};

/** Historical record of changes made to a debt */
export type UwResultDebtHistory = {
  __typename?: 'UwResultDebtHistory';
  /** Account type at this revision */
  accountType?: Maybe<Scalars['String']['output']>;
  /** Bankruptcy date filed at this revision */
  bankruptcyDateFiled?: Maybe<Scalars['String']['output']>;
  /** Whether the co-applicant had selected this debt at this revision */
  coApplicantIsSelected?: Maybe<Scalars['Boolean']['output']>;
  /** Creditor name at this revision */
  creditorName?: Maybe<Scalars['String']['output']>;
  /** Creditor type at this revision */
  creditorType?: Maybe<Scalars['String']['output']>;
  /** Current balance at this revision */
  currentBalance?: Maybe<Scalars['Float']['output']>;
  /** Debt type at this revision */
  debtType?: Maybe<Scalars['String']['output']>;
  /** ECOA code at this revision */
  ecoaCode?: Maybe<Scalars['String']['output']>;
  /** Exceptions applied to the debt at this revision */
  exceptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The revision number this history entry was created from */
  fromRevision?: Maybe<Scalars['Int']['output']>;
  /** Whether last payment was made at this revision */
  hasLastPayment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether proof of liability was provided at this revision */
  hasProofOfLiability?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the debt was in collection at this revision */
  isCollection?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the debt was selected for enrollment at this revision */
  isSelected?: Maybe<Scalars['Boolean']['output']>;
  /** Last payment date at this revision */
  lastPaymentDate?: Maybe<Scalars['String']['output']>;
  /** Monthly payment at this revision */
  monthlyPayment?: Maybe<Scalars['Float']['output']>;
  /** Narrative codes at this revision */
  narrativeCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Non-applicant waiver signed date at this revision */
  nawSignedDate?: Maybe<Scalars['Date']['output']>;
  /** Non-applicant waiver URL at this revision */
  nawUrl?: Maybe<Scalars['String']['output']>;
  /** Open date at this revision */
  openDate?: Maybe<Scalars['String']['output']>;
  /** Original balance at this revision */
  originalBalance?: Maybe<Scalars['Float']['output']>;
  /** Original creditor name at this revision */
  originalCreditorName?: Maybe<Scalars['String']['output']>;
  /** Portfolio type at this revision */
  portfolioType?: Maybe<Scalars['String']['output']>;
  /** Remarks at this revision */
  remarks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Source of the debt (MANUAL or CREDIT_REPORT) */
  source?: Maybe<Scalars['String']['output']>;
  /** User ID who made this update */
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

/**
 * Input for updating underwriting individual debts.
 *
 * Minimum required field:
 *
 * - id
 *
 * Optional fields:
 *
 * - all fields are optional. Provide the entire debt object or just the changed fields.
 */
export type UwResultDebtUpdateInput = {
  /** Debt account number */
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  /**
   * Account type
   *
   * Values:
   *
   * - AUTO_LOAN
   *
   * - CHARGE_ACCOUNT
   *
   * - COLLECTIONS
   *
   * - CREDIT_CARD
   *
   * - FLEXIBLE_SPENDING_CREDIT_CARD
   *
   * - INSTALLMENT
   *
   * - INSTALLMENT_SALES_CONTRACT
   *
   * - LEASE
   *
   * - LINE_OF_CREDIT
   *
   * - MEDICAL_BILL
   *
   * - MORTGAGE_DEBT
   *
   * - NOTE_LOAN
   *
   * - PERSONAL_LOAN
   *
   * - SECURED
   *
   * - STUDENT_LOAN
   *
   * - UNSECURED
   */
  accountType?: InputMaybe<Scalars['String']['input']>;
  /** Bankruptcy Record Date in YYYY-MM-DD format */
  bankruptcyDateFiled?: InputMaybe<Scalars['String']['input']>;
  /**
   * Identify if this debt is selected by the co-applicant for program enrollment.
   *
   * Only applicable to JOINT debt.
   *
   * Values:
   *
   * - true
   *
   * - false
   */
  coApplicantIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  /** ForthPay creditor ID. */
  creditorId?: InputMaybe<Scalars['String']['input']>;
  /** ForthPay creditor name */
  creditorName?: InputMaybe<Scalars['String']['input']>;
  /**
   *   Creditor Type
   *
   *   Values:
   *
   * - LEASE_/_RENT
   *
   * - MEDICAL_COLLECTION_AGENCY
   *
   * - FED_STUDENT_LOAN
   *
   * - ORIGINATOR_LEGAL
   *
   * - UTILITY
   *
   * - PAY_DAY_LOAN
   *
   * - DEPARTMENT_STORE
   *
   * - STUDENT_LOAN
   *
   * - DECEASED_COLLECTIONS
   *
   * - CREDIT_UNION
   *
   * - COLLECTION_ATTORNEY
   *
   * - INSURANCE
   *
   * - RENT_TO_OWN
   *
   * - COLLECTION_AGENCY
   *
   * - ORIGINATOR
   *
   * - AUTO
   */
  creditorType?: InputMaybe<Scalars['String']['input']>;
  /** Current balance */
  currentBalance?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Debt type
   *
   * IMPORTANT: This field does not affect the underwriting result.
   */
  debtType?: InputMaybe<Scalars['String']['input']>;
  /**
   * account rating /delinquency value
   *
   * IMPORTANT: This field does not affect the underwriting result.
   */
  delinquency?: InputMaybe<Scalars['String']['input']>;
  /**
   * ECOA Code
   *
   * Values:
   * - "I" (Individual)
   *
   * - "M" (Maker)
   *
   * - "C" (Comaker)
   *
   * - "J" (Joint)
   *
   * - "A" (AuthorizedUser)
   *
   * - "S" (OnBehalfOf)
   *
   * - "P" (JointParticipating)
   *
   * - "U" (Undesignated)
   *
   * - "T" (Terminated)
   *
   * - "X" (Deceased)
   */
  ecoaCode?: InputMaybe<Scalars['String']['input']>;
  /**
   * Optional field to add reasons why debt was selected for program enrollment even after failing the underwriting checks.
   *
   * IMPORTANT: This field does not affect the underwriting result.
   */
  exceptions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Optional field set by the integrating CRM to identify the debt in its system.
   *
   * IMPORTANT: This field does not affect the underwriting result.
   */
  externalCrmId?: InputMaybe<Scalars['String']['input']>;
  /**
   * This is replaced by accountNumber
   * @deprecated Use accountNumber instead
   * @deprecated Use accountNumber instead
   */
  externalDebtId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Identify if this debts most recent payment was made.
   *
   * Values:
   *
   * - true
   *
   * - false
   */
  hasLastPayment?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Identify if proof of liability has been provided for the debt.
   *
   *  Values:
   *
   *  - true
   *
   *  - false
   *
   * IMPORTANT: This field does not affect the underwriting result.
   */
  hasProofOfLiability?: InputMaybe<Scalars['Boolean']['input']>;
  /** Debt ID. Required for updating existing debts. Leave empty when adding new manual debts. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Identify if the debt is in collection.
   *
   * Values:
   *
   * - true
   *
   * - false
   */
  isCollection?: InputMaybe<Scalars['Boolean']['input']>;
  /** True/False flag to identify if this debt is selected for program enrollment */
  isSelected?: InputMaybe<Scalars['Boolean']['input']>;
  /** Date of last payment in YYYY-MM-DD format */
  lastPaymentDate?: InputMaybe<Scalars['String']['input']>;
  /** Monthly payment */
  monthlyPayment?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Narrative codes that might include bankcruptcy codes.
   *
   * These values come from the credit report and are different from vendor to vendor.
   */
  narrativeCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The date when the non-applicant waiver has been signed in YYYY-MM-DD format.
   *
   * Only applicable to JOINT debt.
   *
   * IMPORTANT: This field does not affect the underwriting result.
   */
  nawSignedDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * URL to the non-applicant waiver document's file
   *
   * Only applicable to JOINT debt.
   *
   * IMPORTANT: This field does not affect the underwriting result.
   */
  nawUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Notes
   *
   * IMPORTANT: This field does not affect the underwriting result.
   */
  notes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Debt open date in YYYY-MM-DD format
   *
   * IMPORTANT: This field does not affect the underwriting result.
   */
  openDate?: InputMaybe<Scalars['String']['input']>;
  /** Original balance as of the date the credit report was originally pulled */
  originalBalance?: InputMaybe<Scalars['Float']['input']>;
  /** Original creditor name from credit report. */
  originalCreditorName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Portfolio type
   *
   * Values:
   *
   * - OPEN
   *
   * - REVOLVING
   *
   * - CREDIT_LINE
   *
   * - INSTALLMENT
   */
  portfolioType?: InputMaybe<Scalars['String']['input']>;
  /**
   * Remarks
   *
   * IMPORTANT: This field does not affect the underwriting result.
   */
  remarks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** V2: Debt information with underwriting results. All boolean filter check fields are removed. */
export type UwResultDebtV2 = {
  __typename?: 'UwResultDebtV2';
  /** Debt account number */
  accountNumber?: Maybe<Scalars['String']['output']>;
  /** Account type */
  accountType?: Maybe<Scalars['String']['output']>;
  /** Primary applicant ID */
  applicantId?: Maybe<Scalars['String']['output']>;
  /** Bankruptcy Record Date. This come from the credit report and does not need to be updated. */
  bankruptcyDateFiled?: Maybe<Scalars['String']['output']>;
  /** Secondary applicant ID, if applicable (For JOINT application only) */
  coApplicantId?: Maybe<Scalars['String']['output']>;
  /** Only applicable to JOINT debt. True/False flag to identify if this debt is selected by the co-applicant */
  coApplicantIsSelected?: Maybe<Scalars['Boolean']['output']>;
  /** Creditor ID from Forth */
  creditorId?: Maybe<Scalars['ID']['output']>;
  /** creditor name */
  creditorName?: Maybe<Scalars['String']['output']>;
  /** creditor type */
  creditorType?: Maybe<Scalars['String']['output']>;
  /** Current debt balance */
  currentBalance?: Maybe<Scalars['Float']['output']>;
  /** Debt type */
  debtType?: Maybe<Scalars['String']['output']>;
  /** account rating / delinquency value */
  delinquency?: Maybe<Scalars['String']['output']>;
  /** ECOA Code */
  ecoaCode?: Maybe<Scalars['String']['output']>;
  /** Identify the eligibility status */
  eligibilityStatus: EligibilityStatus;
  /** List of reasons the eligibility status is being overridden */
  exceptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Optional field to identify the debt in the requesting CRM */
  externalCrmId?: Maybe<Scalars['String']['output']>;
  /**
   * This is replaced by accountNumber
   * @deprecated Use accountNumber instead
   * @deprecated Use accountNumber instead
   */
  externalDebtId?: Maybe<Scalars['ID']['output']>;
  /** Forth Debt Type ID */
  forthDebtTypeId?: Maybe<Scalars['String']['output']>;
  /** True/False flag to identify if last payment was made */
  hasLastPayment?: Maybe<Scalars['Boolean']['output']>;
  /** Has provided proof of liability */
  hasProofOfLiability?: Maybe<Scalars['Boolean']['output']>;
  /** History of all the updates made to this debt */
  history?: Maybe<Array<Maybe<UwResultDebtHistory>>>;
  /** JSON version of history with non-existent attributes excluded */
  historyJson?: Maybe<Scalars['JSON']['output']>;
  /** Unique identifier for the debt */
  id: Scalars['ID']['output'];
  /** Flag to show if the debt is in collection */
  isCollection?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if the eligiblity status is being overriden */
  isOverridden?: Maybe<Scalars['Boolean']['output']>;
  /** True/False flag to identify if this debt is selected for program enrollment */
  isSelected: Scalars['Boolean']['output'];
  /** Date of the last payment */
  lastPaymentDate?: Maybe<Scalars['String']['output']>;
  /** Monthly payment */
  monthlyPayment?: Maybe<Scalars['Float']['output']>;
  /** Narrative codes that might include bankruptcy codes */
  narrativeCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Only applicable to JOINT debt. The date when the non-applicant waiver has been signed. */
  nawSignedDate?: Maybe<Scalars['Date']['output']>;
  /** Only applicable to JOINT debt. The url to the non-applicant waiver document's file */
  nawUrl?: Maybe<Scalars['String']['output']>;
  /** Debt Notes */
  notes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Date debt was opened */
  openDate?: Maybe<Scalars['String']['output']>;
  /** Original debt balance */
  originalBalance?: Maybe<Scalars['Float']['output']>;
  /** Original creditor name */
  originalCreditorName?: Maybe<Scalars['String']['output']>;
  /** Parent creditor ID */
  parentCreditorId?: Maybe<Scalars['String']['output']>;
  /** Parent creditor name */
  parentCreditorName?: Maybe<Scalars['String']['output']>;
  /** Portfolio type */
  portfolioType?: Maybe<Scalars['String']['output']>;
  /** Remarks */
  remarks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Source of the debt entry can be MANUAL or CREDIT_REPORT */
  source: Scalars['String']['output'];
};

/** Edge type for Uw Results. */
export type UwResultEdge = {
  __typename?: 'UwResultEdge';
  /** Cursor for pagination */
  cursor: Scalars['String']['output'];
  /** List of eligibility errors for this result */
  errors?: Maybe<Array<Maybe<EligibilityResponseError>>>;
  /** The underwriting eligibility result */
  node?: Maybe<UwEligibilityResult>;
};

/** V2: Edge type for Uw Results. */
export type UwResultEdgeV2 = {
  __typename?: 'UwResultEdgeV2';
  /** Cursor for pagination */
  cursor: Scalars['String']['output'];
  /** List of eligibility errors grouped by debtId for this result */
  errors?: Maybe<Array<Maybe<EligibilityResponseErrorV2>>>;
  /** The underwriting eligibility result with filter fields removed */
  node?: Maybe<UwEligibilityResultV2>;
};

/** Historical record of changes made to the underwriting result */
export type UwResultHistory = {
  __typename?: 'UwResultHistory';
  /** Applicant information at this revision */
  applicantInfo?: Maybe<ApplicantInfo>;
  /** The revision number this history entry was created from */
  fromRevision?: Maybe<Scalars['Int']['output']>;
  /** Lead ID at this revision */
  leadId?: Maybe<Scalars['String']['output']>;
  /** User ID who made this update */
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

/** V2: Historical record of changes made to the underwriting result. */
export type UwResultHistoryV2 = {
  __typename?: 'UwResultHistoryV2';
  /** Applicant information at this revision */
  applicantInfo?: Maybe<ApplicantInfoV2>;
  /** The revision number this history entry was created from */
  fromRevision?: Maybe<Scalars['Int']['output']>;
  /** Lead ID at this revision */
  leadId?: Maybe<Scalars['String']['output']>;
  /** User ID who made this update */
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

/** Ordering options for UwResults. */
export type UwResultOrder = {
  /** Direction of ordering (ASC or DESC) */
  direction: OrderDirection;
  /** Field to order by */
  field: UwResultOrderField;
};

/** Fields that can be ordered in Uw Results. */
export enum UwResultOrderField {
  /** Order by creation date */
  CreatedAt = 'createdAt',
  /** Order by requesting organization contact ID */
  ReqOrgContactId = 'reqOrgContactId'
}

/** Input for updating SINGLE or JOINT_APPLICANT underwriting */
export type UwResultUpdateFieldsInput = {
  /** Application debts */
  debts?: InputMaybe<Array<InputMaybe<UwResultDebtUpdateInput>>>;
};

/** Input for updating an existing underwriting result. Contains the UW result ID, revision, and fields to update. */
export type UwResultUpdateInput = {
  /** Additional info */
  additionalInfo?: InputMaybe<AdditionalInfoInput>;
  /** Agent userId set by the integrating CRM to identify the agent in its system. */
  agentAssigned?: InputMaybe<Scalars['String']['input']>;
  /** Applicant contact information */
  applicantContactInfo: ApplicantContactInfoUpdateInput;
  /**
   * Applicant debts (tradelines).
   *
   * Used to add/remove manual debts for the applicant.
   *
   * Used to update credit report debts for the applicant.
   */
  applicantUwResult?: InputMaybe<UwResultUpdateFieldsInput>;
  /** Budget */
  budget?: InputMaybe<BudgetInput>;
  /** Co-applicant contact information. Required for JOINT application. */
  coApplicantContactInfo?: InputMaybe<ApplicantContactInfoUpdateInput>;
  /**
   * Co-applicant debts (tradelines).
   *
   * Used to add/remove manual debts for the co-applicant.
   *
   * Used to update credit report debts for the co-applicant.
   */
  coApplicantUwResult?: InputMaybe<UwResultUpdateFieldsInput>;
  /** Underwriting document ID that is being updated */
  id: Scalars['ID']['input'];
  /**
   * Joint debts (tradelines).
   *
   * Used to add/remove manual joint debts.
   *
   * Used to update credit report joint debts.
   */
  jointUwResult?: InputMaybe<JointUwResultUpdateFieldsInput>;
  /** Lead ID set by the integrating CRM to identify the lead in its system. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** Enrollment payment plan */
  plan?: InputMaybe<PlanInput>;
  /**
   * Revision number that is being updated.
   *
   * Revision is used to track the changes made to the underwriting document.
   *
   * Can be used to start a new revision based any previous revision.
   */
  revision: Scalars['Int']['input'];
  /** Agent userId set by the integrating CRM to identify the agent in its system. */
  updatedBy: Scalars['ID']['input'];
};

/** V2: Input for updating an existing underwriting result. Contains the UW result ID, revision, and fields to update. */
export type UwResultUpdateInputV2 = {
  /** Additional info */
  additionalInfo?: InputMaybe<AdditionalInfoInput>;
  /** Agent userId set by the integrating CRM to identify the agent in its system. */
  agentAssigned?: InputMaybe<Scalars['String']['input']>;
  /** Applicant contact information */
  applicantContactInfo: ApplicantContactInfoUpdateInput;
  /**
   * Applicant debts (tradelines).
   *
   * Used to add/remove manual debts for the applicant.
   *
   * Used to update credit report debts for the applicant.
   */
  applicantUwResult?: InputMaybe<UwResultUpdateFieldsInput>;
  /** Budget with itemized income and expense breakdown */
  budget?: InputMaybe<BudgetInputV2>;
  /** Co-applicant contact information. Required for JOINT application. */
  coApplicantContactInfo?: InputMaybe<ApplicantContactInfoUpdateInput>;
  /**
   * Co-applicant debts (tradelines).
   *
   * Used to add/remove manual debts for the co-applicant.
   *
   * Used to update credit report debts for the co-applicant.
   */
  coApplicantUwResult?: InputMaybe<UwResultUpdateFieldsInput>;
  /** Underwriting document ID that is being updated */
  id: Scalars['ID']['input'];
  /**
   * Joint debts (tradelines).
   *
   * Used to add/remove manual joint debts.
   *
   * Used to update credit report joint debts.
   */
  jointUwResult?: InputMaybe<JointUwResultUpdateFieldsInput>;
  /** Lead ID set by the integrating CRM to identify the lead in its system. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** Enrollment payment plan */
  plan?: InputMaybe<PlanInputV2>;
  /**
   * Revision number that is being updated.
   *
   * Revision is used to track the changes made to the underwriting document.
   *
   * Can be used to start a new revision based any previous revision.
   */
  revision: Scalars['Int']['input'];
  /** Agent userId set by the integrating CRM to identify the agent in its system. */
  updatedBy: Scalars['ID']['input'];
};

/** V2: Applicant-level underwriting result. */
export type UwResultV2 = {
  __typename?: 'UwResultV2';
  /** Applicant information including itemized budget breakdown. */
  applicantInfo: ApplicantInfoV2;
  /** Type of application can be SINGLE or JOINT */
  applicationType?: Maybe<Scalars['String']['output']>;
  /** Co-Applicant normalized credit report ID from the credit report service */
  coCreditReportId?: Maybe<Scalars['String']['output']>;
  /** Date and time this underwriting document revision was created */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** Applicant normalized credit report ID from the credit report service */
  creditReportId?: Maybe<Scalars['String']['output']>;
  /**
   * Credit report source
   *
   * Values:
   *
   * - SPINWHEEL
   *
   * - CRS_TRANSUNION
   *
   * - CRS_EQUIFAX
   */
  creditReportSource: Scalars['String']['output'];
  /** List of debts with eligibility results. */
  debts: Array<Maybe<UwResultDebtV2>>;
  /** Underwriting document ID */
  id: Scalars['ID']['output'];
  /** Applicant leadId set by the integrating CRM to identify the lead in its system. */
  leadId?: Maybe<Scalars['String']['output']>;
  /** Requesting organization contact ID */
  reqOrgContactId?: Maybe<Scalars['String']['output']>;
  /** Requesting organization ID. Based on the credentials of the system making the request. */
  reqOrgId?: Maybe<Scalars['String']['output']>;
  /** Document revision number. Each time the document is edited the revision number is incremented */
  revision: Scalars['Int']['output'];
  /** Audit history of edits applied to the top level fields of this application */
  rootHistory?: Maybe<Array<Maybe<UwResultHistoryV2>>>;
  /**
   * The organization underwriting rules used for this application.
   *
   * Values:
   *
   * - ALV
   *
   * - GLG
   */
  uwOrgId?: Maybe<Scalars['String']['output']>;
};

/** Where conditions for filtering Uw Results. */
export type UwResultWhereInput = {
  /** Filter by lead ID */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** Filter by requesting organization contact ID */
  reqOrgContactId?: InputMaybe<Scalars['String']['input']>;
  /** Filter by requesting organization ID */
  reqOrgId?: InputMaybe<Scalars['String']['input']>;
  /** Filter by specific revision number */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** Filter by underwriting result ID */
  uwResultId?: InputMaybe<Scalars['String']['input']>;
};

/** UwResultsResponse */
export type UwResultsResponse = {
  __typename?: 'UwResultsResponse';
  /** Uw Result Connection. */
  data?: Maybe<UwResultConnection>;
  /** Error(s) list */
  errors?: Maybe<Array<Maybe<UwResultsResponseError>>>;
};

/** UwResultsResponse Error */
export type UwResultsResponseError = {
  __typename?: 'UwResultsResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** V2: UwResultsResponse with filter fields removed from result data. */
export type UwResultsResponseV2 = {
  __typename?: 'UwResultsResponseV2';
  /** Uw Result Connection. */
  data?: Maybe<UwResultConnectionV2>;
  /** Error(s) list */
  errors?: Maybe<Array<Maybe<UwResultsResponseError>>>;
};

export type CheckApplicantEligibilityV2MutationVariables = Exact<{
  applicationType: ApplicationTypeInput;
  input: UwResultCheckInputV2;
}>;


export type CheckApplicantEligibilityV2Mutation = { __typename?: 'Mutation', checkApplicantEligibilityV2: { __typename?: 'EligibilityResponseV2', data?: { __typename?: 'UwEligibilityResultV2', id: string, revision: number, maxTerm?: number | null, createdAt?: any | null, applicationUwResult?: { __typename?: 'ApplicationUwResultV2', applicantPrequalified: boolean, applicationType?: string | null, totalDebt?: number | null, totalEligibleDebt?: number | null, tradelineMetadata?: { __typename?: 'TradelineMetadata', enrolledUpstartDebtAccountNumbers?: Array<string | null> | null, enrolledCapitalOneDebtAccountNumbers?: Array<string | null> | null, enrolledDiscoverDebtAccountNumbers?: Array<string | null> | null } | null } | null, applicantUwResult?: { __typename?: 'UwResultV2', id: string, uwOrgId?: string | null, reqOrgId?: string | null, revision: number, reqOrgContactId?: string | null, creditReportId?: string | null, coCreditReportId?: string | null, leadId?: string | null, applicationType?: string | null, creditReportSource: string, createdAt?: any | null, applicantInfo: { __typename?: 'ApplicantInfoV2', agentAssigned?: string | null, publicRecords?: Array<{ __typename?: 'PublicRecord', bankruptcyCode: string, bankruptcyDateFiled?: string | null, bankruptcyDispositionType?: string | null } | null> | null, applicantContactInfo?: { __typename?: 'ApplicantContactInfo', employerName?: string | null, isMarriedToCoApplicant?: boolean | null, homeAddress?: string | null, applicantState: string, ssn?: string | null, dob?: string | null, phone?: string | null, cellPhone?: string | null, firstName?: string | null, lastName?: string | null, jobTitle?: string | null, email?: string | null, hardship?: string | null, filedBankruptcy?: string | null, routingNumber?: string | null, bankName?: string | null, bankAccountNumber?: string | null, bankAccountHolderName?: string | null, bankAccountType?: string | null, eligibilityReqMilitary?: string | null, eligibilityReqCreditCounselling?: string | null, eligibilityReqBankruptcy?: string | null, eligibilityReqFederalGovDebt?: string | null, eligibilityReqSecuredDebt?: string | null, belongsToCompanyId?: string | null } | null, coApplicantContactInfo?: { __typename?: 'ApplicantContactInfo', employerName?: string | null, isMarriedToCoApplicant?: boolean | null, homeAddress?: string | null, applicantState: string, ssn?: string | null, dob?: string | null, phone?: string | null, cellPhone?: string | null, firstName?: string | null, lastName?: string | null, jobTitle?: string | null, email?: string | null, hardship?: string | null, filedBankruptcy?: string | null, routingNumber?: string | null, bankName?: string | null, bankAccountNumber?: string | null, bankAccountHolderName?: string | null, bankAccountType?: string | null, eligibilityReqMilitary?: string | null, eligibilityReqCreditCounselling?: string | null, eligibilityReqBankruptcy?: string | null, eligibilityReqFederalGovDebt?: string | null, eligibilityReqSecuredDebt?: string | null, belongsToCompanyId?: string | null } | null, plan?: { __typename?: 'Plan', frequency?: string | null, firstPaymentAmount?: number | null, secondPaymentAmount?: number | null, firstPaymentDate?: string | null, secondPaymentDate?: string | null, firstDraftException?: string | null, programTerm?: number | null, feePercentage?: number | null, epfReduction?: string | null, planId?: string | null, depositIntervals?: string | null, includeSentryFee?: boolean | null } | null, budget?: { __typename?: 'BudgetV2', income?: { __typename?: 'IncomeBreakdown', gross?: number | null, business?: number | null, pension?: number | null, otherIncome?: number | null } | null, expenses?: { __typename?: 'ExpensesBreakdown', housing?: number | null, transportation?: number | null, personal?: number | null, health?: number | null, groceries?: number | null, misc?: number | null, dependents?: number | null, loans?: number | null, tax?: number | null, involuntary?: number | null, insurance?: number | null, court?: number | null, charitableContributions?: number | null } | null } | null, additionalInfo?: { __typename?: 'AdditionalInfo', debtAmountException?: string | null, includeUnacceptableCreditor?: boolean | null, termExtensionException?: number | null, standaloneDebtsException?: boolean | null, eomFirstDraftDateException?: boolean | null } | null }, debts: Array<{ __typename?: 'UwResultDebtV2', id: string, applicantId?: string | null, coApplicantId?: string | null, externalDebtId?: string | null, accountNumber?: string | null, externalCrmId?: string | null, isSelected: boolean, coApplicantIsSelected?: boolean | null, eligibilityStatus: EligibilityStatus, isOverridden?: boolean | null, exceptions?: Array<string | null> | null, historyJson?: any | null, source: string, creditorName?: string | null, parentCreditorName?: string | null, parentCreditorId?: string | null, originalCreditorName?: string | null, creditorId?: string | null, creditorType?: string | null, ecoaCode?: string | null, accountType?: string | null, portfolioType?: string | null, debtType?: string | null, openDate?: string | null, lastPaymentDate?: string | null, hasLastPayment?: boolean | null, narrativeCodes?: Array<string | null> | null, bankruptcyDateFiled?: string | null, currentBalance?: number | null, originalBalance?: number | null, nawSignedDate?: any | null, nawUrl?: string | null, hasProofOfLiability?: boolean | null, forthDebtTypeId?: string | null, remarks?: Array<string | null> | null, isCollection?: boolean | null, delinquency?: string | null, monthlyPayment?: number | null, notes?: Array<string | null> | null, history?: Array<{ __typename?: 'UwResultDebtHistory', isSelected?: boolean | null, coApplicantIsSelected?: boolean | null, exceptions?: Array<string | null> | null, source?: string | null, creditorName?: string | null, originalCreditorName?: string | null, creditorType?: string | null, ecoaCode?: string | null, accountType?: string | null, portfolioType?: string | null, debtType?: string | null, openDate?: string | null, lastPaymentDate?: string | null, hasLastPayment?: boolean | null, currentBalance?: number | null, originalBalance?: number | null, narrativeCodes?: Array<string | null> | null, bankruptcyDateFiled?: string | null, nawSignedDate?: any | null, nawUrl?: string | null, hasProofOfLiability?: boolean | null, isCollection?: boolean | null, remarks?: Array<string | null> | null, monthlyPayment?: number | null, updatedBy?: string | null, fromRevision?: number | null } | null> | null } | null>, rootHistory?: Array<{ __typename?: 'UwResultHistoryV2', leadId?: string | null, updatedBy?: string | null, fromRevision?: number | null } | null> | null } | null, tradelineMetadata?: { __typename?: 'TradelineMetadata', enrolledUpstartDebtAccountNumbers?: Array<string | null> | null, enrolledCapitalOneDebtAccountNumbers?: Array<string | null> | null, enrolledDiscoverDebtAccountNumbers?: Array<string | null> | null } | null } | null, errors?: Array<{ __typename?: 'EligibilityResponseErrorV2', debtId?: string | null, message?: Array<string | null> | null } | null> | null } };

export type GetUwConfigQueryVariables = Exact<{
  reqOrgId: Scalars['String']['input'];
}>;


export type GetUwConfigQuery = { __typename?: 'Query', uwConfig?: { __typename?: 'UwConfigResponse', data?: { __typename?: 'UwConfig', reqOrgId?: string | null } | null, errors?: Array<{ __typename?: 'UwConfigResponseError', message?: string | null } | null> | null } | null };


export const CheckApplicantEligibilityV2Document = gql`
    mutation CheckApplicantEligibilityV2($applicationType: ApplicationTypeInput!, $input: UwResultCheckInputV2!) {
  checkApplicantEligibilityV2(applicationType: $applicationType, input: $input) {
    data {
      id
      revision
      applicationUwResult {
        applicantPrequalified
        applicationType
        totalDebt
        totalEligibleDebt
        tradelineMetadata {
          enrolledUpstartDebtAccountNumbers
          enrolledCapitalOneDebtAccountNumbers
          enrolledDiscoverDebtAccountNumbers
        }
      }
      applicantUwResult {
        id
        uwOrgId
        reqOrgId
        revision
        reqOrgContactId
        creditReportId
        coCreditReportId
        leadId
        applicationType
        applicantInfo {
          publicRecords {
            bankruptcyCode
            bankruptcyDateFiled
            bankruptcyDispositionType
          }
          applicantContactInfo {
            employerName
            isMarriedToCoApplicant
            homeAddress
            applicantState
            ssn
            dob
            phone
            cellPhone
            firstName
            lastName
            jobTitle
            email
            hardship
            filedBankruptcy
            routingNumber
            bankName
            bankAccountNumber
            bankAccountHolderName
            bankAccountType
            eligibilityReqMilitary
            eligibilityReqCreditCounselling
            eligibilityReqBankruptcy
            eligibilityReqFederalGovDebt
            eligibilityReqSecuredDebt
            belongsToCompanyId
          }
          coApplicantContactInfo {
            employerName
            isMarriedToCoApplicant
            homeAddress
            applicantState
            ssn
            dob
            phone
            cellPhone
            firstName
            lastName
            jobTitle
            email
            hardship
            filedBankruptcy
            routingNumber
            bankName
            bankAccountNumber
            bankAccountHolderName
            bankAccountType
            eligibilityReqMilitary
            eligibilityReqCreditCounselling
            eligibilityReqBankruptcy
            eligibilityReqFederalGovDebt
            eligibilityReqSecuredDebt
            belongsToCompanyId
          }
          agentAssigned
          plan {
            frequency
            firstPaymentAmount
            secondPaymentAmount
            firstPaymentDate
            secondPaymentDate
            firstDraftException
            programTerm
            feePercentage
            epfReduction
            planId
            depositIntervals
            includeSentryFee
          }
          budget {
            income {
              gross
              business
              pension
              otherIncome
            }
            expenses {
              housing
              transportation
              personal
              health
              groceries
              misc
              dependents
              loans
              tax
              involuntary
              insurance
              court
              charitableContributions
            }
          }
          additionalInfo {
            debtAmountException
            includeUnacceptableCreditor
            termExtensionException
            standaloneDebtsException
            eomFirstDraftDateException
          }
        }
        debts {
          id
          applicantId
          coApplicantId
          externalDebtId
          accountNumber
          externalCrmId
          isSelected
          coApplicantIsSelected
          eligibilityStatus
          isOverridden
          exceptions
          history {
            isSelected
            coApplicantIsSelected
            exceptions
            source
            creditorName
            originalCreditorName
            creditorType
            ecoaCode
            accountType
            portfolioType
            debtType
            openDate
            lastPaymentDate
            hasLastPayment
            currentBalance
            originalBalance
            narrativeCodes
            bankruptcyDateFiled
            nawSignedDate
            nawUrl
            hasProofOfLiability
            isCollection
            remarks
            monthlyPayment
            updatedBy
            fromRevision
          }
          historyJson
          source
          creditorName
          parentCreditorName
          parentCreditorId
          originalCreditorName
          creditorId
          creditorType
          ecoaCode
          accountType
          portfolioType
          debtType
          openDate
          lastPaymentDate
          hasLastPayment
          narrativeCodes
          bankruptcyDateFiled
          currentBalance
          originalBalance
          nawSignedDate
          nawUrl
          hasProofOfLiability
          forthDebtTypeId
          remarks
          isCollection
          delinquency
          monthlyPayment
          notes
        }
        creditReportSource
        rootHistory {
          leadId
          updatedBy
          fromRevision
        }
        createdAt
      }
      tradelineMetadata {
        enrolledUpstartDebtAccountNumbers
        enrolledCapitalOneDebtAccountNumbers
        enrolledDiscoverDebtAccountNumbers
      }
      maxTerm
      createdAt
    }
    errors {
      debtId
      message
    }
  }
}
    `;
export const GetUwConfigDocument = gql`
    query GetUwConfig($reqOrgId: String!) {
  uwConfig(reqOrgId: $reqOrgId) {
    data {
      reqOrgId
    }
    errors {
      message
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CheckApplicantEligibilityV2(variables: CheckApplicantEligibilityV2MutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CheckApplicantEligibilityV2Mutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CheckApplicantEligibilityV2Mutation>({ document: CheckApplicantEligibilityV2Document, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CheckApplicantEligibilityV2', 'mutation', variables);
    },
    GetUwConfig(variables: GetUwConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetUwConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUwConfigQuery>({ document: GetUwConfigDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetUwConfig', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;