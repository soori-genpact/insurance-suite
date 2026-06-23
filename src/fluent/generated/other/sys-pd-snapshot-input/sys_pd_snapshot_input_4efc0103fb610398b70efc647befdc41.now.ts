import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['4efc0103fb610398b70efc647befdc41'],
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
        column_label: 'Parent Record',
        display: 'false',
        dynamic_creation: 'false',
        element: 'parent_record',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Parent Record',
        mandatory: 'false',
        max_length: '32',
        model: '8afc0103fb610398b70efc647befdc2e',
        model_id: '8afc0103fb610398b70efc647befdc2e',
        name: 'var__m_sys_pd_snapshot_input_8afc0103fb610398b70efc647befdc2e',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference: 'sys_playbook_execution',
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
