import test from "node:test";import assert from "node:assert/strict";import{isUrl}from"../src/index.js";
test("http",()=>assert.equal(isUrl("https://example.com/x"),true));
test("rejects ftp",()=>assert.equal(isUrl("ftp://example.com"),false));
test("relative",()=>assert.equal(isUrl("/docs",{allowRelative:true}),true));
