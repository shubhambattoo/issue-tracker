export const setUpHtml = issues => {
  let html = '';
  issues.forEach(issue => {
    const { id, desc, isOpen, priority, assignee } = issue;
    html += `
        <div class="card-panel issue">
          <div class="g-1">
            <div class="issue__id">
              ${id}
            </div>
            <div class="issue__desc truncate">
              ${desc}
            </div>
            <div class="issue__status">
              <span class="badge ${isOpen ? 'badge--open' : 'badge--closed'}">
                ${isOpen ? 'Open' : 'Closed'}
              </span>
              <span class="badge badge--${priority}">
                ${priority}
              </span>
            </div>
            <div class="issue__assignee">
              ${assignee}
            </div>
          </div>
          <div class="g-2">
            <div class="actions delete">
              <i class="material-icons">delete</i>
                Delete
            </div>
            <div class="actions close ${
              isOpen ? 'open' : 'actions--disabled'
            }" data-id="${id}">
              <i class="material-icons">cloud</i>
                Close
            </div>
          </div>
        </div>
        `;
  });
  return html;
};
