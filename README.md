# Quadro: Example Vault
This is an example vault for [Quadro](https://github.com/chrisgrieser/obsidian-quadro), an Obsidian plugin that for conducting social-scientific qualitative data analysis (QDA).

Please visit the [documentation for Quadro](https://github.com/chrisgrieser/obsidian-quadro) for further information.

## Installation & Usage
*Quadro* requires at least **Obsidian version 1.5.8**.

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

### Example Data
A few data files for demonstration purposes, all stored in the folder `Data`
- Two mock interviews with app developers for iOS and Android.
	- [[Mock Interview A (iOS developer)]]
	- [[Mock Interview B (Android developer)]]
- A few articles downloaded with the [MarkDownload Browser Extension](https://chromewebstore.google.com/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi)
- The words "iOS" and "Android" are highlighted via the *Dynamic Highlights* plugin (as you can see here).

### Example Codings & Example Extractions
Example Codings and Extractions, in the folders `Codes` and `Extractions` respectively.
- The data was coded for [[app store]], [[WebApps]], and [[Compatibility]] issues.
- An illustrative [[Code Co-occurrence Example]] has been done for [[app store]] and [[WebApps]]
- A few extractions have been made on compatibility issues, and the results aggregated in a table: [[compatibility challenges (Aggregation)]]

## Using this vault for your own research
If you want to use this vault for your own project, you can just delete the content of the folders `Codes`, `Extractions`, `Analysis`, and `Data`. That way, only the pre-configured plugin setup remains.

> [!TIP]
> You might want to rename this vault, so it is not titled `quadro-example-vault` anymore. To do so, click the small vault icon at the bottom left, close this window, right-click `quadro-example-vault` and select `Rename Vault…`. After that, double click your newly named vault to re-open it.

### Download Webpages
To directly download webpages into your this vault, you need the [MarkDownload](https://chrome.google.com/webstore/detail/pcmpcfapbekmbjjkdalcgopdkipoggdi) Browser extension. In the settings for Markdownload, you need to enable Obsidian integration, and the name of this vault, and you are all set. (The *Advanced URI Plugin*, which is also required by *MarkDownload*, is already pre-installed in this example vault.)

You can also import the example settings used to download the *The Verge* articles found in this vault: [[MarkDownload example settings.json]] (Just remember to change the vault name in the settings, if you change the name of this vault.)