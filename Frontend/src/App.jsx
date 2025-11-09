import React, { useEffect, useState } from "react";
import ArticleForm from "./components/ArticleForm";
import ArticleList from "./components/ArticleList";
import EditModal from "./components/EditModal";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/articles`);
      const data = await res.json();
      setArticles(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleCreate = (article) => {
    setArticles((prev) => [article, ...prev]);
  };

  const handleDelete = (id) => {
    setArticles((prev) => prev.filter((a) => a._id !== id));
  };

  const handleUpdate = (updated) => {
    setArticles((prev) =>
      prev.map((a) => (a._id === updated._id ? updated : a))
    );
  };

  return (
    <div className="container">
      <h1>Simple CMS</h1>
      <div className="layout">
        <aside className="sidebar">
          <h2>Create Article</h2>
          <ArticleForm apiBase={API_BASE} onCreate={handleCreate} />
        </aside>
        <main className="main">
          <h2>Articles</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ArticleList
              articles={articles}
              onDelete={handleDelete}
              onEdit={(a) => setEditingArticle(a)}
              apiBase={API_BASE}
            />
          )}
        </main>
      </div>

      {editingArticle && (
        <EditModal
          article={editingArticle}
          onClose={() => setEditingArticle(null)}
          onUpdated={handleUpdate}
          apiBase={API_BASE}
        />
      )}
    </div>
  );
}
