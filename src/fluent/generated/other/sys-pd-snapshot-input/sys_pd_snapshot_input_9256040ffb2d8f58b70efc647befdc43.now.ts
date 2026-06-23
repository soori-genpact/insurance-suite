import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9256040ffb2d8f58b70efc647befdc43'],
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
        model: '1656040ffb2d8f58b70efc647befdc3a',
        model_id: '1656040ffb2d8f58b70efc647befdc3a',
        name: 'var__m_sys_pd_snapshot_input_1656040ffb2d8f58b70efc647befdc3a',
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
