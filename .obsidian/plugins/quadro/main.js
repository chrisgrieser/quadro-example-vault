/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

"use strict";var $=Object.defineProperty;var ye=Object.getOwnPropertyDescriptor;var ve=Object.getOwnPropertyNames;var Ie=Object.prototype.hasOwnProperty;var be=(e,t)=>{for(var n in t)$(e,n,{get:t[n],enumerable:!0})},Ae=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ve(t))!Ie.call(e,i)&&i!==n&&$(e,i,{get:()=>t[i],enumerable:!(o=ye(t,i))||o.enumerable});return e};var ke=e=>Ae($({},"__esModule",{value:!0}),e);var Pe={};be(Pe,{default:()=>P});module.exports=ke(Pe);var ge=require("obsidian");var y=require("obsidian");function Re(){return Math.ceil(Math.random()*1e6).toString().padStart(6,"0")}var B=/\^[\w-]+$/,Q=/^!\[\[(.+?)#(\^[\w-]+)\]\]$/,De=/\^[\w-]+(?=\n|$)/g;async function R(e,t){let[n]=t.match(B)||[];if(n){let l=t.slice(0,-n.length).trim();return{blockId:n,lineWithoutId:l}}let i=(await e.vault.cachedRead(e)).match(De)||[],a;do a="^id-"+Re();while(i.includes(a));return{blockId:a,lineWithoutId:t.trim()}}var u="Codes",J={char:"\u{1FB0B}",charsPerBlock:100,maxLength:100},Oe={alphabeticalByCodeName:(e,t)=>e.basename.localeCompare(t.basename),alphabeticalByFullCode:(e,t)=>{let n=e.path.slice(u.length+1),o=t.path.slice(u.length+1);return n.localeCompare(o)},lastUsedFirst:(e,t)=>t.stat.mtime-e.stat.mtime,oldestUsedFirst:(e,t)=>e.stat.mtime-t.stat.mtime,frequentlyUsedFirst:(e,t)=>t.stat.size-e.stat.size,rarelyUsedFirst:(e,t)=>e.stat.size-t.stat.size,randomOrder:()=>Math.random()-.5},K=Oe.lastUsedFirst,g="Extractions";var D=require("obsidian");function p(e,t){let n=t==="Codes"?u:g,o=e.workspace.getActiveFile();return o?!!o.path.startsWith(n+"/"):!1}function A(e){return e.path.slice(u.length+1,-3)}function x(e){let t=e.workspace.getActiveViewOfType(D.MarkdownView);return t?t.editor:(new D.Notice("No active editor."),null)}var I=[{command:"\u2191\u2193",purpose:"Navigate"},{command:"\u23CE",purpose:"Select"},{command:"esc",purpose:"Dismiss"}];function O(e){let t=`.workspace-leaf.mod-active .metadata-property:first-of-type .metadata-property-${e} :is([contenteditable='true'], input)`,n=document.querySelector(t);n instanceof HTMLElement&&Se(n,0),n instanceof HTMLInputElement&&n.select()}function Se(e,t){if(e instanceof HTMLInputElement){e.focus();let n=e.getAttribute("type")==="number";n&&e.setAttribute("type","text"),e.setSelectionRange(t,t),n&&e.setAttribute("type","number")}else{let n=document.createRange(),o=window.getSelection();n.setStart(e,t),n.collapse(!0),o?.removeAllRanges(),o?.addRange(n)}}var M={state:{source:!1,mode:"source"}};async function k(e,t){let n=e.workspace.getLeaf();await(e.workspace.getAdjacentLeafInDirection(n,"right")||e.workspace.createLeafBySplit(n,"vertical",!1)).openFile(t,M)}var m=require("obsidian");var _=class extends m.Modal{constructor(n,o){super(n);this.fullCode="";this.codeDesc="";this.confirmationButton=null;this.onSubmit=o,this.modalEl.addClass("quadro")}onOpen(){let{contentEl:n}=this;n.createEl("h4",{text:"New code creation"}),new m.Setting(n).setName("Name of the Code").setDesc('Use a slash ("/") in the name to create the Code File in a subfolder (group).').addText(o=>o.onChange(i=>{this.fullCode=i.trim(),this.confirmationButton?.setDisabled(this.fullCode==="")})),new m.Setting(n).setName("Code Description").setDesc('Will be added as metadata with the key "description".').addText(o=>o.onChange(i=>{this.codeDesc=i.trim()})),new m.Setting(n).addButton(o=>{this.confirmationButton=o.setButtonText("Create").setCta().setDisabled(!0).onClick(()=>{this.close(),this.onSubmit(this.fullCode,this.codeDesc)})}).addButton(o=>o.setButtonText("Cancel").onClick(()=>this.close()))}onClose(){let{contentEl:n}=this;n.empty()}},W=class extends m.Modal{constructor(n,o){super(n);this.input="";this.confirmationButton=null;this.onSubmit=o,this.modalEl.addClass("quadro")}onOpen(){let{contentEl:n}=this;n.createEl("h4",{text:"Bulk-create new codes"}),n.createEl("p",{text:"Every line will result in a new code file."}),n.createEl("p",{text:'Use a slash ("/") in the name to create the Code File in a subfolder (group).'}),new m.Setting(n).setClass("quadro-bulk-code-creation").addTextArea(o=>o.onChange(i=>{this.input=i.trim(),this.confirmationButton?.setDisabled(this.input==="")})),new m.Setting(n).addButton(o=>{this.confirmationButton=o.setButtonText("Create").setCta().setDisabled(!0).onClick(()=>{this.close(),this.onSubmit(this.input)})}).addButton(o=>o.setButtonText("Cancel").onClick(()=>this.close()))}onClose(){let{contentEl:n}=this;n.empty()}};async function Z(e,t,n){t=t.replace(/\.md$/,"").replace(/[:#^?!"*<>|[\]\\]/g,"-").replace(/^\.|\/\./g,"");let o=(0,m.normalizePath)(`${u}/${t}.md`);if(e.vault.getAbstractFileByPath(o)instanceof m.TFile)return new m.Notice(`Code "${t}" already exists, Code File not created.`),!1;let a=t.split("/"),l=a.pop(),s=a.length?"/"+a.join("/"):"",r=u+s;e.vault.getAbstractFileByPath(r)instanceof m.TFolder||await e.vault.createFolder(r),n=n.replaceAll('"',"'");let d=`---
description: "${n}"
---


---

`;return await e.vault.create(`${r}/${l}.md`,d)}function ee(e,t){new _(e,async(n,o)=>{let i=await Z(e,n,o);i?(new m.Notice(`Created new code file: "${n}"`),t(i)):new m.Notice("File creation failed.")}).open()}async function te(e){new W(e,async t=>{let n=0,o=[];for(let a of t.split(`
`))await Z(e,a,"")?n++:o.push(a);let i=`${n} file(s) created`;o.length>0&&(i+=`
Could not create: `+o.join(", ")),new m.Notice(i,(o.length+2)*1e3)}).open()}var G=class extends y.FuzzySuggestModal{constructor(t,n,o,i){super(t),this.editor=n,this.codesInPara=o,this.dataFile=i,this.setPlaceholder("Select code to assign"),this.setInstructions([...I,{command:'type "new"',purpose:"Create new code"}]),this.modalEl.addClass("quadro")}getItems(){let t=this.app.vault.getMarkdownFiles().filter(n=>{let o=n.path.startsWith(u+"/"),i=this.codesInPara.find(a=>a.path===n.path);return o&&!i}).sort(K);return t.push("new-code-file"),t}getItemText(t){if(t==="new-code-file")return"\u{1F79C} Create new code";let{char:n,charsPerBlock:o,maxLength:i}=J,a="    "+n.repeat(Math.min(i,t.stat.size/o));return A(t)+a}onChooseItem(t){t instanceof y.TFile?this.assignCode(t,this.dataFile):ee(this.app,n=>this.assignCode(n,this.dataFile))}async assignCode(t,n){let o=this.editor.getCursor(),i=A(t),a=this.editor.getLine(o.line),l=this.editor.getSelection();if(l){let w=l.replace(/^( ?)(.+?)( ?)$/g,"$1==$2==$3");this.editor.replaceSelection(w),a=this.editor.getLine(o.line)}let{blockId:s,lineWithoutId:r}=await R(n,a),c=`${r} [[${i}]] ${s}`;this.editor.setLine(o.line,c),this.editor.setCursor(o);let h=`![[${n.path.slice(0,-3)}#${s}]]
`;await this.app.vault.append(t,h)}};function ne(e){let t=x(e);if(!t)return;if(p(e,"Codes")||p(e,"Extractions")){new y.Notice("You must be in a Data File to assign a code.",3e3);return}if(t.getSelection().includes("==")){new y.Notice(`Selection contains highlights.
Overlapping highlights are not supported.`);return}let o=t.editorComponent.view.file,l=(t.getLine(t.getCursor().line).match(/\[\[.+?\]\]/g)||[]).reduce((s,r)=>{r=r.slice(2,-2);let c=e.metadataCache.getFirstLinkpathDest(r,o.path);return c instanceof y.TFile&&c.path.startsWith(u+"/")&&s.push(c),s},[]);new G(e,t,l,o).open()}var v=require("obsidian");var T=require("obsidian");var U=class extends T.FuzzySuggestModal{constructor(t,n,o,i){super(t),this.codesInParagraph=i,this.dataFile=o,this.editor=n,this.setPlaceholder("Select code to remove from paragraph"),this.setInstructions(I),this.modalEl.addClass("quadro")}getItems(){return this.codesInParagraph}getItemText(t){return A(t.tFile)}onChooseItem(t){oe(this.editor,this.dataFile,t)}};async function oe(e,t,n){let o=e.editorComponent.app,i=e.getCursor().line,a=e.getLine(i),l=new RegExp(" ?\\[\\["+n.wikilink+"\\]\\]");e.setLine(i,a.replace(l,""));let[s]=a.match(B)||[];if(!s){new T.Notice(`No ID found in current line.
Reference in Code File thus not deleted.`);return}let r=(await o.vault.read(n.tFile)).split(`
`),c=r.findIndex(d=>{if(!d.includes(s))return!1;let h=d.match(/\[\[.+?\]\]/g)||[];for(let w of h){let E=w.slice(2,-2).split("#")[0]||"";if(o.metadataCache.getFirstLinkpathDest(E,n.tFile.path)?.path===t.path)return!0}return!1});if(c<0){new T.Notice(`"Code File "${n.tFile.basename}" contains not reference to Data File "${t.basename}" with the ID "${s}". Reference in Code File is thus not deleted.`,7e3);return}r.splice(c,1),await o.vault.modify(n.tFile,r.join(`
`))}async function j(e,t,n,o){let i=(await e.vault.read(n)).split(`
`),a=i.findIndex(c=>c.endsWith(o));if(a<0)return`Data File "${n.basename}", has no line with the ID "${o}".`;let l=i[a]||"",r=(l.match(/\[\[.+?\]\]/g)||[]).find(c=>{c=c.slice(2,-2);let d=e.metadataCache.getFirstLinkpathDest(c,n.path);return d instanceof T.TFile&&d.path===t.path});return r?(i[a]=l.replace(r,"").replace(/ {2,}/g," "),await e.vault.modify(n,i.join(`
`)),""):`Data File "${n.basename}", line "${o}" has no valid link to the Code File.`}async function Le(e,t){let n=t.getLine(t.getCursor().line),[o,i,a]=n.match(Q)||[],l=t.editorComponent.view.file,s=e.metadataCache.getFirstLinkpathDest(i||"",l.path);if(!a||!i||!s){new T.Notice("Current line has no correct reference.");return}let r=await j(e,l,s,a);if(!r){new T.Notice(r+`

Aborting removal of Code.`,4e3);return}e.commands.executeCommandById("editor:delete-paragraph"),t.setCursor({line:t.getCursor().line,ch:0})}async function ie(e){let t=x(e);if(t)if(p(e,"Codes"))Le(e,t);else{let n=t.editorComponent.view.file,a=(t.getLine(t.getCursor().line).match(/\[\[.+?\]\]/g)||[]).reduce((l,s)=>{s=s.slice(2,-2);let r=e.metadataCache.getFirstLinkpathDest(s,n.path);return r instanceof T.TFile&&r.path.startsWith(u+"/")&&l.push({tFile:r,wikilink:s}),l},[]);a.length===0?new T.Notice("Line does not contain any valid codes."):a.length===1?oe(t,n,a[0]):new U(e,t,n,a).open()}}var z=!1;async function ae(e,t){if(!(t instanceof v.TFile)||!t.path.startsWith(u+"/")||z)return;if(e.vault.config.trashOption!=="local"){let o=`Code Files should be deleted via the "Delete Code Everywhere" command to ensure that references to it are correctly deleted as well.

Please restore the file and delete it again with that command, or set the trash location to "local" in your Obsidian config to have Quadroautomantically handle deletions.`;new v.Notice(o,15e3);return}let n=".trash/"+t.name;if(!await e.vault.adapter.exists(n)){let o=`Could not remove references to the Code File.

Please restore the file use the "Delete Code Everywhere" command.`;new v.Notice(o,7e3);return}await e.vault.adapter.rename(n,t.path),setTimeout(async()=>{z=!0,await se(e,t),z=!1},1e3)}async function re(e){let t=x(e);if(!t)return;if(!p(e,"Codes")){new v.Notice("Must be in Code File to delete the code everywhere.");return}let n=t.editorComponent.view.file;se(e,n)}async function se(e,t){let o=(e.metadataCache.getFileCache(t)?.embeds||[]).map(s=>s.link).reduce((s,r)=>{let[c,d]=r.split("#");if(!c||!d)return s;let h=e.metadataCache.getFirstLinkpathDest(c,t.path);return h instanceof v.TFile&&s.push({file:h,blockId:d}),s},[]),i=[];for(let{file:s,blockId:r}of o){let c=await j(e,t,s,r);c&&i.push(c)}await e.vault.trash(t,!0);let a=o.length-i.length,l=`Code File "${t.basename}" and ${a} references to it deleted.
`;i.length>0&&(l+=`
\u26A0\uFE0F ${i.length} references could not be deleted:
- `+i.join(`
- `)),new v.Notice(l,(5+i.length)*1700)}var S=require("obsidian");function le(e){p(e,"Codes")?e.commands.executeCommandById("workspace:edit-file-title"):new S.Notice("You must be in a code file.")}function ce(e){p(e,"Codes")?(e.internalPlugins.plugins["note-composer"]?.enable(),new S.Notice("Select a Code File from the list."),e.commands.executeCommandById("note-composer:merge-file")):new S.Notice("You must be in a code file.")}var de=[{id:"assign-code",name:"Assign code to paragraph",func:ne,hotkeyLetter:"a",icon:"plus-circle"},{id:"rename-code",name:"Rename code",func:le,hotkeyLetter:"r",icon:"circle-slash"},{id:"unassign-code",name:"Delete code from paragraph",func:ie,hotkeyLetter:"d",icon:"minus-circle"},{id:"delete-code-everywhere",name:"Delete code file and all references to it",func:re,icon:"x-circle"},{id:"merge-codes",name:"Merge codes",func:ce,icon:"radius"},{id:"bulk-create-new-code-files",name:"Bulk create new code files",func:te,icon:"circle-dashed"}];var C=require("obsidian");async function me(e){if(![...e.plugins.enabledPlugins].includes("dataview")){if(!Object.keys(e.plugins.plugins).includes("dataview")){new C.Notice(`Plugin "Dataview" not installed.

Please install it from the Obsidian Community Store.`,7e3);return}if(!await e.plugins.enablePluginAndSave("dataview")){new C.Notice("ERROR: Dataview plugin could not be enabled.",4e3);return}}let n=e.vault.getAbstractFileByPath(g);if(!(n instanceof C.TFolder)){new C.Notice("ERROR: Could not find Extraction Folder.",3e3);return}let o=n.children.filter(s=>s instanceof C.TFolder);if(o.length===0){new C.Notice("ERROR: Could not find any Extraction Types.",3e3);return}let a=(await Promise.all(o.map(async s=>{let r=e.vault.getAbstractFileByPath(`${s.path}/Template.md`);if(!(r instanceof C.TFile))return;let c=e.metadataCache.getFileCache(r)?.frontmatter;if(!c)return;let d=Object.keys(c).map(b=>"	"+b.replaceAll(" ","-")+",");d.push("	extraction-source");let h=["```dataview","TABLE",...d,`FROM "${s.path}"`,'WHERE file.name != "Template"',"SORT extraction-date ASC","```",""].join(`
`),w=s.name,E=`${g}/${w} (Aggregation).md`;try{return new C.Notice(`Created Aggregation File for "${E}"`,5e3),await e.vault.create(E,h)}catch{return new C.Notice(`"Skipping "${w}", as Aggregation File for it already exists.`,5e3),null}}))).find(s=>s instanceof C.TFile);if(!a)return;await e.workspace.getLeaf().openFile(a,M);let l=x(e);l&&l.setCursor(l.lastLine(),0)}var F=require("obsidian");var H=class extends F.Modal{constructor(n,o){super(n);this.nameOfNewType="";this.confirmationButton=null;this.onSubmit=o,this.modalEl.addClass("quadro")}onOpen(){let{contentEl:n}=this;n.createEl("h4",{text:"New Extraction Type"}),new F.Setting(n).setName("Name of the new type").addText(o=>o.onChange(i=>{this.nameOfNewType=i.trim(),this.confirmationButton?.setDisabled(this.nameOfNewType==="")})),new F.Setting(n).addButton(o=>{this.confirmationButton=o.setButtonText("Create").setCta().setDisabled(!0).onClick(()=>{this.close(),this.onSubmit(this.nameOfNewType)})}).addButton(o=>o.setButtonText("Cancel").onClick(()=>this.close()))}onClose(){let{contentEl:n}=this;n.empty()}};function q(e){new H(e,async t=>{t=t.replace(/\.md$/,"").replaceAll("/","_").replace(/[:#^?!"*<>|[\]\\]/g,"-").replace(/^\./,"");let n=(0,F.normalizePath)(g+"/"+t);if(!(await e.vault.createFolder(n)instanceof F.TFolder)){new F.Notice("ERROR: Could not create Extraction Type Folder.",3e3);return}V(e,t)}).open()}async function V(e,t){new F.Notice(`Creating New Template for Extraction Type "${t}"`,6e3);let n=(0,F.normalizePath)(`${g}/${t}/Template.md`),i=await e.vault.create(n,`---
dimension: 
---

`);await k(e,i),O("key")}function ue(e){q(e)}var f=require("obsidian");var X=class extends f.FuzzySuggestModal{constructor(t,n,o,i){super(t),this.extractionTypes=o,this.editor=n,this.dataFile=i,this.setPlaceholder("Select extraction type"),this.setInstructions(I),this.modalEl.addClass("quadro")}getItems(){return this.extractionTypes}getItemText(t){let n=t.children.find(a=>a instanceof f.TFile&&a.name==="Template.md"),o=t.children.length-1,i=n?`  (${o})`:'  [Select to create "Template.md"]';return t.name+i}onChooseItem(t){pe(this.editor,this.dataFile,t)}};async function pe(e,t,n){let o=e.editorComponent.app,i=n.name,a=n.path,l=o.vault.getAbstractFileByPath(`${a}/Template.md`);if(!(l instanceof f.TFile)){V(o,i);return}let r=(await o.vault.cachedRead(l)).trim().split(`
`);if(!(r.filter(N=>N==="---").length===2)){new f.Notice(`The file "Template.md" in the folder "${a}" does not contain valid metadata fields.

You need to add valid fields before you can make extractions.`,6e3),k(o,l);return}let d,h,w=n.children.length-1;do w++,h=`${a}/${w}.md`,d=o.vault.getAbstractFileByPath(h)instanceof f.TFile;while(d);let E=e.getCursor(),b=e.getLine(E.line),{blockId:Y,lineWithoutId:Ce}=await R(t,b),Fe=`${Ce} [[${i}/${w}]] ${Y}`;e.setLine(E.line,Fe),e.setCursor(E);let Te=`extraction date: ${new Date().toISOString().slice(0,-5)}`,we=`extraction source: "[[${t.path}]]"`,xe=r.findLastIndex(N=>N==="---");r.splice(xe,0,Te,we),r.push("",`**Paragraph extracted from:** ![[${t.path}#${Y}]]`);let Ee=await o.vault.create(h,r.join(`
`));await k(o,Ee),O("value")}async function he(e){let t=x(e);if(!t)return;if(p(e,"Codes")||p(e,"Extractions")){new f.Notice("You must be in a Data File to make an extraction.",3e3);return}let n=e.vault.getAbstractFileByPath(g);if(n instanceof f.TFolder||(n=await e.vault.createFolder(g)),!(n instanceof f.TFolder)){new f.Notice("ERROR: Could not create Extraction Folder.",3e3);return}let o=n.children.filter(a=>a instanceof f.TFolder),i=t.editorComponent.view.file;o.length===0?q(e):o.length===1&&o[0]?pe(t,i,o[0]):new X(e,t,o,i).open()}var fe=[{id:"extract-from-paragraph",name:"Extract from paragraph",func:he,hotkeyLetter:"e",icon:"plus-square"},{id:"create-new-extraction-type",name:"Create new extraction type",func:ue,icon:"box-select"},{id:"aggregate-extractions",name:"Aggregate extractions",func:me,icon:"sigma-square"}];function L(e,t){let n=e.workspace.getActiveFile();if(!n){t.setText("");return}let o=[],i=e.metadataCache.resolvedLinks[n.path]||{};if(p(e,"Codes")){let r=0;for(let[c,d]of Object.entries(i))r+=d;o.push(`Code ${r}x assigned`)}else if(p(e,"Extractions")){let c=n.parent.children.length-1;o.push(`${c}x extracted`)}else{let r=0,c=0;for(let[d,h]of Object.entries(i))d.startsWith(u+"/")&&(r+=h),d.startsWith(g+"/")&&c++;r>0&&o.push(`${r} Codes`),c>0&&o.push(`${c} Extractions`)}let a=e.metadataCache.unresolvedLinks[n.path]||{},l=0;for(let[r,c]of Object.entries(a))l+=c;l>0&&o.push(`${l} invalid links`);let s=o.map(r=>r.replace(/^(1 .*)s$/,"$1")).join(", ");t.setText(s)}var P=class extends ge.Plugin{constructor(){super(...arguments);this.statusbar=this.addStatusBarItem()}onload(){console.info(this.manifest.name+" Plugin loaded.");for(let n of[...de,...fe]){this.addRibbonIcon(n.icon,`Quadro: ${n.name}`,()=>n.func(this.app));let o={id:n.id,name:n.name,editorCallback:()=>n.func(this.app)};n.hotkeyLetter&&(o.hotkeys=[{modifiers:["Mod","Shift"],key:n.hotkeyLetter}]),this.addCommand(o)}L(this.app,this.statusbar),this.registerEvent(this.app.workspace.on("file-open",()=>L(this.app,this.statusbar))),this.registerEvent(this.app.metadataCache.on("resolved",()=>L(this.app,this.statusbar))),this.registerEvent(this.app.vault.on("delete",n=>ae(this.app,n)))}onunload(){console.info(this.manifest.name+" Plugin unloaded.")}};
