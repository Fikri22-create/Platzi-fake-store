import { useEffect, useState } from "react";

export default function Profile() {
  const [item, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-slate-100 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 h-32 relative">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg absolute left-8 -bottom-16"
          />
        </div>
        <div className="pt-20 px-8 pb-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
              {item.name}
            </h2>
            <p className="text-sm uppercase tracking-widest text-cyan-600 font-semibold mt-1">
              {item.role}
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between bg-slate-50 p-4 rounded-xl">
              <span className="text-sm font-semibold text-gray-600">Email</span>
              <span className="text-sm text-gray-800">{item.email}</span>
            </div>

            <div className="flex justify-between bg-slate-50 p-4 rounded-xl">
              <span className="text-sm font-semibold text-gray-600">Role</span>
              <span className="text-sm text-gray-800">{item.role}</span>
            </div>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white font-semibold tracking-wide hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 transition">
              Edit Profile
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}