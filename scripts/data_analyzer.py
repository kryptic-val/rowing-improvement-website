#!/usr/bin/env python3
"""
Data Analysis Utility for Rowing App
This script demonstrates the use of the Python virtual environment
for data analysis and ML components.
"""

import os
import sys
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
import json

def check_environment():
    """Check if we're running in the virtual environment."""
    if hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix):
        print("✅ Running in virtual environment")
        print(f"📍 Python path: {sys.executable}")
        return True
    else:
        print("⚠️  Not running in virtual environment")
        print("💡 Activate with: source venv/bin/activate (Linux/Mac) or venv\\Scripts\\activate (Windows)")
        return False

def generate_sample_workout_data():
    """Generate sample workout data for demonstration."""
    np.random.seed(42)
    
    # Generate 30 days of workout data
    dates = [datetime.now() - timedelta(days=i) for i in range(30)]
    dates.reverse()
    
    data = {
        'date': dates,
        'distance_meters': np.random.randint(2000, 10000, 30),
        'duration_minutes': np.random.randint(20, 60, 30),
        'avg_pace_min_per_500m': np.random.uniform(1.8, 2.5, 30),
        'max_heart_rate': np.random.randint(140, 190, 30),
        'calories_burned': np.random.randint(200, 600, 30),
        'stroke_rate': np.random.randint(18, 32, 30)
    }
    
    return pd.DataFrame(data)

def analyze_workout_trends(df):
    """Analyze workout trends and generate insights."""
    print("\n📊 Workout Analysis Report")
    print("=" * 50)
    
    # Basic statistics
    print(f"📈 Total workouts: {len(df)}")
    print(f"🏃 Total distance: {df['distance_meters'].sum() / 1000:.1f} km")
    print(f"⏱️  Total time: {df['duration_minutes'].sum() / 60:.1f} hours")
    print(f"🔥 Total calories: {df['calories_burned'].sum():,}")
    
    # Performance trends
    print(f"\n📈 Performance Trends:")
    print(f"  Average pace: {df['avg_pace_min_per_500m'].mean():.2f} min/500m")
    print(f"  Best pace: {df['avg_pace_min_per_500m'].min():.2f} min/500m")
    print(f"  Average stroke rate: {df['stroke_rate'].mean():.1f} spm")
    
    # Weekly progress
    df['week'] = pd.to_datetime(df['date']).dt.isocalendar().week
    weekly_distance = df.groupby('week')['distance_meters'].sum()
    
    print(f"\n📅 Weekly Progress:")
    for week, distance in weekly_distance.items():
        print(f"  Week {week}: {distance/1000:.1f} km")
    
    return df

def create_visualization(df):
    """Create a simple visualization of the workout data."""
    try:
        plt.figure(figsize=(12, 8))
        
        # Create subplots
        fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(15, 10))
        
        # Distance over time
        ax1.plot(df['date'], df['distance_meters'] / 1000, 'b-', marker='o')
        ax1.set_title('Distance Over Time')
        ax1.set_ylabel('Distance (km)')
        ax1.tick_params(axis='x', rotation=45)
        
        # Pace distribution
        ax2.hist(df['avg_pace_min_per_500m'], bins=10, alpha=0.7, color='green')
        ax2.set_title('Pace Distribution')
        ax2.set_xlabel('Pace (min/500m)')
        ax2.set_ylabel('Frequency')
        
        # Heart rate vs pace
        ax3.scatter(df['avg_pace_min_per_500m'], df['max_heart_rate'], alpha=0.6)
        ax3.set_title('Heart Rate vs Pace')
        ax3.set_xlabel('Pace (min/500m)')
        ax3.set_ylabel('Max Heart Rate')
        
        # Calories burned
        ax4.bar(range(len(df)), df['calories_burned'], alpha=0.7, color='orange')
        ax4.set_title('Calories Burned per Workout')
        ax4.set_xlabel('Workout Number')
        ax4.set_ylabel('Calories')
        
        plt.tight_layout()
        plt.savefig('workout_analysis.png', dpi=300, bbox_inches='tight')
        print("\n📊 Visualization saved as 'workout_analysis.png'")
        
    except Exception as e:
        print(f"⚠️  Could not create visualization: {e}")
        print("💡 Make sure matplotlib is installed: pip install matplotlib")

def main():
    """Main function to demonstrate the virtual environment."""
    print("🚣‍♂️ Rowing App Data Analyzer")
    print("=" * 40)
    
    # Check environment
    if not check_environment():
        return
    
    # Generate sample data
    print("\n📊 Generating sample workout data...")
    df = generate_sample_workout_data()
    
    # Analyze the data
    df = analyze_workout_trends(df)
    
    # Create visualization
    print("\n📈 Creating visualization...")
    create_visualization(df)
    
    # Save data
    df.to_csv('sample_workout_data.csv', index=False)
    print("\n💾 Sample data saved as 'sample_workout_data.csv'")
    
    print("\n✅ Analysis complete!")
    print("\n💡 This demonstrates how the Python virtual environment")
    print("   can be used for data analysis and ML components in the rowing app.")

if __name__ == "__main__":
    main()
