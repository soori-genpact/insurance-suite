import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6297c17efba5cb58b70efc647befdce1'],
    table: 'sys_ux_macroponent',
    data: {
        bundles: '[]',
        category: 'page',
        composition: `[
    {
        "definition": {
            "id": "e9da68254e5ea0af81d301c61b372022",
            "type": "MACROPONENT"
        },
        "elementId": "playbook_card_component",
        "elementLabel": "Playbook Card",
        "eventMappings": [
            {
                "eventMappingId": "cktepvjeoaaaaaakddghhslmnnsziijj",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "now_playbook_exp.PLAYBOOK_CARD#FORM_FIELDS_REQUIRED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "now_playbook_exp.PLAYBOOK_CARD#FORM_FIELDS_REQUIRED",
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
                            "apiName": "sn_uxf.MACROPONENT_STATE_UPDATE_REQUESTED",
                            "payload": {
                                "container": {
                                    "propName": {
                                        "type": "JSON_LITERAL",
                                        "value": "formFieldsRequired"
                                    },
                                    "value": {
                                        "binding": {
                                            "address": [
                                                "formFieldsRequired"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            },
                            "sysId": "32408b42ff7a10109046e490703bf176"
                        },
                        "operation": null,
                        "targetId": "cktepvjeoaaaaaalddghhsisdvhhddjjdd",
                        "type": "EVENT"
                    }
                ]
            }
        ],
        "isHero": false,
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": ""
        },
        "isNonDestructive": false,
        "overrides": {
            "composition": [
                {
                    "definition": {
                        "id": "4335ba6dca80378f7ba7a67cd6667bec",
                        "type": "MACROPONENT"
                    },
                    "elementId": "stylized_text_1",
                    "elementLabel": "Stylized text 1",
                    "eventMappings": [],
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": null
                    },
                    "preset": null,
                    "propertyValues": {
                        "configAria": {
                            "container": {},
                            "type": "MAP_CONTAINER"
                        },
                        "css": {
                            "type": "JSON_LITERAL",
                            "value": "* { }"
                        },
                        "tag": {
                            "type": "JSON_LITERAL",
                            "value": "h1"
                        },
                        "text": {
                            "type": "JSON_LITERAL",
                            "value": "Let's workflow it."
                        }
                    },
                    "slot": "content",
                    "styles": null
                }
            ],
            "layout": {}
        },
        "preset": null,
        "propertyValues": {
            "activityState": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "activityState"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "assignedTo": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "assignedTo"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "associatedSysId": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "associatedSysId"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "associatedTable": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "associatedTable"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "cardFooter": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "cardFooter"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "configProperties": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "configProperties"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "contextId": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "contextId"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "daClientActionContract": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "declarativeActions": {
                "type": "JSON_LITERAL"
            },
            "declarativeModel": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "declarativeModel",
                        "model"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "dispatchDeclarativeAction": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "dispatchDeclarativeAction"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "expandOnMountOrChange": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "expandOnMountOrChange"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "fillContainer": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "fillContainer"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "filterData": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "filterData"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "formFieldItems": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "formFieldItems"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "formFieldsRequired": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "formFieldsRequired"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "hasSufficientData": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "hasSufficientData"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "heading": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "heading"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "isAutomated": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "isAutomated"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "loading": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "loading"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "modalDeclarativeAction": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "modalDeclarativeAction"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "pendingDescription": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "pendingDescription"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "pendingTitle": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "pendingTitle"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "prioritized": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "showSla": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "showSla"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "tagline": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "tagline"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "userSession": {
                "binding": {
                    "address": [
                        "playbook_activity_ui",
                        "playbookCardProperties",
                        "userSession"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            }
        },
        "slot": null,
        "styles": null
    }
]`,
        data: `[
    {
        "definition": {
            "id": "c8d6649ec3310110948404186e40dd39",
            "type": "CLIENT_STATE"
        },
        "elementId": "playbook_activity_ui",
        "elementLabel": "Playbook Activity UI",
        "eventMappings": [],
        "inputValues": {
            "activityDefinitionId": {
                "binding": {
                    "address": [
                        "activityDefinitionId"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "activityLabel": {
                "binding": {
                    "address": [
                        "activityLabel"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "activityState": {
                "binding": {
                    "address": [
                        "activityState"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "advanced": {
                "binding": {
                    "address": [
                        "advanced"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "assignedTo": {
                "binding": {
                    "address": [
                        "assignedTo"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "associatedRecord": {
                "binding": {
                    "address": [
                        "associatedRecord"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "associatedTable": {
                "binding": {
                    "address": [
                        "associatedTable"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "configProperties": {
                "binding": {
                    "address": [
                        "configProperties"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "experienceProperties": {
                "binding": {
                    "address": [
                        "experienceProperties"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "fieldListExperienceProperties": {
                "type": "JSON_LITERAL",
                "value": [
                    "record_fields"
                ]
            },
            "fillContainer": {
                "binding": {
                    "address": [
                        "fillContainer"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "formFieldItems": {
                "binding": {
                    "address": [
                        "formFieldItems"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "formFieldsRequired": {
                "binding": {
                    "address": [
                        "formFieldsRequired"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "hasSufficientData": {
                "binding": {
                    "address": [
                        "hasSufficientData"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "laneContext": {
                "binding": {
                    "address": [
                        "laneContext"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "parentRecord": {
                "binding": {
                    "address": [
                        "parentRecord"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "parentTable": {
                "binding": {
                    "address": [
                        "parentTable"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "playbookContext": {
                "binding": {
                    "address": [
                        "playbookContext"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "playbookExperienceId": {
                "binding": {
                    "address": [
                        "playbookExperienceId"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "prioritized": {
                "binding": {
                    "address": [
                        "prioritized"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            }
        },
        "readEvaluationMode": "EAGER"
    }
]`,
        disable_auto_reflow: 'false',
        dispatched_events:
            'd3356afeff323010667053ea793bf143,fd7a772cffb23010667053ea793bf1c3,e3c2ca2cc7123010bfbaf89f51c260ce,3302cee8c7123010bfbaf89f51c26020,46e1ca2cc7123010bfbaf89f51c260c7,79a1cee8c7123010bfbaf89f51c2601c,9f51ca2cc7123010bfbaf89f51c260c3,c0d0cee8c7123010bfbaf89f51c26017,8dbd9324c3e33010fc7a60bc0eba8f7c,52666990ff103210b57bfffffffffff6,d3356afeff323010667053ea793bf143,fd7a772cffb23010667053ea793bf1c3,e3c2ca2cc7123010bfbaf89f51c260ce,3302cee8c7123010bfbaf89f51c26020,46e1ca2cc7123010bfbaf89f51c260c7,79a1cee8c7123010bfbaf89f51c2601c,9f51ca2cc7123010bfbaf89f51c260c3,c0d0cee8c7123010bfbaf89f51c26017,8dbd9324c3e33010fc7a60bc0eba8f7c,52666990ff103210b57bfffffffffff6,be97057efba5cb58b70efc647befdc05',
        extends: '814b032ec7653010bfbaf89f51c2608b',
        form_factors: '{}',
        handled_events: 'b8dbd1b3c3313010948404186e40dd54,b9038863ff713010667053ea793bf12e',
        internal_event_mappings: `{
    "MACROPONENT_PROPERTY_CHANGED": [
        {
            "broker": null,
            "clientScript": null,
            "conditional": null,
            "declarativeAction": null,
            "event": {
                "apiName": "sn_playbook_exp.PLAYBOOK_SUFFICIENT_DATA_CHECK",
                "payload": {
                    "type": "JSON_LITERAL",
                    "value": {}
                },
                "sysId": "b8dbd1b3c3313010948404186e40dd54"
            },
            "operation": null,
            "targetId": "ckshhzxsaabaaaabbvddhiiddaazzpoxjjbb",
            "type": "EVENT"
        }
    ],
    "MACROPONENT_READY": [
        {
            "broker": null,
            "clientScript": null,
            "conditional": null,
            "declarativeAction": null,
            "event": {
                "apiName": "sn_playbook_exp.PLAYBOOK_SUFFICIENT_DATA_CHECK",
                "payload": {
                    "type": "JSON_LITERAL",
                    "value": {}
                },
                "sysId": "b8dbd1b3c3313010948404186e40dd54"
            },
            "operation": null,
            "targetId": "cksjjgddknlaaaaaajddhiiddneetwlaeer",
            "type": "EVENT"
        },
        {
            "broker": null,
            "clientScript": null,
            "conditional": null,
            "declarativeAction": null,
            "event": {
                "apiName": "sn_uxf.MACROPONENT_STATE_UPDATE_REQUESTED",
                "payload": {
                    "script": {
                        "apiVersion": "1.0.0",
                        "controllerElementId": null,
                        "inlineScript": "/**\\n* @param {params} params\\n* @param {api} params.api\\n* @param {any} params.event\\n*/\\nfunction evaluateEvent({api, event}) {\\n    const patchLabel = api?.context?.props?.experienceProperties?.target_patch_label?.value || \\"xanadu\\";\\n    const releaseName = patchLabel.split(\\" \\")[0];\\n    const link = \`https://www.servicenow.com/docs/bundle/\${releaseName.toLowerCase()}-release-notes/page/release-notes/family-release-notes.html\`;\\n    return {\\n        propName: \\"releaseNotesUrl\\",\\n        value: link\\n    };\\n}\\n",
                        "scriptSysId": null,
                        "target": null
                    },
                    "type": "CLIENT_TRANSFORM_SCRIPT"
                },
                "sysId": "32408b42ff7a10109046e490703bf176"
            },
            "operation": null,
            "targetId": "eehhXjjiivvVIAUpiijjhiiMbcchhLccCUB",
            "type": "EVENT"
        }
    ],
    "sn_playbook_exp.PLAYBOOK_FORM_SET_FIELDS": [
        {
            "broker": null,
            "clientScript": null,
            "conditional": null,
            "declarativeAction": null,
            "event": {
                "apiName": "sn_uxf.MACROPONENT_STATE_UPDATE_REQUESTED",
                "payload": {
                    "container": {
                        "propName": {
                            "type": "JSON_LITERAL",
                            "value": "formFieldItems"
                        },
                        "value": {
                            "binding": {
                                "address": [
                                    "formFieldItems"
                                ]
                            },
                            "type": "EVENT_PAYLOAD_BINDING"
                        }
                    },
                    "type": "MAP_CONTAINER"
                },
                "sysId": "32408b42ff7a10109046e490703bf176"
            },
            "operation": null,
            "targetId": "ckteyroggmaaaacceeddghhszeebiieiccu",
            "type": "EVENT"
        }
    ],
    "sn_playbook_exp.PLAYBOOK_SUFFICIENT_DATA_CHECK": [
        {
            "broker": null,
            "clientScript": null,
            "conditional": null,
            "declarativeAction": null,
            "event": {
                "apiName": "sn_uxf.MACROPONENT_STATE_UPDATE_REQUESTED",
                "payload": {
                    "script": {
                        "apiVersion": "1.0.0",
                        "inlineScript": "/**\\n* @param {params} params\\n* @param {api} params.api\\n* @param {any} params.event\\n* @param {any} params.imports\\n*/\\nfunction evaluateEvent({api, event}) {\\n\\t// INSERT ANY CUSTOM SUFFICIENT DATA LOGIC HERE\\n\\n\\tconst {\\n\\t\\tassociatedTable,\\n\\t\\tassociatedRecord,\\n\\t\\texperienceProperties,\\n\\t\\tactivityState,\\n\\t\\tactivityLabel\\n\\t} = api.context.props;\\n\\n\\tconst {\\n\\t\\tdescription = {},\\n\\t\\ttitle = {},\\n\\t\\tassociated_table = {},\\n\\t\\tassociated_record = {},\\n\\t\\tform_fields = {},\\n\\t\\tform_view = {},\\n\\t\\trecord_fields = {},\\n\\t\\tattachment_source = {},\\n\\t\\tshow_checklist = {}\\n\\t} = experienceProperties;\\n\\n\\tconst propName = 'hasSufficientData';\\n\\n\\t// a card is sufficient with a description or title\\n\\tif (description.value || title.value)\\n\\t    return {\\n\\t\\t\\tpropName,\\n\\t\\t\\tvalue: true\\n\\t\\t};\\n\\n\\t// without a description or title, a card must have an associated record and table\\n\\tif (!associated_table.value || !associated_record.value)\\n\\t    return {\\n\\t\\t    propName,\\n\\t\\t    value: false\\n\\t    };\\n\\n\\t// If we have data to show for this associated record, we're all set\\n\\tif (\\n\\t\\tform_fields.value ||\\n\\t\\tform_view.value ||\\n\\t\\trecord_fields.value ||\\n\\t\\tattachment_source.value ||\\n\\t\\tshow_checklist.value\\n\\t)\\n\\t\\treturn {\\n\\t\\t\\tpropName,\\n\\t\\t\\tvalue: true\\n\\t\\t};\\n\\n\\t// No data to show\\n\\treturn {\\n\\t\\tpropName,\\n\\t\\tvalue: false\\n\\t};\\n}",
                        "scriptSysId": null
                    },
                    "type": "CLIENT_TRANSFORM_SCRIPT"
                },
                "sysId": "32408b42ff7a10109046e490703bf176"
            },
            "operation": null,
            "targetId": "cksjjgdduejjaaaaaamddhiiddqhhlaeuzdd",
            "type": "EVENT"
        }
    ]
}`,
        keyboard_shortcuts: '{}',
        layout: `{
    "default": {
        "children": null,
        "isInline": null,
        "items": [
            {
                "element_id": "playbook_card_component",
                "rules": {},
                "styles": {
                    "flex": "1",
                    "width": "100%"
                }
            }
        ],
        "root": null,
        "rules": null,
        "styles": {
            "align-items": "stretch",
            "flex-flow": "row nowrap",
            "height": "100%",
            "min-height": "5rem"
        },
        "templateId": "28bde4cd53431010e6bcddeeff7b12cc",
        "type": "flex"
    },
    "version": "3.0.0"
}`,
        name: 'Base Activity UIB Template',
        props: `[
    {
        "defaultValue": {
            "attachment_source": {
                "displayValue": "",
                "elementData": {
                    "type": "choice"
                },
                "value": ""
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
                "value": ""
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
                "value": ""
            },
            "form_fields": {
                "elementData": {
                    "type": "field_list"
                },
                "value": ""
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
                "label": "Is Automated (DEPRECATED)",
                "value": "false"
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
                "value": ""
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
                "value": ""
            },
            "title": {
                "elementData": {
                    "type": "string"
                },
                "value": ""
            },
            "url": {
                "displayValue": "",
                "elementData": {
                    "type": "url"
                },
                "value": ""
            }
        },
        "description": "Collection of properties for the Activity UI based on the Experience Type",
        "disabled": false,
        "fieldType": "json",
        "id": "experienceProperties",
        "label": "Experience properties",
        "mandatory": false,
        "name": "experienceProperties",
        "readOnly": false,
        "selectable": false,
        "valueType": "object"
    }
]`,
        required_translations: '[ ]',
        root_component_config: '{}',
        schema_version: '1.0.0',
        state_properties: `[
    {
        "description": "",
        "fieldType": "json",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": []
        },
        "label": "formFieldItems",
        "name": "formFieldItems",
        "shape": "",
        "valueType": "json"
    },
    {
        "description": "",
        "fieldType": "boolean",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": true
        },
        "label": "hasSufficientData",
        "name": "hasSufficientData",
        "shape": "",
        "valueType": "boolean"
    },
    {
        "description": "",
        "fieldType": "boolean",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": false
        },
        "label": "formFieldsRequired",
        "name": "formFieldsRequired",
        "shape": "",
        "valueType": "boolean"
    },
    {
        "id": "PjdjnP4cDEqb9u0KjTmgbpM1",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": "https://www.servicenow.com"
        },
        "name": "releaseNotesUrl",
        "shape": "",
        "valueType": "string"
    },
    {
        "id": "",
        "initialValue": null,
        "name": "",
        "shape": "",
        "valueType": "string"
    },
    {
        "id": "",
        "initialValue": null,
        "name": "",
        "shape": "",
        "valueType": "string"
    }
]`,
        style_config: '{}',
    },
})
