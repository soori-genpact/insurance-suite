import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ec000001000000000000000000000012'],
    table: 'sys_ux_macroponent',
    data: {
        bundles: '[]',
        category: 'page',
        disable_auto_reflow: 'false',
        extends: '19be392623033300f4b4c50947bf65ba',
        form_factors: '{}',
        internal_event_mappings: `{
    "MACROPONENT_PROPERTY_CHANGED": [
        {
            "broker": null,
            "clientScript": {
                "payload": {"type": "JSON_LITERAL", "value": {}},
                "sysId": "ec000001000000000000000000000015"
            },
            "conditional": null,
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "expUwReviewPropertyChanged",
            "type": "CLIENT_SCRIPT"
        }
    ],
    "EXP_UW_SUBMIT_DECISION": [
        {
            "broker": null,
            "clientScript": {
                "payload": {"type": "JSON_LITERAL", "value": {}},
                "sysId": "ec000001000000000000000000000016"
            },
            "conditional": null,
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "expUwReviewSubmitDecision",
            "type": "CLIENT_SCRIPT"
        }
    ]
}`,
        keyboard_shortcuts: '{}',
        layout: `{
    "default": {
        "children": null,
        "items": [
            {"element_id": "exp_uw_review_root", "styles": {"height": "100%"}}
        ],
        "root": null,
        "rules": null,
        "styles": {"flex-direction": "column", "height": "100%", "overflow-y": "auto"},
        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
        "type": "flex"
    },
    "version": "3.1.0"
}`,
        name: 'x_gegis_ins_policy-exp-uw-review-activity',
        props: `[
    {
        "defaultValue": null,
        "description": "sys_id of the current Exposure Case record",
        "fieldType": "string",
        "label": "sysId",
        "mandatory": true,
        "name": "sysId",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": "x_gegis_ins_policy_exposure_case",
        "description": "Table name for the Exposure Case",
        "fieldType": "string",
        "label": "table",
        "mandatory": false,
        "name": "table",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": "review",
        "description": "Activity mode: 'review' for summary review, 'signoff' for final UW approval",
        "fieldType": "string",
        "label": "mode",
        "mandatory": false,
        "name": "mode",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": "Review Exposure Summary",
        "description": "Activity title shown in the header",
        "fieldType": "string",
        "label": "title",
        "mandatory": false,
        "name": "title",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    }
]`,
        required_translations: `[
    {"message": "Review Exposure Summary"},
    {"message": "Underwriter Sign-off"},
    {"message": "Total Insured Value"},
    {"message": "Exposure Summary"},
    {"message": "Property Exposure"},
    {"message": "Workers Comp Exposure"},
    {"message": "Auto Exposure"},
    {"message": "Total TIV"},
    {"message": "Decision"},
    {"message": "Approve"},
    {"message": "Reject"},
    {"message": "Pending Review"},
    {"message": "UW Notes"},
    {"message": "Submit Decision"},
    {"message": "Exposure Items"},
    {"message": "Line of Business"},
    {"message": "Sum Insured"},
    {"message": "Location"},
    {"message": "Physical Damage Total"},
    {"message": "BI Total"},
    {"message": "Status"},
    {"message": "Complete"},
    {"message": "In Review"}
]`,
        schema_version: '1.0.0',
        state_properties: `[
    {
        "defaultValue": null,
        "description": "Loaded Exposure Case record",
        "fieldType": "object",
        "label": "exposureCase",
        "name": "exposureCase",
        "readOnly": false,
        "valueType": "object"
    },
    {
        "defaultValue": [],
        "description": "Exposure items for TIV breakdown display",
        "fieldType": "array",
        "label": "exposureItems",
        "name": "exposureItems",
        "readOnly": false,
        "valueType": "array"
    },
    {
        "defaultValue": [],
        "description": "TIV summary metrics by line of business",
        "fieldType": "array",
        "label": "tivSummary",
        "name": "tivSummary",
        "readOnly": false,
        "valueType": "array"
    },
    {
        "defaultValue": "pending",
        "description": "UW decision: 'approve' or 'reject'",
        "fieldType": "string",
        "label": "decision",
        "name": "decision",
        "readOnly": false,
        "valueType": "string"
    },
    {
        "defaultValue": "",
        "description": "UW decision justification notes",
        "fieldType": "string",
        "label": "uwNotes",
        "name": "uwNotes",
        "readOnly": false,
        "valueType": "string"
    },
    {
        "defaultValue": false,
        "description": "Whether submission is in progress",
        "fieldType": "boolean",
        "label": "isSubmitting",
        "name": "isSubmitting",
        "readOnly": false,
        "valueType": "boolean"
    },
    {
        "defaultValue": null,
        "description": "Error or validation message",
        "fieldType": "string",
        "label": "errorMessage",
        "name": "errorMessage",
        "readOnly": false,
        "valueType": "string"
    }
]`,
        style_config: '{}',
        composition: `[
    {
        "definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"},
        "elementId": "exp_uw_review_root",
        "elementLabel": "UW Review Root",
        "eventMappings": [
            {
                "eventMappingId": "expUwDecisionSubmitEvt",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "x_gegis_ins_policy.EXP_UW_SUBMIT_DECISION",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "x_gegis_ins_policy.EXP_UW_SUBMIT_DECISION",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "clientScript": null,
                        "conditional": null,
                        "declarativeAction": null,
                        "event": {
                            "apiName": "x_gegis_ins_policy.EXP_UW_SUBMIT_DECISION",
                            "payload": {
                                "container": {
                                    "decision": {
                                        "binding": {"address": ["decision"], "category": "state"},
                                        "type": "CONTEXT_BINDING"
                                    },
                                    "uwNotes": {
                                        "binding": {"address": ["uwNotes"], "category": "state"},
                                        "type": "CONTEXT_BINDING"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            },
                            "sysId": null
                        },
                        "operation": null,
                        "targetId": "expUwDecisionSubmitEvtTarget",
                        "type": "EVENT"
                    }
                ]
            }
        ],
        "isHidden": {"type": "JSON_LITERAL", "value": null},
        "overrides": {
            "composition": [
                {
                    "definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"},
                    "elementId": "exp_uw_summary_section",
                    "elementLabel": "TIV Summary Section",
                    "eventMappings": [],
                    "isHidden": {"type": "JSON_LITERAL", "value": null},
                    "overrides": {
                        "composition": [
                            {
                                "definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"},
                                "elementId": "exp_uw_summary_col",
                                "elementLabel": "Summary Column",
                                "eventMappings": [],
                                "isHidden": {"type": "JSON_LITERAL", "value": null},
                                "overrides": {
                                    "composition": [
                                        {
                                            "definition": {"id": "REPEATER", "type": "REPEATER"},
                                            "elementId": "exp_tiv_summary_cards",
                                            "elementLabel": "TIV Summary Cards",
                                            "eventMappings": [],
                                            "isHidden": {"type": "JSON_LITERAL", "value": null},
                                            "overrides": {
                                                "composition": [
                                                    {
                                                        "definition": {"id": "83db4ef2b2ff8a742957a7d2af6d7975", "type": "MACROPONENT"},
                                                        "elementId": "exp_uw_metric_card",
                                                        "elementLabel": "TIV Metric Card",
                                                        "eventMappings": [],
                                                        "isHidden": {"type": "JSON_LITERAL", "value": null},
                                                        "preset": null,
                                                        "propertyValues": {
                                                            "clickable": {"type": "JSON_LITERAL", "value": false},
                                                            "decimals": {"type": "JSON_LITERAL", "value": 2},
                                                            "format": {
                                                                "binding": {"address": ["format"], "category": "value"},
                                                                "type": "REPEATER_ITEM_BINDING"
                                                            },
                                                            "heading": {
                                                                "binding": {"address": ["heading"], "category": "value"},
                                                                "type": "REPEATER_ITEM_BINDING"
                                                            },
                                                            "icon": {
                                                                "binding": {"address": ["iconGlyph"], "category": "value"},
                                                                "type": "REPEATER_ITEM_BINDING"
                                                            },
                                                            "iconBackgroundColor": {
                                                                "binding": {"address": ["iconBackgroundColor"], "category": "value"},
                                                                "type": "REPEATER_ITEM_BINDING"
                                                            },
                                                            "iconColor": {"type": "JSON_LITERAL", "value": ""},
                                                            "trendDirection": {"type": "JSON_LITERAL", "value": "auto"},
                                                            "trendPositiveIsGood": {"type": "JSON_LITERAL", "value": true},
                                                            "value": {
                                                                "binding": {"address": ["value"], "category": "value"},
                                                                "type": "REPEATER_ITEM_BINDING"
                                                            }
                                                        },
                                                        "slot": null,
                                                        "styles": null
                                                    }
                                                ],
                                                "layout": {
                                                    "default": {
                                                        "items": [{"element_id": "exp_uw_metric_card"}],
                                                        "styles": {
                                                            "display": "grid",
                                                            "gap": "var(--now-scalable-space--sm)",
                                                            "grid-template-columns": "1fr 1fr 1fr 1fr",
                                                            "padding": "var(--now-scalable-space--md)"
                                                        },
                                                        "type": "grid"
                                                    },
                                                    "version": "3.1.0"
                                                }
                                            },
                                            "preset": null,
                                            "propertyValues": {},
                                            "repeatWith": {
                                                "binding": {"address": ["tivSummary"], "category": "state"},
                                                "type": "CONTEXT_BINDING"
                                            },
                                            "slot": null,
                                            "styles": {"default": {}}
                                        },
                                        {
                                            "definition": {"id": "REPEATER", "type": "REPEATER"},
                                            "elementId": "exp_items_list",
                                            "elementLabel": "Exposure Items List",
                                            "eventMappings": [],
                                            "isHidden": {"type": "JSON_LITERAL", "value": null},
                                            "overrides": {
                                                "composition": [
                                                    {
                                                        "definition": {"id": "83db4ef2b2ff8a742957a7d2af6d7975", "type": "MACROPONENT"},
                                                        "elementId": "exp_item_card",
                                                        "elementLabel": "Exposure Item Card",
                                                        "eventMappings": [],
                                                        "isHidden": {"type": "JSON_LITERAL", "value": null},
                                                        "preset": null,
                                                        "propertyValues": {
                                                            "clickable": {"type": "JSON_LITERAL", "value": false},
                                                            "decimals": {"type": "JSON_LITERAL", "value": 2},
                                                            "format": {"type": "JSON_LITERAL", "value": "none"},
                                                            "heading": {
                                                                "binding": {"address": ["line_of_business"], "category": "value"},
                                                                "type": "REPEATER_ITEM_BINDING"
                                                            },
                                                            "iconBackgroundColor": {"type": "JSON_LITERAL", "value": "#EBF5FF"},
                                                            "iconColor": {"type": "JSON_LITERAL", "value": "#0070D2"},
                                                            "iconGlyph": {"type": "JSON_LITERAL", "value": "$"},
                                                            "value": {
                                                                "binding": {"address": ["sum_insured"], "category": "value"},
                                                                "type": "REPEATER_ITEM_BINDING"
                                                            }
                                                        },
                                                        "slot": null,
                                                        "styles": null
                                                    }
                                                ],
                                                "layout": {
                                                    "default": {
                                                        "items": [{"element_id": "exp_item_card"}],
                                                        "styles": {
                                                            "display": "grid",
                                                            "gap": "var(--now-scalable-space--sm)",
                                                            "grid-template-columns": "1fr 1fr 1fr",
                                                            "padding": "var(--now-scalable-space--sm)"
                                                        },
                                                        "type": "grid"
                                                    },
                                                    "version": "3.1.0"
                                                }
                                            },
                                            "preset": null,
                                            "propertyValues": {},
                                            "repeatWith": {
                                                "binding": {"address": ["exposureItems"], "category": "state"},
                                                "type": "CONTEXT_BINDING"
                                            },
                                            "slot": null,
                                            "styles": {"default": {}}
                                        }
                                    ],
                                    "layout": {
                                        "default": {
                                            "items": [
                                                {"element_id": "exp_tiv_summary_cards"},
                                                {"element_id": "exp_items_list"}
                                            ],
                                            "styles": {"flex-direction": "column"},
                                            "type": "flex"
                                        },
                                        "version": "3.1.0"
                                    }
                                },
                                "preset": null,
                                "propertyValues": {
                                    "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true},
                                    "slotWrapperBehavior": {"type": "JSON_LITERAL", "value": "contents"}
                                },
                                "slot": null,
                                "styles": {"default": {"display": "contents"}}
                            }
                        ],
                        "layout": {
                            "default": {
                                "items": [{"element_id": "exp_uw_summary_col"}],
                                "styles": {
                                    "box-sizing": "border-box",
                                    "display": "grid",
                                    "grid-template-columns": "100fr",
                                    "padding": "var(--now-scalable-space--sm)"
                                },
                                "type": "grid"
                            },
                            "version": "3.1.0"
                        }
                    },
                    "preset": null,
                    "propertyValues": {
                        "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true},
                        "slotWrapperBehavior": {"type": "JSON_LITERAL", "value": "contents"}
                    },
                    "slot": null,
                    "styles": {"default": {"display": "contents"}}
                }
            ],
            "layout": {
                "default": {
                    "items": [{"element_id": "exp_uw_summary_section", "styles": {"height": "100%"}}],
                    "styles": {"flex-direction": "column", "height": "100%"},
                    "type": "flex"
                },
                "version": "3.1.0"
            }
        },
        "preset": null,
        "propertyValues": {
            "hideEmptyStateUi": {"type": "JSON_LITERAL", "value": true},
            "slotWrapperBehavior": {"type": "JSON_LITERAL", "value": "contents"}
        },
        "slot": null,
        "styles": {"default": {"display": "contents"}}
    }
]`,
        data: `[
    {
        "definition": {
            "id": "exp_uw_review_controller",
            "type": "CONTROLLER"
        },
        "dependencies": {},
        "elementId": "exp_uw_review_ctrl",
        "elementLabel": "UW Review Controller",
        "eventMappings": [],
        "inputValues": {
            "sysId": {
                "binding": {"address": ["sysId"], "category": "props"},
                "type": "CONTEXT_BINDING"
            },
            "table": {
                "binding": {"address": ["table"], "category": "props"},
                "type": "CONTEXT_BINDING"
            },
            "mode": {
                "binding": {"address": ["mode"], "category": "props"},
                "type": "CONTEXT_BINDING"
            }
        },
        "preset": null,
        "readEvaluationMode": "EAGER"
    }
]`,
    },
})
