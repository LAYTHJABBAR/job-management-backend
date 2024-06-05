import { Router } from 'express';
import { getJobs, getJobById, createJob, updateJob, deleteJob } from './controllers';

export const jobRoutes = Router();

jobRoutes.get('/', getJobs);
jobRoutes.get('/:id', getJobById);
jobRoutes.post('/', createJob);
jobRoutes.put('/:id', updateJob);
jobRoutes.delete('/:id', deleteJob);
