import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { userRole } from '../security/roles.now.js'

// ─── Application Menu ─────────────────────────────────────────────────────────

export const insuranceSuiteMenu = ApplicationMenu({
    $id: Now.ID['ins_app_menu'],
    title: 'Insurance Policy Suite',
    hint: 'Policy submission, clearance, exposure, risk, and Q&B workflow',
    description: 'End-to-end insurance policy processing suite',
    roles: [userRole],
    active: true,
    order: 100,
    category: '',
})

// ─── Intake Cases ─────────────────────────────────────────────────────────────

export const moduleIntakeCases = Record({
    $id: Now.ID['mod_intake_cases'],
    table: 'sys_app_module',
    data: {
        title: 'Intake Cases',
        application: insuranceSuiteMenu,
        link_type: 'LIST',
        name: 'x_gegis_ins_policy_intake_case',
        hint: 'All inbound submissions from email, portal or API',
        roles: ['[object Object]'],
        active: true,
        order: 100,
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

// ─── Clearance Cases ──────────────────────────────────────────────────────────

export const moduleClearanceCases = Record({
    $id: Now.ID['mod_clearance_cases'],
    table: 'sys_app_module',
    data: {
        title: 'Clearance Cases',
        application: insuranceSuiteMenu,
        link_type: 'LIST',
        name: 'x_gegis_ins_policy_clearance_case',
        hint: 'Sanction, duplication and insured verification checks',
        roles: ['[object Object]'],
        active: true,
        order: 200,
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

// ─── Risk ─────────────────────────────────────────────────────────────────────

export const moduleRisk = Record({
    $id: Now.ID['mod_risk_cases'],
    table: 'sys_app_module',
    data: {
        title: 'Risk',
        application: insuranceSuiteMenu,
        link_type: 'LIST',
        name: 'x_gegis_ins_policy_risk_case',
        hint: 'Risk scoring, appetite decisions and loss history',
        roles: ['[object Object]'],
        active: true,
        order: 300,
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

// ─── Quote & Bind ─────────────────────────────────────────────────────────────

export const moduleQnb = Record({
    $id: Now.ID['mod_qnb_cases'],
    table: 'sys_app_module',
    data: {
        title: 'Quote & Bind',
        application: insuranceSuiteMenu,
        link_type: 'LIST',
        name: 'x_gegis_ins_policy_qnb_case',
        hint: 'Quotes, negotiation and policy binding',
        roles: ['[object Object]'],
        active: true,
        order: 400,
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

// ─── My Tasks — separator ─────────────────────────────────────────────────────

export const separatorMyTasks = Record({
    $id: Now.ID['mod_sep_my_tasks'],
    table: 'sys_app_module',
    data: {
        title: 'My Tasks',
        application: insuranceSuiteMenu,
        link_type: 'SEPARATOR',
        roles: ['[object Object]'],
        active: true,
        order: 500,
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

// ─── My Tasks — Open ─────────────────────────────────────────────────────────

export const moduleMyTasksOpen = Record({
    $id: Now.ID['mod_my_tasks_open'],
    table: 'sys_app_module',
    data: {
        title: 'Open',
        application: insuranceSuiteMenu,
        link_type: 'FILTER',
        name: 'task',
        filter: 'assigned_to=javascript:gs.getUserID()^active=true^sys_class_nameINx_gegis_ins_policy_clearance_case,x_gegis_ins_policy_exposure_case,x_gegis_ins_policy_risk_case,x_gegis_ins_policy_qnb_case,x_gegis_ins_policy_intake_case,x_gegis_ins_policy_case_task',
        hint: 'My open tasks across all modules',
        roles: ['[object Object]'],
        active: true,
        order: 501,
        mobile_title: 'Open',
        mobile_view_name: 'Mobile',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

// ─── My Tasks — Completed ────────────────────────────────────────────────────

export const moduleMyTasksCompleted = Record({
    $id: Now.ID['mod_my_tasks_completed'],
    table: 'sys_app_module',
    data: {
        title: 'Completed',
        application: insuranceSuiteMenu,
        link_type: 'FILTER',
        name: 'task',
        filter: 'assigned_to=javascript:gs.getUserID()^active=false^sys_class_nameINx_gegis_ins_policy_clearance_case,x_gegis_ins_policy_exposure_case,x_gegis_ins_policy_risk_case,x_gegis_ins_policy_qnb_case,x_gegis_ins_policy_intake_case,x_gegis_ins_policy_case_task',
        hint: 'My completed tasks across all modules',
        roles: ['[object Object]'],
        active: true,
        order: 502,
        mobile_title: 'Completed',
        mobile_view_name: 'Mobile',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})
