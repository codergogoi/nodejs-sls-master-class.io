<!--
title: 'User Micro-Service'
description: 'This project is a part of NodeJS Microservice with Serverless Masterclass. User Service is responsible all the user faced functionality as we discussed on the system design episode. I will be happy if leave a star to this repository to help others to find this resource.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/codergogoi'
authorName: 'Code With Jay'
authorAvatar: ''
-->

# User Microservice - [NodeJS Microservice with Serverless]

This project is a part of NodeJS Microservice with Serverless Masterclass. User Service is responsible all the user faced functionality as we discussed on the system design episode. I will be happy if leave a star to this repository to help others to find this resource.

## Installation Guide

Install NodeJS atleast v16.xx

- https://nodejs.org/en/

Install Serverless Framework Cli

```
$ npm install -g serverless
$ npm install -g typescript

```

### Plugins Required

```
$ sls plugin install --name serverless-plugin-typescript

```

```bash
$ sls plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
$ sls offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).

### Deployment Command

```
$ sls deploy --verbose

```
