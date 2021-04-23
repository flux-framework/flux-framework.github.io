#!/bin/sh
VERSION=$1
if test -z "$VERSION"; then
    echo "Usage: $0 VERSION [flux-core|flux-sched]" >&2
    exit 1
fi
NAME=${2:-flux-core}
WORKDIR=$(mktemp --directory ${TMPDIR:-/tmp}/${NAME}.XXXXXX)
echo "Cloning $NAME $VERSION into $WORKDIR" >&2
git clone --quiet --branch=v${VERSION} https://github.com/flux-framework/${NAME} ${WORKDIR}
cd ${WORKDIR}

URL="https://github.com/flux-framework/${NAME}/issues/"
TAG=$(git describe)
AUTHOR="flux-framework"
COMMIT=$(git rev-parse $TAG)
DATE=$( git cat-file -p $COMMIT \
      | gawk '/^tagger/{print strftime ("%F %H:%M:%S %z", $(NF-1))}')

# Front matter
cat <<EOF
---
layout: news_item
title: "${NAME} v$VERSION Released"
date: "$DATE"
author: "$AUTHOR"
categories: release
version: $VERSION
---

# ${NAME} v$VERSION Released

<div class="note warning">
This is an alpha release of ${NAME} and is not intended for production use.
</div>

Download from GitHub [here](https://github.com/flux-framework/${NAME}/releases/tag/$TAG)

## Release Notes
EOF
# Get top list of Release Notes for a single version
#   replace Issue #'s with links
#
awk "/^${NAME} version/{n++;getline;getline}; n<=1;" NEWS.md | \
 sed "s|#\([0-9][0-9]*\)|[#\1](${URL}\1)|g"

cd /tmp 
rm -rf ${WORKDIR}