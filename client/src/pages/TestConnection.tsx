import React, { useState } from 'react';
import { testJsonbinConnection, testRawJsonbinResponse, testPasswordCompatibility } from '../utils/testJsonbinConnection';
import { debugAuthFlow } from '../utils/debugAuth';

const TestConnection: React.FC = () => {
  const [testResult, setTestResult] = useState<any>(null);
  const [rawTestResult, setRawTestResult] = useState<any>(null);
  const [passwordTestResult, setPasswordTestResult] = useState<any>(null);
  const [debugResult, setDebugResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRaw, setIsLoadingRaw] = useState(false);
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);
  const [isLoadingDebug, setIsLoadingDebug] = useState(false);

  const runTest = async () => {
    setIsLoading(true);
    const result = await testJsonbinConnection();
    setTestResult(result);
    setIsLoading(false);
  };

  const runRawTest = async () => {
    setIsLoadingRaw(true);
    const result = await testRawJsonbinResponse();
    setRawTestResult(result);
    setIsLoadingRaw(false);
  };

  const runPasswordTest = async () => {
    setIsLoadingPassword(true);
    const result = await testPasswordCompatibility();
    setPasswordTestResult(result);
    setIsLoadingPassword(false);
  };

  const runDebugTest = async () => {
    setIsLoadingDebug(true);
    const result = await debugAuthFlow();
    setDebugResult(result);
    setIsLoadingDebug(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">JSONbin Connection Test</h1>
        
        <div className="space-x-4">
          <button
            onClick={runTest}
            disabled={isLoading}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? 'Running Test...' : 'Run Connection Test'}
          </button>
          
          <button
            onClick={runRawTest}
            disabled={isLoadingRaw}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 disabled:opacity-50"
          >
            {isLoadingRaw ? 'Running Raw Test...' : 'Run Raw JSONbin Test'}
          </button>
          
          <button
            onClick={runPasswordTest}
            disabled={isLoadingPassword}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 disabled:opacity-50"
          >
            {isLoadingPassword ? 'Running Password Test...' : 'Run Password Test'}
          </button>
          
          <button
            onClick={runDebugTest}
            disabled={isLoadingDebug}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 disabled:opacity-50"
          >
            {isLoadingDebug ? 'Running Debug Test...' : 'Run Debug Test'}
          </button>
        </div>

        {testResult && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Test Result: {testResult.success ? '✅ Success' : '❌ Failed'}
            </h2>
            
            {testResult.error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded">
                <h3 className="font-semibold text-red-800">Error:</h3>
                <p className="text-red-700">{testResult.error}</p>
              </div>
            )}

            {testResult.success && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Users Count:</h3>
                  <p>{testResult.usersCount}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Password Hash Test:</h3>
                  <pre className="bg-gray-100 p-2 rounded text-sm">
                    {JSON.stringify(testResult.hashTest, null, 2)}
                  </pre>
                </div>
                
                <div>
                  <h3 className="font-semibold">New User Created:</h3>
                  <pre className="bg-gray-100 p-2 rounded text-sm">
                    {JSON.stringify(testResult.newUser, null, 2)}
                  </pre>
                </div>
                
                <div>
                  <h3 className="font-semibold">Authentication Test:</h3>
                  <pre className="bg-gray-100 p-2 rounded text-sm">
                    {JSON.stringify(testResult.authTest, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}

        {rawTestResult && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Raw JSONbin Test Result: {rawTestResult.success ? '✅ Success' : '❌ Failed'}
            </h2>
            
            {rawTestResult.error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded">
                <h3 className="font-semibold text-red-800">Error:</h3>
                <p className="text-red-700">{rawTestResult.error}</p>
              </div>
            )}

            {rawTestResult.success && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Response Status:</h3>
                  <p>{rawTestResult.status}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Raw Response Data:</h3>
                  <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto max-h-96">
                    {JSON.stringify(rawTestResult.data, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}

        {passwordTestResult && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Password Compatibility Test Result: {passwordTestResult.error ? '❌ Failed' : '✅ Success'}
            </h2>
            
            {passwordTestResult.error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded">
                <h3 className="font-semibold text-red-800">Error:</h3>
                <p className="text-red-700">{passwordTestResult.error}</p>
              </div>
            )}

            {!passwordTestResult.error && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Existing Hash Test:</h3>
                  <p>Valid: {passwordTestResult.existingHashValid ? '✅ Yes' : '❌ No'}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">New Hash Generated:</h3>
                  <pre className="bg-gray-100 p-2 rounded text-sm">
                    {passwordTestResult.newHash}
                  </pre>
                </div>
                
                <div>
                  <h3 className="font-semibold">New Hash Test:</h3>
                  <p>Valid: {passwordTestResult.newHashValid ? '✅ Yes' : '❌ No'}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {debugResult && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Debug Auth Flow Result: {debugResult.success ? '✅ Success' : '❌ Failed'}
            </h2>
            
            {debugResult.error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded">
                <h3 className="font-semibold text-red-800">Error:</h3>
                <p className="text-red-700">{debugResult.error}</p>
              </div>
            )}

            {debugResult.success && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Current User Count:</h3>
                  <p>{debugResult.currentUserCount}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Your User Status:</h3>
                  <p>Exists: {debugResult.yourUserExists ? '✅ Yes' : '❌ No'}</p>
                  <p>Has Password: {debugResult.yourUserHasPassword ? '✅ Yes' : '❌ No'}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">New User Creation:</h3>
                  <p>Created: {debugResult.newUserCreated ? '✅ Yes' : '❌ No'}</p>
                  <p>Stored: {debugResult.newUserStored ? '✅ Yes' : '❌ No'}</p>
                  <p>Has Password: {debugResult.newUserHasPassword ? '✅ Yes' : '❌ No'}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Authentication Test:</h3>
                  <p>Success: {debugResult.authSuccess ? '✅ Yes' : '❌ No'}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestConnection;
