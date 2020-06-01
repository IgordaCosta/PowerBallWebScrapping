function seriesCallbackHell() {
 const company = new Company({
  name: 'FullStackHour'
 });
 company.save((err, savedCmp) => {
  if (err) {
   return next(err);
  }
  const job = new Job({
   title: 'Node.js Developer',
   _company: savedCmp._id
  });
  job.save((err, savedJob) => {
   if (err) {
    return next(err);
   }
   const application = new Application({
    _job: savedJob._id,
    _company: savedCmp._id
   });
   application.save((err, savedApp) => {
    if (err) {
     return next(err);
    }
    const licence = new Licence({
     name: 'FREE',
     _application: savedApp._id
    });
    licence.save((err, savedLic) => {
     if (err) {
      return next(err);
     }
     return res.json({
      company: savedCmp,
      job: savedJob,
      application: savedApp,
      licence: savedLic
     });
    });
   });
  });
 });
}