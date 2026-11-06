# Levanter Lite (customized source)

This fork keeps the Levanter core and the following plugins only:
- `alive`
- `delete` (Anti-Delete control)
- `misc` (`status on/off` only)
- `ping`
- `vv` (View Once helper from the supplied LyFE gist)

## Important
- The core `lib/`, `config.js`, `index.js`, `package.json`, and `yarn.lock` are retained.
- Dependencies have deliberately NOT been removed. Levanter's core and retained plugins may load shared libraries dynamically; deleting dependencies without a full dependency trace can break startup.
- This reduces plugin files, not necessarily the installed dependency footprint. A 512 MB disk quota / 256 MB RAM plan may still be insufficient.
- Keep `config.env` private. Never commit WhatsApp `SESSION_ID`, database credentials, API keys, or other secrets.
- To prevent overwriting this customized source, disable automatic `git pull` in the hosting panel's Start command before deployment.
- Test `ping`, `alive`, `status on/off`, `delete`, and `vv` after deployment. The `vv` command is based on the supplied upstream gist and depends on the current Baileys message structure.
