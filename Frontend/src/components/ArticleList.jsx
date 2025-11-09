import React from "react";

export default function ArticleList({
  articles = [],
  onDelete,
  onEdit,
  apiBase,
}) {
  const handleDelete = async (id) => {
    if (!confirm("Delete this article?")) return;
    try {
      const res = await fetch(`${apiBase}/articles/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        onDelete && onDelete(id);
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="article-list">
      {articles.length === 0 && <p>No articles yet.</p>}
      {articles.map((a) => (
        <article key={a._id} className="card">
          <div className="card-body">
            <h3>{a.title}</h3>
            <p>{a.content}</p>
            <div className="card-actions">
              <button onClick={() => onEdit && onEdit(a)}>Edit</button>
              <button className="danger" onClick={() => handleDelete(a._id)}>
                Delete
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
