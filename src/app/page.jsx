'use client';
import Dashboard from './components/Dashboard';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Excel-Based Dashboard</h1>
      <Dashboard />
    </div>
  );
}
