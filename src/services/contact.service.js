import createApiClient from "./api.service.js";
const ContactService = {};

const api = createApiClient("/api/contacts");
ContactService.getAll = async () => {
  return (await api.get("/")).data;
};
ContactService.create = async (data) => {
  return (await api.post("/", data)).data;
};
ContactService.deleteAll = async () => {
  return (await api.delete("/")).data;
};
ContactService.get = async (id) => {
  return (await api.get(`/${id}`)).data;
};
ContactService.update = async (id, data) => {
  return (await api.post(`/${id}`, data)).data;
};
ContactService.delete = async (id) => {
  return (await api.delete(`/${id}`)).data;
};
export default ContactService;
