// AI Skills Database for Accounting Professionals
// Using UK English and terminology

const skillsDatabase = {
    categories: {
        technical: "Core Technical Skills",
        strategic: "Strategic & Advisory Skills", 
        human: "Complementary Human Skills"
    },
    
    proficiencyLevels: {
        basic: 1,
        intermediate: 2,
        advanced: 3
    },
    
    skills: [
        // Core Technical Skills
        {
            id: 1,
            title: "AI Tool Implementation",
            category: "technical",
            description: "Understanding AI system limitations and oversight requirements for professional accounting environments.",
            applications: [
                "Restaurant inventory tracking systems",
                "Legal trust account reconciliation", 
                "Custom AI solutions for industry-specific workflows",
                "AI system compliance and governance"
            ],
            proficiency: "intermediate",
            industryRelevance: ["Hospitality", "Legal Services", "General Practice"],
            tags: ["Implementation", "Oversight", "Compliance"],
            detailedDescription: "This skill encompasses the ability to evaluate, implement, and oversee AI systems within accounting practices whilst understanding their inherent limitations. Professionals must be able to customise AI solutions for specific industry workflows, such as implementing automated inventory tracking for restaurant chains or developing reconciliation systems for legal trust accounts. Critical components include establishing proper oversight protocols, understanding when human intervention is required, and ensuring compliance with professional accounting standards."
        },
        {
            id: 2,
            title: "Data Analysis & Interpretation",
            category: "technical",
            description: "Advanced statistical analysis capabilities including regression modelling and time-series forecasting for financial insights.",
            applications: [
                "Advanced statistical analysis (regression, time-series forecasting)",
                "Data visualisation for financial insights",
                "Pattern recognition in large datasets",
                "Predictive financial modelling"
            ],
            proficiency: "advanced",
            industryRelevance: ["All Sectors", "Financial Services", "Manufacturing"],
            tags: ["Statistics", "Forecasting", "Visualisation"],
            detailedDescription: "This advanced skill involves using sophisticated statistical methods to analyse financial data and extract meaningful insights. Practitioners must be proficient in regression analysis, time-series forecasting, and pattern recognition techniques. The ability to create compelling data visualisations that communicate complex financial information to stakeholders is essential. This includes building predictive models for cash flow forecasting, identifying trends in large datasets, and using statistical methods to support strategic decision-making."
        },
        {
            id: 3,
            title: "Coding & Automation",
            category: "technical", 
            description: "Programming skills in Python and SQL for task automation, data manipulation, and building internal tools.",
            applications: [
                "Python/SQL for task automation and data manipulation",
                "Building internal tools (e.g., policy chatbots for expense queries)",
                "Low-code/no-code platform proficiency",
                "Process automation development"
            ],
            proficiency: "intermediate",
            industryRelevance: ["Technology", "Financial Services", "Consulting"],
            tags: ["Programming", "Automation", "Low-code"],
            detailedDescription: "This skill encompasses the ability to write code and create automated solutions using Python, SQL, and low-code/no-code platforms. Accountants with this skill can build internal tools such as chatbots for expense policy queries, automate repetitive data processing tasks, and create custom reporting solutions. Proficiency includes understanding database queries, scripting for data manipulation, and leveraging automation platforms to streamline accounting workflows whilst maintaining accuracy and compliance."
        },
        {
            id: 4,
            title: "Machine Learning Applications",
            category: "technical",
            description: "Implementation of machine learning models for predictive analytics, fraud detection, and continuous auditing.",
            applications: [
                "Predictive analytics for forecasting",
                "Anomaly detection for fraud/compliance",
                "Continuous auditing model design",
                "Risk assessment algorithms"
            ],
            proficiency: "advanced",
            industryRelevance: ["Banking", "Insurance", "Large Corporations"],
            tags: ["Machine Learning", "Fraud Detection", "Auditing"],
            detailedDescription: "This advanced skill involves designing and implementing machine learning models specifically for accounting and finance applications. Key areas include developing predictive analytics models for financial forecasting, creating anomaly detection systems for fraud prevention and compliance monitoring, and designing continuous auditing frameworks. Practitioners must understand various ML algorithms, model validation techniques, and how to integrate these systems into existing accounting processes whilst ensuring regulatory compliance and maintaining audit trails."
        },

        // Strategic & Advisory Skills
        {
            id: 5,
            title: "Interpretive Acumen",
            category: "strategic",
            description: "Ability to translate complex financial concepts and AI-generated insights for non-finance stakeholders.",
            applications: [
                "Translating complex financial concepts for non-finance stakeholders",
                "Contextualising AI-generated insights for business strategy",
                "Executive reporting and presentation",
                "Cross-functional communication"
            ],
            proficiency: "intermediate",
            industryRelevance: ["All Sectors", "Consulting", "Corporate Finance"],
            tags: ["Communication", "Translation", "Strategy"],
            detailedDescription: "This skill involves the ability to interpret and communicate complex financial data and AI-generated insights in a way that non-finance stakeholders can understand and act upon. It requires translating technical AI outputs into business-relevant recommendations, contextualising financial analysis within broader business strategy, and effectively presenting findings to executive teams. This skill bridges the gap between technical AI capabilities and strategic business decision-making."
        },
        {
            id: 6,
            title: "Critical Evaluation",
            category: "strategic",
            description: "Assessing AI output reliability, identifying bias, and ensuring ethical AI deployment in financial decision-making.",
            applications: [
                "Assessing AI output reliability and bias",
                "Ethical AI deployment in financial decision-making",
                "Quality assurance for AI-generated reports",
                "Risk assessment of AI recommendations"
            ],
            proficiency: "advanced",
            industryRelevance: ["Financial Services", "Public Sector", "Healthcare"],
            tags: ["Ethics", "Quality Assurance", "Risk Assessment"],
            detailedDescription: "This critical skill encompasses the ability to evaluate AI-generated outputs for accuracy, reliability, and potential bias. Practitioners must understand the limitations of AI systems, identify when outputs may be flawed or biased, and implement appropriate checks and balances. This includes establishing ethical frameworks for AI use in financial decision-making, ensuring compliance with professional standards, and maintaining the integrity of financial reporting whilst leveraging AI capabilities."
        },
        {
            id: 7,
            title: "Process Optimisation",
            category: "strategic",
            description: "Identifying automatable tasks and redesigning workflows to integrate AI tools effectively.",
            applications: [
                "Identifying automatable tasks",
                "Workflow redesign integrating AI tools",
                "Efficiency improvement analysis",
                "Change management for AI adoption"
            ],
            proficiency: "intermediate",
            industryRelevance: ["All Sectors", "Process Improvement", "Operations"],
            tags: ["Process Improvement", "Workflow Design", "Change Management"],
            detailedDescription: "This skill involves analysing existing accounting processes to identify opportunities for automation and AI integration. Practitioners must be able to map current workflows, identify bottlenecks and inefficiencies, and redesign processes to leverage AI capabilities effectively. This includes understanding change management principles, training requirements, and how to measure the success of process improvements whilst ensuring quality and compliance are maintained."
        },

        // Complementary Human Skills
        {
            id: 8,
            title: "Communication & Collaboration",
            category: "human",
            description: "Leading cross-functional teams and providing client advisory services with empathy and negotiation skills.",
            applications: [
                "Cross-functional team leadership",
                "Client advisory with empathy/negotiation",
                "Stakeholder management",
                "Collaborative problem-solving"
            ],
            proficiency: "intermediate",
            industryRelevance: ["All Sectors", "Client Services", "Management"],
            tags: ["Leadership", "Client Relations", "Collaboration"],
            detailedDescription: "This essential human skill involves leading diverse teams, managing client relationships, and facilitating collaboration in an AI-enhanced environment. It includes the ability to lead cross-functional projects involving both technical and non-technical team members, provide empathetic client advisory services, and negotiate solutions that balance AI capabilities with human expertise. Strong communication skills are essential for explaining AI-driven recommendations and maintaining trust in client relationships."
        },
        {
            id: 9,
            title: "Cybersecurity & Ethics",
            category: "human",
            description: "Implementing data protection protocols and regulatory compliance monitoring for financial systems.",
            applications: [
                "Data protection protocols for financial systems",
                "Regulatory compliance monitoring via AI",
                "Cybersecurity risk assessment",
                "Ethical decision-making frameworks"
            ],
            proficiency: "advanced",
            industryRelevance: ["Financial Services", "Healthcare", "Government"],
            tags: ["Cybersecurity", "Compliance", "Ethics"],
            detailedDescription: "This skill encompasses understanding and implementing robust cybersecurity measures and ethical frameworks for AI use in accounting. Practitioners must establish data protection protocols, ensure compliance with financial regulations, and monitor systems for security threats. This includes understanding GDPR, financial services regulations, and professional ethical standards whilst implementing AI solutions that maintain data integrity and client confidentiality."
        },
        {
            id: 10,
            title: "Continuous Learning",
            category: "human",
            description: "Adapting to industry-specific AI solutions and making strategic AI investment decisions.",
            applications: [
                "Adapting to industry-specific AI solutions",
                "Strategic AI investment analysis (build vs. buy decisions)",
                "Professional development planning",
                "Technology trend analysis"
            ],
            proficiency: "intermediate",
            industryRelevance: ["All Sectors", "Technology Management", "Strategy"],
            tags: ["Learning", "Adaptation", "Strategic Planning"],
            detailedDescription: "This skill involves maintaining currency with evolving AI technologies and their applications in accounting. Practitioners must continuously update their knowledge, evaluate new AI solutions for their relevance to their industry or practice, and make informed decisions about AI investments. This includes conducting build-versus-buy analysis for AI solutions, developing personal and organisational learning strategies, and staying informed about technological trends that may impact the profession."
        }
    ],

    // Industry-specific examples and case studies
    industryExamples: {
        "Construction": {
            relevantSkills: [1, 2, 7],
            specificApplications: [
                "Project cost forecasting using AI",
                "Equipment utilisation optimisation",
                "Safety compliance monitoring"
            ]
        },
        "Healthcare": {
            relevantSkills: [1, 6, 9],
            specificApplications: [
                "Medical billing accuracy verification",
                "Compliance monitoring for healthcare regulations",
                "Patient data protection protocols"
            ]
        },
        "Retail": {
            relevantSkills: [1, 2, 4],
            specificApplications: [
                "Inventory management and forecasting",
                "Customer behaviour analysis",
                "Fraud detection in transactions"
            ]
        }
    },

    // Cross-reference tags for micro-product management and interpretive skills
    crossReferenceTags: {
        "Micro-Product Management": [1, 3, 7],
        "Interpretive Acumen": [5, 8, 10]
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = skillsDatabase;
}