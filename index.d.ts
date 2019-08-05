interface options {
    label: label;
    owner: string;
    repo: string;
    token: string;
}
interface label {
    name: string;
    color: string;
    description: string;
}
declare const _default: ({ label: { name, color, description }, owner, repo, token }: options) => Promise<object>;
export default _default;
