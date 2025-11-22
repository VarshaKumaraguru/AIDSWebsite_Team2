import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Codenigma from "./pages/Codenigma";
import Genesys from "./pages/Genesys";
import FacultyInfo from "./pages/FacultyInfo";

// Images
import img1 from "./assets/leetcode.png";
import img2 from "./assets/project_expo.jpeg";
import Dashboard_Carousel from "./components/Dashboard_Carousel";

import "./style.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Listen for navbar navigate-home custom event (dispatched by Navbar)
  useEffect(() => {
    function handleNavigateHome() {
      setCurrentPage("home");
    }
    window.addEventListener("navigate-home", handleNavigateHome);
    return () => window.removeEventListener("navigate-home", handleNavigateHome);
  }, []);

  return (
    <div className="h-screen bg-[#f5f7fb] font-sans overflow-hidden flex relative text-gray-900">

      {/* SIDEBAR */}
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        setCurrentPage={setCurrentPage}
      />

      {/* MAIN AREA */}
      <div
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen ? "lg:pl-64" : "lg:pl-0"
        }`}
      >
        {/* NAVBAR */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* PAGE CONTENT */}
        {currentPage === "home" ? (
          <main className="flex-1 overflow-y-auto p-10">

            {/* HEADER SECTION */}
            <section className="bg-white p-10 rounded-2xl shadow-md border border-gray-200">
              
              <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
                Welcome to the Department of AI and DS
              </h1>

              <p className="text-gray-600 leading-relaxed max-w-3xl mb-10">
                Our mission is to foster innovation and excellence in Artificial
                Intelligence and Data Science through cutting-edge research,
                industry collaboration, and a dynamic learning environment.
              </p>

              {/* RESPONSIVE STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {[
                  { label: "Ongoing Projects", value: "50+" },
                  { label: "Faculty Members", value: "12" },
                  { label: "Active Students", value: "300+" },
                  { label: "Research Lab", value: "1" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#eef4ff] p-6 rounded-xl shadow-sm border border-blue-100 text-center"
                  >
                    <div className="text-3xl font-bold text-blue-900">{item.value}</div>
                    <p className="text-blue-700 mt-1 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* end of header section (carousel moved to Events below) */}

            </section>

            {/* EVENTS (separate section for carousel) */}
            <section id="events" className="bg-white mt-12 p-8 rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-blue-900">Events</h2>
              <div className="">
                  <Dashboard_Carousel
                    slides={[{ img: img1, page: "codenigma" }, { img: img2, page: "genesys" }]}
                    onSelect={(page) => setCurrentPage && setCurrentPage(page)}
                  />
              </div>
            </section>

            {/* RECENT UPDATES */}
            <section className="bg-white mt-12 p-8 rounded-2xl shadow-md border border-gray-200">
              
              <h2 className="text-2xl font-bold mb-6 text-blue-900">
                Recent Updates
              </h2>

              <div className="space-y-4">
                {[
                  { title: "Need Volunteers for Yukta2k26", time: "1 day ago" },
                  { title: "Enigma Contest results out", time: "2 days ago" },
                  { title: "50+ students placed in final year", time: "5 days ago" },
                ].map((u) => (
                  <div key={u.title} className="pb-3 border-b">
                    <p className="text-blue-900 font-medium">{u.title}</p>
                    <p className="text-gray-500 text-sm">{u.time}</p>
                  </div>
                ))}
              </div>

            </section>

          </main>
        ) : (
          <main className="flex-1 overflow-y-auto p-10">
            <section className="bg-transparent">
              {currentPage === "codenigma" && <Codenigma />}
              {currentPage === "genesys" && <Genesys />}
              {currentPage === "faculty-info" && <FacultyInfo />}
            </section>
          </main>
        )}
      </div>
    </div>
  );
}
