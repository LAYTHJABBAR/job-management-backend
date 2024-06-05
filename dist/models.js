"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobs = exports.writeJobsToFile = exports.readJobsFromFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const jobsFilePath = path_1.default.join(__dirname, '..', 'src', 'data', 'jobs.json');
const readJobsFromFile = () => {
    const data = fs_1.default.readFileSync(jobsFilePath, 'utf-8');
    return JSON.parse(data);
};
exports.readJobsFromFile = readJobsFromFile;
const writeJobsToFile = (jobs) => {
    fs_1.default.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2));
};
exports.writeJobsToFile = writeJobsToFile;
exports.jobs = (0, exports.readJobsFromFile)();
