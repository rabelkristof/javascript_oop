import questions from "./data.json" with { type: "json" };
import { QuizManager } from "./manager";

const quizManager = new QuizManager(questions);
