# Clone Build Sheets — 13 Activities

Companion to **CLONE-GUIDE.md**. Every value here is pre-computed from the golden template
(*Initiate Submission Request*). Build on the **instance** following CLONE-GUIDE §5. All
**constants** (flow, category, Global experience, color/icon, UI template, 3 declarative actions,
variable) come from **CLONE-GUIDE §2** — do not retype them. `table = global` for all.

> **Per activity you set only:** Label, internal Name, then Duplicate the template's real UI
> screen in UI Builder. Everything else = constants.

---

## Process A — Exposure Management playbook (7 activities)

| # | Label | Internal name (`name`) | Layout name | UI variant name |
|---|---|---|---|---|
| 1 | Initiate Exposure Management | `x_gegis_ins_policy_initiate_exposure_management` | Initiate Exposure Management UI Layout | Initiate Exposure Management UI |
| 2 | Geo Mapping | `x_gegis_ins_policy_geo_mapping` | Geo Mapping UI Layout | Geo Mapping UI |
| 3 | Catastrophe Modelling | `x_gegis_ins_policy_catastrophe_modelling` | Catastrophe Modelling UI Layout | Catastrophe Modelling UI |
| 4 | Capacity Management | `x_gegis_ins_policy_capacity_management` | Capacity Management UI Layout | Capacity Management UI |
| 5 | Concentration Analysis | `x_gegis_ins_policy_concentration_analysis` | Concentration Analysis UI Layout | Concentration Analysis UI |
| 6 | Portfolio Optimization | `x_gegis_ins_policy_portfolio_optimization` | Portfolio Optimization UI Layout | Portfolio Optimization UI |
| 7 | Exposure Management Summary | `x_gegis_ins_policy_exposure_management_summary` | Exposure Management Summary UI Layout | Exposure Management Summary UI |

## Process B — Quote & Bind playbook (6 activities)

| # | Label | Internal name (`name`) | Layout name | UI variant name |
|---|---|---|---|---|
| 1 | Product Selection Details | `x_gegis_ins_policy_product_selection_details` | Product Selection Details UI Layout | Product Selection Details UI |
| 2 | Quote Workspace | `x_gegis_ins_policy_quote_workspace` | Quote Workspace UI Layout | Quote Workspace UI |
| 3 | Rating and Pricing | `x_gegis_ins_policy_rating_and_pricing` | Rating and Pricing UI Layout | Rating and Pricing UI |
| 4 | Quote Selection | `x_gegis_ins_policy_quote_selection` | Quote Selection UI Layout | Quote Selection UI |
| 5 | Contract Review | `x_gegis_ins_policy_contract_review` | Contract Review UI Layout | Contract Review UI |
| 6 | Activation | `x_gegis_ins_policy_activation` | Activation UI Layout | Activation UI |

---

## Per-activity build checklist (repeat for each of the 13)

For each row above, execute CLONE-GUIDE §5 and tick CLONE-GUIDE §7:

1. **Activity Definition** — New; set Label + Name from the table; `table=global`; `source=cb18ceef1b230010affd0e55cc4bcbf2`; `source_type=sys_hub_flow`; `category=708801831b0c1010affd0e55cc4bcb81`; `access=public`; `wait_for_completion=true`.
2. **UI Layout (`sys_pd_activity_type`)** — name from table; `color=#F1F6DB`; `color_category=7be0d143070e201083c548f78ad30050`; `icon=news_outline`.
3. **6 Experience Properties** — is_automated, associated_table, associated_record, experience_status_table, description, experience_status_record (CLONE-GUIDE §4 Layer 3).
4. **Activity UI screen (UI Builder)** — Duplicate the template's **real** variant `02352bb2…befdc37` → rename to the "UI variant name" → set `experience_type` = this layout, `playbook_experience` = Global → set the layout's **Default Activity UI** to it.
5. **3 Playbook Actions** — Restart Activity / Skip / Mark Complete on Global experience.
6. **Place on the correct process** — Process A items on the Exposure Management diagram, Process B items on the Quote & Bind diagram.
7. **Commit.**

---

## What is NOT auto-buildable (must be done in UI Builder / Designer on the instance)

- **Layer 5 — UI screen:** Duplicate in UI Builder (per row). Hand-authored XML = "missing screen in UI Builder" error.
- **Layer 6 — process placement:** drag onto the correct playbook diagram.

These two are the only manual-on-instance steps; the rest is constants + the values above.
