// PaginationControls.jsx – 다국어 대응 가능 구조
function PaginationControls({ page, totalPages, onPageChange, t }) {
  return (
    <div className="pagination-controls">
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        {t.prev}
      </button>
      <span>
        {t.page(page, totalPages)}
      </span>
      <button
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        {t.next}
      </button>
    </div>
  );
}

export default PaginationControls;
