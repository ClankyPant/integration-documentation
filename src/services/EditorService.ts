import EditorJS from "@editorjs/editorjs";
const EditorTable = require("@editorjs/table");

export default class EditorService {
  public static getEditor(): EditorJS {
    return new EditorJS({ holder: "editorJs", tools: { table: EditorTable } });
  }
}
