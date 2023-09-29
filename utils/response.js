export const successResponse = (res, message, data, status = 200) => {
  return res.status(status).json({
    status,
    message,
    data,
  });
};

export const errorResponse = (res, message, status = 400) => {
  return res.status(status).json({
    status,
    message,
  });
};
