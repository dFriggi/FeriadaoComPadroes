import { Content } from "../Factory/Content(factory)";

export interface CorrectionStrategy {
  correct(activity: Content): void;
}

export class AutoCorrection implements CorrectionStrategy {
  correct(activity: Content) {
    console.log(
      `Execise ${activity.getContent()} was corrected by AutoCorrection`,
    );
  }
}

export class TeacherCorrection implements CorrectionStrategy {
  correct(activity: Content) {
    console.log(
      `Execise ${activity.getContent()} was corrected by TeacherCorrection`,
    );
  }
}
