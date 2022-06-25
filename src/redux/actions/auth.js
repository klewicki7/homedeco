export const EXAMPLE = 'EXAMPLE';
export const EXAMPLE_REQUEST = 'EXAMPLE_REQUEST';

export default {
    example: (payload) => ({ type: EXAMPLE, payload}),
    example_request : () => ({ type: EXAMPLE_REQUEST}),

}
