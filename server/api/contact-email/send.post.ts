import type { SendData } from '@/shareds/composables/useEmailJS/types';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig().public;
  const { baseURL, key, serviceID, templateID } = config.emailJS;

  const payload = await readBody(event);

  const data: SendData = {
    service_id: serviceID,
    template_id: templateID,
    user_id: key.public,
    template_params: payload,
    accessToken: key.private
  };

  return $fetch<string>('/send', {
    baseURL: baseURL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });
});
