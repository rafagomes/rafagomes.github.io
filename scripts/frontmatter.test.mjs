import assert from 'node:assert/strict';
import { test } from 'node:test';
import { isDraft, lastmod } from './frontmatter.mjs';

const post = (front, body = 'Body.') => `---\n${front}\n---\n${body}\n`;

test('lastmod prefers updatedAt over publishedAt', () => {
  assert.equal(lastmod(post('publishedAt: 2026-11-02\nupdatedAt: 2026-12-25')), '2026-12-25T00:00:00.000Z');
  assert.equal(lastmod(post('publishedAt: 2026-11-02')), '2026-11-02T00:00:00.000Z');
});

test('lastmod accepts quoted dates and trailing comments', () => {
  assert.equal(lastmod(post('publishedAt: "2026-11-02"')), '2026-11-02T00:00:00.000Z');
  assert.equal(lastmod(post("publishedAt: '2026-03-09'")), '2026-03-09T00:00:00.000Z');
  assert.equal(lastmod(post('publishedAt: 2026-11-02 # launch day')), '2026-11-02T00:00:00.000Z');
});

test('lastmod ignores date-like lines in the body', () => {
  assert.equal(lastmod(post('publishedAt: 2026-11-02', 'updatedAt: 2030-01-01')), '2026-11-02T00:00:00.000Z');
});

test('lastmod returns undefined instead of throwing on a bad or missing date', () => {
  assert.equal(lastmod(post('publishedAt: not-a-date')), undefined);
  assert.equal(lastmod(post('title: "No date"')), undefined);
  assert.equal(lastmod('no frontmatter'), undefined);
});

test('isDraft reads only the frontmatter', () => {
  assert.equal(isDraft(post('draft: true')), true);
  assert.equal(isDraft(post('draft: true # not ready')), true);
  assert.equal(isDraft(post('draft: false')), false);
  assert.equal(isDraft(post('title: "Post"', 'draft: true')), false);
});

test('frontmatter with Windows line endings is read', () => {
  assert.equal(isDraft('---\r\ndraft: true\r\n---\r\nBody.'), true);
});
