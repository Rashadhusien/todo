export type ActionResponse<T = null> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  statusCode?: number;
};
