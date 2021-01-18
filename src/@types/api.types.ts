export type Response<T> = T;

export interface Options {
    method: 'POST' | 'PUT' | 'GET' | 'DELETE';
    body?: string | number | Record<string, unknown>;
}
