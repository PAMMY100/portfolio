import HeroText from "./HeroText"

const Hero = () => {
  return (
    <section className="relative min-h-fit w-full overflow-hidden bg-[#0B1120] text-white">
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 -translate-x-full rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400 via-cyan-600 to-transparent blur-3xl opacity-40 pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-around px-10 lg:px-20 py-60 gap-10">
            <HeroText />
            <div className="w-full max-w-md aspect-square bg-[#111827] rounded-xl border border-cyan-700 shadow-2xl p-6 flex items-center justify-center">
                {/* Game or animation can go here */}
                <span className="text-gray-500">Game Box UI</span>
            </div>
        </div>
    </section>
  )
}

export default Hero