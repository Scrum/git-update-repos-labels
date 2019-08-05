import ghGot = require('gh-got');

interface options {
  label: label,
  owner: string,
  repo: string,
  token: string
}

interface label {
  name: string,
  color: string,
  description: string
}

export default async ({label: {name, color, description}, owner, repo, token}: options): Promise<object> => {
  return ghGot.patch(`repos/${owner}/${repo}/labels/${name}`, {
    json: true,
    token,
    body: {name, color, description}
  });
}
