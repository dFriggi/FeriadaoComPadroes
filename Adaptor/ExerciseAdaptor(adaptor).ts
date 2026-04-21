import { Content, ExercisesLesson } from "../Factory/Content(factory)";

export class ExerciseAdaptor implements Content {
  constructor(private exercises: ExercisesLesson) {}

  play(): void {
    this.exercises.start();
  }
}
