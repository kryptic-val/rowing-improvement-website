@echo off
setlocal enabledelayedexpansion

REM Virtual Environment Manager for Rowing App (Windows)
REM Usage: venv-manager.bat [command]

set VENV_DIR=venv
set REQUIREMENTS_FILE=requirements.txt

if "%1"=="" goto help
if "%1"=="help" goto help
if "%1"=="--help" goto help
if "%1"=="-h" goto help

if "%1"=="create" goto create
if "%1"=="activate" goto activate
if "%1"=="deactivate" goto deactivate
if "%1"=="install" goto install
if "%1"=="update" goto update
if "%1"=="status" goto status
if "%1"=="clean" goto clean

echo ❌ Unknown command: %1
echo Run 'venv-manager.bat help' for usage information.
exit /b 1

:create
echo 🐍 Creating Python Virtual Environment
echo ========================================

REM Check if Python is installed
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

REM Remove existing venv if it exists
if exist "%VENV_DIR%" (
    echo ⚠️  Virtual environment already exists. Removing old one...
    rmdir /s /q "%VENV_DIR%"
)

echo 📦 Creating virtual environment...
python -m venv "%VENV_DIR%"

echo 🔧 Activating virtual environment...
call "%VENV_DIR%\Scripts\activate.bat"

echo ⬆️  Upgrading pip...
python -m pip install --upgrade pip

echo 📦 Installing dependencies...
pip install -r "%REQUIREMENTS_FILE%"

echo ✅ Virtual environment created successfully!
goto end

:activate
if not exist "%VENV_DIR%" (
    echo ❌ Virtual environment not found. Run 'create' first.
    pause
    exit /b 1
)

echo 🔧 Activating virtual environment...
call "%VENV_DIR%\Scripts\activate.bat"
echo ✅ Virtual environment activated!
echo 📍 Python path: %VENV_DIR%\Scripts\python.exe
echo 📍 Pip path: %VENV_DIR%\Scripts\pip.exe
goto end

:deactivate
if defined VIRTUAL_ENV (
    deactivate
    echo ✅ Virtual environment deactivated!
) else (
    echo ⚠️  No virtual environment is currently active.
)
goto end

:install
if "%2"=="" (
    echo ❌ Please specify a package name.
    echo Usage: venv-manager.bat install ^<package-name^>
    pause
    exit /b 1
)

if not exist "%VENV_DIR%" (
    echo ❌ Virtual environment not found. Run 'create' first.
    pause
    exit /b 1
)

call "%VENV_DIR%\Scripts\activate.bat"
echo 📦 Installing %2...
pip install %2
echo ✅ Package %2 installed successfully!
goto end

:update
if not exist "%VENV_DIR%" (
    echo ❌ Virtual environment not found. Run 'create' first.
    pause
    exit /b 1
)

call "%VENV_DIR%\Scripts\activate.bat"
echo 📝 Updating requirements.txt...
pip freeze > "%REQUIREMENTS_FILE%"
echo ✅ requirements.txt updated!
goto end

:status
echo 📊 Virtual Environment Status
echo =============================

if exist "%VENV_DIR%" (
    echo ✅ Virtual environment exists: %VENV_DIR%
    
    if defined VIRTUAL_ENV (
        echo ✅ Virtual environment is ACTIVE
        echo 📍 Python: %VENV_DIR%\Scripts\python.exe
        echo 📍 Pip: %VENV_DIR%\Scripts\pip.exe
    ) else (
        echo ⚠️  Virtual environment is NOT active
        echo 💡 To activate: call %VENV_DIR%\Scripts\activate.bat
    )
) else (
    echo ⚠️  Virtual environment does not exist
    echo 💡 To create: venv-manager.bat create
)

if exist "%REQUIREMENTS_FILE%" (
    echo ✅ Requirements file exists: %REQUIREMENTS_FILE%
    for /f %%i in ('find /c /v "" ^< "%REQUIREMENTS_FILE%"') do set LINE_COUNT=%%i
    echo 📦 Dependencies: %LINE_COUNT% packages
) else (
    echo ⚠️  Requirements file not found: %REQUIREMENTS_FILE%
)
goto end

:clean
if exist "%VENV_DIR%" (
    echo ⚠️  Removing virtual environment...
    rmdir /s /q "%VENV_DIR%"
    echo ✅ Virtual environment removed!
) else (
    echo ⚠️  Virtual environment does not exist.
)
goto end

:help
echo 🐍 Virtual Environment Manager
echo =============================
echo Usage: venv-manager.bat [command]
echo.
echo Commands:
echo   create     - Create a new virtual environment
echo   activate   - Activate the virtual environment
echo   deactivate - Deactivate the virtual environment
echo   install    - Install a package (usage: install ^<package-name^>)
echo   update     - Update requirements.txt with current packages
echo   status     - Show virtual environment status
echo   clean      - Remove the virtual environment
echo   help       - Show this help message
echo.
echo Examples:
echo   venv-manager.bat create
echo   venv-manager.bat activate
echo   venv-manager.bat install numpy
echo   venv-manager.bat status
goto end

:end
if "%1"=="activate" (
    echo.
    echo 💡 To deactivate later, run: venv-manager.bat deactivate
)
