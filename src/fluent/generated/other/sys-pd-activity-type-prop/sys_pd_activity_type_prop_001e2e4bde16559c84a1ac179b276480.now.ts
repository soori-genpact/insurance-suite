import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['001e2e4bde16559c84a1ac179b276480'],
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
        column_label: 'Description',
        default_value: 'Portfolio Optimization UI',
        display: 'false',
        dynamic_creation: 'false',
        element: 'description',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'html',
        label: 'Description',
        mandatory: 'false',
        max_length: '1000',
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
