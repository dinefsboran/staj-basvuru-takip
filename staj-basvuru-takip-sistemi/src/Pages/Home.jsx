import { useEffect, useState } from "react";
import ApplicationForm from "../Components/ApplicationForm";
import ApplicationList from "../Components/ApplicationList";
import { emptyApplication } from "../Interfaces/applicationModel";

function Home() {
  const [applications, setApplications] = useState([]);
  const [formData, setFormData] = useState(emptyApplication);
  const [editingApplicationId, setEditingApplicationId] = useState(null);

  useEffect(() => {
    const savedApplications = localStorage.getItem("applications");

    if (savedApplications) {
      setApplications(JSON.parse(savedApplications));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingApplicationId) {
      const updatedApplications = applications.map((application) =>
        application.id === editingApplicationId
          ? { ...formData, id: editingApplicationId }
          : application
      );

      setApplications(updatedApplications);
      setEditingApplicationId(null);
    } else {
      const newApplication = {
        ...formData,
        id: Date.now(),
      };

      setApplications([...applications, newApplication]);
    }

    setFormData(emptyApplication);
  };

  const handleDelete = (id) => {
    const filteredApplications = applications.filter(
      (application) => application.id !== id
    );

    setApplications(filteredApplications);
  };

  const handleEdit = (application) => {
    setFormData(application);
    setEditingApplicationId(application.id);
  };

  return (
    <main className="page-container">
      <section className="hero-section">
        <h1>Staj Başvuru Takip Sistemi</h1>
        <p>
          Başvurduğun firmaları, pozisyonları ve başvuru durumlarını tek yerden
          takip et.
        </p>
      </section>

      <section className="content-grid">
        <ApplicationForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          editingApplicationId={editingApplicationId}
        />

        <section className="list-section">
          <div className="list-header">
            <h2>Başvurularım</h2>
            <span>{applications.length} kayıt</span>
          </div>

          <ApplicationList
            applications={applications}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </section>
      </section>
    </main>
  );
}

export default Home;