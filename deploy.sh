#!/bin/bash

# Warrior Nerds Quiz - Easy Deployment Script
echo "🚀 Deploying Warrior Nerds: The Quest for Eternal Geekdom"
echo "=================================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📁 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: Warrior Nerds Quiz - Ready for Vercel"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Please add your GitHub repository URL:"
    echo "   git remote add origin https://github.com/yourusername/warrior-nerds-quiz.git"
    echo "   git push -u origin main"
    echo ""
    echo "Then deploy to Vercel:"
    echo "   1. Go to vercel.com"
    echo "   2. Click 'New Project'"
    echo "   3. Import your GitHub repository"
    echo "   4. Click 'Deploy' (no configuration needed!)"
else
    echo "🚀 Pushing to GitHub..."
    git push origin main
    echo ""
    echo "✅ Code pushed to GitHub!"
    echo "Now deploy to Vercel:"
    echo "   1. Go to vercel.com"
    echo "   2. Click 'New Project'"
    echo "   3. Import your GitHub repository"
    echo "   4. Click 'Deploy' (no configuration needed!)"
fi

echo ""
echo "🎉 Your Warrior Nerds Quiz is ready for deployment!"
echo "⚔️ May your deployment be swift and your uptime eternal! ⚔️"
