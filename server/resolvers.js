const db = require('./db');

const Query = {
    jobs: () => db.jobs.list(),
    companies: () => db.companies.list(),
    company() { return db.companies.get('SJV0-wdOM') }
};

const Job = {
    company: (job) => db.companies.get(job.companyId)
};

module.exports = { Query, Job };