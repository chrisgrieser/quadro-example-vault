.PHONY: release update-plugin

# As this is only an example vault, we do not need to be concerned with stuff
# like sem-ver, simple incrementing is fine here. `pull --tags` in case of a
# shallow clone with `--no-tags`.
release:
	git pull --tags && \
	last_tag=$$(git describe --tags --abbrev=0 | tr -d 'v') && \
	next_tag=$$((last_tag + 1)) && \
	git tag "v$$next_tag" && \
	git push origin --tags

# updates plugins
update-plugin:
	vault_name=$$(basename "$$PWD")
	open "obsidian://advanced-uri?vault=$$vault_name&updateplugins=true"
	open "obsidian://advanced-uri?vault=$$vault_name&commandid=obsidian42-brat%253ABRAT-checkForUpdatesAndUpdate"

