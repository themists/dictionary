// src/components/PaginationBlock.jsx
// 상하단 공통 페이지네이션 블록

import PaginationControls from "./PaginationControls";

function PaginationBlock({ totalPages, page, setPage, t }) {
  if (totalPages <= 1) return null;

  return (
    <PaginationControls
      page={page}
      totalPages={totalPages}
      onPageChange={setPage}
      t={t}
    />
  );
}

export default PaginationBlock;
