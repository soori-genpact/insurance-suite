import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['07a9fdd168021c5e32248186c5b24a06'],
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
        model: 'a9b7d4312bac6b2321a0bf850fe5a641',
        model_id: 'a9b7d4312bac6b2321a0bf850fe5a641',
        name: 'var__m_sys_pd_activity_type_prop_a9b7d4312bac6b2321a0bf850fe5a641',
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
