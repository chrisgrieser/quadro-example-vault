# Quadro: Example Vault
This is an example vault for [Quadro](https://github.com/chrisgrieser/obsidian-quadro), an Obsidian plugin that for conducting social-scientific qualitative data analysis (QDA).

Please visit the [documentation for Quadro](https://github.com/chrisgrieser/obsidian-quadro) for further information.

## Installation & Usage
1. [Download the vault](https://github.com/chrisgrieser/quadro-example-vault/releases/latest/download/quadro-example-vault.zip).
2. Open the directory `quadro-example-vault` as an Obsidian vault. ([If you are new to Obsidian, see the Obsidian Documentation on how to do that.](https://help.obsidian.md/Getting+started/Create+a+vault#Open+existing+folder))

## Content of this Example Vault
### Pre-Configured Plugin Setup
Pre-configured Obsidian settings, and a few Obsidian plugins useful for QDA are also installed:
- **Command Palette** (`cmd+p` or `ctrl+p`) includes a list of all Quadro commands at the top. There are also buttons to the far left for all Quadro commands, briefly hover over them to see what the buttons do.
- **Quadro** itself (configured to be auto-updated via the BRAT plugin)
- **Dataview**: The Data Analysis Plugin
- **Dynamic Highlights**: Highlight specific words throughout the vault. Useful to highlight keywords in the data. 
- **Hover Editor**: Useful to "peek" into existing files and make edits to them. Hover over a while holding `cmd` (macOS) or `ctrl` (Windows) to open a small hover window, where you can even make edits.
- **Another Quick Switcher**
	- Search for Code Files only via `alt+c`
	- Search for Extraction Files only via `alt+e`
	- Search for Data Files only via `alt+d`
- **File Recovery**: Configured to automatically create versioned backups of any file every 5 minutes. Accessible via `cmd+p` or `ctrl+p`.
- **Sortable**: Click on a Table Header to sort the table by that column.
- **Advanced URI**: A plugin needed for the [MarkDownload Browser Extension](https://chromewebstore.google.com/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi), which allows saving webpages into this vault via one click.

### Example Data
Example Data for demonstration purposes, all stored in the folder `Data`
- Two mock interviews with app developers for iOS and Android.
	- [[Mock Interview A (iOS developer)]]
	- [[Mock Interview B (Android developer)]]
- A few articles downloaded with the [MarkDownload Browser Extension](https://chromewebstore.google.com/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi
- The words "iOS" and "Android" are highlighted via the *Dynamic Highlights* plugin (as you can see here).

### Example Codings & Example Extractions
Example Codings and Extractions, in the folders `Codes` and `Extractions` respectively.
- The data was coded for [[app store]], [[WebApps]], and [[Compatibility]] issues.
- An illustrative [[Code Co-occurrence Example]] has been done for [[app store]] and [[WebApps]]
- A few extractions have been made on compatibility issues, and the results aggregated in a table: [[compatibility challenges (Aggregation)]]
