import React, { useState, useEffect } from 'react';
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

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillBarProps {
  skill: Skill;
  categoryIndex: number;
  skillIndex: number;
}

interface AnimatedSkills {
  [key: string]: number;
}

const ModernSkillsPage: React.FC = () => {
  const [animatedSkills, setAnimatedSkills] = useState<AnimatedSkills>({});

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming langauges / tools",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 80 },
        { name: "C/C++", level: 55 },
        { name: "TypeScript/JavaScript", level: 66 },
        { name: "ROOT", level: 60 },
        { name: "GEANT4", level: 50 },
        { name: "Jupyter/Colab", level: 70}
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Python/FastAPI", level: 67 },
        { name: "PostgreSQL", level: 60 },
        { name: "MongoDB", level: 60 },
        { name: "Linux/bash-scripting", level: 60 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "TensorFlow/PyTorch", level: 50 },
        { name: "Scikit-learn", level: 60 },
        { name: "Data Analysis", level: 50 }
      ]
    },
    {
        title: "Domain Knowledge",
        icon: <Brain className="w-6 h-6" />,
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "Modern Physics", level: 80 },
            { name: "HEP simulations", level: 55 },
            { name: "Scientific Writing", level: 65 },
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

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedSkills: AnimatedSkills = {};
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const key = `${categoryIndex}-${skillIndex}`;
          newAnimatedSkills[key] = skill.level;
        });
      });
      setAnimatedSkills(newAnimatedSkills);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const SkillBar: React.FC<SkillBarProps> = ({ skill, categoryIndex, skillIndex }) => {
    const key = `${categoryIndex}-${skillIndex}`;
    const animatedLevel = animatedSkills[key] || 0;

    return (
      <div className="group">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {skill.name}
          </span>
          <span className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
            style={{ width: `${animatedLevel}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative solutions with cutting-edge technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex}
                      skill={skill} 
                      categoryIndex={categoryIndex} 
                      skillIndex={skillIndex}
                    />
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