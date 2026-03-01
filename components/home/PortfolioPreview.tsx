import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";

export default function PortfolioPreview() {
  return (
    <section className="py-20 relative">
      <div className="max-w-8xl mx-4 px-6 py-8 border border-red-200 rounded-lg bg-gray-900/60">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-red-500">
            Featured Projects
          </h2>
          <p className="text-neutral-200 mt-4">
            Real-world AI automation and intelligent systems built for modern businesses.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group bg-gray-800/70 border border-red-500 rounded-2xl shadow-lg shadow-red-500/40 hover:shadow-red-500/60 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-red-500 mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {project.shortDescription.split(/(\d+%)/g).map((part, idx) => (
                    /\d+%/.test(part) ? (
                      <span key={idx} className="text-red-500 font-semibold">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  ))}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-500 transition"
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}