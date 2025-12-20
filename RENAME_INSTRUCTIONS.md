# Instructions to Rename Frontend Directory

The `vite-react-app` directory needs to be renamed to `frontend`. Since the dev server might be running, follow these steps:

## Option 1: Stop Server and Rename (Recommended)

1. **Stop the development server** (press `Ctrl+C` in the terminal where it's running)

2. **Rename the directory:**
   ```powershell
   cd C:\Users\dell\OneDrive\Desktop\SupplySenseAI
   Move-Item -Path "vite-react-app" -Destination "frontend"
   ```

3. **Restart the dev server:**
   ```powershell
   cd frontend
   npm run dev
   ```

## Option 2: Close IDE and Rename

1. Close your IDE/editor completely
2. Rename `vite-react-app` folder to `frontend` using Windows Explorer
3. Reopen your IDE and navigate to the `frontend` folder
4. Restart the dev server

## After Renaming

The project structure will be:
```
SupplySenseAI/
├── frontend/        # React frontend (renamed from vite-react-app)
├── backend/         # Node.js backend
└── Project/         # Original HTML/CSS files
```

