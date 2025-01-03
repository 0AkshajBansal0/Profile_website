import { RiReactjsLine } from "react-icons/ri";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiFirebase, DiMongodb, DiMysql, DiPython, DiCode, DiJava } from "react-icons/di";
import { SiC } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#00D8FF] transition">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#E34F26] transition">
          <AiFillHtml5 className="text-5xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#264DE4] transition">
          <DiCss3 className="text-5xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#F7DF1E] transition">
          <DiJavascript1 className="text-5xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#FFCB2B] transition">
          <DiFirebase className="text-5xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#47A248] transition">
          <DiMongodb className="text-5xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#00758F] transition">
          <DiMysql className="text-5xl text-blue-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#4B8BBE] transition">
          <DiPython className="text-5xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#F34B7D] transition">
          <DiCode className="text-5xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#00599C] transition">
          <SiC className="text-5xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#007396] transition">
          <DiJava className="text-5xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#000000] transition">
          <AiFillGithub className="text-5xl text-black" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
