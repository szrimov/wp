export default (error) => {
  throw createError({
    statusCode: error.statusCode,
    statusMessage: error.statusMessage,
    fatal: true,
  });
};
