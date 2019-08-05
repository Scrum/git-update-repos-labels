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

gitUpdateReposLabels({label: {name: 'bug', color: 'd73a4a', description: 'Something isn\'t working'}, owner: 'scrum', repo: 'slims', token: '59bd8d5eb1980b7f926f2d106f4f2f0312fdf97f'});
```
> will be update label in repository

## API
#### `label`

Type: `object` **`Required`**  
Default: `undefined`  
Description: *label creation options `{name: string, color: string, description: string}` when `{name, color}` are required*

#### `owner`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *Github owner or organization name.*

#### `repo`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *Repository name.*

#### `token`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)*

