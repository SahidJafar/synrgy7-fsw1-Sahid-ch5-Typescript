import express, { Router } from 'express';
const router = Router();
import PeopleRouter from './peopleRouter';
// import ViewRouter from './viewRouter';

router.use('/people', PeopleRouter)
// router.use('/views', ViewRouter)

export default router

