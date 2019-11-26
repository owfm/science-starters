import { Selector } from 'testcafe';

fixture`CI/CD Example`.page('http://localhost:3000');

test('Page should load and display the "increment" button', async t => {
  const actual = Selector('.increment-button').innerText;
  const expected = 'Increment';

  await t.expect(actual).eql(expected);
});
