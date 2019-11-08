/*
============================================
; Title: config.js
; Author: Professor Krasso
; Date: 07 November 2019
; Modified By: joshua Hughes
; Description: configuration page for authentication
;=============================================
*/

var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

config.web.secret = 'topsecret';


module.exports = config;
