#!/bin/bash

npm run build

rm -rf docs
mkdir docs
cp -r dist/* docs
cp .deploy/CNAME docs/
