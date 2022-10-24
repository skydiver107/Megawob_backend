import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/order'

router.post('/', ctrl.getData)
router.post('/add-event', ctrl.addEvent)
router.post('/update-event', ctrl.updateEvent)
router.post('/delete-event', ctrl.deleteEvent)
router.post('/complete-event', ctrl.completeEvent)

export default router