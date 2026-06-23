import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f22b3a3c3ccac45706d184ee808a8589'],
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
        model: 'fec003462b5cd211d3b32ea59f25d27d',
        model_id: 'fec003462b5cd211d3b32ea59f25d27d',
        name: 'var__m_sys_pd_activity_type_prop_fec003462b5cd211d3b32ea59f25d27d',
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
