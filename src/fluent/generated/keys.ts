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
                    br_orchestrate_sub_cases: {
                        table: 'sys_script'
                        id: '1cb75efae3e64060a49835016fa9aedc'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '4b563d2be203406f8a71fb8fdc3b1a3e'
                    }
                    policy_suite_api: {
                        table: 'sys_ws_definition'
                        id: '7d2411106ab1464d8aa4d652cda30b4f'
                    }
                    policy_suite_api_v1: {
                        table: 'sys_ws_version'
                        id: '716538d4dad74421afb86930151071c9'
                    }
                    route_ai_task: {
                        table: 'sys_ws_operation'
                        id: '0ed15463950e41cfa1a5af639fd21764'
                    }
                    route_intake_case: {
                        table: 'sys_ws_operation'
                        id: 'd9bff52885064b798c8c0a10ebb6fcf9'
                    }
                    route_submission: {
                        table: 'sys_ws_operation'
                        id: '8664175968b34af0ba5c7a4d328ef1ef'
                    }
                    'src_server_ai-task-handler_js': {
                        table: 'sys_module'
                        id: 'df362af0f74f4baa8acf99fabb5e04c9'
                    }
                    'src_server_intake-case-handler_js': {
                        table: 'sys_module'
                        id: '9f2077d19ad541c2bdc73fc23db77314'
                    }
                    'src_server_orchestration-handler_js': {
                        table: 'sys_module'
                        id: '9892dc3b21d6454e95cd191f92c7c142'
                    }
                    'src_server_submission-handler_js': {
                        table: 'sys_module'
                        id: '9078bcc743d14e81869c38e803eb617c'
                    }
                }
                composite: [
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '002646286d014eb1bd952a26da99b96f'
                        deleted: true
                        key: {
                            application_file: '8665190bab0d479f91b44239a454b788'
                            source_artifact: '01ebe44c639a4bec91af41390ea1aac3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0195d31a910f4665b6fe8ffd5ff523b2'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                            element: 'intake_case'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '01ebe44c639a4bec91af41390ea1aac3'
                        deleted: true
                        key: {
                            name: 'x_gegis_ins_policy_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02b4871561634a3abe6fa66169ac4001'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'document_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0325aac6bc79421b8bfe02cc2036be18'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'orchestration_case'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '047a249667a2431889d397060e401b66'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0523cd8e06024e339a319b6a3829bbf6'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0875a242aae1469697f2000d57d9c9d0'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '098905be0147426789ab344285f7afa7'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'subscription'
                            value: 'clearance_only'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '09c3abcb606246968375df1927bf8c45'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'policy_type'
                            value: 'workers_comp'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a6471bef1af413c8fb59ed19b8a8b7a'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a707eb095974fddb6a470994591744a'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'orchestration_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b90f275cedb4115bcbe37915417e784'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'risk_level'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0cff65cf343b4d74a699e3483152cfa5'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'orchestration_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '0fbaa6243bd9cb1005ad7564c3e45a99'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '101a8e9d453241a094428aa869d1585a'
                        deleted: true
                        key: {
                            endpoint: 'x_gegis_ins_policy_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11ffcd98a0bc48b3ad8b92817f209570'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'source_email_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1232e5ab437c489fa8e26cbf76c8639b'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'quote_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '13eb62243b1dcb1005ad7564c3e45adf'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '13eb6402273842f39260ce0ccfdcccf7'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '14319ff258be42179d7ed34e0aa68c4c'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '146bd5fee7224308be4498077b1d30da'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'policy_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '16753f8544e34e21b5422b3b2c113974'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a81705290f44c8e9f83a87f89ceb7e8'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1bef85c6407441ffa9a779a1b8a9c9ea'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'subscription'
                            value: 'exposure_only'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '1feb62243b1dcb1005ad7564c3e45aac'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '200a9b2b3dff433daf39b2e46f01a380'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22805b110d1b48aa954cf7087f9b9224'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'intake_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '23eba2243b1dcb1005ad7564c3e45a23'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '23eba2243b1dcb1005ad7564c3e45a55'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '23eba2243b1dcb1005ad7564c3e45a5b'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25662e51b31f46668f7e3ac1521eb91c'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'blob_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28e245cac5074b0ea26ca501c3c5d13f'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'broker_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '291cd8f51f4849018a4a4c87a9c594af'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'exposure_amount'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '2eba66243bd9cb1005ad7564c3e45a4f'
                        deleted: true
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32ad40a5032946ebb15960c22843198b'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'submission'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33214059fee54fc9a6b1b881c32c3b3d'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '33a1b28018c6490b9661cae717d38e52'
                        key: {
                            category: 'x_gegis_ins_policy_risk_assess'
                            prefix: 'RSK'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '350bd8a7862d4692b53283b2bd811294'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'orchestration_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38d09a34798b4008a3c4024b4b51b3c1'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'intake_case'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '3abaa6243bd9cb1005ad7564c3e45a15'
                        deleted: true
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3dab60506e0142628ec79ac784e8ef79'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'subscription'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3df70661af2c4ecebc892c86c6bab0ed'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'intake_case'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3e31e6e25d284a8fb0a2902c535db897'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'quote_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4606356dd7b740c19b1aa5a97b99aefd'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'orchestration_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4611b588f8074e22a74b114fcaebc8da'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '46576b2050d64b94937506fa51357bce'
                        deleted: true
                        key: {
                            application_file: 'f034cd3b609e4662b31688c7071cf835'
                            source_artifact: '01ebe44c639a4bec91af41390ea1aac3'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '467a2f0107f44e13a4460fdb11cb7fe3'
                        key: {
                            category: 'x_gegis_ins_policy_intake_case'
                            prefix: 'IC'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '47baa6243bd9cb1005ad7564c3e45a68'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '4bbaa6243bd9cb1005ad7564c3e45a61'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '4fbaa6243bd9cb1005ad7564c3e45a1c'
                        deleted: true
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4fd20de523ef4e70afb38c630ae93a8c'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'blob_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5082e7620eb44e1abc5dea2e0b59f6c0'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'effective_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '52e9f35b718a42aa9abb19312b1d6f46'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'quote_status'
                            value: 'quoted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5306707062424e83ade0485f8913e85e'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'policy_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5329afa3d8ef49f784387f9d3b610e08'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '54b6c218265a42568020133b402d370b'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                            element: 'submission'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5534efecad164992b222a68bfc4fb724'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'risk_score'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55dec9ed23a145fea40a22fd2d9010df'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56896b5048454b5489dc65baf8b4f754'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '57eb62243b1dcb1005ad7564c3e45acc'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '57eb62243b1dcb1005ad7564c3e45ad2'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '57eb62243b1dcb1005ad7564c3e45ad8'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58d39a4907e44c63b02685616dd93598'
                        deleted: true
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'blob_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5c5b7a47176e487da22b46e79125073a'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cdc0ea598a74b379a4f562040626470'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'clearance_result'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cfe636b1662471d8b526cd107685c5a'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5fb0fbfbb22a48898fdb0e999a0fdf12'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'clearance_result'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '5feb62243b1dcb1005ad7564c3e45a4e'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6090c1bff6184d51874c0535be76169d'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'broker_name'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '627044cc5aae42728a16b85a8adef959'
                        key: {
                            category: 'x_gegis_ins_policy_ai_task'
                            prefix: 'AIT'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6401410c433543b9a16e017e2dddc514'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'risk_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '64524d1e1d0e4235b52287e3ba9a6a37'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'exposure_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '673a7889a3994af789368745ffc95b57'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'risk_level'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68a3ba4dc9ae4587817d926ef0a47d34'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'insured_name'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '6beba2243b1dcb1005ad7564c3e45a0a'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '6beba2243b1dcb1005ad7564c3e45a10'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6c3b80b3eef8427ba34beddf963ee654'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d3f5f105cb441bda0f9b5811d317c79'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'orchestration_case'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '701187da058a4559b752f630f79af1ae'
                        key: {
                            category: 'x_gegis_ins_policy_submission'
                            prefix: 'SUB'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '70397a0de201453f91ae0260641d64a0'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'blob_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7140e5938ba0490182538bdd40d8bf6c'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'submission'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '72841a0dc25e48f5a539dac797aa6aec'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '751bc93f501c4c008cc28e8fee54a623'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'risk_level'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76f9608704e04bb1a182847731f236f9'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'submission'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '7a43e4424a2a4930876f3032b3656cb3'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'exposure_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7aa5a3642165427eb4f051821670d030'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b74749e189043239540dcf9a910e26d'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bf817129dfc4566a19d6b9d39fa6339'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'premium_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c104aa02b63414ca9443766b817447e'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '7c15699aa67f43e8a670c1486f96c6b8'
                        key: {
                            application_file: '7849a5ab9ca840f185d0e047ed91f620'
                            source_artifact: '84a31431a5bf481ea1898fc0e1550bf1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d9a0bf56cbd45b080edd99eea0f8ccb'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'risk_level'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '80232f27a98846c48446fe02488b9454'
                        key: {
                            category: 'x_gegis_ins_policy_exposure'
                            prefix: 'EXP'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '808d5268aaac4288ac07b220c6edfb1d'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'submission'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '82e295371439493d85e70a6e9bcab90b'
                        key: {
                            endpoint: 'x_gegis_ins_policy_submissions.do'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '834d3a67eb82461fbae45f320c79c66f'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'quote_status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8360583a807a4d3482023ee002d7ece9'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'quote_status'
                            value: 'bound'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '83baa6243bd9cb1005ad7564c3e45a30'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '84a31431a5bf481ea1898fc0e1550bf1'
                        key: {
                            name: 'x_gegis_ins_policy_submissions.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '8665190bab0d479f91b44239a454b788'
                        deleted: true
                        key: {
                            name: 'x_gegis_ins_policy/vendor-react-dom--003b9c7e'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '87317dff64bc49c5b5584e830dd6592b'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'submission'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '878f9edf0281494bb96d51bf767d9720'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'broker_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c9151f009d24f14af2edb550c5a758b'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'source_email_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e4daf5f59d04d67811c4cdf862fcf5d'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'risk_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '90a29b5e519e440e9d46ee31f40d3a6f'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'clearance_result'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '90e2667c2f874ccdac6d4b029d1abb1a'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'subscription'
                            value: 'all'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '910c050d950f4c3cbadeb83eeb1895e1'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '91e17705da3e410695e05d2fd19ce3f1'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '96dfc816f01549458a2e9dcf43656ce7'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'policy_type'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '97eb62243b1dcb1005ad7564c3e45a45'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '987e43245f664875bdaec89d7848529c'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'blob_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '991a44c0ee534d98bf2b241ceef414d2'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9a95377179fa4a92ae51d54922814efa'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'subscription'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9e188e7aca25404e8f1ba4429aa3f6ee'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f502a92809642dcbacb6bf065979503'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'effective_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a09e7e5d0d904229ac3f3e92556f20f9'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'subscription'
                            value: 'quote_only'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a28f5efaa442420a98ae6e5bc66357fe'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'policy_type'
                            value: 'commercial_auto'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a31d742d10d64294be083315b1471378'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'quote_status'
                            value: 'declined'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'a69ca2948a0b406db29a1d4d210cdd68'
                        key: {
                            application_file: '82e295371439493d85e70a6e9bcab90b'
                            source_artifact: '84a31431a5bf481ea1898fc0e1550bf1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a953d7de55c64b878e5e7d18db673020'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'submission'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac148e367cb34a2ca15264f1106ba422'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'submission'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac3949d459a04b0eb31f6842ff36dafe'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'quote_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac535769648444fe97e37e12bbd08cfb'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'insured_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'ad35e59c496e44dd9f376360855eb5b1'
                        deleted: true
                        key: {
                            application_file: 'd8a255b60f754258ae248610d7ea40e1'
                            source_artifact: '01ebe44c639a4bec91af41390ea1aac3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad462615f6f145d79f70ad2a8cfa242d'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'error_message'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'adc131f832b142e9b528db4faf903e37'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'risk_level'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'af16cf1245864621ac2acded636f61cb'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4edc1c294864e9287ecb459c2ae8cfa'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                            element: 'intake_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b679c1295d744a0d992c307a8a23a797'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'error_message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6b55b01451c45c6b44db7f9e2c90f6f'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b951ee8043b24d6a96264240396fd3bb'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'clearance_result'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'baba261b4a16485299bb26a28721d3a8'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'expiration_date'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'be10910d8ecf4eeeb053c63723b3acdd'
                        key: {
                            category: 'x_gegis_ins_policy_quote_bind'
                            prefix: 'QTB'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'c171cd48bf684829ba0cceaa6f97b5c9'
                        key: {
                            category: 'x_gegis_ins_policy_orch_case'
                            prefix: 'ORC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c26bf70ccafe4c8eb55b0ac3a41e4f68'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'c3baa6243bd9cb1005ad7564c3e45a36'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5dac908951a4167975f3a1e98968703'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'insured_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c643131ed2a948a593d732a0701386d8'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'intake_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8d6488b00b94966926f3e813b8122ea'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'insured_name'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'cbbaa6243bd9cb1005ad7564c3e45a93'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cd3d176be0ef4e679f7050c39d799a04'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'policy_type'
                            value: 'property'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cffea41dd23d484db1e9698ff4483bf3'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'policy_type'
                            value: 'umbrella'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'd047806ec85e463a9117bdd1474b86ab'
                        key: {
                            category: 'x_gegis_ins_policy_clearance'
                            prefix: 'CLR'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0696befc6e741f28f2ef9220d679f09'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0b7ace915b548e2bc655aa135de1fe2'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3bf6a7c0a41418288d5a95fc5f3f38c'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'submission'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd4db89d9bf644a689301ddc1b1ecf753'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'subscription'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'd7eb62243b1dcb1005ad7564c3e45af1'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'assignment_group'
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
                        table: 'sys_documentation'
                        id: 'dbd584cac1e54e0497f7525783cfb82a'
                        key: {
                            name: 'x_gegis_ins_policy_orch_case'
                            element: 'submission'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc18796843c14dbba98b3acdc5f2a055'
                        key: {
                            name: 'x_gegis_ins_policy_quote_bind'
                            element: 'premium_amount'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'dccbc0d15cd247a8bd9ff52af673a56e'
                        deleted: true
                        key: {
                            application_file: '101a8e9d453241a094428aa869d1585a'
                            source_artifact: '01ebe44c639a4bec91af41390ea1aac3'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e2726d272fd54d048930631603393833'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'risk_level'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e3404fd39aa9487292627b8c575b28ae'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e38a7e429c8644e1add006c5de5f0618'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4439466b38d4493be69acb260e8db5d'
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'broker_email'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'e7eb62243b1dcb1005ad7564c3e45af7'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'ea62929eef594eb6a7b0b06f5babd9d6'
                        key: {
                            application_file: 'd8a255b60f754258ae248610d7ea40e1'
                            source_artifact: '84a31431a5bf481ea1898fc0e1550bf1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ea6513f4e79d4cfbab5659cdb3e32b14'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'subscription'
                            value: 'risk_only'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb1e3661eaf5482099f1715ca728826e'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'orchestration_case'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'ebeba2243b1dcb1005ad7564c3e45a29'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ec8e1f2f073c4682babf88528d2cf070'
                        key: {
                            name: 'x_gegis_ins_policy_submission'
                            element: 'policy_type'
                            value: 'general_liability'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eeab3b017c964ff08df5bcd70b9b5035'
                        deleted: true
                        key: {
                            name: 'x_gegis_ins_policy_intake_case'
                            element: 'blob_url'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'f034cd3b609e4662b31688c7071cf835'
                        deleted: true
                        key: {
                            name: 'x_gegis_ins_policy/vendor-react-dom--003b9c7e.js.map'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f16f9631d841488b8880a02f99a9219a'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'clearance_result'
                            value: 'cleared'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f201f7643e1f46d6aafbd6bc449f738b'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'document_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6716804010d49208bfacfaac263f12d'
                        key: {
                            name: 'x_gegis_ins_policy_ai_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f72bfa7d020f49b6907f797d3b060553'
                        deleted: true
                        key: {
                            application_file: '7849a5ab9ca840f185d0e047ed91f620'
                            source_artifact: '01ebe44c639a4bec91af41390ea1aac3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9df26a253db4c43a45aa8df6bfc4d56'
                        key: {
                            name: 'x_gegis_ins_policy_exposure'
                            element: 'exposure_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fe8d4b648d234b4eadb6208ac93858cb'
                        key: {
                            name: 'x_gegis_ins_policy_clearance'
                            element: 'clearance_result'
                            value: 'flagged'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fffdfc78ccbb4127a6506fbe479ac784'
                        key: {
                            name: 'x_gegis_ins_policy_risk_assess'
                            element: 'orchestration_case'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
