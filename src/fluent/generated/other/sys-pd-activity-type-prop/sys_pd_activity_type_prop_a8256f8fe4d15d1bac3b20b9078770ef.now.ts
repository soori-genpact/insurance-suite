import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a8256f8fe4d15d1bac3b20b9078770ef'],
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
        default_value: 'Initiate Exposure Management UI',
        display: 'false',
        dynamic_creation: 'false',
        element: 'description',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'html',
        label: 'Description',
        mandatory: 'false',
        max_length: '1000',
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
