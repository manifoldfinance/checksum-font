
// W3C Font Validator
// Mocha Specification Suite

// Imports
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
import { readdirSync, readFileSync } from 'fs';
import assert from 'assert';

// Setup
import { w3cHtmlValidator } from '../dist/checksum-font-loader.js';
const validHtml =   readFileSync('spec/html/valid.html',   'utf8').replace(/\r/g, '');
const invalidHtml = readFileSync('spec/html/invalid.html', 'utf8').replace(/\r/g, '');

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('The "dist" folder', () => {

   it('contains the correct files', () => {
      const actual = readdirSync('dist').sort();
      const expected = [
         'checksum-font-loader.d.ts',
         'checksum-font-loader.js',
         'checksum-font-loader.umd.cjs',
         ];
      assertDeepStrictEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Network request failure', () => {

    it('for service unavailable (HTTP status 503) is handled gracefully', (done) => {
       const handleData = (data) => {
          const actual = data;
          const networkError = {
             type:    'network-error',
             message: '503 SERVICE UNAVAILABLE https://httpbin.org/status/503?out=json',
             };
          const expected = {
             validates: false,
             mode:      'html',
             title:     'HTML String (characters: 153)',
             html:      validHtml,
             filename:  null,
             website:   null,
             output:    'json',
             status:    503,
             messages:  [networkError],
             display:   null,
             };
          assertDeepStrictEqual(actual, expected, done);
          };
       const options = { html: validHtml, checkUrl: 'https://httpbin.org/status/503', output: 'json' };
       w3cHtmlValidator.validate(options).then(handleData);
       });
 
    });