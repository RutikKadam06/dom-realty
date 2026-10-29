import { useEffect, useState } from "react";
import { FaSearch, FaTrash, FaUpload, FaPlus } from "react-icons/fa";
import AdminLayout from "../components/AdminLayout";
import "./AdminPages.css";
import API from "../../services/api";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [search, setSearch] = useState("");

  const [blog, setBlog] = useState({
    title: "",
    category: "",
    description: "",
    status: "Published",
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    setFiltered(
      blogs.filter(
        (item) =>
          item.title?.toLowerCase().includes(search.toLowerCase()) ||
          item.category?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, blogs]);

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");

      const blogData = Array.isArray(res.data)
        ? res.data
        : res.data.blogs || res.data.data || [];

      setBlogs(blogData);
      setFiltered(blogData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(blog).forEach((key) => {
      formData.append(key, blog[key]);
    });

    if (image) {
      formData.append("image", image);
    }

    try {
      await API.post("/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Blog Published Successfully");

      setBlog({
        title: "",
        category: "",
        description: "",
        status: "Published",
      });

      setImage(null);
      setPreview("");

      fetchBlogs();
    } catch (err) {
      alert("Unable to publish blog.");
    }
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await API.delete(`/blogs/${id}`);
      fetchBlogs();
    } catch {
      alert("Unable to delete blog.");
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page">

        <div className="page-header">
          <div>
            <span className="breadcrumb">Dashboard / Blogs</span>
            <h1>Blog Management</h1>
            <p>Create and manage DOM Realty blogs.</p>
          </div>
        </div>

        <div className="admin-card">
          <h2 className="section-title">
            <FaPlus />
            Publish New Blog
          </h2>

          <form className="admin-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Blog Title</label>
              <input
                name="title"
                value={blog.title}
                onChange={handleChange}
                placeholder="Luxury TP Plot in Boisar"
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={blog.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option>TP Plot</option>
                <option>DP Plot</option>
                <option>Farm Land</option>
                <option>Investment</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                rows="5"
                name="description"
                value={blog.description}
                onChange={handleChange}
                placeholder="Write your blog..."
              />
            </div>

            <div className="form-group">
              <label>Status</label>

              <select
                name="status"
                value={blog.status}
                onChange={handleChange}
              >
                <option>Published</option>
                <option>Draft</option>
              </select>
            </div>

            <div className="form-group">
              <label>Cover Image</label>

              <label className="upload-box small-upload">
                <FaUpload />
                Upload Blog Cover

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />
              </label>
            </div>

            {preview && (
              <div className="blog-preview full-width">
                <img src={preview} alt="" />
              </div>
            )}

            <button className="submit-btn" type="submit">
              Publish Blog
            </button>

          </form>
        </div>

        <div className="admin-card">

          <div className="search-input enquiry-search">
            <FaSearch />
            <input
              placeholder="Search Blog..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>

        <div className="blog-grid">

          {filtered.map((item) => (
            <div className="blog-card" key={item._id}>

              <img src={item.image} alt={item.title} />

              <div className="blog-content">

                <span className="blog-category">{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.description?.slice(0, 120)}...</p>

                <div className="blog-footer">

                  <span
                    className={`status-badge ${
                      item.status === "Published" ? "new" : "draft"
                    }`}
                  >
                    {item.status}
                  </span>

                  <button
                    className="delete-btn"
                    onClick={() => deleteBlog(item._id)}
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </AdminLayout>
  );
}

export default Blogs;