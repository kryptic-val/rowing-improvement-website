import { jsonbinService } from '../services/jsonbinService';

/**
 * Test password hashing functionality
 * This is a development utility to verify password hashing works correctly
 */
export const testPasswordHashing = async () => {
  console.log('🔐 Testing Password Hashing...');
  
  const testPassword = 'testPassword123!';
  
  try {
    // Test the hashing function
    const result = await jsonbinService.testPasswordHashing(testPassword);
    
    console.log('✅ Password hashing test results:');
    console.log('Original password:', testPassword);
    console.log('Hashed password:', result.hashed);
    console.log('Verification result:', result.isValid);
    
    if (result.isValid) {
      console.log('🎉 Password hashing is working correctly!');
    } else {
      console.log('❌ Password hashing verification failed!');
    }
    
    return result.isValid;
  } catch (error) {
    console.error('❌ Error testing password hashing:', error);
    return false;
  }
};

/**
 * Test user registration and login with hashed passwords
 */
export const testUserAuthentication = async () => {
  console.log('👤 Testing User Authentication...');
  
  const testUser = {
    name: 'Test User',
    email: 'test@example.com',
    password: 'securePassword123!'
  };
  
  try {
    // Test user registration
    console.log('📝 Testing user registration...');
    const newUser = await jsonbinService.createUser(testUser);
    
    if (newUser) {
      console.log('✅ User registration successful');
      console.log('User created:', { ...newUser, password: '[HIDDEN]' });
      
      // Test user authentication
      console.log('🔑 Testing user authentication...');
      const authenticatedUser = await jsonbinService.authenticateUser(
        testUser.email, 
        testUser.password
      );
      
      if (authenticatedUser) {
        console.log('✅ User authentication successful');
        console.log('Authenticated user:', { ...authenticatedUser, password: '[HIDDEN]' });
        return true;
      } else {
        console.log('❌ User authentication failed');
        return false;
      }
    } else {
      console.log('❌ User registration failed');
      return false;
    }
  } catch (error) {
    console.error('❌ Error testing user authentication:', error);
    return false;
  }
};

// Export for use in development
if (process.env.NODE_ENV === 'development') {
  (window as any).testPasswordHashing = testPasswordHashing;
  (window as any).testUserAuthentication = testUserAuthentication;
}
