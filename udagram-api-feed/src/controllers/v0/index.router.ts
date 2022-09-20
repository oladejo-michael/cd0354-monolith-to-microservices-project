import {Router, Request, Response} from 'express';
import {FeedRouter} from './feed/routes/feed.router';

<<<<<<< HEAD

=======
>>>>>>> 29b55cd4011b52eece6768a684693f6aa3e0b435
const router: Router = Router();

router.use('/feed', FeedRouter);

<<<<<<< HEAD

=======
>>>>>>> 29b55cd4011b52eece6768a684693f6aa3e0b435
router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
