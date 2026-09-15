#!/usr/bin/env bash
# Creates one GitHub release (vx.x.x) with notes collected from the published packages' changelogs.
# Required env: GH_TOKEN, TAG, PUBLISHED_PACKAGES

set -euo pipefail

node scripts/aggregate-changelogs.js "$PUBLISHED_PACKAGES" > release-notes.md
gh release create "$TAG" \
  --title "$TAG" \
  --notes-file release-notes.md