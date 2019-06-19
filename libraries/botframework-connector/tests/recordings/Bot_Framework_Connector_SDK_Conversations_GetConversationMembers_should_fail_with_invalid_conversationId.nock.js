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
  '|9a6a4b84e6203047aa4d5355d16ff3a1.81c13770_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Wed, 19 Jun 2019 20:23:12 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .get('/v3/conversations/BKGSYSTFG%3ATKGSUQHQE%3ADKE8NUG92M/members')
  .reply(400, {"error":{"code":"BadArgument","message":"Slack API error","innerHttpError":{"statusCode":200,"body":{"ok":false,"error":"channel_not_found"}}}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '230',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|5b4334ec3ffeca4b94285ebc22fb7366.81c13771_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Wed, 19 Jun 2019 20:23:12 GMT',
  'Connection',
  'close' ]);
 return result; }]];