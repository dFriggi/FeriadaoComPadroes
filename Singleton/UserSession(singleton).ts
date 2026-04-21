export class UserSession {
  private constructor() {}

  private static instance: UserSession | null = null;

  private sessionUser: string | null = null;

  public static getSession(): UserSession {
    if (!this.instance) this.instance = new UserSession();
    return this.instance;
  }

  public setSession(name: string | null): void {
    if (name) this.sessionUser = name;
  }

  public get user(): string | null {
    return this.sessionUser;
  }
}
