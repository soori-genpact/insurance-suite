import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ebf0c46d53a5c7107d5fd301a0490e4a'],
    table: 'sys_ux_macroponent',
    data: {
        bundles: `[
    {
        "definitionId": "d6c0f4f531825510f8773d3775164e01",
        "instanceId": "form_1",
        "name": "Form 1",
        "useByReference": false
    }
]`,
        category: 'page',
        composition: `[
    {
        "bundleLink": {
            "bundleInstanceId": "form_1",
            "elementType": "member",
            "originalElementId": "modalContainerViewport"
        },
        "definition": {
            "id": "61c315e9ccb8970546c30f3e2da41a32",
            "type": "MACROPONENT_VIEWPORT"
        },
        "elementId": "modalcontainerviewport",
        "elementLabel": "Modal Container (Viewport)",
        "eventMappings": [],
        "extensionPoints": [
            {
                "controllerElementId": "record_playbook",
                "name": "Record page modals",
                "sysId": "e38960c1c30301103581a5a1d840dd45"
            }
        ],
        "isHero": false,
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "isNonDestructive": false,
        "items": [],
        "overrides": null,
        "preset": null,
        "propertyValues": {
            "bare": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "contents": {
                "type": "JSON_LITERAL",
                "value": {
                    "fields": {},
                    "route": ""
                }
            },
            "disableDismiss": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "displayOptions": {
                "type": "JSON_LITERAL",
                "value": {}
            },
            "enableResizable": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "resizableMaxHeight": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "resizableMaxWidth": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "resizableMinHeight": {
                "type": "JSON_LITERAL",
                "value": 133
            },
            "resizableMinWidth": {
                "type": "JSON_LITERAL",
                "value": 420
            },
            "size": {
                "type": "JSON_LITERAL",
                "value": "md"
            }
        },
        "slot": null,
        "styles": {
            "width": "100%"
        }
    },
    {
        "bundleLink": {
            "bundleInstanceId": "form_1",
            "elementType": "member",
            "originalElementId": "reference_info_popover"
        },
        "definition": {
            "id": "de328a48e97cdcc50a5043e029bf0a66",
            "type": "MACROPONENT"
        },
        "elementId": "reference_info_popover",
        "elementLabel": "Reference Info Popover",
        "eventMappings": [],
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "overrides": {
            "composition": [
                {
                    "bundleLink": {
                        "bundleInstanceId": "form_1",
                        "elementType": "member",
                        "originalElementId": "reference_info_content"
                    },
                    "definition": {
                        "id": "d356d14b6e293a3020a244b63d278d8f",
                        "type": "MACROPONENT"
                    },
                    "elementId": "reference_info_content",
                    "elementLabel": "Reference Info Content",
                    "eventMappings": [],
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": null
                    },
                    "overrides": {
                        "composition": [
                            {
                                "bundleLink": {
                                    "bundleInstanceId": "form_1",
                                    "elementType": "member",
                                    "originalElementId": "open_record_button"
                                },
                                "definition": {
                                    "id": "d37ce8abca89d02905fed903c8e34d8e",
                                    "type": "MACROPONENT"
                                },
                                "elementId": "open_record_button",
                                "elementLabel": "Open Record Button",
                                "eventMappings": [
                                    {
                                        "eventMappingId": "cmeeneaiizccaaaaaaccvffbebbxeeccggjjibb",
                                        "isConfiguration": false,
                                        "offRowStorageId": null,
                                        "sourceEventApiName": "sn_button.NOW_BUTTON#CLICKED",
                                        "sourceEventCorrelationId": null,
                                        "sourceEventDefinition": {
                                            "apiName": "sn_button.NOW_BUTTON#CLICKED",
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
                                                "event": null,
                                                "operation": {
                                                    "dataBrokerId": "8b16a4a343b33110ac8ba40f5bb8f21c",
                                                    "operationName": "PLAYBOOK_INTERNAL#OPEN_RECORD",
                                                    "parentResourceId": "playbook_activity_ui_controller",
                                                    "payload": {
                                                        "script": {
                                                            "apiVersion": "1.0.0",
                                                            "controllerElementId": null,
                                                            "inlineScript": "/**\\n* @param {params} params\\n* @param {api} params.api\\n* @param {any} params.event\\n*/\\nfunction evaluateEvent({api, event}) {\\n    const popoverNavigation = api.data.record_playbook.popoverNavigation;\\n    const fields = popoverNavigation ? popoverNavigation.payload.fields : {};\\n    const { table, sysId } = fields;\\n    return {\\n        table,\\n        sys_id: sysId\\n    };\\n}",
                                                            "scriptSysId": null,
                                                            "target": null
                                                        },
                                                        "type": "CLIENT_TRANSFORM_SCRIPT"
                                                    }
                                                },
                                                "targetId": "eUjjPsPxwAkddyjjSEMeWdZggeeddXf",
                                                "type": "DATABROKER_OP"
                                            }
                                        ]
                                    }
                                ],
                                "isHidden": {
                                    "type": "JSON_LITERAL",
                                    "value": null
                                },
                                "preset": null,
                                "propertyValues": {
                                    "active": {
                                        "type": "JSON_LITERAL",
                                        "value": false
                                    },
                                    "animatedIcon": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "configAria": {},
                                    "disabled": {
                                        "type": "JSON_LITERAL",
                                        "value": false
                                    },
                                    "icon": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "label": {
                                        "type": "TRANSLATION_LITERAL",
                                        "value": {
                                            "code": null,
                                            "comment": "",
                                            "message": "Button"
                                        }
                                    },
                                    "landmark": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "size": {
                                        "type": "JSON_LITERAL",
                                        "value": "md"
                                    },
                                    "tooltipContent": {
                                        "type": "TRANSLATION_LITERAL",
                                        "value": {
                                            "code": null,
                                            "comment": "",
                                            "message": "Enter a label"
                                        }
                                    },
                                    "variant": {
                                        "type": "JSON_LITERAL",
                                        "value": "secondary"
                                    }
                                },
                                "slot": null,
                                "styles": null
                            },
                            {
                                "bundleLink": {
                                    "bundleInstanceId": "form_1",
                                    "elementType": "member",
                                    "originalElementId": "display_only_record_form"
                                },
                                "definition": {
                                    "id": "f4d3254a798ef092d9023d408f257789",
                                    "type": "MACROPONENT"
                                },
                                "elementId": "display_only_record_form",
                                "elementLabel": "Display Only Form",
                                "eventMappings": [],
                                "isHidden": {
                                    "type": "JSON_LITERAL",
                                    "value": null
                                },
                                "preset": null,
                                "propertyValues": {
                                    "bare": {
                                        "type": "JSON_LITERAL",
                                        "value": false
                                    },
                                    "disableCollapse": {
                                        "type": "JSON_LITERAL",
                                        "value": true
                                    },
                                    "displayMode": {
                                        "type": "JSON_LITERAL",
                                        "value": "read-only"
                                    },
                                    "forcedViewName": {
                                        "type": "JSON_LITERAL",
                                        "value": ""
                                    },
                                    "inPopover": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "inUiBuilder": {
                                        "type": "JSON_LITERAL",
                                        "value": true
                                    },
                                    "isSectionTitleHidden": {
                                        "type": "JSON_LITERAL",
                                        "value": false
                                    },
                                    "isShowLoader": {
                                        "type": "JSON_LITERAL",
                                        "value": true
                                    },
                                    "labelValueLayout": {
                                        "type": "JSON_LITERAL",
                                        "value": "tabbed"
                                    },
                                    "labelValueLayoutSize": {
                                        "type": "JSON_LITERAL",
                                        "value": "md"
                                    },
                                    "query": {
                                        "type": "JSON_LITERAL",
                                        "value": ""
                                    },
                                    "readOnlyForm": {
                                        "type": "JSON_LITERAL",
                                        "value": true
                                    },
                                    "sysId": {
                                        "type": "JSON_LITERAL",
                                        "value": -1
                                    },
                                    "table": {
                                        "type": "JSON_LITERAL",
                                        "value": "incident"
                                    },
                                    "view": {
                                        "type": "JSON_LITERAL",
                                        "value": "ess"
                                    },
                                    "workspaceConfigId": {
                                        "type": "JSON_LITERAL",
                                        "value": "7b24ceae5304130084acddeeff7b12a3"
                                    }
                                },
                                "slot": null,
                                "styles": null
                            }
                        ],
                        "layout": {
                            "default": {
                                "children": null,
                                "items": [
                                    {
                                        "element_id": "open_record_button",
                                        "styles": {
                                            "align-self": "flex-end",
                                            "position": "absolute",
                                            "z-index": "99"
                                        }
                                    },
                                    {
                                        "element_id": "display_only_record_form",
                                        "styles": {
                                            "min-height": "80px",
                                            "min-width": "504px"
                                        }
                                    }
                                ],
                                "root": null,
                                "rules": null,
                                "styles": {
                                    "align-items": "stretch",
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "margin": "var(--now-scalable-space--md)",
                                    "padding-inline-end": "calc(var(--now-scale-space--sm, 1)*0.5rem)",
                                    "padding-top": "calc(var(--now-scale-space--sm, 1)*0.5rem)"
                                },
                                "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                                "type": "flex"
                            },
                            "version": "3.0.0"
                        }
                    },
                    "preset": null,
                    "propertyValues": {
                        "hideEmptyStateUi": true,
                        "includeAriaHeading": false,
                        "slotWrapperBehavior": "fullheight",
                        "type": "section"
                    },
                    "slot": "content",
                    "styles": {
                        "width": "250px"
                    }
                }
            ]
        },
        "preset": null,
        "propertyValues": {
            "configAria": {},
            "disableScroll": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "focusPanel": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "hideTail": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "positioningToTrigger": {
                "type": "JSON_LITERAL",
                "value": "auto"
            },
            "positions": {
                "type": "JSON_LITERAL"
            }
        },
        "slot": null,
        "styles": null
    },
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
        "preset": {
            "controllerElementId": "playbook_activity_ui_controller",
            "disabledEventTargetIds": [],
            "id": "0c7e5d19b72bf80ccc72eb84213b6fe6"
        },
        "propertyValues": {
            "daClientActionContract": {
                "type": "JSON_LITERAL",
                "value": null
            }
        },
        "slot": null,
        "styles": null
    }
]`,
        data: `[
    {
        "definition": {
            "id": "8b16a4a343b33110ac8ba40f5bb8f21c",
            "type": "CONTROLLER"
        },
        "dependencies": {},
        "elementId": "playbook_activity_ui_controller",
        "elementLabel": "Playbook Activity UI Controller",
        "eventMappings": [],
        "inputValues": {
            "inputActivityDefinitionId": {
                "binding": {
                    "address": [
                        "activityDefinitionId"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputActivityLabel": {
                "binding": {
                    "address": [
                        "activityLabel"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputActivityState": {
                "binding": {
                    "address": [
                        "activityState"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputAdvanced": {
                "binding": {
                    "address": [
                        "advanced"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputAssignedTo": {
                "binding": {
                    "address": [
                        "assignedTo"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputAssociatedRecord": {
                "binding": {
                    "address": [
                        "associatedRecord"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputAssociatedTable": {
                "binding": {
                    "address": [
                        "associatedTable"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputConfigProperties": {
                "binding": {
                    "address": [
                        "configProperties"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputExperienceProperties": {
                "binding": {
                    "address": [
                        "experienceProperties"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputFieldListExperienceProperties": {
                "type": "JSON_LITERAL",
                "value": "[\\"record_fields\\"]"
            },
            "inputFillContainer": {
                "binding": {
                    "address": [
                        "fillContainer"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputFormControllerFieldItems": {
                "type": "JSON_LITERAL",
                "value": []
            },
            "inputFormControllerSections": {
                "type": "JSON_LITERAL",
                "value": []
            },
            "inputLaneContext": {
                "binding": {
                    "address": [
                        "laneContext"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputParentRecord": {
                "binding": {
                    "address": [
                        "parentRecord"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputParentTable": {
                "binding": {
                    "address": [
                        "parentTable"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputPlaybookContext": {
                "binding": {
                    "address": [
                        "playbookContext"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputPlaybookExperienceId": {
                "binding": {
                    "address": [
                        "playbookExperienceId"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputPrioritized": {
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
            'd3356afeff323010667053ea793bf143,fd7a772cffb23010667053ea793bf1c3,e3c2ca2cc7123010bfbaf89f51c260ce,3302cee8c7123010bfbaf89f51c26020,46e1ca2cc7123010bfbaf89f51c260c7,79a1cee8c7123010bfbaf89f51c2601c,9f51ca2cc7123010bfbaf89f51c260c3,c0d0cee8c7123010bfbaf89f51c26017',
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
        name: 'Base Activity UI',
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
                "label": "Footer (DEPRECATED)",
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
                "label": "Icon (DEPRECATED)",
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
        },
        "description": "Collection of properties for the Activity UI based on the Experience Type",
        "disabled": false,
        "fieldType": "json",
        "label": "Experience properties",
        "mandatory": false,
        "name": "experienceProperties",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": {
            "choices": [],
            "schema": {
                "properties": {
                    "attachment_source": {
                        "properties": {
                            "displayValue": {
                                "type": "string"
                            },
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "attachments_read_only": {
                        "properties": {
                            "displayValue": {
                                "type": "string"
                            },
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "description": {
                        "properties": {
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "experience_status_record": {
                        "properties": {
                            "displayValue": {
                                "type": "string"
                            },
                            "elementData": {
                                "properties": {
                                    "reference": {
                                        "type": "string"
                                    },
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "experience_status_table": {
                        "properties": {
                            "displayValue": {
                                "type": "string"
                            },
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "footer": {
                        "properties": {
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "form_fields": {
                        "properties": {
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "form_view": {
                        "properties": {
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "icon": {
                        "properties": {
                            "displayValue": {
                                "type": "string"
                            },
                            "elementData": {
                                "properties": {
                                    "reference": {
                                        "type": "string"
                                    },
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "is_automated": {
                        "properties": {
                            "displayValue": {
                                "type": "string"
                            },
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "pending_description": {
                        "properties": {
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "pending_title": {
                        "properties": {
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "record_fields": {
                        "properties": {
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "relatedProperties": {
                                "items": {
                                    "properties": {
                                        "displayValue": {
                                            "type": "string"
                                        },
                                        "elemendData": {
                                            "properties": {
                                                "reference": {
                                                    "type": "string"
                                                },
                                                "type": {
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "label": {
                                            "type": "string"
                                        },
                                        "name": {
                                            "type": "string"
                                        },
                                        "value": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                },
                                "type": "array"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "show_checklist": {
                        "properties": {
                            "displayValue": {
                                "type": "string"
                            },
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "show_sla": {
                        "properties": {
                            "displayValue": {
                                "type": "string"
                            },
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "tagline": {
                        "properties": {
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "title": {
                        "properties": {
                            "elementData": {
                                "properties": {
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    }
                },
                "type": "object"
            },
            "translatable": false
        },
        "valueType": "object"
    }
]`,
        required_translations: `[ {
  "message" : "Button",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Enter a label",
  "code" : "",
  "comment" : ""
} ]`,
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
    }
]`,
        style_config: '{}',
    },
})
