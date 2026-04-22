import { Teacher, Student } from "../Observer/TeacherNotification(observer)";
import { ContentType } from "../Factory/Content(factory)";
import { ComplementType } from "../Decorator/CustomContent(decorator)";

export class SystemFacade {
  private teacher: Teacher;

  constructor(teacherName: string, studentNames: string[]) {
    this.teacher = new Teacher();
    this.teacher.setName(teacherName);

    studentNames.forEach((name) => {
      this.teacher.addObserver(new Student(name));
    });
  }

  public startBasicLesson(type: ContentType) {
    console.log("--- Starting Basic Lesson ---");
    this.teacher.newActivity(type);
  }

  public startCustomLesson(
    baseType: ContentType,
    complements: ComplementType[],
  ) {
    console.log("--- Starting Custom Lesson ---");
    this.teacher.newCustomActivity(baseType, complements);
  }
}
