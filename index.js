#!/usr/bin/env node

/**
 * git-master-warning
 * 
 * A global npm package that monitors git commands and displays a warning
 * when operating on the master branch.
 */

module.exports = require('./bin/git-wrapper');
