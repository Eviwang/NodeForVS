process.send("hello,parent");
process.on("message", function (e) {
    console.log(e);
});
//# sourceMappingURL=child.js.map