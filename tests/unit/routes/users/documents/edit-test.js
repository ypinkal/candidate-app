import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | users/documents/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:users/documents/edit');
    assert.ok(route);
  });
});