import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { ListUsersController } from './controllers/ListUsersController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { CreateTagController } from './controllers/CreateTagController';
import { ListTagsController } from './controllers/ListTagsController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUsersController = new ListUsersController();
const listTagsController = new ListTagsController();

router.post("/users", createUserController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle)

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)

router.post("/session", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)


export { router }