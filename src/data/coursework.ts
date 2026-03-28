export interface Course {
  code: string;
  name: string;
  minor?: 'math' | 'ecp';
}

export interface Semester {
  term: string;
  year: number;
  credits: number;
  projected?: boolean;
  courses: Course[];
}

export const coursework: Semester[] = [
  {
    term: 'Fall',
    year: 2026,
    credits: 18,
    projected: true,
    courses: [
      { code: 'CSE 30341', name: 'Operating System Principles' },
      { code: 'CSE 30342', name: 'Digital Integrated Circuits' },
      { code: 'CSE 30264', name: 'Computer Networks' },
      { code: 'EE 30132', name: 'Applied Embedded System Design' },
      { code: 'EE 30122', name: 'Systems Theory and Applications' },
      { code: 'MATH 30650', name: 'Differential Equations',  minor: 'math' },
    ],
  },
  {
    term: 'Spring',
    year: 2026,
    credits: 19,
    projected: false,
    courses: [
      { code: 'CSE 20289', name: 'System Programming' },
      { code: 'CSE 20222', name: 'Logic and Processor Design' },
      { code: 'CSE 30124', name: 'Introduction to Artifical Intelligence' },
      { code: 'EE 20221', name: 'Signals and Information Systems' },
      { code: 'EE 20231', name: 'Digital Design for Smart Interconnected Systems' },
      { code: 'EE 20241', name: 'Electronic Devices & Systems' },
    ],
  },
  {
    term: 'Fall',
    year: 2025,
    credits: 18,
    courses: [
      { code: 'CSE 20110', name: 'Discrete Mathematics', minor: 'math' },
      { code: 'CSE 20312', name: 'Data Structures' },
      { code: 'EE 20100', name: 'Introduction to ECE' },
      { code: 'EE 28499', name: 'Undergraduate Research' },
      { code: 'Math 20580', name: 'Linear Algebra & Differential Equations', minor: 'math' },
      { code: 'Phys 10320', name: 'Engineering Physics II: Electromagnetism' },
    ],
  },
  {
    term: 'Summer',
    year: 2025,
    credits: 6,
    courses: [
      { code: 'EG 44421', name: 'Integrated Engineering and Business Fundamentals'}, //, minor: 'ecp' 
      { code: 'EG 34001', name: 'Exploring Engineering Feats of London' },
    ],
  },
  {
    term: 'Spring',
    year: 2025,
    credits: 19,
    courses: [
      { code: 'CSE 20311', name: 'Fundamentals of Computing' },
      { code: 'EE 10200', name: 'Introduction to Embedded Systems' },
      { code: 'FYS 10102', name: 'Moreau First Year Experience' },
      { code: 'Math 10560', name: 'Calculus II' },
      { code: 'Phys 10310', name: 'Engineering: Phys I: Mechanics' },
      { code: 'RU 13186', name: 'Usem Literature: The Anti-Empire Empire: Russia, Center, and Periphery' },
    ],
  },
  {
    term: 'Fall',
    year: 2024,
    credits: 18,
    courses: [
      { code: 'CHEN 10171', name: 'Introduction to Chemical Principles' },
      { code: 'ECON 10010', name: 'Principles of Microeconomics'}, // , minor: 'ecp' 
      { code: 'EG 10117', name: 'Engineering Design' },
      { code: 'FYS 10101', name: 'Moreau First Year Experience' },
      { code: 'Math 10550', name: 'Calculus I' },
      { code: 'THEO 10001', name: 'Foundations of Theology: Biblical/Historical' },
    ],
  },
];

export const minorProgress = {
  // ecp: { current: 2, total: 5, name: 'Engineering Cooperate Practice Minor' },
  math: { current: 3, total: 5, name: 'Mathematics Minor' },
};

