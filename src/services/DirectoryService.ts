import DirectoryModel from "@/models/DirectoryModel";

export default class DirectoryService {
  static server: DirectoryModel[] = [];

  public static getAllDocument(): DirectoryModel[] {
    if (this.server.length <= 0) {
      this.server.push(
        new DirectoryModel(Math.random(), "Collection", [], true)
      );
    }

    return this.server;
  }

  public static saveNewDocument(
    collection: DirectoryModel,
    newDirectory: DirectoryModel
  ): void {
    const indexOf = this.server.indexOf(collection);
    this.server[indexOf].children.push(newDirectory);
  }
}
