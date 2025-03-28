import {RevealOnScroll} from '../RevealOnScroll';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Expense Tracker</h3>
            <p className="text-gray-400 mb-4">
              A simple expense tracker to manage and visualize daily spending
              efficiently.
            </p>
            <div>
              {["HTML", "CSS", "Javascript", "Graph Visualizer"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 ml-2  rounded-full text-small hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project ➡️ </a>
            </div> */}
          </div>
          <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Fake News Detection</h3>
            <p className="text-gray-400 mb-4">
            Developed a Fake News Detection Model using Random Forest, Logistic Regression, and Gradient Boosting for accurate classification.
            </p>
            <div>
              {["Python", "Logistic Regression", "Gradient Boosting", "Flask"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-0 ml-1  rounded-full text-small hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project ➡️ </a>
            </div> */}
          </div>
          <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Investify</h3>
            <p className="text-gray-400 mb-4">
              It is a Full Stack Website to Promote Paper Trading and its awareness
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Reactjs", "NodeJs", "SQL", "Graph"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 ml-2  rounded-full text-small hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project ➡️ </a>
            </div> */}
          </div>
          <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">WanderLust</h3>
            <p className="text-gray-400 mb-4">
              It is a Full Stack Web Application For Booking and Planning for the Vacation , includes reservation making planning guide
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["ReactJs", "Bootstrap", "NodeJs", "ExpressJs"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 ml-2  rounded-full text-small hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project ➡️ </a>
            </div> */}
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
