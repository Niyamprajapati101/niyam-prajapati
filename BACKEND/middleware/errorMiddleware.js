export function notFound(_req, res) {
  return res.status(404).json({ message: "Route not found" });
}

export function errorHandler(error, _req, res, _next) {
  // Set status code from error or default to 500
  const statusCode = error.statusCode || (error.status && error.status !== 200 ? error.status : 500);
  
  // Log error for debugging
  console.error({
    statusCode,
    message: error.message,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });

  // Handle Mongoose validation errors
  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors)
      .map((err) => err.message)
      .join(", ");
    return res.status(400).json({
      message: "Validation error",
      details: messages,
    });
  }

  // Handle Mongoose cast errors
  if (error.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  // Handle duplicate key errors
  if (error.code === 11000) {
    const field = Object.keys(error.keyPattern)[0];
    return res.status(409).json({
      message: `${field} already exists`,
    });
  }

  return res.status(statusCode).json({
    message: error.message || "Server error",
  });
}
