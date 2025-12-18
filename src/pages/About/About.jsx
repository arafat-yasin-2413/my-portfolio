import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import Container from "../../components/Container/Container";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import developerAnim from "../../assets/animations/web developmemt.json";

const About = () => {
  return (
    <Container>
      <section className="min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <MainTitle text="About Me" />

            <div className="mt-6 space-y-4 text-sm md:text-base xl:text-lg leading-relaxed text-white/80">
              <p>
                Hello! I’m <span className="text-accent font-semibold">Md Yasin Arafat</span>, a passionate
                <span className="text-accent"> Frontend</span> & <span className="text-accent">MERN Stack</span> Developer who loves building
                modern, scalable, and user-friendly web applications.
              </p>

              <p>
                My journey began with curiosity—experimenting with simple layouts, breaking things, fixing them,
                and eventually falling in love with JavaScript and React.
              </p>

              <p>
                I enjoy working at the intersection of <span className="text-accent">design</span> and
                <span className="text-accent"> functionality</span>, turning complex ideas into clean,
                intuitive digital experiences.
              </p>

              <p>
                Beyond coding, I enjoy playing football, exploring new tech trends, and sketching ideas—these keep
                my creativity fresh and mindset balanced.
              </p>

              <p>
                At my core, I value <span className="text-accent">continuous learning</span>,
                <span className="text-accent"> collaboration</span>, and meaningful problem-solving.
              </p>
            </div>
          </motion.div>

          {/* Animation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6">
              <Lottie
                animationData={developerAnim}
                loop
                autoplay
                style={{ width: "320px" }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default About;