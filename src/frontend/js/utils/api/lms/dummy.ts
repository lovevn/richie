import { AuthenticationBackend, LMSBackend } from 'types/commonDataProps';
import { Maybe, Nullable } from 'types/utils';
import { User } from 'types/User';
import { APILms } from 'types/api';
import { Enrollment, OpenEdXEnrollment } from 'types';
import { location } from 'utils/indirection/window';
import { RICHIE_USER_TOKEN } from 'settings';

const API = (APIConf: LMSBackend | AuthenticationBackend): APILms => {
  const extractCourseIdFromUrl = (url: string): Maybe<Nullable<string>> => {
    const matches = url.match((APIConf as LMSBackend).course_regexp);
    return matches && matches[1] ? matches[1] : null;
  };

  return {
    user: {
      me: async () => ({
        // Simulate user is authenticated as `admin` with a valid access_token to request Joanie API.
        username: 'admin',
        access_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwidXNlcm5hbWUiOiJhZG1pbiIsImp0aSI6IjIxZGM5ZmI5MTZjYzRmNjViNTQ3OThmNjJmZWM0NTU0IiwiZnVsbF9uYW1lIjoiSm9obiBEb2UiLCJleHAiOjEwNjUyMjU2ODA4LCJpYXQiOjE2NTIyNTY4MDgsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20ifQ.jx7dfy12ckgJ3fFYSXxlfS1J7-g8pbSEVVYZGt9oIGQ',
      }),
      login: () => location.reload(),
      register: () => location.reload(),
      logout: async () => undefined,
      accessToken: () => sessionStorage.getItem(RICHIE_USER_TOKEN),
    },
    enrollment: {
      get: async (url: string, user: Nullable<User>) =>
        new Promise((resolve) => {
          const courseId = extractCourseIdFromUrl(url);
          const startDateTime = new Date(Date.now() - Math.random() * (200 * 24 * 60 * 60 * 1000)); // 200days < startDate < now
          const endDateTime = new Date(
            startDateTime.getTime() + Math.random() * (90 * 24 * 60 * 60 * 1000),
          ); // starDate < endDate < startDate + 90days
          const enrollmentStartDateTime = new Date(
            startDateTime.getTime() +
              Math.random() * (endDateTime.getTime() - startDateTime.getTime()),
          );
          const enrollmentEndDateTime = new Date(
            enrollmentStartDateTime.getTime() +
              Math.random() * (endDateTime.getTime() - enrollmentStartDateTime.getTime()),
          );

          if (user && sessionStorage.getItem(`${user.username}-${courseId}`)) {
            resolve({
              created: new Date().toISOString(),
              mode: 'audit',
              is_active: true,
              course_details: {
                course_id: courseId,
                course_name: `Course: ${courseId}`,
                enrollment_start: enrollmentStartDateTime.toISOString(),
                enrollment_end: enrollmentEndDateTime.toISOString(),
                course_start: startDateTime.toISOString(),
                course_end: endDateTime.toISOString(),
                invite_only: false,
                course_modes: [
                  {
                    slug: 'audit',
                    name: 'Audit',
                    min_price: 0,
                    suggested_prices: '',
                    currency: 'eur',
                    expiration_datetime: null,
                    description: null,
                    sku: null,
                    bulk_sku: null,
                  },
                ],
              },
              user: user.username,
            });
          }
          resolve(null);
        }),
      isEnrolled: async (enrollment: Maybe<Nullable<Enrollment>>) =>
        new Promise((resolve) => resolve(!!(enrollment as OpenEdXEnrollment)?.is_active)),
      set: (url: string, user: User): Promise<boolean> =>
        new Promise((resolve) => {
          const courseId = extractCourseIdFromUrl(url);
          sessionStorage.setItem(`${user.username}-${courseId}`, 'true');
          resolve(true);
        }),
    },
  };
};

export default API;
