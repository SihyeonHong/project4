#!/bin/bash
set -e

# env.js 파일을 생성하거나 기존 내용을 삭제
echo "window._ENV = {" > ./build/env.js

# 환경변수 중에서 'REACT_APP_'로 시작하는 변수들만을 찾아서
# window._ENV 객체에 추가
for key in $(compgen -v | grep ^REACT_APP_); do
  # Bash에서 환경변수의 값을 얻기 위해 indirect expansion 사용
  value=${!key}
  # JavaScript 객체 형식으로 파일에 추가
  echo "  $key: \"$value\"," >> ./build/env.js
done

# 객체 닫기
echo "}" >> ./build/env.js

# 앱 서버 시작
exec serve -s build