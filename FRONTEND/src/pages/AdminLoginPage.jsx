import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import { loginAdmin } from "../api/portfolio";
import { useAuth } from "../context/AuthContext";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Admin Login | Portfolio";
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginAdmin(form);
      login(data.token);
      navigate("/np/dashboard");
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-shell flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="glass-panel w-full max-w-md rounded-[32px] p-8"
      >
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
          <LockKeyhole size={24} />
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold">Admin Access</h1>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          Use the seeded JWT credentials to manage projects, experience, education, and messages.
        </p>

        <label className="mt-6 block">
          <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Email
          </span>
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-[18px] border border-[var(--border)] bg-transparent px-4 py-3 outline-none"
          />
        </label>

        <label className="mt-5 block">
          <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Password
          </span>
          <input
            required
            type="password"
            autoComplete="current-password"
            value={form.password}
            onChange={(event) =>
              setForm((current) => ({ ...current, password: event.target.value }))
            }
            className="w-full rounded-[18px] border border-[var(--border)] bg-transparent px-4 py-3 outline-none"
          />
        </label>

        {error ? <p className="mt-4 text-sm text-red-500">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--text)] px-5 text-sm font-semibold text-[var(--bg)] disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
