const db = require('./db');

const Query = {
    jobs: () => db.jobs.list(),
    job: (root, {id}) => db.jobs.get(id),
    companies: () => db.companies.list(),
    company: (root, {id}) => db.companies.get(id)
};

const Mutation = {
    createJob: (root, {input}) => {
        const id = db.jobs.create(input);
        return db.jobs.get(id);
    }
};

const Company = {
    jobs: (company) => db.jobs.list()
        .filter(job => job.companyId === company.id)
};

const Job = {
    company: (job) => db.companies.get(job.companyId)
};


module.exports = { Query, Mutation, Company, Job };