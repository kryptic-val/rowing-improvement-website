import { jsonbinService } from '../services/jsonbinService';

export const debugAuthFlow = async () => {
  console.log('=== DEBUGGING AUTH FLOW ===');
  
  try {
    // Step 1: Get current users
    console.log('1. Getting current users...');
    const currentUsers = await jsonbinService.getUsers();
    console.log('Current users:', currentUsers);
    console.log('User count:', currentUsers.length);
    
    // Step 1.5: Check raw JSONbin data
    console.log('1.5. Checking raw JSONbin data...');
    const JSONBIN_BIN_ID = process.env.REACT_APP_JSONBIN_BIN_ID || '6894f946ae596e708fc466ca';
    const JSONBIN_API_KEY = process.env.REACT_APP_JSONBIN_API_KEY || '$2a$10$2sOqkO6kJcDT2VxEmJA.Ce72OnmrtYiyBUalrFOP3BpPOyF/jzazy';
    const JSONBIN_BASE_URL = process.env.REACT_APP_JSONBIN_BASE_URL || 'https://api.jsonbin.io/v3/b';
    
    const rawResponse = await fetch(`${JSONBIN_BASE_URL}/${JSONBIN_BIN_ID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY,
      },
    });
    
    if (rawResponse.ok) {
      const rawData = await rawResponse.json();
      console.log('Raw JSONbin data:', rawData);
      console.log('Record structure:', rawData.record);
    } else {
      console.error('Failed to get raw JSONbin data:', rawResponse.status, rawResponse.statusText);
    }
    
    // Step 2: Check if your user exists
    console.log('2. Checking for your user...');
    const yourUser = currentUsers.find(u => u.email === 'vincentniuliu@gmail.com');
    console.log('Your user found:', !!yourUser);
    if (yourUser) {
      console.log('Your user data:', {
        id: yourUser.id,
        email: yourUser.email,
        name: yourUser.name,
        hasPassword: !!yourUser.password,
        passwordLength: yourUser.password?.length || 0
      });
    }
    
    // Step 3: Test creating a new user
    console.log('3. Testing user creation...');
    const testUserData = {
      name: 'Debug Test User',
      email: `debug-test-${Date.now()}@example.com`,
      password: 'debugpassword123'
    };
    
    console.log('Test user data:', testUserData);
    console.log('About to call createUser...');
    
    const newUser = await jsonbinService.createUser(testUserData);
    console.log('New user created:', newUser);
    
    // Step 4: Get users again to see if new user was stored
    console.log('4. Getting users after creation...');
    const updatedUsers = await jsonbinService.getUsers();
    console.log('Updated users count:', updatedUsers.length);
    
    const createdUser = updatedUsers.find(u => u.email === testUserData.email);
    console.log('Created user in storage:', !!createdUser);
    if (createdUser) {
      console.log('Created user has password:', !!createdUser.password);
    }
    
    // Step 5: Test authentication with new user
    console.log('5. Testing authentication...');
    const authResult = await jsonbinService.authenticateUser(testUserData.email, testUserData.password);
    console.log('Authentication result:', authResult);
    
    return {
      success: true,
      currentUserCount: currentUsers.length,
      yourUserExists: !!yourUser,
      yourUserHasPassword: yourUser ? !!yourUser.password : false,
      newUserCreated: !!newUser,
      newUserStored: !!createdUser,
      newUserHasPassword: createdUser ? !!createdUser.password : false,
      authSuccess: !!authResult
    };
    
  } catch (error) {
    console.error('Debug auth flow failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};
