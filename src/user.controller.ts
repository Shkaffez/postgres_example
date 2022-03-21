import { NextFunction, Request, Response } from "express";
import User from "./models/users";

export async function createOne(req: Request, res: Response, next: NextFunction) {
    const USER_MODEL = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    try {
        const user = await User.create(USER_MODEL);
        return res.status(201).json(user);
    } catch (error) {
        console.log('ERROR in createOne ' + 'USER:', error);
        return res.status(500).json(error);
    }
}

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await User.findAll();
        return res.status(201).json(users);
    } catch (error) {
        console.log('ERROR in createOne ' + 'USER:', error);
        return res.status(500).json(error);
    }
}

export async function getOne(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await User.findByPk(req.params.id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function updateOne(req: Request, res: Response, next: NextFunction) {
    const USER_MODEL = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }
    try {
        const user = await User.update(USER_MODEL, { where: { id: req.params.id } })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}


export async function deleteOne(req: Request, res: Response, next: NextFunction) {
    console.log('[DELETE] /users/:id')
    try {
        const user = await User.destroy({ where: { id: req.params.id } })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}
