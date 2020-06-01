var async = require("async");



function seriesDemo(req, res, next) {
    let rsp = {};
    const tasks = [
        function createCompany(cb) {
            const company = new Company({
                name: 'FullStackhour'
            });
            company.save(function(err, savedCompany) {
                if (err) {
                    return cb(err);
                }
                rsp.company = savedCompany;
                return cb(null, savedCompany);
            });
        },
        function createJob(cb) {
            const job = new Job({
                title: 'Node.js Developer',
                _company: rsp.company._id
            });
            job.save((err, savedJob) => {
                if (err) {
                    return cb(err);
                }
                rsp.job = savedJob;
                return cb(null, savedJob);
            })
        },
        function createApplication(cb) {
            const application = new Application({
                _job: rsp.job._id,
                _company: rsp.company._id
            });
            application.save((err, savedApp) => {
                if (err) {
                    return cb(err);
                }
                rsp.application = savedApp;
                return cb(null, savedApp);
            })
        },
        function createLicence(cb) {
            const licence = new Licence({
                name: 'FREE',
                _application: rsp.application._id
            });
            licence.save((err, savedLic) => {
                if (err) {
                    return cb(err);
                }
                return cb(null, savedLic);
            })
        }
    ];
    async.series(tasks, (err, results) => {
        if (err) {
            return next(err);
        }
        return res.json(results);
    })
}