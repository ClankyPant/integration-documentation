import DirectoryModel from "@/models/DirectoryModel";

export default class DirectoryService {
  static server: DirectoryModel[] = [];

  public static getAllDocument(): DirectoryModel[] {
    if (this.server.length <= 0) {
      const id = Math.random() * 100000000;
      const id2 = Math.random() * 100000000;
      this.server.push(
        new DirectoryModel(
          id | 0,
          "Collection",
          [new DirectoryModel(id2, "Documentation", [], false)],
          true
        )
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
