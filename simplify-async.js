exports.simpleAsync = function () {
    this.resolve;
    this.reject;
    this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
    });
};