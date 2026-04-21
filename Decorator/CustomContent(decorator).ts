import { Factory, Content } from "../Factory/Content(factory)";

export type ComplementType = "listening" | "speaking" | "reading";

class ContentDecorator implements Content {
  constructor(private content: Content) {}

  public play(): void {
    return this.content.play();
  }

  public getContent(): string {
    return this.content.getContent();
  }
}

export class ListeningContent extends ContentDecorator {
  constructor(content: Content) {
    super(content);
  }

  public play() {
    super.play();
    console.log("Practicing listening!");
  }

  public getContent(): string {
    return super.getContent() + ", Listening";
  }
}

export class SpeakingContent extends ContentDecorator {
  constructor(content: Content) {
    super(content);
  }

  public play() {
    super.play();
    console.log("Practicing speaking!");
  }

  public getContent(): string {
    return super.getContent() + ", Speaking";
  }
}

export class ReadingContent extends ContentDecorator {
  constructor(content: Content) {
    super(content);
  }

  public play() {
    super.play();
    console.log("Practicing reading!");
  }

  public getContent(): string {
    return super.getContent() + ", Reading";
  }
}
