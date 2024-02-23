.PHONY: release update-quadro update-plugins

# As this is only an example vault, we do not need to be concerned with stuff
# like sem-ver, simple incrementing is fine here. `pull --tags` in case of a
# shallow clone with `--no-tags`.
release: 
	make update-quadro ; \
	git pull --tags && \
	last_tag=$$(git describe --tags --abbrev=0 | tr -d 'v') && \
	next_tag=$$((last_tag + 1)) && \
	git tag "v$$next_tag" && \
	git push origin --tags

update-quadro:
	echo "Updating Quadro…" ; \
	quadro_repo="https://github.com/chrisgrieser/obsidian-quadro/releases/latest/download" ; \
	quadro_path="$$PWD/.obsidian/plugins/quadro" ; \
	curl --remote-name --silent --location "$${quadro_repo}/main.js" && \
	curl --remote-name --silent --location "$${quadro_repo}/manifest.json" && \
	curl --remote-name --silent --location "$${quadro_repo}/styles.css" && \
	mv -vf main.js manifest.json styles.css "$$quadro_path" && \
	git add "$$quadro_path" && git commit -m "chore: update Quadro version" ; \
	echo "------"

update-plugins:
	vault_name=$$(basename "$$PWD") && \
	open "obsidian://advanced-uri?vault=$${vault_name}&updateplugins=true"

