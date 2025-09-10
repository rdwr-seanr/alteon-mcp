import { test } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import app from '../src/http-server';

test('GET /health returns ok:true', async () => {
  const res = await request(app).get('/health');
  assert.deepStrictEqual(res.body, { ok: true });
});
