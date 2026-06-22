import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['be97057efba5cb58b70efc647befdc05'],
    table: 'sys_ux_event',
    data: {
        event_name: 'NAV_ITEM_SELECTED_RELAY_6297c17efba5cb58b70efc647befdce1',
        label: 'Link to destination Relay (UM Review release notes UI)',
        props: `[
    {
        "defaultValue": null,
        "fieldType": "string",
        "interfaceApiName": "global.route",
        "label": "Route type",
        "name": "route",
        "type": "string",
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "fieldType": "json",
        "interfaceApiName": "global.route",
        "label": "Route fields",
        "name": "fields",
        "type": "json",
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "fieldType": "json",
        "interfaceApiName": "global.route",
        "label": "Optionals parameters",
        "name": "params",
        "type": "json",
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "fieldType": "boolean",
        "interfaceApiName": "global.route",
        "label": "Remove previous URL from browser history",
        "name": "redirect",
        "type": "boolean",
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": "Option to load record in background",
        "fieldType": "boolean",
        "interfaceApiName": "global.route",
        "label": "Load in background (advanced)",
        "name": "passiveNavigation",
        "type": "boolean",
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": "Name of tab and browser title",
        "fieldType": "string",
        "interfaceApiName": "global.route",
        "label": "Title (advanced)",
        "name": "title",
        "type": "string",
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": "Specifies which field in route configuration should be used to enable multiple instances of a new record",
        "fieldType": "string",
        "interfaceApiName": "global.route",
        "label": "Multi-instance field (advanced)",
        "name": "multiInstField",
        "type": "string",
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": "Entering \\"current\\" opens a record in a sub-tab",
        "fieldType": "string",
        "interfaceApiName": "global.route",
        "label": "Sub-navigation route (advanced)",
        "name": "targetRoute",
        "type": "string",
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": "Object for linking to an external URL",
        "fieldType": "json",
        "interfaceApiName": "global.route",
        "label": "External URL object",
        "name": "external",
        "type": "json",
        "typeMetadata": {
            "schema": {
                "properties": {
                    "target": {
                        "description": "Target window to open. Default is _blank",
                        "type": "string"
                    },
                    "url": {
                        "description": "The URL to open",
                        "type": "string"
                    }
                },
                "title": "External URL Object",
                "type": "object"
            }
        },
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": "Object for more navigation options",
        "fieldType": "json",
        "interfaceApiName": "global.route",
        "label": "Navigation Options object",
        "name": "navigationOptions",
        "type": "json",
        "typeMetadata": {
            "schema": {
                "properties": {
                    "navigateExternal": {
                        "description": "Enable external navigation",
                        "type": "boolean"
                    },
                    "targetWindowRef": {
                        "description": "Target window opened by action dispatcher",
                        "type": "object"
                    },
                    "windowOptions": {
                        "description": "Target and windowOptions with which window.open to be called. Default values are _blank and emptyString",
                        "type": "json"
                    }
                },
                "title": "Navigation Options Object",
                "type": "object"
            }
        },
        "valueType": "string"
    }
]`,
        required_translations: `[ {
  "message" : "Entering \\"current\\" opens a record in a sub-tab",
  "comment" : ""
}, {
  "message" : "External URL object",
  "comment" : ""
}, {
  "message" : "Load in background (advanced)",
  "comment" : ""
}, {
  "message" : "Multi-instance field (advanced)",
  "comment" : ""
}, {
  "message" : "Name of tab and browser title",
  "comment" : ""
}, {
  "message" : "Navigation Options object",
  "comment" : ""
}, {
  "message" : "Object for linking to an external URL",
  "comment" : ""
}, {
  "message" : "Object for more navigation options",
  "comment" : ""
}, {
  "message" : "Option to load record in background",
  "comment" : ""
}, {
  "message" : "Optionals parameters",
  "comment" : ""
}, {
  "message" : "Remove previous URL from browser history",
  "comment" : ""
}, {
  "message" : "Route fields",
  "comment" : ""
}, {
  "message" : "Route type",
  "comment" : ""
}, {
  "message" : "Specifies which field in route configuration should be used to enable multiple instances of a new record",
  "comment" : ""
}, {
  "message" : "Sub-navigation route (advanced)",
  "comment" : ""
}, {
  "message" : "Title (advanced)",
  "comment" : ""
} ]`,
        schema_version: '1.0.0',
    },
})
