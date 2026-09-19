
import { NavLink } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineUnorderedList } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { GiGloves, GiRunningShoe } from "react-icons/gi";
import { Gem, Layers, Users } from "lucide-react";

const sections = [
  {
    title: "عام",
    links: [
      { to: "/add", icon: AiOutlinePlusCircle, label: "إضافة منتج", short: "إضافة" },
      { to: "/list", icon: AiOutlineUnorderedList, label: "جميع المنتجات", short: "المنتجات" },
      { to: "/orders", icon: FaShoppingCart, label: "الطلبات", short: "الطلبات" },
    ],
  },
  {
    title: "الأحذية",
    links: [
      { to: "/electrical/add", icon: GiRunningShoe, label: "إضافة حذاء", short: "إضافة حذاء" },
      { to: "/electrical/list", icon: AiOutlineUnorderedList, label: "قائمة الأحذية", short: "قائمة أحذية" },
    ],
  },
  {
    title: "القفازات",
    links: [
      { to: "/gloves/add", icon: GiGloves, label: "إضافة قفاز", short: "إضافة قفاز" },
      { to: "/gloves/list", icon: AiOutlineUnorderedList, label: "قائمة القفازات", short: "قائمة قفازات" },
    ],
  },
  {
    title: "الإكسسوارات",
    links: [
      { to: "/Accessories/add", icon: Gem, label: "إضافة إكسسوارات", short: "الإكسسوارات" },
      { to: "/Accessories/list", icon: Layers, label: "قائمة الإكسسوارات", short: "قائمة الإكسسوارات" },
    ],
  },
  {
    title: "المستخدمين",
    links: [{ to: "/users", icon: Users, label: "جميع المستخدمين", short: "المستخدمين" }],
  },
];

const desktopLink = ({ isActive }) =>
  `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
    isActive
      ? "bg-emerald-50 text-emerald-600 border-r-4 border-emerald-500"
      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
  }`;

const mobileLink = ({ isActive }) =>
  `flex flex-col items-center justify-center min-w-[70px] py-2 px-1 rounded-lg transition-all duration-200 ${
    isActive
      ? "text-emerald-600 bg-emerald-50"
      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
  }`;

const Sidebar = () => (
  <>
    {/* موبايل */}
    <div className="md:hidden w-full bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
      <div className="flex items-center overflow-x-auto px-1 py-1 gap-1 scrollbar-hide">
        {sections.flatMap((s) => s.links).map(({ to, icon: Icon, short }) => (
          <NavLink key={to} to={to} className={mobileLink}>
            <Icon className="text-2xl" />
            <span className="text-[11px] mt-1 whitespace-nowrap">{short}</span>
          </NavLink>
        ))}
      </div>
    </div>

    {/* ديسكتوب */}
    <aside className="hidden md:flex md:flex-col w-64 bg-white border-l border-gray-200 h-screen sticky top-0 overflow-y-auto shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
          لوحة التحكم
        </h2>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-4">
        {sections.map(({ title, links }) => (
          <div key={title}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
              {title}
            </p>
            {links.map(({ to, icon: Icon, label }) => (
              <NavLink key={to} to={to} className={desktopLink}>
                <Icon className="text-xl" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  </>
);

export default Sidebar;