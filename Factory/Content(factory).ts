import { ExerciseAdaptor } from "../Adaptor/ExerciseAdaptor(adaptor)";

type ContentType = "video" | "quiz" | "test" | "exercise";

export interface Content {
  play(): void;
}

class VideoLesson implements Content {
  play(): void {
    console.log("Playing video lesson!");
  }
}

class QuizLesson implements Content {
  play(): void {
    console.log("Opening Quiz!");
  }
}

class TestLesson implements Content {
  play(): void {
    console.log("Opening your test, good luck!");
  }
}

export class ExercisesLesson {
  //needs the adaptor
  private exercises: number[] = [1, 2, 3, 4, 5];

  public start() {
    this.exercises.forEach((exercise) =>
      console.log(`Exercise ${exercise} finished!`),
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
