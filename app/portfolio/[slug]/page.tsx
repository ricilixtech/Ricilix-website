import { projects } from "../../data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// ✅ Important for production (prevents 404 on Vercel)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-16 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">

        <Link
          href="/portfolio"
          className="text-sm text-purple-600 hover:text-purple-800 mb-8 inline-block"
        >
          ← Back to Portfolio
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
              {project.title}
            </h1>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-purple-700 mb-2">
                Problem
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.content.problem}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-purple-700 mb-2">
                Solution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.content.solution}
              </p>
            </section>
          </div>

          <div className="relative w-full h-72 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-purple-700 mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.content.features.map((feature, i) => (
              <div
                key={i}
                className="bg-purple-50 border border-purple-100 rounded-lg px-4 py-3 text-gray-700"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-purple-700 mb-6">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.content.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-purple-700 mb-6">
            Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.content.impact.map((item, i) => (
              <div
                key={i}
                className="bg-purple-50 border border-purple-100 rounded-lg px-4 py-3 text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
