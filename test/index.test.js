import assert from 'assert';

import formatQuery from '../src/index';

describe('formatQuery', () => {
  it('default', () => {
    assert.equal(
      formatQuery({test: 1, test2: 2, test3: 3}),
      "test=1&test2=2&test3=3"
    );
  });
  it('url encoding', () => {
    assert.equal(
      formatQuery({test: "test test", test2: "test&test=test", test3: "test%test%20"}),
      "test=test%20test&test2=test%26test%3Dtest&test3=test%25test%2520"
    );
  });
});
