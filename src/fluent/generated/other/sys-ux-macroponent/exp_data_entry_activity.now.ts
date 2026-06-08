import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ec000001000000000000000000000011'],
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
                "sysId": "ec000001000000000000000000000013"
            },
            "conditional": null,
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "expDataEntryPropertyChanged",
            "type": "CLIENT_SCRIPT"
        }
    ],
    "EXP_SAVE_AND_CONTINUE": [
        {
            "broker": null,
            "clientScript": {
                "payload": {"type": "JSON_LITERAL", "value": {}},
                "sysId": "ec000001000000000000000000000014"
            },
            "conditional": null,
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "expDataEntrySaveAndContinue",
            "type": "CLIENT_SCRIPT"
        }
    ]
}`,
        keyboard_shortcuts: '{}',
        layout: `{
    "default": {
        "children": null,
        "items": [
            {"element_id": "exp_data_entry_root", "styles": {"height": "100%"}}
        ],
        "root": null,
        "rules": null,
        "styles": {"flex-direction": "column", "height": "100%", "overflow-y": "auto"},
        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
        "type": "flex"
    },
    "version": "3.1.0"
}`,
        name: 'x_gegis_ins_policy-exp-data-entry-activity',
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
        "defaultValue": "Enter Exposure Items",
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
    {"message": "Enter Exposure Items"},
    {"message": "Exposure Case"},
    {"message": "Line of Business"},
    {"message": "Location"},
    {"message": "Building"},
    {"message": "Machinery"},
    {"message": "Stock"},
    {"message": "Business Interruption Total"},
    {"message": "Sum Insured"},
    {"message": "Add Exposure Item"},
    {"message": "Save & Continue"},
    {"message": "Total TIV"},
    {"message": "Notes"},
    {"message": "Property"},
    {"message": "Workers Comp"},
    {"message": "Auto"},
    {"message": "Exposure Status"},
    {"message": "Data Entry"}
]`,
        schema_version: '1.0.0',
        state_properties: `[
    {
        "defaultValue": null,
        "description": "Loaded exposure case record",
        "fieldType": "object",
        "label": "exposureCase",
        "name": "exposureCase",
        "readOnly": false,
        "valueType": "object"
    },
    {
        "defaultValue": [],
        "description": "List of exposure items for this case",
        "fieldType": "array",
        "label": "exposureItems",
        "name": "exposureItems",
        "readOnly": false,
        "valueType": "array"
    },
    {
        "defaultValue": false,
        "description": "Whether a save operation is in progress",
        "fieldType": "boolean",
        "label": "isSaving",
        "name": "isSaving",
        "readOnly": false,
        "valueType": "boolean"
    },
    {
        "defaultValue": null,
        "description": "Validation error message",
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
        "elementId": "exp_data_entry_root",
        "elementLabel": "Exposure Data Entry Root",
        "eventMappings": [
            {
                "eventMappingId": "expDataEntrySaveEvt",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "x_gegis_ins_policy.EXP_SAVE_AND_CONTINUE",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "x_gegis_ins_policy.EXP_SAVE_AND_CONTINUE",
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
                            "apiName": "x_gegis_ins_policy.EXP_SAVE_AND_CONTINUE",
                            "payload": {},
                            "sysId": null
                        },
                        "operation": null,
                        "targetId": "expDataEntrySaveEvtTarget",
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
                    "elementId": "exp_header_section",
                    "elementLabel": "Activity Header",
                    "eventMappings": [],
                    "isHidden": {"type": "JSON_LITERAL", "value": null},
                    "overrides": {
                        "composition": [
                            {
                                "definition": {"id": "d356d14b6e293a3020a244b63d278d8f", "type": "MACROPONENT"},
                                "elementId": "exp_header_column_1",
                                "elementLabel": "Header Column",
                                "eventMappings": [],
                                "isHidden": {"type": "JSON_LITERAL", "value": null},
                                "overrides": {
                                    "composition": [
                                        {
                                            "definition": {"id": "REPEATER", "type": "REPEATER"},
                                            "elementId": "exp_tiv_metrics",
                                            "elementLabel": "TIV Metrics",
                                            "eventMappings": [],
                                            "isHidden": {"type": "JSON_LITERAL", "value": null},
                                            "overrides": {
                                                "composition": [
                                                    {
                                                        "definition": {"id": "83db4ef2b2ff8a742957a7d2af6d7975", "type": "MACROPONENT"},
                                                        "elementId": "exp_metric_card",
                                                        "elementLabel": "Exposure Metric Card",
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
                                                        "items": [{"element_id": "exp_metric_card"}],
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
                                                "binding": {
                                                    "address": ["exposureItems"],
                                                    "category": "state"
                                                },
                                                "type": "CONTEXT_BINDING"
                                            },
                                            "slot": null,
                                            "styles": {"default": {}}
                                        }
                                    ],
                                    "layout": {
                                        "default": {
                                            "items": [{"element_id": "exp_tiv_metrics"}],
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
                                "items": [{"element_id": "exp_header_column_1"}],
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
                    "items": [{"element_id": "exp_header_section", "styles": {"height": "100%"}}],
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
            "id": "exp_data_entry_controller",
            "type": "CONTROLLER"
        },
        "dependencies": {},
        "elementId": "exp_data_entry_ctrl",
        "elementLabel": "Exposure Data Entry Controller",
        "eventMappings": [],
        "inputValues": {
            "sysId": {
                "binding": {"address": ["sysId"], "category": "props"},
                "type": "CONTEXT_BINDING"
            },
            "table": {
                "binding": {"address": ["table"], "category": "props"},
                "type": "CONTEXT_BINDING"
            }
        },
        "preset": null,
        "readEvaluationMode": "EAGER"
    }
]`,
    },
})
