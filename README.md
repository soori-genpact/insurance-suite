# Policy Suite — Now SDK Auth & Deploy

Scope: `x_gegis_ins_policy` | SDK: `@servicenow/sdk` v4.6.x

---

## Prerequisites

| Requirement     | Version                                                   |
| --------------- | --------------------------------------------------------- |
| Node.js         | 20+ (LTS)                                                 |
| npm             | bundled with Node.js                                      |
| Instance access | Admin or developer role on target PDI/enterprise instance |

---

## 1. Check Existing Credentials

Before adding a new instance, verify what is already stored:

```bash
npx now-sdk auth --list
```

Sample output:

```
┌─────────────────┬────────────────────────────────────────────┬───────────┐
│ Alias           │ URL                                        │ Default   │
├─────────────────┼────────────────────────────────────────────┼───────────┤
│ dev             │ https://dev12345.service-now.com           │ ✔         │
│ uat             │ https://uat67890.service-now.com           │           │
└─────────────────┴────────────────────────────────────────────┴───────────┘
```

---

## 2. Add an Instance

### Basic Auth (PDI / Local Dev)

```bash
npx now-sdk auth --add https://<your-instance>.service-now.com --type basic
```

You will be prompted for:

- **Alias** — a short label (e.g. `dev`, `uat`, `prod`)
- **Username** — your ServiceNow username
- **Password** — your ServiceNow password

### OAuth (Enterprise Instance)

```bash
npx now-sdk auth --add https://<your-instance>.service-now.com --type oauth
```

Follow the browser-based OAuth flow when prompted.

### Supply an Alias Inline (skip interactive prompt)

```bash
npx now-sdk auth --add https://<your-instance>.service-now.com --type basic --alias dev
```

> Credentials are stored in `.now-sdk/` — this folder is gitignored and never committed.

---

## 3. Set a Default Instance

```bash
npx now-sdk auth --use dev
```

All subsequent `build` / `install` commands use the default unless overridden.

---

## 4. Delete a Credential

```bash
npx now-sdk auth --delete <alias>
```

---

## 5. Build & Deploy Workflow

### Step 1 — Build (compile & validate fluent)

```bash
npx now-sdk build
```

Validates all `.now.ts` files and reports type errors before anything is pushed.

### Step 2 — Deploy (install to instance)

```bash
npx now-sdk install
```

Pushes compiled artifacts to the default instance. To target a specific instance:

```bash
npx now-sdk install --auth <alias>
```

### Full one-liner (build then deploy)

```bash
npx now-sdk build && npx now-sdk install
```

---

## 6. CI/CD — Non-Interactive Auth (no prompts)

Set these environment variables instead of storing credentials locally:

```bash
SN_SDK_INSTANCE_URL=https://<your-instance>.service-now.com
SN_SDK_USER=admin
SN_SDK_USER_PWD=<password>
```

Environment variables take precedence over stored `.now-sdk/` credentials.

---

## 7. Fetch Instance Type Definitions (IDE Autocomplete)

After auth, pull table and API types from the connected instance:

```bash
npx now-sdk dependencies
```

Enables full TypeScript autocompletion for platform APIs and your custom tables.

---

## Quick Reference

| Command                                     | What It Does                                   |
| ------------------------------------------- | ---------------------------------------------- |
| `npx now-sdk auth --list`                   | Show all stored instance credentials           |
| `npx now-sdk auth --add <url> --type basic` | Add basic-auth credentials for an instance     |
| `npx now-sdk auth --add <url> --type oauth` | Add OAuth credentials for an instance          |
| `npx now-sdk auth --use <alias>`            | Set default instance                           |
| `npx now-sdk auth --delete <alias>`         | Remove stored credentials                      |
| `npx now-sdk build`                         | Compile and validate all fluent source files   |
| `npx now-sdk install`                       | Deploy built artifacts to the default instance |
| `npx now-sdk install --auth <alias>`        | Deploy to a specific instance                  |
| `npx now-sdk build && npx now-sdk install`  | Build then deploy in one step                  |
| `npx now-sdk dependencies`                  | Fetch type definitions for IDE autocomplete    |

---

## PDI Setup Guidelines

Follow these steps **once per fresh PDI** before running any deploy or IDE sync.

### Step 1 — Register the Company Key

The scope `x_gegis_ins_policy` uses company key `gegis`. Every PDI must have this registered or the IDE sync and deploy will be blocked.

Run this in **Scripts - Background** (`https://<pdi>.service-now.com/sys.scripts.do`):

```javascript
var gr = new GlideRecord("sys_properties");
gr.addQuery("name", "sn_appauthor.all_company_keys");
gr.query();
if (gr.next()) {
  var existing = gr.getValue("value");
  if (existing.indexOf("gegis") === -1) {
    gr.setValue("value", existing ? existing + ",gegis" : "gegis");
    gr.update();
    gs.info("Updated: " + gr.getValue("value"));
  } else {
    gs.info("gegis already present: " + existing);
  }
} else {
  gr.initialize();
  gr.setValue("name", "sn_appauthor.all_company_keys");
  gr.setValue("value", "gegis");
  gr.insert();
  gs.info("Property created with value: gegis");
}
```

```javascript
var current = gs.getProperty("sn_appauthor.all_company_keys", "");
if (current.split(",").indexOf("gegis") === -1) {
  gs.setProperty(
    "sn_appauthor.all_company_keys",
    current ? current + ",gegis" : "gegis",
  );
}
gs.info(gs.getProperty("sn_appauthor.all_company_keys"));
```

### Step 2 — Import from Source Control (Studio)

1. Open **Studio** on the PDI: `https://<pdi>.service-now.com/studio.do`
2. Click **Import from Source Control**
3. Supply the git repo URL and credentials
4. Studio will read `sn_source_control.properties` → find the app under `43b656ac3bdd8b1005ad7564c3e45a73/` → create the `sys_app` record on the instance automatically

> The repo already contains the required Studio manifest files (`sn_source_control.properties` and the `sys_app` XML). Do not re-create them.

### Step 3 — Authenticate the SDK

```bash
now-sdk auth --add https://<pdi>.service-now.com --type basic --alias PDI
now-sdk auth --use PDI
```

### Step 4 — Build & Deploy

```bash
now-sdk build && now-sdk deploy --auth PDI
```

### PDI Setup Checklist

| #   | Step                           | Command / Location                           |
| --- | ------------------------------ | -------------------------------------------- |
| 1   | Register company key `gegis`   | Scripts - Background (script above)          |
| 2   | Import app from source control | Studio → Import from Source Control          |
| 3   | Add SDK auth credentials       | `now-sdk auth --add ... --alias PDI`         |
| 4   | Build and deploy               | `now-sdk build && now-sdk deploy --auth PDI` |

---

## Troubleshooting

### ERROR: Unable to install application as application was null

**Cause:** The `scopeId` in `now.config.json` is the `sys_id` of the `sys_app` record from the **original instance**. A fresh PDI has never had this app installed — it has no matching record, so the SDK receives null.

**This is not a roles issue.** `admin` is the correct user.

**Fix — first-time deploy to a new instance:**

1. On the target instance, create the app via **App Engine Studio → Create app**
   - Name: `Policy Suite`
   - Scope: `x_gegis_ins_policy`

2. Find the new app's `sys_id`:

   ```
   https://<instance>.service-now.com/sys_app_list.do?sysparm_query=scope%3Dx_gegis_ins_policy
   ```

3. Update `now.config.json`:

   ```json
   {
     "scope": "x_gegis_ins_policy",
     "scopeId": "<new-sys_id-from-this-instance>",
     "name": "Policy Suite"
   }
   ```

4. Deploy again:
   ```bash
   now-sdk build && now-sdk deploy --auth <alias>
   ```

> `scopeId` is instance-specific. Each PDI or environment will have a different `sys_id` for the same scoped app. When switching target instances, always verify the `scopeId` matches that instance's `sys_app` record.
