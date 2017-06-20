#!/bin/bash
DIR_OF_THIS_SCRIPT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source $DIR_OF_THIS_SCRIPT/create-stack.sh

ACTION=$1
if [ -z "$ACTION" ]; then
  ACTION="create"
fi

actionStack \
  CS_STACK_NAME="prod" \
  CS_ACTION=$ACTION \
  CS_ENV_LEVEL=""
