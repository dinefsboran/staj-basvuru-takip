import ApplicationItem from "./ApplicationItem";

function ApplicationList({ applications, onDelete, onEdit }) {
  if (applications.length === 0) {
    return (
      <div className="empty-list">
        <p>Henüz başvuru eklenmedi.</p>
      </div>
    );
  }

  return (
    <div className="application-list">
      {applications.map((application) => (
        <ApplicationItem
          key={application.id}
          application={application}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ApplicationList;