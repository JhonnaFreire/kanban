import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "📒 To do",
    task: [
      {
        id: uuidv4(),
        title: "Study Javascript",
      },
      {
        id: uuidv4(),
        title: "Go to the Gym",
      },
      {
        id: uuidv4(),
        title: "complete courses",
      },
      {
        id: uuidv4(),
        title: "Read books",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "🖋️ in progress",
    task: [
      {
        id: uuidv4(),
        title: "Javascript Course",
      },
      {
        id: uuidv4(),
        title: "React Course",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✅ Done",
    task: [
      {
        id: uuidv4(),
        title: "HTML course",
      },
    ],
  },
];

export default mockData;
