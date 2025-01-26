import React, { useState, useEffect } from "react";

// Fetch documents for the given courseId
const fetchDocuments = async (courseId) => {
  const response = await fetch(
    `https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/documents/${courseId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch documents");
  }
  const documents = await response.json();
  return documents;
};

// Post request to get the summary of a document
const fetchSummary = async (documentId) => {
  const response = await fetch(
    `https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/documents/summarise/${documentId}`,
    {
      method: "POST",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to summarize document");
  }
  const result = await response.json();
  return result;
};

const DocumentViewer = ({ courseId }) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summarizing, setSummarizing] = useState(false);
  const [summaries, setSummaries] = useState({}); // Store summary per document

  useEffect(() => {
    if (!courseId) return;

    const loadDocuments = async () => {
      try {
        const docs = await fetchDocuments(courseId);
        setDocuments(docs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDocuments();
  }, [courseId]);

  const handleSummarize = async (documentId) => {
    setSummarizing(true);
    try {
      const docSummary = await fetchSummary(documentId);
      setSummaries((prevSummaries) => ({
        ...prevSummaries,
        [documentId]: docSummary.summary,
      }));
    } catch (err) {
      setError("Failed to summarize the document");
    } finally {
      setSummarizing(false);
    }
  };

  if (loading) {
    return <div>Loading documents...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: "20px", marginTop: "20px" }}>Documents</h2>
      {documents.length === 0 ? (
        <p>No documents available</p>
      ) : (
        documents.map((doc) => (
          <div key={doc._id} style={{ marginBottom: "20px" }}>
            <h3>{doc.fileName}</h3>
            <embed
              src={doc.fileUrl}
              width="100%"
              height="600px"
              type="application/pdf"
            />
            <button
              onClick={() => handleSummarize(doc._id)}
              disabled={summarizing}
              style={{ marginTop: "10px", width: "200px", border: "none", borderRadius: "5px", backgroundColor: "#ff7a4f", color: "white", padding: "5px" }}
            >
              {summarizing ? "Summarizing..." : "Summarize"}
            </button>

            {/* Show the summary only after it's fetched */}
            {summaries[doc._id] && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              >
                <h4>Summary:</h4>
                <p>{summaries[doc._id]}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default DocumentViewer;
