#livelink
https://supplysenseai-frontend.onrender.com/
# SupplySenseAI

SupplySenseAI is an intelligent inventory and supply chain management platform powered by Artificial Intelligence. It leverages Machine Learning to provide accurate demand forecasting, inventory optimization, and data-driven insights.

## Features


- **🛡️ Secure Access:** Role-based authentication system (Admin, Manager, User) using JWT.
- **📦 Inventory Management:** Comprehensive tracking of materials, stock levels, and supplier data.
- **🤖 AI Demand Forecasting:** Uses Machine Learning algorithms (Random Forest Regressor) to predict future material demand based on historical data.
- **📉 Inventory Optimization:** Automatically calculates Safety Stock and Reorder Points to minimize shortages and overstocking.
- **📊 Interactive Dashboards:** Real-time analytics, charts, and reporting using React and modern visualization libraries.
- **🚀 Scalable Architecture:** Decoupled multi-service architecture (React frontend, Node.js backend, Python ML service).

## Tech Stack

- **Frontend:** React.js, Vite, TailwindCSS (assumed), Axios
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT, bcrypt
- **ML Service:** Python, Flask, Pandas, NumPy, Scikit-Learn

## Getting Started (Local Development)

### Prerequisites

- Node.js (v18+)
- Python (v3.10+)
- MongoDB Atlas account (or local MongoDB server)

### 1. Clone the repository

```bash
git clone https://github.com/Abhaytomar09/SupplySenseAI.git
cd SupplySenseAI
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173
ML_SERVICE_URL=http://localhost:5001
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

### 3. Set up the ML Service

```bash
cd ../ml_service
# Create a virtual environment (optional but recommended)
python -m venv venv
# Activate virtual environment
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate

pip install -r requirements.txt
```

Start the ML service:

```bash
python app.py
```

_Note: The ML service runs on port 5001 by default._

### 4. Set up the Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory with the following variables:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_ML_API_URL=http://localhost:5001
```

Start the frontend development server:

```bash
npm run dev
```

## Deployment (Render)

This project is configured to be deployed easily using Render's Blueprint feature.

1. Push this repository to GitHub.
2. In the Render Dashboard, create a new "Blueprint".
3. Connect your GitHub repository. Select this repository.
4. Render will automatically detect the `render.yaml` file and provision the three services: `supplysenseai-frontend`, `supplysenseai-backend`, and `supplysenseai-ml`.
5. **Important:** Once the backend service is created in Render, go to its Environment variables in the dashboard and manually add your `MONGO_URI` and `JWT_SECRET`.

## License

MIT
