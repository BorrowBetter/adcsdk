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
  JSON: { input: any; output: any; }
};

/**
 * Input for creating/saving an offer
 * Reads payment plan fields from the underwriting application's PlanInput
 */
export type CreateOfferInput = {
  /** Revision number of the underwriting application */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** uwResultId is the Application ID from underwriting */
  uwResultId: Scalars['String']['input'];
};

export type CreateOfferResponse = {
  __typename?: 'CreateOfferResponse';
  data?: Maybe<Offer>;
  errors?: Maybe<Array<Maybe<OffersResponseError>>>;
};

export type EnrollmentPlanInput = {
  /** Applicant state of residence */
  primaryApplicantState: Scalars['String']['input'];
};

export type EnrollmentPlanResponse = {
  __typename?: 'EnrollmentPlanResponse';
  data?: Maybe<EnrollmentPlanResult>;
  errors?: Maybe<Array<Maybe<EnrollmentPlanResponseError>>>;
};

export type EnrollmentPlanResponseError = {
  __typename?: 'EnrollmentPlanResponseError';
  message?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EnrollmentPlanResult = {
  __typename?: 'EnrollmentPlanResult';
  servicingCompany?: Maybe<Scalars['String']['output']>;
};

export type ForthRequestParameters = {
  __typename?: 'ForthRequestParameters';
  debt: Scalars['String']['output'];
  enrollmentPlan: Scalars['String']['output'];
  epFee1Amount: Scalars['Boolean']['output'];
  epFee2Monthly: Scalars['Boolean']['output'];
  epFee3Amount: Scalars['Boolean']['output'];
  epFee3Monthly: Scalars['Boolean']['output'];
  epFee4Amount: Scalars['Boolean']['output'];
  epFee4Monthly: Scalars['Boolean']['output'];
  epFee5Amount: Scalars['Boolean']['output'];
  epFee5Monthly: Scalars['Boolean']['output'];
  epFreqInterval: Scalars['String']['output'];
  epFrequency: Scalars['String']['output'];
  estSettlement: Scalars['String']['output'];
  firstPaymentDate: Scalars['String']['output'];
  maxPaymentTerm: Scalars['String']['output'];
  programMonths: Scalars['String']['output'];
  recurringStartDate: Scalars['String']['output'];
};

export type GetOfferResponse = {
  __typename?: 'GetOfferResponse';
  data?: Maybe<Offer>;
  errors?: Maybe<Array<Maybe<ResponseError>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Calculate payment plan offers. Can be used as a calculator to simulate different payment plan options. */
  offers: OffersResponse;
  /** Save the selected payment plan of an eligible applicant.  */
  saveOffer: CreateOfferResponse;
};


export type MutationOffersArgs = {
  input: OffersInput;
};


export type MutationSaveOfferArgs = {
  input: CreateOfferInput;
};

export type Offer = {
  __typename?: 'Offer';
  compTemplateId?: Maybe<Scalars['Int']['output']>;
  enrolledDebt: Scalars['String']['output'];
  enrollmentPlanId: Scalars['String']['output'];
  enrollmentPlanName: Scalars['String']['output'];
  estimatedSettlementFee: Scalars['Int']['output'];
  firstPaymentDate: Scalars['String']['output'];
  forthRequestParameters: ForthRequestParameters;
  frequency: Scalars['String']['output'];
  frequencyInterval: Scalars['String']['output'];
  id: Scalars['String']['output'];
  maxPaymentTerm: Scalars['String']['output'];
  paymentTerm: Scalars['String']['output'];
  payments: Array<Maybe<OfferPayment>>;
  serviceFee?: Maybe<Scalars['Int']['output']>;
  totals: OfferTotals;
  uwResultId: Scalars['String']['output'];
  uwResultRevision: Scalars['Int']['output'];
};

export type OfferPayment = {
  __typename?: 'OfferPayment';
  fee1?: Maybe<Scalars['String']['output']>;
  fee2?: Maybe<Scalars['String']['output']>;
  fee3?: Maybe<Scalars['String']['output']>;
  fee4?: Maybe<Scalars['String']['output']>;
  fee5?: Maybe<Scalars['String']['output']>;
  fee6?: Maybe<Scalars['String']['output']>;
  fee7?: Maybe<Scalars['String']['output']>;
  paymentDate?: Maybe<Scalars['String']['output']>;
  paymentNumber?: Maybe<Scalars['String']['output']>;
  savings?: Maybe<Scalars['String']['output']>;
  totalPayment?: Maybe<Scalars['String']['output']>;
};

export type OfferResult = {
  __typename?: 'OfferResult';
  compTemplateId?: Maybe<Scalars['Int']['output']>;
  enrolledDebt: Scalars['String']['output'];
  enrollmentPlanId: Scalars['String']['output'];
  enrollmentPlanName: Scalars['String']['output'];
  estimatedSettlementFee: Scalars['Int']['output'];
  firstPaymentDate: Scalars['String']['output'];
  forthRequestParameters: ForthRequestParameters;
  frequency: Scalars['String']['output'];
  frequencyInterval: Scalars['String']['output'];
  maxPaymentTerm: Scalars['String']['output'];
  paymentTerm: Scalars['String']['output'];
  payments: Array<Maybe<OfferPayment>>;
  serviceFee?: Maybe<Scalars['Int']['output']>;
  totals: OfferTotals;
};

export type OfferTotals = {
  __typename?: 'OfferTotals';
  fee1?: Maybe<Scalars['String']['output']>;
  fee2?: Maybe<Scalars['String']['output']>;
  fee3?: Maybe<Scalars['String']['output']>;
  fee4?: Maybe<Scalars['String']['output']>;
  fee5?: Maybe<Scalars['String']['output']>;
  fee6?: Maybe<Scalars['String']['output']>;
  fee7?: Maybe<Scalars['String']['output']>;
  savings?: Maybe<Scalars['String']['output']>;
  totalPayment?: Maybe<Scalars['String']['output']>;
};

/**
 * Input for getting offers
 * depositFrequency values can be BW' for 'biWeekly', 'SM' for 'semiMonthly', and 'M' for 'monthly' - Default is 'M'
 *
 * depositIntervals values can be
 *   If depositFrequency is biWeekly valid options are 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - Default is 'Monday'. Example 'Monday'
 *   If depositFrequency is 'semiMonthly' then 2 values need to be passed  where valid options are the 1-30. Example '2,23'
 *   If depositFrequency is 'monthly' valid options are the 1-30. Example '1'
 *
 * firstPaymentDate in yyyy/mm/dd format (required)
 *
 * uwResultId is the Application ID from underwriting (required)
 */
export type OffersInput = {
  /** depositFrequency values can be BW' for 'biWeekly', 'SM' for 'semiMonthly', and 'M' for 'monthly' - Default is 'BW' */
  depositFrequency?: InputMaybe<Scalars['String']['input']>;
  /**
   * depositIntervals values can be
   * If depositFrequency is biWeekly valid options are 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - Default is 'Monday'. Example 'Monday'
   * If depositFrequency is 'semiMonthly' then 2 values need to be passed  where valid options are the 1-30. Example '1,15'
   * If depositFrequency is 'monthly' valid options are the 1-30. Example '1'
   */
  depositIntervals?: InputMaybe<Scalars['String']['input']>;
  /** firstPaymentDate in yyyy/mm/dd format */
  firstPaymentDate: Scalars['String']['input'];
  /** sentry fee opt-out by setting to false */
  includeSentryFee?: InputMaybe<Scalars['Boolean']['input']>;
  /** maxPaymentTerm is the maximum number of months to make the plan */
  paymentTerm?: InputMaybe<Scalars['String']['input']>;
  /** uwResultId is the Application ID from underwriting */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** uwResultId is the Application ID from underwriting */
  uwResultId: Scalars['String']['input'];
};

export type OffersResponse = {
  __typename?: 'OffersResponse';
  data?: Maybe<Array<Maybe<OfferResult>>>;
  errors?: Maybe<Array<Maybe<OffersResponseError>>>;
};

export type OffersResponseError = {
  __typename?: 'OffersResponseError';
  message?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get enrollment plan for a state */
  enrollmentPlan: EnrollmentPlanResponse;
  /** Get offer by ID */
  getOffer: GetOfferResponse;
};


export type QueryEnrollmentPlanArgs = {
  input: EnrollmentPlanInput;
};


export type QueryGetOfferArgs = {
  ogId: Scalars['String']['input'];
};

/** Response Error */
export type ResponseError = {
  __typename?: 'ResponseError';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type GetOfferQueryVariables = Exact<{
  ogId: Scalars['String']['input'];
}>;


export type GetOfferQuery = { __typename?: 'Query', getOffer: { __typename?: 'GetOfferResponse', data?: { __typename?: 'Offer', id: string, uwResultId: string, frequency: string } | null, errors?: Array<{ __typename?: 'ResponseError', message?: string | null } | null> | null } };


export const GetOfferDocument = gql`
    query GetOffer($ogId: String!) {
  getOffer(ogId: $ogId) {
    data {
      id
      uwResultId
      frequency
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
    GetOffer(variables: GetOfferQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetOfferQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOfferQuery>({ document: GetOfferDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetOffer', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;