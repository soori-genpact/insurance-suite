import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8f97057efba5cb58b70efc647befdc39'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '2ba981dcc31a201098c960bc0eba8f00',
        disable_auto_reflow: false,
        disable_interoperable: 'false',
        event_mappings: `[
    {
        "eventMappingId": "ggWheeddWeehhSHAUAMjjxiiHWeSMXMix",
        "isConfiguration": null,
        "offRowStorageId": null,
        "sourceEventApiName": "x_gegis_ins_policy.NAV_ITEM_SELECTED_RELAY_6297c17efba5cb58b70efc647befdce1",
        "sourceEventCorrelationId": null,
        "sourceEventDefinition": {
            "apiName": "x_gegis_ins_policy.NAV_ITEM_SELECTED_RELAY_6297c17efba5cb58b70efc647befdce1",
            "id": null,
            "type": "UXEVENT"
        },
        "sourceEventSysId": null,
        "targets": [
            {
                "broker": null,
                "clientScript": null,
                "clientTransformScript": null,
                "clientTransformScriptUxValue": null,
                "conditional": null,
                "declarativeAction": null,
                "event": {
                    "apiName": "sn_canvas_core.NAV_ITEM_SELECTED",
                    "payload": {
                        "container": {
                            "external": {
                                "binding": {
                                    "address": [
                                        "external"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "fields": {
                                "binding": {
                                    "address": [
                                        "fields"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "multiInstField": {
                                "binding": {
                                    "address": [
                                        "multiInstField"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "navigationOptions": {
                                "binding": {
                                    "address": [
                                        "navigationOptions"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "params": {
                                "binding": {
                                    "address": [
                                        "params"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "passiveNavigation": {
                                "binding": {
                                    "address": [
                                        "passiveNavigation"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "redirect": {
                                "binding": {
                                    "address": [
                                        "redirect"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "route": {
                                "binding": {
                                    "address": [
                                        "route"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "targetRoute": {
                                "binding": {
                                    "address": [
                                        "targetRoute"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "title": {
                                "binding": {
                                    "address": [
                                        "title"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            }
                        },
                        "type": "MAP_CONTAINER"
                    },
                    "sysId": "8b82bf18e5276c8e423b6e4e0889b463"
                },
                "operation": null,
                "targetId": "ddKJIevmLBExEjjZwCrLRckweo",
                "type": "EVENT"
            }
        ]
    }
]`,
        macroponent: '6297c17efba5cb58b70efc647befdce1',
        macroponent_config: `{
    "activityDefinitionId": {
        "type": "JSON_LITERAL",
        "value": "fcbbb246eb7331107626211f1a522853"
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
        "value": {}
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
                "elementData": {
                    "type": "document_id"
                }
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
                "value": "A sample footer for an activity"
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
                }
            },
            "icon": {
                "elementData": {
                    "reference": "st_sys_design_system_icon",
                    "type": "reference"
                }
            },
            "is_automated": {
                "displayValue": "false",
                "elementData": {
                    "type": "boolean"
                },
                "label": "Is Automated (DEPRECATED)",
                "value": "false"
            },
            "pending_description": {
                "elementData": {
                    "type": "html"
                }
            },
            "pending_title": {
                "elementData": {
                    "type": "string"
                }
            },
            "record_fields": {
                "elementData": {
                    "type": "field_list"
                },
                "relatedProperties": [
                    {
                        "elementData": {
                            "reference": "sys_user",
                            "type": "reference"
                        },
                        "label": "Assigned to",
                        "name": "assigned_to"
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
                "value": "Sample Activity Tagline"
            },
            "target_patch_label": {
                "elementData": {
                    "type": "string"
                },
                "value": ""
            },
            "title": {
                "elementData": {
                    "type": "string"
                }
            },
            "url": {
                "elementData": {
                    "type": "url"
                },
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
        name: 'Base Activity UIB Template',
        order: 0,
        parent_macroponent: '64f1d8fbc3ca201098c960bc0eba8fe3',
        required_translations: `[ {
  "message" : "Assigned to",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Is Automated (DEPRECATED)",
  "code" : "",
  "comment" : ""
}, {
  "message" : "State",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Type",
  "code" : "",
  "comment" : ""
} ]`,
        screen_type: '5b1efb5ac3113010948404186e40dd54',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
