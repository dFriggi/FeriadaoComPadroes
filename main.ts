import { SystemFacade } from "./Facade/UserInterface(facade)";

const acessJoao = new SystemFacade("João", ["Davi", "Pedro", "Manuela"]);

acessJoao.startBasicLesson("video");
acessJoao.startCustomLesson("exercise", ["listening", "reading", "speaking"]);
