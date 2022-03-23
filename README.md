# get_cpus_length

Get os.cpus().length to match Linux container CPU quota. 

```diff
const getCpusLength = require("get_cpus_length");

+ console.log("CpusLength: ", getCpusLength());
- console.log("CpusLength: ", require("os").cpus().length);
```

## Installing
<a href="https://www.npmjs.com/~get_cpus_length" target="_blank"><img src="https://img.shields.io/npm/v/get_cpus_length.svg" alt="NPM Version" /></a>
```bash
npm install get_cpus_length
```
or
```bash
yarn add get_cpus_length
```

## why
When your kubernetes is set up [Resource Management for Pods and Containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/), this problem occurs [Not correct os.cpus().length inside the docker container with cpus limited. #28762](https://github.com/nodejs/node/issues/28762).