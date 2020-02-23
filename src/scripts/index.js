import '../styles/index.scss';
import { addTracker, getAllIssues, closeIssue } from './trackerService';
import { setUpHtml } from './render';

// initialising selects
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('select');
  const instances = M.FormSelect.init(elems);
});

// get all elements
const desc = document.getElementById('issue');
const priority = document.getElementById('priority');
const assignee = document.getElementById('assignee');
const addForm = document.forms[0];
const allIssues = document.getElementById('all-issues');

addForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!desc.value && !priority.value && !assignee.value) {
    alert('all the fields are required');
    return;
  }
  const data = {
    desc: desc.value,
    priority: priority.value,
    assignee: assignee.value
  };
  const issue = addTracker(data);
  if (issue) {
    desc.value = null;
    priority.value = null;
    assignee.value = null;
    render();
  }
});

function render() {
  const issues = getAllIssues();
  allIssues.innerHTML = setUpHtml(issues);
}

render();
