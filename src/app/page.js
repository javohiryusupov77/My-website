import Animation from "@/app/components/animation";
import AchievementsSection from "./components/AchievmentSection";
import About from "./components/About";
import Header from "./components/header";
import ImageOfMyself from "./components/ImageOfMyself";
import Projects from "./components/Myprojects/projects";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black container">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 ml-10">
        <div className="col-span-3 ml-8">
          <h1 className=" text-7xl inline-block bg-gradient-to-r from-[#f79] to-[#f06] bg-clip-text text-transparent">Hello I'm </h1>
          <Animation />
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            quibusdam.
          </p>
          <div class="space-x-4 mt-5">
            <button class="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded-lg font-semibold">
              Hire me
            </button>
            <button class="border border-purple-500 text-white bg-purple-to-r from-purple-500 to-purple-700 py-2 px-4 rounded-lg font-semibold">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-2 ml-10">
          <ImageOfMyself />
        </div>
      </div>

      <AchievementsSection />
      <About />
      <br />
      <Projects />
      <br />
      <Footer />
    </main>
  );
}