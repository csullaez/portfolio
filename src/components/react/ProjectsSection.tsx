import { useState, useEffect, useRef, useCallback } from "react";
import type { Project } from "../../types/portfolio";
import { getTechIcon } from "../../lib/icons";

interface ProjectsSectionProps {
  projects: Project[];
}

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

const asset = (path?: string): string | undefined => {
  if (!path) return undefined;
  return path.startsWith("http") ? path : `${BASE}${path}`;
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const displayProjects = showAll ? projects : featuredProjects.slice(0, 3);

  const openProject = useCallback((project: Project) => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setSelectedProject(project);
  }, []);

  const closeProject = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
      lastFocused.current?.focus();
    }, 250);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    if (dialog) {
      const focusables = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusables[0]?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeProject();
        return;
      }
      if (e.key === "Tab" && selectedProject && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, closeProject]);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#0b0b0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent dark:text-accent-dark font-medium mb-3">
            // Portafolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Proyectos
          </h2>
          <div className="w-14 h-px bg-accent/40 dark:bg-accent-dark/50 mx-auto mt-5"></div>
          <p className="mt-4 max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-relaxed">
            Una selección de los proyectos más significativos en los que he trabajado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => openProject(project)}
              className="reveal group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-black/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="h-44 relative overflow-hidden">
                {asset(project.image) ? (
                  <>
                    <img
                      src={asset(project.image)}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <svg
                      className="w-14 h-14 text-slate-300 dark:text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                )}
                {project.featured && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-sm">
                    Destacado
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      title={tech}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-lg"
                    >
                      <i className={getTechIcon(tech)}></i>
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-accent-soft dark:bg-accent-dark-soft text-accent-strong dark:text-accent-dark hover:bg-accent hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Ver más
                  </button>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          {!showAll && projects.length > 3 && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold rounded-lg hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-colors"
            >
              Ver todos los proyectos ({projects.length})
            </button>
          )}
          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              Ver menos
            </button>
          )}
        </div>
      </div>

      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeProject}
            aria-hidden="true"
          />
          <div
            ref={dialogRef}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl"
          >
            {asset(selectedProject.image) && (
              <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-t-2xl">
                <img
                  src={asset(selectedProject.image)}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 id="project-dialog-title" className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.featured && (
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-md bg-accent-soft dark:bg-accent-dark-soft text-accent-strong dark:text-accent-dark text-xs font-medium">
                      Destacado
                    </span>
                  )}
                </div>
                <button
                  onClick={closeProject}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Cerrar detalles del proyecto"
                >
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selectedProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-3">
                  Tecnologías
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium"
                    >
                      <i className={getTechIcon(tech)}></i>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.demoUrl && (
                <div className="flex justify-end pt-5 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-strong text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Ver proyecto
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}