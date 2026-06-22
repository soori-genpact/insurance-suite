import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['7bb0d972fb69cb58b70efc647befdc87'],
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
        "preset": {
            "controllerElementId": "record_playbook",
            "disabledEventTargetIds": [],
            "id": "b76d5b8043432110379ea5dccbb8f297"
        },
        "propertyValues": {},
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
                                "preset": {
                                    "controllerElementId": "record_playbook",
                                    "disabledEventTargetIds": [
                                        "cmeeneaiizccaaaaaaddvffbeaakqsbbccfcc",
                                        "71f69293d78177747124476f6a1e7eb6"
                                    ],
                                    "id": "2c9b775ba59d59482acacfd67c793517"
                                },
                                "propertyValues": {
                                    "configAria": {}
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
                                "preset": {
                                    "controllerElementId": "record_playbook",
                                    "id": "d47e3591999fa213338037c11623e30f"
                                },
                                "propertyValues": {},
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
        "preset": {
            "controllerElementId": "record_playbook",
            "id": "79ebea45f4861cca5a2606fb0217d3a6"
        },
        "propertyValues": {
            "configAria": {},
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
                        "id": "2d56f06d55f46bbd4e79b5e624beb940",
                        "type": "MACROPONENT"
                    },
                    "elementId": "rich_text_1",
                    "elementLabel": "Description",
                    "eventMappings": [],
                    "isHero": false,
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": ""
                    },
                    "isNonDestructive": false,
                    "overrides": null,
                    "preset": {
                        "controllerElementId": "playbook_activity_ui_controller",
                        "disabledEventTargetIds": [],
                        "id": "86a2dd4299dfe03b5fc42804d508b498"
                    },
                    "propertyValues": {},
                    "slot": "content",
                    "styles": {
                        "padding-bottom": "var(--now-static-space--lg)"
                    }
                },
                {
                    "definition": {
                        "id": "cfdc0486addc8811fd5249eae681d12d",
                        "type": "MACROPONENT"
                    },
                    "elementId": "label_value_stacked_1",
                    "elementLabel": "Record Fields",
                    "eventMappings": [],
                    "preset": {
                        "controllerElementId": "playbook_activity_ui_controller",
                        "disabledEventTargetIds": [],
                        "id": "b526bcac3e08bf9edc649e31dc744a6a"
                    },
                    "propertyValues": {},
                    "slot": "content",
                    "styles": null
                },
                {
                    "conditionals": [
                        {
                            "condition": {
                                "script": {
                                    "apiVersion": "1.0.0",
                                    "inlineScript": "/**\\n  * @param {params} params\\n  * @param {api} params.api\\n  * @param {any} params.imports\\n  */\\nfunction evaluateProperty({api}) {\\n\\treturn api.context.props.associatedRecord && api.context.props.experienceProperties.show_checklist && [true, 'true', 'yes', '1'].includes(api.context.props.experienceProperties.show_checklist.value);\\n}",
                                    "scriptSysId": null
                                },
                                "type": "CLIENT_TRANSFORM_SCRIPT"
                            },
                            "item": {
                                "definition": {
                                    "id": "50f337c2a33e187a876827c5f8016f2f",
                                    "type": "MACROPONENT"
                                },
                                "elementId": "sn_checklist_1",
                                "elementLabel": "Checklist 1",
                                "eventMappings": [],
                                "isHero": false,
                                "isHidden": {
                                    "type": "JSON_LITERAL",
                                    "value": false
                                },
                                "isNonDestructive": false,
                                "overrides": null,
                                "propertyValues": {
                                    "checklistId": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "documentId": {
                                        "binding": {
                                            "address": [
                                                "associatedRecord"
                                            ],
                                            "category": "props"
                                        },
                                        "type": "CONTEXT_BINDING"
                                    },
                                    "title": {
                                        "type": "JSON_LITERAL",
                                        "value": ""
                                    }
                                },
                                "slot": "content",
                                "styles": {
                                    "padding-bottom": "var(--proxy-global-space--lg)"
                                }
                            }
                        }
                    ],
                    "definition": {
                        "id": "",
                        "type": "CONDITIONAL"
                    },
                    "elementId": "conditional_checklist",
                    "elementLabel": "Conditional Checklist",
                    "eventMappings": [],
                    "isHero": false,
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": ""
                    },
                    "isNonDestructive": false,
                    "overrides": null,
                    "propertyValues": {},
                    "slot": "content",
                    "styles": {}
                },
                {
                    "definition": {
                        "id": "0e238931bce36c9fe3b52475c69c85a3",
                        "type": "MACROPONENT"
                    },
                    "elementId": "attachments_1",
                    "elementLabel": "Attachments",
                    "eventMappings": [],
                    "preset": {
                        "controllerElementId": "playbook_activity_ui_controller",
                        "disabledEventTargetIds": [],
                        "id": "6ccbef901721eba885f9e02d566dc3f6"
                    },
                    "propertyValues": {
                        "actionConfigId": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "maxFileSizeAllowed": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "recordDisplayValue": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "skipPreviewForUnsupportedFileTypes": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "view": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        }
                    },
                    "slot": "below-form",
                    "styles": null
                },
                {
                    "definition": {
                        "id": "d356d14b6e293a3020a244b63d278d8f",
                        "type": "MACROPONENT"
                    },
                    "elementId": "column_layout_1",
                    "elementLabel": "Column layout 1",
                    "eventMappings": [],
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": null
                    },
                    "overrides": {
                        "composition": [
                            {
                                "definition": {
                                    "id": "d356d14b6e293a3020a244b63d278d8f",
                                    "type": "MACROPONENT"
                                },
                                "elementId": "__uXccccdeehhhBDkJSjjhAAdBhpZalv__column_1",
                                "elementLabel": "Column 1",
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
                                                "elementType": "root",
                                                "originalElementId": "form_default"
                                            },
                                            "definition": {
                                                "id": "cdf8d604a3fda59e69ccd6dd407263d6",
                                                "type": "MACROPONENT"
                                            },
                                            "elementId": "form_default",
                                            "elementLabel": "Form Default",
                                            "eventMappings": [],
                                            "extensionPoints": [],
                                            "isHero": false,
                                            "isHidden": {
                                                "operation": {
                                                    "left": {
                                                        "operation": {
                                                            "left": {
                                                                "operation": {
                                                                    "left": {
                                                                        "binding": {
                                                                            "address": [
                                                                                "inputs",
                                                                                "requireExplicitEventMapping"
                                                                            ]
                                                                        },
                                                                        "type": "DATA_OUTPUT_BINDING"
                                                                    },
                                                                    "operator": "AND",
                                                                    "right": {
                                                                        "binding": {
                                                                            "address": [
                                                                                "record_playbook",
                                                                                "form",
                                                                                "uiDomain"
                                                                            ]
                                                                        },
                                                                        "type": "DATA_OUTPUT_BINDING"
                                                                    }
                                                                },
                                                                "type": "BINARY"
                                                            },
                                                            "operator": "OR",
                                                            "right": {
                                                                "binding": {
                                                                    "address": [
                                                                        "record_playbook",
                                                                        "isLoading"
                                                                    ]
                                                                },
                                                                "type": "DATA_OUTPUT_BINDING"
                                                            }
                                                        },
                                                        "type": "BINARY"
                                                    },
                                                    "operator": "OR",
                                                    "right": {
                                                        "operation": {
                                                            "operand": {
                                                                "binding": {
                                                                    "address": [
                                                                        "playbook_activity_ui_controller",
                                                                        "playbookFormProperties",
                                                                        "visible"
                                                                    ]
                                                                },
                                                                "type": "DATA_OUTPUT_BINDING"
                                                            },
                                                            "operator": "NOT"
                                                        },
                                                        "type": "UNARY"
                                                    }
                                                },
                                                "type": "BINARY"
                                            },
                                            "isNonDestructive": false,
                                            "items": [],
                                            "overrides": null,
                                            "preset": {
                                                "controllerElementId": "record_playbook",
                                                "disabledEventTargetIds": [],
                                                "id": "a1b046d1f54ab60119e0528a81e4632a"
                                            },
                                            "propertyValues": {
                                                "fields": {
                                                    "binding": {
                                                        "address": [
                                                            "playbook_activity_ui_controller",
                                                            "playbookFormProperties",
                                                            "filteredFormFields"
                                                        ]
                                                    },
                                                    "type": "DATA_OUTPUT_BINDING"
                                                },
                                                "inRecordPageTab": {
                                                    "type": "JSON_LITERAL",
                                                    "value": false
                                                },
                                                "inUiBuilder": {
                                                    "type": "JSON_LITERAL",
                                                    "value": true
                                                },
                                                "isFirstSectionTitleHidden": {
                                                    "type": "JSON_LITERAL",
                                                    "value": false
                                                },
                                                "isFormOptionsHidden": {
                                                    "type": "JSON_LITERAL",
                                                    "value": false
                                                },
                                                "isSectionMenuHidden": {
                                                    "type": "JSON_LITERAL",
                                                    "value": false
                                                },
                                                "isViewSectionHidden": {
                                                    "type": "JSON_LITERAL",
                                                    "value": false
                                                },
                                                "scrollableHost": {
                                                    "type": "JSON_LITERAL",
                                                    "value": null
                                                },
                                                "sections": {
                                                    "binding": {
                                                        "address": [
                                                            "playbook_activity_ui_controller",
                                                            "playbookFormProperties",
                                                            "filteredFormSections"
                                                        ]
                                                    },
                                                    "type": "DATA_OUTPUT_BINDING"
                                                }
                                            },
                                            "slot": null,
                                            "styles": null
                                        },
                                        {
                                            "bundleLink": {
                                                "bundleInstanceId": "form_1",
                                                "elementType": "root",
                                                "originalElementId": "domain_form_layout"
                                            },
                                            "definition": {
                                                "id": "b6151414a3cbd00c6e3421d3dee5de8b",
                                                "type": "MACROPONENT"
                                            },
                                            "elementId": "domain_form_layout",
                                            "elementLabel": "Domain Form Layout",
                                            "eventMappings": [],
                                            "extensionPoints": [],
                                            "isHero": false,
                                            "isNonDestructive": false,
                                            "items": [],
                                            "overrides": null,
                                            "preset": {
                                                "controllerElementId": "record_playbook",
                                                "disabledEventTargetIds": [],
                                                "id": "83581462835c111ce7b6f31b42c23b26"
                                            },
                                            "propertyValues": {},
                                            "slot": null,
                                            "styles": null
                                        }
                                    ],
                                    "layout": {
                                        "default": {
                                            "children": null,
                                            "items": [
                                                {
                                                    "element_id": "form_default",
                                                    "styles": {}
                                                },
                                                {
                                                    "element_id": "domain_form_layout",
                                                    "styles": {}
                                                }
                                            ],
                                            "root": null,
                                            "styles": {
                                                "align-items": "stretch",
                                                "box-sizing": "border-box",
                                                "flex-direction": "column",
                                                "height": "100%",
                                                "justify-content": "flex-start",
                                                "overflow": "auto"
                                            },
                                            "type": "flex"
                                        },
                                        "disableAutoReflow": true,
                                        "version": "3.0.0"
                                    }
                                },
                                "preset": null,
                                "propertyValues": {
                                    "hideEmptyStateUi": {
                                        "type": "JSON_LITERAL",
                                        "value": true
                                    },
                                    "slotWrapperBehavior": {
                                        "type": "JSON_LITERAL",
                                        "value": "contents"
                                    }
                                },
                                "scratchPad": {
                                    "uib": {
                                        "layout": {
                                            "column": {
                                                "columnNumber": 0,
                                                "id": "default",
                                                "styleConfig": {
                                                    "external": {},
                                                    "internal": {}
                                                }
                                            },
                                            "type": "column"
                                        },
                                        "version": "1.0.0"
                                    }
                                },
                                "slot": null,
                                "styles": null
                            }
                        ],
                        "layout": {
                            "default": {
                                "children": null,
                                "isInline": null,
                                "items": [
                                    {
                                        "element_id": "__uXccccdeehhhBDkJSjjhAAdBhpZalv__column_1",
                                        "styles": {
                                            "display": "contents"
                                        }
                                    }
                                ],
                                "root": null,
                                "rules": null,
                                "styles": {
                                    "box-sizing": "border-box",
                                    "grid-template-columns": "100fr",
                                    "grid-template-rows": "1fr",
                                    "width": "auto"
                                },
                                "type": "grid"
                            },
                            "disableAutoReflow": true,
                            "queries": [
                                {
                                    "layout": {
                                        "children": null,
                                        "isInline": null,
                                        "items": [],
                                        "root": null,
                                        "rules": null,
                                        "styles": {
                                            "grid-template-columns": "1fr",
                                            "height": "fit-content",
                                            "max-height": "max-content",
                                            "min-height": "min-content"
                                        },
                                        "type": "grid"
                                    },
                                    "query": {
                                        "max-width": 640
                                    }
                                }
                            ],
                            "version": "3.0.0"
                        }
                    },
                    "preset": null,
                    "propertyValues": {
                        "hideEmptyStateUi": {
                            "type": "JSON_LITERAL",
                            "value": true
                        },
                        "slotWrapperBehavior": {
                            "type": "JSON_LITERAL",
                            "value": "contents"
                        }
                    },
                    "scratchPad": {
                        "uib": {
                            "layout": {
                                "columnSection": {
                                    "breakpoints": [
                                        {
                                            "behavior": "stack",
                                            "max-width": 640,
                                            "styles": {
                                                "grid-template-columns": "1fr",
                                                "height": "fit-content",
                                                "max-height": "max-content",
                                                "min-height": "min-content"
                                            }
                                        }
                                    ],
                                    "children": [
                                        {
                                            "columnNumber": 1,
                                            "unit": "%",
                                            "width": 100
                                        }
                                    ],
                                    "id": "UIB_COLUMN_SECTION_SINGLE_COLUMN_SECTION",
                                    "styleConfig": {
                                        "external": {},
                                        "internal": {}
                                    }
                                },
                                "type": "columnSection"
                            },
                            "version": "1.0.0"
                        }
                    },
                    "slot": "form",
                    "styles": {
                        "display": "contents"
                    }
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
        "bundleLinks": [
            {
                "bundleInstanceId": "form_1",
                "elementType": "controller",
                "originalElementId": "record"
            }
        ],
        "def": {
            "sysId": "029f04e053610110ac9bddeeff7b1294",
            "type": "CONTROLLER"
        },
        "definition": {
            "id": "029f04e053610110ac9bddeeff7b1294",
            "type": "CONTROLLER"
        },
        "dependencies": {},
        "elementId": "record_playbook",
        "elementLabel": "Form Controller",
        "eventMappings": [
            {
                "eventMappingId": "form_ctrl_handle_popover_open_requested",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_now_record_form.CTRL_RECORD#POPOVER_OPEN_REQUESTED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_now_record_form.CTRL_RECORD#POPOVER_OPEN_REQUESTED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "bundleLinks": [
                            {
                                "bundleInstanceId": "form_1",
                                "elementType": "eventMappingTarget"
                            }
                        ],
                        "clientScript": null,
                        "declarativeAction": null,
                        "event": {
                            "apiName": "sn_uxf.MACROPONENT_POPOVER_OPEN_REQUESTED",
                            "payload": {
                                "container": {
                                    "popoverElementId": {
                                        "type": "JSON_LITERAL",
                                        "value": "[component-id$='reference_info_popover']"
                                    },
                                    "popoverTargetElementId": {
                                        "binding": {
                                            "address": [
                                                "popoverTriggerElement",
                                                "nowId"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "popoverTriggerElement": {
                                        "binding": {
                                            "address": [
                                                "popoverTriggerElement"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            }
                        },
                        "operation": null,
                        "targetId": "formOpenPopover",
                        "type": "EVENT"
                    }
                ]
            },
            {
                "eventMappingId": "global_event_screen_status_changed_mapping",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_now_record_form.CTRL_RECORD#SCREEN_STATUS_CHANGED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_now_record_form.CTRL_RECORD#SCREEN_STATUS_CHANGED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "bundleLinks": [
                            {
                                "bundleInstanceId": "form_1",
                                "elementType": "eventMappingTarget"
                            }
                        ],
                        "clientScript": null,
                        "conditional": {
                            "operation": {
                                "left": {
                                    "binding": {
                                        "address": [
                                            "record_playbook",
                                            "inputs",
                                            "isMappedToAppShell"
                                        ]
                                    },
                                    "type": "DATA_OUTPUT_BINDING"
                                },
                                "operator": "EQUAL",
                                "right": {
                                    "type": "JSON_LITERAL",
                                    "value": true
                                }
                            },
                            "type": "BINARY"
                        },
                        "declarativeAction": null,
                        "event": {
                            "apiName": "sn_canvas_core.SCREEN_STATUS_CHANGED",
                            "payload": {
                                "container": {
                                    "hasUpdate": {
                                        "binding": {
                                            "address": [
                                                "hasUpdate"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "icon": {
                                        "binding": {
                                            "address": [
                                                "icon"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "isDirty": {
                                        "binding": {
                                            "address": [
                                                "isDirty"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "message": {
                                        "binding": {
                                            "address": [
                                                "message"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "primaryItem": {
                                        "binding": {
                                            "address": [
                                                "primaryItem"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "screenKey": {
                                        "binding": {
                                            "address": [
                                                "screenKey"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "screenParams": {
                                        "binding": {
                                            "address": [
                                                "screenParams"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "secondaryItems": {
                                        "binding": {
                                            "address": [
                                                "secondaryItems"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "status": {
                                        "binding": {
                                            "address": [
                                                "status"
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
                                    },
                                    "tooltipPreview": {
                                        "binding": {
                                            "address": [
                                                "tooltipPreview"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            },
                            "sysId": "f71f58643791ec0183da148626eb757d"
                        },
                        "operation": null,
                        "targetId": "clfsrusbggaacchaaddbhhthqjjjjvffe",
                        "type": "EVENT"
                    }
                ]
            },
            {
                "eventMappingId": "form_ctrl_handle_update_configuration_menu_requested",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_now_record_form.CTRL_RECORD#UPDATE_CONFIGURATION_MENU_REQUESTED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_now_record_form.CTRL_RECORD#UPDATE_CONFIGURATION_MENU_REQUESTED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "bundleLinks": [
                            {
                                "bundleInstanceId": "form_1",
                                "elementType": "eventMappingTarget"
                            }
                        ],
                        "clientScript": null,
                        "conditional": {
                            "operation": {
                                "left": {
                                    "binding": {
                                        "address": [
                                            "record_playbook",
                                            "inputs",
                                            "isMappedToAppShell"
                                        ]
                                    },
                                    "type": "DATA_OUTPUT_BINDING"
                                },
                                "operator": "EQUAL",
                                "right": {
                                    "type": "JSON_LITERAL",
                                    "value": true
                                }
                            },
                            "type": "BINARY"
                        },
                        "declarativeAction": null,
                        "event": {
                            "apiName": "polaris_app_shell.CONTENT_ITEMS_SELECTED",
                            "payload": {
                                "container": {
                                    "items": {
                                        "binding": {
                                            "address": [
                                                "items"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "options": {
                                        "binding": {
                                            "address": [
                                                "options"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "sysId": {
                                        "binding": {
                                            "address": [
                                                "sysId"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "table": {
                                        "binding": {
                                            "address": [
                                                "table"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            }
                        },
                        "operation": null,
                        "targetId": "contentItemsSelectedTarget",
                        "type": "EVENT"
                    }
                ]
            },
            {
                "eventMappingId": "form_ctrl_handle_phone_requested",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_now_record_form.CTRL_RECORD#PHONE_REQUESTED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_now_record_form.CTRL_RECORD#PHONE_REQUESTED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "bundleLinks": [
                            {
                                "bundleInstanceId": "form_1",
                                "elementType": "eventMappingTarget"
                            }
                        ],
                        "clientScript": null,
                        "conditional": {
                            "operation": {
                                "left": {
                                    "binding": {
                                        "address": [
                                            "record_playbook",
                                            "inputs",
                                            "isMappedToAppShell"
                                        ]
                                    },
                                    "type": "DATA_OUTPUT_BINDING"
                                },
                                "operator": "EQUAL",
                                "right": {
                                    "type": "JSON_LITERAL",
                                    "value": true
                                }
                            },
                            "type": "BINARY"
                        },
                        "declarativeAction": null,
                        "event": {
                            "apiName": "polaris_app_shell.RECORD#OPEN_CALL",
                            "payload": {
                                "container": {
                                    "fields": {
                                        "container": {
                                            "opened": {
                                                "type": "JSON_LITERAL",
                                                "value": true
                                            }
                                        },
                                        "type": "MAP_CONTAINER"
                                    },
                                    "iconSelected": {
                                        "type": "JSON_LITERAL",
                                        "value": true
                                    },
                                    "params": {
                                        "container": {
                                            "number": {
                                                "binding": {
                                                    "address": [
                                                        "phoneNumber"
                                                    ]
                                                },
                                                "type": "EVENT_PAYLOAD_BINDING"
                                            },
                                            "source": {
                                                "type": "JSON_LITERAL",
                                                "value": "form_field"
                                            },
                                            "sysId": {
                                                "binding": {
                                                    "address": [
                                                        "sysid"
                                                    ]
                                                },
                                                "type": "EVENT_PAYLOAD_BINDING"
                                            },
                                            "table": {
                                                "binding": {
                                                    "address": [
                                                        "table"
                                                    ]
                                                },
                                                "type": "EVENT_PAYLOAD_BINDING"
                                            }
                                        },
                                        "type": "MAP_CONTAINER"
                                    },
                                    "route": {
                                        "type": "JSON_LITERAL",
                                        "value": "cti"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            }
                        },
                        "operation": null,
                        "targetId": "openCallTarget",
                        "type": "EVENT"
                    }
                ]
            },
            {
                "eventMappingId": "srp_ui_ctrl_handle_set_loading_state",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_now_record_form.CTRL_RECORD#FORM_LOADING_STATE_CHANGED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_now_record_form.CTRL_RECORD#FORM_LOADING_STATE_CHANGED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "bundleLinks": [
                            {
                                "bundleInstanceId": "form_1",
                                "elementType": "eventMappingTarget"
                            }
                        ],
                        "clientScript": null,
                        "conditional": {
                            "operation": {
                                "left": {
                                    "binding": {
                                        "address": [
                                            "record_playbook",
                                            "inputs",
                                            "isMappedToAppShell"
                                        ]
                                    },
                                    "type": "DATA_OUTPUT_BINDING"
                                },
                                "operator": "EQUAL",
                                "right": {
                                    "type": "JSON_LITERAL",
                                    "value": true
                                }
                            },
                            "type": "BINARY"
                        },
                        "declarativeAction": null,
                        "event": {
                            "apiName": "sn_uxf_page.NOW_UXF_PAGE#SET_LOADING_STATE",
                            "payload": {
                                "container": {
                                    "label": {
                                        "binding": {
                                            "address": [
                                                "label"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    },
                                    "loading": {
                                        "binding": {
                                            "address": [
                                                "loading"
                                            ]
                                        },
                                        "type": "EVENT_PAYLOAD_BINDING"
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            },
                            "sysId": "0404f68486f1baab1dc7ef2a27a3de50"
                        },
                        "operation": null,
                        "targetId": "ckfhflaybaaaaaaiddhhhaccccosggrff55",
                        "type": "EVENT"
                    }
                ]
            }
        ],
        "inputValues": {
            "actionConfigId": {
                "binding": {
                    "address": [
                        "actionConfigId"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            },
            "activityLogs": {
                "binding": {
                    "address": [
                        "activityLogs"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "fields": {
                "binding": {
                    "address": [
                        "playbook_activity_ui_controller",
                        "playbookFormProperties",
                        "filteredFormFields"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "headerConfigId": {
                "binding": {
                    "address": [
                        "headerConfigId"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            },
            "highlightedValueConfigId": {
                "binding": {
                    "address": [
                        "highlightedValueConfigId"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            },
            "inputExtraParams": {
                "binding": {
                    "address": [
                        "extraParams"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "ribbonConfigId": {
                "binding": {
                    "address": [
                        "ribbonConfigId"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            },
            "screen": {
                "binding": {
                    "address": [
                        "screen"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "userPrefs": {
                "binding": {
                    "address": [
                        "userPrefs"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "viewRuleConfigId": {
                "binding": {
                    "address": [
                        "viewRuleConfigId"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            }
        },
        "preset": {
            "controllerElementId": "playbook_activity_ui_controller",
            "disabledEventTargetIds": [
                "iiYFhaaPmqDEzseeddNYDgVXaageeAS"
            ],
            "id": "d7d472aa4393121010067ff8abb8f205"
        },
        "readEvaluationMode": "EAGER"
    },
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
                "binding": {
                    "address": [
                        "record_playbook",
                        "form",
                        "fields"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
            },
            "inputFormControllerSections": {
                "binding": {
                    "address": [
                        "record_playbook",
                        "form",
                        "sections"
                    ]
                },
                "type": "DATA_OUTPUT_BINDING"
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
        name: 'Default copy SOORI',
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
                "value": ""
            },
            "title": {
                "elementData": {
                    "type": "string"
                },
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
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "ROTeeddUveeddaDEicjjWoDplEXRhtb",
        "inherited": false,
        "label": "Table",
        "mandatory": false,
        "name": "table",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "RdbghheehhreeddDEMeehhjjpsGyNeddhhrddff",
        "inherited": false,
        "label": "sysId",
        "mandatory": false,
        "name": "sysId",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "BffXskeehhLjjCEVSjjUeeBeefWKPUjjcc",
        "inherited": false,
        "label": "Query",
        "mandatory": false,
        "name": "query",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "caNffNvQHAkvGjjgEKjjEHpbakee",
        "inherited": false,
        "label": "views",
        "mandatory": false,
        "name": "views",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "ZiiHSjeehhSiCUDSjjVcMjjhgEWkVn",
        "inherited": false,
        "label": "activityLogs",
        "mandatory": false,
        "name": "activityLogs",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "eeoDiiofeehhSBaaaazjjffANaccBpbTqk",
        "inherited": false,
        "label": "extraParams",
        "mandatory": false,
        "name": "extraParams",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "LkchhLPHjCkrijjfwCliibKDiijjh",
        "inherited": false,
        "label": "fields",
        "mandatory": false,
        "name": "fields",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "jjfKbafQMAUgMjjWaaDeeeGxiKgu",
        "inherited": false,
        "label": "screen",
        "mandatory": false,
        "name": "screen",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "jccbnNPXQBkMPjjXeeECiizcggwrQ",
        "inherited": false,
        "label": "selectedTabIndex",
        "mandatory": false,
        "name": "selectedTabIndex",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "string",
        "id": "OYgjjIfaapAUTQjjeehheeHbbGHkhhkkU",
        "inherited": false,
        "label": "userPrefs",
        "mandatory": false,
        "name": "userPrefs",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
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
    }
]`,
        style_config: '{}',
    },
})
