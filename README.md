# 📒 Simple Note-Taking API (Node.js, Express, TypeScript, MongoDB)

This is a **simple REST API** for managing notes, built using **Node.js, Express, TypeScript, and MongoDB**.

## 🚀 Features
- Create, read, and delete notes
- Uses **MongoDB & Mongoose** for data storage
- Implements **TypeScript** for type safety
- Basic **error handling**

## 🛠 Tech Stack
- **Node.js** & **Express** (Server)
- **TypeScript** (Static typing)
- **MongoDB** & **Mongoose** (Database)
- **Postman** (API Testing)

---



## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
https://github.com/siredave/Genesys_Learnable_Task10.git
cd Genesys_Learnable_Task10
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file in the root folder and add:
```sh
MONGO_URI=mongodb://localhost:5000/noteDB
PORT=5000
```

### **4️⃣ Start the Server**
```sh
npm run dev
```

---

## 🌐 Hosted API
The API is hosted on Render. You can access it at:
[(https://noteapi1.onrender.com)](https://noteapi1.onrender.com)

## 📝 API Endpoints

### **1️⃣ Create a Note**
**POST** `/api/notes`
#### **Request Body (JSON)**
```json
{
  "title": "My First Note",
  "content": "This is a test note."
}
```
#### **Response**
```json
{
  "_id": "65ab23cde45678f901234567",
  "title": "My First Note",
  "content": "This is a test note.",
  "createdAt": "2025-03-11T10:00:00.123Z",
  "updatedAt": "2025-03-11T10:00:00.123Z"
}
```

---

### **2️⃣ Get All Notes**
**GET** `/api/notes`
#### **Response**
```json
[
  {
    "_id": "65ab23cde45678f901234567",
    "title": "My First Note",
    "content": "This is a test note."
  }
]
```

---

### **3️⃣ Get a Note by ID**
**GET** `/api/notes/:id`
#### **Response**
```json
{
  "_id": "65ab23cde45678f901234567",
  "title": "My First Note",
  "content": "This is a test note."
}
```

---

### **4️⃣ Delete a Note**
**DELETE** `/api/notes/:id`
#### **Response**
```json
{ "message": "Note deleted successfully" }
```

---

## 🛠 Testing with Postman
1. Open **Postman**
2. Select **POST** and enter `http://127.0.0.1:5000/api/notes`
3. Go to **Body → raw → JSON** and add:
   ```json
   {
     "title": "Test Note",
     "content": "This is a sample note."
   }
   ```
4. Click **Send**
5. You should get a success response 🎉

---

## 📌 Future Improvements
- Add **update note** endpoint
- Implement **user authentication** (JWT)
- Add **pagination** for listing notes

---

## 🎯 Author
👤 **Your Name**
- GitHub: https://github.com/siredave

---

## 📜 License
This project is **MIT Licensed**.

