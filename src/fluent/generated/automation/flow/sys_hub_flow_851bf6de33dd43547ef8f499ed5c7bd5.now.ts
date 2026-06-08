import { Subflow, wfa, action } from '@servicenow/sdk/automation'
import { ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const insurance_suite_manual_activity = Subflow(
    {
        $id: Now.ID['851bf6de33dd43547ef8f499ed5c7bd5'],
        name: 'Insurance Suite  Manual Activity',
        description: `<p>Manual process activity, that optionally waits for user to complete flow data record.</p>
<p><b>Inputs:</b></p>
<ul>
<li><b>Assignment Group</b> - (Optional) Group required to provide flow data inputs.</li>
<li><b>Assigned To</b> - (Optional) User required to provide flow data inputs.</li>
<li><b>Automated</b> - When checked, does not wait for flow data to be in a completed state.</li>
<li><b>Wait for user input</b> - When checked, does not wait for flow data to be in a completed state.</li>
</ul>

<p><b>Outputs:</b></p>
<ul><li><b>Record</b> - Flow Data Record.</li>
<li><b>Automated</b> - True/False based on whether the flow waited for user input or not.</li>
</ul>`,
        category: 'f427c6ef1b230010affd0e55cc4bcb14',
        inputs: {
            taskinput: ReferenceColumn({
                label: 'TaskInput',
                referenceTable: 'task',
            }),
            wait: ChoiceColumn({
                label: 'Wait for user input',
                maxLength: 32,
                default: 'yes',
                choices: {
                    yes: {
                        label: 'Yes',
                        sequence: 1,
                    },
                    no: {
                        label: 'No',
                    },
                },
            }),
        },
        outputs: {
            record: ReferenceColumn({
                label: 'Record',
                referenceTable: 'sys_flow_data',
            }),
        },
    },
    (_params) => {
        const actionInstance_1 = wfa.action(
            '99008a631b67001094630f28cc4bcb97',
            {
                $id: Now.ID['b51b7ade33dd43547ef8f499ed5c7b96'],
                uuid: 'e17e6678-8e97-4584-a903-cfa6e47fd378',
            },
            {
                definition: '04808edf1be7001094630f28cc4bcb6e',
                assigned_to: '6816f79cc0a8016401c5a33be04be441',
                wait: wfa.dataPill(_params.inputs.wait, 'choice'),
                assignment_group: '91e18e91fba3ee102eacfdd86eefdc35',
                state: 'PENDING',
            }
        )
        wfa.flowLogic.assignSubflowOutputs(
            {
                $id: Now.ID['651b7ade33dd43547ef8f499ed5c7b7e'],
            },
            _params.outputs,
            {
                record: wfa.dataPill(actionInstance_1.record, 'reference'),
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Wait For user input No And status is Decline',
                condition: `${wfa.dataPill(_params.inputs.wait, 'choice')}=no`,
                annotation: '',
                $id: Now.ID['291b7ade33dd43547ef8f499ed5c7b8e'],
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['b91b7ade33dd43547ef8f499ed5c7b98'],
                        uuid: '91dd9245-b28d-48f9-b924-c3f94e77ab00',
                    },
                    {
                        record: wfa.dataPill(actionInstance_1.record, 'reference'),
                        table_name: 'sys_flow_data',
                        values: TemplateValue({
                            state: 'SKIPPED',
                        }),
                    }
                )
                wfa.flowLogic.endFlow({
                    annotation: '',
                    $id: Now.ID['f91b7ade33dd43547ef8f499ed5c7b90'],
                })
            }
        )
        wfa.flowLogic.if(
            {
                condition: `${wfa.dataPill(_params.inputs.wait, 'choice')}=no`,
                annotation: '',
                $id: Now.ID['351b7ade33dd43547ef8f499ed5c7b92'],
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['351b7ade33dd43547ef8f499ed5c7b99'],
                        uuid: '36200886-e130-46df-8a92-dbe217661e58',
                    },
                    {
                        record: wfa.dataPill(actionInstance_1.record, 'reference'),
                        table_name: 'sys_flow_data',
                        values: TemplateValue({
                            state: 'COMPLETE',
                        }),
                    }
                )
                wfa.flowLogic.endFlow({
                    annotation: '',
                    $id: Now.ID['7d1b7ade33dd43547ef8f499ed5c7b93'],
                })
            }
        )
        wfa.action(
            action.core.waitForCondition,
            {
                $id: Now.ID['f91b7ade33dd43547ef8f499ed5c7bb3'],
                uuid: '244c9255-c82b-47e3-8c53-ff7314f9f02d',
            },
            {
                record: wfa.dataPill(actionInstance_1.record, 'reference'),
                table_name: 'sys_flow_data',
                conditions: 'stateINCOMPLETE,SKIPPED,ERROR,CANCELLED',
                timeout_flag: false,
                timeout_duration: '',
                timeout_schedule: '',
            }
        )
    }
)
