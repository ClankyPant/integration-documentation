export default class DirectoryModel {
  id: number;
  name: string;
  children: Array<DirectoryModel>;
  file: boolean;

  constructor(id: number, name: string, children: Array<DirectoryModel>, file:boolean) {
    this.id = id;
    this.name = name;
    this.file = file;
    this.children = children;
  }
}
