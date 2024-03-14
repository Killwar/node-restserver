const { response, request } = require('express');


const GET = (_, res = response) => {
    res.status(200).json({ msg: 'Hello peoples!!' });
};


const POST = (req = request, res = response) => {
    const { name, friday } = req.body;

    res.status(201).json({
        msg: 'Hello peoples!!',
        name,
        friday
    });
};

const PUT = (req = request, res = response) => {
    const { userId } = req.params;

    res.status(201).json({
        msg: 'Hello peoples!!',
        userId
    });
};

module.exports = {
    GET,
    POST,
    PUT
}

