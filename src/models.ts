export interface Job {
    id: number;
    customerName: string;
    jobType: string;
    status: string;
    appointmentDate: string;
    technician: string;
}

export let jobs: Job[] = [
    {
        id: 1,
        customerName: "John Doe",
        jobType: "Plumbing",
        status: "Scheduled",
        appointmentDate: "2024-06-15T09:00:00Z",
        technician: "Jane Smith"
    },
    {
        id: 2,
        customerName: "Alice Johnson",
        jobType: "Electrical",
        status: "Completed",
        appointmentDate: "2024-05-20T14:00:00Z",
        technician: "Bob Brown"
    }
];
