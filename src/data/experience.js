const experience = [
  {
    title: "Systems Research Engineer",
    companyName: "Florida State University",
    location: "Tallahassee, FL",
    date: "Aug 2025 - Present",
    points: [
      "Developed NIFTY, a decentralized fault-tolerance framework achieving 99.5% detection accuracy with less than 3% CPU overhead, supporting 2–8 node clusters using peer-to-peer heartbeat monitoring.",
      "Engineered MDUAL, a high-performance outlier detection algorithm delivering 221× speedup and 13× memory reduction across 6 real-world datasets with sub-millisecond latency.",
      "Managed infrastructure supporting 300+ students with 67% overhead reduction on Proxmox cluster with 8+ nodes, utilizing GDB, perf, and valgrind for advanced debugging.",
      "Mentored 8+ developers in systems programming fundamentals including C++17, concurrency patterns, performance profiling, and distributed debugging techniques."
    ]
  },
  {
    title: "Systems Engineer",
    companyName: "Sri Bharamara Pvt Ltd",
    location: "Guntur, India",
    date: "Jun 2022 – May 2024",
    points: [
      "Designed and implemented a distributed hash table supporting 4–8 node clusters with near-linear scalability and less than 2% communication overhead using an 11-bit hybrid hash function.",
      "Optimized RDMA communication over InfiniBand fabric, reducing latency by 73% through one-sided memory access patterns and elimination of synchronization bottlenecks.",
      "Built resilience mechanisms with less than 150ms failure detection, decentralized log aggregation, Byzantine failure testing, and network partition resilience.",
      "Conducted comprehensive performance analysis using perf and valgrind profilers, achieving 15–23% efficiency gains through cache-conscious design and multi-hardware benchmarking."
    ]
  }
];

export default experience;
