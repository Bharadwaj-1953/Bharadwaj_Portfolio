const projects = [
  {
    title: "PMTrace - Persistent Memory File System Bug Detection Framework",
    description:
      "Automated bug detection framework leveraging PM file system consistency mechanisms to generate crash plans and validate correctness across NOVA, PMFS, and WineFS. Built on research published at USENIX FAST '25.",
    features: [
      "Automated crash plan generation using consistency mechanism-aware analysis across three PM file systems.",
      "Reproduced and validated six real-world bugs using QEMU/KVM-based isolated VM infrastructure.",
      "Scalability evaluation across ACE-seq2 and ACE-seq3 workloads with up to 20 concurrent VMs.",
    ],
    technologies: [
      "Python", "Shell Scripting", "QEMU/KVM", "C++", "Linux",
      "NOVA", "PMFS", "WineFS", "Persistent Memory", "Memcached",
      "SSH", "ACE Workload Generator", "Chameleon Cloud", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/PMTrace",
  },
  {
    title: "DriftScope - High-Performance Data Stream Outlier Detection Engine",
    description:
      "High-performance outlier detection engine exploiting duality between data and queries to eliminate redundant computation, achieving 221x speedup and 13x memory reduction over state-of-the-art methods.",
    features: [
      "Novel duality-based algorithm groups similar queries with nearby data points, eliminating redundant distance computations.",
      "221x speedup and 13x memory reduction over SOP and pMCSKY on six benchmark datasets.",
      "Supports dynamic, continuously evolving multi-query outlier detection in real-time data streams.",
    ],
    technologies: [
      "C++17", "C++", "Streaming", "Real-time Processing", "Linux",
      "Benchmarking", "Memory Optimization", "Makefile", "clang++",
      "Performance Optimization", "VS Code", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/DriftScope",
  },
  {
    title: "InfinixCore - Distributed Computing Engine via InfiniBand and RDMA",
    description:
      "Distributed word-count engine using InfiniBand RDMA and a custom 11-bit DHT for near-linear scalability with minimal communication overhead, tested on datasets from 1MB to 1GB.",
    features: [
      "Custom 11-bit hybrid DHT partitions the key space across nodes with RDMA Read for zero-overhead remote lookups.",
      "MPI-based coordination with atomic operations ensuring concurrent consistency across all distributed processes.",
      "Near-linear scalability validated on datasets from 1MB to 1GB on InfiniBand clusters.",
    ],
    technologies: [
      "C", "MPI", "RDMA", "InfiniBand", "DHT",
      "libibverbs", "OpenMPI", "MPICH", "Parallel Computing",
      "Linux", "Makefile", "Bash", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/InfinixCore",
  },
  {
    title: "PeerGuard - Decentralized Fault Tolerance and Network Partition Detection",
    description:
      "Decentralized P2P fault detection framework achieving 99.5% accuracy and under 3% CPU overhead with no central controller dependency, tested across 2 to 8 node environments.",
    features: [
      "Fully decentralized P2P architecture with heartbeat-based failure detection and per-node real-time traffic logging.",
      "99.5% fault detection accuracy with under 3% CPU overhead across 2 to 8 node environments.",
      "Automated deployment via password-less SSH with dynamic MAC/IP config generation.",
    ],
    technologies: [
      "C++", "Shell Scripting", "SSH", "Linux",
      "Distributed Systems", "Network Monitoring",
      "Traffic Analysis", "Logging", "Makefile", "Bash", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/PeerGuard",
  },
  {
    title: "NexusMPI - Scalable Distributed Processing Engine via MPI and Docker",
    description:
      "MPI-based parallel text analytics engine benchmarking word and character frequency analysis across native Linux and Dockerized environments, from 1 to 8 concurrent processes.",
    features: [
      "Parallel word and character frequency analysis using OpenMPI across 1 to 8 distributed processes.",
      "Dockerized setup with Docker Compose for isolated, reproducible parallel execution environments.",
      "Benchmarked native Linux vs. containerized execution to quantify overhead of MPI inside Docker.",
    ],
    technologies: [
      "Python", "OpenMPI", "MPI", "Docker", "Docker Compose",
      "Ubuntu 20.04", "SSH", "Distributed Computing",
      "Containerization", "Bash", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/NexusMPI",
  },
  {
    title: "AtlasSync - AI-Powered Collaborative Travel Planning Platform",
    description:
      "Full-stack AI travel platform with real-time group voting, AI-generated itineraries, and per-person cost splitting. Built with Next.js 16, Supabase, and deployed live on Vercel.",
    features: [
      "Real-time group destination voting with live leaderboard and AI-generated day-by-day itineraries.",
      "Per-person cost breakdown across flights, hotels, activities, and food with split tracking.",
      "Next.js 16, React 19, TypeScript, Tailwind CSS v4, Supabase with Row Level Security, deployed on Vercel.",
    ],
    technologies: [
      "Next.js", "React", "TypeScript", "Tailwind CSS",
      "Supabase", "PostgreSQL", "Row Level Security",
      "Vercel", "CI/CD", "REST APIs", "JavaScript", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/AtlasSync",
  },
  {
    title: "BirthViz - Interactive Florida Medicaid Analytics Dashboard",
    description:
      "Zero-dependency interactive dashboard transforming 860,000+ Florida Medicaid birth records into D3 choropleth maps and multi-dimensional analytics. Entire app ships in a single HTML file.",
    features: [
      "Interactive D3 choropleth map across all 11 Florida Medicaid service regions with multi-dimensional age drill-down.",
      "Tracked statewide C-section rates from a 2017 peak of 22.1% down to 17.7% in 2023.",
      "Zero dependencies - no framework, no build step, no server required. Opens in any browser.",
    ],
    technologies: [
      "JavaScript", "D3.js", "Chart.js", "TopoJSON",
      "HTML5", "CSS3", "GIS", "Data Visualization",
      "Data Analysis", "Microsoft Excel", "Static Site",
    ],
    github: "https://github.com/Bharadwaj-1953/BirthViz",
  },
  {
    title: "ApexFlow - Machine Learning-Based F1 Driver Behavior Analysis",
    description:
      "ML system classifying 75 years of F1 driver history into behavioral archetypes using K-Means, DBSCAN, Hierarchical Clustering, and PCA on 26,759 race records.",
    features: [
      "Classified drivers into three archetypes: Consistent Climbers, Midfield Stabilizers, and Volatile Drivers.",
      "Random Forest with 5-fold cross-validation achieved 37.9% improvement over baseline (MAE 2.567).",
      "7 behavioral metrics validated via permutation tests (p=0.000) and chi-square analysis, validated against 2024 data.",
    ],
    technologies: [
      "Python", "Scikit-Learn", "K-Means", "DBSCAN",
      "Hierarchical Clustering", "PCA", "Random Forest",
      "Pandas", "NumPy", "Matplotlib", "Jupyter",
      "fastf1", "Statistical Analysis", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/ApexFlow",
  },
  {
    title: "MediFlow - Cloud-Native Medical Data Integration and Mining System",
    description:
      "Privacy-aware healthcare platform using Locality Sensitive Hashing for distributed medical record fusion across a 4-module role-based architecture, deployed on AWS EC2 with S3 storage.",
    features: [
      "4-module system (Admin, Doctor, Patient, IOH) with LSH for privacy-preserving multi-source record fusion.",
      "Deployed on AWS EC2 with S3-backed storage, MySQL persistence, and role-based access control.",
      "Flask and Python backend with authentication, session management, and automated shell-script environment setup.",
    ],
    technologies: [
      "Python", "Flask", "AWS EC2", "AWS S3", "MySQL",
      "LSH", "HTML5", "CSS", "Bootstrap", "JavaScript",
      "Pandas", "NumPy", "SMTP", "Ubuntu", "Shell Scripting", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/MediFlow",
  },
  {
    title: "FarmOracle - Precision Crop Recommendation Engine",
    description:
      "Crop recommendation engine benchmarking five ML classifiers on 2,200 agricultural records, with Random Forest achieving 99.24% accuracy across 22 crop categories and Flask deployment.",
    features: [
      "Benchmarked SVM, KNN, Logistic Regression, Decision Tree, and Random Forest on soil and climate features.",
      "Random Forest achieved 99.24% accuracy across 22 crop categories with MinMaxScaler normalization.",
      "Flask-based deployment with label encoding and serialized model for real-world precision agriculture use.",
    ],
    technologies: [
      "Python", "Flask", "Scikit-Learn", "PyTorch",
      "Random Forest", "SVM", "KNN", "Logistic Regression",
      "Pandas", "NumPy", "Matplotlib", "MinMaxScaler",
      "Jupyter", "VS Code", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/FarmOracle",
  },
  {
    title: "MoodLens - Multimodal Emotion Recognition via Facial Expression and Speech",
    description:
      "Dual-pipeline CNN system classifying emotions from facial images and audio simultaneously, achieving over 95% accuracy on both modalities with a real-time Tkinter GUI.",
    features: [
      "Dual CNN pipelines independently classify facial expressions and speech emotion with over 95% accuracy each.",
      "Classifies 7 emotions using TensorFlow, Keras, and OpenCV with Librosa for MFCC audio feature extraction.",
      "Real-time predictions via Tkinter GUI with simple upload-and-predict interface.",
    ],
    technologies: [
      "Python", "TensorFlow", "Keras", "OpenCV",
      "CNN", "Librosa", "Tkinter", "NumPy",
      "Pandas", "Anaconda", "Jupyter", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/MoodLens",
  },
  {
    title: "OncoCast - Machine Learning-Based Tumor Classification System",
    description:
      "Breast cancer classification system benchmarking four ML models and a custom ANN on the WDBC dataset, achieving 98% accuracy while minimizing false negatives for diagnostic reliability.",
    features: [
      "ANN built with TensorFlow and Keras achieves 98% accuracy on 569 WDBC samples with 30 numerical features.",
      "Benchmarked SVM, Random Forest, and KNN against the custom neural network on Precision, Recall, F1, and ROC-AUC.",
      "Engineered to minimize false negatives, prioritizing diagnostic reliability for life-critical cancer detection.",
    ],
    technologies: [
      "Python", "TensorFlow", "Keras", "Scikit-Learn",
      "ANN", "SVM", "KNN", "Random Forest",
      "Pandas", "NumPy", "Matplotlib", "Seaborn",
      "Jupyter", "VS Code", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/OncoCast",
  },
  {
    title: "StreamHive - Cloud-Native OTT Streaming Platform",
    description:
      "Production-grade OTT streaming platform replicating core commercial streaming functionality with full authentication, profile management, and responsive multimedia UI. Deployed live on AWS EC2 with S3 media storage.",
    features: [
      "Full authentication system with secure login, registration, and session state management.",
      "Rich multimedia interface with categorized content, trending titles, and dynamic previews.",
      "Deployed live on AWS EC2 with S3 storage, Apache server, and SSL-secured access.",
    ],
    technologies: [
      "PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap",
      "AWS EC2", "AWS S3", "Apache", "IAM", "Ubuntu",
      "Session Management", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/StreamHive",
  },
];

export default projects;
