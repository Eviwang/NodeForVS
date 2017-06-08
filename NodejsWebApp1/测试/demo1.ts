import * as mocha from "mocha";


describe("test", function () {
    it("should take less then 500ms", function (done) {
        this.timeout(1000);
        setTimeout(done, 600);
    });
})
