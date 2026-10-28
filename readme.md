# Data Structures & Algorithms

A practical learning repository for implementing fundamental data structures and algorithms in **TypeScript**, with automated tests using **Vitest**.

The goal is to understand how these structures work internally, analyze their time and space complexity, and build a solid foundation in problem-solving and software engineering.

## Tech Stack

- **Language:** TypeScript
- **Testing:** Vitest
- **Runtime:** Node.js

## Topics

### Data Structures

- [x] Arrays
- [x] Singly and doubly linked lists
- [x] Stack
- [x] Queue
- [x] Deque
- [ ] Hash map
- [ ] Hash set
- [ ] Trees
- [ ] Heap
- [ ] Graphs
- [ ] Trie
- [ ] Union-Find

### Algorithms

- [ ] Binary search
- [ ] Sorting algorithms
- [ ] Recursion and backtracking
- [ ] Tree traversal
- [ ] Graph traversal
- [ ] Shortest-path algorithms

_Progress reflects completed implementations and tests, not just created folders._

## Project Structure

```text
src/
├── 01-arrays/
├── 02-linked-list/
├── 03-stack/
├── 04-queue/
├── 05-deque/
├── 06-hash-map/
└── ...

tests/
├── array.test.ts
├── linked-list.test.ts
├── stack.test.ts
├── queue.test.ts
├── deque.test.ts
└── hash-map.test.ts
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx vitest run
```

Run tests in watch mode:

```bash
npx vitest
```

Run a specific test file:

```bash
npx vitest run tests/array.test.ts
```

## Learning Approach

Each implementation aims to cover:

- Core operations and edge cases
- Appropriate use of TypeScript generics
- Time and space complexity
- Automated tests for correctness
- Common implementation mistakes and their trade-offs

The focus is on understanding the fundamentals and writing correct, maintainable implementations before moving to more advanced topics.

## Goals

- Strengthen data structures and algorithms fundamentals.
- Develop a deeper understanding of algorithmic complexity.
- Improve TypeScript problem-solving skills.
- Build a structured, testable reference for future learning.

---

**Status:** Work in progress.
