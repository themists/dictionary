#!/bin/bash

echo ""
echo "📦 EchoWord 자동 배포 시작..."

# 0. Git 상태 검사
if [ -n "$(git status --porcelain)" ]; then
  echo "❗ Git 작업 디렉토리에 변경사항이 있습니다."
  echo "👉 커밋을 먼저 하거나 변경사항을 정리한 후 다시 실행해주세요."
  echo ""
  echo "예시:"
  echo "  git add ."
  echo "  git commit -m \"💾 배포 전 변경사항 저장\""
  echo "  ./deploy.sh"
  echo ""
  exit 1
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

echo "✅ 배포 완료!"
echo "🔎 현재 버전:"
npm pkg get version
echo ""
