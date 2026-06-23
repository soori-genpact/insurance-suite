import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['aacd3094fc7a4b69ffe6587fd72ac311'],
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
        model: '798f64cd787f68aca909fa1e10f74aac',
        model_id: '798f64cd787f68aca909fa1e10f74aac',
        name: 'var__m_sys_pd_activity_type_prop_798f64cd787f68aca909fa1e10f74aac',
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
