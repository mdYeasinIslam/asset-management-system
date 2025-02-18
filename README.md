# Project Name:  AssetPulse
![Asset-management-system](https://i.ibb.co.com/9HHvRFBZ/asset-Pulse.png)

# Project Purpose: 
This project is build for managing company assets.
A company provides a number of assets to the employee and company HR_manager need to manage these assets such as :
1. provide assets to the employee ;
2. take back assets from employee if asset is returnable
3. how much asset is used in a month or a year
above kind of think a company can handle easily by using this web application

# Technologies 
1. Project build(Client):  HTML, tailwind (Shadcn: component libary) and React + Typescript 
2. project (Server) : Node.js and express.js , cors 
3. Routing : React-router-dom
4. Data faching: Axios, TanStack query and table
5. Packages:
    (swiper, chart.js, lucid-react, react-hot-toast, react icons etc...)
   
### 🛠️ Project Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| `react` | `^18.3.1` | JavaScript library for building UI |
| `react-dom` | `^18.3.1` | React package for working with the DOM |
| `react-router-dom` | `^6.28.2` | Routing for React applications |
| `@radix-ui/react-avatar` | `^1.1.2` | Radix UI Avatar component |
| `@radix-ui/react-checkbox` | `^1.1.3` | Radix UI Checkbox component |
| `@radix-ui/react-dialog` | `^1.1.5` | Radix UI Dialog component |
| `@radix-ui/react-dropdown-menu` | `^2.1.5` | Radix UI Dropdown Menu component |
| `@radix-ui/react-label` | `^2.1.1` | Radix UI Label component |
| `@radix-ui/react-select` | `^2.1.4` | Radix UI Select component |
| `@radix-ui/react-slot` | `^1.1.1` | Radix UI Slot component |
| `lucide-react` | `^0.473.0` | Beautiful React icons |
| `tailwind-merge` | `^2.6.0` | Utility for merging Tailwind classes |
| `tailwindcss-animate` | `^1.0.7` | Animations for TailwindCSS |
| `@tanstack/react-query` | `^5.64.2` | Fetching & caching data in React |
| `@tanstack/react-table` | `^8.20.6` | Powerful table library for React |
| `react-hook-form` | `^7.54.2` | Forms management in React |
| `chart.js` | `^4.4.7` | Charting library |
| `react-chartjs-2` | `^5.3.0` | React wrapper for Chart.js |
| `swiper` | `^11.2.1` | Modern slider component |
| `axios` | `^1.7.9` | Promise-based HTTP client |
| `moment` | `^2.30.1` | Date & time manipulation |
| `@react-pdf/renderer` | `^4.1.6` | PDF generation in React |
| `@stripe/react-stripe-js` | `^3.1.1` | React Stripe integration |
| `@stripe/stripe-js` | `^5.5.0` | Stripe JavaScript library |
| `firebase` | `^11.2.0` | Google Firebase SDK |
| `react-hot-toast` | `^2.5.1` | Notifications for React |
| `motion` | `^12.0.1` | Animation library |
| `react-icons` | `^5.4.0` | Icon library for React |
| `react-responsive-carousel` | `^3.2.23` | Carousel component |
| `class-variance-authority` | `^0.7.1` | Utility for managing classNames |
| `clsx` | `^2.1.1` | Conditional classNames in React |


## 🚀 Running the Project Locally  

Follow these steps to set up and run the project on your local machine.  

### **Prerequisites**  
Ensure you have the following installed:  
- **Node.js** (Latest LTS version recommended) → [Download Node.js](https://nodejs.org/)  
- **npm** (Comes with Node.js) or **yarn**  
- **Git** (Optional, for cloning the repo)  

### **1️⃣ Clone the Repository**  
```sh
git clone <repository-url>
cd <project-folder>
```

### **2️⃣ Install Dependencies**  
Using **npm**:  
```sh
npm install
```

### **3️⃣ Setup Environment Variables**  
Create a `.env` file in the root directory and add your Firebase credentials:  
```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id

VITE_imgbb_apiKey='imgbb api key'

VITE_Payment_apikey= ' stripe publishable key'
```

Make sure you replace `your_api_key` and other values with your actual Firebase config.  

### **4️⃣ Start the Development Server**  
Using **npm**:  
```sh
npm run dev
```

This will start the development server, usually on **http://localhost:5173/** (default Vite port).  

### **5️⃣ Build the Project (For Production)**  
To create an optimized production build:  
```sh
npm run build
```

The output will be in the `dist` folder.  

### **6️⃣ Firebase Configuration (Optional - If Using Firebase Hosting)**  
If you want to deploy using Firebase, login and initialize Firebase:  
```sh
firebase login
firebase init
```
Then deploy:  
```sh
firebase deploy
```
If you want to deploy in netlify, login netlify and deploy dist folder
---

This will ensure **anyone** can easily set up and run your project! 🚀🔥  
Let me know if you need modifications. 😊

# site link:
live site (client) : https://asset-pulse-system.netlify.app/

live site (server) : https://y-pi-pied.vercel.app/
