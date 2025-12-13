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
  // SECTION 1: LEARN LANGUAGE (The Roadmap)
  // Visible on Master & Iron 1000
  // ==========================================

  // 1. INTRO
  {
    id: "cpp-intro-setup",
    title: "1. Intro to C++ & Setup",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://code.visualstudio.com/docs/languages/cpp",
    isSilicon100: false,
    isIron1000: true,
  },
  // 2. DATA TYPES
  {
    id: "cpp-datatypes",
    title: "2. Data Types & Variables",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/cpp-input-and-output/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  // 3. OPERATORS
  {
    id: "cpp-operators",
    title: "3. Operators (Math & Logic)",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/",
    isSilicon100: false,
    isIron1000: true,
  },
  // 4. CONDITIONS
  {
    id: "cpp-conditionals",
    title: "4. Conditional Statements",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-conditional-if-else/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  // 5. LOOPS
  {
    id: "cpp-loops",
    title: "5. Loops (For, While)",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-for-loop/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  // 6. FUNCTIONS
  {
    id: "cpp-functions",
    title: "6. Functions",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-functions/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  // 7. ARRAYS
  {
    id: "cpp-arrays",
    title: "7. Arrays",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/arrays-introduction/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  // 8. STRINGS
  {
    id: "cpp-strings",
    title: "8. Strings",
    difficulty: "Easy",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-strings/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  // 9. POINTERS
  {
    id: "cpp-pointers",
    title: "9. Pointers & References",
    difficulty: "Medium",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-pointer/problem",
    isSilicon100: false, // Important for everyone
    isIron1000: true,
  },
  // 10. STRUCTS
  {
    id: "cpp-structures",
    title: "10. Structures",
    difficulty: "Medium",
    topic: "Learn Language",
    link: "https://www.hackerrank.com/challenges/c-tutorial-struct/problem",
    isSilicon100: false,
    isIron1000: true,
  },
  // 11. BITWISE
  {
    id: "cpp-bitwise",
    title: "11. Bitwise Operations",
    difficulty: "Medium",
    topic: "Learn Language",
    link: "https://leetcode.com/problems/number-of-1-bits/",
    isSilicon100: false,
    isIron1000: true,
  },
  // 12. BIG O
  {
    id: "cpp-big-o",
    title: "12. Time Complexity (Big O)",
    difficulty: "Medium",
    topic: "Learn Language",
    link: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/",
    isSilicon100: false,
    isIron1000: true,
  },

  /* // ==========================================
  // HIDDEN UPDATE: IRON GRIND (SECTOR 0)
  // Uncomment this section to enable The Iron 1000
  // ==========================================
  
  {
    id: "cf-say-hello",
    title: "A. Say Hello With C++",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/A",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-basic-data-types",
    title: "B. Basic Data Types",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/B",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-simple-calculator",
    title: "C. Simple Calculator",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/C",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-difference",
    title: "D. Difference",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/D",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-area-of-circle",
    title: "E. Area of a Circle",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/E",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-digits-summation",
    title: "F. Digits Summation",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/F",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-summation-1-to-n",
    title: "G. Summation from 1 to N",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/G",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-two-numbers",
    title: "H. Two Numbers",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/H",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-welcome-conditions",
    title: "I. Welcome for you with Conditions",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/I",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-multiples",
    title: "J. Multiples",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/J",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-max-min",
    title: "K. Max and Min",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-the-brothers",
    title: "L. The Brothers",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/L",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-capital-small-digit",
    title: "M. Capital or Small or Digit",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/M",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-char",
    title: "N. Char",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/N",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-calculator",
    title: "O. Calculator",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/O",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-first-digit",
    title: "P. First Digit!",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/P",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-coordinates",
    title: "Q. Coordinates of a Point",
    difficulty: "Medium",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/Q",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-age-in-days",
    title: "R. Age in Days",
    difficulty: "Medium",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/R",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-interval",
    title: "S. Interval",
    difficulty: "Medium",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/S",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-sort-numbers",
    title: "T. Sort Numbers",
    difficulty: "Medium",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/T",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-float-int",
    title: "U. Float or Int",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/U",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-comparison",
    title: "V. Comparison",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/V",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-math-expression",
    title: "W. Mathematical Expression",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/W",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-two-intervals",
    title: "X. Two Intervals",
    difficulty: "Medium",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/X",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-last-two-digits",
    title: "Y. The Last 2 Digits",
    difficulty: "Easy",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/Y",
    isSilicon100: false,
    isIron1000: true,
  },
  {
    id: "cf-hard-compare",
    title: "Z. Hard Compare",
    difficulty: "Hard",
    topic: "Sector 0: The Forge",
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/Z",
    isSilicon100: false,
    isIron1000: true,
  },
  */

  /*
  // ==========================================
  // HIDDEN UPDATE: THE ARENA (CP)
  // Uncomment this section to enable Competitive Programming
  // ==========================================

  {
    id: "cp-binary-exponentiation",
    title: "Binary Exponentiation (Power in log N)",
    difficulty: "Medium",
    topic: "CP: Fundamentals",
    link: "https://cp-algorithms.com/algebra/binary-exp.html",
    isSilicon100: false,
    isCP: true,
  },
  {
    id: "cp-euclidean-gcd",
    title: "Euclidean Algorithm (GCD)",
    difficulty: "Easy",
    topic: "CP: Fundamentals",
    link: "https://cp-algorithms.com/algebra/euclid-algorithm.html",
    isSilicon100: false,
    isCP: true,
  },
  {
    id: "cp-extended-euclidean",
    title: "Extended Euclidean Algorithm",
    difficulty: "Medium",
    topic: "CP: Fundamentals",
    link: "https://cp-algorithms.com/algebra/extended-euclid-algorithm.html",
    isSilicon100: false,
    isCP: true,
  },
  {
    id: "cp-linear-diophantine",
    title: "Linear Diophantine Equations",
    difficulty: "Medium",
    topic: "CP: Fundamentals",
    link: "https://cp-algorithms.com/algebra/linear-diophantine-equation.html",
    isSilicon100: false,
    isCP: true,
  },
  {
    id: "cp-fibonacci",
    title: "Fibonacci Numbers (Fast Doubling)",
    difficulty: "Medium",
    topic: "CP: Fundamentals",
    link: "https://cp-algorithms.com/algebra/fibonacci-numbers.html",
    isSilicon100: false,
    isCP: true,
  },
  */
];