import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c27ae6fe8532e0a2e6ee9cb4f25388c6'],
    table: 'sys_pd_activity_type_prop',
    data: {
        active: 'true',
        array: 'false',
        attributes: 'element_mapping_provider=com.snc.pd.designer.elementmapping.ActivityTypeValueElementMapper',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Experience Status Table',
        default_value: 'sys_flow_data',
        display: 'false',
        dynamic_creation: 'false',
        element: 'experience_status_table',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'table_name',
        label: 'Experience Status Table',
        mandatory: 'false',
        max_length: '80',
        model: 'c8440448234e88f1252d6a488d306232',
        model_id: 'c8440448234e88f1252d6a488d306232',
        name: 'var__m_sys_pd_activity_type_prop_c8440448234e88f1252d6a488d306232',
        order: '100',
        primary: 'false',
        read_only: 'false',
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
