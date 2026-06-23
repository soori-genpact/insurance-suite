import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d7762155bfb1352f9ca8099c86d45d75'],
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
        column_label: 'Associated Table',
        default_value: 'sys_flow_data',
        display: 'false',
        dynamic_creation: 'false',
        element: 'associated_table',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'table_name',
        label: 'Associated Table',
        mandatory: 'false',
        max_length: '80',
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
