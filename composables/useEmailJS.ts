import type { SendPayload } from '@/shareds/composables/useEmailJS/types';

export const useEmailJS = () => {
  const send = async (payload: SendPayload): Promise<string> => {
    return $fetch<string>('/api/contact-email/send', {
      method: 'POST',
      ignoreResponseError: true,
      body: payload
    });
  };

  return { send };
};
