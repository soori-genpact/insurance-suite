import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d6cfcc33170870b460417571c9f4456f'],
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
        model: 'f4bdb10fe1b55493857223a061c88032',
        model_id: 'f4bdb10fe1b55493857223a061c88032',
        name: 'var__m_sys_pd_activity_type_prop_f4bdb10fe1b55493857223a061c88032',
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
