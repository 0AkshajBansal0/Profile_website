import { RiReactjsLine } from "react-icons/ri";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiFirebase, DiMongodb, DiMysql, DiPython, DiCode, DiJava } from "react-icons/di";
import { SiC } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{opacity: 1, x: 0 }}
        initial={{opacity: 0, x: -100 }}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
        whileInView={{opacity: 1, x: 0 }}
        initial={{opacity: 0, x: -100 }}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#00D8FF] transition">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#E34F26] transition">
          <AiFillHtml5 className="text-5xl text-orange-600" />
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#264DE4] transition">
          <DiCss3 className="text-5xl text-blue-600" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#F7DF1E] transition">
          <DiJavascript1 className="text-5xl text-yellow-500" />
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#FFCB2B] transition">
          <DiFirebase className="text-5xl text-orange-500" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#47A248] transition">
          <DiMongodb className="text-5xl text-green-600" />
        </motion.div>
        <motion.div 
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#00758F] transition">
          <DiMysql className="text-5xl text-blue-800" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#4B8BBE] transition">
          <DiPython className="text-5xl text-green-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#F34B7D] transition">
          <DiCode className="text-5xl text-red-500" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#00599C] transition">
          <SiC className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#007396] transition">
          <DiJava className="text-5xl text-red-700" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-[0_0_15px_#000000] transition">
          <AiFillGithub className="text-5xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
