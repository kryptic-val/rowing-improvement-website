@echo off
echo 🐍 Setting up Python Virtual Environment
echo ========================================

REM Check if Python 3 is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python is not installed. Please install Python 3.8+ first.
    pause
    exit /b 1
)

REM Check if pip is installed
pip --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ pip is not installed. Please install pip first.
    pause
    exit /b 1
)

REM Create virtual environment
echo 📦 Creating virtual environment...
python -m venv venv

REM Activate virtual environment
echo 🔧 Activating virtual environment...
call venv\Scripts\activate.bat

REM Upgrade pip
echo ⬆️  Upgrading pip...
python -m pip install --upgrade pip

REM Install requirements
echo 📦 Installing Python dependencies...
pip install -r requirements.txt

echo ✅ Python virtual environment setup complete!
echo.
echo To activate the virtual environment:
echo   venv\Scripts\activate.bat
echo.
echo To deactivate:
echo   deactivate
echo.
echo To install new packages:
echo   pip install package-name
echo.
echo To update requirements.txt:
echo   pip freeze ^> requirements.txt
pause
