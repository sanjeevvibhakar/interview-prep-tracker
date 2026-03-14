// ============================================================
// DATA2.JS — New data for the 30-Day Job Mission overhaul
// ============================================================

// ── 30-DAY DAILY GRIND ──────────────────────────────────────
const DAILY_GRIND = [
    // WEEK 1 — ARRAYS & STRINGS PATTERNS
    {
        day: 1, pattern: "Two Pointer", tag: "Arrays", problems: [
            { name: "Two Sum II", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", diff: "easy", key: "Left+right pointers moving inward" },
            { name: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", diff: "easy", key: "Compare chars from both ends" },
            { name: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", diff: "medium", key: "Move pointer with smaller height" }
        ]
    },
    {
        day: 2, pattern: "Sliding Window", tag: "Arrays", problems: [
            { name: "Max Avg Subarray I", link: "https://leetcode.com/problems/maximum-average-subarray-i/", diff: "easy", key: "Fixed window of size k" },
            { name: "Longest Substring Without Repeating", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", diff: "medium", key: "Expand right, shrink left on duplicate" },
            { name: "Minimum Size Subarray Sum", link: "https://leetcode.com/problems/minimum-size-subarray-sum/", diff: "medium", key: "Variable window, shrink when sum >= target" }
        ]
    },
    {
        day: 3, pattern: "Prefix Sum", tag: "Arrays", problems: [
            { name: "Running Sum of 1D Array", link: "https://leetcode.com/problems/running-sum-of-1d-array/", diff: "easy", key: "prefix[i] = prefix[i-1] + nums[i]" },
            { name: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", diff: "medium", key: "HashMap stores prefix sums seen so far" },
            { name: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", diff: "medium", key: "Left product * Right product" }
        ]
    },
    {
        day: 4, pattern: "HashMap / Hashing", tag: "Arrays", problems: [
            { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", diff: "easy", key: "Store complement in map" },
            { name: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", diff: "medium", key: "Sorted string as key" },
            { name: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", diff: "medium", key: "Freq map + bucket sort" }
        ]
    },
    {
        day: 5, pattern: "Sorting Tricks", tag: "Arrays", problems: [
            { name: "Sort Colors (Dutch Flag)", link: "https://leetcode.com/problems/sort-colors/", diff: "medium", key: "3 pointers: lo, mid, hi" },
            { name: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", diff: "medium", key: "Sort by start, merge if overlap" },
            { name: "Meeting Rooms II", link: "https://leetcode.com/problems/meeting-rooms-ii/", diff: "medium", key: "Min heap of end times" }
        ]
    },
    {
        day: 6, pattern: "Kadane / Subarray", tag: "Arrays", problems: [
            { name: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", diff: "medium", key: "Reset to 0 when running sum < 0" },
            { name: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", diff: "medium", key: "Track both max and min (negative×negative)" },
            { name: "Best Time to Buy Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", diff: "easy", key: "Track min price seen so far" }
        ]
    },
    {
        day: 7, pattern: "String Manipulation", tag: "Strings", problems: [
            { name: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", diff: "easy", key: "Freq count of both strings" },
            { name: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", diff: "easy", key: "Compare char by char vertically" },
            { name: "String to Integer (atoi)", link: "https://leetcode.com/problems/string-to-integer-atoi/", diff: "medium", key: "Handle sign, overflow, non-digits" }
        ]
    },
    // WEEK 2 — LINKED LIST, STACK, BINARY SEARCH
    {
        day: 8, pattern: "Linked List Basics", tag: "LinkedList", problems: [
            { name: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", diff: "easy", key: "prev=null, curr, next — iterate" },
            { name: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", diff: "easy", key: "Dummy head, compare and attach" },
            { name: "Middle of Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/", diff: "easy", key: "Slow=1x, Fast=2x speed" }
        ]
    },
    {
        day: 9, pattern: "Linked List Advanced", tag: "LinkedList", problems: [
            { name: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", diff: "easy", key: "Floyd's: fast catches slow if cycle" },
            { name: "Remove Nth Node From End", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", diff: "medium", key: "Two pointer gap of n" },
            { name: "Reorder List", link: "https://leetcode.com/problems/reorder-list/", diff: "medium", key: "Find mid + reverse 2nd half + merge" }
        ]
    },
    {
        day: 10, pattern: "Stack", tag: "Stack", problems: [
            { name: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", diff: "easy", key: "Push open, pop on close, match" },
            { name: "Min Stack", link: "https://leetcode.com/problems/min-stack/", diff: "medium", key: "Auxiliary stack tracks minimums" },
            { name: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", diff: "medium", key: "Monotonic decreasing stack" }
        ]
    },
    {
        day: 11, pattern: "Binary Search", tag: "BinarySearch", problems: [
            { name: "Binary Search", link: "https://leetcode.com/problems/binary-search/", diff: "easy", key: "lo=0,hi=n-1, mid=(lo+hi)/2" },
            { name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", diff: "medium", key: "Find sorted half, check target in range" },
            { name: "Find First & Last Position", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", diff: "medium", key: "Two binary searches: leftmost + rightmost" }
        ]
    },
    {
        day: 12, pattern: "BS on Answer", tag: "BinarySearch", problems: [
            { name: "Koko Eating Bananas", link: "https://leetcode.com/problems/koko-eating-bananas/", diff: "medium", key: "BS on speed 1..max, check feasibility" },
            { name: "Find Minimum in Rotated Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", diff: "medium", key: "Minimum is in unsorted half" },
            { name: "Capacity to Ship Packages", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", diff: "medium", key: "BS on capacity, check if feasible" }
        ]
    },
    {
        day: 13, pattern: "Tree Traversals", tag: "Trees", problems: [
            { name: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", diff: "easy", key: "Left → Root → Right" },
            { name: "Binary Tree Level Order", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", diff: "medium", key: "BFS queue, process level by level" },
            { name: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", diff: "easy", key: "1 + max(left, right)" }
        ]
    },
    {
        day: 14, pattern: "Tree Problems", tag: "Trees", problems: [
            { name: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", diff: "easy", key: "Mirror check: left.val==right.val" },
            { name: "Path Sum", link: "https://leetcode.com/problems/path-sum/", diff: "easy", key: "Subtract value as you recurse" },
            { name: "Lowest Common Ancestor", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", diff: "medium", key: "Found p or q? return node. LCA = where both non-null" }
        ]
    },
    // WEEK 3 — RECURSION, DP, GRAPHS
    {
        day: 15, pattern: "Recursion & Backtracking", tag: "Recursion", problems: [
            { name: "Subsets", link: "https://leetcode.com/problems/subsets/", diff: "medium", key: "Include or exclude each element" },
            { name: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", diff: "medium", key: "Try each, reduce target, backtrack" },
            { name: "Permutations", link: "https://leetcode.com/problems/permutations/", diff: "medium", key: "Swap unused elements into position" }
        ]
    },
    {
        day: 16, pattern: "DP — 1D", tag: "DP", problems: [
            { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", diff: "easy", key: "dp[i] = dp[i-1] + dp[i-2]" },
            { name: "House Robber", link: "https://leetcode.com/problems/house-robber/", diff: "medium", key: "dp[i] = max(dp[i-1], dp[i-2]+nums[i])" },
            { name: "Coin Change", link: "https://leetcode.com/problems/coin-change/", diff: "medium", key: "dp[i] = min over all coins of dp[i-coin]+1" }
        ]
    },
    {
        day: 17, pattern: "DP — 2D", tag: "DP", problems: [
            { name: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", diff: "medium", key: "dp[i][j] = dp[i-1][j] + dp[i][j-1]" },
            { name: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/", diff: "medium", key: "Match: 1+dp[i-1][j-1], else max(up,left)" },
            { name: "0/1 Knapsack", link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/", diff: "medium", key: "Include if wt<=cap: max(with, without)" }
        ]
    },
    {
        day: 18, pattern: "Graph BFS/DFS", tag: "Graphs", problems: [
            { name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", diff: "medium", key: "DFS flood fill every '1'" },
            { name: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", diff: "medium", key: "BFS + HashMap old→new node" },
            { name: "Rotting Oranges", link: "https://leetcode.com/problems/rotting-oranges/", diff: "medium", key: "Multi-source BFS from all rotten initially" }
        ]
    },
    {
        day: 19, pattern: "Mixed Practice", tag: "Mixed", problems: [
            { name: "3Sum", link: "https://leetcode.com/problems/3sum/", diff: "medium", key: "Sort + fix i, two pointer for rest" },
            { name: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/", diff: "medium", key: "4 boundaries: top/bottom/left/right" },
            { name: "Jump Game", link: "https://leetcode.com/problems/jump-game/", diff: "medium", key: "Track maxReach greedily" }
        ]
    },
    {
        day: 20, pattern: "Company Mock", tag: "Mock", problems: [
            { name: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", diff: "medium", key: "HashMap + Doubly linked list" },
            { name: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", diff: "hard", key: "Max heap + min heap balanced" },
            { name: "Word Search", link: "https://leetcode.com/problems/word-search/", diff: "medium", key: "DFS with visited marking" }
        ]
    },
    {
        day: 21, pattern: "Infosys/IBM Pattern", tag: "Mock", problems: [
            { name: "Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/", diff: "easy", key: "Each row: 1, sum of above pair, 1" },
            { name: "Majority Element", link: "https://leetcode.com/problems/majority-element/", diff: "easy", key: "Boyer-Moore voting algorithm" },
            { name: "Power of Two", link: "https://leetcode.com/problems/power-of-two/", diff: "easy", key: "n>0 && (n & n-1) == 0" }
        ]
    },
    {
        day: 22, pattern: "Accenture Pattern", tag: "Mock", problems: [
            { name: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/", diff: "easy", key: "DP or recursion" },
            { name: "Single Number", link: "https://leetcode.com/problems/single-number/", diff: "easy", key: "XOR all numbers — duplicates cancel" },
            { name: "Find Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/", diff: "medium", key: "Floyd's cycle detection on array" }
        ]
    },
    {
        day: 23, pattern: "String Advanced", tag: "Strings", problems: [
            { name: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", diff: "medium", key: "Expand around center for each char" },
            { name: "Palindromic Substrings", link: "https://leetcode.com/problems/palindromic-substrings/", diff: "medium", key: "Count by expanding around centers" },
            { name: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/", diff: "medium", key: "DP: 1-digit + 2-digit valid combos" }
        ]
    },
    {
        day: 24, pattern: "Heap / Priority Queue", tag: "Heap", problems: [
            { name: "Kth Largest Element", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", diff: "medium", key: "Min heap of size k" },
            { name: "Top K Frequent Words", link: "https://leetcode.com/problems/top-k-frequent-words/", diff: "medium", key: "MinHeap with freq+lex order" },
            { name: "K Closest Points to Origin", link: "https://leetcode.com/problems/k-closest-points-to-origin/", diff: "medium", key: "MaxHeap of size k by distance" }
        ]
    },
    {
        day: 25, pattern: "BST Operations", tag: "Trees", problems: [
            { name: "Validate BST", link: "https://leetcode.com/problems/validate-binary-search-tree/", diff: "medium", key: "Pass min/max bounds in recursion" },
            { name: "Kth Smallest in BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", diff: "medium", key: "Inorder gives sorted order" },
            { name: "BST to Greater Sum Tree", link: "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/", diff: "medium", key: "Reverse inorder (right→root→left) + running sum" }
        ]
    },
    {
        day: 26, pattern: "Greedy", tag: "Greedy", problems: [
            { name: "Assign Cookies", link: "https://leetcode.com/problems/assign-cookies/", diff: "easy", key: "Sort both, greedily satisfy smallest child" },
            { name: "Gas Station", link: "https://leetcode.com/problems/gas-station/", diff: "medium", key: "If total gas>=cost, solution exists" },
            { name: "Partition Labels", link: "https://leetcode.com/problems/partition-labels/", diff: "medium", key: "Last occurrence of each char" }
        ]
    },
    {
        day: 27, pattern: "Matrix", tag: "Matrix", problems: [
            { name: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/", diff: "medium", key: "Use first row/col as markers" },
            { name: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/", diff: "medium", key: "Transpose then reverse each row" },
            { name: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", diff: "medium", key: "Start top-right: go left or down" }
        ]
    },
    {
        day: 28, pattern: "Full Mock Round 1", tag: "Mock", problems: [
            { name: "Two Sum (Warmup)", link: "https://leetcode.com/problems/two-sum/", diff: "easy", key: "Must solve in < 5 min" },
            { name: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", diff: "medium", key: "HashSet: start of sequence check" },
            { name: "Maximum Profit in Job Scheduling", link: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", diff: "hard", key: "DP + binary search on end times" }
        ]
    },
    {
        day: 29, pattern: "Full Mock Round 2", tag: "Mock", problems: [
            { name: "Valid Sudoku", link: "https://leetcode.com/problems/valid-sudoku/", diff: "medium", key: "HashSet per row, col, 3x3 box" },
            { name: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", diff: "medium", key: "Topological sort / cycle detection" },
            { name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", diff: "hard", key: "Two pointer: min(maxL, maxR) - height" }
        ]
    },
    {
        day: 30, pattern: "D-Day Confidence", tag: "Mock", problems: [
            { name: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", diff: "hard", key: "BS on smaller array partition" },
            { name: "Merge K Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", diff: "hard", key: "MinHeap of k heads" },
            { name: "Serialize & Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", diff: "hard", key: "BFS level order with null markers" }
        ]
    }
];

// ── OOP 3-LEVEL Q&A ─────────────────────────────────────────
const OOP_LEVELS = [
    {
        level: 1, label: "Level 1 — Basic", color: "#22c55e",
        desc: "Expect these in every service-based interview. Must memorize + explain with example.",
        questions: [
            {
                q: "What is OOP? Why do we use it?",
                a: "OOP (Object-Oriented Programming) organizes code around <b>objects</b> that combine data (attributes) and behavior (methods). We use it because: code is reusable (inheritance), easy to maintain (encapsulation), extensible (polymorphism), and models real-world entities naturally."
            },
            {
                q: "What is a Class vs an Object?",
                a: "<b>Class</b> = blueprint/template. <b>Object</b> = instance of that class.<br>Example: 'Car' is a class. Your specific car 'Honda City Red MH12' is an object. A class can create infinite objects."
            },
            {
                q: "What is Encapsulation?",
                a: "Bundling data (variables) and methods that operate on it within a class, and <b>restricting direct access</b> using access modifiers (private/protected).<br>Example: Bank account balance is private. You access it only via deposit(), withdraw(), getBalance() methods — you can't directly set balance = 999999."
            },
            {
                q: "What is Inheritance?",
                a: "A child class <b>acquires properties and behaviors</b> of a parent class using <code>extends</code>.<br>Example: Animal has eat() and sleep(). Dog extends Animal and adds bark(). Dog automatically gets eat() and sleep() for free → code reuse."
            },
            {
                q: "What is Polymorphism?",
                a: "<b>One interface, many forms.</b><br>Method Overloading (compile-time): same name, different params.<br>Method Overriding (runtime): child redefines parent method.<br>Example: Shape class has area(). Circle, Rectangle each override area() with their own formula."
            },
            {
                q: "What is Abstraction?",
                a: "<b>Hiding implementation details</b>, showing only necessary features.<br>Example: You press a car's accelerator — you don't know how the engine works internally. The 'what' is exposed, the 'how' is hidden.<br>In code: abstract classes and interfaces achieve this."
            },
            {
                q: "What is a Constructor?",
                a: "A special method that <b>automatically runs when an object is created</b>. Same name as class, no return type.<br>Types: Default (no args), Parameterized (with args), Copy constructor.<br>Used to initialize object's state when it's created."
            },
            {
                q: "What is 'this' keyword?",
                a: "<code>this</code> refers to the <b>current object</b> inside a method or constructor. Used to: distinguish instance variables from parameters with same name, call another constructor in same class (<code>this()</code>), pass current object as argument."
            }
        ]
    },
    {
        level: 2, label: "Level 2 — Intermediate", color: "#f59e0b",
        desc: "These separate average from good candidates. Know the WHY, not just the WHAT.",
        questions: [
            {
                q: "Abstract Class vs Interface — which to use when?",
                a: "<b>Abstract Class:</b> Use when classes share common code. Can have constructors, concrete methods, instance variables. Single inheritance only.<br><b>Interface:</b> Use for a contract/capability. No state. A class implements multiple interfaces.<br><b>Rule:</b> IS-A relationship → abstract class. CAN-DO capability → interface.<br>Example: Animal (abstract) vs Flyable, Swimmable (interfaces)."
            },
            {
                q: "What is method overriding? Rules?",
                a: "Child class provides <b>specific implementation</b> of a parent method. Rules:<br>1. Same method name, same parameters<br>2. Child's access must be same or wider<br>3. Can't override final/static/private methods<br>4. Use @Override annotation to catch mistakes<br>5. Runtime (dynamic) binding — decided at runtime."
            },
            {
                q: "What is the difference between == and .equals()?",
                a: "<code>==</code> compares <b>references</b> (memory addresses for objects, values for primitives).<br><code>.equals()</code> compares <b>content/values</b> (as defined by the class).<br>Example: Two String objects with same text → == is false (different objects), .equals() is true (same content). Always use .equals() for object comparison."
            },
            {
                q: "What is the final keyword?",
                a: "<b>final variable:</b> constant, value can't be changed.<br><b>final method:</b> can't be overridden in child class.<br><b>final class:</b> can't be inherited (e.g., String class in Java is final).<br>Use final for security, immutability, performance optimization."
            },
            {
                q: "What is static keyword?",
                a: "<b>static variable:</b> shared across ALL objects of the class (class-level, not object-level).<br><b>static method:</b> called on class, not object. Can't access non-static members.<br><b>static block:</b> runs once when class loads.<br>Example: counter to track total objects created — use static variable."
            },
            {
                q: "What is multiple inheritance? Why Java doesn't support it?",
                a: "Multiple inheritance = one class inheriting from multiple parent classes.<br><b>Java doesn't support it with classes</b> due to the <b>Diamond Problem</b>: if both parents have same method, which one does child inherit? Ambiguous.<br>Java solves this via <b>interfaces</b> — a class can implement multiple interfaces."
            },
            {
                q: "What is Exception Handling? try-catch-finally?",
                a: "<b>try:</b> code that might throw exception.<br><b>catch:</b> handles specific exception type.<br><b>finally:</b> ALWAYS runs (even if exception occurs) — used for cleanup like closing DB connections.<br>Checked exceptions (IOException) must be declared. Unchecked (NullPointerException) don't need to be."
            },
            {
                q: "What is the Singleton pattern?",
                a: "Ensures only <b>one instance</b> exists. Implementation:<br>1. Private constructor (prevents new Singleton())<br>2. Private static instance variable<br>3. Public static getInstance() — creates only if null<br>Use cases: Database connection pool, Logger, Config manager"
            }
        ]
    },
    {
        level: 3, label: "Level 3 — Advanced", color: "#ef4444",
        desc: "For L3 / product-based rounds. Shows you think like a developer, not just a student.",
        questions: [
            {
                q: "Explain SOLID principles with examples.",
                a: "<b>S</b>ingle Responsibility: One class, one reason to change. UserService handles users, not emails.<br><b>O</b>pen/Closed: Open for extension, closed for modification. Add new payment type without changing existing code.<br><b>L</b>iskov Substitution: Child class must be usable wherever parent is expected.<br><b>I</b>nterface Segregation: Don't force classes to implement unused methods. Split fat interfaces.<br><b>D</b>ependency Inversion: Depend on abstractions, not concrete classes. Inject dependencies."
            },
            {
                q: "How would you design a parking lot using OOP?",
                a: "Classes needed:<br><b>ParkingLot</b> (spots[], addSpot, findSpot)<br><b>ParkingSpot</b> (size, isAvailable, vehicle)<br><b>Vehicle</b> (abstract — size, plate) → Car, Bike, Truck<br><b>Ticket</b> (spot, entryTime, exitTime)<br><b>ParkingFeeCalculator</b><br>Patterns used: Strategy (fee calculation), Singleton (ParkingLot), Factory (Vehicle creation)"
            },
            {
                q: "What is Composition vs Inheritance? When to prefer composition?",
                a: "<b>Inheritance:</b> IS-A. Dog IS-A Animal.<br><b>Composition:</b> HAS-A. Car HAS-A Engine.<br><b>Prefer composition when:</b> The relationship isn't truly IS-A, you want to reuse behavior from multiple sources, you need flexibility to swap implementations at runtime.<br>Rule: 'Favor composition over inheritance' — more flexible, less tightly coupled code."
            },
            {
                q: "What is an Immutable class? How to create one?",
                a: "An object whose state <b>cannot be changed after creation</b>. Example: Java's String class.<br>How to create:<br>1. Declare class as final<br>2. Make all fields private final<br>3. No setters<br>4. Initialize via constructor only<br>5. For mutable fields (like List), return defensive copies in getters.<br>Benefits: Thread-safe, cacheable, no defensive copies needed."
            },
            {
                q: "What is the difference between Cohesion and Coupling?",
                a: "<b>Cohesion:</b> How focused a class/module is on a single task. HIGH cohesion = good (one class, one job).<br><b>Coupling:</b> How dependent classes are on each other. LOW coupling = good (changes in one don't ripple everywhere).<br>Goal: High cohesion + Low coupling = maintainable code. Achieved via interfaces, dependency injection."
            },
            {
                q: "Explain the Observer Design Pattern.",
                a: "When one object (Subject/Observable) changes state, all its dependents (Observers) are <b>automatically notified</b>.<br>Real world: YouTube channel (subject) — subscribers (observers) notified on new video.<br>In code: Subject has list of observers, notifyAll() calls update() on each.<br>Used in: Event handling, MVC pattern, React state management concept"
            }
        ]
    }
];

// ── REACT INTERVIEW Q&A (30 Questions) ──────────────────────
const REACT_QA = [
    {
        category: "JavaScript Essentials", icon: "💛",
        questions: [
            {
                q: "What is a closure? Give a real example.",
                a: "A closure is a function that <b>remembers variables from its outer scope</b> even after the outer function has returned.<br>Example: Counter factory — inner function remembers 'count' variable from outer function. Used in: event handlers, setTimeout callbacks, module pattern, React hooks (useState stores state via closure)."
            },
            {
                q: "null vs undefined vs not defined?",
                a: "<b>undefined:</b> Variable declared but no value assigned. `let x;` → x is undefined.<br><b>null:</b> Intentional absence of value. Explicitly assigned by developer.<br><b>not defined:</b> Variable was never declared — throws ReferenceError.<br>Typeof null = 'object' (historical JS bug). Typeof undefined = 'undefined'."
            },
            {
                q: "What is the Event Loop?",
                a: "JS is single-threaded. Event loop manages async operations:<br>1. Call Stack — executes current code<br>2. Web APIs — handle setTimeout, fetch, DOM events<br>3. Callback Queue — completed callbacks wait here<br>4. Event Loop — moves callbacks to stack ONLY when stack is empty<br>So: console.log('A') > setTimeout(fn,0) > console.log('B') prints A, B, then fn."
            },
            {
                q: "var vs let vs const?",
                a: "<b>var:</b> function-scoped, hoisted (initialized as undefined), can re-declare. Avoid!<br><b>let:</b> block-scoped, hoisted but NOT initialized (temporal dead zone), no re-declaration.<br><b>const:</b> block-scoped, must initialize at declaration, can't reassign. But object properties CAN change."
            },
            {
                q: "Promise vs async/await?",
                a: "Both handle async operations. async/await is <b>syntactic sugar over Promises</b>.<br>Promise: .then().catch() chain — can get messy (callback hell-lite).<br>async/await: looks synchronous, easier to read and debug. try/catch for errors.<br>await pauses execution inside async function until Promise resolves. Outside: still non-blocking."
            }
        ]
    },
    {
        category: "React Core", icon: "⚛️",
        questions: [
            {
                q: "What is the Virtual DOM? How does React use it?",
                a: "Virtual DOM = lightweight JS copy of real DOM.<br>Process: State changes → New VDOM tree → <b>Diffing</b> (compare old vs new) → <b>Reconciliation</b> (find minimal changes) → <b>Batch update</b> real DOM.<br>Why fast: Real DOM manipulation is expensive. React batches and minimizes DOM operations."
            },
            {
                q: "Class components vs Functional components?",
                a: "<b>Class components:</b> Use this.state, lifecycle methods (componentDidMount, etc.), more boilerplate.<br><b>Functional components:</b> Simpler, use hooks instead of lifecycle methods, no 'this' confusion, easier to test.<br>Modern React = functional components + hooks. Class components still work but are legacy."
            },
            {
                q: "What are React keys? Why important?",
                a: "Keys help React <b>identify which list items have changed</b>, added, or removed during reconciliation.<br>Without keys: React re-renders entire list. With stable keys (IDs): only changed items re-render.<br><b>Never use array index as key if list order can change</b> — causes subtle bugs with state and animations."
            },
            {
                q: "What is prop drilling? How to solve?",
                a: "Passing props through multiple intermediate components that don't need them just to reach a deeply nested component.<br>Solutions: <b>useContext</b> (built-in, good for simple cases), <b>Redux/Zustand</b> (global state, complex apps), <b>Component composition</b> (pass component as prop)."
            },
            {
                q: "What is the React component lifecycle?",
                a: "<b>Mounting:</b> constructor → render → componentDidMount<br><b>Updating:</b> render → componentDidUpdate<br><b>Unmounting:</b> componentWillUnmount<br>In hooks: useEffect(fn, []) = componentDidMount. useEffect(fn, [dep]) = componentDidUpdate. useEffect return fn = componentWillUnmount."
            },
            {
                q: "Controlled vs Uncontrolled components?",
                a: "<b>Controlled:</b> React state is single source of truth. Input value = state, onChange updates state. You control every keystroke.<br><b>Uncontrolled:</b> DOM manages its own state. Use ref to access value when needed.<br>Prefer controlled components — predictable state, easy validation, works with React DevTools."
            }
        ]
    },
    {
        category: "React Hooks — Deep Dive", icon: "🪝",
        questions: [
            {
                q: "Explain useState completely.",
                a: "<code>const [state, setState] = useState(initialValue)</code><br>setState with new value triggers re-render. setState is <b>async</b> — state updates are batched. For state based on previous: <code>setState(prev => prev + 1)</code> — always use functional form for counters. State update with same value → no re-render (Object.is comparison)."
            },
            {
                q: "Explain useEffect completely — dependency array rules.",
                a: "<code>useEffect(callback, deps)</code><br><b>[] empty:</b> runs once after first render (like componentDidMount).<br><b>[dep1, dep2]:</b> runs after first render AND when deps change.<br><b>No array:</b> runs after EVERY render (usually wrong).<br><b>Return cleanup:</b> runs before next effect and on unmount. Use for: cancel subscriptions, clear timers."
            },
            {
                q: "useRef vs useState — when to use each?",
                a: "<b>useState:</b> When you need re-render on value change. UI state.<br><b>useRef:</b> When you need to store mutable value WITHOUT triggering re-render. Also for DOM element access (<code>ref.current</code>).<br>Example: Timer ID — store in useRef (no need to re-render when timer ID changes). Input focus — store DOM ref, call ref.current.focus()."
            },
            {
                q: "useMemo vs useCallback — real difference?",
                a: "<b>useMemo:</b> Memoizes a computed <i>value</i>. Only recalculates when deps change. <code>const val = useMemo(()=>expensiveCalc(a), [a])</code><br><b>useCallback:</b> Memoizes a <i>function reference</i>. Same function object between renders. <code>const fn = useCallback(()=>doThing(x), [x])</code><br>Use when: passing functions to optimized child components (with React.memo) to prevent unnecessary re-renders."
            },
            {
                q: "What is useContext? Build a theme example mentally.",
                a: "<b>Create:</b> <code>const ThemeCtx = createContext('light')</code><br><b>Provide:</b> Wrap app in <code>&lt;ThemeCtx.Provider value={theme}&gt;</code><br><b>Consume:</b> Any nested component: <code>const theme = useContext(ThemeCtx)</code><br>No prop drilling. Change value in Provider → all consumers auto re-render. Don't overuse — causes unnecessary re-renders."
            },
            {
                q: "What are Custom Hooks? Write a useFetch example mentally.",
                a: "Custom hooks let you <b>extract and reuse stateful logic</b>. Must start with 'use'.<br>useFetch: useState for data/loading/error. useEffect to fetch on URL change. Return {data, loading, error}.<br>Any component needing fetch logic just calls useFetch(url) — no duplication. Examples: useLocalStorage, useDebounce, useWindowSize."
            }
        ]
    },
    {
        category: "React Advanced & Performance", icon: "🚀",
        questions: [
            {
                q: "When does a React component re-render?",
                a: "Component re-renders when:<br>1. Its own state changes<br>2. Its props change<br>3. Parent component re-renders (even if props same!)<br>4. Context value it consumes changes<br><b>Prevent unnecessary re-renders:</b> React.memo (for components), useMemo (for values), useCallback (for functions)."
            },
            {
                q: "React.memo — what does it do?",
                a: "<code>const MyComp = React.memo(Component)</code> — wraps component to <b>skip re-render if props haven't changed</b> (shallow comparison).<br>Does NOT help if: parent passes new object/array/function reference each render (use useMemo/useCallback for those props).<br>Use for: pure components that render often with same props."
            },
            {
                q: "What is code splitting and lazy loading in React?",
                a: "<code>const Page = React.lazy(() => import('./Page'))</code> — <b>loads component bundle only when needed</b>, not on initial load. Reduces initial bundle size.<br>Wrap with <code>&lt;Suspense fallback={&lt;Loading/&gt;}&gt;</code> to show placeholder while loading.<br>Great for: Route-based splitting, modal components, below-fold content."
            },
            {
                q: "How does React Router work?",
                a: "React Router v6: <code>&lt;BrowserRouter&gt;</code> wraps app. <code>&lt;Routes&gt;</code> contains all <code>&lt;Route path='' element={}&gt;</code>.<br>Navigation: <code>&lt;Link to=''&gt;</code> or <code>useNavigate()</code> hook.<br>Params: <code>&lt;Route path='/user/:id'&gt;</code> → accessed via <code>useParams()</code>.<br>Does NOT reload the page — updates URL and renders matching component."
            },
            {
                q: "What is reconciliation? How does React's diffing work?",
                a: "Reconciliation = process of determining what changed in VDOM and updating real DOM minimally.<br>React's diffing rules:<br>1. Different element type → destroy and rebuild entire subtree<br>2. Same type → update attributes only<br>3. Lists → use keys to match old and new items efficiently<br>Makes React O(n) instead of O(n³) for tree comparison."
            }
        ]
    }
];

// ── PROJECT EXPLANATION TEMPLATES ───────────────────────────
const PROJECTS = [
    {
        title: "How to Explain ANY Project (STAR Framework)",
        icon: "⭐",
        steps: [
            { label: "Situation", hint: "What problem were you solving? Why did this project exist?", example: "Students at my college had no centralized platform to track events and registrations — everything was manual via WhatsApp." },
            { label: "Task", hint: "What was YOUR specific role/responsibility?", example: "I was the frontend developer responsible for the user dashboard, event filtering, and registration flow." },
            { label: "Action", hint: "What EXACTLY did you build? Technologies? Challenges overcome?", example: "Built with React + Hooks for state management, integrated REST APIs, implemented JWT authentication, and added real-time filter. Faced CORS issue — resolved it by configuring the Express middleware correctly." },
            { label: "Result", hint: "What was the outcome? Numbers if possible.", example: "Deployed to Cloudflare Pages. Used by 200+ students during the college's annual fest. Reduced registration errors by eliminating manual process." }
        ],
        tips: [
            "Always mention the TECH STACK clearly",
            "Mention ONE specific challenge and how you solved it",
            "Have your GitHub link ready — show it on your phone",
            "Practice explaining it in 90 seconds and in 3 minutes",
            "Know every line of code in your project — they WILL ask deep questions"
        ]
    },
    {
        title: "Common Project Interview Questions",
        icon: "❓",
        qas: [
            { q: "Why did you choose this tech stack?", a: "React for component reusability and fast UI updates. Node.js for non-blocking I/O perfect for API-heavy apps. MongoDB for flexible schema during early development." },
            { q: "What was the most difficult bug you solved?", a: "Prepare one REAL story. Format: What the bug was → How you debugged → Root cause → Fix → What you learned." },
            { q: "How would you scale this to 1 million users?", a: "Add load balancer, CDN for static assets, DB indexing, caching with Redis, horizontal scaling of app servers, database read replicas." },
            { q: "What would you do differently if you could start over?", a: "Shows maturity. Example: 'I'd plan the database schema more carefully upfront and write unit tests from day one instead of adding them later.'" },
            { q: "What is the most complex feature you built?", a: "Pick something that showcases your skills. Explain the technical decisions, tradeoffs, and why you solved it that way." }
        ]
    }
];

// ── JOB STRATEGY (2025 Reality) ─────────────────────────────
const JOB_TIPS = [
    {
        category: "Resume", icon: "📄",
        tips: [
            "Keep it to 1 page — recruiters scan for 6 seconds",
            "ATS-friendly: simple format, standard fonts, no tables/columns",
            "Add metrics: 'Reduced load time by 40%' beats 'Improved performance'",
            "List tech stack FIRST in project descriptions",
            "Include GitHub link — keep your repos clean and READMEs polished",
            "Skills section: DSA, React, JavaScript, Java/Python, SQL, Git"
        ]
    },
    {
        category: "Application Strategy", icon: "🎯",
        tips: [
            "Apply to 20+ companies daily on LinkedIn/Naukri — volume is the game",
            "Message hiring managers directly on LinkedIn after applying",
            "Use referrals: LinkedIn → find employees at target company → politely ask",
            "Tier your list: Dream (5), Target (15), Safety (10) companies",
            "Apply to startups too — they value React/full-stack more than service cos",
            "Use LinkedIn Easy Apply but also fill the company's own form — shows initiative"
        ]
    },
    {
        category: "What Companies Actually Test (2025)", icon: "🏢",
        tips: [
            "Infosys L3: Online test (aptitude + 2 coding), then technical + HR. Focus: Easy-Medium DSA",
            "IBM: Online assessment (reasoning + coding), panel interview. Focus: DSA + project discussion",
            "Accenture: Communication test + coding + HR. Focus: Basic DSA + clear English communication",
            "Startups: Direct technical interview + React/JS assignments. Focus: Practical coding skill",
            "Service cos: They use HackerRank — practice platform specifically",
            "Product cos: LeetCode Medium-Hard, System Design, DSA from scratch"
        ]
    },
    {
        category: "Smart Preparation Rules", icon: "🧠",
        tips: [
            "2 hours daily beats 14 hours on weekends — consistency is everything",
            "After solving a problem: can you explain the approach in plain English?",
            "Record yourself answering HR questions — watch it back (painful but effective)",
            "Do mock interviews with friends or on Pramp.com every weekend",
            "Know your projects better than anything — most technicals are project-driven",
            "LinkedIn green mode: update profile, post once/week (learning updates get views)"
        ]
    }
];
