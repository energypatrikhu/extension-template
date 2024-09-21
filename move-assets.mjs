import { readdirSync, cpSync } from 'fs';
import { join } from 'path';

const assets = readdirSync(join('src', 'assets'), {
  withFileTypes: true,
  recursive: true,
}).filter((asset) => asset.isDirectory());

for (const asset of assets) {
  cpSync(join('src', 'assets', asset.name), join('dist', 'assets', asset.name), {
    recursive: true,
    force: true,
  });
}
