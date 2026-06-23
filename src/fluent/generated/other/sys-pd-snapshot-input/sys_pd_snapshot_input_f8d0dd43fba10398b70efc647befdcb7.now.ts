import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f8d0dd43fba10398b70efc647befdcb7'],
    table: 'sys_pd_snapshot_input',
    data: {
        active: 'true',
        array: 'false',
        attributes: 'element_mapping_provider=com.snc.pd.designer.elementmapping.PlaybookInputElementMapper',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Parent record',
        display: 'false',
        dynamic_creation: 'false',
        element: 'parent_record',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Parent record',
        mandatory: 'false',
        max_length: '32',
        model: '78d09d43fba10398b70efc647befdcce',
        model_id: '78d09d43fba10398b70efc647befdcce',
        name: 'var__m_sys_pd_snapshot_input_78d09d43fba10398b70efc647befdcce',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference: 'x_gegis_ins_policy_clearance_case',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
