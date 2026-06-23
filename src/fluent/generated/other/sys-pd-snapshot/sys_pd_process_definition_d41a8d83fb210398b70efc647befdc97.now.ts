import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['79dc645f93658310ce18b5d97bba1049'],
    table: 'sys_pd_snapshot',
    data: {
        access: 'public',
        derivatives:
            '{"table":"sys_pd_snapshot","id":"79dc645f93658310ce18b5d97bba1049","name":"derivatives","type":"com.snc.pd.model.serialization.DerivativeFetcher"}',
        name: 'risk_case',
        process_definition:
            '{"table":"sys_pd_snapshot","id":"79dc645f93658310ce18b5d97bba1049","name":"process_definition","type":"com.snc.pd.model.ProcessDefinition"}',
        process_dependencies:
            '{"table":"sys_pd_snapshot","id":"79dc645f93658310ce18b5d97bba1049","name":"process_dependencies","type":"com.snc.pd.model.dependency.InstructionBasedProcessDependenciesCollection"}',
        process_plan:
            '{"table":"sys_pd_snapshot","id":"79dc645f93658310ce18b5d97bba1049","name":"process_plan","type":"com.snc.process_flow.engine.ProcessPlan"}',
        source: 'd41a8d83fb210398b70efc647befdc97',
    },
})
