export class UserSession {
  private constructor() {}

  private static instance: UserSession | null = null;

  public static getInstance(): UserSession {
    if (!this.instance) this.instance = new UserSession();
    return this.instance;
  }
}
