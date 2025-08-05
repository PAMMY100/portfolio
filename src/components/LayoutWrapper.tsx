'use client'
import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar";

const LayoutWrapper = ({children}: { children: React.ReactNode}) => {
    const pathName = usePathname();
    const showSidebar = ['/about', '/projects', '/contact'].includes(pathName);

  return (
    <main className="flex">
        {showSidebar && <Sidebar />}
        <div className="flex-1">{children}</div>
    </main>
  )
}

export default LayoutWrapper