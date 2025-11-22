import React from "react";

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 text-slate-800">
      <header className="p-4 bg-white shadow text-center text-2xl font-bold text-orange-600">
        سوبر تون
      </header>
      <main className="max-w-3xl mx-auto p-6 space-y-4 text-center">
        <h1 className="text-3xl font-extrabold">مرحباً بكم في سوبر تون</h1>
        <p className="text-slate-700">
          عالم المرح والتعلم للأطفال. قريباً سنطلق مغامرات جديدة!
        </p>
      </main>
      <footer className="p-4 text-sm text-slate-600 border-t mt-10">© {new Date().getFullYear()} سوبر تون</footer>
    </div>
  );
}
