import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['abc19c4829e1badd80810b27824502da'],
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
        column_label: 'Is Automated',
        default_value: 'false',
        display: 'false',
        dynamic_creation: 'false',
        element: 'is_automated',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'Is Automated',
        mandatory: 'false',
        max_length: '40',
        model: 'd9b42f4542c2d9c76539c5ce7add0b47',
        model_id: 'd9b42f4542c2d9c76539c5ce7add0b47',
        name: 'var__m_sys_pd_activity_type_prop_d9b42f4542c2d9c76539c5ce7add0b47',
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
