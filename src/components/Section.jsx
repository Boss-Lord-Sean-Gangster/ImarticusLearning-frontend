import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Section = ({ courseId }) => {
  const [mergedSections, setMergedSections] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [videoTitles, setVideoTitles] = useState({});
  const [documentTitles, setDocumentTitles] = useState({});

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await fetch(`https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/courses/${courseId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch sections");
        }
        const data = await response.json();

        // Merge sections based on lowercase title
        const sectionMap = new Map();

        data.sections.forEach((section) => {
          const titleKey = section.title.toLowerCase(); // Lowercase for comparison

          if (!sectionMap.has(titleKey)) {
            sectionMap.set(titleKey, { 
              title: section.title,  // Store original title
              videos: new Set(),
              documents: new Set()
            });
          }

          const existingSection = sectionMap.get(titleKey);
          section.videos.forEach((videoId) => existingSection.videos.add(videoId));
          section.documents.forEach((docId) => existingSection.documents.add(docId));
        });

        // Convert Set to array and update state
        setMergedSections(
          Array.from(sectionMap.values()).map((section) => ({
            ...section,
            videos: Array.from(section.videos),
            documents: Array.from(section.documents),
          }))
        );

        // Fetch video and document titles
        fetchVideoTitles(Array.from(sectionMap.values()).flatMap((s) => Array.from(s.videos)));
        fetchDocumentTitles(Array.from(sectionMap.values()).flatMap((s) => Array.from(s.documents)));
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    const fetchVideoTitles = async (videoIds) => {
      try {
        const uniqueVideoIds = [...new Set(videoIds)];
        const videoTitlePromises = uniqueVideoIds.map(async (videoId) => {
          const response = await fetch(`https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/videos/${videoId}`);
          if (!response.ok) throw new Error(`Failed to fetch video: ${videoId}`);
          const data = await response.json();
          return { videoId, title: data.title };
        });

        const videoResults = await Promise.all(videoTitlePromises);
        setVideoTitles(videoResults.reduce((acc, { videoId, title }) => ({ ...acc, [videoId]: title }), {}));
      } catch (error) {
        console.error("Error fetching video titles:", error);
      }
    };

    const fetchDocumentTitles = async (documentIds) => {
      try {
        const uniqueDocumentIds = [...new Set(documentIds)];
        const documentTitlePromises = uniqueDocumentIds.map(async (docId) => {
          const response = await fetch(`https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/documents/${docId}`);
          if (!response.ok) throw new Error(`Failed to fetch document: ${docId}`);
          const data = await response.json();
          return { docId, title: data.fileName }; // Assuming document has `fileName`
        });

        const documentResults = await Promise.all(documentTitlePromises);
        setDocumentTitles(documentResults.reduce((acc, { docId, title }) => ({ ...acc, [docId]: title }), {}));
      } catch (error) {
        console.error("Error fetching document titles:", error);
      }
    };

    if (courseId) fetchSections();
  }, [courseId]);

  // Function to toggle accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-4">
      <h3 className="section-title mb-3">Course Sections</h3>
      <div className="accordion">
        {mergedSections.length > 0 ? (
          mergedSections.map((section, index) => (
            <div className="accordion-section" key={index}>
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
                style={{ cursor: "pointer", width: "1100px", maxWidth: "1100px" }}
              >
                <h5 className="accordion-title mb-0">{section.title}</h5>
                <span className={`accordion-icon ${openIndex === index ? "rotate" : ""}`}>
                  {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>
              {openIndex === index && (
                <div className="accordion-content">
                  <ul className="list-group">
                    {section.videos.length > 0 && (
                      <>
                        <li className="list-group-item fw-bold">Videos</li>
                        {section.videos.map((videoId, idx) => (
                          <li key={idx} className="list-group-item">
                            <Link to={`/video/${videoId}`} className="text-decoration-none">
                              {videoTitles[videoId] || "Loading video title..."}
                            </Link>
                          </li>
                        ))}
                      </>
                    )}
                    {section.documents.length > 0 && (
                      <>
                        <li className="list-group-item fw-bold">Documents</li>
                        {section.documents.map((docId, idx) => (
                          <li key={idx} className="list-group-item">
                            <Link to={`/document/${courseId}`} className="text-decoration-none">
                              {documentTitles[docId] || "Cloud Computing Guide"}
                            </Link>
                          </li>
                        ))}
                      </>
                    )}
                    {section.videos.length === 0 && section.documents.length === 0 && (
                      <li className="list-group-item text-muted">No content available</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-muted">No sections available</p>
        )}
      </div>
    </div>
  );
};

export default Section;
