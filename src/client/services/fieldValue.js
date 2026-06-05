// The Table API with sysparm_display_value=all returns each field as
// { value, display_value }. These helpers safely unwrap either shape.

export function displayValue(field) {
    if (field && typeof field === 'object') {
        return field.display_value ?? field.value ?? ''
    }
    return field ?? ''
}

export function rawValue(field) {
    if (field && typeof field === 'object') {
        return field.value ?? ''
    }
    return field ?? ''
}
