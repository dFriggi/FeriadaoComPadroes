import { ExerciseAdaptor } from "../Adaptor/ExerciseAdaptor(adaptor)";

export type ContentType = "video" | "quiz" | "test" | "exercise";

export interface Content {
  play(): void;
  getContent(): string;
}

export class VideoLesson implements Content {
  play(): void {
    console.log("Playing video lesson!");
  }

  getContent(): string {
    return "Video";
  }
}

export class QuizLesson implements Content {
  play(): void {
    console.log("Opening Quiz!");
  }

  getContent(): string {
    return "Quiz";
  }
}

export class TestLesson implements Content {
  play(): void {
    console.log("Opening your test, good luck!");
  }

  getContent(): string {
    return "Test";
  }
}

export class ExercisesLesson {
  //needs the adaptor
  private exercises: number[] = [1, 2, 3, 4, 5];

  public start() {
    this.exercises.forEach((exercise) =>
      console.log(`Opening exercise ${exercise}!`),
    );
  }
}

export class Factory {
  public static createContent(type: ContentType): Content {
    switch (type) {
      case "video":
        return new VideoLesson();
      case "quiz":
        return new QuizLesson();
      case "test":
        return new TestLesson();
      case "exercise":
        return new ExerciseAdaptor(new ExercisesLesson());
      default:
        throw new Error(`Invalid type of content: ${type}`);
    }
  }
}
