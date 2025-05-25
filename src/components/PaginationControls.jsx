// src/components/PaginationControls.jsx

function PaginationControls({ page, totalPages, onPageChange }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={() => onPageChange(Math.max(1, page - 1))} disabled={page === 1}>
        ⬅ 이전
      </button>
      <span style={{ margin: "0 1rem" }}>
        페이지 {page} / {totalPages}
      </span>
      <button onClick={() => onPageChange(Math.min(totalPages, page + 1))} disabled={page === totalPages}>
        다음 ➡
      </button>
    </div>
  );
}

export default PaginationControls;
