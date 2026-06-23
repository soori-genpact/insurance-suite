import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['852fe80abfbeb15e587e572a44c6a24b'],
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
        column_label: 'Associated Record',
        dependent: 'associated_table',
        dependent_on_field: 'associated_table',
        display: 'false',
        dynamic_creation: 'false',
        element: 'associated_record',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'document_id',
        label: 'Associated Record',
        mandatory: 'false',
        max_length: '32',
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
        use_dependent_field: 'true',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
