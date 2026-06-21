import { Subflow, wfa } from '@servicenow/sdk/automation'
import { ChoiceColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const base_playbook_activity_flow = Subflow(
    {
        $id: Now.ID['db1084e553a5c7107d5fd301a0490e31'],
        name: 'Base Playbook Activity Flow',
        description: `<p>Simple instruction process activity for Playbook Workspace Experience, that optionally waits for user to complete the flow data record.</p>
<p><b>Inputs:</b></p>
<ul>
<li><b>Message</b> - Message that will be displayed to the end user using Playbook Workspace Experience</li>
<li><b>Wait for user input</b> - When checked, does not wait for flow data to be in a completed state.</li>
</ul>

<p><b>Outputs:</b></p>
<ul><li><b>Record</b> - Flow Data Record.</li>
<li><b>Automated</b> - True/False based on whether the flow waited for user input or not.</li>
</ul>`,
        category: 'f427c6ef1b230010affd0e55cc4bcb14',
        inputs: {
            wait: ChoiceColumn({
                label: 'Wait for user input',
                maxLength: 32,
                default: 'yes',
                choices: {
                    yes: {
                        label: 'Yes',
                        sequence: 2,
                    },
                    no: {
                        label: 'No',
                        sequence: 1,
                    },
                },
            }),
        },
        outputs: {
            automated: BooleanColumn({
                label: 'Automated',
            }),
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
                $id: Now.ID['7f10c4e553a5c7107d5fd301a0490ebc'],
                uuid: 'e17e6678-8e97-4584-a903-cfa6e47fd378',
            },
            {
                definition: '04808edf1be7001094630f28cc4bcb6e',
                assigned_to: '',
                wait: wfa.dataPill(_params.inputs.wait, 'choice'),
                assignment_group: '',
                state: wfa.inlineScript("return fd_data.subflow_inputs.wait == 'yes' ? 'PENDING': 'COMPLETE';"),
            }
        )
        wfa.flowLogic.assignSubflowOutputs(
            {
                $id: Now.ID['ff10c4e553a5c7107d5fd301a0490eb9'],
            },
            _params.outputs,
            {
                record: wfa.dataPill(actionInstance_1.record, 'reference'),
                automated: wfa.inlineScript("return fd_data.subflow_inputs.wait!='yes';"),
            }
        )
    }
)
