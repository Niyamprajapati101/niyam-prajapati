import http from "./http";

export async function fetchPortfolioData() {
  const [
    profile,
    projects,
    experiences,
    education,
    certifications,
  ] = await Promise.all([
    http.get("/profile"),
    http.get("/projects"),
    http.get("/experiences"),
    http.get("/education"),
    http.get("/certifications"),
  ]);

  return {
    profile: profile.data,
    projects: projects.data,
    experiences: experiences.data,
    education: education.data,
    certifications: certifications.data,
  };
}

export async function sendMessage(payload) {
  const { data } = await http.post("/messages", payload);
  return data;
}

export async function loginAdmin(credentials) {
  const { data } = await http.post("/auth/login", credentials);
  return data;
}

export async function fetchAdminDashboardData() {
  const [projects, experiences, education, certifications, messages, profile] =
    await Promise.all([
      http.get("/projects/admin/all"),
      http.get("/experiences/admin/all"),
      http.get("/education/admin/all"),
      http.get("/certifications/admin/all"),
      http.get("/messages"),
      http.get("/profile"),
    ]);

  return {
    profile: profile.data,
    projects: projects.data,
    experiences: experiences.data,
    education: education.data,
    certifications: certifications.data,
    messages: messages.data,
  };
}

export async function createRecord(resource, payload) {
  const { data } = await http.post(`/${resource}`, payload);
  return data;
}

export async function updateRecord(resource, id, payload) {
  const { data } = await http.put(`/${resource}/${id}`, payload);
  return data;
}

export async function deleteRecord(resource, id) {
  const { data } = await http.delete(`/${resource}/${id}`);
  return data;
}
