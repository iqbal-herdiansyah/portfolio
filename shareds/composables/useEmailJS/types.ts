export interface SendPayload {
  email: string;
  name: string;
  message: string;
}

export interface SendData {
  service_id: string;
  template_id: string;
  user_id: string;
  accessToken: string;
  template_params: SendPayload;
}
