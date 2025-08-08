import ContactMain from "@/components/ContactMain"
import ContactSidebar from "@/components/ContactSidebar"

const page = () => {
  return (
    <div className="min-h-screen overflow-hidden text-[#F8FAFC] font-fira-code flex border-r-2 border-[#90A1B9]">
        <ContactSidebar />
        <ContactMain />
    </div>
  )
}

export default page