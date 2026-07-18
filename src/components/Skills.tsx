import React from 'react';
import { Award, BookOpen, Brain, ChevronRight, Code2, Database, Languages, Microscope } from 'lucide-react';

interface SkillGroup {
  title: string;
  summary: string;
  icon: React.ReactNode;
  items: string[];
}

interface ProfileMetric {
  label: string;
  value: string;
  note: string;
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Research and Physics',
    summary: 'Core academic training in particle physics, neutrino studies, and simulation-based analysis.',
    icon: <Microscope className="h-5 w-5" />,
    items: ['Particle physics', 'Neutrino oscillations', 'Detector simulation', 'Statistical analysis', 'Scientific writing']
  },
  {
    title: 'Programming and Analysis',
    summary: 'Practical tools for reproducible analysis, numerical work, and research workflows.',
    icon: <Code2 className="h-5 w-5" />,
    items: ['Python', 'C++', 'Rust', 'JavaScript/TypeScript', 'SQL', 'MATLAB', 'Bash']
  },
  {
    title: 'Data and Computing',
    summary: 'Applied computing stack used across data exploration, version control, and collaboration.',
    icon: <Database className="h-5 w-5" />,
    items: ['Git', 'Linux', 'Docker', 'Jupyter', 'ROOT', 'Geant4', 'Pythia']
  },
  {
    title: 'Communication and Collaboration',
    summary: 'Academic and technical communication across research groups, presentations, and documentation.',
    icon: <BookOpen className="h-5 w-5" />,
    items: ['Technical writing', 'Presentations', 'Peer collaboration', 'Documentation', 'Research summaries']
  },
  {
    title: 'Languages',
    summary: 'Working languages used in academic and collaborative settings.',
    icon: <Languages className="h-5 w-5" />,
    items: ['Arabic', 'English', 'French', 'Spanish', 'Japanese']
  }
];

const profileMetrics: ProfileMetric[] = [
  {
    label: 'Primary focus',
    value: 'Particle physics',
    note: 'Neutrino analysis, detector studies, and research communication'
  },
  {
    label: 'Technical stack',
    value: 'Computational research',
    note: 'Python, C++, simulation, data analysis, and reproducible workflows'
  },
  {
    label: 'Working style',
    value: 'Academic and practical',
    note: 'Clear documentation, structured analysis, and collaborative delivery'
  }
];

const highlights = [
  'PhD research in underground neutrino physics in collaboration with Hyper-Kamiokande.',
  'Experience with simulation, data reduction, and statistical inference in physics analysis.',
  'Comfortable moving between scientific writing, analysis code, and presentation-ready outputs.'
];

const ModernSkillsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-18">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            Academic Profile
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Skills and research profile
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            A concise overview of my academic strengths, technical toolkit, and the research environment I work in.
            The focus is on particle physics, data analysis, and clear scientific communication.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {profileMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/60"
            >
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.label}</p>
              <p className="mt-2 text-lg font-semibold">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{metric.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50 sm:p-8">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4 dark:border-gray-800">
              <div className="rounded-xl bg-emerald-50 p-2 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Core competencies</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Compact, academically framed summary of skills and methods.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-gray-100 p-2 text-emerald-700 dark:bg-gray-800 dark:text-emerald-300">
                      {group.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold">{group.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">{group.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/60">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-2 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                  <Award className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold">Highlights</h2>
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-600 dark:bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-2 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                  <ChevronRight className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold">Useful links</h2>
              </div>
              <div className="mt-5 space-y-3 text-sm">
                <a href="/vitae" className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-gray-700 transition-colors hover:border-emerald-300 hover:text-emerald-700 dark:border-gray-800 dark:text-gray-200 dark:hover:border-emerald-700 dark:hover:text-emerald-300">
                  <span>Open full CV</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a href="/publications" className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-gray-700 transition-colors hover:border-emerald-300 hover:text-emerald-700 dark:border-gray-800 dark:text-gray-200 dark:hover:border-emerald-700 dark:hover:text-emerald-300">
                  <span>View publications</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a href="/books" className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-gray-700 transition-colors hover:border-emerald-300 hover:text-emerald-700 dark:border-gray-800 dark:text-gray-200 dark:hover:border-emerald-700 dark:hover:text-emerald-300">
                  <span>See reading list</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ModernSkillsPage;
