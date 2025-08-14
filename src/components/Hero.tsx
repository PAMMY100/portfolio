import HeroText from "./HeroText"
import LanguageIcons from "./LanguageIcons"

const Hero = () => {
  return (
    <section className="relative min-h-fit w-full overflow-hidden bg-[#0F172B] text-white">
        <div className="absolute right-0 top-1/2 h-[700px] w-[600px] -translate-y-1/2 -translate-x-full rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400 via-cyan-600 to-transparent blur-3xl opacity-40 pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-evenly px-10 lg:px-20 py-[180px] gap-2">
            <HeroText />
            <div className="w-full max-w-xl aspect-square bg-[#314158] rounded-xl border border-cyan-700 shadow-2xl p-1 flex items-center justify-center">
                {/*  animation can go here */}
                <LanguageIcons />
            </div>
        </div>
    </section>
  )
}

export default Hero