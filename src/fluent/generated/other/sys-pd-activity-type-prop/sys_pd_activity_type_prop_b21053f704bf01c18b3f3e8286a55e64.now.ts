import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b21053f704bf01c18b3f3e8286a55e64'],
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
        column_label: 'Experience Status Record',
        dependent: 'experience_status_table',
        dependent_on_field: 'experience_status_table',
        display: 'false',
        dynamic_creation: 'false',
        element: 'experience_status_record',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'document_id',
        label: 'Experience Status Record',
        mandatory: 'false',
        max_length: '32',
        model: '70c7c0603965c1cbcdb2a144a8ad79f3',
        model_id: '70c7c0603965c1cbcdb2a144a8ad79f3',
        name: 'var__m_sys_pd_activity_type_prop_70c7c0603965c1cbcdb2a144a8ad79f3',
        order: '100',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'true',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
