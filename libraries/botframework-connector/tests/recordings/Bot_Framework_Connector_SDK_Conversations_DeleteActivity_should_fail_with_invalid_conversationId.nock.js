// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['USER_ID'] = 'UK8CH2281:TKGSUQHQE';
  process.env['BOT_ID'] = 'BKGSYSTFG:TKGSUQHQE';
  process.env['HOST_URL'] = 'https://slack.botframework.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0389857f-2464-451b-ac83-5f54d565b1a7';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .filteringRequestBody(function (path) { return '*';})
.post('/v3/conversations', '*')
  .reply(200, {"id":"BKGSYSTFG:TKGSUQHQE:DKE8NUG92"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '45',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|41518c55f78f9d46b4fbb2933043f3bc.81c1378b_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Wed, 19 Jun 2019 20:23:17 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .filteringRequestBody(function (path) { return '*';})
.post('/v3/conversations/BKGSYSTFG%3ATKGSUQHQE%3ADKE8NUG92/activities', '*')
  .reply(200, {"id":"1560975797.001200"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '33',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|e2c59ef3fe2d914f92d0081d935a76c9.81c1378d_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Wed, 19 Jun 2019 20:23:17 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .delete('/v3/conversations/invalid-id/activities/1560975797.001200')
  .reply(400, {"error":{"code":"ServiceError","message":"Invalid ConversationId: invalid-id"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '105',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|7f540de447e7fa43addd53bd1cb67578.81c1378f_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Wed, 19 Jun 2019 20:23:17 GMT',
  'Connection',
  'close' ]);
 return result; }]];