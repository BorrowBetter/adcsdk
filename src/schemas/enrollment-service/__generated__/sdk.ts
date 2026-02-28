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
};

/** Input for address information */
export type AddressInput = {
  /** Primary address line (required) */
  addressLine1: Scalars['String']['input'];
  /** Secondary address line (optional) */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** Tertiary address line (optional) */
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  /** City (required) */
  city: Scalars['String']['input'];
  /** State abbreviation (required) */
  state: Scalars['String']['input'];
  /** ZIP code (required) */
  zipCode: Scalars['String']['input'];
};

/**
 * Input for contact information.
 * Note: Main applicant and co-applicant PII fields are sourced from UW data.
 */
export type ContactInfoInput = {
  /** Associated documents (optional) */
  documents?: InputMaybe<Array<InputMaybe<DocumentInput>>>;
  /** Employee classification (W-2, 1099, or Fixed Income) */
  jobClassification: JobClassification;
  /** Preferred language: 1 for English, 2 for Spanish (optional, defaults to English) */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Notes associated with the contact (optional) */
  notes?: InputMaybe<Array<InputMaybe<NoteInput>>>;
};

/** Input for creating a new enrollment. */
export type CreateEnrollmentInput = {
  /** Contact information for the enrollment */
  contactInfo: ContactInfoInput;
  /** The leadId also known as the Third-party identifier (can contain non-numeric characters) */
  leadId: Scalars['String']['input'];
  /** Offer generation ID from the offer-generation-service */
  ogId: Scalars['String']['input'];
};

/** Response type for createEnrollment mutation */
export type CreateEnrollmentResponse = {
  __typename?: 'CreateEnrollmentResponse';
  /** Enrollment data on success */
  data?: Maybe<Enrollment>;
  /** List of validation or processing errors */
  errors?: Maybe<Array<Maybe<EnrollmentError>>>;
};

/** Input for document information */
export type DocumentInput = {
  /** Associated debt ID if document relates to a specific debt (optional) */
  associatedDebtId?: InputMaybe<Scalars['String']['input']>;
  /** MIME content type (e.g., application/pdf, image/jpeg) */
  contentType: Scalars['String']['input'];
  /** Description of the document */
  description: Scalars['String']['input'];
  /** Type of document (e.g., ID, proof of income) */
  docType: Scalars['String']['input'];
  /** Name of the file */
  fileName: Scalars['String']['input'];
  /** URL where the file is stored */
  fileUrl: Scalars['String']['input'];
  /** Additional metadata as JSON string (optional) */
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** Enrollment entity representing a created enrollment */
export type Enrollment = {
  __typename?: 'Enrollment';
  /** Unique enrollment identifier */
  enrollmentId: Scalars['String']['output'];
};

/** Error type for enrollment operations */
export type EnrollmentError = {
  __typename?: 'EnrollmentError';
  /** Error message describing the issue */
  message?: Maybe<Scalars['String']['output']>;
};

/** Current status of the enrollment */
export enum EnrollmentStatus {
  /** The operation finished successfully */
  Completed = 'COMPLETED',
  /** The operation encountered an error and did not complete */
  Failed = 'FAILED',
  /** The operation is currently being processed */
  InProgress = 'IN_PROGRESS',
  /** The operation has not started yet */
  Pending = 'PENDING',
  /** The operation was skipped (e.g., no data to process) */
  Skipped = 'SKIPPED'
}

/** Enrollment status data containing the current state */
export type EnrollmentStatusData = {
  __typename?: 'EnrollmentStatusData';
  /** Contact ID, populated once contact creation completes successfully */
  contactId?: Maybe<Scalars['String']['output']>;
  /** Bank account creation status */
  createBankAccount: EnrollmentStatus;
  /** Budget creation status */
  createBudget: EnrollmentStatus;
  /** Contact creation status */
  createContact: EnrollmentStatus;
  /** Debts creation status */
  createDebts: EnrollmentStatus;
  /** Documents creation status */
  createDocuments: EnrollmentStatus;
  /** Enrollment plan creation status */
  createEnrollmentPlan: EnrollmentStatus;
  /** Notes creation status */
  createNotes: EnrollmentStatus;
  /** QA call status - indicates the current state of the enrollment processing */
  qaCall: EnrollmentStatus;
};

/** Response wrapper for enrollmentStatus query */
export type EnrollmentStatusResponse = {
  __typename?: 'EnrollmentStatusResponse';
  /** Enrollment status data on success */
  data?: Maybe<EnrollmentStatusData>;
  /** List of errors if enrollment not found or processing failed */
  errors?: Maybe<Array<Maybe<EnrollmentError>>>;
};

/** Employee classification type for job classification field */
export enum JobClassification {
  /** Non-employment income */
  FixedIncome = 'FIXED_INCOME',
  /** Full-time/standard employee */
  W_2 = 'W_2',
  /** Independent contractor */
  W_1099 = 'W_1099'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create a new enrollment with the provided applicant information.
   * Returns the enrollment ID on success, or validation errors on failure.
   */
  createEnrollment: CreateEnrollmentResponse;
};


export type MutationCreateEnrollmentArgs = {
  input: CreateEnrollmentInput;
};

/** Input for note information */
export type NoteInput = {
  /** Content of the note */
  content: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Get the status of an enrollment by enrollment ID */
  enrollmentStatus: EnrollmentStatusResponse;
};


export type QueryEnrollmentStatusArgs = {
  enrollmentId: Scalars['String']['input'];
};

/** Supported CRM systems for enrollment destination */
export enum SupportedCrm {
  Forth = 'FORTH'
}

export type GetEnrollmentStatusQueryVariables = Exact<{
  enrollmentId: Scalars['String']['input'];
}>;


export type GetEnrollmentStatusQuery = { __typename?: 'Query', enrollmentStatus: { __typename?: 'EnrollmentStatusResponse', data?: { __typename?: 'EnrollmentStatusData', contactId?: string | null, qaCall: EnrollmentStatus, createContact: EnrollmentStatus } | null, errors?: Array<{ __typename?: 'EnrollmentError', message?: string | null } | null> | null } };


export const GetEnrollmentStatusDocument = gql`
    query GetEnrollmentStatus($enrollmentId: String!) {
  enrollmentStatus(enrollmentId: $enrollmentId) {
    data {
      contactId
      qaCall
      createContact
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
    GetEnrollmentStatus(variables: GetEnrollmentStatusQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetEnrollmentStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEnrollmentStatusQuery>({ document: GetEnrollmentStatusDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetEnrollmentStatus', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;