# git-update-repos-labels
> A tiny helper to update of label in the github repository 

[![Travis Build Status](https://img.shields.io/travis/Scrum/git-update-repos-labels/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/git-update-repos-labels)[![Coveralls status](https://img.shields.io/coveralls/Scrum/git-update-repos-labels.svg?style=flat-square)](https://coveralls.io/r/Scrum/git-update-repos-labels)

## Install
```bash
npm install git-update-repos-labels
```

## Usage
```js
import gitUpdateReposLabels from 'git-update-repos-labels';

const token = '59bd8d5eb1980b7f926f2d106f4f2f0312fdf97f';
const label = {
  id: 'MDU6TGFiZWwxNDg1MjAwMjk2', 
  color: 'ededed', 
  name: 'status: in progress', 
  description: null
};

gitUpdateReposLabels({label, token});
//=> {id: "MDU6TGFiZWwxNDg1MjAwMjk2", "name": "status: in progress", "color": "ededed", "description": null}
```
> will be update label in repository

## API
#### `label`

Type: `object` **`Required`**  
Default: `undefined`  
Description: *label creation options `{id: string, name: string, color: string, description: string}` when `{id, name, color}` are required*

#### `token`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)*

