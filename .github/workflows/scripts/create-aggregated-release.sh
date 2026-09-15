#!/usr/bin/env bash

set -euo pipefail

: "${TAG:?TAG is required}"
: "${PUBLISHED_PACKAGES:?PUBLISHED_PACKAGES is required}"

notes_file=$(mktemp)
trap 'rm -f "$notes_file"' EXIT

while IFS=$'\t' read -r package_name version; do
  [[ -n "$package_name" ]] || continue

  if [[ "v$version" != "$TAG" ]]; then
    echo "Published package $package_name has version $version, expected ${TAG#v}." >&2
    exit 1
  fi

  package_json=$(find packages -mindepth 2 -maxdepth 2 -type f -name package.json -print0 \
    | while IFS= read -r -d '' candidate; do
        if jq -e --arg package_name "$package_name" '.name == $package_name' "$candidate" >/dev/null; then
          printf '%s' "$candidate"
          break
        fi
      done)

  if [[ -z "$package_json" ]]; then
    echo "Could not find package directory for $package_name." >&2
    exit 1
  fi

  changelog="$(dirname "$package_json")/CHANGELOG.md"
  printf '### %s\n\n' "$package_name" >> "$notes_file"
  awk -v heading="## $version" '
    $0 == heading { in_section = 1; next }
    in_section && /^## / { exit }
    in_section { print }
  ' "$changelog" >> "$notes_file"
  printf '\n' >> "$notes_file"
done < <(jq -r '.[] | [.name, .version] | @tsv' <<< "$PUBLISHED_PACKAGES")

if gh release view "$TAG" >/dev/null 2>&1; then
  gh release edit "$TAG" --title "$TAG" --notes-file "$notes_file"
else
  gh release create "$TAG" --title "$TAG" --notes-file "$notes_file"
fi