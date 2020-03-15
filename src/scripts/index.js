import '../styles/index.scss';
import { setUpHtml } from './render';
import {
  addTracker,
  getAllIssues,
  closeIssue,
  deleteIssue
} from './trackerService';

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

render();

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
    desc.value = '';
    priority.value = '';
    assignee.value = '';
    render();
  }
});

function render() {
  const issues = getAllIssues();
  allIssues.innerHTML = setUpHtml(issues);
}

function closeBtn(id) {
  const val = closeIssue(id);
  if (val) {
    render();
  }
}

function deleteBtn(id) {
  const val = deleteIssue(id);
  if (val) {
    render();
  }
}

allIssues.addEventListener('click', function(e) {
  const classNames = e.target.className.split(' ');
  const { id } = e.target.dataset;
  if (classNames.includes('close')) {
    // close the task
    closeBtn(id);
  } else if (classNames.includes('delete')) {
    // delete the task
    deleteBtn(id);
  }
});
