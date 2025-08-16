'use client';

import Projects from "@/components/Projects"
import ProjectSide from "@/components/ProjectSide";
import Testing from "@/components/Testing";
import { useState } from "react";

type Tab = 'development' | 'testing'

const page = () => {
    const [tab, setTab] = useState<Tab>('development')

    const renderComponent = () => {
        switch(tab) {
            case 'development': return <Projects />
            case 'testing': return <Testing />
            default: return <Projects/>
        }
    }


  return (
    <div>
        <div className="w-full h-[48px] border-2 border-[#90A1B9] font-fira-code text-[#F8FAFC] text-lg p-3">Projects</div>
        <div className="w-full flex min-h-[834px] overflow-hidden border-r-2 border-[#90A1B9] font-fira-code text-[#F8FAFC] ">
            {/* sidebar */}
            <ProjectSide />
            {/* Maincontent */}
            <section>
                {renderComponent()}
            </section>
        </div>
    </div>
  )
}

export default page