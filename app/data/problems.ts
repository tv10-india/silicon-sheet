export type Problem = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
  link: string;
  videoUrl?: string;
  isSilicon100: boolean;
  isIron1000?: boolean;
  isCP?: boolean;
};

export const problems: Problem[] = [
  // ==========================================
  // PHASE 1: THE FOUNDATION (Language & Logic)
  // ==========================================

  // --- TOPIC: LEARN LANGUAGE ---
  {
    id: "cpp-intro-setup",
    title: "1. Intro to C++ & Setup",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://code.visualstudio.com/docs/languages/cpp",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-datatypes",
    title: "2. Data Types & Variables",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/cpp-input-and-output/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-operators",
    title: "3. Operators (Math & Logic)",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-conditionals",
    title: "4. Conditional Statements",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-conditional-if-else/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-loops",
    title: "5. Loops (For, While)",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-for-loop/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-functions",
    title: "6. Functions",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-functions/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-arrays",
    title: "7. Arrays",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/arrays-introduction/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-strings",
    title: "8. Strings",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-strings/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-pointers",
    title: "9. Pointers & References",
    difficulty: "Medium",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-pointer/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-structures",
    title: "10. Structures",
    difficulty: "Medium",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-struct/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-bitwise",
    title: "11. Bitwise Operations",
    difficulty: "Medium",
    topic: "Learn Language",
    link: "https://leetcode.com/problems/number-of-1-bits/",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cpp-big-o",
    title: "12. Time Complexity (Big O)",
    difficulty: "Medium",
    topic: "Learn Language",
    link: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/",
    isSilicon100: false,
    isIron1000: true,
  },

  // ==========================================
  // PHASE 2: CORE TOOLS (Math & Bits)
  // ==========================================

  // --- TOPIC: MATH & NUMBER THEORY ---
  {
    id: "math-gcd",
    title: "Find Greatest Common Divisor (GCD)",
    difficulty: "Easy",
    topic: "Math & Number Theory",
    link: "https://leetcode.com/problems/find-greatest-common-divisor-of-array/",
    isSilicon100: true,
    isIron1000: true,
  },
  {
    id: "math-count-primes",
    title: "Count Primes (Sieve of Eratosthenes)",
    difficulty: "Medium",
    topic: "Math & Number Theory",
    link: "https://leetcode.com/problems/count-primes/",
    isSilicon100: true,
    isIron1000: false,
  },
  {
    id: "math-pow",
    title: "Pow(x, n) - Binary Exponentiation",
    difficulty: "Medium",
    topic: "Math & Number Theory",
    link: "https://leetcode.com/problems/powx-n/",
    isSilicon100: true,
    isIron1000: false,
  },
  {
    id: "math-fibonacci",
    title: "Fibonacci Number",
    difficulty: "Easy",
    topic: "Math & Number Theory",
    link: "https://leetcode.com/problems/fibonacci-number/",
    isSilicon100: true,
    isIron1000: true,
  },
  {
    id: "math-factorial-zeroes",
    title: "Factorial Trailing Zeroes",
    difficulty: "Medium",
    topic: "Math & Number Theory",
    link: "https://leetcode.com/problems/factorial-trailing-zeroes/",
    isSilicon100: true,
    isIron1000: false,
  },

  // --- TOPIC: BIT MANIPULATION ---
  {
    id: "bit-gray-code",
    title: "Gray Code",
    difficulty: "Medium",
    topic: "Bit Manipulation",
    link: "https://leetcode.com/problems/gray-code/",
    isSilicon100: false,
    isIron1000: false,
  },
  {
    id: "bit-single-number",
    title: "Single Number (XOR)",
    difficulty: "Easy",
    topic: "Bit Manipulation",
    link: "https://leetcode.com/problems/single-number/",
    isSilicon100: true,
    isIron1000: true,
  },

  // ==========================================
  // PHASE 3: ALGORITHMIC PATTERNS (The How)
  // ==========================================

  // --- TOPIC: TWO POINTERS ---
  {
    id: "two-pointers-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    topic: "Two Pointers",
    link: "https://leetcode.com/problems/valid-palindrome/",
    isSilicon100: true,
    isIron1000: true,
  },
  {
    id: "two-pointers-container",
    title: "Container With Most Water",
    difficulty: "Medium",
    topic: "Two Pointers",
    link: "https://leetcode.com/problems/container-with-most-water/",
    isSilicon100: true,
    isIron1000: false,
  },

  // --- TOPIC: SLIDING WINDOW ---
  {
    id: "sliding-window-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    topic: "Sliding Window",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    isSilicon100: true,
    isIron1000: true,
  },
  {
    id: "sliding-window-substring",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "Sliding Window",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    isSilicon100: true,
    isIron1000: false,
  },

  // --- TOPIC: BINARY SEARCH ---
  {
    id: "binary-search-basic",
    title: "Binary Search (Standard)",
    difficulty: "Easy",
    topic: "Binary Search",
    link: "https://leetcode.com/problems/binary-search/",
    isSilicon100: true,
    isIron1000: true,
  },
  {
    id: "binary-search-rotated",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    topic: "Binary Search",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    isSilicon100: true,
    isIron1000: false,
  },

  // --- TOPIC: PREFIX SUM ---
  {
    id: "prefix-sum-running",
    title: "Running Sum of 1d Array",
    difficulty: "Easy",
    topic: "Prefix Sum",
    link: "https://leetcode.com/problems/running-sum-of-1d-array/",
    isSilicon100: false,
    isIron1000: true,
  },

  // ==========================================
  // PHASE 4: LINEAR DATA STRUCTURES
  // ==========================================

  // --- TOPIC: STRINGS ---
  {
    id: "string-longest-palindrome",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    topic: "Strings",
    link: "https://leetcode.com/problems/longest-palindromic-substring/",
    isSilicon100: true,
    isIron1000: false,
  },
  {
    id: "string-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    topic: "Strings",
    link: "https://leetcode.com/problems/valid-anagram/",
    isSilicon100: true,
    isIron1000: true,
  },

  // --- TOPIC: LINKED LIST ---
  {
    id: "ll-reverse",
    title: "Reverse Linked List",
    difficulty: "Easy",
    topic: "Linked List",
    link: "https://leetcode.com/problems/reverse-linked-list/",
    isSilicon100: true,
    isIron1000: true,
  },
  {
    id: "ll-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    topic: "Linked List",
    link: "https://leetcode.com/problems/linked-list-cycle/",
    isSilicon100: true,
    isIron1000: true,
  },

  // --- TOPIC: HASHING ---
  {
    id: "hashing-two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    topic: "Hashing",
    link: "https://leetcode.com/problems/two-sum/",
    isSilicon100: true,
    isIron1000: true,
  },

  // --- TOPIC: STACK ---
  {
    id: "stack-valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    topic: "Stack",
    link: "https://leetcode.com/problems/valid-parentheses/",
    isSilicon100: true,
    isIron1000: true,
  },

  // --- TOPIC: QUEUE ---
  {
    id: "queue-stack-implementation",
    title: "Implement Queue using Stacks",
    difficulty: "Easy",
    topic: "Queue",
    link: "https://leetcode.com/problems/implement-queue-using-stacks/",
    isSilicon100: true,
    isIron1000: true,
  },

  // ==========================================
  // PHASE 5: RECURSION & BACKTRACKING
  // ==========================================

  // --- TOPIC: RECURSION ---
  {
    id: "recursion-climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    topic: "Recursion",
    link: "https://leetcode.com/problems/climbing-stairs/",
    isSilicon100: true,
    isIron1000: true,
  },

  // --- TOPIC: BACKTRACKING ---
  {
    id: "backtracking-permutations",
    title: "Permutations",
    difficulty: "Medium",
    topic: "Backtracking",
    link: "https://leetcode.com/problems/permutations/",
    isSilicon100: true,
    isIron1000: false,
  },
  {
    id: "backtracking-subsets",
    title: "Subsets",
    difficulty: "Medium",
    topic: "Backtracking",
    link: "https://leetcode.com/problems/subsets/",
    isSilicon100: true,
    isIron1000: false,
  },

  // ==========================================
  // PHASE 6: NON-LINEAR DATA STRUCTURES
  // ==========================================

  // --- TOPIC: BINARY TREES ---
  {
    id: "tree-invert",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    topic: "Binary Trees",
    link: "https://leetcode.com/problems/invert-binary-tree/",
    isSilicon100: true,
    isIron1000: true,
  },
  {
    id: "tree-max-depth",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topic: "Binary Trees",
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    isSilicon100: true,
    isIron1000: true,
  },

  // --- TOPIC: BINARY SEARCH TREE (BST) ---
  {
    id: "bst-validate",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    topic: "Binary Search Tree",
    link: "https://leetcode.com/problems/validate-binary-search-tree/",
    isSilicon100: true,
    isIron1000: false,
  },

  // --- TOPIC: GRAPHS ---
  {
    id: "graph-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    topic: "Graphs",
    link: "https://leetcode.com/problems/number-of-islands/",
    isSilicon100: true,
    isIron1000: false,
  },
  {
    id: "graph-clone",
    title: "Clone Graph",
    difficulty: "Medium",
    topic: "Graphs",
    link: "https://leetcode.com/problems/clone-graph/",
    isSilicon100: true,
    isIron1000: false,
  },

  // ==========================================
  // PHASE 7: OPTIMIZATION ALGORITHMS
  // ==========================================

  // --- TOPIC: DYNAMIC PROGRAMMING ---
  {
    id: "dp-house-robber",
    title: "House Robber",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    link: "https://leetcode.com/problems/house-robber/",
    isSilicon100: true,
    isIron1000: false,
  },
  {
    id: "dp-coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    link: "https://leetcode.com/problems/coin-change/",
    isSilicon100: true,
    isIron1000: false,
  },

  // --- TOPIC: GREEDY ---
  {
    id: "greedy-jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    topic: "Greedy",
    link: "https://leetcode.com/problems/jump-game/",
    isSilicon100: true,
    isIron1000: false,
  },

  // ==========================================
  // PHASE 8: SPECIAL DATA STRUCTURES
  // ==========================================

  // --- TOPIC: TRIES ---
  {
    id: "trie-implement",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Medium",
    topic: "Tries",
    link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    isSilicon100: true,
    isIron1000: false,
  },

  // --- TOPIC: SEGMENT TREE ---
  {
    id: "segment-tree-range-sum",
    title: "Range Sum Query - Mutable",
    difficulty: "Medium",
    topic: "Segment Tree",
    link: "https://leetcode.com/problems/range-sum-query-mutable/",
    isSilicon100: false,
    isIron1000: false,
  },
];