import React, { useEffect, useState } from "react";

const Submissions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/consultation");
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching submissions:", err);
      alert("❌ Failed to fetch submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Consultation Submissions</h2>
      <button onClick={fetchData} style={{ marginBottom: "10px" }}>
        🔄 Refresh
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Location</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Phone</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.location}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.name}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.phone}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.email}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {new Date(item.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Submissions;
