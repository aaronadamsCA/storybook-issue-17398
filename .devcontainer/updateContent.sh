#!/usr/bin/env zsh

# Install Node.js version defined in .nvmrc
zsh -i -c "nvm install && nvm use"

# Install project dependencies defined in yarn.lock
yarn install --immutable
