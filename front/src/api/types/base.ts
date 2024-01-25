export type ResponseError = {
  isError: boolean;
  statusCode: number;
  statusMessage: string;
  errors: Record<string, any>[] | null;
  message?: string | string[];
};
