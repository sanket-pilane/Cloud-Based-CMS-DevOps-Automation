import React, { useState } from "react";

export default function ArticleForm({ apiBase, onCreate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setSaving(true);
    try {
      const res = await fetch(`${apiBase}/articles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      if (res.ok) {
        onCreate && onCreate(data);
        setTitle("");
        setContent("");
      } else {
        alert(data.message || "Failed to create");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Content</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
      />
      <button type="submit" disabled={saving}>
        {saving ? "Saving..." : "Create"}
      </button>
    </form>
  );
}
