"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.createJob = exports.getJobById = exports.getJobs = void 0;
const models_1 = require("./models");
const getJobs = (req, res) => {
    res.json(models_1.jobs);
};
exports.getJobs = getJobs;
const getJobById = (req, res) => {
    const job = models_1.jobs.find(j => j.id === parseInt(req.params.id));
    if (job) {
        res.json(job);
    }
    else {
        res.status(404).json({ message: 'Job not found' });
    }
};
exports.getJobById = getJobById;
const createJob = (req, res) => {
    const newJob = Object.assign(Object.assign({ id: models_1.jobs.length ? models_1.jobs[models_1.jobs.length - 1].id + 1 : 1 }, req.body), { appointmentDate: new Date(req.body.appointmentDate).toISOString() });
    models_1.jobs.push(newJob);
    (0, models_1.writeJobsToFile)(models_1.jobs);
    res.status(201).json(newJob);
};
exports.createJob = createJob;
const updateJob = (req, res) => {
    const index = models_1.jobs.findIndex(j => j.id === parseInt(req.params.id));
    if (index !== -1) {
        models_1.jobs[index] = Object.assign(Object.assign(Object.assign({}, models_1.jobs[index]), req.body), { appointmentDate: new Date(req.body.appointmentDate).toISOString() });
        (0, models_1.writeJobsToFile)(models_1.jobs);
        res.json(models_1.jobs[index]);
    }
    else {
        res.status(404).json({ message: 'Job not found' });
    }
};
exports.updateJob = updateJob;
const deleteJob = (req, res) => {
    const index = models_1.jobs.findIndex(j => j.id === parseInt(req.params.id));
    if (index !== -1) {
        models_1.jobs.splice(index, 1);
        (0, models_1.writeJobsToFile)(models_1.jobs);
        res.status(204).send();
    }
    else {
        res.status(404).json({ message: 'Job not found' });
    }
};
exports.deleteJob = deleteJob;
