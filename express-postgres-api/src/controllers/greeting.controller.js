const pool = require('../db');

// ✅ MUST EXIST
exports.getAllGreetings = async (req, res) => {
    try {
        const { rows } = await pool.query(
            'SELECT * FROM public.greeting ORDER BY id'
        );
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// ✅ MUST EXIST
exports.createGreeting = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Request body missing' });
    }

    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const { rows } = await pool.query(
            'INSERT INTO public.greeting (message) VALUES ($1) RETURNING *',
            [message]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
