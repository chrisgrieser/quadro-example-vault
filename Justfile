open-vault:
    #!/usr/bin/env zsh
    vault_name=$(basename "$PWD") 
    open "obsidian://open?vault=${vault_name}&file=README"

# As this is only an example vault, we do not need to be concerned with stuff

# like SemVer, simple incrementing is enough.
release:
    #!/usr/bin/env zsh
    git fetch --tags # in case of a shallow clone with `--no-tags`.
    last_tag=$(git describe --tags --abbrev=0 | tr -d 'v')
    next_tag=$((last_tag + 1))
    git tag "v$next_tag"
    git push origin --tags

#───────────────────────────────────────────────────────────────────────────────

update-quadro:
    #!/usr/bin/env zsh
    echo "Checking for Quadro update…"
    quadro_repo="https://github.com/chrisgrieser/obsidian-quadro/releases/latest/download"
    quadro_path="$PWD/.obsidian/plugins/quadro"
    curl --remote-name --silent --location "${quadro_repo}/main.js"
    curl --remote-name --silent --location "${quadro_repo}/manifest.json"
    curl --remote-name --silent --location "${quadro_repo}/styles.css"
    new_version=$(grep "version" "manifest.json" | cut -d\" -f4)
    mv -vf main.js manifest.json styles.css "$quadro_path"
    git add "$quadro_path" && 
        git commit --message="chore: update Quadro to ${new_version}" &&
        git push --no-progress && 
        echo "Quadro updated to ${new_version}"

update-plugins:
    #!/usr/bin/env zsh
    vault_name=$(basename "$PWD")
    open "obsidian://advanced-uri?vault=${vault_name}&updateplugins=true"
