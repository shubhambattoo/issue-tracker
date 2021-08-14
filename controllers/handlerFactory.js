const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.createOne = (Model, name = 'data') =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'ok',
      [name]: doc,
    });
  });

exports.getAll = (Model, name = 'data') =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.findAll();

    res.json({
      status: 'ok',
      results: docs.length,
      [name]: docs,
    });
  });

exports.updateOne = (Model, name = 'data') =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const doc = await Model.update(req.body, { where: { id } });

    if (!doc) {
      return next(new AppError(`No document found with that ID`, 404));
    }

    res.json({
      status: 'ok',
      data: {
        [name]: doc,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const doc = await Model.destroy({
      where: {
        id,
      },
    });

    if (!doc) {
      return next(new AppError(`No doc found with that ID`, 404));
    }

    res.status(204).json({
      status: 'ok',
      data: null,
    });
  });
