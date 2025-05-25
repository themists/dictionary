
// src/components/PaginationControls.jsx

function PaginationControls({ page, totalPages, onPageChange }) {
  return (
    <div className="pagination-controls">
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        ⬅ 이전
      </button>
      <span>
        페이지 {page} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        다음 ➡
      </button>
    </div>
  );
}

export default PaginationControls;
