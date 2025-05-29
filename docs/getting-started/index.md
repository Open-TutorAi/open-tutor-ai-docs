---
sidebar_position: 200
title: "🚀 Getting Started"
---

# Getting Started with Open TutorAI

Welcome to the **Open TutorAI Documentation!** Below is a list of essential steps and resources to help you get started, manage, and develop with Open TutorAI.

## 🎥 Video Guide

> 📺 **Watch**: [EP1 – Step-by-step setup guide on YouTube](https://youtu.be/vDOujIcJxrE)

<iframe width="560" height="315" src="https://www.youtube.com/embed/vDOujIcJxrE?si=6G8e8ZiZ3c3f8Z_R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 🛠️ Setup Guide

Follow these steps to set up the project locally:

1. **Fork and Clone the Repository**
   - Go to [GitHub Repository](https://github.com/R2D-dev/open-tutor-ai-CE)
   - Click on **Fork**, then clone your forked repo:
     ```bash
     git clone https://github.com/YOUR_USERNAME/open-tutor-ai-CE.git
     cd open-tutor-ai-CE
     ```

2. **Backend Setup**
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Create and activate a new Conda environment:
     ```bash
     conda create -n tutorai-env python=3.11
     conda activate tutorai-env
     ```
   - Install the required packages:
     ```bash
     pip install -r requirements.txt
     ```

   - For development:
     ```bash
     ./dev.sh
     ```
   - Or for production:
     ```bash
     ./start.sh
     ```

3. **Frontend Setup**
   - From the root of the project (or navigate to the frontend folder):
     ```bash
     npm install
     npm run dev
     ```

---

Happy exploring 🎉 If you have questions, join our [community](https://discord.gg/BTQtE2deEm) or raise an issue on [GitHub](https://github.com/R2D-dev/open-tutor-ai-CE).
