/**
 * Authentication API
 *
 * Select the right authentication API according to authentication backend
 * provided in __richie_frontend_context
 *
 */
import { handle } from 'utils/errors/handle';
import { AuthenticationBackend } from 'types/commonDataProps';
import { Nullable } from 'utils/types';
import { ApiImplementation, ApiBackend } from 'types/api';
import BaseApiInterface from './lms/base';
import OpenEdxDogwoodApiInterface from './lms/openedx-dogwood';
import OpenEdxHawthornApiInterface from './lms/openedx-hawthorn';

const AuthenticationAPIHandler = (): Nullable<ApiImplementation['user']> => {
  const AUTHENTICATION: AuthenticationBackend = (window as any).__richie_frontend_context__?.context
    ?.authentication;
  if (!AUTHENTICATION) return null;

  switch (AUTHENTICATION.backend) {
    case ApiBackend.BASE:
      return BaseApiInterface(AUTHENTICATION).user;
    case ApiBackend.OPENEDX_DOGWOOD:
      return OpenEdxDogwoodApiInterface(AUTHENTICATION).user;
    case ApiBackend.OPENEDX_HAWTHORN:
      return OpenEdxHawthornApiInterface(AUTHENTICATION).user;
    default:
      handle(new Error(`No Authentication Backend found for ${AUTHENTICATION.backend}.`));
      return null;
  }
};

export const AuthenticationApi = AuthenticationAPIHandler();
