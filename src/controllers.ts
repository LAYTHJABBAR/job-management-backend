import { Request, Response } from 'express';
import { Job, jobs, writeJobsToFile, readJobsFromFile } from './models';

export const getJobs = (req: Request, res: Response) => {
    res.json(jobs);
};

export const getJobById = (req: Request, res: Response) => {
    const job = jobs.find(j => j.id === parseInt(req.params.id));
    if (job) {
        res.json(job);
    } else {
        res.status(404).json({ message: 'Job not found' });
    }
};

export const createJob = (req: Request, res: Response) => {
    const newJob: Job = {
        id: jobs.length ? jobs[jobs.length - 1].id + 1 : 1,
        ...req.body,
        appointmentDate: new Date(req.body.appointmentDate).toISOString()
    };
    jobs.push(newJob);
    writeJobsToFile(jobs);
    res.status(201).json(newJob);
};

export const updateJob = (req: Request, res: Response) => {
    const index = jobs.findIndex(j => j.id === parseInt(req.params.id));
    if (index !== -1) {
        jobs[index] = {
            ...jobs[index],
            ...req.body,
            appointmentDate: new Date(req.body.appointmentDate).toISOString()
        };
        writeJobsToFile(jobs);
        res.json(jobs[index]);
    } else {
        res.status(404).json({ message: 'Job not found' });
    }
};

export const deleteJob = (req: Request, res: Response) => {
    const index = jobs.findIndex(j => j.id === parseInt(req.params.id));
    if (index !== -1) {
        jobs.splice(index, 1);
        writeJobsToFile(jobs);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Job not found' });
    }
};
