import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9517d1ad47f298a5ba0ccaba00494edd'],
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
        use_dependent_field: 'true',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
