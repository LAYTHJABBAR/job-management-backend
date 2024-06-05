import fs from 'fs';
import path from 'path';

const jobsFilePath = path.join(__dirname, '..','src', 'data', 'jobs.json');

export interface Job {
    id: number;
    customerName: string;
    jobType: string;
    status: string;
    appointmentDate: string;
    technician: string;
}

export const readJobsFromFile = (): Job[] => {
    const data = fs.readFileSync(jobsFilePath, 'utf-8');
    return JSON.parse(data);
};

export const writeJobsToFile = (jobs: Job[]): void => {
    fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2));
};

export let jobs: Job[] = readJobsFromFile();
