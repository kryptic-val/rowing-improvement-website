#!/bin/bash

# Virtual Environment Manager for Rowing App
# Usage: ./venv-manager.sh [command]

VENV_DIR="venv"
REQUIREMENTS_FILE="requirements.txt"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

check_python() {
    if ! command -v python3 &> /dev/null; then
        print_error "Python 3 is not installed. Please install Python 3.8+ first."
        exit 1
    fi
    
    if ! command -v pip3 &> /dev/null; then
        print_error "pip3 is not installed. Please install pip first."
        exit 1
    fi
}

create_venv() {
    print_header "Creating Python Virtual Environment"
    check_python
    
    if [ -d "$VENV_DIR" ]; then
        print_warning "Virtual environment already exists. Removing old one..."
        rm -rf "$VENV_DIR"
    fi
    
    print_status "Creating virtual environment..."
    python3 -m venv "$VENV_DIR"
    
    print_status "Activating virtual environment..."
    source "$VENV_DIR/bin/activate"
    
    print_status "Upgrading pip..."
    pip install --upgrade pip
    
    print_status "Installing dependencies..."
    pip install -r "$REQUIREMENTS_FILE"
    
    print_status "Virtual environment created successfully!"
}

activate_venv() {
    if [ ! -d "$VENV_DIR" ]; then
        print_error "Virtual environment not found. Run 'create' first."
        exit 1
    fi
    
    print_status "Activating virtual environment..."
    source "$VENV_DIR/bin/activate"
    print_status "Virtual environment activated!"
    print_status "Python path: $(which python)"
    print_status "Pip path: $(which pip)"
}

deactivate_venv() {
    if [ -n "$VIRTUAL_ENV" ]; then
        deactivate
        print_status "Virtual environment deactivated!"
    else
        print_warning "No virtual environment is currently active."
    fi
}

install_package() {
    if [ -z "$1" ]; then
        print_error "Please specify a package name."
        echo "Usage: $0 install <package-name>"
        exit 1
    fi
    
    if [ ! -d "$VENV_DIR" ]; then
        print_error "Virtual environment not found. Run 'create' first."
        exit 1
    fi
    
    source "$VENV_DIR/bin/activate"
    print_status "Installing $1..."
    pip install "$1"
    print_status "Package $1 installed successfully!"
}

update_requirements() {
    if [ ! -d "$VENV_DIR" ]; then
        print_error "Virtual environment not found. Run 'create' first."
        exit 1
    fi
    
    source "$VENV_DIR/bin/activate"
    print_status "Updating requirements.txt..."
    pip freeze > "$REQUIREMENTS_FILE"
    print_status "requirements.txt updated!"
}

show_status() {
    print_header "Virtual Environment Status"
    
    if [ -d "$VENV_DIR" ]; then
        print_status "Virtual environment exists: $VENV_DIR"
        
        if [ -n "$VIRTUAL_ENV" ]; then
            print_status "Virtual environment is ACTIVE"
            print_status "Python: $(which python)"
            print_status "Pip: $(which pip)"
        else
            print_warning "Virtual environment is NOT active"
            print_status "To activate: source $VENV_DIR/bin/activate"
        fi
    else
        print_warning "Virtual environment does not exist"
        print_status "To create: $0 create"
    fi
    
    if [ -f "$REQUIREMENTS_FILE" ]; then
        print_status "Requirements file exists: $REQUIREMENTS_FILE"
        print_status "Dependencies: $(wc -l < "$REQUIREMENTS_FILE") packages"
    else
        print_warning "Requirements file not found: $REQUIREMENTS_FILE"
    fi
}

clean_venv() {
    if [ -d "$VENV_DIR" ]; then
        print_warning "Removing virtual environment..."
        rm -rf "$VENV_DIR"
        print_status "Virtual environment removed!"
    else
        print_warning "Virtual environment does not exist."
    fi
}

show_help() {
    print_header "Virtual Environment Manager"
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  create     - Create a new virtual environment"
    echo "  activate   - Activate the virtual environment"
    echo "  deactivate - Deactivate the virtual environment"
    echo "  install    - Install a package (usage: install <package-name>)"
    echo "  update     - Update requirements.txt with current packages"
    echo "  status     - Show virtual environment status"
    echo "  clean      - Remove the virtual environment"
    echo "  help       - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 create"
    echo "  $0 activate"
    echo "  $0 install numpy"
    echo "  $0 status"
}

# Main script logic
case "$1" in
    "create")
        create_venv
        ;;
    "activate")
        activate_venv
        ;;
    "deactivate")
        deactivate_venv
        ;;
    "install")
        install_package "$2"
        ;;
    "update")
        update_requirements
        ;;
    "status")
        show_status
        ;;
    "clean")
        clean_venv
        ;;
    "help"|"--help"|"-h"|"")
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo "Run '$0 help' for usage information."
        exit 1
        ;;
esac
