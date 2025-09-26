# MoveMetrics

A social fitness tracker (written in English) to log and visualize workout sessions (gym, BJJ, running, etc.) with friends. Built using Next.js, shadcn/ui, Tailwind CSS, React Query, and Sonner.

## 🏋️‍♂️ Features

- **Workout Logging:**  
   – Log your workout (activity, date, start time, duration, and optional notes) via a modal dialog.  
  – (Coming soon) Authentication (Firebase) and data storage (Firebase) so you can persist your workouts.

- **UI & UX:**  
  – Modern, responsive UI (using shadcn/ui and Tailwind CSS)  
  – Overview (dashboard) with cards (total workouts, active friends, most active, favorite activity)  
  – Tabs (Overview, Workouts, Friends, Stats) for easy navigation.

- **Tech Stack:**  
  – **Frontend:** Next.js (15.3.2) (React 19) (App Router)  
  – **UI:** shadcn/ui (components (button, card, dialog, form, input, select, calendar, popover, tabs, avatar, dropdown, sheet, table, toaster (via sonner), etc.)  
  – **Styling:** Tailwind CSS (with Prettier (singleQuote, trailingComma, etc.) and ESLint (integrated with Prettier) for code style.)  
  – **State & Data Fetching:** React Query (TanStack Query) (with a client wrapper (QueryClientProviderWrapper) to avoid hydration errors.)  
  – (Planned) Firebase (Auth, Firestore) for backend.

## 🚀 Getting Started

1. Clone the repository (or fork it)
2. Install dependencies (using npm):  
     npm install
3. Run the development server (with Turbopack):  
     npm run dev  
     (Open [http://localhost:3000](http://localhost:3000) in your browser.)
4. (Optional) Lint and format your code (using ESLint and Prettier):  
     npm run lint  
     npm run format

## 📝 License

MIT License – feel free to use, modify, and distribute.

## 🤝 Contributing

Contributions (issues, PRs, ideas) are welcome! (Please follow conventional commits (e.g. “feat:”, “chore:”, “style:” etc.) and run Prettier (npm run format) before committing.)

---

_Last updated: (Current date) (Commit: “feat: initial app setup” + “chore: add prettier and eslint config” + “style: format all files”)_

# movemetrics-fe

Testing new signing