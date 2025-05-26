// src/utils/i18n.js
// 다국어 문자열
const t = {
  ko: {
    title: "EchoWord",
    totalWords: (n) => `총 ${n}단어`,
    inputPlaceholder: "단어를 입력하세요...",
    login: "로그인",
    logout: "로그아웃",
    backup: "백업",
    restore: "복원",
    sortABC: "A–Z",
    sortCount: "횟수", // 학습횟수 정렬
    sortDate: "학습일", // 학습일 정렬
    studies: (n) => `학습 횟수: ${n}`,
    lastReviewedLabel: "학습일",
    lastStudied: (days) => (days === 0 ? "오늘" : `${days}일 전`),
    dictionary: "사전",
    pronunciation: "발음",
    studyDone: "학습 완료",
    delete: "삭제",
    confirmDelete: "정말 삭제하시겠습니까?",
    backupSuccess: "✅ 백업 완료!",
    prev: "이전",
    next: "다음",
    page: (p, t) => `페이지 ${p} / ${t}`,
    version: (v) => `버전: ${v}`,
    darkModeOn: "다크모드",
    darkModeOff: "라이트모드"
  },
  en: {
    title: "EchoWord",
    totalWords: (n) => `${n} words`,
    inputPlaceholder: "Enter a word...",
    login: "Sign In",
    logout: "Sign Out",
    backup: "Backup",
    restore: "Restore",
    sortABC: "A–Z", // Sort: A–Z
    sortCount: "Count", // Sort: Study Count
    sortDate: "Reviewed", // Sort: Date
    studies: (n) => `Studied: ${n} times`,
    lastReviewedLabel: "Last reviewed",
    lastStudied: (days) => (days === 0 ? "Today" : `${days} days ago`),
    dictionary: "Dictionary",
    pronunciation: "Pronunciation",
    studyDone: "Mark Studied",
    delete: "Delete",
    confirmDelete: "Are you sure you want to delete this word?",
    backupSuccess: "✅ Backup complete!",
    prev: "← Prev",
    next: "Next →",
    page: (p, t) => `Page ${p} of ${t}`,
    version: (v) => `Version: ${v}`,
    darkModeOn: "Dark Mode",
    darkModeOff: "Light Mode"
  }
};

export default t;
