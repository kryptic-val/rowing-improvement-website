// Simple script to test JSONbin API key
// Run with: node test-api-key.js

const fetch = require('node-fetch');

const BIN_ID = '6894f946ae596e708fc466ca';
const BASE_URL = 'https://api.jsonbin.io/v3/b';

async function testApiKey(apiKey) {
  console.log('Testing API key...');
  console.log('Bin ID:', BIN_ID);
  console.log('API Key (first 10 chars):', apiKey.substring(0, 10) + '...');
  
  try {
    const response = await fetch(`${BASE_URL}/${BIN_ID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': apiKey,
      },
    });

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.log('Error response body:', errorText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Success! JSONbin response:');
    console.log(JSON.stringify(data, null, 2));
    
    return true;
  } catch (error) {
    console.error('❌ Failed:', error.message);
    return false;
  }
}

// Usage: Replace 'YOUR_API_KEY_HERE' with your actual API key
const apiKey = process.argv[2] || 'YOUR_API_KEY_HERE';

if (apiKey === 'YOUR_API_KEY_HERE') {
  console.log('Usage: node test-api-key.js YOUR_ACTUAL_API_KEY');
  console.log('Example: node test-api-key.js $2a$10$your_actual_key_here');
} else {
  testApiKey(apiKey);
}
