import {Router, Request, Response} from 'express';
<<<<<<< HEAD

=======
>>>>>>> 29b55cd4011b52eece6768a684693f6aa3e0b435
import {UserRouter} from './users/routes/user.router';

const router: Router = Router();

router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
