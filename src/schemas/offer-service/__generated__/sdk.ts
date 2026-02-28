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

export type OfferTotalsFieldsFragment = { __typename?: 'OfferTotals', fee1?: string | null, fee2?: string | null, fee3?: string | null, fee4?: string | null, fee5?: string | null, fee6?: string | null, fee7?: string | null, savings?: string | null, totalPayment?: string | null };

export type OfferPaymentFieldsFragment = { __typename?: 'OfferPayment', paymentNumber?: string | null, paymentDate?: string | null, totalPayment?: string | null, fee1?: string | null, fee2?: string | null, fee3?: string | null, fee4?: string | null, fee5?: string | null, fee6?: string | null, fee7?: string | null, savings?: string | null };

export type ForthRequestParametersFieldsFragment = { __typename?: 'ForthRequestParameters', epFee1Amount: boolean, epFee2Monthly: boolean, epFee3Amount: boolean, epFee3Monthly: boolean, epFee4Monthly: boolean, epFee4Amount: boolean, epFee5Monthly: boolean, epFee5Amount: boolean, firstPaymentDate: string, recurringStartDate: string, epFrequency: string, epFreqInterval: string, debt: string, enrollmentPlan: string, programMonths: string, maxPaymentTerm: string, estSettlement: string };

export type OffersMutationVariables = Exact<{
  input: OffersInput;
}>;


export type OffersMutation = { __typename?: 'Mutation', offers: { __typename?: 'OffersResponse', data?: Array<{ __typename?: 'OfferResult', compTemplateId?: number | null, frequency: string, frequencyInterval: string, firstPaymentDate: string, paymentTerm: string, maxPaymentTerm: string, enrolledDebt: string, enrollmentPlanId: string, enrollmentPlanName: string, serviceFee?: number | null, estimatedSettlementFee: number, totals: { __typename?: 'OfferTotals', fee1?: string | null, fee2?: string | null, fee3?: string | null, fee4?: string | null, fee5?: string | null, fee6?: string | null, fee7?: string | null, savings?: string | null, totalPayment?: string | null }, payments: Array<{ __typename?: 'OfferPayment', paymentNumber?: string | null, paymentDate?: string | null, totalPayment?: string | null, fee1?: string | null, fee2?: string | null, fee3?: string | null, fee4?: string | null, fee5?: string | null, fee6?: string | null, fee7?: string | null, savings?: string | null } | null>, forthRequestParameters: { __typename?: 'ForthRequestParameters', epFee1Amount: boolean, epFee2Monthly: boolean, epFee3Amount: boolean, epFee3Monthly: boolean, epFee4Monthly: boolean, epFee4Amount: boolean, epFee5Monthly: boolean, epFee5Amount: boolean, firstPaymentDate: string, recurringStartDate: string, epFrequency: string, epFreqInterval: string, debt: string, enrollmentPlan: string, programMonths: string, maxPaymentTerm: string, estSettlement: string } } | null> | null, errors?: Array<{ __typename?: 'OffersResponseError', message?: Array<string | null> | null } | null> | null } };

export type SaveOfferMutationVariables = Exact<{
  input: CreateOfferInput;
}>;


export type SaveOfferMutation = { __typename?: 'Mutation', saveOffer: { __typename?: 'CreateOfferResponse', data?: { __typename?: 'Offer', id: string, uwResultId: string, uwResultRevision: number, compTemplateId?: number | null, frequency: string, frequencyInterval: string, firstPaymentDate: string, paymentTerm: string, maxPaymentTerm: string, enrolledDebt: string, enrollmentPlanId: string, enrollmentPlanName: string, serviceFee?: number | null, estimatedSettlementFee: number, totals: { __typename?: 'OfferTotals', fee1?: string | null, fee2?: string | null, fee3?: string | null, fee4?: string | null, fee5?: string | null, fee6?: string | null, fee7?: string | null, savings?: string | null, totalPayment?: string | null }, payments: Array<{ __typename?: 'OfferPayment', paymentNumber?: string | null, paymentDate?: string | null, totalPayment?: string | null, fee1?: string | null, fee2?: string | null, fee3?: string | null, fee4?: string | null, fee5?: string | null, fee6?: string | null, fee7?: string | null, savings?: string | null } | null>, forthRequestParameters: { __typename?: 'ForthRequestParameters', epFee1Amount: boolean, epFee2Monthly: boolean, epFee3Amount: boolean, epFee3Monthly: boolean, epFee4Monthly: boolean, epFee4Amount: boolean, epFee5Monthly: boolean, epFee5Amount: boolean, firstPaymentDate: string, recurringStartDate: string, epFrequency: string, epFreqInterval: string, debt: string, enrollmentPlan: string, programMonths: string, maxPaymentTerm: string, estSettlement: string } } | null, errors?: Array<{ __typename?: 'OffersResponseError', message?: Array<string | null> | null } | null> | null } };

export const OfferTotalsFieldsFragmentDoc = gql`
    fragment OfferTotalsFields on OfferTotals {
  fee1
  fee2
  fee3
  fee4
  fee5
  fee6
  fee7
  savings
  totalPayment
}
    `;
export const OfferPaymentFieldsFragmentDoc = gql`
    fragment OfferPaymentFields on OfferPayment {
  paymentNumber
  paymentDate
  totalPayment
  fee1
  fee2
  fee3
  fee4
  fee5
  fee6
  fee7
  savings
}
    `;
export const ForthRequestParametersFieldsFragmentDoc = gql`
    fragment ForthRequestParametersFields on ForthRequestParameters {
  epFee1Amount
  epFee2Monthly
  epFee3Amount
  epFee3Monthly
  epFee4Monthly
  epFee4Amount
  epFee5Monthly
  epFee5Amount
  firstPaymentDate
  recurringStartDate
  epFrequency
  epFreqInterval
  debt
  enrollmentPlan
  programMonths
  maxPaymentTerm
  estSettlement
}
    `;
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
export const OffersDocument = gql`
    mutation Offers($input: OffersInput!) {
  offers(input: $input) {
    data {
      compTemplateId
      frequency
      frequencyInterval
      firstPaymentDate
      paymentTerm
      maxPaymentTerm
      enrolledDebt
      enrollmentPlanId
      enrollmentPlanName
      serviceFee
      estimatedSettlementFee
      totals {
        ...OfferTotalsFields
      }
      payments {
        ...OfferPaymentFields
      }
      forthRequestParameters {
        ...ForthRequestParametersFields
      }
    }
    errors {
      message
    }
  }
}
    ${OfferTotalsFieldsFragmentDoc}
${OfferPaymentFieldsFragmentDoc}
${ForthRequestParametersFieldsFragmentDoc}`;
export const SaveOfferDocument = gql`
    mutation SaveOffer($input: CreateOfferInput!) {
  saveOffer(input: $input) {
    data {
      id
      uwResultId
      uwResultRevision
      compTemplateId
      frequency
      frequencyInterval
      firstPaymentDate
      paymentTerm
      maxPaymentTerm
      enrolledDebt
      enrollmentPlanId
      enrollmentPlanName
      serviceFee
      estimatedSettlementFee
      totals {
        ...OfferTotalsFields
      }
      payments {
        ...OfferPaymentFields
      }
      forthRequestParameters {
        ...ForthRequestParametersFields
      }
    }
    errors {
      message
    }
  }
}
    ${OfferTotalsFieldsFragmentDoc}
${OfferPaymentFieldsFragmentDoc}
${ForthRequestParametersFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetOffer(variables: GetOfferQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetOfferQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOfferQuery>({ document: GetOfferDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetOffer', 'query', variables);
    },
    Offers(variables: OffersMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<OffersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<OffersMutation>({ document: OffersDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Offers', 'mutation', variables);
    },
    SaveOffer(variables: SaveOfferMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<SaveOfferMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveOfferMutation>({ document: SaveOfferDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'SaveOffer', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;