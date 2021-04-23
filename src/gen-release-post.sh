#!/bin/sh
VERSION=$1
if test -z "$VERSION"; then
    echo "Usage: $0 VERSION [flux-core|flux-sched] [WORKDIR]" >&2
    exit 1
fi
NAME=${2:-flux-core}
WORKDIR=${3:-$(mktemp -d ${TMPDIR:-/tmp}/${NAME}.XXXXXX)}
SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

if [[ -z "${WORKDIR}" ]]; then
    echo "Failed to make temporary work directory. Exiting"
    exit 1
fi
if [[ ! -d "${WORKDIR}/.git" ]]; then
    echo "Cloning $NAME $VERSION into $WORKDIR" >&2
    git clone --quiet --branch=v${VERSION} https://github.com/flux-framework/${NAME} ${WORKDIR}
    cd ${WORKDIR}
else
    cd ${WORKDIR}
    git checkout v${VERSION}
fi

URL="https://github.com/flux-framework/${NAME}/issues/"
TAG=$(git describe)
AUTHOR="flux-framework"
COMMIT=$(git rev-parse $TAG)
DATE=$( git cat-file -p $COMMIT \
      | gawk '/^tagger/{print strftime ("%F %H:%M:%S %z", $(NF-1))}')
DOWNLOAD="https://github.com/flux-framework/${NAME}/releases/tag/$TAG"

CALDATE=$( git cat-file -p $COMMIT \
      | gawk '/^tagger/{print strftime ("%F", $(NF-1))}')
OUTFILE="${SCRIPTDIR}/../_posts/${CALDATE}-$2-$VERSION.md"


# Front matter
cat > ${OUTFILE} <<EOF
---
layout: default
title: "${NAME} v$VERSION"
date: "$DATE"
author: "$AUTHOR"
categories: release
version: $VERSION
download: $DOWNLOAD
---

Download from GitHub [here]($DOWNLOAD)

# Release Notes
EOF
# Get top list of Release Notes for a single version
#   replace Issue #'s with links
#
awk "/^${NAME} version/{n++;getline;getline}; n<=1;" NEWS.md | \
 sed "s|#\([0-9][0-9]*\)|[#\1](${URL}\1)|g" >> ${OUTFILE}

if [[ -z "$3" ]]; then
    cd /tmp 
    rm -rf ${WORKDIR}
fi