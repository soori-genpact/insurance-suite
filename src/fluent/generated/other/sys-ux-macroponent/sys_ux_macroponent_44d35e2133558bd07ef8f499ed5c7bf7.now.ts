import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['44d35e2133558bd07ef8f499ed5c7bf7'],
    table: 'sys_ux_macroponent',
    data: {
        bundles: '[]',
        category: 'page',
        composition: `[
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
                    "elementId": "__PhhgxaeehhkhBaaddleeddHgPjffzyjzAA__column_1",
                    "elementLabel": "Column 1",
                    "eventMappings": [],
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": null
                    },
                    "overrides": {
                        "composition": [
                            {
                                "definition": {
                                    "id": "REPEATER",
                                    "type": "REPEATER"
                                },
                                "elementId": "repeater_1",
                                "elementLabel": "Repeater 1",
                                "eventMappings": [],
                                "isHidden": {
                                    "type": "JSON_LITERAL",
                                    "value": null
                                },
                                "overrides": {
                                    "composition": [
                                        {
                                            "definition": {
                                                "id": "83db4ef2b2ff8a742957a7d2af6d7975",
                                                "type": "MACROPONENT"
                                            },
                                            "elementId": "dashboard_metric_card_1",
                                            "elementLabel": "Dashboard Metric Card 1",
                                            "eventMappings": [],
                                            "isHidden": {
                                                "type": "JSON_LITERAL",
                                                "value": null
                                            },
                                            "preset": null,
                                            "propertyValues": {
                                                "clickable": {
                                                    "type": "JSON_LITERAL",
                                                    "value": false
                                                },
                                                "currencySymbol": {
                                                    "binding": {
                                                        "address": [
                                                            "iconGlyph"
                                                        ],
                                                        "category": "value"
                                                    },
                                                    "type": "REPEATER_ITEM_BINDING"
                                                },
                                                "decimals": {
                                                    "type": "JSON_LITERAL",
                                                    "value": 2
                                                },
                                                "format": {
                                                    "binding": {
                                                        "address": [
                                                            "format"
                                                        ],
                                                        "category": "value"
                                                    },
                                                    "type": "REPEATER_ITEM_BINDING"
                                                },
                                                "heading": {
                                                    "binding": {
                                                        "address": [
                                                            "heading"
                                                        ],
                                                        "category": "value"
                                                    },
                                                    "type": "REPEATER_ITEM_BINDING"
                                                },
                                                "icon": {
                                                    "binding": {
                                                        "address": [
                                                            "iconGlyph"
                                                        ],
                                                        "category": "value"
                                                    },
                                                    "type": "REPEATER_ITEM_BINDING"
                                                },
                                                "iconBackgroundColor": {
                                                    "binding": {
                                                        "address": [
                                                            "iconBackgroundColor"
                                                        ],
                                                        "category": "value"
                                                    },
                                                    "type": "REPEATER_ITEM_BINDING"
                                                },
                                                "iconColor": {
                                                    "type": "JSON_LITERAL",
                                                    "value": ""
                                                },
                                                "iconGlyph": {
                                                    "binding": {
                                                        "address": [
                                                            "iconGlyph"
                                                        ],
                                                        "category": "value"
                                                    },
                                                    "type": "REPEATER_ITEM_BINDING"
                                                },
                                                "trendDirection": {
                                                    "type": "JSON_LITERAL",
                                                    "value": "auto"
                                                },
                                                "trendPeriod": {
                                                    "binding": {
                                                        "address": [
                                                            "trendPeriod"
                                                        ],
                                                        "category": "value"
                                                    },
                                                    "type": "REPEATER_ITEM_BINDING"
                                                },
                                                "trendPositiveIsGood": {
                                                    "type": "JSON_LITERAL",
                                                    "value": true
                                                },
                                                "trendValue": {
                                                    "binding": {
                                                        "address": [
                                                            "trendValue"
                                                        ],
                                                        "category": "value"
                                                    },
                                                    "type": "REPEATER_ITEM_BINDING"
                                                },
                                                "value": {
                                                    "binding": {
                                                        "address": [
                                                            "value"
                                                        ],
                                                        "category": "value"
                                                    },
                                                    "type": "REPEATER_ITEM_BINDING"
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
                                                    "element_id": "dashboard_metric_card_1"
                                                }
                                            ],
                                            "root": null,
                                            "rules": null,
                                            "styles": {
                                                "display": "grid",
                                                "gap": "var(--now-scalable-space--sm)",
                                                "grid-auto-columns": "1fr",
                                                "grid-auto-rows": "1fr",
                                                "grid-template-columns": "1fr 1fr 1fr 1fr 1fr",
                                                "grid-template-rows": "1fr 1fr"
                                            },
                                            "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                                            "type": "grid"
                                        },
                                        "version": "3.1.0"
                                    }
                                },
                                "preset": null,
                                "propertyValues": {},
                                "repeatWith": {
                                    "type": "JSON_LITERAL",
                                    "value": [
                                        {
                                            "clickable": true,
                                            "decimals": 2,
                                            "format": "none",
                                            "heading": "Written Premium",
                                            "iconBackgroundColor": "#EBF5FF",
                                            "iconColor": "#0070D2",
                                            "iconGlyph": "$",
                                            "trendPeriod": "vs Last Year",
                                            "trendPositiveIsGood": true,
                                            "trendValue": "9.0",
                                            "value": "15.2M"
                                        },
                                        {
                                            "clickable": true,
                                            "decimals": 1,
                                            "format": "percent",
                                            "heading": "Submission to Quote Ratio",
                                            "iconBackgroundColor": "#F5F0FF",
                                            "iconColor": "#6B21A8",
                                            "iconGlyph": "%",
                                            "trendPeriod": "vs Last Year",
                                            "trendPositiveIsGood": true,
                                            "trendValue": "-0.2",
                                            "value": "128.4"
                                        },
                                        {
                                            "clickable": true,
                                            "decimals": 1,
                                            "format": "percent",
                                            "heading": "Quote to Bind Ratio",
                                            "iconBackgroundColor": "#EDFAF1",
                                            "iconColor": "#137333",
                                            "iconGlyph": "%",
                                            "trendPeriod": "vs Last Year",
                                            "trendPositiveIsGood": true,
                                            "trendValue": "0.2",
                                            "value": "122.8"
                                        },
                                        {
                                            "clickable": true,
                                            "decimals": 2,
                                            "format": "none",
                                            "heading": "Loss Ratio",
                                            "iconBackgroundColor": "#FFF0F0",
                                            "iconColor": "#C62828",
                                            "iconGlyph": "$",
                                            "trendPeriod": "vs Last Year",
                                            "trendPositiveIsGood": false,
                                            "trendValue": "-28.07",
                                            "value": "91.81M"
                                        },
                                        {
                                            "clickable": true,
                                            "decimals": 2,
                                            "format": "percent",
                                            "heading": "Renewal Retention",
                                            "iconBackgroundColor": "#EDFAF1",
                                            "iconColor": "#137333",
                                            "iconGlyph": "%",
                                            "trendPeriod": "vs Last Year",
                                            "trendPositiveIsGood": true,
                                            "trendValue": "4.47",
                                            "value": "79.21"
                                        },
                                        {
                                            "clickable": true,
                                            "decimals": 2,
                                            "format": "percent",
                                            "heading": "Declination Rate",
                                            "iconBackgroundColor": "#FFF9E6",
                                            "iconColor": "#BE5504",
                                            "iconGlyph": "%",
                                            "trendPeriod": "vs Last Year",
                                            "trendPositiveIsGood": false,
                                            "trendValue": "-12.71",
                                            "value": "23.72"
                                        },
                                        {
                                            "clickable": true,
                                            "decimals": 2,
                                            "format": "percent",
                                            "heading": "Renewal Rate Change",
                                            "iconBackgroundColor": "#EBF5FF",
                                            "iconColor": "#0070D2",
                                            "iconGlyph": "%",
                                            "trendPeriod": "vs Last Year",
                                            "trendPositiveIsGood": false,
                                            "trendValue": "-4.64",
                                            "value": "2.79"
                                        },
                                        {
                                            "clickable": true,
                                            "decimals": 2,
                                            "format": "percent",
                                            "heading": "CAT Exposure by Region",
                                            "iconBackgroundColor": "#FFF0F0",
                                            "iconColor": "#C62828",
                                            "iconGlyph": "%",
                                            "trendPeriod": "vs last month",
                                            "trendPositiveIsGood": false,
                                            "trendValue": "12.3",
                                            "value": "90.00"
                                        },
                                        {
                                            "clickable": true,
                                            "decimals": 0,
                                            "format": "percent",
                                            "heading": "Broker Performance",
                                            "iconBackgroundColor": "#FFF8E7",
                                            "iconColor": "#B45309",
                                            "iconGlyph": "%",
                                            "trendPeriod": "vs last month",
                                            "trendPositiveIsGood": true,
                                            "trendValue": "-1.2",
                                            "value": "72"
                                        },
                                        {
                                            "clickable": true,
                                            "decimals": 0,
                                            "format": "percent",
                                            "heading": "Aged Debt",
                                            "iconBackgroundColor": "#E6FFFA",
                                            "iconColor": "#0D5C63",
                                            "iconGlyph": "$",
                                            "trendPeriod": "vs last month",
                                            "trendPositiveIsGood": false,
                                            "trendValue": "12.3",
                                            "value": "76"
                                        }
                                    ]
                                },
                                "slot": null,
                                "styles": {
                                    "default": {}
                                }
                            }
                        ],
                        "layout": {
                            "default": {
                                "children": null,
                                "items": [
                                    {
                                        "element_id": "repeater_1"
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
                            "version": "3.1.0"
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
                    "styles": {
                        "default": {
                            "display": "contents"
                        }
                    }
                }
            ],
            "layout": {
                "default": {
                    "children": null,
                    "isInline": null,
                    "items": [
                        {
                            "element_id": "__PhhgxaeehhkhBaaddleeddHgPjffzyjzAA__column_1"
                        }
                    ],
                    "root": null,
                    "rules": null,
                    "styles": {
                        "box-sizing": "border-box",
                        "display": "grid",
                        "grid-auto-columns": "1fr",
                        "grid-auto-rows": "1fr",
                        "grid-template-columns": "100fr",
                        "grid-template-rows": "1fr",
                        "padding": "var(--now-scalable-space--sm)",
                        "padding-bottom": "var(--now-scalable-space--sm)",
                        "padding-left": "var(--now-scalable-space--sm)",
                        "padding-right": "var(--now-scalable-space--sm)",
                        "padding-top": "var(--now-scalable-space--sm)",
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
                "version": "3.1.0"
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
        "slot": null,
        "styles": {
            "default": {
                "display": "contents"
            }
        }
    }
]`,
        data: '[]',
        disable_auto_reflow: 'false',
        extends: '19be392623033300f4b4c50947bf65ba',
        form_factors: `{
    "custom_ff_1": {
        "max-width": 640,
        "reference": "macroponent"
    }
}`,
        internal_event_mappings: '{}',
        keyboard_shortcuts: '{}',
        layout: `{
    "default": {
        "children": null,
        "items": [
            {
                "element_id": "column_layout_1"
            }
        ],
        "root": null,
        "rules": null,
        "styles": {
            "flex-direction": "column"
        },
        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
        "type": "flex"
    },
    "queries": [
        {
            "layout": {
                "items": [],
                "styles": {
                    "flex-direction": "column",
                    "height": "auto",
                    "min-width": null
                },
                "type": "flex"
            },
            "queryId": "custom_ff_1"
        }
    ],
    "version": "3.1.0"
}`,
        name: 'Home default',
        props: '[]',
        required_translations: '[ ]',
        schema_version: '1.0.0',
        state_properties: '[]',
        style_config: '{}',
    },
})
