import { applicationStatuses } from "../Interfaces/applicationModel";

function ApplicationForm({
  formData,
  setFormData,
  onSubmit,
  editingApplicationId,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="application-form" onSubmit={onSubmit}>
      <h2>{editingApplicationId ? "Başvuruyu Güncelle" : "Yeni Başvuru Ekle"}</h2>

      <div className="form-group">
        <label>Firma Adı</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Örn: Microsoft"
          required
        />
      </div>

      <div className="form-group">
        <label>Pozisyon</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Örn: Frontend Intern"
          required
        />
      </div>

      <div className="form-group">
        <label>Başvuru Tarihi</label>
        <input
          type="date"
          name="applicationDate"
          value={formData.applicationDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Durum</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          {applicationStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="primary-button">
        {editingApplicationId ? "Güncelle" : "Ekle"}
      </button>
    </form>
  );
}

export default ApplicationForm;