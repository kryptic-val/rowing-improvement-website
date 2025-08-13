// JSONBin Configuration
const JSONBIN_BIN_ID = process.env.REACT_APP_JSONBIN_BIN_ID || '6894f946ae596e708fc466ca';
const JSONBIN_API_KEY = process.env.REACT_APP_JSONBIN_API_KEY || '$2a$10$2sOqkO6kJcDT2VxEmJA.Ce72OnmrtYiyBUalrFOP3BpPOyF/jzazy';
const JSONBIN_BASE_URL = process.env.REACT_APP_JSONBIN_BASE_URL || 'https://api.jsonbin.io/v3/b';

export interface User {
  id: string;
  email: string;
  password: string; // In production, this should be hashed
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface JSONBinResponse {
  record: {
    users: User[];
  };
  metadata: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}

class JSONBinService {
  private baseURL: string;
  private apiKey: string;
  private binId: string;

  constructor() {
    this.baseURL = JSONBIN_BASE_URL;
    this.apiKey = JSONBIN_API_KEY;
    this.binId = JSONBIN_BIN_ID;
  }

  private getHeaders(): HeadersInit {
    return {
      'Content-Type': 'application/json',
      'X-Master-Key': this.apiKey,
    };
  }

  async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(`${this.baseURL}/${this.binId}`, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }

      const data: JSONBinResponse = await response.json();
      return data.record.users || [];
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }

  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User | null> {
    try {
      // First, get existing users
      const existingUsers = await this.getUsers();
      
      // Check if user already exists
      const existingUser = existingUsers.find(user => user.email === userData.email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      // Create new user
      const newUser: User = {
        ...userData,
        id: this.generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      // Add to users array
      const updatedUsers = [...existingUsers, newUser];

      // Update the bin
      const response = await fetch(`${this.baseURL}/${this.binId}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ users: updatedUsers }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create user: ${response.statusText}`);
      }

      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async updateUser(userId: string, updates: Partial<User>): Promise<User | null> {
    try {
      const existingUsers = await this.getUsers();
      const userIndex = existingUsers.findIndex(user => user.id === userId);
      
      if (userIndex === -1) {
        throw new Error('User not found');
      }

      // Update user
      existingUsers[userIndex] = {
        ...existingUsers[userIndex],
        ...updates,
        updatedAt: new Date().toISOString(),
      };

      // Update the bin
      const response = await fetch(`${this.baseURL}/${this.binId}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ users: existingUsers }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update user: ${response.statusText}`);
      }

      return existingUsers[userIndex];
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async authenticateUser(email: string, password: string): Promise<User | null> {
    try {
      const users = await this.getUsers();
      const user = users.find(u => u.email === email && u.password === password);
      return user || null;
    } catch (error) {
      console.error('Error authenticating user:', error);
      return null;
    }
  }

  async getUserById(userId: string): Promise<User | null> {
    try {
      const users = await this.getUsers();
      return users.find(user => user.id === userId) || null;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return null;
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }
}

export const jsonbinService = new JSONBinService();
