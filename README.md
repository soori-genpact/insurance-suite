# Policy Suite

Scope: `x_gegis_ins_policy` | Company key: `gegis`

This repository is a **Studio source-control export** — update XML only. There
are no Fluent sources and nothing to compile. The app is installed by importing
this repo in Studio, not by an SDK build.

---

## Installing on a fresh PDI

Four steps. Steps 3 and 4 are the ones people miss: **installing the app gives
you the schema only.** No records, no running playbooks.

### 1. Register the company key

The scope uses company key `gegis`. Every PDI needs it registered or the Studio
import is blocked.

**Scripts – Background** (`https://<pdi>.service-now.com/sys.scripts.do`):

```javascript
var current = gs.getProperty("sn_appauthor.all_company_keys", "");
if (current.split(",").indexOf("gegis") === -1) {
  gs.setProperty(
    "sn_appauthor.all_company_keys",
    current ? current + ",gegis" : "gegis"
  );
  gs.info("Registered: " + gs.getProperty("sn_appauthor.all_company_keys"));
} else {
  gs.info("gegis already registered");
}
```

### 2. Import from Source Control

1. Open **Studio**: `https://<pdi>.service-now.com/studio.do`
2. **Import from Source Control**
3. Supply the git repo URL and credentials
4. Studio reads `sn_source_control.properties`, finds the app under
   `43b656ac3bdd8b1005ad7564c3e45a73/`, and creates the `sys_app` record

The repo already contains the Studio manifest (`sn_source_control.properties`
and the `sys_app` XML). Do not re-create them.

### 3. Load the demo data

**The app ships with no records.** A fresh install shows empty lists everywhere.

Seed data and its loaders live outside this repo:

```
C:\SOORI\SNOW-WS\SCRIPTS\DEMODATA_XML_N_SCRIPT\
```

Two options, documented in that folder's `README.md`:

| Folder | Result |
| ------ | ------ |
| `01_DATA_ONLY_NO_PLAYBOOKS/` | Records load, no playbooks start |
| `02_DATA_PLUS_PLAYBOOKS/` | Records load and playbooks run |

### 4. Start the playbooks

Only needed if you used folder `01`, or if the Worktrack tab looks empty after
loading.

The app has **two families** of record-driven playbooks and they start
differently:

| Family | Trigger | Starts when |
| ------ | ------- | ----------- |
| Case-level (`clearance_case_standard`, `risk_assessment_standard`, `exposure_case_standard`, `quote_bind_standard`) | insert of a case row | automatically, if the load used `GlideRecord.insert()` |
| Submission-level (`submission_clearance_case_standard`, `submission_risk_case_standard`, `submission_exposure_case_standard`, `submission_quote`) | **update** of a submission | never during a load — run `fire_submission_playbooks.js` |

A load that only inserts will never fire the submission-level family. That is
the usual cause of a half-populated Worktrack tab.

---

## Install checklist

| # | Step | Where |
| - | ---- | ----- |
| 1 | Register company key `gegis` | Scripts – Background |
| 2 | Import app from source control | Studio |
| 3 | Load demo data | `DEMODATA_XML_N_SCRIPT/` — pick folder `01` or `02` |
| 4 | Start submission playbooks | `fire_submission_playbooks.js` (Global scope) |

---

## Notes

**Background scripts run in Global.** `GlideSysAttachment` only returns content
in Global, and `sys_choice` / `sys_dictionary` writes need it too — the app scope
holds read-only privilege on those tables. Scripts that must run in the
`x_gegis_ins_policy` scope say so in their header.

**Case tasks are not seeded.** `x_gegis_ins_policy_case_task` rows are created at
runtime by the playbook activities, through the `Policy Suite Playbook Activity
Flow Task` flow action. They were removed from the seed XML — seeding them
produced duplicate and orphaned rows.

**Orchestration rules are application files.** The six `Orchestration: *`
business rules can be deactivated during a bulk load, but doing so from a script
writes to `sys_script` and lands in your current update set. Toggle them in the
UI instead, and do not export the app mid-load.

---

## Troubleshooting

### The app installed but every list is empty

Expected. Go to step 3 — the schema installs without records.

### Worktrack shows some playbooks but not others

The submission-level family never started. Run `fire_submission_playbooks.js` in
Global (step 4).

### Studio import is blocked / company key error

Step 1 was skipped, or the property was set on a different instance. The key is
per-instance.

### Duplicate case tasks on a submission

Two playbook contexts raced on the same activity. The task-creating flow action
now derives a deterministic `sys_id` from submission + module + activity, so the
second insert collides on the primary key instead of creating a duplicate. If
you still see duplicates, confirm that fix is present in the `Policy Suite
Playbook Activity Flow Task` action's Script step.
