#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const path = require('path');

// ANSI color codes for red text
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

/**
 * Get the current git branch
 * @returns {string|null} Current branch name or null if not in a git repository
 */
function getCurrentBranch() {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD 2>/dev/null', {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    }).trim();
    return branch;
  } catch (error) {
    return null;
  }
}

/**
 * Display warning message in red
 * @param {string} message - Warning message to display
 */
function displayWarning(message) {
  console.error(`${RED}${message}${RESET}`);
}

/**
 * Main function to wrap git commands
 */
function main() {
  // Get the real git executable path
  const realGitPath = process.env.GIT_MASTER_WARNING_REAL_GIT || '/usr/bin/git';
  
  // Get command line arguments (skip 'node' and script name)
  const args = process.argv.slice(2);
  
  // Check if we're on the master branch
  const currentBranch = getCurrentBranch();
  
  if (currentBranch === 'master') {
    displayWarning('⚠️  警告: 您正在 master 分支上操作！');
    displayWarning('⚠️  WARNING: You are operating on the master branch!');
  }
  
  // Execute the real git command
  const gitProcess = spawn(realGitPath, args, {
    stdio: 'inherit',
    shell: false
  });
  
  gitProcess.on('exit', (code) => {
    process.exit(code || 0);
  });
  
  gitProcess.on('error', (error) => {
    console.error(`Error executing git: ${error.message}`);
    process.exit(1);
  });
}

main();
