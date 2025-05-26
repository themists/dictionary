function PaginationControls({ page, totalPages, onPageChange }) {
  return (
    <div className="pagination-controls">
      <button onClick={() => onPageChange(1)} disabled={page === 1}>
        ⏮
      </button>
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        ◀
      </button>
      <span>
        페이지 {page} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        ▶
      </button>
      <button onClick={() => onPageChange(totalPages)} disabled={page === totalPages}>
        ⏭
      </button>
    </div>
  );
}

export default PaginationControls;
