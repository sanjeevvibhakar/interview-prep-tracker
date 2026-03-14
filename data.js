// ============================================================
// DATA.JS — All static content for the Interview Prep Tracker
// ============================================================

const MOTIVATIONS = [
  "The pain of rejection is temporary. The joy of success is permanent. Keep going, Sanjeev! 🚀",
  "Infosys, IBM, Accenture — they missed out. Your next company will be lucky to have you. 💪",
  "Every line of code you write today is a step closer to your offer letter. 🎯",
  "DSA isn't about memorizing — it's about building a problem-solving muscle. Trust the process.",
  "React clicked for thousands of people who felt exactly like you. Today is your day.",
  "Failure is the foundation. Every great engineer has rejection stories. Now go build yours.",
  "1.5 months is MORE than enough if you show up every single day. Let's go! 🔥",
  "You didn't fail. You learned what to fix. That's literally what engineers do.",
  "Consistency beats intensity. 2 hours daily > 14 hours on weekends. Stay consistent.",
  "Your comeback story starts TODAY. Make it a good one. 💎",
];

// ───────────────────────────────────────────────
// 45-DAY ROADMAP  (6 phases)
// ───────────────────────────────────────────────
const ROADMAP = [
  {
    id: "p1",
    icon: "🧱",
    title: "Phase 1 — Foundations (Days 1–7)",
    subtitle: "Revive basics: Arrays, Strings, Big-O, Java/Python OOP basics",
    color: "#6c63ff",
    days: [
      { day: 1,  topic: "Big-O & Complexity", subs: "Time & Space complexity, Best/Worst/Avg case, common patterns" },
      { day: 2,  topic: "Arrays — Part 1", subs: "Traversal, insertion, deletion, two-pointer, sliding window" },
      { day: 3,  topic: "Arrays — Part 2", subs: "Kadane's algo, prefix sum, Dutch national flag, buy-sell stock" },
      { day: 4,  topic: "Strings", subs: "Palindrome, anagram, substring, string manipulation, StringBuilder" },
      { day: 5,  topic: "Hashing / Maps", subs: "HashMap, HashSet, frequency count, two-sum pattern" },
      { day: 6,  topic: "OOP Basics", subs: "Classes, Objects, Constructors, this keyword, access modifiers" },
      { day: 7,  topic: "Revision + Practice", subs: "Solve 10 easy problems from Day 1-6 topics on LeetCode" },
    ]
  },
  {
    id: "p2",
    icon: "🔗",
    title: "Phase 2 — Core DSA (Days 8–20)",
    subtitle: "Linked Lists, Stacks, Queues, Recursion, Sorting",
    color: "#00d4aa",
    days: [
      { day: 8,  topic: "Linked List — Basics", subs: "Singly LL, insertion, deletion, reversal, middle node" },
      { day: 9,  topic: "Linked List — Medium", subs: "Detect cycle (Floyd's), merge two sorted, remove Nth node" },
      { day: 10, topic: "Stacks", subs: "Stack using array, Valid parentheses, next greater element, min stack" },
      { day: 11, topic: "Queues", subs: "Queue impl, circular queue, BFS using queue, sliding window max" },
      { day: 12, topic: "Recursion — Part 1", subs: "Fibonacci, factorial, sum of digits, power, reverse string" },
      { day: 13, topic: "Recursion — Part 2", subs: "Subsets, permutations, N-Queens intro, backtracking basics" },
      { day: 14, topic: "Sorting Algorithms", subs: "Bubble, Selection, Insertion, Merge Sort, Quick Sort — code all" },
      { day: 15, topic: "Binary Search", subs: "Classic BS, find first/last occurrence, search rotated array" },
      { day: 16, topic: "Binary Search Advanced", subs: "BS on answer (min/max problems), book allocation, painter partition" },
      { day: 17, topic: "OOP — Pillars Deep Dive", subs: "Encapsulation, Abstraction with real examples & code" },
      { day: 18, topic: "OOP — Inheritance & Polymorphism", subs: "Method overriding, overloading, virtual functions, interfaces" },
      { day: 19, topic: "OOP — Exception Handling + Design", subs: "Try-catch-finally, custom exceptions, SOLID principles intro" },
      { day: 20, topic: "Phase 2 Revision", subs: "Mock test: 5 medium problems, review all OOP notes" },
    ]
  },
  {
    id: "p3",
    icon: "🌳",
    title: "Phase 3 — Trees & Graphs (Days 21–30)",
    subtitle: "BST, Heaps, DFS/BFS, Dynamic Programming",
    color: "#ff9f43",
    days: [
      { day: 21, topic: "Binary Trees — Traversals", subs: "Inorder, Preorder, Postorder — recursive & iterative" },
      { day: 22, topic: "Binary Trees — Problems", subs: "Height, diameter, mirror, LCA, path sum, zigzag" },
      { day: 23, topic: "BST", subs: "Insert, delete, search, validate BST, kth smallest/largest" },
      { day: 24, topic: "Heaps", subs: "Min/Max heap, heapify, K largest elements, merge K sorted lists" },
      { day: 25, topic: "Graph — Basics", subs: "Adjacency list/matrix, BFS, DFS, connected components" },
      { day: 26, topic: "Graph — Medium", subs: "Topological sort, cycle detection, shortest path (Dijkstra intro)" },
      { day: 27, topic: "DP — Introduction", subs: "Memoization vs tabulation, Fibonacci DP, climbing stairs" },
      { day: 28, topic: "DP — Classic Problems", subs: "0/1 Knapsack, coin change, longest common subsequence" },
      { day: 29, topic: "DP — Strings & Arrays", subs: "Edit distance, LIS, palindrome partition, matrix chain" },
      { day: 30, topic: "Phase 3 Revision", subs: "Mock test: trees + DP problems, note all tricky edge cases" },
    ]
  },
  {
    id: "p4",
    icon: "⚛️",
    title: "Phase 4 — React & JavaScript (Days 31–38)",
    subtitle: "Core React concepts most frequently asked in service-based interviews",
    color: "#61dafb",
    days: [
      { day: 31, topic: "JavaScript Fundamentals", subs: "var/let/const, hoisting, closures, scope, event loop" },
      { day: 32, topic: "JS — Advanced", subs: "Promises, async/await, callbacks, this keyword, arrow functions" },
      { day: 33, topic: "React — Getting Started", subs: "JSX, components, props, state basics, ReactDOM" },
      { day: 34, topic: "React Hooks — Part 1", subs: "useState, useEffect, dependency array, cleanup" },
      { day: 35, topic: "React Hooks — Part 2", subs: "useContext, useRef, useMemo, useCallback — with examples" },
      { day: 36, topic: "React — Advanced Topics", subs: "React Router, lifting state up, controlled components, forms" },
      { day: 37, topic: "React — Performance", subs: "Virtual DOM, reconciliation, keys, lazy loading, memo" },
      { day: 38, topic: "Build a Mini React Project", subs: "Todo app or Weather app — solidify everything learned" },
    ]
  },
  {
    id: "p5",
    icon: "🏗️",
    title: "Phase 5 — System Design + CS Fundamentals (Days 39–43)",
    subtitle: "OS, DBMS, Networking basics — asked in every service-based interview",
    color: "#ff6b9d",
    days: [
      { day: 39, topic: "DBMS Basics", subs: "ACID, normalization, joins, indexing, transactions, SQL queries" },
      { day: 40, topic: "OS Concepts", subs: "Processes vs threads, scheduling, deadlock, memory management, paging" },
      { day: 41, topic: "Computer Networks", subs: "OSI model, TCP/IP, HTTP/HTTPS, DNS, REST vs SOAP" },
      { day: 42, topic: "System Design Intro", subs: "Scalability, load balancing, caching, CDN — high level" },
      { day: 43, topic: "Design Patterns + Git", subs: "Singleton, Factory, Observer patterns; Git workflow basics" },
    ]
  },
  {
    id: "p6",
    icon: "🎤",
    title: "Phase 6 — Final Prep & Mock Interviews (Days 44–45)",
    subtitle: "Full mock rounds, HR prep, resume polish",
    color: "#22c55e",
    days: [
      { day: 44, topic: "Full Mock Interview — Technical", subs: "Timed: 2 DSA (medium), 5 OOP questions, 3 React questions" },
      { day: 45, topic: "HR Round + Final Revision", subs: "Tell me about yourself, strengths/weaknesses, projects, resume review" },
    ]
  }
];

// ───────────────────────────────────────────────
// DSA TOPICS
// ───────────────────────────────────────────────
const DSA_TOPICS = [
  {
    group: "Arrays & Strings",
    icon: "📊",
    items: [
      { id: "dsa1",  name: "Two Pointer Technique", diff: "easy",   link: "https://leetcode.com/tag/two-pointers/" },
      { id: "dsa2",  name: "Sliding Window", diff: "medium", link: "https://leetcode.com/tag/sliding-window/" },
      { id: "dsa3",  name: "Prefix Sum", diff: "easy",   link: "https://leetcode.com/tag/prefix-sum/" },
      { id: "dsa4",  name: "Kadane's Algorithm (Max Subarray)", diff: "medium", link: "https://leetcode.com/problems/maximum-subarray/" },
      { id: "dsa5",  name: "Dutch National Flag", diff: "medium", link: "https://leetcode.com/problems/sort-colors/" },
      { id: "dsa6",  name: "Anagram / Palindrome checks", diff: "easy",   link: "https://leetcode.com/problems/valid-anagram/" },
    ]
  },
  {
    group: "Hashing & Maps",
    icon: "#️⃣",
    items: [
      { id: "dsa7",  name: "Two Sum / Four Sum", diff: "easy",   link: "https://leetcode.com/problems/two-sum/" },
      { id: "dsa8",  name: "Longest Subarray with Sum K", diff: "medium", link: "https://www.geeksforgeeks.org/longest-sub-array-sum-k/" },
      { id: "dsa9",  name: "Count subarrays with XOR = k", diff: "hard",   link: "https://www.geeksforgeeks.org/count-number-subarrays-given-xor/" },
    ]
  },
  {
    group: "Linked List",
    icon: "🔗",
    items: [
      { id: "dsa10", name: "Reverse Linked List", diff: "easy",   link: "https://leetcode.com/problems/reverse-linked-list/" },
      { id: "dsa11", name: "Detect Cycle (Floyd's)", diff: "medium", link: "https://leetcode.com/problems/linked-list-cycle/" },
      { id: "dsa12", name: "Merge Two Sorted Lists", diff: "easy",   link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { id: "dsa13", name: "Find Middle of Linked List", diff: "easy",   link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
      { id: "dsa14", name: "Remove Nth Node from End", diff: "medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
    ]
  },
  {
    group: "Stack & Queue",
    icon: "📚",
    items: [
      { id: "dsa15", name: "Valid Parentheses", diff: "easy",   link: "https://leetcode.com/problems/valid-parentheses/" },
      { id: "dsa16", name: "Next Greater Element", diff: "medium", link: "https://leetcode.com/problems/next-greater-element-i/" },
      { id: "dsa17", name: "Min Stack", diff: "medium", link: "https://leetcode.com/problems/min-stack/" },
      { id: "dsa18", name: "Sliding Window Maximum", diff: "hard",   link: "https://leetcode.com/problems/sliding-window-maximum/" },
    ]
  },
  {
    group: "Recursion & Backtracking",
    icon: "🔄",
    items: [
      { id: "dsa19", name: "Subsets / Power Set", diff: "medium", link: "https://leetcode.com/problems/subsets/" },
      { id: "dsa20", name: "Permutations", diff: "medium", link: "https://leetcode.com/problems/permutations/" },
      { id: "dsa21", name: "Combination Sum", diff: "medium", link: "https://leetcode.com/problems/combination-sum/" },
    ]
  },
  {
    group: "Binary Search",
    icon: "🔍",
    items: [
      { id: "dsa22", name: "Classic Binary Search", diff: "easy",   link: "https://leetcode.com/problems/binary-search/" },
      { id: "dsa23", name: "Search in Rotated Array", diff: "medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
      { id: "dsa24", name: "Find First & Last Position", diff: "medium", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
      { id: "dsa25", name: "BS on Answer (Book Allocation)", diff: "hard",   link: "https://www.geeksforgeeks.org/allocate-minimum-number-pages/" },
    ]
  },
  {
    group: "Trees",
    icon: "🌲",
    items: [
      { id: "dsa26", name: "Tree Traversals (In/Pre/Post)", diff: "easy",   link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
      { id: "dsa27", name: "Maximum Depth of Binary Tree", diff: "easy",   link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { id: "dsa28", name: "Lowest Common Ancestor", diff: "medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { id: "dsa29", name: "Validate BST", diff: "medium", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
    ]
  },
  {
    group: "Dynamic Programming",
    icon: "🧮",
    items: [
      { id: "dsa30", name: "Climbing Stairs / Fibonacci", diff: "easy",   link: "https://leetcode.com/problems/climbing-stairs/" },
      { id: "dsa31", name: "0/1 Knapsack", diff: "medium", link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" },
      { id: "dsa32", name: "Longest Common Subsequence", diff: "medium", link: "https://leetcode.com/problems/longest-common-subsequence/" },
      { id: "dsa33", name: "Coin Change", diff: "medium", link: "https://leetcode.com/problems/coin-change/" },
      { id: "dsa34", name: "Longest Increasing Subsequence", diff: "medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
    ]
  }
];

// ───────────────────────────────────────────────
// REACT & JS TOPICS
// ───────────────────────────────────────────────
const REACT_TOPICS = [
  {
    group: "JavaScript Core",
    icon: "💛",
    items: [
      { id: "r1",  name: "var vs let vs const & Hoisting", diff: "easy",   link: "https://javascript.info/var" },
      { id: "r2",  name: "Closures", diff: "medium", link: "https://javascript.info/closure" },
      { id: "r3",  name: "Promises & async/await", diff: "medium", link: "https://javascript.info/async-await" },
      { id: "r4",  name: "Event Loop & Call Stack", diff: "medium", link: "https://www.youtube.com/watch?v=8aGhZQkoFbQ" },
      { id: "r5",  name: "this keyword & Arrow Functions", diff: "medium", link: "https://javascript.info/arrow-functions" },
      { id: "r6",  name: "Prototype & Prototype Chain", diff: "hard",   link: "https://javascript.info/prototype-inheritance" },
      { id: "r7",  name: "Array methods: map, filter, reduce", diff: "easy",   link: "https://javascript.info/array-methods" },
      { id: "r8",  name: "Destructuring & Spread/Rest", diff: "easy",   link: "https://javascript.info/destructuring-assignment" },
    ]
  },
  {
    group: "React Fundamentals",
    icon: "⚛️",
    items: [
      { id: "r9",  name: "JSX & Components (Class vs Functional)", diff: "easy",   link: "https://react.dev/learn" },
      { id: "r10", name: "Props & State", diff: "easy",   link: "https://react.dev/learn/passing-props-to-a-component" },
      { id: "r11", name: "Component Lifecycle", diff: "medium", link: "https://react.dev/learn/lifecycle-of-reactive-effects" },
      { id: "r12", name: "Controlled vs Uncontrolled Components", diff: "medium", link: "https://react.dev/learn/sharing-state-between-components" },
      { id: "r13", name: "Conditional Rendering & Lists", diff: "easy",   link: "https://react.dev/learn/conditional-rendering" },
      { id: "r14", name: "Event Handling in React", diff: "easy",   link: "https://react.dev/learn/responding-to-events" },
    ]
  },
  {
    group: "React Hooks (Most Asked!)",
    icon: "🪝",
    items: [
      { id: "r15", name: "useState — complete understanding", diff: "easy",   link: "https://react.dev/reference/react/useState" },
      { id: "r16", name: "useEffect — dependency array, cleanup", diff: "medium", link: "https://react.dev/reference/react/useEffect" },
      { id: "r17", name: "useContext — avoid prop drilling", diff: "medium", link: "https://react.dev/reference/react/useContext" },
      { id: "r18", name: "useRef — DOM access, mutable ref", diff: "medium", link: "https://react.dev/reference/react/useRef" },
      { id: "r19", name: "useMemo & useCallback — performance", diff: "hard",   link: "https://react.dev/reference/react/useMemo" },
      { id: "r20", name: "Custom Hooks", diff: "hard",   link: "https://react.dev/learn/reusing-logic-with-custom-hooks" },
    ]
  },
  {
    group: "React Advanced",
    icon: "🚀",
    items: [
      { id: "r21", name: "React Router v6", diff: "medium", link: "https://reactrouter.com/en/main/start/tutorial" },
      { id: "r22", name: "Virtual DOM & Reconciliation", diff: "medium", link: "https://react.dev/learn/preserving-and-resetting-state" },
      { id: "r23", name: "React.memo & performance optimization", diff: "hard",   link: "https://react.dev/reference/react/memo" },
      { id: "r24", name: "Error Boundaries", diff: "medium", link: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary" },
    ]
  }
];

// ───────────────────────────────────────────────
// OOP TOPICS
// ───────────────────────────────────────────────
const OOP_TOPICS = [
  {
    group: "4 Pillars of OOP",
    icon: "🏛️",
    items: [
      { id: "o1", name: "Encapsulation — getters & setters, data hiding", diff: "easy",   link: "https://www.geeksforgeeks.org/encapsulation-in-java/" },
      { id: "o2", name: "Abstraction — abstract classes & interfaces", diff: "medium", link: "https://www.geeksforgeeks.org/abstraction-in-java-2/" },
      { id: "o3", name: "Inheritance — types, super keyword", diff: "easy",   link: "https://www.geeksforgeeks.org/inheritance-in-java/" },
      { id: "o4", name: "Polymorphism — overloading vs overriding", diff: "medium", link: "https://www.geeksforgeeks.org/polymorphism-in-java/" },
    ]
  },
  {
    group: "Advanced OOP",
    icon: "🔬",
    items: [
      { id: "o5", name: "Abstract Class vs Interface — key differences", diff: "medium", link: "https://www.geeksforgeeks.org/difference-between-abstract-class-and-interface-in-java/" },
      { id: "o6", name: "Constructor — types, constructor chaining", diff: "easy",   link: "https://www.geeksforgeeks.org/constructors-in-java/" },
      { id: "o7", name: "Static keyword — methods, variables, blocks", diff: "medium", link: "https://www.geeksforgeeks.org/static-keyword-java/" },
      { id: "o8", name: "Final keyword — class, method, variable", diff: "easy",   link: "https://www.geeksforgeeks.org/final-keyword-in-java/" },
      { id: "o9", name: "Exception Handling — try/catch/finally/throw", diff: "medium", link: "https://www.geeksforgeeks.org/exceptions-in-java/" },
    ]
  },
  {
    group: "Design Patterns",
    icon: "🧩",
    items: [
      { id: "o10", name: "Singleton Pattern", diff: "medium", link: "https://refactoring.guru/design-patterns/singleton" },
      { id: "o11", name: "Factory Pattern", diff: "medium", link: "https://refactoring.guru/design-patterns/factory-method" },
      { id: "o12", name: "Observer Pattern", diff: "hard",   link: "https://refactoring.guru/design-patterns/observer" },
    ]
  },
  {
    group: "SOLID Principles",
    icon: "🏗️",
    items: [
      { id: "o13", name: "Single Responsibility Principle", diff: "medium", link: "https://www.geeksforgeeks.org/single-responsibility-in-solid-design-principle/" },
      { id: "o14", name: "Open/Closed Principle", diff: "medium", link: "https://www.geeksforgeeks.org/open-closed-principle-in-solid-design-principle/" },
      { id: "o15", name: "Liskov Substitution Principle", diff: "hard",   link: "https://www.geeksforgeeks.org/liskov-substitution-principle/" },
    ]
  }
];

// ───────────────────────────────────────────────
// RESOURCES
// ───────────────────────────────────────────────
const RESOURCES = [
  {
    category: "DSA", title: "Striver A2Z DSA Sheet",
    desc: "The best structured DSA sheet for beginners to advanced. Perfect match for service-based company interviews.",
    tags: ["DSA", "Striver", "All levels"], color: "#6c63ff",
    link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", free: true
  },
  {
    category: "DSA", title: "LeetCode — Easy & Medium",
    desc: "Service-based companies only ask Easy–Medium level DSA. Focus on top 50 most-asked questions.",
    tags: ["Practice", "Coding"], color: "#6c63ff",
    link: "https://leetcode.com/problemset/?difficulty=EASY&status=NOT_STARTED", free: true
  },
  {
    category: "DSA", title: "NeetCode 75",
    desc: "Curated 75 most important problems with clear video solutions. Quality over quantity.",
    tags: ["Curated", "Video", "DSA"], color: "#6c63ff",
    link: "https://neetcode.io/practice", free: true
  },
  {
    category: "React", title: "React Official Docs (react.dev)",
    desc: "The brand new React docs — interactive, beginner-friendly, with live examples. Best React resource ever.",
    tags: ["Official", "Interactive"], color: "#00d4aa",
    link: "https://react.dev/learn", free: true
  },
  {
    category: "React", title: "Namaste JavaScript (YouTube)",
    desc: "Akshay Saini's series — THE BEST for understanding JS internals: closures, event loop, promises.",
    tags: ["Hindi", "YouTube", "JS"], color: "#00d4aa",
    link: "https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP", free: true
  },
  {
    category: "React", title: "React by Codevolution (YouTube)",
    desc: "Complete React tutorial series. Covers hooks, routing, context. Perfect for interview prep.",
    tags: ["YouTube", "Hooks", "Complete"], color: "#00d4aa",
    link: "https://www.youtube.com/c/Codevolution", free: true
  },
  {
    category: "OOP", title: "OOP in Java — GFG",
    desc: "Complete OOP reference with examples. Covers all 4 pillars, SOLID, design patterns.",
    tags: ["Java", "Complete", "OOP"], color: "#ff6b9d",
    link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/", free: true
  },
  {
    category: "CS Subjects", title: "Last Minute Notes — GFG",
    desc: "DBMS, OS, CN last minute revision notes. Perfect for quick revision before interview day.",
    tags: ["DBMS", "OS", "CN", "Revision"], color: "#ff9f43",
    link: "https://www.geeksforgeeks.org/lmns-gq/", free: true
  },
  {
    category: "Interview Prep", title: "Interviewer Prep — Blind 75",
    desc: "75 must-do questions that cover maximum ground for technical interviews.",
    tags: ["Must-do", "Curated"], color: "#22c55e",
    link: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions", free: true
  },
  {
    category: "Interview Prep", title: "90 Days Coding Challenge by Striver",
    desc: "Structured coding challenge to build consistency with daily problems and tracking.",
    tags: ["Consistency", "Daily"], color: "#22c55e",
    link: "https://takeuforward.org/", free: true
  }
];

// ───────────────────────────────────────────────
// MOCK INTERVIEW QA
// ───────────────────────────────────────────────
const MOCK_QA = [
  {
    category: "HR Questions",
    icon: "🎤",
    questions: [
      {
        q: "Tell me about yourself.",
        a: `Keep it 90 seconds: Name → Education → Projects → Skills → "I'm looking for..."<br><br>
<b>Example:</b> "I'm Sanjeev, a [your degree] student from [college]. I've built projects using React and Java including [project name] — a [brief description]. I'm proficient in DSA and OOP. I'm excited to join a team where I can contribute and grow as a developer."`
      },
      {
        q: "Why do you want to join Infosys/IBM/Accenture?",
        a: `Research the company first! Then use: Company strength → Learning opportunity → Your fit.<br><br>
<b>Tip:</b> "Infosys is a global leader in IT services. I want to work with large-scale enterprise projects and learn from experienced engineers. My skills in Java and React align well with the tech stack used here."`
      },
      {
        q: "What are your strengths and weaknesses?",
        a: `<b>Strength:</b> Pick a real one with an example. E.g., "I'm a quick learner — when I started React 3 months ago, I built a functional app within 2 weeks."<br><br>
<b>Weakness:</b> Pick something real but improving. E.g., "Sometimes I spend too much time perfecting code. I'm learning to balance quality with deadlines."`
      },
      {
        q: "Why should we hire you?",
        a: `Connect your skills to their needs.<br><br>
<b>Example:</b> "I have strong fundamentals in DSA and Java OOP, hands-on React experience, and most importantly, I'm hungry to learn and grow. I don't just memorize concepts — I understand them, which means I can apply them to real problems."`
      },
      {
        q: "Where do you see yourself in 5 years?",
        a: `Show ambition + company alignment.<br><br>
<b>Example:</b> "In 5 years, I see myself as a senior developer who has mastered full-stack development and contributes to architectural decisions. I'd love to grow within your organization and take on increasing responsibilities."`
      }
    ]
  },
  {
    category: "OOP Interview Questions",
    icon: "🧩",
    questions: [
      {
        q: "What is the difference between Abstraction and Encapsulation?",
        a: `<b>Encapsulation</b> = hiding data (using private fields + getters/setters). It's about <i>how</i> you protect data.<br>
<b>Abstraction</b> = hiding implementation (using abstract classes/interfaces). It's about <i>what</i> the user sees.<br><br>
Analogy: A TV remote (abstraction — you press buttons, don't know internals). Inside the remote the circuits are hidden (encapsulation).`
      },
      {
        q: "What is polymorphism? Explain with an example.",
        a: `Polymorphism = "many forms". Same method name, different behavior.<br><br>
<b>Compile-time</b> (overloading): <code>add(int a, int b)</code> and <code>add(double a, double b)</code><br>
<b>Runtime</b> (overriding): Animal class has <code>sound()</code>; Dog overrides it to print "Woof", Cat prints "Meow".<br><br>
Runtime polymorphism enables flexible, extensible code.`
      },
      {
        q: "Abstract class vs Interface — when to use which?",
        a: `<b>Abstract class:</b> Use when classes share common code + have an IS-A relationship. Can have constructors, state, concrete methods.<br>
<b>Interface:</b> Use for a contract/capability (e.g., Flyable, Serializable). A class can implement multiple interfaces.<br><br>
Rule: "Is it a type of thing?" → Abstract class. "Can it do this thing?" → Interface.`
      },
      {
        q: "What is the difference between method overloading and overriding?",
        a: `<b>Overloading:</b> Same class, same method name, different parameters. Resolved at compile time (static binding).<br>
<b>Overriding:</b> Parent-child classes, same method name + params. Child redefines parent's behavior. Resolved at runtime (dynamic binding).<br><br>
Remember: <code>@Override</code> annotation helps catch errors in overriding.`
      },
      {
        q: "What is the Singleton design pattern?",
        a: `Ensures only <b>one instance</b> of a class exists throughout the application.<br><br>
Used for: Database connections, logger, config manager.<br><br>
<b>Implementation:</b> private constructor + static instance + getInstance() method that creates instance only if null.`
      }
    ]
  },
  {
    category: "React Interview Questions",
    icon: "⚛️",
    questions: [
      {
        q: "What is the Virtual DOM and how does React use it?",
        a: `Virtual DOM is a lightweight JS copy of the real DOM.<br><br>
When state changes:<br>
<ul><li>React creates new Virtual DOM tree</li><li>Compares it with previous (diffing/reconciliation)</li><li>Updates only changed parts in real DOM (batched updates)</li></ul>
This makes React fast — real DOM manipulation is expensive.`
      },
      {
        q: "Explain useState and useEffect hooks.",
        a: `<b>useState:</b> Adds state to functional components. <code>const [count, setCount] = useState(0)</code>. Re-renders when state changes.<br><br>
<b>useEffect:</b> Runs side effects (API calls, subscriptions). Runs after render.<br>
<ul><li>Empty array <code>[]</code> → runs once (componentDidMount)</li><li>With deps → runs when deps change</li><li>Return cleanup fn → runs on unmount</li></ul>`
      },
      {
        q: "What is prop drilling and how do you avoid it?",
        a: `Prop drilling = passing props through many intermediate components that don't need them.<br><br>
<b>Solutions:</b><br>
<ul><li><b>useContext</b> — React's built-in context API</li><li><b>Redux</b> — global state management</li><li><b>Zustand</b> — lightweight alternative</li></ul>
For interviews, explaining useContext with a code example is perfect.`
      },
      {
        q: "What is the difference between useMemo and useCallback?",
        a: `Both are for performance optimization:<br><br>
<b>useMemo:</b> Memoizes a <i>value</i>. Recalculates only when dependencies change.<br>
<code>const result = useMemo(() => expensive(a,b), [a,b])</code><br><br>
<b>useCallback:</b> Memoizes a <i>function</i>. Returns same function reference unless deps change.<br>
<code>const fn = useCallback(() => doSomething(x), [x])</code>`
      },
      {
        q: "What are keys in React and why are they important?",
        a: `Keys help React identify which items in a list have changed, been added, or removed.<br><br>
Without proper keys → React re-renders entire list unnecessarily (performance issue).<br>
With stable unique keys (e.g., item ID) → only changed items re-render.<br><br>
<b>Never use array index as key</b> if list order can change — causes bugs.`
      }
    ]
  },
  {
    category: "DSA Concept Questions",
    icon: "⚡",
    questions: [
      {
        q: "What is the time complexity of common sorting algorithms?",
        a: `<ul>
<li><b>Bubble/Selection/Insertion:</b> O(n²) — avoid in interviews</li>
<li><b>Merge Sort:</b> O(n log n) — stable, great for linked lists</li>
<li><b>Quick Sort:</b> O(n log n) avg, O(n²) worst — good in practice</li>
<li><b>Heap Sort:</b> O(n log n) — in-place</li>
<li><b>Counting/Radix Sort:</b> O(n) — for specific inputs</li>
</ul>`
      },
      {
        q: "Explain BFS vs DFS with use cases.",
        a: `<b>BFS (Breadth-First Search):</b> Uses a queue. Explores level by level. Finds shortest path in unweighted graph.<br>
Use: Shortest path, level order traversal, finding nearest neighbor.<br><br>
<b>DFS (Depth-First Search):</b> Uses stack/recursion. Goes deep before wide.<br>
Use: Detect cycles, topological sort, maze solving, connected components.`
      },
      {
        q: "What is dynamic programming? When to use it?",
        a: `DP = breaking a problem into overlapping subproblems and storing results to avoid recomputation (memoization/tabulation).<br><br>
<b>When to use:</b> Problem has optimal substructure + overlapping subproblems.<br><br>
<b>Identify DP problems:</b> If you're asked for max/min/count + recursive solution leads to repeated calls → DP.<br><br>
Examples: Fibonacci, Knapsack, LCS, Coin Change.`
      }
    ]
  }
];
