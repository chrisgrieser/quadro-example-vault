# Quadro: Example Vault
This is an example vault for [Quadro](https://github.com/chrisgrieser/obsidian-quadro), an Obsidian plugin that for conducting social-scientific qualitative data analysis (QDA).

Please visit the [documentation for Quadro](https://github.com/chrisgrieser/obsidian-quadro) for detailed information on how to use *Quadro*.

## Table of Contents
- [[#Installing this Vault]]
- [[#Pre-Configured Plugin Setup]]
- [[#Demonstration of QDA with Quadro]]
	* [[#Example Data]]
	* [[#Example Codings]]
	* [[#Example Extractions]]
- [[#Using this vault for your own research]]
* [[#Download Webpages]]

## Installing this Vault
1. Make sure your Obsidian version is at least 1.5.8.
2. [Download this vault](https://github.com/chrisgrieser/quadro-example-vault/releases/latest/download/quadro-example-vault.zip).
3. Open the directory `quadro-example-vault` as an Obsidian vault. ([If you are new to Obsidian, see the Obsidian Documentation on how to do that.](https://help.obsidian.md/Getting+started/Create+a+vault#Open+existing+folder))

## Pre-Configured Plugin Setup
- **Quadro** itself: There are buttons to the far left for all Quadro commands. Briefly hover over them to see what each button does.
- **Command Palette** (`cmd+p` on macOS, `ctrl+p` on Windows): includes a list of all relevant commands for QDA at the top. 
- **Projects:** Analyze extractions in a dynamic spreadsheet, similar to Notion or Excel.
- **Another Quick Switcher**
	- Search for Code Files only via `alt+c`.
	- Search for Extraction Files only via `alt+e`.
	- Search for Data Files only via `alt+d`.
- **Properties View
	- View all properties ( = extraction dimensions) in the entire vault.
	- Left-click on them to search for them.
	- Right-click to rename dimensions globally.
	- Access via Command Palette or the "Box" Icon at the top left.
- **Multi-Properties:** In the file explorer, select multiple notes and click them to ==add/remove multiple properties== at once.
- **Semantic Canvas**: ==Visually explore and change relationships== between files (reflected as metadata). Ideal for Axial Coding.
- **Ollama:** Integrates Ollama, ==a locally running AI==. Can be used to summarize documents.
	- As a local AI model, no data leaves the machine, making it satisfying the privacy requirements of social research.
	- Requires the having installed the [Ollama App](https://ollama.com/).
- **Dynamic Highlights**: ==Highlight specific words== throughout the vault. Useful to highlight keywords in the data. 
	- In this example vault, the words "iOS" and "Android" are highlighted (as you can see here).
- **Supercharged Links:** ==Visually distinguish links== to different sorts of files:
	- Example link to a Code File (yellow): [[Compatibility]]
	- Example link to a Extraction File (green): [[app store problem 1]]
	- Example link to a Data File (document emoji): [[Verge Article A]]
	- The plugin also allows you to color different individual codes or extraction types differently. The types of linkes are defined via **Supercharged Links**, their appearance is configured with the **Style Settings** plugin, in their respective settings menu.
- **Hover Editor:** Hold `cmd` (macOS) or `ctrl` (Windows) and hover the mouse over a link to open a popup of the linked file, which you can modify.
- **Slurp**: Use `cmd+shift+s` (macOS) or `ctrl+shift+s` (Windows) to ==download webpages== as markdown files with metadata directly into this vault.
- **File Recovery**: Configured to automatically create versioned ==backups of any file every 5 minutes==. Accessible via the **Command Palette**.

## Demonstration of QDA with Quadro
### Example Data
A few data files for demonstration purposes, all stored in the folder `Data`
- Two mock interviews with app developers for iOS and Android.
	- [[Mock Interview A (iOS developer)]]
	- [[Mock Interview B (Android developer)]]
- A few articles downloaded with the [MarkDownload Browser Extension](https://chromewebstore.google.com/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi)
	- [[Verge Article A]]
	- [[Verge Article B]]
	- [[Verge Article C]]

### Example Codings
A few example codes can be found in the folder `Codes`.
- The data was coded for [[app store]], [[WebApps]], and [[Compatibility]] issues.
- An illustrative [[Example Code Co-occurrence]] has been done for [[app store]] and [[WebApps]]
- You can click at the Graph Button in the left sidebar (or `ctrl+g`/ `cmd+g`) to open the Graph View. It has been configured to display only Data Files and Code Files.
- Using the **Canvas** Plugin and the **Semantic Canvas** Plugin, relationships between codes can be explored. Here, it is used as an [[Axial Coding Example.canvas|Example for Axial Coding]].
 
### Example Extractions
 A few example extractions can be found in the folder `Extractions`.
- Some extractions have been made on compatibility issues, and the results aggregated in a spreadsheet. To view that table,  use **Command Palette** (`cmd+p` on macOS, `ctrl+p` on Windows): and search/select "Projects: Show projects".
- There is also an [[Example Search for Co-occurrent Extraction Dimensions]], extractions where two dimensions have a specific value.

## Using this vault for your own research
If you want to use this vault for your own project, you can just delete the content of the folders `Codes`, `Extractions`, `Analysis`, and `Data`. That way, only the pre-configured plugin setup remains.

> [!TIP]
> You might want to rename this vault, so it is not titled `quadro-example-vault` anymore. To do so, click the small vault icon at the bottom left, close this window, right-click `quadro-example-vault` and select `Rename Vault…`. After that, double-click your newly named vault to re-open it.

