interface options {
    label: label;
    owner: string;
    repo: string;
    token: string;
}
interface label {
    name: string;
}
declare const _default: ({ label: { name }, owner, repo, token }: options) => Promise<object>;
export default _default;
