#!/bin/bash

self="${0#./}"
base="${self%/*}"
current=$(pwd)

if [ "$base" = "$self" ] ; then
path="$current"
else
path="$current/$base"
fi ;

echo "twc_cms path is: ${path}"
echo "cd ${path}
pwd
say 'Vagrant wake up!'
vagrant resume" > /Users/Shared/loginHook.sh
sudo chmod +x /Users/Shared/loginHook.sh
sudo defaults write com.apple.loginwindow LoginHook /Users/Shared/loginHook.sh

echo "cd ${path}
pwd
say 'Vagrant sleep!'
vagrant suspend" > /Users/Shared/logoutHook.sh
sudo chmod +x /Users/Shared/logoutHook.sh
sudo defaults write com.apple.loginwindow LogoutHook /Users/Shared/logoutHook.sh

echo "set ulimit"
echo limit maxfiles 9000 unlimited > /etc/launchd.conf
