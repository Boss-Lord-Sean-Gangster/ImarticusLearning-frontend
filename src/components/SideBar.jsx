import React from "react";
import { Link } from "react-router-dom";
import { Book, MessageSquare } from "lucide-react"; // Keep the existing icons

export function SideBar() {
  return (
    <div
      className="bg-success text-white d-flex flex-column"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",  // Full height of the viewport
        width: "250px",
        zIndex: "1000",  // Ensure the sidebar is above other content
      }}
    >
      <div className="p-4 border-bottom border-dark">
        <img
          src="Imarticus-logo.png"
          alt="iMarticus Learning"
          width="150"
          height="40"
        />
      </div>
      <nav className="flex-grow-1">
        <Link
          to="/course"
          className="d-flex align-items-center gap-3 p-3 text-white bg-dark hover:bg-success"
        >
          <Book className="h-5 w-5" />
          Course
        </Link>
        <Link
          to="/discussion"
          className="d-flex align-items-center gap-3 p-3 text-white hover:bg-success"
        >
          <MessageSquare className="h-5 w-5" />
          Discussion
        </Link>
      </nav>
      <div className="p-4 border-top border-dark">
        <p className="text-muted mb-2">Facing problems?</p>
        <button className="w-100 btn btn-dark">Get help</button>
      </div>
    </div>
  );
}
