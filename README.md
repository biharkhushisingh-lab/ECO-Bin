# 🌱 EcoBin – Smart E-Waste Recycling Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://ecobin-recycling.netlify.app/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌐 Live Hosted Application

**Hosted URL:** https://ecobin-recycling.netlify.app/

## 🎬 Demo Video

**Watch the demo:** [EcoBin Demo Video](https://drive.google.com/file/d/1oQVZKXKXvEpa2K9BhMKeeBPKkFM3wLEH/view?usp=drivesdk)

> **Transform e-waste into eco-rewards** – A gamified platform that makes electronic waste recycling easy, rewarding, and fun!

---

## 🎯 The Problem

**E-waste is the fastest-growing waste stream globally**, yet only **17.4% gets recycled properly**. The main barriers are:

- ❌ **Lack of awareness** – People don't know how/where to recycle electronics
- ❌ **No incentives** – There's no motivation to recycle responsibly  
- ❌ **Inconvenience** – Finding recycling centers is difficult
- ❌ **Language barriers** – Many platforms are English-only

**In India alone**, we generate **3.2 million tonnes** of e-waste annually, but less than **10% is recycled formally**.

---

## 💡 Our Solution

**EcoBin** is an **AI-powered, gamified e-waste recycling platform** that:

✅ **Makes recycling easy** – Scan any electronic item to identify it  
✅ **Rewards users** – Earn Eco Points and real monetary value  
✅ **Finds nearby centers** – Live map with real-time geolocation  
✅ **Breaks language barriers** – 100+ language support via Google Translate  
✅ **Provides instant help** – AI chatbot for recycling queries  
✅ **Tracks impact** – Visualize your environmental contribution  

---

## ✨ Features

### 🎮 **Gamification & Rewards**
- **Eco Points System** – Earn points for every item recycled
- **Level Progression** – Unlock badges (Eco Warrior, Planet Protector, etc.)
- **Leaderboard & Streaks** – Track your recycling journey
- **Real Monetary Value** – See the cash value of your e-waste

### 🤖 **AI-Powered Assistance**
- **Smart Item Recognition** – Scan and identify electronic waste with visual feedback
- **Confidence Scores** – AI provides detection accuracy and component breakdown
- **Conversational EcoBot** – Advanced interactive chatbot that follows context and asks follow-up questions
- **Pre-programmed FAQs** – Quick buttons for batteries, points, and center locations

### 🗺️ **Live Interactive Map**
- **Real-time geolocation** – Automatically detects your location
- **3 Nearest Bins** – Sorted by proximity with distance calculation
- **One-click navigation** – Direct integration with Google Maps
- **Bin details** – Contact info, capacity status, operating hours

### 👨‍💼 **Admin Dashboard (NEW!)**
- **Geographic Overview** – Interactive map with all bins across the city
- **Real-Time Monitoring** – Live bin fill levels, status tracking
- **Smart Alerts System** – Automatic notifications for full bins and maintenance
- **Analytics Dashboard** – Waste collected, value generated, user engagement stats
- **Route Optimization** – Collection planning for optimal efficiency
- **Filter & Search** – Quick access to operational, full, or maintenance bins
- **Real Geolocation** – Find your exact location
- **Nearby Centers** – See 3 closest recycling bins
- **Get Directions** – One-click Google Maps navigation
- **Distance Display** – Know how far each center is

### 🌐 **Multi-Language Support**
- **100+ Languages** – Google Translate integration
- **Inclusive Design** – Accessible to all communities
- **Remember Preference** – Save your language choice

### 📊 **Impact Tracking**
- **CO₂ Saved** – See environmental impact in kg
- **Energy Equivalent** – Days of power saved
- **Visual Timeline** – Track your recycling history
- **Achievement Badges** – Celebrate milestones

### 🎨 **Beautiful UI/UX**
- **Cute Green Theme** – Friendly, approachable design
- **Smooth Animations** – Delightful micro-interactions
- **Responsive Design** – Works on all devices
- **Glassmorphism Effects** – Modern aesthetic

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Maps** | Leaflet.js + OpenStreetMap |
| **Translation** | Google Translate API |
| **AI Simulation** | Custom keyword-based chatbot |
| **Design** | Custom CSS with animations |
| **Hosting** | GitHub Pages / Netlify / Vercel |

**No external dependencies** – Pure vanilla web technologies for maximum performance!

---

## 🚀 Live Demo

### **👉 [Try EcoBin Now!](https://ecobin-recycling.netlify.app/)**

**Test the complete flow:**
1. Click "Start Recycling"
2. Select an e-waste item (phone, laptop, battery, charger)
3. View live map with your location
4. Simulate AI scanning
5. See your rewards and impact
6. Check your history and badges

---

## 📹 Demo Video

**Watch our walkthrough:** [Google Drive Link](YOUR_DEMO_VIDEO_LINK_HERE)

---

## 📦 Installation & Local Setup

### **Prerequisites**
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local server) OR any static file server

### **Steps**

1. **Clone the repository**
```bash
git clone https://github.com/biharkhushisingh-lab/ECO-Bin.git
cd ECO-Bin
```

2. **Run local server**

**Option A: Python**
```bash
python -m http.server 8000
```

**Option B: Node.js**
```bash
npx http-server -p 8000
```

3. **Open in browser**
```
http://localhost:8000
```

That's it! No build process, no dependencies to install. 🎉

---

## 📁 Project Structure

```
ecobin/
├── index.html          # Main HTML file
├── style.css           # All styling + animations
├── script.js           # App logic + chatbot + map
├── README.md           # This file
└── LICENSE             # MIT License
```

**Simplicity is our strength** – Only 3 core files, fully functional!

---

## 🎯 How It Works

### **User Flow:**

1. **🔒 Landing & Login**  
   → Choose your role: **I want to recycle** (User) or **Recycling Center** (Manager).  
   → New users can **Sign up** with mobile number and password.

2. **🏠 Home Dashboard**  
   → View your Eco Points, levels, and quick actions.  
   → Access the **EcoBot** for instant help.

3. **♻️ Waste Selection**  
   → Choose from 4 types: **Phone, Battery, Laptop, or Charger**.

4. **📍 Live Map & Centers**  
   → Real-time geolocation finds you instantly.  
   → See the **3 nearest centers** with distance, capacity, and contact info.  
   → One-click **Get Directions** to your chosen station.

5. **📱 AI Scanning Simulation**  
   → Point and "scan" your item with realistic progress animations.  
   → AI provides a **Confidence Score** and identifies the item.

6. **🍃 Nature's Reaction**  
   → Watch the Earth grow happy as you contribute!  
   → See your specific impact: **CO₂ saved** and **Energy recovered**.

7. **📜 History & Profile**  
   → Track your total impact, streaks, and unlocked **Achievement Badges**.

---

## 🌍 Environmental Impact

If **1000 users** recycle just **1 smartphone** each:

- 🌳 **1,800 kg CO₂ saved** (equivalent to planting 90 trees)
- ⚡ **5,000 kWh energy saved** (enough to power 5 homes for a month)
- ♻️ **450 kg materials recovered** (gold, copper, rare metals)

**Our goal:** Make this impact 100x by 2025!

---

## 🏆 Hackathon Highlights

### **What Makes EcoBin Special?**

✨ **UI/UX Excellence (40%)**
- Beautiful pastel green theme
- Smooth animations and transitions
- Intuitive navigation
- Mobile-first responsive design

⚙️ **Functionality (25%)**
- Complete recycling flow works end-to-end
- Live map with real geolocation
- Multi-language support
- Gamification system

🤖 **AI Logic (15%)**
- Smart chatbot with keyword matching
- Simulated item recognition
- Confidence scores and explanations

💡 **Innovation (10%)**
- Unique gamification approach
- Helper tools panel in top-right
- Waving robot animation
- Impact visualization

📊 **Presentation (10%)**
- Professional README
- Clear demo video
- Working live link
- Clean code structure

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Khushi Singh**

- GitHub: [@biharkhushisingh-lab](https://github.com/biharkhushisingh-lab)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_LINKEDIN)

---

## 🙏 Acknowledgments

- **OpenStreetMap** for free map tiles
- **Leaflet.js** for mapping library
- **Google Translate** for language support
- **IIT BHU** for the hackathon opportunity

---

## 📞 Support

Have questions? Need help?

- 💬 Open an [Issue](https://github.com/YOUR_USERNAME/ecobin/issues)
- 📧 Email: your.email@example.com
- 🤖 Try our in-app chatbot!

---

<div align="center">

### **🌱 Let's make the planet greener, one device at a time! 🌍**

**Made with 💚 for a sustainable future**

[⭐ Star this repo](https://github.com/biharkhushisingh-lab/ECO-Bin) | [🐛 Report Bug](https://github.com/biharkhushisingh-lab/ECO-Bin/issues) | [✨ Request Feature](https://github.com/biharkhushisingh-lab/ECO-Bin/issues)

</div>
