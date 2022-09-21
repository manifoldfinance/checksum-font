#!/usr/bin/env bash
glyphsets --version || pip3 install glyphsets
glyphsets missing-in-font source/lib/Checksum.ttf

