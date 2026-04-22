import { SessionSearch, SessionProxy } from "../Proxy/SessionProxy(proxy)";
import { Factory, ContentType, Content } from "../Factory/Content(factory)";
import {
  ListeningContent,
  SpeakingContent,
  ReadingContent,
  ComplementType,
} from "../Decorator/CustomContent(decorator)";
import {
  AutoCorrection,
  TeacherCorrection,
  CorrectionStrategy,
} from "../Strategy/Correction(strategy)";

class TeacherUpdates {
  private studentsObservers: Observer[] = [];
  private strategy: CorrectionStrategy = new TeacherCorrection();

  public addObserver(observer: Observer): void {
    this.studentsObservers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.studentsObservers = this.studentsObservers.filter(
      (obs) => obs !== observer,
    );
  }

  public notifyObservers(activity: Content) {
    this.studentsObservers.forEach((observer) => {
      observer.update(this, activity);
    });
  }

  public setCorrectionStrategy(strategy: CorrectionStrategy) {
    this.strategy = strategy;
  }

  public correct(activity: Content) {
    this.strategy.correct(activity);
  }
}

export class Teacher extends TeacherUpdates {
  private name: string | null = null;

  setName(name: string) {
    this.name = name;
  }

  newActivity(type: ContentType) {
    const search = new SessionProxy(new SessionSearch());
    const session = search.getSession(this.name);
    console.log("Session confirmed! User:", session.user);

    const activity = Factory.createContent(type);
    this.notifyObservers(activity);
  }

  newCustomActivity(baseType: ContentType, complementTypes: ComplementType[]) {
    const search = new SessionProxy(new SessionSearch());
    const session = search.getSession(this.name);
    console.log("Session confirmed! User:", session.user);

    let activity = Factory.createContent(baseType);

    complementTypes.forEach((type) => {
      switch (type) {
        case "listening":
          activity = new ListeningContent(activity);
          break;
        case "speaking":
          activity = new SpeakingContent(activity);
          break;
        case "reading":
          activity = new ReadingContent(activity);
          break;
        default:
          console.log("There isn't this type complement:", type);
          break;
      }
    });
    this.notifyObservers(activity);
  }
}

interface Observer {
  update(subject: TeacherUpdates, activity: Content): void;
}

export class Student implements Observer {
  constructor(private name: string) {}

  public update(subject: TeacherUpdates, activity: Content): void {
    console.log(`Student ${this.name} received ${activity.getContent()}`);
    activity.play();
    console.log(`Student ${this.name} finished ${activity.getContent()}`);

    subject.setCorrectionStrategy(new TeacherCorrection());
    subject.correct(activity);

    subject.setCorrectionStrategy(new AutoCorrection());
    subject.correct(activity);
  }
}
