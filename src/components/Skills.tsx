import React from 'react';
import { 
  Code2, 
  Database,
  Award, 
  ChevronRight,
  Star,
  TrendingUp,
  Zap,
  Brain
} from 'lucide-react';

interface SkillItem {
  name: string;
  hint?: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  skills: SkillItem[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ModernSkillsPage: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Particle Physics & Research",
      subtitle: "Academic training as a particle physicist, from theory to simulation and analysis.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "High‑Energy Physics", hint: "Collider phenomenology, SM & BSM intuition, stats‑heavy analysis" },
        { name: "Simulation & Tooling", hint: "GEANT4, ROOT, Monte Carlo workflows" },
        { name: "Data Reduction Pipelines", hint: "From raw events to analysis‑ready ntuples" },
        { name: "Uncertainty & Inference", hint: "Likelihoods, systematics, significance, fits" },
        { name: "Scientific Communication", hint: "Papers, talks, posters, peer‑review feedback loops" },
      ]
    },
    {
      title: "Data Science & ML Engineering",
      subtitle: "Turning messy data into deployed models and measurable impact.",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Core Stack", hint: "Python, NumPy, pandas, Jupyter, SQL, Docker" },
        { name: "Classical ML", hint: "Scikit‑learn, XGBoost, LightGBM, feature engineering, evaluation" },
        { name: "Deep Learning", hint: "PyTorch / TensorFlow, CNNs, RNNs, Transformers" },
        { name: "MLOps Mindset", hint: "Reproducible experiments, versioning, monitoring metrics" },
        { name: "Applied Domains", hint: "Tabular forecasting, classification, image processing" },
      ]
    },
    {
      title: "Software & Data Stack",
      subtitle: "Engineering practices that make research and ML actually shippable.",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Backend & APIs", hint: "Python/FastAPI, Node.js, RESTful services" },
        { name: "Data Stores", hint: "PostgreSQL, MongoDB, efficient schema design" },
        { name: "Dev Environment", hint: "Linux, bash, Git, containers, remote workflows" },
        { name: "Productivity", hint: "VS Code/Cursor, testing mindset, automation scripts" },
        { name: "Collaboration", hint: "Code review, documentation, mentoring mindset" },
      ]
    }
  ];

  const certifications: Certification[] = [
    {
      title: "ALX Software Engineering",
      issuer: "ALX Africa",
      date: "Feb, 2025",
      description: "Graduate of the ALX Software Engineering program with hands-on experience in software development, algorithms, data structures, and web development. Equipped with skills to tackle real-world challenges and build efficient software solutions.",
      icon: <Award className="w-6 h-6" />,
      color: "text-emerald-500"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Deep Learning AI",
      date: "Dec, 2024",
      description: "Completed 5 courses covering neural network architectures including CNNs, RNNs, LSTMs, and Transformers. Mastered optimization strategies like Dropout, BatchNorm, and Xavier/He initialization. Applied concepts to real-world cases including speech recognition, NLP, and chatbots.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-blue-500"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Machine Learning Specialization",
      date: "Mar, 2024",
      description: "Completed all three courses covering modern ML concepts including supervised learning, unsupervised learning, recommender systems, and reinforcement learning. Gained practical skills to apply ML techniques to challenging real-world problems.",
      icon: <Zap className="w-6 h-6" />,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Skills & Profile
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A hybrid profile at the intersection of <span className="font-semibold">particle physics</span> and 
            <span className="font-semibold"> data / machine learning engineering</span> — from designing experiments
            and simulations to shipping models and services in production‑like environments.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {category.title}
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mt-2">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors"
                    >
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </p>
                        {skill.hint && (
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {skill.hint}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
              <Star className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Certifications & Achievements
            </h2>
          </div>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600">
                  <div className="flex items-start gap-6">
                    <div className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-700 ${cert.color} flex-shrink-0`}>
                      {cert.icon}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors">
                          {cert.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-all group-hover:translate-x-1" />
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                          {cert.issuer}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {cert.date}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernSkillsPage;