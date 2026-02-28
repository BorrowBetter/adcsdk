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
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AddLeadIdToCreditReportInput = {
  /** Internal credit report ID */
  creditReportId: Scalars['String']['input'];
  /** Sigma lead ID */
  leadId: Scalars['String']['input'];
};

/** Alternative name associated with the applicant */
export type AlternativeName = {
  __typename?: 'AlternativeName';
  /** Alternative first name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Alternative last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Full alternative name (unparsed) */
  unparsedName?: Maybe<Scalars['String']['output']>;
};

/** Credit report pull sources for the pullCreditReport mutation */
export enum Credit_Report_Pull_Source {
  /** Product: efx1bReportScore | Data Provider: Array */
  ArrayEquifax = 'ARRAY_EQUIFAX',
  /** Product: efx1bReportScore | Data Provider: Array */
  ArrayEquifaxKba = 'ARRAY_EQUIFAX_KBA',
  /** Product: efx-prequal-vantage4 | Data Provider: CRS */
  CrsEquifax = 'CRS_EQUIFAX',
  /** Product: standard/tu-prequal-vantage4 | Data Provider: CRS */
  CrsStandardPrequalVantage4Tu = 'CRS_STANDARD_PREQUAL_VANTAGE4_TU',
  /** Product: basic/tu-prequal-vantage4 | Data Provider: CRS */
  CrsTransunion = 'CRS_TRANSUNION',
  /** Product: EquifaxVantageScore3.0 | Data Provider: Spinwheel */
  Spinwheel = 'SPINWHEEL'
}

export type CreateCreditorError = {
  __typename?: 'CreateCreditorError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** Input for creating a new creditor entry by using the creditor name */
export type CreateCreditorInput = {
  /** Creditor name */
  creditorName: Scalars['String']['input'];
};

export type CreateCreditorResponse = {
  __typename?: 'CreateCreditorResponse';
  /** Success message */
  data?: Maybe<CreateCreditorResult>;
  /** List of error messages */
  errors?: Maybe<Array<Maybe<CreateCreditorError>>>;
};

/** Result of creating or looking up a creditor */
export type CreateCreditorResult = {
  __typename?: 'CreateCreditorResult';
  /** Unique identifier for the creditor */
  creditorId: Scalars['String']['output'];
  /** Name of the creditor */
  creditorName: Scalars['String']['output'];
  /** Unique identifier for the parent creditor (if applicable) */
  parentCreditorId?: Maybe<Scalars['String']['output']>;
  /** Name of the parent creditor (if applicable) */
  parentCreditorName?: Maybe<Scalars['String']['output']>;
};

/** Input to create a user verification object (this is used in consumer-facing workflow w.r.t Array-Equifax) */
export type CreateUserVerificationInput = {
  /** Contact address city */
  city: Scalars['String']['input'];
  /** Contact date of birth in yyyy-mm-dd format 1990-04-12 */
  dob: Scalars['String']['input'];
  /** Contact email address */
  email: Scalars['String']['input'];
  /** Contact first name */
  firstName: Scalars['String']['input'];
  /** Full address street */
  fullAddress: Scalars['String']['input'];
  /** Contact last name */
  lastName: Scalars['String']['input'];
  /** Contact middle name */
  middleName?: InputMaybe<Scalars['String']['input']>;
  /** Contact phone number */
  phone: Scalars['String']['input'];
  /** Reqesting organization contact ID */
  reqOrgContactId: Scalars['String']['input'];
  /** Contact social security number */
  ssn: Scalars['String']['input'];
  /** Contact address state */
  state: Scalars['String']['input'];
  /** Verification type */
  verificationType: Scalars['String']['input'];
  /** Contact address zip code */
  zip: Scalars['String']['input'];
};

/** Create user verification response */
export type CreateUserVerificationResponse = {
  __typename?: 'CreateUserVerificationResponse';
  /** Created user verification data */
  data?: Maybe<UserVerificationNode>;
  /** List of error messages */
  errors?: Maybe<Array<Maybe<CreateUserVerificationResponseError>>>;
};

/** CreateUserVerificationResponseError object */
export type CreateUserVerificationResponseError = {
  __typename?: 'CreateUserVerificationResponseError';
  /** CreateUserVerification error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** Pagination connection for Credit Reports. */
export type CreditReportConnection = {
  __typename?: 'CreditReportConnection';
  /** List of credit report edges */
  edges: Array<Maybe<CreditReportEdge>>;
  /** Pagination information */
  pageInfo: PageInfo;
  /** Total number of credit reports matching the query */
  totalCount: Scalars['Int']['output'];
};

/** Credit Report Debt */
export type CreditReportDebt = {
  __typename?: 'CreditReportDebt';
  /** Original credit report account number */
  accountNumber?: Maybe<Scalars['String']['output']>;
  /** Account type */
  accountType?: Maybe<Scalars['String']['output']>;
  /** Applicant Id */
  applicantId?: Maybe<Scalars['String']['output']>;
  /** Applicants state of residence. */
  applicantState?: Maybe<Scalars['String']['output']>;
  /** Bankruptcy date filed */
  bankruptcyDateFiled?: Maybe<Scalars['String']['output']>;
  /** CoApplicant Id */
  coApplicantId?: Maybe<Scalars['String']['output']>;
  /** creditor ID */
  creditorId?: Maybe<Scalars['String']['output']>;
  /** Creditor name from credit report */
  creditorName?: Maybe<Scalars['String']['output']>;
  /** Creditor type */
  creditorType?: Maybe<Scalars['String']['output']>;
  /** Current debt balance */
  currentBalance?: Maybe<Scalars['Float']['output']>;
  /** Debt type */
  debtType?: Maybe<Scalars['String']['output']>;
  /** account rating /delinquency value */
  delinquency?: Maybe<Scalars['String']['output']>;
  /** ECOA code */
  ecoaCode?: Maybe<Scalars['String']['output']>;
  /**
   * This is replaced by accountNumber
   * @deprecated Use accountNumber instead
   * @deprecated Use accountNumber instead
   */
  externalDebtId?: Maybe<Scalars['String']['output']>;
  /** Forth Debt Type ID */
  forthDebtTypeId?: Maybe<Scalars['String']['output']>;
  /** True if the most recent payment has been made as of the date this credit report was pulled */
  hasLastPayment?: Maybe<Scalars['Boolean']['output']>;
  /** Debt ID */
  id: Scalars['ID']['output'];
  /** Flag to show if the debt is in collection */
  isCollection?: Maybe<Scalars['Boolean']['output']>;
  /** Date of last payment */
  lastPaymentDate?: Maybe<Scalars['String']['output']>;
  /** Monthly payment */
  monthlyPayment?: Maybe<Scalars['Float']['output']>;
  /** Narrative codes that might include bankruptcy codes */
  narrativeCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Date the debt was opened */
  openDate?: Maybe<Scalars['String']['output']>;
  /** Original debt balance */
  originalBalance?: Maybe<Scalars['Float']['output']>;
  /** Original creditor name from credit report */
  originalCreditorName?: Maybe<Scalars['String']['output']>;
  /** Parent creditor ID */
  parentCreditorId?: Maybe<Scalars['String']['output']>;
  /** Parent creditor name */
  parentCreditorName?: Maybe<Scalars['String']['output']>;
  /** Portfolio type */
  portfolioType?: Maybe<Scalars['String']['output']>;
  /** Remarks */
  remarks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Edge type for Credit Reports. */
export type CreditReportEdge = {
  __typename?: 'CreditReportEdge';
  /** Cursor for pagination */
  cursor: Scalars['String']['output'];
  /** The credit report data */
  node?: Maybe<CreditReportNode>;
};

/** Credit Report Node */
export type CreditReportNode = {
  __typename?: 'CreditReportNode';
  /** Applicant's alternative names */
  applicantAlternativeNames?: Maybe<Array<Maybe<AlternativeName>>>;
  /** Applicant's dob */
  applicantDob?: Maybe<Scalars['String']['output']>;
  /** Applicant's first name */
  applicantFirstName?: Maybe<Scalars['String']['output']>;
  /** Applicant's last name */
  applicantLastName?: Maybe<Scalars['String']['output']>;
  /** Applicant's middle name */
  applicantMiddleName?: Maybe<Scalars['String']['output']>;
  /** State where customer resides */
  applicantResidenceState?: Maybe<Scalars['String']['output']>;
  /** Applicant's ssn name */
  applicantSsn?: Maybe<Scalars['String']['output']>;
  /** Date the credit report was created */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** Credit report user ID */
  creditReportUserId?: Maybe<Scalars['String']['output']>;
  /** Debts as JSON data */
  debts?: Maybe<Array<Maybe<CreditReportDebt>>>;
  /** File metadata. */
  fileMetadata?: Maybe<FileMetadata>;
  /** IN_PROGRESS, COMPLETED */
  fileStatus?: Maybe<Scalars['String']['output']>;
  /** Credit report ID */
  id: Scalars['ID']['output'];
  /** Sigma lead ID */
  leadId?: Maybe<Scalars['String']['output']>;
  /** Public records */
  publicRecords?: Maybe<Array<Maybe<PublicRecord>>>;
  /** Date the credit report was requested */
  reportRequestedAt?: Maybe<Scalars['Date']['output']>;
  /** Current status of the credit report: PENDING, IN_PROGRESS, COMPLETED, FAILED */
  reportStatus?: Maybe<Scalars['String']['output']>;
  /** Requesting organization contact ID */
  reqOrgContactId?: Maybe<Scalars['String']['output']>;
  /** Requesting organization ID */
  reqOrgId?: Maybe<Scalars['String']['output']>;
  /** Credit scores from various credit evaluation models */
  scores?: Maybe<Array<Maybe<Score>>>;
  /** Source of the credit report, e.g., Spinwheel, CRS Equifax, or CRS TransUnion */
  source?: Maybe<Scalars['String']['output']>;
};

/** Ordering options for Credit Reports. */
export type CreditReportOrder = {
  /** Order direction (ASC or DESC) */
  direction: OrderDirection;
  /** Field to order by */
  field: CreditReportOrderField;
};

/** Fields that can be ordered in Credit Reports. */
export enum CreditReportOrderField {
  /** Order by creation date */
  CreatedAt = 'createdAt',
  /** Order by requesting organization contact ID */
  ReqOrgContactId = 'reqOrgContactId'
}

/** Where conditions for filtering Credit Reports. */
export type CreditReportWhereInput = {
  /** List of credit report IDs to filter by. Maximum of 20 IDs allowed. */
  creditReportIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter by requesting organization contact ID */
  reqOrgContactId?: InputMaybe<Scalars['String']['input']>;
  /** Filter by credit report source (e.g., CRS_TRANSUNION, CRS_EQUIFAX, SPINWHEEL) */
  source?: InputMaybe<Scalars['String']['input']>;
};

/** CreditReportsResponse */
export type CreditReportsResponse = {
  __typename?: 'CreditReportsResponse';
  /** Credit Report Connection. */
  data?: Maybe<CreditReportConnection>;
  /** Error(s) mesage list */
  errors?: Maybe<Array<Maybe<CreditReportsResponseError>>>;
};

/** CreditReportsResponse Error */
export type CreditReportsResponseError = {
  __typename?: 'CreditReportsResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** Pagination connection for Creditors. */
export type CreditorConnection = {
  __typename?: 'CreditorConnection';
  /** List of creditor edges */
  edges: Array<Maybe<CreditorEdge>>;
  /** Pagination information */
  pageInfo: PageInfo;
  /** Total number of creditors matching the query */
  totalCount: Scalars['Int']['output'];
};

/** Edge type for Creditor. */
export type CreditorEdge = {
  __typename?: 'CreditorEdge';
  /** Cursor for pagination */
  cursor: Scalars['String']['output'];
  /** The creditor data */
  node?: Maybe<CreditorNode>;
};

/** Creditor Node */
export type CreditorNode = {
  __typename?: 'CreditorNode';
  /** Creditor created at date ISO format */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Creditor ID */
  creditorId: Scalars['ID']['output'];
  /** Creditor Name */
  creditorName: Scalars['String']['output'];
};

/** CreditorResponse */
export type CreditorResponse = {
  __typename?: 'CreditorResponse';
  /** Creditor Connection. */
  data?: Maybe<CreditorConnection>;
  /** Error(s) mesage list */
  errors?: Maybe<Array<Maybe<CreditorResponseError>>>;
};

/** CreditorResponse Error */
export type CreditorResponseError = {
  __typename?: 'CreditorResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** Where conditions for filtering Creditorslist. */
export type CreditorWhereInput = {
  /**
   * ISO time format with optional time offset.
   * Valid examples:-  2025-01-01T00:00:00.233Z | 2025-01-01T00:00:00.233 | 2025-01-01T00:00:00.233-0000 | 2025-01-01T00:00:00.233-00:00 | 2025-01-01T00:00:00.233+07:00
   */
  updatedAfter?: InputMaybe<Scalars['String']['input']>;
};

/** Input for Downloading the Credit Report Base-64 encoded PDF */
export type DownloadCreditReportInput = {
  /** Internal credit report ID */
  creditReportId: Scalars['String']['input'];
};

/** DownloadCreditReportResponse Response */
export type DownloadCreditReportResponse = {
  __typename?: 'DownloadCreditReportResponse';
  /** Base64-encoded PDF */
  data?: Maybe<Scalars['String']['output']>;
  /** Error(s) message list */
  errors?: Maybe<Array<Maybe<DownloadCreditReportResponseError>>>;
};

/** Download document Response Error */
export type DownloadCreditReportResponseError = {
  __typename?: 'DownloadCreditReportResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** File metadata */
export type FileMetadata = {
  __typename?: 'FileMetadata';
  /** File type */
  contentType?: Maybe<Scalars['String']['output']>;
  /** Credit report user ID */
  creditReportUserId?: Maybe<Scalars['String']['output']>;
  /** Document name */
  fileName?: Maybe<Scalars['String']['output']>;
  /** Size in bytes */
  fileSize?: Maybe<Scalars['String']['output']>;
  /** Requesting organization contact ID */
  reqOrgContactId?: Maybe<Scalars['String']['output']>;
  /** Credit Report Vendor source e.g. SPINWHEEL, CRS Equifax, or CRS TransUnion */
  source?: Maybe<Scalars['String']['output']>;
  /** Document type */
  type?: Maybe<Scalars['String']['output']>;
  /** ISO 8601 format date string */
  uploadDate?: Maybe<Scalars['String']['output']>;
};

/** Input for Getting Credit Report by creditReportId */
export type GetCreditReportInput = {
  /** Credit report ID */
  creditReportId: Scalars['String']['input'];
};

/** Get Credit Report Response */
export type GetCreditReportResponse = {
  __typename?: 'GetCreditReportResponse';
  /** Single CreditReport */
  data?: Maybe<CreditReportNode>;
  /** List of error messages */
  errors?: Maybe<Array<Maybe<GetCreditReportResponseError>>>;
};

/** Get Credit Report Response Error */
export type GetCreditReportResponseError = {
  __typename?: 'GetCreditReportResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** Input for Joint Credit Report */
export type JointCreditReportInput = {
  /** Credit report ID for the primary applicant */
  primaryReportId: Scalars['String']['input'];
  /** Credit report ID for the co-applicant/secondary applicant */
  secondaryReportId: Scalars['String']['input'];
};

/** Joint Credit Report Response */
export type JointCreditReportResponse = {
  __typename?: 'JointCreditReportResponse';
  data?: Maybe<JointCreditReportResponseResult>;
  errors?: Maybe<Array<Maybe<JointCreditReportResponseError>>>;
};

/** Joint Credit Report Response Error */
export type JointCreditReportResponseError = {
  __typename?: 'JointCreditReportResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type JointCreditReportResponseResult = {
  __typename?: 'JointCreditReportResponseResult';
  /** Credit report ID (for the jointly created report) */
  creditReportId: Scalars['String']['output'];
  /** Joint debts from both applicants */
  jointDebts?: Maybe<Array<Maybe<CreditReportDebt>>>;
  /** Co-applicant normalized credit report */
  normalizedCoApplicantReport?: Maybe<CreditReportNode>;
  /** Primary applicant normalized credit report */
  normalizedPrimaryApplicantReport?: Maybe<CreditReportNode>;
};

export type KbaAnswer = {
  /** Answer ID from list of options */
  answerId: Scalars['String']['input'];
  /** Question ID */
  questionId: Scalars['String']['input'];
};

/** KBA Question */
export type KbaQuestion = {
  __typename?: 'KbaQuestion';
  /** KBA Question ID */
  id: Scalars['String']['output'];
  /** KBA Questions answer options */
  options?: Maybe<Array<Maybe<KbaQuestionOption>>>;
  /** KBA Question */
  question: Scalars['String']['output'];
};

/** KBA Questions */
export type KbaQuestions = {
  __typename?: 'KbaQuestions';
  /** KBA Questions */
  questions?: Maybe<Array<Maybe<KbaQuestion>>>;
};

/** Input for KBA question request */
export type KbaQuestionsInput = {
  /** Customer address info */
  addressLine1: Scalars['String']['input'];
  /** Customer address info */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** Customer address info */
  city: Scalars['String']['input'];
  /** dob in yyyy-mm-dd format 1990-04-12 */
  dateOfBirth: Scalars['String']['input'];
  /** customer first name */
  firstName: Scalars['String']['input'];
  /** customer last name */
  lastName: Scalars['String']['input'];
  /** Requesting organization contact ID */
  reqOrgContactId: Scalars['String']['input'];
  /** Contact SSN without hyphens */
  ssn: Scalars['String']['input'];
  /** Customer address info */
  state: Scalars['String']['input'];
  /** Customer address info */
  zip: Scalars['String']['input'];
  /** Customer address info */
  zipExtension?: InputMaybe<Scalars['String']['input']>;
};

/** KBA Questions Response */
export type KbaQuestionsResponse = {
  __typename?: 'KbaQuestionsResponse';
  /** Success message */
  data?: Maybe<KbaQuestions>;
  /** List of errors */
  errors?: Maybe<Array<Maybe<SendKbaAnswersError>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Associate a Sigma lead ID with an existing credit report */
  addLeadIdToCreditReport: GetCreditReportResponse;
  /** Create a creditor using the creditor name. Return the creditor ID. If the creditor already exists then the existing creditor ID will be returned. */
  createCreditor: CreateCreditorResponse;
  /** Create a user verification object, used in consumer-facing workflow w.r.t Array-Equifax */
  createUserVerification: CreateUserVerificationResponse;
  /** Called by underwriting to create a joint credit report. Reports must be from same vendor. */
  jointCreditReport: JointCreditReportResponse;
  /**
   * Input: Intake a raw credit report data from supported vendors (CRS, Spinwheel)
   * Output: Normalized credit report and creditReportId required for underwriting.
   */
  normalizeRawReport: NormalizeRawReportResponse;
  /**
   * Pull a credit report from various credit bureaus. The credit report will be in a normalized common format.
   *
   * Available sources:
   * - SPINWHEEL: Requires reqOrgContactId and completed user verification
   * - CRS_TRANSUNION: Requires firstName, lastName, addressLine1, city, state, zip (ssn, dob optional)
   * - CRS_EQUIFAX: Requires firstName, lastName, ssn, city, state, addressLine1 (dob, zip optional)
   * - ARRAY_EQUIFAX: Requires firstName, lastName, ssn, dob, addressLine1, city, state, zip
   * - ARRAY_EQUIFAX_KBA: Requires userVerificationId from KBA verification
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU: Requires firstName, lastName, ssn, addressLine1, city, state, zip
   */
  pullCreditReport: PullCreditReportResponse;
  /** Spinwheel user verification/consent submit KBA answers (step 2 of 2) */
  sendKbaAnswers: SendKbaAnswersResponse;
  /** Send SMS verification code to customer for Spinwheel user verification/consent (step 1 of 2). Customer consent is required to pull Spinwheel credit report. */
  sendSMSVerificationCode: SmsVerificationResponse;
  /** Validate Spinwheel verification code sent to customer (step 2 of 2). This will give the requesting organzation consent to pull the Spinwheel credit report. */
  verifySMSCode: VerifySmsCodeResponse;
};


export type MutationAddLeadIdToCreditReportArgs = {
  input: AddLeadIdToCreditReportInput;
};


export type MutationCreateCreditorArgs = {
  input: CreateCreditorInput;
};


export type MutationCreateUserVerificationArgs = {
  input: CreateUserVerificationInput;
};


export type MutationJointCreditReportArgs = {
  input: JointCreditReportInput;
};


export type MutationNormalizeRawReportArgs = {
  input: NormalizeRawReportInput;
};


export type MutationPullCreditReportArgs = {
  input: PullCreditReportInput;
};


export type MutationSendKbaAnswersArgs = {
  input: SendKbaAnswersInput;
};


export type MutationSendSmsVerificationCodeArgs = {
  input: SmsVerificationInput;
};


export type MutationVerifySmsCodeArgs = {
  input: VerifySmsCodeInput;
};

export type NormalizeRawReportInput = {
  /** Optional lead ID to associate with the credit report. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** Optional base64 encoded PDF string of the credit report. */
  pdfBase64?: InputMaybe<Scalars['String']['input']>;
  /** Direct JSON object containing the raw credit report response from the vendor. */
  reportJson: Scalars['JSON']['input'];
  /**
   * Optional override for the report requested date.
   * Format: YYYY-MM-DD
   * Only required for CRS reports (CRS_TRANSUNION, CRS_EQUIFAX) where the raw data
   * does not include this field. Used to support downstream checks such as
   * "30-day credit reports".
   */
  reportRequestedAt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Supported credit report products.
   * ** Note when using SPINWHEEL **
   * - We normalize credit reports from the user object in spinwheel
   * - reportJson must be a response from https://docs.spinwheel.io/reference/get-user-profile
   */
  reportType: Supported_Report_Products;
  /** Requesting organization contact ID */
  reqOrgContactId: Scalars['String']['input'];
  /** Requesting organization co-contact ID */
  reqOrgSecondaryContactId?: InputMaybe<Scalars['String']['input']>;
};

export type NormalizeRawReportResponse = {
  __typename?: 'NormalizeRawReportResponse';
  /** Normalized Credit Report */
  data?: Maybe<NormalizeRawReportResponseResult>;
  /** List of error messages */
  errors?: Maybe<Array<Maybe<NormalizeRawReportResponseError>>>;
};

/** normalizeRawReport Error Response */
export type NormalizeRawReportResponseError = {
  __typename?: 'NormalizeRawReportResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** normalizeRawReport Success Response */
export type NormalizeRawReportResponseResult = {
  __typename?: 'NormalizeRawReportResponseResult';
  /** State where customer resides */
  applicantResidenceState?: Maybe<Scalars['String']['output']>;
  /** Credit report ID */
  creditReportId?: Maybe<Scalars['String']['output']>;
  /** List of debts */
  debts?: Maybe<Array<Maybe<CreditReportDebt>>>;
  /** Requesting organization contact ID */
  reqOrgContactId: Scalars['String']['output'];
  /** Secondary Credit report ID */
  secondaryCreditReportId?: Maybe<Scalars['String']['output']>;
};

/** Direction of ordering. */
export enum OrderDirection {
  /** Ascending order (A-Z, 0-9, oldest first) */
  Asc = 'ASC',
  /** Descending order (Z-A, 9-0, newest first) */
  Desc = 'DESC'
}

/** Page information for navigating collections. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor pointing to the last item in the current page */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Whether there are more results after the current page */
  hasNextPage: Scalars['Boolean']['output'];
  /** Cursor pointing to the first item in the current page */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Public Record */
export type PublicRecord = {
  __typename?: 'PublicRecord';
  /** Bankruptcy code */
  bankruptcyCode: Scalars['String']['output'];
  /** Bankruptcy date filed */
  bankruptcyDateFiled?: Maybe<Scalars['String']['output']>;
  /** Bankruptcy disposition type */
  bankruptcyDispositionType?: Maybe<Scalars['String']['output']>;
};

/** Input for Pulling Credit Report */
export type PullCreditReportInput = {
  /**
   * Contact address line 1
   * *** REQUIRED when creditReportSource is:
   * - ARRAY_EQUIFAX
   * - CRS_TRANSUNION
   * - CRS_EQUIFAX
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  /**
   * Contact address line 2
   * *** OPTIONAL when creditReportSource is:
   * - ARRAY_EQUIFAX
   * - CRS_EQUIFAX
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /**
   * Contact address city
   * *** REQUIRED when creditReportSource is:
   * - ARRAY_EQUIFAX
   * - CRS_TRANSUNION
   * - CRS_EQUIFAX
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  city?: InputMaybe<Scalars['String']['input']>;
  /**
   * Credit Report Source to specify where to pull the credit report from. Possible values are:
   * - SPINWHEEL
   * - CRS_TRANSUNION
   * - CRS_EQUIFAX
   * - ARRAY_EQUIFAX
   * - ARRAY_EQUIFAX_KBA
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  creditReportSource: Credit_Report_Pull_Source;
  /**
   * Contact date of birth in yyyy-mm-dd format 1990-04-12
   * *** REQUIRED when creditReportSource is:
   * - ARRAY_EQUIFAX
   * - CRS_EQUIFAX
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  dob?: InputMaybe<Scalars['String']['input']>;
  /**
   * Contact first name
   * *** REQUIRED when creditReportSource is:
   * - ARRAY_EQUIFAX
   * - CRS_TRANSUNION
   * - CRS_EQUIFAX
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Contact last name
   * *** REQUIRED when creditReportSource is:
   * - ARRAY_EQUIFAX
   * - CRS_TRANSUNION
   * - CRS_EQUIFAX
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Sigma lead ID (optional) */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Contact middle name
   * *** OPTIONAL when creditReportSource is:
   * - CRS_TRANSUNION
   * - CRS_EQUIFAX
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  middleName?: InputMaybe<Scalars['String']['input']>;
  /** Requesting organization contact ID */
  reqOrgContactId: Scalars['String']['input'];
  /**
   * Contact social security number
   * *** REQUIRED when creditReportSource is:
   * - ARRAY_EQUIFAX
   * - CRS_EQUIFAX
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  ssn?: InputMaybe<Scalars['String']['input']>;
  /**
   * Contact address state
   * *** REQUIRED when creditReportSource is:
   * - ARRAY_EQUIFAX
   * - CRS_TRANSUNION
   * - CRS_EQUIFAX
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  state?: InputMaybe<Scalars['String']['input']>;
  /**
   * Contact name suffix (e.g., Jr., Sr., II, III)
   * *** OPTIONAL when creditReportSource is:
   * - CRS_TRANSUNION
   * - CRS_EQUIFAX
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /**
   * User verification id
   * *** REQUIRED when creditReportSource is ARRAY_EQUIFAX_KBA
   */
  userVerificationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Contact address zip code
   * *** REQUIRED when creditReportSource is:
   * - ARRAY_EQUIFAX
   * - CRS_TRANSUNION
   * - CRS_STANDARD_PREQUAL_VANTAGE4_TU
   */
  zip?: InputMaybe<Scalars['String']['input']>;
};

/** Pull Credit Report Response */
export type PullCreditReportResponse = {
  __typename?: 'PullCreditReportResponse';
  /** Success message */
  data?: Maybe<PullCreditReportResponseResult>;
  /** List of error messages */
  errors?: Maybe<Array<Maybe<PullCreditReportResponseResponseError>>>;
};

/** Pull Credit Report Response Response Error */
export type PullCreditReportResponseResponseError = {
  __typename?: 'PullCreditReportResponseResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** Pull Credit Report Response Result */
export type PullCreditReportResponseResult = {
  __typename?: 'PullCreditReportResponseResult';
  /** State where customer resides */
  applicantResidenceState?: Maybe<Scalars['String']['output']>;
  /** Credit report ID */
  creditReportId: Scalars['String']['output'];
  /** List of debts on the credit report */
  debts?: Maybe<Array<Maybe<CreditReportDebt>>>;
  /** IN_PROGRESS, COMPLETED */
  fileStatus: Scalars['String']['output'];
  /** Sigma lead ID */
  leadId?: Maybe<Scalars['String']['output']>;
  /** Public records */
  publicRecords?: Maybe<Array<Maybe<PublicRecord>>>;
  /** Current status of the credit report: PENDING, IN_PROGRESS, COMPLETED, FAILED */
  reportStatus: Scalars['String']['output'];
  /** Requesting organization contact ID */
  reqOrgContactId?: Maybe<Scalars['String']['output']>;
  /** Credit Report Source */
  source: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Get a previously pulled credit report */
  creditReport: GetCreditReportResponse;
  /** Fetch Credit Reports with various filtering and pagination options. */
  creditReports?: Maybe<CreditReportsResponse>;
  /** Fetch Creditors. */
  creditors?: Maybe<CreditorResponse>;
  /** Get the Base64-encoded PDF of a credit report using the creditReportId. This is the report provided by the original credit report source. */
  downloadCreditReport?: Maybe<DownloadCreditReportResponse>;
  /** Spinwheel user verification/consent KBA questions for a customer (step 1 of 2) */
  kbaQuestions: KbaQuestionsResponse;
  /** Lookup the user verification / consent for a contact. Can be used to determine if a customer has already provided consent to pull the credit report from a specific credit report vendor */
  userVerification?: Maybe<UserVerificationResponse>;
};


export type QueryCreditReportArgs = {
  input: GetCreditReportInput;
};


export type QueryCreditReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<CreditReportOrder>>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CreditReportWhereInput>;
};


export type QueryCreditorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CreditorWhereInput>;
};


export type QueryDownloadCreditReportArgs = {
  input: DownloadCreditReportInput;
};


export type QueryKbaQuestionsArgs = {
  input: KbaQuestionsInput;
};


export type QueryUserVerificationArgs = {
  reqOrgContactId: Scalars['String']['input'];
};

/** Input for Spinwheel SMS Verification */
export type SmsVerificationInput = {
  /** dob in yyyy-mm-dd format 1990-04-12 */
  dateOfBirth: Scalars['String']['input'];
  /** phone number in E.164 format +11231231234 */
  phoneNumber: Scalars['String']['input'];
  /** Reqesting organization contact ID */
  reqOrgContactId: Scalars['String']['input'];
};

/** SMS Verification Response */
export type SmsVerificationResponse = {
  __typename?: 'SMSVerificationResponse';
  /** Success message */
  data?: Maybe<SmsVerificationResult>;
  /** List of error messages */
  errors?: Maybe<Array<Maybe<SmsVerificationResponseError>>>;
};

/** SMS Verification Response Error */
export type SmsVerificationResponseError = {
  __typename?: 'SMSVerificationResponseError';
  /** SMS verification error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** SMS Verification Result */
export type SmsVerificationResult = {
  __typename?: 'SMSVerificationResult';
  /** SMS Verification success message */
  message?: Maybe<Scalars['String']['output']>;
};

/** Supported report types for normalizing raw credit report data */
export enum Supported_Report_Products {
  /** Product: efx1bReportScore | Data Provider: Array */
  ArrayEquifax = 'ARRAY_EQUIFAX',
  /** Product: efx-prequal-vantage4 | Data Provider: CRS */
  CrsEquifax = 'CRS_EQUIFAX',
  /** Product: standard/prequal-vantage4 | Data Provider: CRS */
  CrsStandardPrequalVantage4 = 'CRS_STANDARD_PREQUAL_VANTAGE4',
  /** Product: basic/tu-prequal-vantage4 | Data Provider: CRS */
  CrsTransunion = 'CRS_TRANSUNION',
  /** Product: MISMO 2.3.1 | Data Provider: Forth API */
  ForthApiMismo_2_3_1 = 'FORTH_API_MISMO_2_3_1',
  /** Product: EquifaxVantageScore3.0 | Data Provider: Spinwheel */
  Spinwheel = 'SPINWHEEL'
}

/** Credit score information from credit evaluation models */
export type Score = {
  __typename?: 'Score';
  /** The name of a risk model as provided by the repository bureaus. */
  modelName?: Maybe<Scalars['String']['output']>;
  /** Factors of the borrower's credit which give context to the referenced credit score. */
  scoreFactors?: Maybe<Array<Maybe<ScoreFactor>>>;
  /** Numeric credit score resulting from credit evaluation model. */
  scoreValue?: Maybe<Scalars['String']['output']>;
  /** This element describes the source of the credit file, Equifax, Experian, Trans Union or Unspecified if the specific sources are not specified. */
  sourceType?: Maybe<Scalars['String']['output']>;
};

/** Score Factor associated with a credit score */
export type ScoreFactor = {
  __typename?: 'ScoreFactor';
  /** Factors of the borrower's credit which give context to the referenced credit score. The factor is normally a numeric code. */
  scoreFactorCode?: Maybe<Scalars['String']['output']>;
  /** The text remarks associated with a Score Factor. */
  scoreFactorText?: Maybe<Scalars['String']['output']>;
};

export type SendKbaAnswersError = {
  __typename?: 'SendKbaAnswersError';
  /** KBA requesting questions error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** Input for submitting KBA answers */
export type SendKbaAnswersInput = {
  /** KBA answers */
  answers: Array<KbaAnswer>;
  /** Requesting organization contact ID */
  reqOrgContactId: Scalars['String']['input'];
};

export type SendKbaAnswersResponse = {
  __typename?: 'SendKbaAnswersResponse';
  /** Success message */
  data?: Maybe<SendKbaAnswersResult>;
  /** List of error messages */
  errors?: Maybe<Array<Maybe<SendKbaAnswersError>>>;
};

/** Result of submitting KBA answers */
export type SendKbaAnswersResult = {
  __typename?: 'SendKbaAnswersResult';
  /** Success or status message */
  message?: Maybe<Scalars['String']['output']>;
};

export type UserVerificationNode = {
  __typename?: 'UserVerificationNode';
  /** Credit Report User ID */
  creditReportUserId?: Maybe<Scalars['String']['output']>;
  /** user verification ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Requesting Organization Contact ID */
  reqOrgContactId?: Maybe<Scalars['String']['output']>;
  /** Requesting Organization ID */
  reqOrgId?: Maybe<Scalars['String']['output']>;
  /**
   * Customer verification status. Possible values:
   * - NOT_STARTED: The verification process has not started.
   * - IN_PROGRESS: The verification process is ongoing.
   * - FAILED: The verification process failed.
   * - PASSED: The verification process was successful.
   * - BAD_REQUEST: The request was invalid.
   *
   * KBA-specific statuses:
   * - UNABLE_TO_GET_KBA_QUESTIONS: Unable to retrieve KBA questions.
   *
   * SMS-specific statuses:
   * - UNABLE_TO_SEND_SMS: Unable to send SMS for verification.
   * - REQUIRES_KBA: Additional KBA verification is required.
   * - OTP_EXPIRED: The OTP has expired.
   * - OTP_INCORRECT: The OTP entered is incorrect.
   * - RETRY_AFTER_5MIN: Too many failed attempts, retry after 5 minutes.
   */
  status?: Maybe<Scalars['String']['output']>;
  /** User consent date */
  userConsentDate?: Maybe<Scalars['String']['output']>;
  /** User verification date */
  verificationDate?: Maybe<Scalars['String']['output']>;
  /** Verification Source */
  verificationSource?: Maybe<Scalars['String']['output']>;
  /** Verification type cna be SMS or KBA */
  verificationType?: Maybe<Scalars['String']['output']>;
};

/** User verification lookup response */
export type UserVerificationResponse = {
  __typename?: 'UserVerificationResponse';
  /** User verification data */
  data?: Maybe<UserVerificationNode>;
  /** List of error messages */
  errors?: Maybe<Array<Maybe<UserVerificationResponseError>>>;
};

export type UserVerificationResponseError = {
  __typename?: 'UserVerificationResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

/** Input for Spinwheel SMS Code Verification */
export type VerifySmsCodeInput = {
  /** Reqesting organization contact ID */
  reqOrgContactId: Scalars['String']['input'];
  /** Verification code that spinwheel sends via SMS */
  verificationCode: Scalars['String']['input'];
};

/** Verify SMS Code Response */
export type VerifySmsCodeResponse = {
  __typename?: 'VerifySMSCodeResponse';
  /** Success message */
  data?: Maybe<SmsVerificationResult>;
  /** List of error messages */
  errors?: Maybe<Array<Maybe<SmsVerificationResponseError>>>;
};

/** KBA Questions answer option */
export type KbaQuestionOption = {
  __typename?: 'kbaQuestionOption';
  /** KBA Questions option ID */
  id: Scalars['String']['output'];
  /** KBA Questions option text */
  text: Scalars['String']['output'];
};

export type NormalizeRawReportMutationVariables = Exact<{
  input: NormalizeRawReportInput;
}>;


export type NormalizeRawReportMutation = { __typename?: 'Mutation', normalizeRawReport: { __typename?: 'NormalizeRawReportResponse', data?: { __typename?: 'NormalizeRawReportResponseResult', creditReportId?: string | null, secondaryCreditReportId?: string | null, reqOrgContactId: string, applicantResidenceState?: string | null, debts?: Array<{ __typename?: 'CreditReportDebt', id: string, creditorId?: string | null, accountNumber?: string | null, applicantState?: string | null, ecoaCode?: string | null, creditorName?: string | null, parentCreditorName?: string | null, parentCreditorId?: string | null, originalCreditorName?: string | null, creditorType?: string | null, accountType?: string | null, portfolioType?: string | null, debtType?: string | null, currentBalance?: number | null, openDate?: string | null, lastPaymentDate?: string | null, hasLastPayment?: boolean | null, narrativeCodes?: Array<string | null> | null, bankruptcyDateFiled?: string | null, applicantId?: string | null, coApplicantId?: string | null, originalBalance?: number | null, isCollection?: boolean | null, delinquency?: string | null, monthlyPayment?: number | null, forthDebtTypeId?: string | null, remarks?: Array<string | null> | null } | null> | null } | null, errors?: Array<{ __typename?: 'NormalizeRawReportResponseError', message?: string | null } | null> | null } };


export const NormalizeRawReportDocument = gql`
    mutation NormalizeRawReport($input: NormalizeRawReportInput!) {
  normalizeRawReport(input: $input) {
    data {
      creditReportId
      secondaryCreditReportId
      reqOrgContactId
      applicantResidenceState
      debts {
        id
        creditorId
        accountNumber
        applicantState
        ecoaCode
        creditorName
        parentCreditorName
        parentCreditorId
        originalCreditorName
        creditorType
        accountType
        portfolioType
        debtType
        currentBalance
        openDate
        lastPaymentDate
        hasLastPayment
        narrativeCodes
        bankruptcyDateFiled
        applicantId
        coApplicantId
        originalBalance
        isCollection
        delinquency
        monthlyPayment
        forthDebtTypeId
        remarks
      }
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
    NormalizeRawReport(variables: NormalizeRawReportMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<NormalizeRawReportMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<NormalizeRawReportMutation>({ document: NormalizeRawReportDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'NormalizeRawReport', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;