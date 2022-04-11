const catchAsync = require('./../utils/catchAsync');
// const AppError = require('./../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
  // const data = await Model.find();

  res.status(200).render('overview', {
    // data,
  });
});
