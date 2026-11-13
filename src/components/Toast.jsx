import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
export default function Toast({ message }) {
  return <AnimatePresence>{message && <motion.div className="toast" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}}><CheckCircle2 size={18}/><span>{message}</span></motion.div>}</AnimatePresence>;
}
