import { UserSession } from "../Singleton/UserSession(singleton)";

interface ConfirmSession {
  getSession(name: string | null): UserSession;
}

export class SessionSearch implements ConfirmSession {
  public getSession(name: string | null): UserSession {
    const session = UserSession.getSession();

    console.log("Searching/Updating session...");

    if (!session.user || session.user !== name) session.setSession(name);
    return session;
  }
}

export class SessionProxy implements ConfirmSession {
  private cacheUser: string | null = null;
  constructor(private search: ConfirmSession) {}

  getSession(name: string | null): UserSession {
    const session = UserSession.getSession();

    if (this.cacheUser === name) {
      console.log("Returning existing session (cache)");
      return session;
    }

    this.cacheUser = name;
    return this.search.getSession(name);
  }
}
