# Rowing Improvement Website

A comprehensive web platform for rowers to improve their performance through training plans, video analysis, community features, and data tracking.

## 🚀 Features

### Core Features
- **User Authentication**: Secure login/registration with password hashing
- **Training Plans**: Personalized workout programs based on skill level and goals
- **Progress Tracking**: Log workouts and track improvements over time
- **Video Analysis**: Upload and analyze rowing technique videos
- **Community**: Forums, challenges, and expert Q&A sessions
- **Nutrition & Recovery**: Meal plans, hydration guides, and recovery protocols
- **Dark/Light Theme**: Toggle between themes for better user experience

### Security Features
- **Password Hashing**: All passwords are hashed using bcryptjs with 12 salt rounds
- **Secure Authentication**: JWT-based authentication system
- **Environment Variables**: Sensitive data stored in environment variables
- **Input Validation**: Form validation and sanitization

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Query** for data fetching
- **Socket.io-client** for real-time features
- **Heroicons** for icons
- **bcryptjs** for password hashing

### Backend
- **Node.js** with Express and TypeScript
- **Socket.io** for real-time communication
- **JWT** for authentication
- **Prisma** as ORM
- **PostgreSQL** database
- **Redis** for caching and sessions

### Infrastructure
- **Docker** and Docker Compose for containerization
- **JSONBin** for user data storage (development)
- **AWS S3** for file storage (planned)
- **CloudFront** for CDN (planned)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- Python 3.8+ (for ML/data analysis features)
- Docker (optional, for containerized development)

## 🚀 Quick Installation

### Option 1: Automated Setup (Recommended)

**Windows:**
```bash
# Clone the repository
git clone <your-repo-url>
cd "Crew Training Website 3"

# Run the automated setup script
.\rowing-app\setup.bat
```

**Linux/Mac:**
```bash
# Clone the repository
git clone <your-repo-url>
cd "Crew Training Website 3"

# Run the automated setup script
chmod +x ./rowing-app/setup.sh
./rowing-app/setup.sh
```

### Option 2: Manual Setup

1. **Clone and navigate to the project:**
```bash
git clone <your-repo-url>
cd "Crew Training Website 3/rowing-app"
```

2. **Install dependencies:**
```bash
# Backend dependencies
cd server
npm install

# Frontend dependencies
cd ../client
npm install

# Python dependencies (for ML features)
cd ..
pip install -r requirements.txt
```

3. **Set up environment variables:**
```bash
# Backend environment
cd server
cp env.example .env
# Edit .env with your configuration

# Frontend environment
cd ../client
cp env.example .env
# Edit .env with your configuration
```

4. **Set up Python virtual environment:**
```bash
# Windows
scripts\setup-venv.bat

# Linux/Mac
chmod +x scripts/setup-venv.sh
./scripts/setup-venv.sh
```

## 🔧 Environment Variables

### Backend (.env in server directory)
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/rowing_app"

# JWT
JWT_SECRET="your-super-secret-jwt-key"

# Server
PORT=5000
NODE_ENV=development

# Redis
REDIS_URL="redis://localhost:6379"
```

### Frontend (.env in client directory)
```env
# JSONBin Configuration (for user authentication)
REACT_APP_JSONBIN_BIN_ID=6894f946ae596e708fc466ca
REACT_APP_JSONBIN_API_KEY=$2a$10$2sOqkO6kJcDT2VxEmJA.Ce72OnmrtYiyBUalrFOP3BpPOyF/jzazy
REACT_APP_JSONBIN_BASE_URL=https://api.jsonbin.io/v3/b

# API Configuration
REACT_APP_API_URL=http://localhost:5000
```

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start the backend server:**
```bash
cd server
npm run dev
```

2. **Start the frontend development server:**
```bash
cd client
npm start
```

3. **Access the application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Using Docker

```bash
# Build and start all services
docker-compose up --build

# Run in background
docker-compose up -d
```

## 🔐 Security Implementation

### Password Hashing
- **Algorithm**: bcryptjs with 12 salt rounds
- **Storage**: Hashed passwords only (never plain text)
- **Verification**: Secure comparison using bcrypt.compare()
- **Security**: Passwords are never returned in API responses

### Authentication Flow
1. User registers with email/password
2. Password is hashed using bcryptjs
3. Hashed password is stored in JSONBin
4. User logs in with email/password
5. Password is compared with stored hash
6. JWT token is issued for session management

### Data Protection
- All sensitive data stored in environment variables
- User passwords are never logged or exposed
- API responses exclude password fields
- Input validation on all forms

## 📁 Project Structure

```
rowing-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts (Auth, Theme)
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── utils/          # Utility functions
│   ├── package.json
│   └── tsconfig.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── middleware/     # Express middleware
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utility functions
│   ├── package.json
│   └── tsconfig.json
├── prisma/                 # Database schema
│   └── schema.prisma
├── scripts/                # Setup and utility scripts
├── docker/                 # Docker configurations
├── requirements.txt        # Python dependencies
└── docker-compose.yml      # Docker orchestration
```

## 🧪 Testing

### Frontend Tests
```bash
cd client
npm test
```

### Backend Tests
```bash
cd server
npm test
```

## 🚀 Deployment

### Production Build
```bash
# Frontend
cd client
npm run build

# Backend
cd server
npm run build
```

### Environment Setup
1. Set `NODE_ENV=production`
2. Configure production database
3. Set up SSL certificates
4. Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the troubleshooting guide

---

**Note**: This is a development version. For production use, ensure all security measures are properly configured and tested.
