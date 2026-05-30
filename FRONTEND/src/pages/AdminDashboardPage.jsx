import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Mail } from "lucide-react";
import {
  createRecord,
  deleteRecord,
  fetchAdminDashboardData,
  updateRecord,
} from "../api/portfolio";
import { useAuth } from "../context/AuthContext";
import AdminSection from "../components/admin/AdminSection";

const initialForms = {
  projects: {
    title: "",
    category: "",
    description: "",
    techStack: "",
    image: "",
    liveLink: "",
    githubLink: "",
    featured: "true",
  },
  experiences: {
    company: "",
    role: "",
    duration: "",
    description: "",
  },
  education: {
    degree: "",
    institution: "",
    year: "",
    score: "",
  },
  certifications: {
    course: "",
    platform: "",
    year: "",
    description: "",
  },
};

const sectionConfigs = {
  projects: {
    title: "Projects",
    singularLabel: "Project",
    fields: [
      { name: "title", label: "Title" },
      { name: "category", label: "Category" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "techStack", label: "Tech Stack (comma separated)" },
      { name: "image", label: "Image URL" },
      { name: "liveLink", label: "Live Link" },
      { name: "githubLink", label: "GitHub Link" },
    ],
  },
  experiences: {
    title: "Experiences",
    singularLabel: "Experience",
    fields: [
      { name: "company", label: "Company" },
      { name: "role", label: "Role" },
      { name: "duration", label: "Duration" },
      { name: "description", label: "Description", type: "textarea" },
    ],
  },
  education: {
    title: "Education",
    singularLabel: "Education Record",
    fields: [
      { name: "degree", label: "Degree" },
      { name: "institution", label: "Institution" },
      { name: "year", label: "Year" },
      { name: "score", label: "CGPA / Percentage" },
    ],
  },
  certifications: {
    title: "Certifications",
    singularLabel: "Certification",
    fields: [
      { name: "course", label: "Course" },
      { name: "platform", label: "Platform" },
      { name: "year", label: "Year" },
      { name: "description", label: "Description", type: "textarea" },
    ],
  },
};

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [data, setData] = useState(null);
  const [forms, setForms] = useState(initialForms);
  const [editing, setEditing] = useState({
    projects: "",
    experiences: "",
    education: "",
    certifications: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Admin Dashboard | Portfolio";
    loadData();
  }, []);

  async function loadData() {
    try {
      setError("");
      const dashboardData = await fetchAdminDashboardData();
      setData(dashboardData);
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          "Unable to load the dashboard right now."
      );
    }
  }

  async function handleSubmit(event, resource) {
    event.preventDefault();
    const formData = forms[resource];
    const payload =
      resource === "projects"
        ? {
            ...formData,
            techStack: formData.techStack
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean),
            featured: true,
          }
        : formData;

    try {
      setError("");
      if (editing[resource]) {
        await updateRecord(resource, editing[resource], payload);
      } else {
        await createRecord(resource, payload);
      }
      setForms((current) => ({ ...current, [resource]: initialForms[resource] }));
      setEditing((current) => ({ ...current, [resource]: "" }));
      setStatus(
        editing[resource]
          ? `${sectionConfigs[resource].singularLabel} updated successfully.`
          : `${sectionConfigs[resource].singularLabel} added successfully.`
      );
      await loadData();
    } catch (requestError) {
      setError(
        requestError.response?.data?.message || "Unable to save this record."
      );
    }
  }

  function handleEdit(resource, record) {
    setEditing((current) => ({ ...current, [resource]: record._id }));
    setForms((current) => ({
      ...current,
      [resource]:
        resource === "projects"
          ? {
              title: record.title,
              category: record.category,
              description: record.description,
              techStack: record.techStack.join(", "),
              image: record.image,
              liveLink: record.liveLink,
              githubLink: record.githubLink,
              featured: String(record.featured),
            }
          : {
              ...record,
            },
    }));
  }

  function handleCancelEdit(resource) {
    setEditing((current) => ({ ...current, [resource]: "" }));
    setForms((current) => ({ ...current, [resource]: initialForms[resource] }));
  }

  async function handleDelete(resource, id) {
    try {
      setError("");
      await deleteRecord(resource, id);
      if (editing[resource] === id) {
        handleCancelEdit(resource);
      }
      setStatus("Record deleted.");
      await loadData();
    } catch (requestError) {
      setError(
        requestError.response?.data?.message || "Unable to delete this record."
      );
    }
  }

  if (!data) {
    return (
      <div className="app-shell flex min-h-screen items-center justify-center">
        <p className="font-display text-3xl font-bold">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="app-shell min-h-screen px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel mb-8 flex flex-col gap-4 rounded-[32px] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Protected Panel
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold">
              Content dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Add new projects, experience, education, certifications, and review contact messages from one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold"
            >
              View Portfolio
            </button>
            <button
              type="button"
              onClick={() => {
                logout();
                navigate("/np");
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[var(--bg)]"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {status ? (
          <div className="mb-8 rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm">
            {status}
          </div>
        ) : null}
        {error ? (
          <div className="mb-8 rounded-[20px] border border-red-400/40 bg-red-500/8 px-4 py-3 text-sm text-red-500">
            {error}
          </div>
        ) : null}

        <div className="grid gap-8">
          {Object.entries(sectionConfigs).map(([resource, config]) => (
            <AdminSection
              key={resource}
              title={config.title}
              singularLabel={config.singularLabel}
              resource={resource}
              fields={config.fields}
              records={data[resource]}
              formState={forms}
              setFormState={setForms}
              editingId={editing[resource]}
              onSubmit={handleSubmit}
              onEdit={handleEdit}
              onCancelEdit={handleCancelEdit}
              onDelete={handleDelete}
            />
          ))}

          <section className="rounded-[28px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
            <div className="mb-6 flex items-center gap-3">
              <Mail size={18} />
              <h2 className="font-display text-2xl font-bold">Contact Messages</h2>
            </div>
            <div className="grid gap-4">
              {data.messages.map((message) => (
                <article
                  key={message._id}
                  className="rounded-[22px] border border-[var(--border)] p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-semibold">{message.name}</p>
                    <a href={`mailto:${message.email}`} className="text-sm text-[var(--accent)]">
                      {message.email}
                    </a>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {message.message}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
