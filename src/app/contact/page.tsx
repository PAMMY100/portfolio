'use client';

import ContactMain from "@/components/ContactMain"
import ContactSidebar from "@/components/ContactSidebar"
import { useState } from "react";
import { ContactFormData } from "@/lib/validation";

const page = () => {
    const [formdata, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    })


  return (
    <div className="min-h-screen overflow-hidden text-[#F8FAFC] font-fira-code flex border-r-2 border-[#90A1B9]">
        <ContactSidebar />
        <ContactMain />
    </div>
  )
}

export default page