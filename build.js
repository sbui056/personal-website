#!/usr/bin/env node

// Set environment variable to skip native dependencies
process.env.ROLLUP_SKIP_NATIVE = 'true';

// Import and run the build
import { execSync } from 'child_process';

try {
  console.log('Running TypeScript compilation...');
  execSync('tsc', { stdio: 'inherit' });
  
  console.log('Running Vite build...');
  execSync('vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} 