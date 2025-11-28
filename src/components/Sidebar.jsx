import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar({
  isOpen,
  toggleSidebar,
  setCurrentPage,
  currentPage,
  setProfileMenuOpen,
}) {
  const [aboutOpen, setAboutOpen] = useState(false);

  const menu = [
    { name: "About", dropdown: ["Faculty Info", "Staff Info", "Syllabus"] },
    "Leaderboards",
    "Events",
    "Achievements",
    "Connect",
    "Projects",
  ];

  const handleSubMenuClick = (item) => {
    if (item === "Faculty Info") {
      setCurrentPage("faculty-info");
    } else if (item === "Staff Info") {
      setCurrentPage("staff-info");   // ✅ FIXED
    } else if (item === "Syllabus") {
      setCurrentPage("syllabus");
    }

    setAboutOpen(false);
    toggleSidebar();
  };

  const handleItemClick = (item) => {
    if (item === "Events") {
      setCurrentPage("home");
      toggleSidebar();
      setTimeout(() => {
        const el = document.getElementById("events");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    const pageSlug = item.toLowerCase().replace(/\s+/g, "-");
    setCurrentPage(pageSlug);
    toggleSidebar();
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="
          fixed top-1/2 -translate-y-1/2 left-0 z-50
          bg-blue-900 text-white w-6 h-20
          flex items-center justify-center
          border-r border-blue-800
          shadow-md hover:bg-blue-700 transition
        "
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-r border-gray-200
          p-6 pt-20 shadow-md transition-all duration-300
          ${isOpen ? "translate-x-0 w-64" : "-translate-x-64 w-64"}
        `}
      >
        <nav className="space-y-3">
          {menu.map((item) =>
            typeof item === "string" ? (
              <button
                key={item}
                onClick={() => handleItemClick(item)}
                className={`w-full text-left px-4 py-2 rounded-lg text-blue-900 hover:bg-blue-100 transition ${
                  currentPage === item.toLowerCase().replace(/\s+/g, "-")
                    ? "bg-blue-50"
                    : ""
                }`}
              >
                {item}
              </button>
            ) : (
              <div key={item.name}>
                <button
                  className="w-full text-left px-4 py-2 rounded-lg text-blue-900 hover:bg-blue-100 transition"
                  onClick={() => setAboutOpen((prev) => !prev)}
                >
                  {item.name}
                </button>

                {aboutOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem}
                        onClick={() => handleSubMenuClick(subItem)}
                        className="w-full text-left px-4 py-2 text-blue-800 text-sm hover:bg-blue-50 rounded-lg transition"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </nav>

        <button
          onClick={() => setProfileMenuOpen(true)}
          className="mt-10 px-4 py-2 rounded-lg text-blue-700 font-semibold hover:bg-blue-100 transition"
        >
          Edit Profile
        </button>
      </aside>
    </>
  );
}
