import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['16a0f46a99e10face0561b566347489b'],
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
        model: 'cc6ca77193394ef9d996d171065e0b8b',
        model_id: 'cc6ca77193394ef9d996d171065e0b8b',
        name: 'var__m_sys_pd_activity_type_prop_cc6ca77193394ef9d996d171065e0b8b',
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
