import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c1ea000453a5c7107d5fd301a0490ead'],
    table: 'sys_ux_screen',
    data: {
        active: false,
        app_config: '2ba981dcc31a201098c960bc0eba8f00',
        disable_auto_reflow: false,
        disable_interoperable: 'false',
        event_mappings: '[]',
        macroponent: 'ebf0c46d53a5c7107d5fd301a0490e4a',
        macroponent_config: `{
    "activityDefinitionId": {
        "type": "JSON_LITERAL",
        "value": "47e9278fff131010834953bd6338f16e"
    },
    "activityLabel": {
        "type": "JSON_LITERAL",
        "value": "Sample Activity"
    },
    "activityState": {
        "type": "JSON_LITERAL",
        "value": "IN_PROGRESS"
    },
    "advanced": {
        "type": "JSON_LITERAL",
        "value": {
            "activityType": {
                "displayValue": "Record",
                "value": "e12af577871333003058d1a936cb0ba4"
            },
            "associatedRecordModCount": 0,
            "authorizedActions": [
                "complete",
                "skip",
                "restart"
            ],
            "contextId": "",
            "expandOnMountOrChange": false,
            "filterData": [],
            "formApi": {
                "dispatchDeclarativeAction": null,
                "formFieldsRequired": false,
                "modalDeclarativeAction": null,
                "requestReload": "",
                "requestSubmitAction": "",
                "requestValidation": "",
                "visible": true
            },
            "inUIBuilder": true,
            "loading": false,
            "processedOn": 0,
            "userSession": {},
            "workspaceConfigId": ""
        }
    },
    "assignedTo": {
        "type": "JSON_LITERAL",
        "value": {
            "avatar": "58e13b44c3222010ae17dd981840ddd3.iix?t=small",
            "displayValue": "Adela Cervantsz",
            "value": "0a826bf03710200044e0bfc8bcbe5d7a"
        }
    },
    "associatedRecord": {
        "type": "JSON_LITERAL",
        "value": "-1"
    },
    "associatedTable": {
        "type": "JSON_LITERAL",
        "value": "interaction"
    },
    "configProperties": {
        "type": "JSON_LITERAL",
        "value": {
            "expandFirstPrioritizedCard": true,
            "filterFields": "assigned_to",
            "maxFormFieldsOnCard": 15,
            "pendingActivityDisplay": "SHOW_ALL",
            "showActivityState": true,
            "showAutomatedManualIndicator": true,
            "slaConfiguration": ""
        }
    },
    "experienceProperties": {
        "type": "JSON_LITERAL",
        "value": {
            "attachment_source": {
                "displayValue": "associated_record",
                "elementData": {
                    "type": "choice"
                },
                "value": "associated_record"
            },
            "attachments_read_only": {
                "displayValue": "false",
                "elementData": {
                    "type": "boolean"
                },
                "value": "0"
            },
            "description": {
                "elementData": {
                    "type": "html"
                },
                "value": "<p>A sample description for an activity</p>"
            },
            "experience_status_record": {
                "displayValue": "",
                "elementData": {
                    "type": "document_id"
                },
                "value": ""
            },
            "experience_status_table": {
                "displayValue": "sys_flow_data",
                "elementData": {
                    "type": "table_name"
                },
                "value": "sys_flow_data"
            },
            "footer": {
                "elementData": {
                    "type": "string"
                },
                "label": "Footer (DEPRECATED)",
                "value": ""
            },
            "form_fields": {
                "elementData": {
                    "type": "field_list"
                },
                "value": "type,short_description"
            },
            "form_view": {
                "elementData": {
                    "type": "string"
                },
                "value": ""
            },
            "icon": {
                "displayValue": "",
                "elementData": {
                    "reference": "st_sys_design_system_icon",
                    "type": "reference"
                },
                "value": ""
            },
            "is_automated": {
                "displayValue": "false",
                "elementData": {
                    "type": "boolean"
                },
                "value": "0"
            },
            "pending_description": {
                "elementData": {
                    "type": "html"
                },
                "value": ""
            },
            "pending_title": {
                "elementData": {
                    "type": "string"
                },
                "value": ""
            },
            "record_fields": {
                "elementData": {
                    "type": "field_list"
                },
                "relatedProperties": [
                    {
                        "displayValue": "Adela Cervantsz",
                        "elementData": {
                            "reference": "sys_user",
                            "type": "reference"
                        },
                        "label": "Assigned to",
                        "name": "assigned_to",
                        "value": "0a826bf03710200044e0bfc8bcbe5d7a"
                    },
                    {
                        "displayValue": "Work in Progress",
                        "elementData": {
                            "reference": null,
                            "type": "string"
                        },
                        "label": "State",
                        "name": "state",
                        "value": "work_in_progress"
                    },
                    {
                        "displayValue": "Chat",
                        "elementData": {
                            "reference": null,
                            "type": "string"
                        },
                        "label": "Type",
                        "name": "type",
                        "value": "chat"
                    }
                ],
                "value": "state,assigned_to"
            },
            "show_checklist": {
                "displayValue": "false",
                "elementData": {
                    "type": "boolean"
                },
                "value": "0"
            },
            "show_sla": {
                "displayValue": "false",
                "elementData": {
                    "type": "boolean"
                },
                "value": "0"
            },
            "tagline": {
                "elementData": {
                    "type": "string"
                },
                "label": "Tagline (DEPRECATED)",
                "value": ""
            },
            "title": {
                "elementData": {
                    "type": "string"
                },
                "label": "Title (DEPRECATED)",
                "value": ""
            }
        }
    },
    "fillContainer": {
        "type": "JSON_LITERAL",
        "value": false
    },
    "laneContext": {
        "type": "JSON_LITERAL",
        "value": {
            "contextId": "",
            "name": "",
            "order": 0,
            "state": {
                "displayValue": "In Progress",
                "value": "IN_PROGRESS"
            },
            "title": ""
        }
    },
    "parentRecord": {
        "type": "JSON_LITERAL",
        "value": "-1"
    },
    "parentTable": {
        "type": "JSON_LITERAL",
        "value": "interaction"
    },
    "playbookContext": {
        "type": "JSON_LITERAL",
        "value": {
            "contextId": "b0f9599e5a613010021c69334198ef8a",
            "state": {
                "displayValue": "In Progress",
                "value": "IN_PROGRESS"
            }
        }
    },
    "playbookExperienceId": {
        "type": "JSON_LITERAL",
        "value": ""
    },
    "prioritized": {
        "type": "JSON_LITERAL",
        "value": false
    }
}`,
        name: 'Check for Duplicates Activity UI',
        order: 0,
        parent_macroponent: '64f1d8fbc3ca201098c960bc0eba8fe3',
        required_translations: `[ {
  "message" : "Assigned to",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Footer (DEPRECATED)",
  "code" : "",
  "comment" : ""
}, {
  "message" : "State",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Tagline (DEPRECATED)",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Title (DEPRECATED)",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Type",
  "code" : "",
  "comment" : ""
} ]`,
        screen_type: '89ddbb5ac3113010948404186e40dd1d',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
