#!/bin/bash

echo ""
echo "📦 EchoWord 자동 배포 시작..."

# 0. Git 상태 검사 및 자동 커밋
if [ -n "$(git status --porcelain)" ]; then
  echo "💾 변경사항 감지됨. 자동으로 커밋합니다..."
  git add .
  git commit -m "💾 배포 전 자동 저장" || echo "⚠️ 커밋 실패 또는 커밋할 변경사항 없음"
else
  echo "✅ 변경사항 없음. 커밋 생략"
fi

# 1. 버전 자동 증가 (패치 단위)
echo "🔼 버전 업데이트 (patch)..."
npm version patch

# 2. 빌드
echo "🏗️  Vite 빌드 실행..."
npm run build

# 3. GitHub Pages 배포
echo "🚀 GitHub Pages에 배포 중..."
npm run deploy

# 4. 최종 상태 확인
echo ""
echo "✅ 배포 완료!"
echo "🔎 현재 버전:"
CURRENT_VERSION=$(npm pkg get version | tr -d '"')
echo "📌 version: $CURRENT_VERSION"
echo ""
