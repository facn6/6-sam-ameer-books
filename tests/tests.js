const tape = require("tape");

tape("tape is working for back-end tests", t => {
    t.equals(1, 1, "one equals one");
    t.end();
})