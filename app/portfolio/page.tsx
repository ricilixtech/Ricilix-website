import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects"; // safer absolute import

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 to-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl font-bold text-white mb-14 text-center">
          My Portfolio Projects
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group bg-gray-950 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-red-100"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-red-600 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
