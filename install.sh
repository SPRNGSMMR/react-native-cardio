#! /bin/bash

SUM="57db701d9da69bde88c5f20f425e66f3"

if [ ! -f ios/lib/cardio-ios.tar.gz ] || [ $SUM != $(md5 -q ios/lib/cardio-ios.tar.gz) ];
then
  mkdir -p ios/lib/
  curl -L https://dl.dropbox.com/s/uu7dwl3h1aneb6b/cardio-ios.tar.gz?dl=0 > ios/lib/cardio-ios.tar.gz
fi

tar -zxvf ios/lib/cardio-ios.tar.gz -C ios/lib/

exit 0
