import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f31ce1659311c35044f7bd4f7bba1080'],
    table: 'sys_ux_page_property',
    data: {
        name: 'chrome_toolbar',
        page: 'e728e92593dd835044f7bd4f7bba1020',
        required_translations: `[ {
  "message" : "Home",
  "code" : "",
  "comment" : ""
}, {
  "message" : "List",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Pipeline",
  "code" : "",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_gegis_ins_policy.e728e92593dd835044f7bd4f7bba1020.root.global.chrome_toolbar',
        value: `[
    {
        "id": "home",
        "label": {
            "translatable": true,
            "message": "Home"
        },
        "icon": "home-outline",
        "routeInfo": {
            "route": "home"
        },
        "group": "top",
        "order": 100,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    },
    {
        "id": "list",
        "label": {
            "translatable": true,
            "message": "List"
        },
        "icon": "list-key-outline",
        "routeInfo": {
            "route": "list"
        },
        "group": "top",
        "order": 100,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    },
    {
        "id": "pipeline",
        "label": {
            "translatable": true,
            "message": "Pipeline"
        },
        "icon": "envelope-arrow-outline",
        "routeInfo": {
            "route": "pipeline"
        },
        "group": "top",
        "order": 200,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    },
    {
        "id": "products",
        "label": {
            "translatable": true,
            "message": "Products"
        },
        "icon": "database-component-outline",
        "routeInfo": {
            "route": "simplelist",
            "fields": {
                "table": "x_gegis_ins_policy_product"
            }
        },
        "group": "top",
        "order": 200,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    }
]`,
        suffix: 'chrome_toolbar',
    },
})
