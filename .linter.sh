#!/bin/bash
cd /home/kavia/workspace/code-generation/litconnect-34078-5d3d5352/litconnect
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

