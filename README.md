# cameraApp
# 📸 Camera Upload App

![License](https://img.shields.io/badge/license-MIT-green)
![Stars](https://img.shields.io/github/stars/your-username/camera-upload-app?style=social)
![Forks](https://img.shields.io/github/forks/your-username/camera-upload-app?style=social)
![Issues](https://img.shields.io/github/issues/your-username/camera-upload-app)
![Last Commit](https://img.shields.io/github/last-commit/your-username/camera-upload-app)
![Deploy](https://img.shields.io/badge/Live-Demo-blue)
![Made With](https://img.shields.io/badge/Made%20With-Vanilla%20JS-yellow)

---

## 🚀 Live Demo

🔗 https://your-live-demo-link.com

---

## ✨ Overview

A modern web-based camera application that allows users to:

- 🎥 Start device camera
- 📷 Capture photo instantly
- ☁️ Upload image to Cloudinary
- 💾 Save image URL to Firebase Realtime Database
- 🔔 Receive real-time toast notifications
- ⏳ Experience smooth upload animations

Built with clean UI/UX principles and modern web APIs.

---

## 🛠 Tech Stack

- **HTML5**
- **CSS3 (Modern UI + Animations)**
- **Vanilla JavaScript**
- **Cloudinary API**
- **Firebase Realtime Database**
- **Font Awesome Icons**

---

## 📂 Project Structure

```
camera-upload-app/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/camera-upload-app.git
cd camera-upload-app
```

---

### 2️⃣ Configure Cloudinary

Update in `app.js`:

```js
const cloudName = "your_cloud_name";
const uploadPreset = "your_unsigned_preset";
```

How to get:

1. Login to Cloudinary Dashboard
2. Create an **Unsigned Upload Preset**
3. Copy your Cloud Name

---

### 3️⃣ Configure Firebase

Replace:

```js
const saveImgApi = "https://your-project-id.firebaseio.com/";
```

Steps:

1. Create Firebase Project
2. Enable Realtime Database
3. Set rules (for testing)

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

⚠️ Do not use open rules in production.

---

## 🧠 How It Works

1. User clicks **Start Camera**
2. Browser requests permission
3. User clicks **Take Photo**
4. Canvas captures frame
5. Image uploads to Cloudinary
6. Secure URL returned
7. URL stored in Firebase
8. Success animation + toast shown

---

## 🔒 Security Notes

- Camera access requires HTTPS (except localhost)
- Use signed uploads in production
- Protect Firebase rules before deployment

---

## 📱 Browser Support

- Chrome
- Edge
- Firefox
- Mobile Browsers (HTTPS required)

---

## 🎯 Roadmap

- [ ] Upload progress percentage
- [ ] Stop camera button
- [ ] Gallery view
- [ ] Image compression optimization
- [ ] Authentication
- [ ] Dark mode
- [ ] Capture shutter animation

---

## 📸 Screenshots

_Add your screenshots here_

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed with ❤️ by **Your Name**

GitHub: https://github.com/DDSCODE3

---

⭐ If you like this project, don't forget to give it a star!
