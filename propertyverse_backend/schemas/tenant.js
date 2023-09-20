export default {
        name: 'tenant',
        title: 'Tenant',
        type: 'document',
        fields: [
                {
                        name: 'tenantBy',
                        title: 'TenantBy',
                        type: 'tenantBy',
                },
                {
                        name: 'tenantId',
                        title: 'TenantId',
                        type: 'string',
                },
                {
                        name: 'tenantPurpose',
                        title: 'TenantPurpose',
                        type: 'string',
                }
        ]
}