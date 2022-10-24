import { Request, Response } from 'express'
import orderService from '../services/order'

import { BAD_REQUEST, BACKEND_ERROR } from '../config'

const getData = async (req: Request, res: Response) => {
    try {
        const params = req.body.params
        if (params === undefined) {
            return res.status(400).json(BAD_REQUEST)
        }

        const result = await orderService.findByFilter(params)

        return res.json({ success: true, message: 'Success', data: result })
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR)
    }
}

const addEvent = async (req: Request, res: Response) => {
    try {
        const { data } = req.body

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST)
        }

        delete data._id

        const result = await orderService.createOne(data)

        return res.json({ success: true, message: 'Success', data: result })
    } catch (e) {
        console.log('add event:', e)
        return res.status(500).json(BACKEND_ERROR)
    }
}

const updateEvent = async (req: Request, res: Response) => {
    try {
        const { data } = req.body

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST)
        }

        const result = await orderService.updateOne(data)

        return res.json({ success: true, message: 'Success', data: result })
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR)
    }
}

const deleteEvent = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

        if (id === undefined) {
            return res.status(400).json(BAD_REQUEST)
        }

        const result = await orderService.deleteOne(id)

        return res.json({ success: true, message: 'Success', data: result })
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR)
    }
}

const completeEvent = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

        if (id === undefined) {
            return res.status(400).json(BAD_REQUEST)
        }

        const data = {
            _id: id,
            status: 1
        }

        const result = await orderService.updateOne(data)

        return res.json({ success: true, message: 'Success', data: result })
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR)
    }
}

export default {
    getData,
    addEvent,
    updateEvent,
    deleteEvent,
    completeEvent
}