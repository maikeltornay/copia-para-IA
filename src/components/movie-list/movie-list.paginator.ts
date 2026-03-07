import { getAppElement } from "../../utils";

export function addMovieListPaginator() {
  const appElement = getAppElement();
  const paginatorWrapperElement = document.createElement("div");
  paginatorWrapperElement.className = "mb-5";
  paginatorWrapperElement.innerHTML = `
    <nav id="movies-pagination" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item"><a class="page-link">1</a></li>
        <li class="page-item"><a class="page-link">2</a></li>
        <li class="page-item"><a class="page-link">3</a></li>
        <li class="page-item">
          <a class="page-link">Next</a>
        </li>
      </ul>
    </nav>
  `;
  appElement.appendChild(paginatorWrapperElement);
}
