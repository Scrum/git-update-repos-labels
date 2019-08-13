interface options {
    label: label;
    token: string;
}
interface label {
    id: string;
    name: string;
    color: string;
    description: string;
}
declare const _default: ({ label: { id, name, color, description }, token }: options) => any;
export default _default;
