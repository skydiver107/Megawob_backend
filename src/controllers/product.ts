import { Request, Response } from 'express'
import productService from '../services/product'

import { BAD_REQUEST, BACKEND_ERROR } from '../config'

import fs from 'fs';
import { UploadedFile } from 'express-fileupload';

const getData = async (req: Request, res: Response) => {
    try {
        const params = req.body.params

        if (params === undefined) {
            return res.status(400).json(BAD_REQUEST)
        }

        const result = await productService.findByFilter(params)

        return res.json({ success: true, message: 'Success', data: result })
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR)
    }
}

const addEvent = async (req: Request, res: Response) => {
    try {
        let { data } = req.body

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST)
        }
        data = JSON.parse(data)
        if (req.files !== null) {
            const file = req.files.file as UploadedFile
            const index = file['name'].lastIndexOf('.')
            const format = file['name'].substring(index, file['name'].length)
            const name = new Date().getTime().toString() + format
            const dir = `${__dirname}/../build/uploads`

            if (!fs.existsSync(`${__dirname}/../build`)) {
                fs.mkdirSync(`${__dirname}/../build`);
            }

            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            await file.mv(`${dir}/${name}`);
            data['image'] = '/uploads/' + name
        }
        delete data._id

        const result = await productService.createOne(data)

        return res.json({ success: true, message: 'Success', data: result })
    } catch (e) {
        console.log('Add Event:', e)
        return res.status(500).json(BACKEND_ERROR)
    }
}

const updateEvent = async (req: Request, res: Response) => {
    try {
        let { data } = req.body

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST)
        }
        data = JSON.parse(data)

        if (req.files !== null) {
            const file = req.files.file as UploadedFile
            const index = file['name'].lastIndexOf('.')
            const format = file['name'].substring(index, file['name'].length)
            const name = new Date().getTime().toString() + format
            const dir = `${__dirname}/../build/uploads`

            if (!fs.existsSync(`${__dirname}/../build`)) {
                fs.mkdirSync(`${__dirname}/../build`);
            }

            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            await file.mv(`${dir}/${name}`);
            data['image'] = '/uploads/' + name
        }

        const result = await productService.updateOne(data)

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

        const result = await productService.deleteOne(id)

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
}