const Issue = require('../models/issues');
const factory = require('./handlerFactory');

exports.getIssues = factory.getAll(Issue, 'issues');

exports.createIssue = factory.createOne(Issue, 'issue');

exports.updateIssue = factory.updateOne(Issue, 'issue');

exports.deleteIssue = factory.deleteOne(Issue);