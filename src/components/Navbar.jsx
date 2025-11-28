import { useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar({
  profileMenuOpen,
  setProfileMenuOpen,
  setPage,
}) {
  const avatarRef = useRef(null);
  const menuRef = useRef(null);

  const gotoHome = () => setPage("home");

  // Outside click handler
  useEffect(() => {
    function onDocClick(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(e.target)
      ) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-10 py-4 flex items-center justify-between shadow-sm">
      <h1
        className="text-2xl font-extrabold text-blue-900 cursor-pointer"
        onClick={gotoHome}
      >
        AI & DS Association
      </h1>

      <div className="relative">
        {/* Avatar */}
        <div
          ref={avatarRef}
          className="cursor-pointer text-blue-800"
          onClick={(e) => {
            e.stopPropagation();     // prevents outside-click immediately firing
            setProfileMenuOpen((s) => !s);
          }}
        >
          <FaUserCircle size={42} />
        </div>

        {/* Dropdown */}
        {profileMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 top-full mt-2 w-52 bg-white rounded-lg shadow-xl border 
                       z-[9999] animate-fadeIn"
          >
            <ul className="py-2">
              <li>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
                  My Profile
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Edit Profile
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Settings
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn .15s ease-out;
        }
        `}
      </style>
    </nav>
  );
}
