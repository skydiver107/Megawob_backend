import { Router, Request, Response } from 'express';

const router = Router()

import jwtRoutes from './jwt'
import settingRoutes from './setting'
import nftRoutes from './nft'
import productRoutes from './product'
import orderRoutes from './order'
import countryRoutes from './country'


// Backend Test
router.get('/test', (req: Request, res: Response) =>
  res.send('OK')
)

router.use('/jwt', jwtRoutes);
router.use('/setting', settingRoutes);
router.use('/nft', nftRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);
router.use('/country', countryRoutes);

export default router;