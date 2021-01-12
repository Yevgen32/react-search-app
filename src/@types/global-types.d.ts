declare global {
    type Key = string | number;

    interface Action {
        type: string;
        payload: unknown;
    }
}