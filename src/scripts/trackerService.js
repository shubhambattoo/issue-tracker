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

const setIssues = myIssues => {
  issues = myIssues;
};

export const getOneIssue = id => {
  return issues.find(issue => issue.id === id);
};

export const closeIssue = id => {
  try {
    const issue = getOneIssue(id);
    const index = issues.findIndex((el) => el.id == id);
    issue.isOpen = false;
    issues.splice(index, 1, issue);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteIssue = id => {
  try {
    const index = issues.findIndex((el) => el.id == id);
    issues.splice(index, 1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
