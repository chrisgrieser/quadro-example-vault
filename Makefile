.PHONY: release

release:
	last_tag=$$(git describe --tags --abbrev=0) && \
	next_tag=$$((last_tag + 1)) && \
	git tag $$next_tag && \
	git push origin --tags

