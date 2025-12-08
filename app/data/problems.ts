// app/data/problems.ts

export type Problem = {
  id: string;
  title: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  link: string; // The Universal Link
  videoUrl?: string; // Optional: Your Silicon Stories solution
  isSilicon100?: boolean;
};

export const problems: Problem[] = [
  // ARRAYS
  {
    id: "two-sum",
    title: "Two Sum",
    topic: "Arrays",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/two-sum/",
    videoUrl: "https://youtube.com/your-solution-link",
    isSilicon100: true,
  },
  {
    id: "water-melon",
    title: "Watermelon (4A)",
    topic: "Arrays",
    difficulty: "Easy",
    link: "https://codeforces.com/problemset/problem/4/A",
    isSilicon100: true,
  },
  {
    id: "kadane",
    title: "Maximum Subarray Sum",
    topic: "Arrays",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/maximum-subarray/",
  },
  // TWO POINTERS
  {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    topic: "Two Pointers",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/valid-palindrome/",
    isSilicon100: true,

  },
];