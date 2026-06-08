import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5f2dd822339587547ef8f499ed5c7bc4'],
    table: 'sys_pd_snapshot',
    data: {
        access: 'public',
        derivatives:
            '{"table":"sys_pd_snapshot","id":"5f2dd822339587547ef8f499ed5c7bc4","name":"derivatives","type":"com.snc.pd.model.serialization.DerivativeFetcher"}',
        name: 'exposure_case_playbook',
        process_definition:
            '{"table":"sys_pd_snapshot","id":"5f2dd822339587547ef8f499ed5c7bc4","name":"process_definition","type":"com.snc.pd.model.ProcessDefinition"}',
        process_dependencies:
            '{"table":"sys_pd_snapshot","id":"5f2dd822339587547ef8f499ed5c7bc4","name":"process_dependencies","type":"com.snc.pd.model.dependency.InstructionBasedProcessDependenciesCollection"}',
        process_plan:
            '{"table":"sys_pd_snapshot","id":"5f2dd822339587547ef8f499ed5c7bc4","name":"process_plan","type":"com.snc.process_flow.engine.ProcessPlan"}',
        source: 'ec000001000000000000000000000001',
    },
})
