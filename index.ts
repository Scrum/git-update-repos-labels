import graphqlGot = require('graphql-got');

interface options {
  label: label,
  token: string
}

interface label {
  id: string,
  name: string,
  color: string,
  description: string
}

export default ({label: {id, name, color, description}, token}: options) => {
  return graphqlGot('https://api.github.com/graphql', {
    query: `mutation {
      updateLabel(input: {id: "${id}", name: "${name}", color: "${color}", description: ${description}}) {
        label {
          id
          name
          color
          description
        }
      }
    }`, 
    headers: {
      'accept': 'application/vnd.github.bane-preview+json'
    },
    token
  }).then(({body: {updateLabel: {label}}}) => label);
}

