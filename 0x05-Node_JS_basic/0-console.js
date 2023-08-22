#!/usr/bin/env node

function displayMessage (message) {
  if (typeof message === 'string') {
    console.log(message);
  }
}

module.exports = displayMessage;
