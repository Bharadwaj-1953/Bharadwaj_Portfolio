const projects = [
  {
    "title": "AWS - Powered Medical Data Integration and Mining for Improved Healthcare",
    "description": "Cloud-based healthcare system integrating medical records from multiple sources using LSH and AWS for privacy-preserving diagnostics.",
    "features": [
      "Designed a 4-module architecture for secure data access and control.",
      "Implemented Locality Sensitive Hashing for privacy-aware medical data querying.",
      "Enabled scalable storage with AWS S3 and deployed backend using AWS EC2.",
      "Automated MySQL DB and Flask environment setup using shell scripts."
    ],
    "technologies": [
      "Python",
      "Flask",
      "AWS EC2",
      "AWS S3",
      "MySQL",
      "PostgreSQL",
      "JavaScript",
      "Bootstrap",
      "Cloud Computing",
      "NumPy",
      "Pandas",
      "SMTP",
      "Ubuntu",
      "SQL"
    ],
    "github": "https://github.com/Bharadwaj-1953/AWS-MedData"
  },
  {
    "title": "AgriPredictor \u2013 Crop Recommendation System",
    "description": "ML-based crop recommender using soil and climate data with Random Forest and other supervised models for sustainable agriculture.",
    "features": [
      "Compared SVM, KNN, Logistic Regression, and Decision Tree for accurate prediction.",
      "Achieved 99.24% accuracy with Random Forest on structured crop dataset.",
      "Designed real-world agricultural planning support using soil and climate features.",
      "Deployed with Flask backend and interactive UI for ease of use."
    ],
    "technologies": [
      "Python",
      "Flask",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "SVM",
      "KNN",
      "Matplotlib",
      "XGBoost",
      "PyTorch",
      "Jupyter",
      "VS Code",
      "Data Mining",
      "Git",
      "Ubuntu"
    ],
    "github": "https://github.com/Bharadwaj-1953/AgriPredictor"
  },
  {
    "title": "CloudWatch \u2013 Web-Based OTT Platform",
    "description": "Custom-built PHP-based streaming platform replicating OTT services with secure media hosting and responsive UI.",
    "features": [
      "Implemented login, registration, session handling, and password reset with validations.",
      "Integrated multimedia content previews, trending section, and category-based filtering.",
      "Developed responsive UI with modular HTML/CSS/Bootstrap for all screen sizes.",
      "Hosted on AWS EC2 with S3 media storage and IAM for secure access."
    ],
    "technologies": [
      "PHP",
      "AWS EC2",
      "AWS S3",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "IAM",
      "Apache",
      "GitHub",
      "Ubuntu"
    ],
    "github": "https://github.com/Bharadwaj-1953/CloudWatch"
  },
  {
    "title": "EmiliFy \u2013 Multimodal Emotion Recognition System",
    "description": "Real-time emotion recognition tool combining CNN models for facial expressions and voice to improve affective computing.",
    "features": [
      "Trained separate CNN models for image (face) and audio-based emotion detection.",
      "Fused predictions in a local GUI to classify emotions in real-time.",
      "Used OpenCV for preprocessing images and extracting MFCC audio features.",
      "Applicable to human-computer interaction and mental health tools."
    ],
    "technologies": [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Jupyter",
      "Anaconda",
      "VS Code",
      "Git",
      "Ubuntu"
    ],
    "github": "https://github.com/Bharadwaj-1953/EmiliFy"
  },
    {
    "title": "NIFTY \u2013 Fault Tolerance in Distributed Systems",
    "description": "Peer-to-peer fault monitoring framework eliminating central dependencies using heartbeats, traffic metrics, and SSH automation.",
    "features": [
      "Distributed failure detection using lightweight heartbeat messages.",
      "Peer nodes autonomously log, detect, and report bottlenecks in real-time.",
      "Supports dynamic deployment via password-less SSH and secure configs.",
      "Validated on multi-node setups achieving 99.5% detection accuracy with <3% CPU."
    ],
    "technologies": [
      "C++",
      "Linux",
      "Shell Scripting",
      "SSH",
      "Distributed Systems",
      "Traffic Analysis",
      "Makefile",
      "Logging",
      "Bash",
      "Git",
      "VS Code"
    ],
    "github": "https://github.com/Bharadwaj-1953/NIFTY"
  },
  {
    "title": "MDUAL \u2013 Real-Time Outlier Detection from Streaming Data",
    "description": "Outlier detection system for streaming data using grouped query processing and duality-based optimizations in C++17.",
    "features": [
      "Introduced duality between data and queries for reduced computations.",
      "Grouped spatially close queries and updated them incrementally in real time.",
      "Built memory-efficient, modular C++17 code with benchmarking framework.",
      "Achieved 221\u00d7 speedup and 13\u00d7 memory savings over prior methods on real datasets."
    ],
    "technologies": [
      "C++",
      "Streaming",
      "Real-time Data",
      "Query Merging",
      "Linux",
      "Benchmarking",
      "Memory Optimization",
      "Makefile",
      "VS Code"
    ],
    "github": "https://github.com/Bharadwaj-1953/MDUAL"
  },
  {
    "title": "MalBen \u2013 Breast Cancer Classification",
    "description": "Cancer diagnosis system trained on WDBC dataset using classical ML models and custom ANN for high-accuracy prediction.",
    "features": [
      "Implemented SVM, Random Forest, KNN, and ANN models for tumor classification.",
      "Achieved 98% accuracy with ANN; evaluated using F1-Score, ROC-AUC, Precision.",
      "Performed detailed preprocessing, normalization, and visual EDA.",
      "Minimized false negatives to support early detection in medical settings."
    ],
    "technologies": [
      "Python",
      "TensorFlow",
      "Keras",
      "ANN",
      "SVM",
      "KNN",
      "Random Forest",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib",
      "Jupyter",
      "Git",
      "VS Code"
    ],
    "github": "https://github.com/Bharadwaj-1953/MalBen-BCC"
  },
    {
    "title": "InfiniBand \u2013 High Performance Word Count using RDMA",
    "description": "RDMA-enabled distributed system using MPI and DHT for fast, low-latency word counting across memory-mapped clusters.",
    "features": [
      "Designed a custom DHT with hybrid 11-bit hash function for balanced key distribution.",
      "Used RDMA Read/Write operations for direct memory access across nodes.",
      "Implemented MPI-based coordination and atomic updates with minimal sync.",
      "Demonstrated linear scalability with up to 1GB files across RDMA cluster nodes."
    ],
    "technologies": [
      "C",
      "MPI",
      "RDMA",
      "Infiniband",
      "DHT",
      "Makefile",
      "Performance Optimization",
      "Parallel Computing",
      "Linux",
      "Git",
      "Bash"
    ],
    "github": "https://github.com/Bharadwaj-1953/InfiniBand"
  }
];

export default projects;