.PHONY: release

# As this is only an example vault, we do not need to be concerned with stuff
# like sem-ver, simple incrementing is fine here.
release:
	git fetch --unshallow && \
	git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*" && \
	git fetch origin && \
	last_tag=$$(git describe --tags --abbrev=0 | tr -d 'v') && \
	next_tag=$$((last_tag + 1)) && \
	git tag "v$$next_tag" && \
	git push origin --tags

