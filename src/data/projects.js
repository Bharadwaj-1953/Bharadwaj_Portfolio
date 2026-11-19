const projects = [
  {
    title: "EoMT - Panoptic Image Segmentation and Ablation Analysis",
    description:
      "Reproduced a panoptic segmentation benchmark with pretrained EoMT and DINOv2, then measured how query design and attention affected quality.",
    features: [
      "Matched the official benchmark with 46.74 panoptic quality (PQ) on all 5,000 COCO 2017 validation images.",
      "On a 500-image ablation set, 100 object queries reduced PQ by 7.29 points and two query-processing blocks reduced it by 18.94 points.",
      "Full attention masking scored 45.68 PQ versus 46.74 on the full validation set. Docker configurations and automated tests support reproduction.",
    ],
    technologies: [
      "Python", "PyTorch", "Computer Vision", "Deep Learning",
      "Vision Transformers (ViT)", "DINOv2", "Image Segmentation", "Docker",
    ],
    github: "https://github.com/Bharadwaj-1953/EoMT-Panoptic-Segmentation",
  },
  {
    title: "PMTrace - Persistent Memory File System Bug Detection Framework",
    description:
      "Built a crash-testing framework for persistent-memory file systems, based on research published at USENIX FAST ’25.",
    features: [
      "Generated crash plans and reproduced six real-world bugs in NOVA, PMFS, and WineFS using isolated QEMU/KVM virtual machines.",
      "Compared Silhouette, 2CP, and Invariants+Comb while tracking in-flight stores and duplicate fences.",
      "Evaluated ACE-seq2 and ACE-seq3 workloads with up to 20 concurrent VMs.",
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
      "Built a C++17 engine that detects outliers in live streams by eliminating repeated distance calculations across similar queries.",
    features: [
      "Benchmarks across six datasets showed a 221× speedup and 13× lower memory use compared with SOP and pMCSKY.",
      "Grouped nearby data points with similar queries and prioritized groups for incremental updates.",
      "Tested on datasets ranging from one-dimensional stock data to 55-dimensional forest-cover data.",
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
      "Built an InfiniBand-based distributed word-count engine using a custom hash table and direct remote memory access.",
    features: [
      "Partitioned keys across nodes with an 11-bit hybrid hash and used one-sided RDMA Read and Write for lookups and updates.",
      "Coordinated concurrent updates with MPI and atomic operations.",
      "Observed near-linear scaling on datasets from 1 MB to 1 GB.",
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
      "Built a peer-to-peer monitor that detects node failures and network partitions without a central controller.",
    features: [
      "Combined configurable heartbeat thresholds with local traffic monitoring and per-node logging.",
      "Measured 99.5% detection accuracy and under 3% CPU overhead in tests across 2–8 nodes with induced partitions.",
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
      "Benchmarked parallel text analytics on native Linux and in Docker to measure the effect of containerization on MPI workloads.",
    features: [
      "Measured word and character frequency workloads at 1, 2, 4, 6, and 8 MPI processes in both environments.",
      "Made the deployment reproducible with Docker Compose, dynamic host mapping, and automated SSH configuration.",
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
      "Built a collaborative trip planner where groups vote on destinations, generate itineraries, and split expenses.",
    features: [
      "Updated destination votes and leaderboards in real time and generated day-by-day itineraries for the winning destination.",
      "Split flight, hotel, activity, and food costs by traveler.",
      "Used Supabase Auth and row-level security for access control, with automated Vercel deployments.",
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
      "Turned over 860,000 Florida Medicaid birth records into an interactive dashboard for exploring C-section trends.",
    features: [
      "Tracked statewide C-section rates from 22.1% in 2017 to 17.7% in 2023.",
      "Mapped 11 service regions with D3 and TopoJSON, revealing a persistent gap of more than 10 percentage points and allowing breakdowns by age.",
      "Integrated five Excel worksheets and a region-to-county crosswalk covering all 67 counties.",
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
      "Analyzed 75 years of Formula 1 results to identify driver behavior patterns across 26,759 race records.",
    features: [
      "Compared K-means, DBSCAN, and hierarchical clustering after PCA and identified three driver archetypes.",
      "Random Forest reduced error by 37.9% versus baseline with five-fold cross-validation (MAE 2.567).",
      "Validated seven behavioral metrics and tested the analysis against 2024 race data.",
    ],
    technologies: [
      "Python", "scikit-learn", "K-Means", "DBSCAN",
      "Hierarchical Clustering", "PCA", "Random Forest",
      "pandas", "NumPy", "Matplotlib", "Jupyter",
      "fastf1", "Statistical Analysis", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/ApexFlow",
  },
  {
    title: "MediFlow - Cloud-Native Medical Data Integration and Mining System",
    description:
      "Built an AWS-hosted healthcare prototype that links records across sources using locality-sensitive hashing.",
    features: [
      "Organized the application into admin, doctor, patient, and IOH modules with role-based access.",
      "Ran the Flask backend on EC2 with S3 and MySQL, and scripted the environment setup.",
    ],
    technologies: [
      "Python", "Flask", "AWS EC2", "AWS S3", "MySQL",
      "LSH", "HTML5", "CSS", "Bootstrap", "JavaScript",
      "pandas", "NumPy", "SMTP", "Ubuntu", "Shell Scripting", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/MediFlow",
  },
  {
    title: "FarmOracle - Precision Crop Recommendation Engine",
    description:
      "Built a crop recommendation model using soil and environmental measurements from 2,200 records.",
    features: [
      "Benchmarked five classifiers across 22 crop categories. Random Forest reached 99.24% classification accuracy.",
      "Normalized seven inputs, serialized the trained model, and served predictions with Flask.",
    ],
    technologies: [
      "Python", "Flask", "scikit-learn", "PyTorch",
      "Random Forest", "SVM", "KNN", "Logistic Regression",
      "pandas", "NumPy", "Matplotlib", "MinMaxScaler",
      "Jupyter", "VS Code", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/FarmOracle",
  },
  {
    title: "MoodLens - Multimodal Emotion Recognition via Facial Expression and Speech",
    description:
      "Built independent CNNs to classify emotion from facial images and audio, with a local Tkinter interface.",
    features: [
      "Both models exceeded 95% training accuracy across seven emotion classes.",
      "Used OpenCV for images and Librosa for audio feature extraction, then integrated both models into the desktop interface.",
    ],
    technologies: [
      "Python", "TensorFlow", "Keras", "OpenCV",
      "CNN", "Librosa", "Tkinter", "NumPy",
      "pandas", "Anaconda", "Jupyter", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/MoodLens",
  },
  {
    title: "OncoCast - Machine Learning-Based Tumor Classification System",
    description:
      "Compared a custom neural network with classical models on the Wisconsin Diagnostic Breast Cancer dataset.",
    features: [
      "The neural network achieved 98% accuracy on a dataset of 569 samples with 30 features.",
      "Compared SVM, Random Forest, and KNN using precision, recall, F1, and ROC-AUC, emphasizing false negatives.",
    ],
    technologies: [
      "Python", "TensorFlow", "Keras", "scikit-learn",
      "ANN", "SVM", "KNN", "Random Forest",
      "pandas", "NumPy", "Matplotlib", "Seaborn",
      "Jupyter", "VS Code", "Git",
    ],
    github: "https://github.com/Bharadwaj-1953/OncoCast",
  },
  {
    title: "StreamHive - Cloud-Native OTT Streaming Platform",
    description:
      "Built a responsive streaming application with account management, profiles, and a browsable media catalog.",
    features: [
      "Implemented session-based authentication, image uploads, and server-side profile validation in PHP.",
      "Hosted the application on AWS EC2 with S3 media storage and SSL.",
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
