import { Content, ExercisesLesson } from "./Content(factory)";

export class ExerciseAdaptor implements Content {
  constructor(private exercises: ExercisesLesson) {}

  play(): void {
    this.exercises.start();
  }
}
