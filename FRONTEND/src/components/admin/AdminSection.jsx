import { PencilLine, Trash2 } from "lucide-react";

export default function AdminSection({
  title,
  singularLabel,
  resource,
  fields,
  records,
  formState,
  setFormState,
  editingId,
  onSubmit,
  onEdit,
  onCancelEdit,
  onDelete,
}) {
  function handleChange(name, value) {
    setFormState((current) => ({
      ...current,
      [resource]: { ...current[resource], [name]: value },
    }));
  }

  return (
    <section className="rounded-[28px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-bold">{title}</h2>
        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs">
          {records.length} records
        </span>
      </div>

      <form
        onSubmit={(event) => onSubmit(event, resource)}
        className="grid gap-4 lg:grid-cols-2"
      >
        {fields.map((field) => (
          <label
            key={field.name}
            className={field.type === "textarea" ? "lg:col-span-2" : ""}
          >
            <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              {field.label}
            </span>
            {field.type === "textarea" ? (
              <textarea
                required
                rows="4"
                value={formState[resource][field.name]}
                onChange={(event) => handleChange(field.name, event.target.value)}
                className="w-full rounded-[18px] border border-[var(--border)] bg-transparent px-4 py-3 outline-none"
              />
            ) : (
              <input
                required
                value={formState[resource][field.name]}
                onChange={(event) => handleChange(field.name, event.target.value)}
                className="w-full rounded-[18px] border border-[var(--border)] bg-transparent px-4 py-3 outline-none"
              />
            )}
          </label>
        ))}
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--text)] px-5 text-sm font-semibold text-[var(--bg)]"
        >
          {editingId ? `Update ${singularLabel}` : `Add ${singularLabel}`}
        </button>
        {editingId ? (
          <button
            type="button"
            onClick={() => onCancelEdit(resource)}
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] px-5 text-sm font-semibold"
          >
            Cancel
          </button>
        ) : null}
      </form>

      <div className="mt-6 space-y-4">
        {records.map((record) => (
          <div
            key={record._id}
            className="flex flex-col gap-3 rounded-[22px] border border-[var(--border)] p-4 sm:flex-row sm:items-start sm:justify-between"
          >
            <div>
              <p className="font-semibold">
                {record.title ||
                  record.company ||
                  record.degree ||
                  record.course}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {record.description || record.role || record.institution || record.platform}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onEdit(resource, record)}
                className="inline-flex items-center gap-2 text-sm"
              >
                <PencilLine size={15} />
                Edit
              </button>
              <button
                type="button"
                onClick={() => onDelete(resource, record._id)}
                className="inline-flex items-center gap-2 text-sm text-red-500"
              >
                <Trash2 size={15} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
