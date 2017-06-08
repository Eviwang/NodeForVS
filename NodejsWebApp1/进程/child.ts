process.send("hello,parent");

process.on("message", function (e) {
    console.log(e);
});