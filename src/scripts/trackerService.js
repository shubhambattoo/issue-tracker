import uuid from 'uuid';

const issues = [];

export const addTracker = ({ desc, priority, assignee }) => {
  const issue = {
    id: uuid(),
    desc,
    priority,
    assignee,
    isOpen: true,
    created: Date.now(),
    updated: Date.now()
  };
  issues.push(issue);
  return issue;
};

export const getAllIssues = () => issues;

export const getOneIssue = id => {
  return issues.find(issue => issue.id === id);
};

export const closeIssue = id => {
  console.log(id);
  const issue = getOneIssue(id);
  console.log(issue);
};
