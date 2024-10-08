/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
module.exports = __toCommonJS(main_exports);

// src/service/kebabCase.ts
function kebabCase(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, " ").replace(/\s+/g, "-").toLocaleLowerCase();
}

// src/Ollama.ts
var import_obsidian2 = require("obsidian");

// src/OllamaSettingTab.ts
var import_obsidian = require("obsidian");

// src/data/defaultSettings.ts
var DEFAULT_SETTINGS = {
  ollamaUrl: "http://localhost:11434",
  commands: [
    {
      name: "Summarize selection",
      prompt: "Act as a writer. Summarize the text in a view sentences highlighting the key takeaways. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2"
    },
    {
      name: "Explain selection",
      prompt: "Act as a writer. Explain the text in simple and concise terms keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2"
    },
    {
      name: "Expand selection",
      prompt: "Act as a writer. Expand the text by adding more details while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2"
    },
    {
      name: "Rewrite selection (formal)",
      prompt: "Act as a writer. Rewrite the text in a more formal style while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2"
    },
    {
      name: "Rewrite selection (casual)",
      prompt: "Act as a writer. Rewrite the text in a more casual style while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2"
    },
    {
      name: "Rewrite selection (active voice)",
      prompt: "Act as a writer. Rewrite the text in with an active voice while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2"
    },
    {
      name: "Rewrite selection (bullet points)",
      prompt: "Act as a writer. Rewrite the text into bullet points while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2"
    },
    {
      name: "Caption selection",
      prompt: "Act as a writer. Create only one single heading for the whole text that is giving a good understanding of what the reader can expect. Output only the caption and nothing else, do not chat, no preamble, get to the point. Your format should be ## Caption.",
      model: "llama2"
    }
  ]
};

// src/OllamaSettingTab.ts
var OllamaSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Ollama URL").setDesc("URL of the Ollama server (e.g. http://localhost:11434)").addText(
      (text) => text.setPlaceholder("http://localhost:11434").setValue(this.plugin.settings.ollamaUrl).onChange(async (value) => {
        this.plugin.settings.ollamaUrl = value;
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "Commands" });
    const newCommand = {
      name: "",
      prompt: "",
      model: "",
      temperature: void 0
    };
    new import_obsidian.Setting(containerEl).setName("New command name").addText((text) => {
      text.setPlaceholder("e.g. Summarize selection");
      text.onChange(async (value) => {
        newCommand.name = value;
      });
    });
    new import_obsidian.Setting(containerEl).setName("New command prompt").addTextArea((text) => {
      text.setPlaceholder(
        "e.g. Act as a writer. Summarize the text in a view sentences highlighting the key takeaways. Output only the text and nothing else, do not chat, no preamble, get to the point."
      );
      text.onChange(async (value) => {
        newCommand.prompt = value;
      });
    });
    new import_obsidian.Setting(containerEl).setName("New command model").addText((text) => {
      text.setPlaceholder("e.g. llama2");
      text.onChange(async (value) => {
        newCommand.model = value;
      });
    });
    new import_obsidian.Setting(containerEl).setName("New command temperature").addSlider((slider) => {
      slider.setLimits(0, 1, 0.01);
      slider.setValue(0.2);
      slider.onChange(async (value) => {
        newCommand.temperature = value;
      });
    });
    new import_obsidian.Setting(containerEl).setDesc("This requires a reload of obsidian to take effect.").addButton(
      (button) => button.setButtonText("Add Command").onClick(async () => {
        if (!newCommand.name) {
          new import_obsidian.Notice("Please enter a name for the command.");
          return;
        }
        if (this.plugin.settings.commands.find(
          (command) => command.name === newCommand.name
        )) {
          new import_obsidian.Notice(
            `A command with the name "${newCommand.name}" already exists.`
          );
          return;
        }
        if (!newCommand.prompt) {
          new import_obsidian.Notice("Please enter a prompt for the command.");
          return;
        }
        if (!newCommand.model) {
          new import_obsidian.Notice("Please enter a model for the command.");
          return;
        }
        this.plugin.settings.commands.push(newCommand);
        await this.plugin.saveSettings();
        this.display();
      })
    );
    containerEl.createEl("h4", { text: "Existing Commands" });
    this.plugin.settings.commands.forEach((command) => {
      new import_obsidian.Setting(containerEl).setName(command.name).setDesc(`${command.prompt} - ${command.model}`).addButton(
        (button) => button.setButtonText("Remove").onClick(async () => {
          this.plugin.settings.commands = this.plugin.settings.commands.filter(
            (c) => c.name !== command.name
          );
          await this.plugin.saveSettings();
          this.display();
        })
      );
    });
    containerEl.createEl("h4", { text: "Reset Commands" });
    new import_obsidian.Setting(containerEl).setName("Update Commands").setDesc(
      "Update commands to the default commands. This cannot be undone and will overwrite some commands by matching names. This requires a reload of obsidian to take effect."
    ).addButton((button) => {
      button.setWarning();
      return button.setButtonText("Update").onClick(async () => {
        DEFAULT_SETTINGS.commands.forEach((command) => {
          const existingCommand = this.plugin.settings.commands.find(
            (c) => c.name === command.name
          );
          if (existingCommand) {
            existingCommand.prompt = command.prompt;
            existingCommand.model = command.model;
            existingCommand.temperature = command.temperature;
          } else {
            this.plugin.settings.commands.push(command);
          }
        });
        await this.plugin.saveSettings();
        this.display();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Reset Commands").setDesc(
      "Reset all commands to the default commands. This cannot be undone and will delete all your custom commands. This requires a reload of obsidian to take effect."
    ).addButton((button) => {
      button.setWarning();
      return button.setButtonText("Reset").onClick(async () => {
        this.plugin.settings.commands = DEFAULT_SETTINGS.commands;
        await this.plugin.saveSettings();
        this.display();
      });
    });
  }
};

// src/Ollama.ts
var Ollama = class extends import_obsidian2.Plugin {
  async onload() {
    await this.loadSettings();
    this.addPromptCommands();
    this.addSettingTab(new OllamaSettingTab(this.app, this));
  }
  addPromptCommands() {
    this.settings.commands.forEach((command) => {
      this.addCommand({
        id: kebabCase(command.name),
        name: command.name,
        editorCallback: (editor) => {
          const selection = editor.getSelection();
          const text = selection ? selection : editor.getValue();
          const cursorPosition = editor.getCursor();
          editor.replaceRange("\u270D\uFE0F", cursorPosition);
          (0, import_obsidian2.requestUrl)({
            method: "POST",
            url: `${this.settings.ollamaUrl}/api/generate`,
            body: JSON.stringify({
              prompt: command.prompt + "\n\n" + text,
              model: command.model,
              options: {
                temperature: command.temperature || 0.2
              }
            })
          }).then((response) => {
            const steps = response.text.split("\n").filter((step) => step && step.length > 0).map((step) => JSON.parse(step));
            editor.replaceRange(
              steps.map((step) => step.response).join("").trim(),
              cursorPosition,
              {
                ch: cursorPosition.ch + 1,
                line: cursorPosition.line
              }
            );
          }).catch((error) => {
            new import_obsidian2.Notice(`Error while generating text: ${error.message}`);
            editor.replaceRange("", cursorPosition, {
              ch: cursorPosition.ch + 1,
              line: cursorPosition.line
            });
          });
        }
      });
    });
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};

// src/main.ts
var main_default = Ollama;

/* nosourcemap */