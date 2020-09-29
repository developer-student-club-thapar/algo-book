class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

exports.getAll = Model => async (req, res) => {
    try {
        const doc = await Model.find(req.query);
        if (!doc) {
            return new AppError(
                "The document you are looking is not found",
                404
            );
        }
        //SEND RESPONSE
        res.status(200).json({
            status: "success",
            results: doc.length,
            data: {
                data: doc,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getOne = Model => async (req, res) => {
    try {
        let query = Model.findById(req.params.id);
        const doc = await query;
        if (!doc) {
            return new AppError(
                "The document you are looking is not found",
                404
            );
        }

        res.status(200).json({
            status: "success",
            data: {
                data: doc,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};
