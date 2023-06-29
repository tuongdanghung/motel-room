import * as authService from '../services/auth'

export const register = async (req, res) => {
    const { name, password, phone } = req.body;
    try {
        if (!name || !password || !phone) return res.status(400).json({
            error: 1,
            message: 'Missing or invalid'
        })

        const response = await authService.registerService(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            errors: -1,
            message: 'failed to register' + error
        })
    }
}

// register a user

export const login = async (req, res) => {
    const { password, phone } = req.body;
    try {
        if (!password || !phone) return res.status(400).json({
            error: 1,
            message: 'Missing or invalid'
        })

        const response = await authService.loginService(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            errors: -1,
            message: 'failed to register' + error
        })
    }
}

// login user