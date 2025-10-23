# 📚 E-Book Referral Client

This is the **frontend** of the E-Book Referral System — built with **Next.js 15 (App Router)**, **TypeScript**, and **TailwindCSS**.  
Users can register (with or without a referral), log in, explore books, and earn credits through referrals.

---

## 🚀 Tech Stack

- **Next.js 15 (App Router)**
- **React Hook Form** for form handling  
- **Zustand** for global state management  
- **Sonner** for toast notifications  
- **Tailwind CSS** for styling  
- **Lucide React** for icons  
- **JWT-based Auth** (handled by backend)
- **Server Actions** for data fetching


---

## 🧑‍💻 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/I-am-MoRsHeD/e-book-referral-client.git
cd e-book-referral-client
```

### 2️⃣ Install dependencies

```bash
bun install
# or
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```env
follow .env.example for setup
```

### 4️⃣ Run the development server

```bash
bun dev
# or
npm run dev
```

The app will run on [http://localhost:3000](http://localhost:3000).

---

## 🔐 Authentication Flow

- `login()` and `register()` actions communicate with backend APIs.
- Auth tokens are managed through **cookies**.
- Referral registration uses `?r=referralCode` query param.

Example referral link:
```
http://localhost:3000/register?r=AB1234
```

---

## 📱 Features

✅ User Registration (with optional referral)  
✅ Login / Logout  
✅ Dashboard with credit & referral overview  
✅ Book purchase system with referral rewards  
✅ Responsive Sidebar + Layout  
✅ Copy Referral Link  

---

## 🧾 Scripts

| Command | Description |
|----------|--------------|
| `bun dev` | Run development server |
| `bun build` | Build for production |
| `bun start` | Start production server |
| `bun lint` | Run ESLint |

---

## 🧰 Tools & Libraries

| Package | Purpose |
|----------|----------|
| `react-hook-form` | Forms handling |
| `zustand` | State management |
| `sonner` | Toast notifications |
| `lucide-react` | Icons |
| `tailwindcss` | Styling |
| `next/navigation` | Router hooks |
| `eslint` | Code linting |

---

## 🧑‍💼 Author

Developed by **Md Morshed**  
📧 Email: mdmorshed0187@gmail.com  
🔗 GitHub: [https://github.com/I-am-MoRsHeD](https://github.com/I-am-MoRsHeD)
