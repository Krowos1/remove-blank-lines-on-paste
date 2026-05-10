# Remove Blank Lines on Paste
Remove Blank Lines on Paste is a simple Obsidian plugin that automatically removes empty lines from pasted text.

# Why this plugin exists
Sometimes text copied from websites, PDFs, chats, AI tools, or other editors is pasted into Obsidian with extra blank lines.
This plugin helps keep pasted Markdown text clean and compact.

Features
- Automatically cleans pasted text
- Removes all empty lines from pasted content
- Works directly inside the Obsidian Markdown editor
- No settings required
- Lightweight and simple

# Usage
- Install the plugin.
- Enable it in Obsidian settings.
- Paste text into a Markdown note.
- Empty lines will be removed automatically.

# Example

If you paste this:

First line

Second line

Third line

The plugin will insert this:

First line
Second line
Third line

# Important note

This plugin uses strict mode.
It removes all empty lines from pasted text, including empty lines between normal paragraphs.

For example:

First paragraph.

Second paragraph.

Will become:

First paragraph.
Second paragraph.

# Installation

- Download or clone this repository.
- Copy the plugin folder into your Obsidian plugins directory:
-YourVault/.obsidian/plugins/remove-blank-lines-on-paste/

Make sure the folder contains:

manifest.json
main.js
versions.json

- Open Obsidian.
- Go to Settings → Community plugins.
- Enable the plugin.
