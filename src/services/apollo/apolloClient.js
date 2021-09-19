import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import _ from 'lodash';
import {Auth} from 'aws-amplify';

import emitter from '../utils/emiiter';
import packageJson from '../../../package.json';
import {AppFlowActions} from '../../Constants/appFlow';
// import {APOLLO_HOST} from '../Constants/apis';
const APOLLO_HOST = 'https://telemed-gateway.alpha.bioflux.io';
const cache = new InMemoryCache({addTypename: false});
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const createClient = async (
  isUsingCache = false,
  isGuest = false,
  skipNetWorkWarning = false,
) => {
  console.log('isUsingCache', isUsingCache);
  try {
    let authLink;
    if (isGuest) {
      authLink = setContext((_, {headers}) => ({
        headers: {...headers},
      }));
    } else {
      const currentSession = await Auth.currentSession();
      const token = currentSession.accessToken.jwtToken;
      authLink = setContext((_, {headers}) => ({
        headers: {...headers, 'access-token': token},
      }));
    }
    return new ApolloClient({
      link: authLink.concat(
        ApolloLink.from([
          onError(
            ({graphQLErrors, networkError, response, operation, forward}) => {
              console.log({
                graphQLErrors,
                networkError,
                response,
                forward,
              });
              if (graphQLErrors) {
                console.log({graphQLErrors});
                graphQLErrors.map(({message, extensions}) => {
                  if (
                    _.includes(message, '403') ||
                    _.includes(message, '400') ||
                    extensions.code === 'UNAUTHENTICATED'
                  ) {
                    // TODO: Go to Login screen, clear data
                    // emitter.emit(AppFlowActions.LOGOUT_REQUEST, 'request');
                    // if (extensions.code === 'UNAUTHENTICATED') {
                    //   emitter.emit(AppFlowActions.GUEST_TOKEN_EXPIRED);
                    // }
                  }
                  if (extensions.code === 'USER_IS_DISABLED') {
                    // emitter.emit('USER_IS_DISABLED', message);
                    // emitter.emit(AppFlowActions.LOGOUT_REQUEST, 'request');
                  }
                });
              }
              if (networkError) {
                console.log(`[Network error]: ${networkError}`);
                if (
                  !skipNetWorkWarning &&
                  networkError.message === 'Network request failed'
                ) {
                  emitter.emit(AppFlowActions.NOTIFY_NETWORK_ERROR);
                }
              }
            },
          ),
          new HttpLink({
            uri: APOLLO_HOST,
            credentials: 'same-origin',
          }),
        ]),
      ),
      cache,
      defaultOptions: isUsingCache ? undefined : defaultOptions,
      name: 'web',
      version: packageJson.version,
    });
  } catch (error) {
    // Toast.show(error, Toast.LONG);
    console.log('errrror: ', error);
    if (error === 'No current user') {
      // emitter.emit(AppFlowActions.LOGOUT_REQUEST, 'request');
    }
    if (error.code === 'NetworkError') {
      // emitter.emit(AppFlowActions.NOTIFY_NETWORK_ERROR);
    }
    return null;
  }
};

export const createAnonymusClient = async (anonymousToken = '') => {
  try {
    const authLink = setContext((_, {headers}) => ({
      headers: {...headers, 'anonymous-token': anonymousToken},
    }));
    return new ApolloClient({
      link: authLink.concat(
        ApolloLink.from([
          onError(
            ({graphQLErrors, networkError, response, operation, forward}) => {
              console.log({
                graphQLErrors,
                networkError,
                response,
                forward,
              });
              if (graphQLErrors) {
                console.log({graphQLErrors});
              }
              if (networkError) {
                console.log(`[Network error]: ${networkError}`);
                if (networkError.message === 'Network request failed') {
                  emitter.emit(AppFlowActions.NOTIFY_NETWORK_ERROR);
                }
              }
            },
          ),
          new HttpLink({
            uri: APOLLO_HOST,
            credentials: 'same-origin',
          }),
        ]),
      ),
      cache,
      defaultOptions,
      name: 'web',
      version: packageJson.version,
    });
  } catch (error) {
    // Toast.show(error, Toast.LONG);
    console.log('errrror: ', error);
    if (error === 'No current user') {
      // emitter.emit(AppFlowActions.LOGOUT_REQUEST, 'request');
    }
    if (error.code === 'NetworkError') {
      // emitter.emit(AppFlowActions.NOTIFY_NETWORK_ERROR);
    }
    return null;
  }
};

export default createClient;

export const resetStore = async () => {
  const client = await createClient();
  return client.resetStore();
};
