const { Plugin, MarkdownView, Notice } = require("obsidian");

module.exports = class RemoveBlankLinesOnPastePlugin extends Plugin {
	async onload() {
		this.registerDomEvent(
			document,
			"paste",
			(event) => {
				const clipboardData = event.clipboardData;

				if (!clipboardData) {
					return;
				}

				const originalText = clipboardData.getData("text/plain");

				if (!originalText) {
					return;
				}

				const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);

				if (!activeView) {
					return;
				}

				const editor = activeView.editor;

				if (!editor) {
					return;
				}

				const cleanedText = removeBlankLines(originalText);

				if (cleanedText === originalText) {
					return;
				}

				event.preventDefault();
				editor.replaceSelection(cleanedText);
			},
			true
		);

		new Notice("Remove Blank Lines on Paste: enabled");
	}

	onunload() {
		new Notice("Remove Blank Lines on Paste: disabled");
	}
};

function removeBlankLines(text) {
	return text
		.replace(/\r\n/g, "\n")
		.replace(/\r/g, "\n")
		.split("\n")
		.filter((line) => line.trim() !== "")
		.join("\n");
}