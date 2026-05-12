function ApplicationItem({ application, onDelete, onEdit }) {
  return (
    <div className="application-card">
      <div>
        <h3>{application.companyName}</h3>
        <p>
          <strong>Pozisyon:</strong> {application.position}
        </p>
        <p>
          <strong>Başvuru Tarihi:</strong> {application.applicationDate}
        </p>
        <p>
          <strong>Durum:</strong> {application.status}
        </p>
      </div>

      <div className="card-buttons">
        <button
          type="button"
          className="edit-button"
          onClick={() => onEdit(application)}
        >
          Düzenle
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(application.id)}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default ApplicationItem;