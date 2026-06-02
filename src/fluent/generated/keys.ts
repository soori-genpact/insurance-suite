import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '01271505ff174e1fbf28a5788b377481'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '4b563d2be203406f8a71fb8fdc3b1a3e'
                    }
                }
                composite: [
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '002646286d014eb1bd952a26da99b96f'
                        key: {
                            application_file: '8665190bab0d479f91b44239a454b788'
                            source_artifact: '01ebe44c639a4bec91af41390ea1aac3'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '01ebe44c639a4bec91af41390ea1aac3'
                        key: {
                            name: 'x_gegis_ins_policy_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '101a8e9d453241a094428aa869d1585a'
                        key: {
                            endpoint: 'x_gegis_ins_policy_incident_manager.do'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '46576b2050d64b94937506fa51357bce'
                        key: {
                            application_file: 'f034cd3b609e4662b31688c7071cf835'
                            source_artifact: '01ebe44c639a4bec91af41390ea1aac3'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '7849a5ab9ca840f185d0e047ed91f620'
                        key: {
                            name: 'x_gegis_ins_policy/main.js.map'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '8665190bab0d479f91b44239a454b788'
                        key: {
                            name: 'x_gegis_ins_policy/vendor-react-dom--003b9c7e'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'ad35e59c496e44dd9f376360855eb5b1'
                        key: {
                            application_file: 'd8a255b60f754258ae248610d7ea40e1'
                            source_artifact: '01ebe44c639a4bec91af41390ea1aac3'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'd8a255b60f754258ae248610d7ea40e1'
                        key: {
                            name: 'x_gegis_ins_policy/main'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'dccbc0d15cd247a8bd9ff52af673a56e'
                        key: {
                            application_file: '101a8e9d453241a094428aa869d1585a'
                            source_artifact: '01ebe44c639a4bec91af41390ea1aac3'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'f034cd3b609e4662b31688c7071cf835'
                        key: {
                            name: 'x_gegis_ins_policy/vendor-react-dom--003b9c7e.js.map'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f72bfa7d020f49b6907f797d3b060553'
                        key: {
                            application_file: '7849a5ab9ca840f185d0e047ed91f620'
                            source_artifact: '01ebe44c639a4bec91af41390ea1aac3'
                        }
                    },
                ]
            }
        }
    }
}
