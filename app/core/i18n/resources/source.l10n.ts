export const ENGLISH = {
    ACCESS: 'Access',
    CHROME: 'Chrome',
    EDGE: 'Edge',
    FIREFOX: 'Firefox',
    SAFARI: 'Safari',
    LOGO_ALT_TEXT: '{0} Logo',
    CLEAN_UP: 'Clean Up',
    RECONNECT: 'Reconnect',
    NUMBER_ONE: '1. ',
    NUMBER_TWO: '2. ',
    NUMBER_THREE: '3. ',
    OLD_BROWSER_WARNING_INFO: 'For the best experience, use a modern browser such as Google Chrome, ' +
        'Microsoft Edge, Firefox, or Safari.',
    BROKER_DESC: 'Set up the broker to enable assignment capabilities to deliver desktops and applications to end users.',
    BROKER_ALERT_MESSAGE_FOR_FARM: 'To create a farm on a pod, you must first set up the broker. <a href="#/app/broker" rel="noopener" linkIdentifier="portalLinkInAstro">Go to Broker</a>',
    BROKER_ALERT_MESSAGE_FOR_ASSIGNMENTS: 'To create assignments on pods, you must first set up the broker. Go to Broker. <a href="#/app/broker" rel="noopener" linkIdentifier="portalLinkInAstro">Go to Broker</a>',
    MORE_NOTIFICATIONS: '99+',
    ALLOCATED: 'Allocated',
    N_PERCENT_ALLOCATED: '{0}% Allocated',
    ENZO: 'Private Data Center',
    UTILIZATION: 'Utilization',
    RESOLVE_UPDATE_ERROR: 'Resolve Update Errors',
    UTILIZATION_COLON: 'Utilization:',
    DESKTOP_APP_UTILIZATION: 'Desktop & App Utilization',
    DESKTOP_APP_UTILIZATION_COLON: 'Desktop & App Utilization:',
    DESKTOP_APP_UTILIZATION_TEXT: 'The desktop & app utilization percentage is calculated by dividing the total number of active sessions by the maximum number of sessions possible in the pod.',
    DESKTOP_APP_UTILIZATION_TEXT_ALL_PODS: 'Desktop & App Utilization percentage is a ' +
        'measure of user activity in terms of sessions in use versus max sessions possible. ' +
        'The overall percentage is calculated by adding all active sessions across all pods ' +
        'and dividing by the sum of the maximum number of sessions across all pods.',
    DESKTOP_APP_UTILIZATION_HOVER_TEXT: 'Desktop and App Utilization is currently ' +
        'unavailable for VMware SDDC pods.',
    APPS_SESSIONS_COLON: 'Apps Sessions:',
    UTILIZED: 'Utilized',
    TOP_LOCATION_BY_USERS: 'Top Location by Users',
    SMARTNODE_DISCONNECTED_DETAILS: 'Your appliance is connected but currently ' +
        'unavailable. Please contact support.',
    ONE_ISSUE_DETECTED: '1 issue detected',
    UNAVAILABLE: 'Unavailable',
    USER_SESSION_TIMEOUT_ERROR: 'Your session has timed out. Please login again.',
    SIZE: 'Size',
    SIZE_MB: 'Size (MB)',
    DURATION_MINUTES: '{0} Minute(s)',
    SESSION_NOT_FOUND_ERROR: 'Invalid Session',
    DT_SESSION_NOT_FOUND: 'Failed to log off one or more sessions as session was not found.',
    UPN_FORMAT_INVALID: 'Username in UPN format is invalid',
    SELECTED_USER_GROUP_COLON: 'Selected User Group:',
    USER_GROUP_COLON: 'User Group:',
    RADIUS_CONFIGURATION_SAVED: 'Radius Configuration saved successfully',
    ROLES_ADD_SUCCEEDED: '{0} role added successfully',
    ROLES_EDIT_SUCCEEDED: '{0} role edited successfully',
    PASSWORD_CRITERIA_FAIL: 'Invalid password. New password cannot be same as an expired ' +
        'password or a previous password.',
    CHANGE_PASSWORD: 'Change Password',
    EDIT_IMAGE_DUPLICATE: 'Image with this name already exists.Please enter a new name.',
    CHANGE_LOCAL_PASSWORD_INFO: 'Enter a new local account password.',
    LOCAL_PASSWORD_CHANGED_SUCCESS: 'Your local account password has been changed ' +
        'successfully.  Please use your new password to login.',
    RSA_NEXT_TOKEN_INFO: 'Wait for the next RSA SecurID token code and enter it to login.',
    RSA_PIN_CHANGE: 'RSA SecurID pin change',
    RSA_PIN_CHANGE_INFO: 'Please launch the Horizon client to change your RSA SecurID pin.',
    RSA_LOGIN_INFO: 'Enter your RSA SecurID credentials',
    RADIUS_LOGIN_INFO: 'Enter your {0} credentials',
    LOCAL_ADMIN_LOGIN_INFO: 'Enter your local account credentials',
    AD_LOGIN_INFO: 'Enter your Active Directory credentials',
    BINDING_DOMAIN: 'Binding domain',
    PLEASE_WAIT: 'Please wait',
    AD_DOMAIN_DT_INVALID_DOMAIN_NAME: 'Enter a valid domain name.',
    AD_DOMAIN_DT_INVALID_DIRECTORY_ACCESS_PROTOCOL: 'Directory Access Protocol must be LDAP.',
    AD_DOMAIN_DT_UNABLE_TO_REACH_ANY_DOMAIN_CONTROLLERS: 'Unable to contact a domain controller. ' +
        'This might be due to an incorrect port number or domain controller IP.',
    AD_DOMAIN_DT_INVALID_CONTEXT_ROOT: 'Enter a valid domain context root.',
    AD_DOMAIN_DT_INVALID_AD_SERVICE_ACCOUNT: 'Service account username or password is incorrect.',
    AD_DOMAIN_DT_SERVICE_ACCOUNT_EMPTY: 'Service account cannot be empty.',
    AD_DOMAIN_DT_DOMAIN_JOIN_NO_DNS_SERVER_ENTERED: 'At least one DNS server is required.',
    AD_DOMAIN_DT_DOMAIN_JOIN_USER_AUTHENTICATION_FAILURE: 'Cannot authenticate account while domain join information is saved.',
    AD_DOMAIN_DT_DOMAIN_JOIN_ACCOUNTS_EMPTY: 'At least one domain join account is required.',
    DT_DOMAIN_JOIN_USER_AUTHENTICATION_FAILURE: 'The Domain Join credentials provided are ' +
        'invalid.',
    DT_DOMAIN_JOIN_USER_INSUFFICIENT_PRIVILEGES: 'The Domain Join credentials provided do ' +
        'not have the privileges to perform the Domain Join.',
    DT_DOMAIN_JOIN_SECONDARY_DNS_SERVER_SAME_AS_PRIMARY: 'Your primary and secondary DNS ' +
        'Server IP addresses cannot be the same.',
    DT_DOMAIN_JOIN_ERROR_OTHER: 'The Domain Join information could not be saved due to an ' +
        'error.',
    NO_DOMAIN_JOIN_HDR: 'Domain Join information has not been provided.',
    NO_DOMAIN_JOIN_MSG: 'Domain Join credentials are required to create desktop assignments.',
    NO_ACTIVE_DIRECTORY_REGISTERED: 'An Active Directory has not been registered.',
    READ_ONLY_ADMIN: 'Readonly-Administrator',
    DEMO_ADMIN: 'Demo Administrator',
    ADD_ADMIN: 'Add Administrator',
    ADD_SUPER_ADMIN_LABEL: 'Add Super Administrator',
    SUPER_ADMIN: 'Super Administrator',
    HELPDESK_ADMIN: 'Help Desk Administrator',
    HELPDESK_READONLY_ADMIN: 'Help Desk Read Only Administrator',
    HELPDESK_READONLY_ADMIN_ABBR: 'Help Desk Readonly Admin',
    ADMIN_DEMO: 'Demo Admin',
    ADD_READONLY_ADMIN_LABEL: 'Add Demo Administrator',
    EDIT_SUPER_ADMIN_LABEL: 'Edit Super Administrator',
    EDIT_READONLY_ADMIN_LABEL: 'Edit Demo Administrator',
    EDIT_HELPDESK_ADMIN_LABEL: 'Edit Help Desk Administrator',
    EDIT_HELPDESK_READONLY_ADMIN_LABEL: 'Edit Help Desk Read Only Administrator',
    CAN_ADD_ONLY_ONE_GROUP: 'Only one group can be added',
    NETBIOS_NAME_MISMATCH: 'Name must match the DNS prefix',
    DOMAIN_JOIN_SUCCEEDED_ADD_GROUP: 'Successfully saved your Domain Join information. ' +
        '<br>Would you like to add Super Administrator users now?',
    ADD_SUPER_ADMIN_GROUP_INFO: 'It\'s recommended that you assign at least one user group ' +
        'in this domain to have the Super Administrator role. This will enable their Active ' +
        'Directory credentials for authentication. Would you like to add Super Administrator ' +
        'Users now?',
    NETBIOS_NAME_INVALID: 'The Domain name cannot contain invalid characters.',
    IP_ADDRESS_INVALID: 'IP Address is invalid.',
    ENTER_VALID_IP_ADDRESSES: 'Please enter the list of valid IP Addresses, separated ' +
        'by comma (for example 10.118.91.1, 10.118.91.2).',
    DOMAIN_JOIN_SUCCEEDED: 'Successfully saved Domain Join information.',
    DOMAIN_JOIN_INFO: 'Would you like to add Domain Join credentials now to crete Desktop ' +
        'Assignment? Don\'t worry, you can perform this task later from Settings>Active Directory.',
    DOMAIN_JOIN_INFO_WARNING: 'Editing this Domain will erase previous Domain Join ' +
        'information. Domain Join information is required for creating a Desktop Assignment. ' +
        'Don\'t worry, you can perform this task later from Settings>Active Directory',
    LATER: 'Later',
    EDIT_DOMAIN: 'Edit Active Directory',
    DOMAIN_EDIT_SUCCEEDED: 'Active Directory edited successfully.',
    DOMAIN_EDIT_SUCCEEDED_JOIN_DOMAIN: 'Successfully edited the Active Directory. ' +
        '<br>Would you like to add Domain Join information now?',
    REMOVE_DOMAIN_MSG: 'Are you sure you want to remove this Active Directory?',
    REMOVE_DOMAIN_DESC: 'This action will permanently remove the Active Directory ' +
        'from the system.',
    REMOVE_DOMAIN_SUCCEEDED: 'The Active Directory has been removed successfully.',
    PASSCODE_REQUIRED: 'A Passcode is required.',
    USERNAME_PASSCODE_REQUIRED: 'Username and Password are required.',
    AUTHENTICATION_FAILED: 'Authentication failed. Please try again.',
    PASSCODE: 'Passcode',
    CONNECTIONS_TITLE: 'Connections',
    ABOUT_HORIZON_AIR_PLATFORM: 'About Horizon Cloud\u2122',
    ABOUT_WITH_ARG: 'About {0}',
    SEARCHING_ACTIVE_DIRECTORY: 'Searching Active Directory',
    SEARCHING_AD_CACHE: 'Searching Active Directory Cache...',
    SEARCHING_AD_PLEASE_WAIT: 'Searching Entire Active Directory. Please wait for a while...',
    SEARCH_ACTIVE_DIRECTORY: 'Search Active Directory',
    ACTIVE_DIRECTORY: 'Active Directory',
    INTERNAL_NETWORK: 'Internal Network',
    INTERNAL_EXTERNAL_UAG_FQDNS_ARE_NOT_MATCHING: 'Internal and external Gateway FQDNs must match.',
    FQDN_ALREADY_EXIST: 'FQDN is already in use.',
    CONTACT_INFO: 'Contact Info',
    CONTACT_INFO_ADMIN: 'Admin',
    DOMAINS: 'Domains',
    NO_ACTIVE_DIRECTORY_CLICK_REGISTER_MSG: 'You do not have an Active Directory ' +
        'registered. Register one or more Active Directories so you can assign new Assignments ' +
        'or give administrative access to your user groups.',
    FQDN_TYPE: 'FQDN Type',
    FQDN_TYPE_COLON: 'FQDN Type:',
    BROKERING_FQDN: 'Brokering FQDN',
    BROKERING_FQDN_COLON: 'Brokering FQDN:',
    BROKER_ENABLE_UAG_DELETION_MESSAGE: 'Since Broker is set, After deleting gateway, Desktop will not be connect. </br> This action cannot be undone.',
    VMWARE_PROVIDED: 'VMware Provided',
    VMWARE_PROVIDED_COLON: 'VMware Provided:',
    CUSTOMER_PROVIDED: 'Customer Provided',
    VIEW_PODS: 'View Pod(s)',
    VIEW_CLIENT_HEARTBEAT_INTERVAL: 'Client Heartbeat Interval:',
    VIEW_CLIENT_IDLE_USER: 'Client Idle User:',
    VIEW_CLIENT_BROKER_SESSION: 'Client Broker Session:',
    VIEW_CLIENT_CREDENTIAL_CACHE: 'Client Credential Cache:',
    DOMAIN_JOIN_USERNAME: 'Join Username:',
    DOMAIN_JOIN_PASSWORD: 'Join Password:',
    AUXILLARY_ACCOUNT_USERNAME: 'Auxiliary Bind Account Username:',
    ADD_AUXILIARY_BIND_ACCOUNT: 'Add Auxiliary Bind Account',
    AUXILLARY_BIND_ACCOUNT: 'Auxiliary Bind Account',
    ADD_AUXILIARY_JOIN_ACCOUNT: 'Add Auxiliary Join Account',
    REMOVE_AUXILIARY_JOIN_ACCOUNT: 'Remove Auxiliary Join Account',
    AUXILIARY_DOMAIN_JOIN_USERNAME: 'Auxiliary Join Username:',
    AUXILIARY_DOMAIN_JOIN_PASSWORD: 'Auxiliary Join Password:',
    DOMAIN_BIND_ACCOUNT_USERNAME: 'Bind Username:',
    DOMAIN_BIND_ACCOUNT_PASSWORD: 'Bind Password:',
    CHANGE_ACCOUNT_NUMBER: 'Change Account#',
    DOMAIN_PORT_INVALID: 'Port should be an integer between 0 and 65535',
    DOMAIN_REGISTRATION_SUCCEEDED: 'Domain registered successfully.',
    DOMAIN_REGISTRATION_SUCCEEDED_JOIN_DOMAIN: 'Successfully registered Domain. ' +
        'Would you like to add Domain Join details now? If you do not have Domain Join ' +
        'credentials, don\'t worry, you can perform this task later.',
    DOMAIN_BIND_PROTOCOL_CHANGED: 'Protocol changed',
    DOMAIN_BIND_PROTOCOL_CHANGED_MSG: 'Change of the domain protocol to LDAP cannot ' +
        'be undone. Do you want to continue?',
    REGISTER_DOMAIN: 'Register Active Directory',
    AUX_ACCOUNT_NUMBER_LABEL: 'Auxiliary Account #{0}',
    SERVICE_ACCOUNT_DUPLICATE_AS_PRIMARY_ERROR_MESSAGE: 'Service Account {0} Cannot be same ' +
        'as Primary Account.',
    DUPLICATE_SERVICE_ACCOUNT_ERROR_MESSAGE: 'Duplicate Service Account {0} is not allowed, ' +
        'please enter unique service account.',
    POD_VERSION_INFO: 'This pod is using version "{0}".',
    RELEASE_NOTES_INFO: 'Release Notes',
    DUPLICATE_SYSPREP_ACCOUNT_ERROR_MESSAGE: 'Duplicate Domain Join Account is not allowed, ' +
        'please enter a unique username.',
    REGISTER: 'Register',
    COLLAPSE_ALL: 'Collapse All',
    EXPAND_ALL: 'Expand All',
    ACTIVE_DIRECTORIES: 'Active Directories',
    DOMAIN_BIND: 'Domain Bind',
    DOMAIN_JOIN: 'Domain Join',
    ACCESS_GROUPS: 'Access Groups',
    NETBIOS_NAME: 'NetBIOS Name:',
    DNS_DOMAIN_NAME: 'DNS Domain Name:',
    PORT: 'Port:',
    LDAP_OVER_TLS_COLON: 'LDAP over TLS:',
    LDAP_OVER_TLS_INFO: 'This enables scenarios where an AD domain cert is required for ' +
        'successfully registering the domain. Leave this option disabled unless you know it is ' +
        'required.',
    DIRECTORY_SERVER_NAME: 'Directory Server Name:',
    DOMAIN_CONTROLLER_IPS: 'Domain Controller IP:',
    DOMAIN_CONTROLLER_HELP_TEXT: 'Specify which Domain Controller IPs to use to ' +
        'communicate with this Active Directory. Multiple IPs can be provided as a comma ' +
        'separated list. If left blank, any available Domain Controller will be used.',
    DOMAIN_JOIN_INFO_NOT_FOUND: 'Domain join information is missing for the selected domain. ' +
        'Go to Settings -> Active Directory to provide this information.',
    CONTEXT: 'Context:',
    DOMAIN_BIND_ACCOUNT_DN: 'Domain Bind Account DN',
    DOMAIN_JOIN_USER: 'Domain Join User',
    PRIMARY_DNS_SERVER_IP: 'Primary DNS Server IP:',
    SECONDARY_DNS_SERVER_IP: 'Secondary DNS Server IP:',
    N_ITEM: '{0} Item',
    N_ITEMS: '{0} Items',
    N_IMAGE: '{0} Image',
    N_IMAGES: '{0} Images',
    IMAGE_REMAINING_CAPACITY_NUMBER: '{0}/{1}',
    IMAGE_REMAINING_CAPACITY: '(Remaining Capacity)',
    N_ASSIGNMENT: '{0} Assignment',
    N_ASSIGNMENTS: '{0} Assignments',
    EDIT_ASSIGNMENT_IMAGE_OFFLINE: 'The original Image for this Assignment is no longer ' +
        'available. Please select a new Image.',
    EDIT_ASSIGNMENT_SUCCEEDED: 'Assignment edited successfully.',
    DESKTOP_ENTITLEMENT_TYPE: 'Desktop Type',
    DEFAULT_PROTOCOL: 'Default Protocol',
    AUTOMATED_DESKTOP: 'Automated Desktop',
    AUTOMATED: 'Automated',
    GB: 'GB',
    GIB: 'GiB',
    UNIT_IN_GHz: '{0} GHz',
    UNIT_IN_GB: '{0} GB',
    UNIT_IN_GIB: '{0} GiB',
    VIEW_BY_COLON: 'View by:',
    IMAGE_VERSION: 'Image Version',
    TASK_ID: 'Task ID',
    TASK_TYPE: 'Task Type',
    EVENT_ID: 'Event ID',
    EVENT_TYPE: 'Event Type',
    SESSION_ID: 'Session ID',
    USER_ID: 'User ID',
    PATTERN_ID: 'Pattern ID',
    USER_TYPE: 'User Type',
    ACTIVITY_TYPE: 'Activity Type',
    PLATFORM: 'Platform',
    ACTIVITY_HELP_TEXT: 'This screen displays all admin/user activities',
    ACTED_BY: 'Type',
    TASK_SUCCESSFUL: 'Successful',
    TASK_PARTIAL_SUCCESSFUL: 'Partially Successful',
    TASK_FAILED: 'Failed',
    TASK_QUEUED: 'Queued',
    TASK_RUNNING: 'In progress',
    TASK_CANCELLED: 'Cancelled',
    TASK_CANCELLING: 'Cancelling',
    TASK_OTHER: 'Other',
    UNKNOWN_TASK: 'Unknown task',
    BACKUPVM_TASK: 'Backing up image {0}',
    CONVERTGOLDPATTERN_TASK: 'Converting desktop {0} to an image',
    UPDATE_MACHINE_ID: 'Updating machine ID of the VM on assignment {1}',
    COPYFROMGOLDPATTERN_TASK: 'Copying image {0} to a desktop',
    CONVERTTODESKTOP_TASK: 'Converting image {0} to a desktop',
    RESYNCPOOL_TASK: 'Updating image on desktops in assignment {0}',
    DELETEPOOL_TASK: 'Deleting assignment {0}',
    DELETEVM_TASK: 'Deleting desktop {0}',
    DYNAMICPOOLREFRESH_TASK: 'Refreshing assignment {0} with image {1}',
    EXPANDPOOL_TASK: 'Expanding assignment {0}',
    EXPANDSESSIONPOOL_TASK: 'Expanding session assignment {0}',
    POOLPOWEROP_TASK: 'Performing power operation on assignment {0}',
    PURGERECYCLEPOOL_TASK: 'Purging recycle desktops',
    REPLENISHPOOL_TASK: 'Replenishing assignment {0}',
    ROLLBACKVM_TASK: 'Rolling back {0} to previous version',
    SHRINKPOOL_TASK: 'Shrinking assignment {0}',
    SHRINKSESSIONPOOL_TASK: 'Shrinking session assignment {0}',
    POWERON_TASK: 'Powering on desktop {0} on assignment {1}',
    POWERON_TASK_INTERNAL_POOL: 'Powering on desktop on {0}',
    POWEROFF_TASK: 'Powering off desktop {0} on assignment {1}',
    POWEROFF_TASK_INTERNAL_POOL: 'Powering off desktop on {0}',
    REBOOT_TASK: 'Restarting desktop {0} on assignment {1}',
    REBOOT_TASK_INTERNAL_POOL: 'Restarting desktop on {0}',
    SUSPEND_TASK: 'Suspending desktop {0} on assignment {1}',
    SUSPEND_TASK_INTERNAL_POOL: 'Suspending desktop on {0}',
    SHUTDOWN_TASK: 'Shutting down desktop {0} on assignment {1}',
    SHUTDOWN_TASK_INTERNAL_POOL: 'Shutting down desktop on {0}',
    DELETE_DESKTOP_TASK: 'Deleting desktop {0} on assignment {1}',
    DELETE_DESKTOP_TASK_INTERNAL_POOL: 'Deleting desktop {0} from {1}',
    DELETE_ELASTIC_POOL_TASK: 'Starting delete for VM {0}',
    DELETE_ELASTIC_FARM_TASK: 'Starting delete for VM {0} on farm {1}',
    RESET_TASK: 'Resetting desktop {0} on assignment {1}',
    RESET_TASK_INTERNAL_POOL: 'Resetting desktop on {0}',
    REBUILDVMS_TASK: 'Rebuilding desktop on assignment {1}',
    STANDBY_TASK: 'Putting desktop {0} on standby on assignment {1}',
    SYNCHGOLDPATTERN_TASK: 'Sync in progress for image {0}',
    UPDATE_AGENT_GP_TASK: 'Updating Agent on image {0}',
    UPDATE_AGENT_GP_TASK_DETAIL: 'Updating {0} {1} on image {2}',
    UPDATE_AGENT_POOL_TASK: 'Updating Agent on pool',
    UPDATE_AGENT_POOL_TASK_DETAIL: 'Updating {0} {1} on pool {2}',
    AGENTUPDATEDOWNLOAD_TASK: 'Agent Update Download',
    ERROR_AGENT_UPDATING: 'Agent update in progress. Desktop is unavailable until update completes.',
    INFO_AGENT_ROLLBACK_IN_PROGRESS: 'Agent rollback in progress',
    INFO_ROLLBACK_AGENT_INITIATED_FAILED: 'Rollback on desktop failed.',
    INFO_SOFTWARE_UPDATE_FAILED_TRY_FROM_LISTING: 'Agent updated failed. ' +
        'Try updating the agent again from the Assignments page.',
    INFO_SOFTWARE_UPDATE_FAILED_AND_DESKTOP_ACCESSIBLE: 'Agent update failed and desktop is accessible. ' +
      'Roll back the agent before {0} or try updating the agent again from the Assignments page.',
    INFO_SOFTWARE_UPDATE_FAILED_DESKTOP_NOT_ACCESSIBLE: 'Agent update failed and disabled the existing agent. Desktop is inaccessible. ' +
      'Roll back the agent before {0} or try updating the agent again from the Assignments page.',
    MAKE_DISK_NON_PERSISTENT_TASK: 'Taking snapshot for desktop {0} on floating ' +
        'assignment {1}',
    MIGRATE_PATTERN_TASK: 'Migrating VM {0}',
    MODIFY_HOTPLUG_TASK: 'Modifying hotplug state on assignment {0}',
    UPDATE_VM_METADATA_TASK: 'Updating metadata for desktop {0} on assignment {1}',
    IMPORT_VM_FROM_FILESHARE_TASK: 'Importing VM from file share initiated by {0}',
    RESET_DESKTOP_SERVERS_CONFIRMATION: 'Are you sure you want to reset selected {0}?',
    RESET_SERVER_AFFECTS_CONNECTED_USERS: 'Resetting a {0} could also affect other users ' +
        'who are currently connected to the {1}.',
    SUSPEND_DESKTOP_SERVERS_CONFIRMATION: 'Are you sure you want to suspend selected {0}?',
    SUSPEND_SERVER_AFFECTS_CONNECTED_USERS: 'Suspending a {0} could also affect other users ' +
        'who are currently connected to the {1}.',
    REBOOT_DESKTOP_SERVERS_CONFIRMATION: 'Are you sure you want to restart selected {0}?',
    MACHINES_RESTART_MACHINES_CONFIRMATION: 'Are you sure you want to restart this Desktop?',
    MACHINES_RESTART_MACHINES_DIALOG: 'This command will gracefully restart the Desktop. ' +
        'The guest operating system will go through a normal restart process.',
    LONG_WAITING_WARNING: 'This action may take a few minutes to complete.',
    MACHINES_RESET_VM_CONFIRMATION: 'Are you sure you want to reset this virtual machine?',
    MACHINES_RESET_VM_CONTENT: 'This command will reset the virtual machine immediately. ' +
        'The guest operating system will not go through a normal shutdown process and any ' +
        'unsaved data will be lost.',
    REBOOT_SERVER_AFFECTS_CONNECTED_USERS: 'Restarting a {0} could also affect other users ' +
        'who are currently connected to the {1}.',
    POWER_OFF_DESKTOP_SERVERS_CONFIRMATION: 'Are you sure you want to power off selected {0}?',
    POWER_OFF_SERVER_AFFECTS_CONNECTED_USERS: 'Powering off a {0} could also affect other ' +
        'users who are currently connected to the {1}.',
    SHUTDOWN_DESKTOP_SERVERS_CONFIRMATION: 'Are you sure you want to shut down selected {0}?',
    SHUTDOWN_SERVER_AFFECTS_CONNECTED_USERS: 'Shutting down a {0} could also affect other ' +
        'users who are currently connected to the {1}.',
    DISCONNECT_USER_SESSIONS: 'Are you sure you want to disconnect the selected sessions?',
    LOG_OFF_USER_SESSIONS: 'Are you sure you want to logoff the selected sessions?',
    ACTIONS: 'Actions',
    HR: 'hr',
    MIN: 'min',
    SEC: 'sec',
    HR_S: 'hr(s)',
    MIN_S: 'min(s)',
    DESKTOP_OR_APP: 'Desktop/Application',
    PATTERN_FAILED_CREATE: 'Error: Failed to create Image',
    PATTERN_POWERED_ON: 'Error: Re-Publish required',
    PATTERN_REQUIRES_RESEAL: 'Re-Publish required',
    PATTERN_IN_ERROR: 'Error',
    AGENT_OUT_OF_DATE: 'Error: Agent out of date',
    AGENT_OUT_OF_DATE_MIN_VER: 'Error: Agent out of date, (Minimum version required is {0}).',
    VM_DETAILS_LOADING: 'Disabled while desktop\'s details are loading',
    ERROR_FETCHING_RESULTS: 'There was an error fetching results. Please refresh the table.',
    DASHBOARD: 'Dashboard',
    DASHBOARD_HYDRA: 'Dashboard',
    DASHBOARD_CLARITY: 'Dashboard',
    CONSUMPTION: 'Consumption',
    NOTIFICATIONS: 'Notifications',
    NOTIFICATION: 'Notification',
    NOTIFICATION_STATUS_TEMPLATE: '{0}: {1}',
    DISMISS: 'Dismiss',
    DISMISSED: 'Dismissed',
    INACTIVE: 'Inactive',
    AGENT_STATUS: 'Agent Status:',
    IN_TRANSITION: 'In Transition',
    DEL_USR_EVENT_ALLOCATE: 'Allocated {0} to desktop/server of assignment/farm ' +
        'which is now deleted',
    DEL_USR_EVENT_ALLOCATE_FAILURE: 'Failed to allocate {0} to desktop/server of ' +
        'assignment/farm which is now deleted',
    DEL_USR_EVENT_LOG_ON: '{0} logged on to desktop/server of assignment/farm ' +
        'which is now deleted',
    DEL_USR_EVENT_LOG_OFF: '{0} logged off from desktop/server of assignment/farm ' +
        'which is now deleted',
    DEL_USR_EVENT_DISCONNECT: '{0} disconnected from desktop/server of assignment/farm ' +
        'which is now deleted',
    DEL_USR_EVENT_RECONNECT: '{0} reconnected to desktop/server of assignment/farm ' +
        'which is now deleted',
    DEL_USR_EVENT_SESSION_TIMEOUT: '{0}\'s session on desktop/server' +
        '(which is now deleted) timed out',
    DEL_USR_EVENT_HELPDESK_GET_WS1_ASSIST_AGENT_ID: 'Launch Workspace ONE Assist ' +
        'for {0}\'s session on desktop/server of assignment/farm which is now deleted',
    DEL_USR_EVENT_HELPDESK_GET_WS1_ASSIST_AGENT_ID_FAILED: 'Failed to launch Workspace ONE Assist ' +
        'for {0}\'s session on desktop/server of assignment/farm ' +
        'which is now deleted',
    DEL_USR_EVENT_HELPDESK_KILLPROCESS: 'Kill process[pid: {1}, name: {2}] for {0}\'s ' +
        'session on desktop/server of assignment/farm which is now deleted',
    DEL_USR_EVENT_HELPDESK_KILLPROCESS_FAILED: 'Failed to kill process[pid: {1}, ' +
        'name: {2}] for {0}\'s session on desktop/server of assignment/farm which is now deleted',
    DEL_USR_EVENT_HELPDESK_KILL_LAUNCHED_APPLICATION: 'Kill application[name: {1}] for ' +
        '{0}\'s session on desktop/server of assignment/farm which is now deleted',
    DEL_USR_EVENT_HELPDESK_KILL_LAUNCHED_APPLICATION_FAILED: 'Failed to kill application' +
        '[name: {1}] for {0}\'s session on desktop/server of assignment/farm which is now deleted',
    DEL_USR_EVENT_HELPDESK_SENDMESSAGE: 'Send message to {0}\'s session on desktop/server ' +
        'of assignment/farm which is now deleted, message: [{1}]',
    DEL_USR_EVENT_HELPDESK_SENDMESSAGE_FAILED: 'Failed to send message to {0}\'s session ' +
        'on desktop/server of assignment/farm which is now deleted, message: [{1}]',
    DEL_USR_EVENT_HELPDESK_REQUEST_REMOTE_ASSIST: 'Request Remote Assistance ' +
        'Ticket for {0}\'s session on desktop/server of assignment/farm which is now deleted',
    DEL_USR_EVENT_HELPDESK_REQUEST_REMOTE_ASSIST_FAILED: 'Failed to request Remote ' +
        'Assistance Ticket for {0}\'s session on desktop/server of assignment/farm ' +
        'which is now deleted',
    DEL_USR_EVENT_HELPDESK_DISCONNECT_INITIATED: 'Disconnect {0}\'s session on ' +
        'desktop/server of assignment/farm which is now deleted',
    DEL_USR_EVENT_HELPDESK_LOGOFF_INITIATED: 'Logoff {0}\'s session on desktop/server ' +
        'of assignment/farm which is now deleted',
    USR_EVENT_HELPDESK_KILL_LAUNCHED_APPLICATION: 'Kill application[name: {3}] for {0}\'s ' +
        'session on desktop {1} of assignment {2}',
    USR_EVENT_HELPDESK_KILL_LAUNCHED_APPLICATION_FAILED: 'Failed to kill application' +
        '[name: {3}] for {0}\'s session on desktop {1} of assignment {2}',
    USR_EVENT_ALLOCATE: 'Allocated {0} to desktop {1} of assignment {2}',
    USR_EVENT_ALLOCATE_FAILURE: 'Failed to allocate {0} to desktop {1} of assignment {2}',
    USR_EVENT_LOG_ON: '{0} logged on to desktop {1} of assignment {2}',
    USR_EVENT_LOG_OFF: '{0} logged off from desktop {1} of assignment {2}',
    USR_EVENT_DISCONNECT: '{0} disconnected from desktop {1} of assignment {2}',
    USR_EVENT_RECONNECT: '{0} reconnected to desktop {1} of assignment {2}',
    USR_EVENT_SESSION_TIMEOUT: '{0}\'s session on desktop {1} timed out.',
    USR_EVENT_HELPDESK_GET_WS1_ASSIST_AGENT_ID: 'Launch Workspace ONE Assist for {0}\'s ' +
        'session on desktop {1} of assignment {2}',
    USR_EVENT_HELPDESK_GET_WS1_ASSIST_AGENT_ID_FAILED: 'Failed to launch Workspace ONE Assist ' +
        'for {0}\'s session on desktop {1} of assignment {2}',
    USR_EVENT_HELPDESK_KILLPROCESS: 'Kill process[pid: {3}, name: {4}] for {0}\'s ' +
        'session on desktop {1} of assignment {2}',
    USR_EVENT_HELPDESK_KILLPROCESS_FAILED: 'Failed to kill process[pid: {3}, name: {4}] ' +
        'for {0}\'s session on desktop {1} of assignment {2}',
    USR_EVENT_HELPDESK_SENDMESSAGE: 'Send message to {0}\'s session on desktop {1} of ' +
        'assignment {2}, message: [{3}]',
    USR_EVENT_HELPDESK_SENDMESSAGE_FAILED: 'Failed to send message to {0}\'s session on ' +
        'desktop {1} of assignment {2}, message: [{3}]',
    USR_EVENT_HELPDESK_REQUEST_REMOTE_ASSIST: 'Request Remote Assistance Ticket for {0}\'s ' +
        'session on desktop {1} of assignment {2}',
    USR_EVENT_HELPDESK_REQUEST_REMOTE_ASSIST_FAILED: 'Failed to request Remote Assistance ' +
        'Ticket for {0}\'s session on desktop {1} of assignment {2}',
    USR_EVENT_HELPDESK_DISCONNECT_INITIATED: 'Disconnect {0}\'s session on desktop {1} ' +
        'of assignment {2}',
    USR_EVENT_HELPDESK_LOGOFF_INITIATED:
        'Logoff {0}\'s session on desktop {1} of assignment {2}',
    USR_EVENT_UNKNOWN: 'Unknown user event.',
    USR_EVENT_BROKER_PARAM_ERROR:
        'Parameters required for assignment allocation are incorrect or missing.',
    USR_EVENT_CONNECTION_TYPE_MISMATCH: 'This user is already connected to a full desktop ' +
        'or a remote application. The same user cannot be allocated to both a desktop and an ' +
        'application simultaneously.',
    USR_EVENT_FAILED_TO_LOCK_VM: 'Unable to lock VM.',
    USR_EVENT_DESKTOP_UNAVAILABLE: 'This Desktop is unavailable',
    USR_EVENT_DESKTOP_NOT_RUNNING: 'Desktop is not powered on.',
    USR_EVENT_GUEST_OS_NOT_RUNNING: 'Guest OS is not running or not fully initiated.',
    USR_EVENT_VM_TOOLS_NOT_INSTALLED: 'VM tools are not installed on the desktop.',
    USR_EVENT_VM_TOOLS_NOT_RUNNING: 'VM tools are not running on the desktop.',
    USR_EVENT_IP_ADDRESS_UNKNOWN: 'IP address of the desktop is not known or not reported ' +
        'by the hypervisor.',
    USR_EVENT_IP_ADDRESS_UNREACHABLE: 'Unable to retrieve IP address for the desktop.',
    USR_EVENT_VM_STATE_ERROR: 'Desktop is not in the available state.',
    USR_EVENT_AGENT_STATE_ERROR: 'Horizon Agent on the desktop is not active.',
    USR_EVENT_INCOMPATIBLE_PROTOCOL: 'User attempted to reconnect with an incompatible ' +
        'protocol.',
    USR_EVENT_PCOIP_AGENT_ERROR: 'Unable to connect over PCoIP. PCoIP agent is not active.',
    USR_EVENT_RAM_SERVICE_FAILURE: 'Unable to connect through remote access manager.',
    USR_EVENT_ATTACH_DETACH_VOLUME_FAILURE: 'Attach/Detach - {0} <strong>{1}</strong> ' +
        'on {2}, located at datacenter: {3}, vCenter: {4} and pod: {5}, for appstack {6} of ' +
        'path: {7} and datastore: {8}.',
    USR_EVENT_HEADROOM_ERROR: 'The Desktop is being prepared',
    ATTACH_VOLUME_FAILURE: 'attach volume failure',
    DETACH_VOLUME_FAILURE: 'detach volume failure',
    CREATE_IMAGE_CONFIRM_POWER_ON: 'The selected desktop is currently powered off. ' +
        'It must be powered on to be converted to an image. Click Power On to power it on ' +
        'now, or click Cancel to select a different desktop.',
    IMPORTED_POOL_CREATE_IMAGE_CONFIRM_POWER_ON: 'The selected desktop should be powered ' +
        'on and running to be converted to an Image.',
    CREATE_IMAGE_VM_POWER_ON_ERROR: 'Unable to power on the desktop. Please check the ' +
        'desktop and try again, or select a different desktop.',
    CREATE_IMAGE_VM_IP_ADDRESS_ERROR: 'Unable to retrieve IP address for selected desktop. ' +
        'Please check the desktop and try again, or select a different desktop.',
    CREATE_IMAGE_VM_AGENT_STATE_ERROR: 'Unable to find active Horizon Agent on selected ' +
        'desktop. Please check the desktop and try again, or select a different desktop.',
    CREATE_IMAGE_VM_POWER_STATE_ERROR: 'Selected desktop is not powered on. Please check ' +
        'the desktop and try again, or select a different desktop.',
    CREATE_IMAGE_SUCCEEDED: 'Image creation in progress',
    CREATE_IMAGE_DT_NGVC_FOR_RDSH_UNSUPPORTED_ERROR: 'Cannot publish image because the system administrator has disabled instant clone images for RDSH.',
    CREATE_IMAGE_ERROR: 'Unable to create new image. Please try again.',
    CREATE_IMAGE_RESERVE_ERROR_INSUFFICIENT_TEMPLATE_QUOTA: 'Unable to create new Image. ' +
        'Maximum number of Images has been reached.',
    CREATE_IMAGE_ERROR_INVALID_IMAGE_OPERATING_SYSTEM: 'Windows 7 and Windows 10 Enterprise multi-session ' +
    'operating systems are not authorized for your current Horizon Cloud control plane instance. ' +
    'Please select a different operating system. ' +
    'Refer to <a href="http://www.vmware.com/go/HorizonCP" target="_blank" rel="noopener">' +
    'http://www.vmware.com/go/HorizonCP</a> for more information.',
    CREATE_IMAGE_ERROR_INVALID_POWER_STATE: 'Unable to create new image. Desktop is in ' +
        'invalid power state. Please check the desktop and try again.',
    CREATE_IMAGE_RESERVE_ERROR_ALREADY_IN_POOL: 'Unable to create new image. Desktop is ' +
        'already being converted to an Image.',
    CREATE_IMAGE_RESERVE_ERROR_QUOTA_SET_ZERO: 'Unable to Create Image. Template Quota Set ' +
        'to Zero. Please contact your Service Provider.',
    CREATE_IMAGE_ERROR_MISSING_COMPUTE: 'Unable to create new image. Desktop is not ' +
        'associated with a Compute Resource. Please check the desktop and try again.',
    CREATE_IMAGE_ERROR_GRAPHICS_SETTING_UNSUPPORTED: 'Unable to create new image. ' +
        'Selected Desktop supports 3D Graphics, however this feature is not enabled for ' +
        'this tenant. Please check with your service provider.',
    CREATE_IMAGE_ERROR_INVALID_TOOLS_STATE: 'Unable to create new image because VMware ' +
        'Tools may be out of date or unreachable. Please make sure VMware Tools is ' +
        'up-to-date and try again.',
    CREATE_IMAGE_ERROR_AGENT_VERSION: 'Unable to create new image. Desktop Agent Version ' +
        'is not known or older than supported version. Please check the agent and try again.',
    CREATE_IMAGE_AGENT_OUT_OF_DATE_MIN_VER: 'Unable to create new image. Desktop Agent ' +
        'Version is older than supported version. Minimum Agent Version required is {0}. ' +
        'Please check the desktop and try again.',
    CREATE_IMAGE_ERROR_AGENT_NOT_ACTIVE: 'Unable to create new image. Desktop Agent State ' +
        'is not currently communicating with the tenant. Please check the desktop and try again.',
    CREATE_IMAGE_UNSUPPORTED_TYPE_ERROR: 'Creating new image failed. Invalid type of ' +
        'desktop. Please check the desktop and try again.',
    CREATE_IMAGE_UNSUPPORTED_HYPERVISOR_TYPE: 'Preparing new image failed. This operation ' +
        'is not supported for the selected pod. Please bootstrap the VM manually and retry.',
    CREATE_IMAGE_PATTERN_LOOKUP_ERROR: 'Preparing new image failed. The requested VM could ' +
        'not be found. Please bootstrap the VM manually and retry.',
    CREATE_IMAGE_INVALID_PATTERN_TYPE: 'Preparing new image failed. This operation is not ' +
        'supported for the requested VM. Please bootstrap the VM manually and retry.',
    CREATE_IMAGE_UNKNOWN_INTERNAL_ERROR: 'Preparing new image failed due to internal server ' +
        'error. Please try again or bootstrap the VM manually and retry.',
    PUBLISH_IMAGE_ERROR_INVALID_IMAGE_OPERATING_SYSTEM: 'Windows 7 and Windows 10 Enterprise multi-session ' +
    'operating systems are not authorized for your current Horizon Cloud control plane instance. ' +
    'Please select a different operating system. ' +
    'Refer to <a href="http://www.vmware.com/go/HorizonCP" target="_blank" rel="noopener">' +
    'http://www.vmware.com/go/HorizonCP</a> for more information.',
    PUBLISH_IMAGE_CONFIRM_POWER_ON: 'The selected desktop is currently powered off. ' +
        'It must be powered on to publish the image. Click Power On to power it on and publish ' +
        'the image, or click Cancel to go back.',
    PUBLISH_IMAGE_VM_POWER_ON_ERROR: 'Unable to publish image because desktop could not be ' +
        'powered on. Please check the desktop and try again.',
    PUBLISH_IMAGE_VM_IP_ADDRESS_ERROR: 'Unable to publish image because IP address could ' +
        'not be retrieved for selected desktop. Please check the desktop and try again.',
    PUBLISH_IMAGE_VM_POWER_STATE_ERROR: 'Unable to publish image because selected desktop ' +
        'is not powered on. Please check the desktop and try again.',
    PUBLISH_IMAGE_VM_AGENT_STATE_ERROR: 'Unable to publish image because active Horizon Agent ' +
        'could not be found on selected desktop. Please check the desktop and try again.',
    PUBLISH_IMAGE_VALIDATE_ERROR_INVALID_POWER_STATE: 'Image can not be published. Desktop ' +
        'is in invalid Power State. Please check the desktop and try again.',
    PUBLISH_IMAGE_VALIDATE_ERROR_MISSING_COMPUTE: 'Image can not be published. Desktop is ' +
        'not associated with a Compute Resource. Please check the desktop and try again.',
    PUBLISH_IMAGE_VALIDATE_ERROR_GRAPHICS_SETTING_UNSUPPORTED: 'Image can not be published. ' +
        'Desktop has 3D Graphics enabled but feature is turned off. ' +
        'Please check the desktop and try again.',
    PUBLISH_IMAGE_VALIDATE_ERROR_INVALID_TOOLS_STATE: 'Unable to publish image because ' +
        'VMware Tools may be out of date or unreachable. ' +
        'Please make sure VMware Tools is up-to-date and try again.',
    PUBLISH_IMAGE_VALIDATE_ERROR_AGENT_VERSION: 'Image can not be published. Desktop Agent ' +
        'Version is not known or older than supported version. ' +
        'Please check the desktop and try again.',
    PUBLISH_IMAGE_VALIDATE_AGENT_OUT_OF_DATE_MIN_VER: 'Image can not be published. ' +
        'Desktop Agent Version is older than supported version. Minimum Agent Version required ' +
        'is {0}. Please check the desktop and try again.',
    PUBLISH_IMAGE_VALIDATE_ERROR_AGENT_NOT_ACTIVE: 'Image can not be published. ' +
        'Desktop Agent State is not active or heartbeat has not been heard for an extended ' +
        'period of time. Please check the desktop and try again.',
    PUBLISH_IMAGE_VALIDATE_ERROR_UNSUPPORTED_TYPE: 'Image can not be published. ' +
        'Invalid type of desktop. Please check the desktop and try again.',
    PUBLISH_IMAGE_SUCCEEDED: 'Image published successfully.',
    PUBLISH_IMAGE_ERROR: 'Publishing the image failed due to internal server error. ' +
        'Please try again.',
    PUBLISH_IMAGE_ERROR_INVALID_POWER_STATE: 'Unable to publish image. Desktop is in ' +
        'invalid Power State. Please check the desktop and try again.',
    PUBLISH_IMAGE_ERROR_MISSING_COMPUTE: 'Unable to publish image. Desktop is not ' +
        'associated with a Compute Resource. Please check the desktop and try again.',
    PUBLISH_IMAGE_ERROR_GRAPHICS_SETTING_UNSUPPORTED: 'Unable to publish image. ' +
        'Selected Desktop supports 3D Graphics, however this feature is not enabled for this ' +
        'tenant. Please check with your service provider.',
    PUBLISH_IMAGE_ERROR_INVALID_TOOLS_STATE: 'Unable to publish image because VMware Tools ' +
        'may be out of date or unreachable. Please make sure VMware Tools is up-to-date and ' +
        'try again.',
    PUBLISH_IMAGE_ERROR_AGENT_VERSION: 'Publishing the image failed. Desktop Agent Version ' +
        'is not known or older than supported version. Please check the desktop and try again.',
    PUBLISH_IMAGE_AGENT_OUT_OF_DATE_MIN_VER: 'Publishing the image failed. Desktop Agent ' +
        'Version is older than supported version. Minimum Agent Version required is {0}. ' +
        'Please check the desktop and try again.',
    PUBLISH_IMAGE_ERROR_AGENT_NOT_ACTIVE: 'Unable to publish image. Desktop Agent State ' +
        'is not currently communicating with the tenant. Please check the desktop and try again.',
    PUBLISH_IMAGE_ERROR_UNSUPPORTED_TYPE: 'Publishing the image failed. Invalid type of ' +
        'desktop. Please check the desktop and try again.',
    IMAGE_NAME_ERROR_NAME_MAX_LENGTH:
        'The image name can not be more than {0} characters long.',
    EDIT_IMAGE_ERROR: 'Unable to update image due to internal server error. Please try again.',
    EDIT_IMAGE_ONLY_RENAME_PASS:
        'Unable to update description due to internal server error. Please try again.',
    EDIT_IMAGE_ONLY_UPDATE_PASS:
        'Unable to update name due to internal server error. Please try again.',
    EDIT_IMAGE_SUCCEEDED: 'Image updated successfully.',
    TAKE_OFFLINE: 'Take Offline',
    BRING_ONLINE: 'Bring Online',
    WARNING_TAKE_OFFLINE: 'Are you sure you want to take selected Image Offline?',
    CONFIRM_TAKE_OFFLINE: 'Once Offline, this Image cannot be used for making any new ' +
        'Assignments or provision new desktops/servers for existing Assignments. The Image ' +
        'will need to be published again after this action to make it available for Assignments.',
    CONFIRM_TAKE_OFFLINE_RDSH: 'Once Offline, this Image cannot be used for making any ' +
        'new Farms or provision new servers for existing Farms. The Image will need to be ' +
        'published again after this action to make it available for Farms.',
    TAKE_OFFLINE_GOLD_PATTERN_ERROR:
        'Unable to take image offline due to internal server error. Please try again.',
    TAKE_OFFLINE_GOLD_PATTERN_SUCCEEDED: 'Image successfully taken offline.',
    DESKTOP_ROLLBACK_CONFIRMATION:
        'Are you sure you want to roll back desktop(s) to existing agent?',
    DESKTOP_ROLLBACK_MORE_INFO: 'This will roll back desktop(s) to existing agent.',
    DELETE_GOLD_PATTERN_CONFIRMATION:
        'Are you sure you want to delete <strong>{0}</strong> image?',
    DELETE_GOLD_PATTERN_MORE_INFO: 'This will permanently delete <strong>{0}</strong> Image.',
    UPGRADE_POD_FAILURE_INFO: 'Unable to update the Horizon Cloud on Microsoft Azure pod {0} to version {1}'+
        ' because the following errors have occurred:',
    POD_UPGRADE_GENERAL_INFO: 'These errors cannot be resolved by VMware and require you to take action. '+
        'Please resolve these errors at your earliest convenience. After the errors have been resolved, contact '+
        '<a href="https://kb.vmware.com/s/article/2144012" target="_blank" rel="noopener">VMware Support</a> to continue the pod upgrade.',
    UPGRADE_POD_INFO: 'Resolve Pod Update Errors',
    UPGRADE_ERROR_CLEAR_INFO: 'Successfully resolved selected errors. ',
    UPGRADE_ERROR_FAILED_INFO: 'Could not resolve selected errors. Please try again.',
    DELETE_GOLD_PATTERN_FAILED:
        'Unable to delete this Image due to internal server error. Please try again.',
    DELETE_GOLD_PATTERN_FAILED_IN_USE: 'Unable to delete this Image.  Image cannot be ' +
        'deleted when in use by any assignment. Please ensure Image is not in use and try again.',
    CANNOT_DELETE_GOLD_PATTERN: 'Unable to delete this Image.',
    CANNOT_DELETE_GOLD_PATTERN_IN_USE: 'Image cannot be deleted when in use by any ' +
        'assignment. Please ensure Image is not in use and try again.',
    CANNOT_DELETE_GOLD_PATTERN_IN_USE_RDSH: 'Image cannot be deleted when in use by ' +
        'RDSH Farm. Please ensure Image is not in use and try again.',
    DELETE_GOLD_PATTERN_INITIATED: 'Image deletion successfully initiated.',
    DELETE_GOLD_PATTERN_SUCCEEDED: 'Image deleted successfully.',
    CREATE_GOLD_PATTERN_DESC: 'Select a virtual machine VM to convert to an image. ' +
        'The selected VM must be powered on. ' +
        'You can use the virtual machine\'s IP address to ' +
        'connect and make changes before converting the VM to a published ' +
        'image. Click Publish to complete the process.',
    PUBLISH_GOLD_PATTERN_DESC: 'If you wish to make changes to the Desktop before ' +
        'converting it, use the IP address provided below.  The selected desktop will be ' +
        'powered on.  Once the system can retrieve a valid IP address and Active Agent ' +
        'status, the Desktop can be published to an Image. This may take several minutes.',
    IMAGE_CREATION_FAILED: 'Image creation was unsuccessful. Please try again.',
    IMAGE_UPDATES: 'Image Updates',
    VMS: 'VMs',
    VM: 'VM',
    NEW_DESKTOP: 'Assign Desktops',
    NEW_AZURE_POD_DISABLED_UNIVERSAL_BROKER_NOT_SUPPORTED:`Cannot add a new Horizon pod on Microsoft Azure because the current version
    of the pod is not supported by Universal Broker.`,
    ASSIGN_WRITABLE_VOLUMES: 'Assign Writable Volumes',
    PUBLISHED: 'Published',
    UNDER_CONSTRUCTION: 'The settings are under construction.',
    VISIT_SETTINGS_LINK: 'Please visit the following link to access the settings.',
    EDIT_SETTINGS_IN_ENTERPRISE_CENTER: 'http://www.astro.settings.com',
    ASSIGNMENT_PATTERN_INVALID: 'Assignment name must contain only letters [a-Z], ' +
        'dashes [-], and numbers. It cannot start with non-alphabetic characters.',
    VM_PATTERN_INVALID: 'VM name must contain only letters [a-Z], dashes [-], and ' +
        'numbers. It cannot start with non-alphabetic characters.',
    VM_NAME_DUPLICATE: 'VM prefix with the same name already exist.',
    IMPORTED_VM_NAME_DUPLICATE: 'Imported VM with the same name already exists.',
    IMAGE_NAME_DUPLICATE: 'Image with the same name already exists.',
    VM_NAME_MAXLENGTH_ERROR: 'VM name should not exceed {0} characters.',
    FARM_NAME_DUPLICATE: 'Farm with the same name already exist',
    CUSTOMER_ID_PATTERN_INVALID:
        'Customer ID must contain only letters [a-Z], dashes [-], and numbers.',
    VALID_SESSION_TIMEOUT_REQUIRED: 'A valid integer between 1 and 99999 is required.',
    VALID_JOB_TIMEOUT_REQUIRED: 'A valid integer between {0} and {1} is required.',
    LOADING: 'Loading',
    LOADING_ELLIPSIS: 'Loading...',
    CHANGE: 'Change',
    INVALID_VM: 'Desktop is not in a valid state.',
    FLOATING_VDI: 'Floating Desktop',
    DEDICATED_VDI: 'Dedicated Desktop',
    SESSION_VDI: 'Session Desktop',
    WARNING: 'Warning',
    OFFLINE: 'Offline',
    ONLINE: 'Online',
    PENDING: 'Pending',
    ERROR: 'Error',
    DEPLOYING: 'Deploying',
    UNMANAGED: 'Unmanaged',
    INFO: 'Info',
    PENDING_CREATE_VALIDATION: 'Pending',
    ERROR_CREATE_VALIDATION: 'Failed to validate create',
    PENDING_CREATE: 'Pending',
    ERROR_CREATE: 'Failed to create',
    PENDING_UPDATE_VALIDATION: 'Pending',
    ERROR_UPDATE_VALIDATION: 'Failed to validate edit',
    PENDING_UPDATE: 'Pending',
    ERROR_UPDATE: 'Failed to edit',
    PENDING_DELETE: 'Pending',
    ERROR_DELETE: 'Failed to delete',
    ERROR_TITLE_WITH_TEXT: 'Error: {0}',
    DOMAIN_JOIN_FAILURE_HEADER: 'Unable to perform Domain Join',
    DOMAIN_BIND_FAILURE_HEADER: 'Unable to register Active Directory',
    SOFTWARE_UPDATE: 'Agent Software Update going on',
    NOT_COMPARTIBLE: 'Agent Software Update is not compatible',
    SOFTWARE_UPDATE_FAILED: 'Agent Software Update failed',
    SOFTWARE_UPDATE_FAILED_AND_DESKTOP_ACCESSIBLE: 'Agent updated failed but desktop is accessible. Try updating the agent again from the Assignments page.',
    SOFTWARE_UPDATE_FAILED_DESKTOP_NOT_ACCESSIBLE: 'Agent update failed and disabled the existing agent. Desktop is inaccessible. Roll back the agent before {0} or try updating the agent again from the Assignments page.',
    STATUS_FETCHING: 'Fetching status ...',
    UPDATING_TO: 'Updating to {0}{1}',
    FAILED_TO: 'Failed to update to {0}{1}',
    AVAILABLE_NO_COLON: 'Update Available for {0}{1}',
    AGENT_SOFTWARE: 'Agent Software',
    UPDATES_AVAILABLE: 'Agent Software Updates Available',
    STARTED_AT: 'started at',
    '7_DAYS': '7 Days',
    '2_WEEKS': '2 Weeks',
    '1_MONTH': '1 Month',
    CUSTOM: 'Custom',
    DIRECTORY_SEARCH_STRING: 'Active Directory Search',
    NEW_ASSIGNMENT: 'New Assignment',
    NEW_APPLICATION_ASSIGNMENT: 'New Application Assignment',
    NEW_DESKTOP_ASSIGNMENT: 'New Desktop Assignment',
    SORT_ASCENDING: 'Sort Ascending',
    SORT_DESCENDING: 'Sort Descending',
    COLUMNS: 'Columns',
    SEARCH: 'Search',
    COL_FILTER_MENU_INFO: 'Show items with value that',
    CLEAR: 'Clear',
    IS_TRUE: 'Is true',
    IS_FALSE: 'Is false',
    TRUE: 'true',
    FALSE: 'false',
    AND: 'And',
    OR: 'Or',
    EQ: 'Is equal to',
    NEQ: 'Is not equal to',
    GT: 'Is greater than',
    LTE: 'Is less than or equal to',
    LT: 'Is less than',
    STARTS_WITH: 'Starts with',
    ENDS_WITH: 'Ends with',
    CONTAINS: 'Contains',
    DOES_NOT_CONTAIN: 'Does not contain',
    DATE_GTE: 'Is after or equal to',
    DATE_LTE: 'Is before or equal to',
    DATE_GT: 'Is after',
    DATE_LT: 'Is before',
    FILTER: 'Filter',
    IMAGE_NOT_VALID:
        'Selected image \'{0}\' is in an error state. Please choose a different image.',
    CONNECTION: '{0} Connection',
    CONNECTIONS: '{0} Connections',
    PERCENTAGE_COMPLETION: '% Completion',
    CREATE_ASSIGNMENT_FAILED_DT_VGPU_POOL_EXPANSION: 'Unable to create assignment because the system ' +
        'administrator has disabled vGPU pool expansion. For more information, contact the system administrator.',
    CREATE_ASSIGNMENT_SUCCEEDED: 'Successfully created a new assignment.',
    DUPLICATE_ASSIGNMENT_SUCCEEDED: 'Successfully created a new duplicate assignment.',
    CREATE_ASSIGNMENT_ASSIGN_USER_ERROR: 'New assignment was created successfully, ' +
        'but some selected users and groups were not assigned to it successfully.',
    DUPLICATE_ASSIGNMENT_ASSIGN_USER_ERROR: 'Duplicate assignment was created successfully, ' +
        'but some selected users and groups were not assigned to it successfully.',
    CREATE_ASSIGNMENT_COMMAND_LINE_PARAM_ERROR: 'The new Assignment was created ' +
        'successfully, but some command line parameters were not assigned successfully.',
    CREATE_ASSIGNMENT_RESOURCE_ALREADY_EXIST: 'Unable to create assignment. Assignment Name ' +
        'entered in Definition tab is already in use. Please enter different Assignment ' +
        'Name and try again.',
    CREATE_ASSIGNMENT_DT_DUPLICATE_VM_ROOT_NAME: 'Unable to create assignment. VM Name ' +
        'entered in Definition tab already exists. Please enter different VM Name and try again.',
    CREATE_ASSIGNMENT_INVALID_POOL_NAME:
        'Creating new assignment failed. The assignment name specified is invalid.',
    CREATE_ASSIGNMENT_INVALID_DOMAIN: 'Unable to create assignment. Selected Domain in ' +
        'Definition tab is invalid or is not a registered domain. Please select valid ' +
        'registered Domain and try again.',
    CREATE_ASSIGNMENT_NGVC_INVALID_DOMAIN: 'Unable to create assignment. ' +
        'The selected Image has invalid domain. Please select valid Image and try again.',
    CREATE_ASSIGNMENT_INVALID_CUSTOMER_ID: 'Unable to create assignment. Customer ID ' +
        'entered in Definition tab is invalid. Please enter valid Customer ID and try again.',
    CREATE_ASSIGNMENT_NETWORK_REQUIRED: 'Creating new assignment failed. Network is missing.',
    CREATE_ASSIGNMENT_INVALID_GOLD_PATTERN: 'Unable to create assignment. The selected ' +
        'image is in an error state. Please check this Image or select a different Image ' +
        'and try again.',
    CREATE_ASSIGNMENT_INVALID_DESKTOP_MODEL: 'Unable to create assignment. ' +
        'Selected Desktop Model in Definition tab is invalid. Please select valid ' +
        'Desktop Model and try again.',
    CREATE_ASSIGNMENT_INSUFFICIENT_DESKTOP_MODEL_QUOTA: 'Unable to create assignment. ' +
        'The selected desktop model does not have enough capacity to create this assignment. ' +
        'Please reduce the capacity for this assignment or buy more capacity and try again.',
    CREATE_ASSIGNMENT_UNSUPPORTED_GOLD_PATTERN_AGENT_VERSION: 'Expanding pools with gold ' +
        'patterns having agent version older than 16.6 is not supported with the current ' +
        'agent pairing mode.',
    CREATE_ASSIGNMENT_INSUFFICIENT_COMPUTE_CAPACITY: 'Unable to create assignment. ' +
        'Does not have enough capacity to create this assignment. Please reduce the capacity ' +
        'for this assignment or buy more capacity and try again.',
    CREATE_ASSIGNMENT_INVALID_SESSION_TIMEOUT:
        'Creating new assignment failed. Invalid session timeout.',
    CREATE_ASSIGNMENT_INVALID_ORGANIZATIONAL_UNIT: 'Unable to create assignment. ' +
        'Computer OU entered in Definition tab is invalid. Please enter valid Computer ' +
        'OU and try again.',
    CREATE_ASSIGNMENT_GROUP_NOT_FOUND: 'Unable to create assignment. One of the ' +
        'selected user group cannot be found. Please remove this user group and try again.',
    CREATE_ASSIGNMENT_DT_INCOMPATIBLE_POOL_DISK_PERSISTENCE_TYPE:
        'The pool\'s disk persistence setting is not compatible with the pool type',
    CREATE_ASSIGNMENT_DT_GOLD_PATTERN_VIRTUAL_MACHINE_NOT_FOUND:
        'Unable to create assignment. Selected Image cannot be found. ' +
        'Please select a different Image and try again.',
    CREATE_ASSIGNMENT_DT_INCOMPATIBLE_GOLD_PATTERN_OS_TYPE:
        'Unable to create assignment. Selected Image is not supported with this assignment ' +
        'type. Please select a different Image and try again.',
    CREATE_ASSIGNMENT_DT_INCOMPATIBLE_REMOTE_PROTOCOL: 'The specified protocol is not ' +
        'compatible with the specified pool type.',
    CREATE_ASSIGNMENT_DT_NO_SESSION_BASED_DESKTOP_MODELS_WITH_QUOTA_REMAINING:
        'Unable to create assignment. The selected desktop model does not have enough capacity ' +
        'to create this assignment. Please reduce the capacity for this assignment and try again.',
    CREATE_ASSIGNMENT_DT_INVALID_SESSION_PROFILE_ID:
        'The generated session profile ID for a session pool is either missing or invalid.',
    CREATE_ASSIGNMENT_FAILED_DT_INSUFFICIENT_PROTOCOL_QUOTA:
        'Unable to create assignment. The remaining protocol quota for one or more protocols is ' +
        'insufficient to satisfy the provisioning request.',
    CREATE_ASSIGNMENT_FAILED: 'Unable to create assignment.',
    SELECT_IMAGE: 'Select an image to see its detail',
    HRS: 'hrs',
    FARM_CHANGEVMSESSIONALLOCATIONSTATE:
        'Changing Session allocation state of VM {0} on farm {1}',
    FARM_CLONESESSIONVM: 'Expanding session on farm {0}',
    FARM_DELETE_VM_TASK: 'Deleting server {0} on farm {1}',
    FARM_DELETE_TASK: 'Deleting farm {0}',
    FARM_POWEROFF_TASK: 'Powering off server {0} on farm {1}',
    FARM_POWERON_TASK: 'Powering on server {0} on farm {1}',
    FARM_SHUTDOWN_TASK: 'Shutting down server {0} on farm {1}',
    FARM_MODIFY_HOTPLUG_TASK: 'Modifying hotplug state on farm {0}',
    FARM_UPDATE_VM_METADATA_TASK: 'Updating metadata for server {0} on farm {1}',
    FARM_USR_EVENT_DESKTOP_UNAVAILABLE: 'This server is not available.',
    FARM_USR_EVENT_DESKTOP_NOT_RUNNING: 'Server is not powdered on.',
    FARM_USR_EVENT_ALLOCATE_FAILURE: 'Failed to allocate {0} to server {1} of farm {2}',
    FARM_USR_EVENT_LOG_ON: '{0} logged on to server {1} of farm {2}',
    FARM_USR_EVENT_ALLOCATE: 'Allocated {0} to server {1} of farm {2}',
    FARM_USR_EVENT_LOG_OFF: '{0} logged off from server {1} of farm {2}',
    FARM_USR_EVENT_DISCONNECT: '{0} disconnected from server {1} of farm {2}',
    FARM_USR_EVENT_RECONNECT: '{0} reconnected to server {1} of farm {2}',
    FARM_USR_EVENT_SESSION_TIMEOUT: '{0}\'s session on server {1} timed out.',
    FARM_USR_EVENT_BROKER_PARAM_ERROR:
        'Parameters required for farm allocation are incorrect or missing.',
    FARM_USR_EVENT_HELPDESK_GET_WS1_ASSIST_AGENT_ID:
        'Launch Workspace ONE Assist for {0}\'s session on server {1} of farm {2}',
    FARM_USR_EVENT_HELPDESK_GET_WS1_ASSIST_AGENT_ID_FAILED:
        'Failed to launch Workspace ONE Assist for {0}\'s session on server {1} of farm {2}',
    FARM_USR_EVENT_HELPDESK_KILLPROCESS:
        'Kill process[pid: {3}, name: {4}] for {0}\'s session on server {1} of farm {2}',
    FARM_USR_EVENT_HELPDESK_KILLPROCESS_FAILED:
        'Failed to kill process[pid: {3}, name: {4}] for {0}\'s session on server {1} of farm {2}',
    FARM_USR_EVENT_HELPDESK_KILL_LAUNCHED_APPLICATION: 'Kill application[name: {3}] for ' +
        '{0}\'s session on server {1} of farm {2}',
    FARM_USR_EVENT_HELPDESK_KILL_LAUNCHED_APPLICATION_FAILED: 'Failed to kill application' +
        '[name: {3}] for {0}\'s session on server {1} of farm {2}',
    FARM_USR_EVENT_HELPDESK_SENDMESSAGE:
        'Send message to {0}\'s session on server {1} of farm {2}, message: [{3}]',
    FARM_USR_EVENT_HELPDESK_SENDMESSAGE_FAILED:
        'Failed to send message to {0}\'s session on server {1} of farm {2}, message: [{3}]',
    FARM_USR_EVENT_HELPDESK_REQUEST_REMOTE_ASSIST:
        'Request Remote Assistance Ticket for {0}\'s session on server {1} of farm {2}',
    FARM_USR_EVENT_HELPDESK_REQUEST_REMOTE_ASSIST_FAILED:
        'Failed to request Remote Assistance Ticket for {0}\'s session on server {1} of farm {2}',
    FARM_USR_EVENT_HELPDESK_DISCONNECT_INITIATED:
        'Disconnect {0}\'s session on server {1} of farm {2}',
    FARM_USR_EVENT_HELPDESK_LOGOFF_INITIATED:
        'Logoff {0}\'s session on server {1} of farm {2}',
    FARM_USR_EVENT_HEADROOM_ERROR: 'The Server is being prepared',
    DC_TEMPLATE_QUOTA_USAGE: '{0} ({1} of {2} Used)',
    TIME_PERIOD_FILTER: 'Time Period Filter',
    REAL_TIME: 'Real time',
    LAST_2_DAYS: 'Last 2 days',
    LAST_3_DAYS: 'Last 3 days',
    LAST_4_DAYS: 'Last 4 days',
    LAST_5_DAYS: 'Last 5 days',
    LAST_7_DAYS: 'Last 7 days',
    LAST_24_HOURS: 'Last 24 hours',
    LAST_1_WEEK: 'Last 1 week',
    LAST_12_HOURS: 'Last 12 hours',
    LAST_48_HOURS: 'Last 48 hours',
    LAST_2_WEEKS: 'Last 2 weeks',
    LAST_30_DAYS: 'Last 30 days',
    LAST_60_DAYS: 'Last 60 days',
    DETAIL: 'Detail',
    WHEN: 'When',
    DURATION: 'Duration',
    DURATION_MIN: 'Duration (minutes)',
    NO_RESULTS_FOUND: 'No results found',
    EVENT: '{0} Event',
    EVENTS: '{0} Events',
    CAPACITY_MAX_ERROR: 'Capacity cannot exceed remaining capacity.',
    CAPACITY_MIN_ERROR_DEDICATED: 'Capacity cannot be reduced for dedicated assignments',
    SERVERS_MAX_ERROR: 'Value cannot exceed remaining capacity/servers',
    SERVER_MAX_AVAILABLE: 'Servers cannot exceed {0}, the number of available servers.',
    SERVER_MAX_DEPLOYABLE:
        'Servers cannot exceed {0} (deployed servers plus remaining available servers).',
    NO_SERVERS_ERROR: 'There is no server remaining for this Server Model.',
    UWV_SIZE_MAX_ERROR: 'Writable Volume size cannot exceed {0} GB.',
    UWV_SIZE_MIN_ERROR: 'Writable Volume size cannot be less than {0} GB.',
    BACKUPS: 'Backups',
    BACKUP_NOW: 'Backup Now',
    REVERT_TO_DESKTOP: 'Convert to Desktop',
    REVERT_IMAGE_MORE_INFO: 'This operation will convert the image to a desktop.',
    REFRESH_FLOATING_DESKTOP: 'Push Updates',
    USED_IN_ASSIGNMENTS: 'Used in Assignments',
    CREATED: 'Created:',
    COMPUTER_OU: 'Computer OU:',
    PUBLISHER: 'Publisher',
    VARIOUS: 'Various',
    USED_IN: 'Used In',
    CUSTOMER_ID: 'Customer ID:',
    COMPUTER_OU_HELP_TEXT: 'Enter the AD Organizational Unit for the VMs using the ' +
        'distinguished name (OU=My Organization,DC=MyDomain,etc.) The OU and each path in ' +
        'a nested OU can contain any combination of letters, numbers, special characters, ' +
        'and spaces, and can have a maximum of 64 characters.',
    ENABLE_3D: 'Enable Soft 3D:',
    ENABLE_3D_HELP_TEXT: 'Enables DirectX9 and OpenGL 2.1 applications (no additional ' +
        'compute resources required).Only available on Professional and Larger desktop models.',
    RUN_SCRIPT: 'Run Once Script:',
    RUN_SCRIPT_HELP_TEXT:
        'Location of scripts that should run after system preparation completes.',
    ENABLE_HOTPLUG: 'Enable Windows Hot Plug:',
    ENABLE_HOTPLUG_HELP_TEXT: 'Whether to allow users to add or remove a device from the ' +
        'VM (e.g., NIC, disk, etc.). If enabled, users must be instructed to take extreme ' +
        'care, as it would be possible to interfere with VM connectivity and cause problems ' +
        'logging in.',
    AZURE_RESOURCE_TAGS: 'Azure Resource Tags',
    AZURE_RESOURCE_TAGS_NAME: 'Name',
    AZURE_RESOURCE_TAGS_VALUE: 'Value',
    AZURE_RESOURCE_TAGS_LABEL: 'Azure Resource Tags:',
    AZURE_RESOURCE_TAGS_HELP_TEXT: 'Enter a name and value pair for up to 10 Azure resource tags. The name is limited ' +
        'to 512 characters, and the value is limited to 256 characters. Tag names cannot contain the characters <, >, %, &, \\, ?, / ' +
        'or the words starting with "azure", "microsoft", or "windows".',
    AZURE_RESOURCE_TAGS_DATA: '{0}: {1}',
    AZURE_RESOURCE_TAGS_NAME_DATA: '{0}: ',
    AZURE_RESOURCE_TAGS_VALUE_DATA: '{0}',
    AZURE_RESOURCE_TAGS_COUNT: '+{0}',
    RESOURCE_TAG_REQUIRED_INVALID: 'This field is required.',
    RESOURCE_TAG_PATTERN_INVALID: 'Azure resource tag name cannot contain the characters <, >, %, &, \\, ?, or /.',
    RESOURCE_TAG_SYSTEM_NAME_INVALID: 'Azure resource tag name cannot contain words starting with "azure", "microsoft", or "windows".',
    POD_RESOURCE_TAG_NAME_PATTERN_INVALID: 'Azure resource tag name cannot contain <, >, %, &, \\, ?, /, or whitespace characters.',
    POD_RESOURCE_TAG_VALUE_PATTERN_INVALID: 'Cannot contain whitespace.',
    RESOURCE_TAG_DUPLICATE_INVALID: 'This name is already in use. Please choose another name.',
    HOTPLUG_FAILURE_BANNER_TEXT: 'Change of hotplug setting failed for',
    HOTPLUG_WARNING_MESSAGE: 'This will increase VM creation time.',
    RETRY: 'Retry',
    RETRY_HOTPLUG_SUCCEEDED: 'Retry hotplug change request has been submitted successfully. ' +
        'Check the Activity screen for more details.',
    RDP_REDIRECTION: 'RDP Device Redirection:',
    ENABLE_CLIPBOARD: 'Enable Clipboard',
    ENABLE_DRIVERS: 'Enable Drives',
    ENABLE_PRINTERS: 'Enable Printers',
    ENABLE_SMARTCARDS: 'Enable Smart Cards',
    ENABLE_COMPPORTS: 'Enable Com Ports',
    VM_NAMES: 'VM Names:',
    USERS_PER_SERVER_HELP_TEXT: 'Total number of users you want to allow on each server.',
    VM_TYPE_HELP: 'Dedicated:<br>Each user is assigned a specific desktop VM. Users receive ' +
        'the same desktop each time they log in to the assignment.<br><br>Floating:<br>Users ' +
        'receive different desktop VM each time they login.<br><br>Note: With both types, the ' +
        'desktop VM is reset after each session and temporary data and user created content ' +
        'is not retained.',
    NGVC_VM_TYPE_DEDICATED_HELP: 'Dedicated:<br>Persistent VDI desktop experience which is ' +
        'mapped to a single user.<br><br>',
    NGVC_VM_TYPE_FLOATING_HELP: 'Floating:<br>Non-Persistent VDI desktop experience which ' +
        'multiple users can use at different times (i.e. resets after each user session).<br><br>',
    NGVC_VM_TYPE_SESSION_HELP: 'Session:<br>Non-persistent RDSH published desktop ' +
        'experience shared across multiple users (i.e. terminal services).',
    NGVC_VM_TYPE_HELP: '{0} {1} {2}',
    JOIN_DOMAIN: 'Join Domain:',
    SERVERS: 'Servers:',
    TOTAL_VMS_COLON: 'Total VMs:',
    SERVERS_LABEL: 'Session Hosts',
    NETWORK_LABEL: 'Network (VNet/Subnet)',
    SERVER: 'Server',
    DESKTOPS_OR_SERVERS: 'desktops/servers',
    N_SERVERS: '{0} Servers',
    N_SERVER: '{0} Server',
    N_DESKTOPS: '{0} Desktops',
    N_DESKTOP: '{0} Desktop',
    SERVERS_HELP_TEXT: 'Number of RDSH servers you want to allocate to this assignment. ' +
        'Remaining count on left is determined by the number of remaining servers of the ' +
        'Desktop Model selected above.',
    PATTERN_DESKTOP_HELP: 'Search all desktops that can be converted to an image.',
    PATTERN_DESKTOP_SELECT_HELP: 'Select the desktop to convert to an image.',
    FLEXIBLE_ATTRIBUTES: 'Flexible Attributes',
    vGPU_PROFILE_COLON: 'vGPU Profile:',
    vGPU_PROFILE_NAME: '{0} ({1})',
    VENDOR_NAME_COLON: 'Vendor Name:',
    DEVICE_NAME_COLON: 'Device Name:',
    vGPU_DETAILS: 'vGPU Details',
    FLEXIBLE_ATTRIBUTES_HELP: 'Can be changed anytime.',
    DEDICATED: 'Dedicated',
    FLOATING: 'Floating',
    NETWORK: 'Network:',
    NETWORK_MASK: 'Network Mask:',
    NETWORK_GATEWAY_ADDRESS: 'Network Gateway Address:',
    SESSION: 'Session',
    FIXED_ATTRIBUTES: 'Fixed Attributes',
    FIXED_ATTRIBUTES_HELP: 'Cannot be changed after assignment is created.',
    VISIBLE: 'Visible',
    HIDDEN: 'Hidden',
    RENAME: 'Rename',
    HIDE: 'Hide',
    UNHIDE: 'Unhide',
    APPLICATION_HIDE_SUCCESSFUL: 'Application(s) were successfully added to HIDE list.',
    APPLICATION_UNHIDE_SUCCESSFUL: 'Application(s) were successfully removed from HIDE list.',
    APP_UPDATE_FAILED: 'Following applications could not be updated.',
    AUTO_ASSIGNMENT: 'Auto Assignment',
    ADVANCED_PROPERTIES: 'Advanced Properties',
    SESSION_TIMEOUT: 'Session Timeout',
    SESSION_TIMEOUT_COLON: 'Session Timeout:',
    SESSION_TIMEOUT_HELP_TEXT: 'Enter the amount of time the user can have an idle session ' +
        'before the system forces a log off, resulting in the loss of any unsaved data.  ' +
        'To prevent an unintended loss of data, set this interval high enough to accommodate ' +
        'the business needs of your end users.',
    MIN_PERC_POWERED_ON_VMS: 'Min. % of Powered-on Desktops',
    ENABLE_RDP: 'Enable RDP:',
    ENABLE_RDP_HELP_TEXT: 'Allows users to connect using Microsoft RDP protocol. ' +
        'Note VMware recommends using VMware native protocols rather than 3rd party protocols.',
    INTERNAL_ERROR: 'Internal Error. Unexpected internal error occurred and system was ' +
        'unable to complete your request. Please try again later. If this issue persists ' +
        'contact your service provider.',
    EXPIRED_USER_CREDENTIALS:
        'Credentials have expired. Please try again with valid credentials.',
    FROM: 'From',
    TO: 'To',
    SHOW: 'Show',
    SHOW_COLON: 'Show:',
    COMPLETION: '% Completion',
    DAAS_AGENT_LABEL: 'Agent Status',
    DAAS_AGENT_VERSION: 'Agent Version:',
    CONNECTED_USER: 'Connected User',
    CONNECTED_USERS_NUMBER: 'Connected {0} user(s)',
    SESSION_STATE: 'Session State',
    CONNECTED: 'Connected',
    DISCONNECTED: 'Disconnected',
    PARTIALLY_CONNECTED: 'Partially Connected',
    INPROGRESS: 'In Progress',
    DISCONNECTED_PERCENTAGE: '{0}% Disconnected',
    UNKNOWN: 'Unknown',
    USAGE: 'Usage',
    ACTIVITY: 'Activity',
    SYSTEM_ACTIVITY: 'System Activity',
    USER_ACTIVITY: 'User Activity',
    SHARED_APPLICATIONS: 'Applications',
    NATIVE_APPS_INFO:
        'Assign Windows Applications to users and groups using App Volumes AppStacks.',
    REMOTE_AND_NATIVE_APPS_INFO: 'Assign Windows applications to users and groups ' +
        'using App Volumes AppStacks or remote applications.',
    REMOTE_APPS_INFO:
        'Assign Windows Applications to users and groups using remote applications.',
    DESKTOP_ASSIGNMENT: 'Desktops',
    DESKTOP_ASSIGNMENT_INFO: 'Assign desktops to users and groups.',
    LAST_BACKUP: 'Last backup',
    MODIFIED_BY: 'Modified by',
    IMAGE_DETAILS: 'Image details',
    NOTIFICATION_MSG: 'Notification message',
    SELECTED: 'Selected',
    SELECTED_USERS: 'Selected Users',
    SELECTED_USER_GROUPS: 'Selected User Groups:',
    SELECTED_USER_GROUPS_NO_COLON: 'Selected User Groups',
    SELECTED_USERS_OR_USER_GROUPS: 'Selected Users/User Groups:',
    SELECTED_USERS_OR_USER_GROUPS_NO_COLON: 'Selected Users/User Groups',
    USERS_OR_USER_GROUPS: 'Users/User Groups:',
    USERS_OR_USER_GROUPS_NO_COLON: 'Users/User Groups',
    USERS_OR_USER_GROUPS_COUNT: 'Users/User Groups ({0})',
    USERS_AND_GROUPS: 'Users & Groups',
    MAXIMUM: 'Maximum',
    IMAGES: 'Images',
    IMAGES_MULTIPOD: 'Images - Multi-Pod',
    IMAGES_VIEW: 'Images',
    IMAGES_AZURE: 'Images - Azure',
    IMAGES_MICROSOFT_AZURE_TITLE: 'Images - Microsoft Azure',
    IMAGES_HORIZON_VIEW: 'Images - VMware SDDC',
    IMAGES_LEGACY_AZURE_HELP_TEXT: 'These Microsoft Azure images must be published individually ' +
        'to each Horizon Cloud pod on Microsoft Azure. To publish an image that automatically replicates ' +
        'to multiple Horizon Cloud pods on Microsoft Azure, go to <a href="#/app/image-catalog" linkIdentifier="portalLinkInAstro">Images - Multi-Pod</a>.',
    IMAGES_COLON: 'Images:',
    OS_SLASH_IMAGE: 'OS/Image',
    NEW_REMOTE_APP: 'New Remote Applications Assignment',
    VALID_INTEGER_REQUIRED: 'A valid integer is required in this field.',
    MIN_IMAGE_REP_COUNT_REQUIRED: 'The number must be at least 1.',
    POSITIVE_INTEGER_REQUIRED:
        'An integer greater than or equal to 0 is required in this field.',
    MAX_INTEGER_REQUIRED:
        'An integer less than or equal to 100 is required in this field.',
    ASSIGNMENT_NAME: 'Assignment Name:',
    ASSIGNMENT_NAME_NO_COLON: 'Assignment Name',
    ASSIGNMENT_NAME_HELP_TEXT: 'Give a friendly name to identify the assignment in the ' +
        'system that starts with a letter [a-Z] and contains only letters [a-Z], dashes [-], ' +
        'numbers and should not exceed 20 characters.',
    EDIT_ASSIGNMENT_NAME_HELP_TEXT: 'Optionally modify this name to help identify ' +
        'this assignment from your other assignments. The name needs to start with a ' +
        'letter [a-Z] and contain only letters [a-Z], dashes [-], numbers ' +
        'and should not exceed 20 characters.',
    ASSIGNMENT_NAME_MAXLENGTH_ERROR: 'Assignment name should not exceed 20 characters.',
    VM_NAME_PATTERN_HELP_TEXT: 'Name for all VMs in this assignment, which will have number ' +
        'appended to it (Desktop Name 1, Desktop Name 2, . . . ). It must start with a ' +
        'letter[a-Z] and  can contain only letters [a-Z], dashes [-], and numbers.',
    PREFERRED_CLIENT_TYPE_COLON: 'Preferred Client Type:',
    BROWSER: 'Browser',
    HORIZON_CLIENT: 'Horizon Client',
    PERSISTENT: 'Persistent',
    NON_PERSISTENT: 'Non-Persistent',
    CAPACITY: 'Capacity',
    CAPACITY_LISTING_CLARITY: 'Capacity',
    GENERAL_SETTINGS_CLARITY: "General Settings",
    LICENSES: 'Licenses',
    CAPACITY_COLON: 'Capacity:',
    CAPACITY_UTILIZATION_LABEL: 'Capacity Utilization',
    CAPACITY_UTILIZATION_LABEL_COLON: 'Capacity Utilization:',
    CAPACITY_TEXT: 'Capacity Utilization is measured in terms of virtual standard desktops ' +
        'in use versus the ones possible on each pod. The total capacity percentage is the sum ' +
        'of the number of desktops in use across all pods divided by the total number of ' +
        'desktops possible across all pods.',
    CAPACITY_POD_TEXT: 'The capacity percentage by pod is the sum of the number of desktops ' +
        'in use divided by the total number of desktops possible for the pod.',
    FIXED: 'Fixed',
    VARIABLE: 'Variable',
    REMAINING: 'Remaining',
    REMAINING_COLON: 'Remaining:',
    NUM_REMAINING: '{0} Remaining (based on your subscription quota)',
    NOT_VALID_NUMBER: 'Please enter a valid number.',
    USERS_PER_SERVER: 'Users per Server:',
    HOURS: 'Hours',
    MINUTES: 'Minutes',
    TOOLTIP_MORE: '... more',
    MORE_LINK: 'More...',
    LESS_LINK: 'Less...',
    PREV_NOTES_LINK: 'Previous Notes...',
    TOOLTIP_OF: '10 of {0}',
    SECONDS: 'Seconds',
    UNIT_MINUTES: '{0} Minutes',
    MINUTE_SECOND_CONCAT: '{0}:0{1}',
    UNIT_MINUTE: '{0} Minute',
    NONE: 'Load Balance',
    MB: 'MB',
    UNIT_MB: '{0} MB',
    UNIT_GB: '{0} GB',
    REQUIRED_FIELDS: '* Required fields',
    SELECT: 'Select',
    FIELD_REQUIRED: 'This field is required.',
    DESKTOP_NOT_VALID: 'Select a valid desktop.',
    ASSIGNMENT_NOT_VALID_FOR_MIGRATION: 'Select a valid assignment for migration.',
    VRFY_ADMIN_PWD_NO_MATCH: 'Password does not match.',
    VRFY_ADMIN_PWD: 'Please verify password.',
    GET_STARTED_BUTTON: 'Get Started',
    GET_STARTED: 'Get Started!',
    TZ_BET: '(UTC-11:00) Bering Standard Time',
    TZ_HAWAII: '(UTC-10:00) Hawaii',
    TZ_ALASKA: '(UTC-09:00) Alaska',
    TZ_PST: '(UTC-08:00) Pacific Time(US & Canada)',
    TZ_MST: '(UTC-07:00) Mountain Time(US & Canada)',
    TZ_CST: '(UTC-06:00) Central Time (US & Canada)',
    TZ_MEXICO: '(UTC-06:00) Central America',
    TZ_EST: '(UTC-05:00) Eastern Time (US & Canada)',
    TZ_US_EAST: '(UTC-05:00) Indiana (East)',
    TZ_AMERICA_BOGOTA: '(UTC-05:00) Bogota, Lima, Quito',
    TZ_AMERICA_CARCAS: '(UTC-04:00) Caracas',
    TZ_PRT: '(UTC-04:00) Puerto Rico and US Virgin Islands Time',
    TZ_AMERICA_SANTIAGO: '(UTC-04:00) Santiago',
    TZ_CANADA_NF: '(UTC-03:30) Newfoundland',
    TZ_AMERICA_BUE: '(UTC-03:00) Buenos Aires',
    TZ_ATL_CAPE: '(UTC-01:00) Cape Verde',
    TZ_AZORES: '(UTC-01:00) Azores',
    TZ_GMT: '(UTC-00:00) GMT',
    TZ_CET: '(UTC+01:00) Central European Time',
    TZ_CAIRO: '(UTC+02:00) Cairo',
    TZ_JOHAN: '(UTC+02:00) Johannesburg',
    TZ_EET: '(UTC+02:00) Eastern European Time',
    TZ_ATHENS: '(UTC+2:00) Athens',
    TZ_HELSINKI: '(UTC+02:00) Helsinki, Kyiv, Riga',
    TZ_JERUSALEM: '(UTC+02:00) Jerusalem',
    TZ_BAGHDAD: '(UTC+03:00) Baghdad',
    TZ_KUWAIT: '(UTC+03:00) Kuwait',
    TZ_EAT: '(UTC+03:00) East Africa Time',
    TZ_WSU: '(UTC+03:00) Moscow',
    TZ_TEHRAN: '(UTC+3:30) Tehran',
    TZ_ABUDHABI: '(UTC+04:00) Abu Dhabi, Muscat',
    TZ_BAKU: '(UTC+04:00) Baku',
    TZ_KABUL: '(UTC+04:30) Kabul',
    TZ_PLT: '(UTC+05:00) Pakistan Lahore Time',
    TZ_YEKAT: '(UTC+05:00) Yekaterinburg',
    TZ_IST: '(UTC+05:30) India Standard Time',
    TZ_COLOMBO: '(UTC+05:30) Colombo',
    TZ_KATMANDU: '(UTC+05:45) Katmandu',
    TZ_ALMATY: '(UTC+6:00) Almaty',
    TZ_DHAKA: '(UTC+06:00) Dhaka',
    TZ_RANGOON: '(UTC+06:30) Yangon (Rangoon)',
    TZ_BANGKOK: '(UTC+07:00) Bangkok',
    TZ_PERTH: '(UTC+08:00) Perth',
    TZ_SINGAP: '(UTC+08:00) Kuala Lumpur, Singapore',
    TZ_TAIPEI: '(UTC+08:00) Taipei',
    TZ_KARSN: '(UTC+07:00) Krasnoyarsk',
    TZ_CTT: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    TZ_IRKUTSK: '(UTC+08:00) Irkutsk',
    TZ_TOKYO: '(UTC+09:00) Osaka, Sapporo, Tokyo',
    TZ_SEOUL: '(UTC+09:00) Seoul',
    TZ_YAKUTSK: '(UTC+09:00) Yakutsk',
    TZ_DARWIN: '(UTC+09:30) Darwin',
    TZ_ADELAIDE: '(UTC+09:30) Adelaide',
    TZ_GUAM: '(UTC+10:00) Guam, Port Moresby',
    TZ_TASMANIA: '(UTC+10:00) Tasmania',
    TZ_BRISBANE: '(UTC+10:00) Brisbane',
    TZ_SYDNEY: '(UTC+10:00) Canberra, Melbourne, Sydney',
    TZ_VLADI: '(UTC+10:00) Vladivostok',
    TZ_MAGADAN: '(UTC+11:00) Magadan, Solomon Is.',
    TZ_NZ: '(UTC+12:00) Auckland, New Zealand',
    TZ_FIJI: '(UTC+12:00) Fiji',
    TZ_TONGA: '(UTC+13:00) Nuku\'alofa',
    TZ_SAMOA: '(UTC+13:00) Samoa',
    TZ_SHORT_BET: 'Bering Standard Time',
    TZ_SHORT_SAMOA: 'Samoa Time',
    TZ_SHORT_HAWAII: 'Hawaii Time',
    TZ_SHORT_ALASKA: 'Alaska Time',
    TZ_SHORT_PST: 'Pacific Time',
    TZ_SHORT_MST: 'Mountain Time',
    TZ_SHORT_CST: 'Central Time',
    TZ_SHORT_MEXICO: 'Central America Time',
    TZ_SHORT_EST: 'Eastern Time',
    TZ_SHORT_US_EAST: 'Indiana (East) Time',
    TZ_SHORT_AMERICA_BOGOTA: 'Bogota, Lima, Quito',
    TZ_SHORT_AMERICA_CARCAS: 'Caracas Time',
    TZ_SHORT_PRT: 'Puerto Rico and US Virgin Islands Time',
    TZ_SHORT_AMERICA_SANTIAGO: 'Santiago Time',
    TZ_SHORT_CANADA_NF: 'Newfoundland Time',
    TZ_SHORT_AMERICA_BUE: 'Buenos Aires Time',
    TZ_SHORT_ATL_CAPE: 'Cape Verde Time',
    TZ_SHORT_AZORES: 'Azores Time',
    TZ_SHORT_GMT: 'GMT',
    TZ_SHORT_CET: 'Central European Time',
    TZ_SHORT_CAIRO: 'Cairo Time',
    TZ_SHORT_JOHAN: 'Johannesburg Time',
    TZ_SHORT_EET: 'Eastern European Time',
    TZ_SHORT_ATHENS: 'Athens Time',
    TZ_SHORT_HELSINKI: 'Helsinki, Kyiv, Riga Time',
    TZ_SHORT_JERUSALEM: 'Jerusalem Time',
    TZ_SHORT_BAGHDAD: 'Baghdad Time',
    TZ_SHORT_KUWAIT: 'Kuwait Time',
    TZ_SHORT_EAT: 'East Africa Time',
    TZ_SHORT_WSU: 'Moscow Time',
    TZ_SHORT_TEHRAN: 'Tehran Time',
    TZ_SHORT_ABUDHABI: 'Abu Dhabi, Muscat Time',
    TZ_SHORT_BAKU: 'Baku Time',
    TZ_SHORT_KABUL: 'Kabul Time',
    TZ_SHORT_PLT: 'Pakistan Lahore Time',
    TZ_SHORT_YEKAT: 'Yekaterinburg Time',
    TZ_SHORT_IST: 'India Standard Time',
    TZ_SHORT_COLOMBO: 'Colombo Time',
    TZ_SHORT_KATMANDU: 'Katmandu Time',
    TZ_SHORT_ALMATY: 'Almaty Time',
    TZ_SHORT_DHAKA: 'Dhaka Time',
    TZ_SHORT_RANGOON: 'Yangon (Rangoon)Time',
    TZ_SHORT_BANGKOK: 'Bangkok Time',
    TZ_SHORT_PERTH: 'Perth Time',
    TZ_SHORT_SINGAP: 'Kuala Lumpur, Singapore Time',
    TZ_SHORT_TAIPEI: 'Taipei Time',
    TZ_SHORT_KARSN: 'Krasnoyarsk Time',
    TZ_SHORT_CTT: 'Beijing, Chongqing, Hong Kong, Urumqi',
    TZ_SHORT_IRKUTSK: 'Irkutsk Time',
    TZ_SHORT_TOKYO: 'Japan Standard Time',
    TZ_SHORT_SEOUL: 'Seoul Time',
    TZ_SHORT_YAKUTSK: 'Yakutsk Time',
    TZ_SHORT_DARWIN: 'Darwin Time',
    TZ_SHORT_ADELAIDE: 'Adelaide Time',
    TZ_SHORT_GUAM: 'Guam, Port Moresby Time',
    TZ_SHORT_TASMANIA: 'Tasmania Time',
    TZ_SHORT_BRISBANE: 'Brisbane Time',
    TZ_SHORT_SYDNEY: 'Canberra, Melbourne, Sydney Time',
    TZ_SHORT_VLADI: 'Vladivostok Time',
    TZ_SHORT_MAGADAN: 'Magadan, Solomon Is.',
    TZ_SHORT_NZ: 'New Zealand Time',
    TZ_SHORT_FIJI: 'Fiji Time',
    TZ_SHORT_TONGA: 'Tongatapu Time',
    HIDE_PASSWORD: 'Hide Password',
    SHOW_PASSWORD: 'Show Password',
    NEW_TEMPLATE: 'New Image',
    NEW_TEMPLATE_INSTRUCTIONS: 'Instructions on how to use this screen.',
    VIRTUAL_MACHINE_TO_CONVERT: 'Convert Virtual Machine to Image',
    VIRTUAL_MACHINE_NUM: 'VIRTUAL MACHINE ({0})',
    DESKTOP_COLON: 'Desktop:',
    DESKTOP: 'Desktop',
    PUBLISH: 'Publish',
    PROPERTIES: 'Properties',
    DESCRIPTION: 'Description',
    DESCRIPTION_COLON: 'Description:',
    OS_PROPERTIES: 'OS Properties',
    COMPANY_NAME: 'Company Name:',
    TIMEZONE: 'Timezone:',
    TIMEZONE_NO_COLON: 'Timezone',
    LICENSE_KEY: 'License Key:',
    DESKTOP_ADMIN_CREDENTIALS: 'Admin credentials for the Virtual Machine:',
    VERIFY_PASSWORD: 'Verify Password:',
    FULL_NAME: 'Full Name',
    ASSIGN: 'Assign',
    UNASSIGN: 'Unassign',
    ASSIGNMENT: 'Assignment',
    ASSIGNMENTS: 'Assignments',
    ASSIGNMENTS_AFFECTED_WARN:
        'The below list of assignments may not be deliverable. Change the ' +
        'Homesite Affinity preference in the assignment definition to continue successful delivery.',
    ASSIGNMENTS_LEGACY: 'Assignments',
    ASSIGNMENTS_LEGACY_AV: 'Assignments',
    ASSIGNMENTS_H7: 'Assignments',
    ASSIGNMENTS_LEGACY_H7: 'Assignments',
    ASSIGNMENTS_LEGACY_H7_AV: 'Assignments',
    ASSIGNMENTS_RDSH_DESKTOPS: 'Assignments',
    ASSIGNMENTS_RDSH_DESKTOPS_AV: 'Assignments',
    ASSIGNMENT_COLON: 'Assignment:',
    NAV_ASSIGN: 'Assignments',
    NAV_ASSIGNMENT: 'Assignments',
    ASSIGNMENTS_COLON: 'Assignments:',
    ASSIGNMENT_TYPE: 'Type',
    ASSIGNMENT_TYPE_FULL: 'Assignment Type',
    SUMMARY: 'Summary',
    POLICIES: 'Policies',
    USER: 'User',
    FULLNAME: 'Full name:',
    LAST_SESSION: 'Last Session',
    USER_STATUS: 'User Status:',
    APPLICATIONS: 'Applications',
    APPLICATIONS_SAM: 'Applications',
    APPLICATIONS_COUNT: 'Applications ({0})',
    LAST_CONNECTED: 'Last Connected',
    APPLICATIONS_COLON: 'Applications:',
    CONNECTED_USERS: 'Connected Users:',
    USERS_IN_SESSION: 'Users in Session:',
    TOTAL_USERS: 'Total Users:',
    POWERED_ON_DESKTOPS: 'Powered-on Desktops:',
    TOTAL_DESKTOPS: 'Total Desktops:',
    TOTAL_APPLICATIONS: 'Total Applications:',
    TOTAL: 'Total:',
    GROUP_STATUS: 'Group Status:',
    USER_GROUP: 'User Group',
    INTERNAL_SERVER_ERROR: 'Internal Server Error. Server encountered internal ' +
        'error and was unable to complete your request. Please try again later. If this ' +
        'issue persists contact your service provider.',
    CPU_SPEED: 'CPU Speed:',
    MEMORY: 'Memory',
    MEMORY_COLON: 'Memory:',
    MEMORY_IN_GB: 'Memory: {0} GB',
    USAGE_IN_GB: '{0} of {1} GB',
    USAGE_IN_GHz: '{0} of {1} GHz',
    CPUS: 'CPUs',
    CPUS_COLON: 'CPUs:',
    CPU: 'CPU',
    RAM: 'RAM',
    N_RAM: '{0} RAM',
    N_CPU: '{0} CPU',
    N_PERCENT: '{0}%',
    PERCENT_SYMBOL: '%',
    CPU_PERCENT: 'CPU {0}%',
    RAM_PERCENT: 'RAM {0}%',
    AGENT_VERSION: 'Agent Version:',
    DESKTOP_NAME: 'Desktop Name',
    DESKTOP_MODEL: 'Desktop Model',
    DESKTOP_MODEL_COLON: 'Desktop Model:',
    DESKTOPMODEL_STRING: '{0} ({1} {2}, {3} {4} {5}{6})',
    GPU_COMMA: ', GPU',
    DISK_SPACE_COLON: 'Disk Space:',
    CAPACITY_NAME: 'Capacity Name',
    VGPU:'vGPU',
    VGPU_COLON: 'vGPU:',
    STANDARD_CAPACITY_INFO_TITLE: 'Standard Capacity Info',
    AGENT_STATE: 'Agent State:',
    PROTOCOLS: 'Protocols:',
    TOOLS_STATE: 'Tools State:',
    DESKTOP_STATUS: 'Desktop Status:',
    POOL_TYPE: 'Type',
    ASSIGNED_USER: 'Assigned User',
    APPLICATION: 'Application',
    SOURCE: 'Source',
    SOURCE_COLON: 'Source:',
    POOL: 'Assignment',
    POWER_STATE_POWERING_OFF: 'Powering Off',
    POWER_STATE_POWERING_ON: 'Powering On',
    POWER_STATE_RESETTING: 'Resetting',
    POWER_STATE_SUSPENDING: 'Suspending',
    POWERED_OFF: 'Off',
    POWERED_ON: 'On',
    REBUILD: 'Rebuild',
    SUSPENDED: 'Suspended',
    SYS_PREP: 'Sys Prep',
    UNABLE_TO_REBUILD: 'Unable to rebuild the selected desktops.',
    CANNOT_REBUILD_ALL_DESKTOP_IN_POOL: 'You\'ve selected all the available desktops to ' +
        'rebuild in this batch. To rebuild a large batch of desktops with a new ' +
        'image, use the push updates option.',
    DT_REBUILD_VMS_MAX_LIMIT: 'Maximum number of VMs for rebuild cannot exceed 50.',
    DT_REBUILD_VMS_LIST_EMPTY: 'List of virtual machines to be rebuilt is empty.',
    DT_REBUILD_ALREADY_RUNNING: 'VM Rebuild operation already going on for one of the VMs.',
    CANNOT_REBUILD_CONNECTED_DESKTOP_ERROR: 'The desktops you selected are in use and ' +
        'cannot be rebuilt. To rebuild these desktops, first disconnect them by using ' +
        'the reset option.',
    REBUILD_DESKTOP_CONFIRMATION: 'Are you sure you want to rebuild the selected desktops?',
    SHOW_CONNECTED_DESKTOP_COUNT_WITH_CANNOT_REBUILD_MESSAGE: '{0} out of {1} of the ' +
        'selected desktops cannot be rebuilt because they are in use.',
    REBUILD_DISCONNECTED_DESKTOP_CONFIRMATION: 'The desktops you selected are in use and cannot be rebuilt. To rebuild these desktops, first disconnect them by using the reset option.<br><br>Would you still like to rebuild the {0} desktops that are disconnected and which can be rebuilt?',
    WILL_DELETE_AND_REBUILD_DESKTOPS:
        'This will delete and rebuild the selected desktops using latest version of Image.',
    SHUTDOWN_DESKTOP_CONFIRMATION: 'Are you sure you want to shut down selected desktops?',
    SHUTDOWN_SERVER_CONFIRMATION: 'Are you sure you want to shut down selected servers?',
    REBOOT_DESKTOP_CONFIRMATION: 'Are you sure you want to restart selected desktops?',
    REBOOT_SERVER_CONFIRMATION: 'Are you sure you want to restart selected servers?',
    SUSPEND_DESKTOP_CONFIRMATION: 'Are you sure you want to suspend selected desktops?',
    SUSPEND_SERVER_CONFIRMATION: 'Are you sure you want to suspend selected servers?',
    RESUME_DESKTOP_CONFIRMATION: 'Are you sure you want to resume selected desktops?',
    RESUME_SERVER_CONFIRMATION: 'Are you sure you want to resume selected servers?',
    POWER_ON_DESKTOP_CONFIRMATION: 'Are you sure you want to power on selected desktops?',
    POWER_ON_SERVER_CONFIRMATION: 'Are you sure you want to power on selected servers?',
    POWER_OFF_DESKTOP_CONFIRMATION: 'Are you sure you want to power off selected desktops?',
    POWER_OFF_SERVER_CONFIRMATION: 'Are you sure you want to power off selected servers?',
    RESET_DESKTOP_CONFIRMATION: 'Are you sure you want to reset selected desktops?',
    RESET_SERVER_CONFIRMATION: 'Are you sure you want to reset selected servers?',
    DESKTOP_LOGOFF_USER_CONFIRMATION:
        'Are you sure you want to log off the users connected to the selected desktops?',
    SERVER_LOGOFF_USER_CONFIRMATION:
        'Are you sure you want to log off all the users connected to the selected servers?',
    FARM_SERVER_LOGOFF_USER_CONFIRMATION:
        'Are you sure you want to log off the selected sessions connected to the servers?',
    DESKTOP_DISCONNECT_USER_CONFIRMATION:
        'Are you sure you want to disconnect the users connected to the selected desktops?',
    SERVER_DISCONNECT_USER_CONFIRMATION:
        'Are you sure you want to disconnect all the users connected to the selected servers?',
    FARM_SERVER_DISCONNECT_USER_CONFIRMATION:
        'Are you sure you want to disconnect the selected sessions connected to the servers?',
    DELETE_DESKTOPS_CONFIRMATION: 'Are you sure you want to delete the selected desktops?',
    DELETE_DESKTOPS_WITH_SESSION_INFO: 'Desktops with active user connection(s) cannot be deleted.',
    DELETE_DESKTOPS_MORE_INFO: 'This will permanently delete the desktops.',
    DELETE_DESKTOP_CONFIRMATION: 'Are you sure you want to delete the selected desktop?',
    DELETE_DESKTOP_NAME_CONFIRMATION: 'Are you sure you want to delete desktop {0}?',
    DELETE_DESKTOP_MORE_INFO: 'This will permanently delete the desktop.',
    ACT_CANNOT_BE_UNDONE: 'This action cannot be undone.',
    REDUCE_ASSIGNMENT_SIZE: 'Reduce assignment size?',
    MASS_DELETE_DESKTOP_DESC: 'This action will permanently delete {0} dedicated desktop(s).',
    MASS_DELETE_DESKTOPS_HEADER: 'Delete desktops',
    MASS_DELETE_DESKTOP_INPUT_DESC: 'Type the number {0} to confirm this action',
    REDUCE_FARM_SIZE: 'Reduce farm size?',
    SELECT_TO_REDUCE_SIZE_BY_DESKTOP:
        'Select to reduce the defined assignment size by one desktop.',
    SELECT_TO_REDUCE_SIZE_BY_DESKTOPS: 'Select to reduce the defined assignment size.',
    SELECT_TO_REDUCE_SIZE_OF_FARM: 'Select to reduce the defined farm size.',
    DELETE_DESKTOP_RESOURCE_NOT_FOUND:
        'Failed to delete the selected Desktop because it cannot be found.',
    DELETE_DESKTOP_FAILED: 'Could not delete the selected desktop because VM creation is ' +
        'still in progress. Please wait for the task to complete and try again.',
    COULD_AFFECT_CONNECTED_USERS: 'This could affect users who are currently connected.',
    SHUTDOWN_STARTED: 'Shutdown request has been sent successfully.',
    SHUTDOWN_ERROR: 'An error occurred during shutdown.',
    REBOOT_STARTED: 'Restart request has been sent successfully.',
    REBOOT_ERROR: 'An error occurred during restart.',
    SUSPEND_STARTED: 'Suspend request has been sent successfully.',
    RESUME_STARTED: 'Resume request has been sent successfully.',
    POWER_ON_STARTED: 'Power-on request has been sent successfully.',
    POWER_OFF_STARTED: 'Power-off request has been sent successfully.',
    RESET_STARTED: 'Reset request has been sent successfully.',
    RESET_ERROR: 'An error occurred during reset.',
    LOGOFF_STARTED: 'Logoff request has been sent successfully.',
    DISCONNECT_STARTED: 'Disconnect request has been sent successfully.',
    REBUILD_STARTED: 'Rebuild request has been sent successfully.',
    REBUILD_ERROR: 'An error occurred during rebuild.',
    DELETE_DESKTOP_SUCCEEDED: 'Desktop deleted successfully.',
    DELETE_DESKTOP_REQUEST_SUBMISSION: 'Initiated deletion process. This can take some time. View progress on the Activity page.',
    DELETE_DESKTOP_STARTED: 'Deleting desktops.',
    NAME: 'Name:',
    NAME_NO_COLON: 'Name',
    IP_ADDRESS: 'IP Address:',
    IP_ADDRESS_LABEL: 'IP Address',
    DNS_NAME: 'DNS Name',
    OS_NAME: 'OS Name',
    PATTERN_IPADDRESS_HELP:
        'Click on the IP address to download RDP file to access image using RDP client.',
    PATTERN_DAAS_AGENT_HELP:
        'To publish the image, Agent Status must be Active. Agent Status can take a few minutes to load.',
    POWER: 'Power',
    USER_GROUPS: 'User Groups:',
    USER_GROUPS_NO_COLON: 'User Groups',
    GROUPS: 'Groups',
    USERS: 'Users',
    USERS_NUM: 'USERS ({0})',
    USER_NAME: 'Username:',
    USER_NAME_NO_COLON: 'User Name',
    DOMAIN: 'Domain:',
    DOMAIN_NO_COLON: 'Domain',
    ALL: 'All',
    DESKTOPS: 'Desktops',
    DESKTOPS_COLON: 'Desktops:',
    VIEW_ALL_DESKTOPS: 'View All Desktops',
    GROUP_NAME: 'Group Name:',
    GROUP_NAME_NO_COLON: 'Group Name',
    NAV_SETUP_USERS_MGMT: 'User Management',
    TWO_FACT_AUTH: '2 Factor Authentication',
    TWO_FACT_AUTH_COLON: '2 Factor Authentication',
    TWO_FACT_AUTH_TYPE: '2FA Type',
    TWO_FACT_AUTH_TYPE_COLON: '2FA Type',
    NEW_TWO_FACT_AUTH: 'New 2 Factor Authentication',
    NO_2_FACTOR_AUTH: '2 Factor Authentication has not been setup.',
    SETUP_2_FACTOR_AUTH: 'To setup a new 2 Factor Authentication, click New.',
    WELCOME_MSG: 'Welcome Administrator',
    PRODUCT_NAME: 'Horizon Cloud Manager',
    MONITOR: 'Monitor',
    SETTINGS: 'Settings',
    INVENTORY: 'Inventory',
    HELP: 'Help',
    SUPPORT: 'Support',
    ABOUT: 'About',
    CLOSE: 'Close',
    CONFIRM: 'Confirm',
    LOGOUT: 'Logout',
    DISCONNECT: 'Disconnect',
    LAUNCH_HORIZON_CONSOLE_BUTTON: 'VIEW IN LEO CONSOLE',
    SUCCESS_HCS_REPORT_DOWNLOAD:
        'Successfully submitted export request. Download the exported data at Reports -> Exported Reports -> HCS Reports.',
    ERROR_HCS_REPORT_DOWNLOAD:
    'Error occured while submitting export request. Please try again.',
    OK: 'OK',
    PROCEED: 'Proceed',
    PERFORM_ACTION: 'Perform this action',
    NEXT: 'Next',
    PREVIOUS: 'Previous',
    VALIDATE: 'Validate & Proceed',
    LOGGED_IN: 'Logged In',
    CREATE_NEW: 'Create New',
    IMPORT: 'Import',
    NEW: 'New',
    EDIT: 'Edit',
    EDIT_IMAGE: 'Rename',
    DUPLICATE: 'Duplicate',
    DELETE: 'Delete',
    DELETE_POD: 'Delete Pod',
    DELETING: 'Deleting',
    DELETED: 'deleted',
    DISABLE: 'Disable',
    UNLOCK: 'Unlock',
    UPLOAD: 'Upload',
    PATTERN_NAME: 'Image Name:',
    STATUS: 'Status',
    STATUS_COLON: 'Status:',
    ENABLED: 'Enabled',
    INITIATED: 'Initiated',
    ENABLED_COLON: 'Enabled:',
    DISABLED: 'Disabled',
    OS: 'OS',
    OS_COLON: 'OS:',
    MODIFIED: 'Modified',
    MODIFIED_COLON: 'Modified:',
    LAST_SESSION_DURATION: 'Last Session (Duration)',
    PATTERN: 'Image',
    YES: 'Yes',
    NO: 'No',
    DATE: 'Date',
    TIME: 'Time',
    HWVERSION: 'H/W Version:',
    VERSION: 'Version',
    VALIDITY: 'Validity',
    POWER_STATE: 'Power State',
    IN_USE: 'In Use:',
    AVAILABLE: 'Available:',
    AVAILABLE_NOCOLON: 'Available',
    NOTES: 'Notes',
    BACKUP_NAME: 'Backup Name',
    BACKUPNOW: 'Back Up Now',
    ROLLBACK: 'Rollback',
    ROLLBACK_SPACE: 'Roll back',
    ROLLBACK_AVAILABLE_LISTING: 'Some agent updates failed. Roll desktops back to the existing agent from the Desktops page.',
    REFRESH: 'Refresh',
    BACKUP: 'Back Up Now',
    BACKUP_LABEL: 'Backup',
    DESKTOP_POOL: 'Assignment',
    LOGINFORM_HEADING: 'Horizon Cloud Manager',
    LOGIN: 'Login',
    USERNAME: 'Username:',
    PASSWORD: 'Password:',
    PASSWORD_LABEL: 'Password',
    USERNAME_PLACEHOLDER: 'Username',
    PASSWORD_PLACEHOLDER: 'Password',
    USERNAME_REQUIRED: 'Username is required',
    PASSWORD_REQUIRED: 'Password is required',
    DOMAIN_REQUIRED: 'Domain is required',
    DESKTOP_POOLS: 'Desktop Pools',
    CREATE_DESKTOP: 'Create New',
    DELETE_DESKTOP: 'Delete',
    MORE: 'More',
    LESS: 'Less',
    SHUTDOWN: 'Shutdown',
    REBOOT: 'Restart',
    POWER_ON: 'Power On',
    POWER_OFF: 'Power Off',
    SUSPEND: 'Suspend',
    UNSUSPEND: 'Unsuspend',
    RESET: 'Reset',
    STANDBY: 'Standby',
    LOGOFF: 'Log Off',
    CANCEL: 'Cancel',
    ACCEPT: 'Accept',
    DECLINE: 'Decline',
    SUBMIT: 'Submit',
    SAVE_AND_EXIT: 'Save & Exit',
    BACK: 'Back',
    SAVE: 'Save',
    SET_UP: 'Set Up',
    PAP: 'PAP',
    CHAP: 'CHAP',
    'MS-CHAPv1': 'MS-CHAPv1',
    'MS-CHAPv2': 'MS-CHAPv2',
    RADIUS: 'Radius',
    RSA_SECURID: 'RSA SecurID',
    TWO_FACTOR_AUTH_METHOD: '2nd factor Auth Method:',
    FOR_EXTERNAL_CONNECTIONS: 'External Connections Only:',
    MAINTAIN_USER_NAME: 'Maintain Username:',
    USE_SECONDARY_SERVER: 'Use secondary server if primary not responding',
    PRIMARY_SERVER: 'Primary Server',
    SECONDARY_SERVER: 'Secondary Server',
    USER_PORTAL_NAME: 'Provider Name:',
    HOST_NAME_IP_ADDRESS: 'Host Name / IP Address:',
    AUTHENTICATION_PORT: 'Authentication Port:',
    ACCOUNTING_PORT: 'Accounting Port:',
    MECHANISM: 'Mechanism:',
    SHARED_SECRET: 'Shared Secret:',
    VERIFY_SHARED_SECRET: 'Verify Shared Secret:',
    VERIFY_SHARED_SECRET_DOES_NOT_MATCH: 'Shared secret does not match',
    SERVER_TIMEOUT: 'Server Timeout:',
    MAX_RETRIES: 'Max number of Retries:',
    RETRIES: 'Retries',
    REALM_PREFIX: 'Realm Prefix:',
    REALM_SUFFIX: 'Realm Suffix:',
    AUXILIARY_SERVER: 'Auxiliary Server:',
    EDIT_AUTHENTICATION: 'Edit:Authentication',
    CONFIGURATION: 'Configuration',
    MAINTENANCE: 'Maintenance',
    MAINTENANCE_NOTICE: 'Maintenance Notice',
    MAINTENANCE_NOTICE_LIMITS: '{0} / {1}',
    SMARTNODE_MAINTENANCE_NOTICE_MSG:
        'Following Horizon Cloud Pods are scheduled for maintenance.',
    UPLOAD_CONFIGURATION_FILE: 'Upload Configuration File:',
    CONFIGURATION_FILE: 'Configuration File',
    TEST: 'Test',
    ACTION: 'Action',
    CLEAR_LOCAL_NODE_SECRET_FILE_COLON: 'Clear Local Node Secret File:',
    RESTART_LOCAL_RSA_AGENT_COLON: 'Restart Local RSA Agent:',
    REMOVE_OFFLINE_RSA_COLON: 'Remove Offline RSA Files across Tenant Appliances',
    GRID_GROUPABLE_MSG: 'Drag columns here',
    ADD: 'Add',
    ADD_POD: 'Add Pod',
    REMOVE: 'Remove',
    RESUME: 'Resume',
    VIEW_ALL_USERS: 'View All Users',
    NAV_SETUP_GENERAL: 'General Settings',
    ROLES_AND_PERMISSIONS: 'Roles & Permissions',
    ROLES_AND_PERMISSIONS_CLARITY: 'Roles & Permissions',
    ENZO_APPLIANCE: 'First Private Data Center Appliance',
    ROLES: 'Roles',
    ADMIN_USERS: 'Admin Users',
    '2_FACTOR_AUTH': '2 Factor Auth',
    DEFAULT_POOL: 'Default Assignment',
    DEFAULT_DOMAIN: 'Default Domain',
    TIMEOUT: 'Time Out',
    LOCAL_LOGIN: 'Local Admin Account',
    USER_PORTAL_TIMEOUT: 'User Portal Timeout:',
    MYVMWARE_ACCOUNTS: 'My VMware Accounts',
    MYVMWARE_ACCOUNTS_DESC:
        'Create your first MyVMware account and grant access to more users.',
    MYVMWARE_USERS_TITLE: 'My VMware Users',
    MYVMWARE_CALL_FAILED: 'Unable to add user since the user already exists in the system',
    MYVMWARE_CALL_SUCCESS: 'Users are updated.',
    MYVMWARE_INFO_BUBBLE: 'A My VMware account has the form user1@vmware.com. ' +
        'The account must exist before it can be used to log in to Horizon Universal Console.',
    MYVMWARE_INFO_TEXT: 'Specify the My VMware accounts of the users you want ' +
        'to allow to login to Horizon Universal Console to use their account credentials to ' +
        'manage your environment.',
    FIRST_NAME_COLUMN: 'First Name',
    LAST_NAME_COLUMN: 'Last Name',
    VMWARE_ID: 'VMware ID',
    HORIZON_AIR: 'Horizon Cloud:',
    ENABLE_LOCAL_ACCOUNT: 'Enable Local Account:',
    ROLE: 'Role:',
    LOCAL_ACCOUNT_PASSWORD: 'Local Account Password',
    CONFIRM_PASSWORD: 'Confirm Password',
    CONFIRM_PASSWORD_COLON: 'Confirm Password:',
    CURRENT_ROLE_S: 'Current Role(s)',
    ROLE_CUSTOMER_ADMINISTRATOR: 'Customer Administrator',
    ROLE_CUSTOMER_HELPDESK: 'Customer Helpdesk',
    ROLE_CUSTOMER_HELPDESK_READONLY: 'Customer Helpdesk Readonly',
    ROLE_CUSTOMER_ADMIN_READONLY: 'Customer Administrator Readonly',
    PASSWORDS_DONT_MATCH: 'Passwords do not match',
    PASSWORDS_EMPTY: 'Passwords are empty',
    TIMEOUT_INFO: 'These settings specify the maximum idle times of Desktop ' +
        'Portal and Horizon Cloud sessions.',
    NAV_SETUP_SERVICE: 'Service Summary',
    ADMIN: 'Admins',
    TECH_CONTACT: 'Technical Contact',
    PROTOCOL: 'Protocol:',
    SESSION_QUOTA: 'Session Quota',
    MODEL_PROTOCOL_COMBO: 'Model/Protocol Combinations',
    PHONE: 'Phone:',
    CELLPHONE: 'Cell Phone:',
    EMAIL: 'Email:',
    TYPE: 'Type',
    DESKTOP_MANAGER: 'Pod:',
    DESKTOP_MANAGER_NO_COLON: 'Pod',
    DESKTOP_MANAGER_HELP_TEXT: 'Selected data center is configured with multiple pods. ' +
        'Pods contain specific images and model capacities for assignments. You can only create ' +
        'assignments from images in the same pod.',
    DESKTOP_MANAGER_HELP_TEXT_2: 'Selected data center is configured with multiple pods. ' +
        'Pods contain specific images and model capacities for assignments. You can only create ' +
        'assignments from images in the same pod.',
    SESSION_BASED: 'Session-based',
    SESSION_BASED_TITLE: 'Session Based',
    QUOTA: 'Quota',
    USED_COLON: 'Used:',
    FREE_COLON: 'Free:',
    USED: 'Used',
    FREE: 'Free',
    ACTIVE: 'Active',
    ACTIVE_PERCENTAGE: '{0}% Active',
    ACTIVE_NOTIFICATION: 'Active',
    ACTIVE_FILE: 'Active',
    POOLS: 'Assignments',
    READ: 'Read',
    INTERNAL_NETWORKS: 'Internal Networks',
    NETWORKS: 'Networks',
    NETWORKS_NOT_CONFIGED: 'Networks have not been configured.',
    BLACKLIST: 'Blacklist',
    AUTO_PACKAGE: 'Auto Package',
    IMAGE: 'Image',
    IMAGE_COLON: 'Image:',
    IMAGE_STATUS: 'Status',
    CREATED_BY: 'Created by',
    LAST_MODIFIED_BY: 'Last Modified by',
    LAST_MODIFIED: 'Last Modified:',
    VM_TYPE: 'Type:',
    SESSION_INTERVAL: 'Session Timeout Interval:',
    APPS: 'Applications:',
    PEAK: 'Peak',
    MODIFY_CAPACITY: 'Modify Capacity',
    DESKTOP_MODELS: 'Desktop Models',
    CREATE_DATE_COLON: 'Create Date:',
    UPDATE_DATE_COLON: 'Update Date:',
    N_DESKTOP_MODEL: '{0} Desktop Model',
    N_DESKTOP_MODELS: '{0} Desktop Models',
    TOTAL_CAPACITY: 'Total Capacity',
    TOTAL_CAPACITY_COLON: 'Total Capacity:',
    PEAK_CAPACITY: 'Peak Capacity',
    USED_CAPACITY: 'Used Capacity',
    DESKTOP_CAPACITY: 'Desktop Capacity',
    DESKTOP_CAPACITY_HELP_TEXT:
        'Maximum number of desktops that have been purchased at this data center.',
    SESSION_CAPACITY: 'Session Server Capacity',
    SESSION_CAPACITY_HELP_TEXT:
        'Maximum number of RDSH servers have been purchased at this data center.',
    DEFINITION: 'Definition',
    SELECT_ALL: 'Select All',
    UNSELECT_ALL: 'Deselect All',
    REMEMBER_ME: 'Remember Me',
    DELETE_NO_EMPTY_POOL: 'Unable to delete this assignment.',
    DELETE_NO_EMPTY_DEDICATED_POOL_DETAIL: 'Assignment that contains desktops cannot be deleted. Please delete all desktops from the assignment and try again.',
    DELETE_NO_EMPTY_POOL_DETAIL: 'Assignment that contains desktops/servers cannot ' +
        'be deleted. Please edit your assignment and set the capacity to zero to delete ' +
        'all desktops/servers from the assignment and try again.',
    DELETE_POOL_WITH_TASK: 'You cannot delete an assignment that has a pending or ' +
        'running task. Please wait for the task to complete and try again.',
    DELETE_POOL_MSG: 'Are you sure you want to delete <strong>{0}</strong> assignment?',
    DELETE_CUSTOMIZATION_ASSIGNMENT_MSG:
        'Are you sure you want to delete <strong>{0}</strong> customization assignment?',
    DELETE_POOL_SUCCEEDED: 'Assignment has been deleted successfully.',
    DELETE_POOL_INITIATED: 'Delete Assignment has been initiated successfully.',
    DELETE_POOL_DESC: 'This will permanently delete <strong>{0}</strong> assignment. ' +
        'Active user sessions will be interrupted and any unsaved data from these sessions ' +
        'will be permanently lost.',
    DELETE_CUSTOM_URL_REDIRECT_ASSIGNMENT_DESC: 'This will permanently ' +
        'delete <strong>{0}</strong> URL redirection configuration customization. Active user ' +
        'sessions will be interrupted and any unsaved data from these sessions will be ' +
        'permanently lost.',
    ASSIGNMENT_REFRESH_NEEDED_DISABLE_SERVER_COUNT: 'The Server count cannot be changed ' +
        'as this Assignment is using older version of the Image. Push Update from Image screen ' +
        'to this Assignment and then try again.',
    ASSIGNMENT_REFRESH_NEEDED_DISABLE_APP_LIST: 'The Application selection cannot be ' +
        'changed as this Assignment is using older version of the Image. Push Update from Image ' +
        'screen to this Assignment and then try again.',
    POOL_UPDATE_FAILED: 'Unable to update the Assignment. Please try again.',
    UPDATE_ASSIGNMENT_FAILED_DT_VGPU_POOL_EXPANSION: 'Unable to edit assignment because the system ' +
    'administrator has disabled vGPU pool expansion. For more information, contact the system administrator.',
    UPDATE_ASSIGNMENT_INVALID_POOL_SIZE: 'Assignment edit failed. Invalid assignment size. ' +
        'Max Desktops input must be a valid positive number and atleast the no. of existing/actual Desktops in the pool.',
    UPDATE_POOL_ASSIGNMENT_FAILED: 'Assignment edit was successful but failed to update ' +
        'some of the selected users and groups.',
    UPDATE_POOL_ASSIGNMENT_COMMAND_LINE_PARAM_FAILED: 'Assignment edit was successful but ' +
        'failed to update some of the command line parameters.',
    UPDATE_ASSIGNMENT_POOL_NAME_REQUIRED:
        'Assignment update failed. Assignment name is required.',
    UPDATE_ASSIGNMENT_GOLD_PATTERN_REQUIRED: 'Unable to update Assignment. Selected Image ' +
        'cannot be found. Please select a different Image and try again.',
    UPDATE_ASSIGNMENT_PROTOCOLS_UNSPECIFIED:
        'Assignment update failed. Protocols must be specified.',
    UPDATE_ASSIGNMENT_DEFAULT_PROTOCOL_UNSPECIFIED:
        'Assignment update failed. Default protocol must be specified.',
    UPDATE_ASSIGNMENT_MISSING_REQUESTED_SIZE:
        'Assignment update failed. Capacity must be specified.',
    UPDATE_ASSIGNMENT_MISSING_VM_NAME_COMP:
        'Assignment update failed. VM name must be specified.',
    UPDATE_ASSIGNMENT_MISSING_DAAS_TIMEOUT:
        'Assignment update failed. Session timeout must be specified.',
    UPDATE_ASSIGNMENT_MISSING_POOL_POLICIES:
        'Assignment update failed. Assignment policies must be specified.',
    UPDATE_ASSIGNMENT_MISSING_MIN_FREE_RUNNING:
        'Assignment update failed. Minimum free running VM count must be specified.',
    UPDATE_ASSIGNMENT_MISSING_MAX_FREE_RUNNING:
        'Assignment update failed. Maximum free running VM count must be specified.',
    UPDATE_ASSIGNMENT_NETWORK_REQUIRED:
        'Assignment update failed. Network Mapping for super tenant must be specified.',
    UPDATE_ASSIGNMENT_INVALID_POOL_NAME: 'Assignment update failed. Invalid assignment name.',
    UPDATE_ASSIGNMENT_DUPLICATE_POOL_NAME:
        'Unable to update Assignment. Assignment Name entered in Definition tab is already ' +
        'in use. Please enter different Assignment Name and try again.',
    UPDATE_ASSIGNMENT_INVALID_REMOTE_APP_NAME: 'Unable to update Assignment. Selected ' +
        'application cannot be found. Please remove this Application and try again.',
    UPDATE_ASSIGNMENT_POOL_PROTOCOL_MISMATCH: 'Assignment update failed. Protocol mismatch.',
    UPDATE_ASSIGNMENT_ILLEGAL_GP_CHANGE: 'Assignment update failed. Illegal image change.',
    UPDATE_ASSIGNMENT_INVALID_GOLD_PATTERN_ID: 'Unable to update Assignment. Selected Image ' +
        'cannot be found. Please select a different Image or try again.',
    UPDATE_ASSIGNMENT_GOLD_PATTERN_POWERED_ON_OR_REQUIRES_RESEAL:
        'Unable to update Assignment. Selected Image is in Offline mode. Please publish this ' +
        'Image or select a different Image and try again.',
    UPDATE_ASSIGNMENT_GOLD_PATTERN_GRAPHICS_SETTING_UNSUPPORTED:
        'Unable to update Assignment. Selected Image supports 3D Graphics, however this feature ' +
        'is not enabled for this tenant. Please check with your service provider.',
    UPDATE_ASSIGNMENT_PATTERN_DATASTORE_NOT_FOUND:
        'Unable to update Assignment. Datastore associated with the Image used in this ' +
        'assignment cannot be found. Please contact your service provider.',
    UPDATE_ASSIGNMENT_AGENT_VERSION_ERROR: 'Unable to update Assignment. The Image used by ' +
        'this Assignment does not have a valid agent version. Please check the Image and ' +
        'Agent on it and try again.',
    UPDATE_ASSIGNMENT_INVALID_VM_ROOT_NAME:
        'Assignment update failed. VM name validation failed.',
    UPDATE_ASSIGNMENT_DUPLICATE_VM_ROOT_NAME: 'Unable to update Assignment.  ' +
        'VM Name entered in Definition tab already exists. Please enter different ' +
        'VM Name and try again.',
    UPDATE_ASSIGNMENT_INVALID_MAX_POWERED_ON_VMS:
        'Assignment update failed. Maximum free running VM count is invalid.',
    UPDATE_ASSIGNMENT_INVALID_MIN_POWERED_ON_VMS:
        'Assignment update failed. Minimum free running VM count is invalid.',
    UPDATE_ASSIGNMENT_INVALID_SESSION_TIMEOUT:
        'Assignment update failed. Agent session timeout is invalid.',
    UPDATE_ASSIGNMENT_INVALID_ORGANIZATIONAL_UNIT: 'Unable to update Assignment. ' +
        'Computer OU entered in Definition tab is invalid. Please enter valid Computer ' +
        'OU and try again.',
    UPDATE_ASSIGNMENT_GROUP_NOT_FOUND: 'Unable to update Assignment. Selected user ' +
        'group cannot be found. Please remove this user group and try again.',
    UPDATE_ASSIGNMENT_INVALID_CUSTOMER_ID: 'Unable to update Assignment. Customer ' +
        'ID entered in Definition tab is invalid. Please enter valid Customer ID and try again.',
    UPDATE_ASSIGNMENT_ILLEGAL_CUSTOMER_ID: 'Assignment update failed. Customer ID is ' +
        'populated but tenant is not a super tenant.',
    UPDATE_ASSIGNMENT_INVALID_NETWORK_ASSIGNMENT: 'Unable to update Assignment. ' +
        'Selected Network in Definition tab is invalid. Please select valid Network and try again.',
    UPDATE_ASSIGNMENT_NETWORK_POOL_ASSIGNMENT_NOT_ENABLED:
        'Assignment update failed. Network to pool assignment is not enabled.',
    UPDATE_ASSIGNMENT_NETWORK_NOT_ASSIGNED_TO_DESKTOP_MANAGER:
        'Unable to update Assignment. Selected Network in Definition tab is not valid. ' +
        'Please select valid Network and try again.',
    UPDATE_ASSIGNMENT_INSUFFICIENT_PROTOCOL_QUOTA: 'Unable to update Assignment. ' +
        'The remaining protocol quota for one or more protocols is insufficient to satisfy ' +
        'the provisioning request. Please contact service provider to increase protocol capacity.',
    UPDATE_ASSIGNMENT_INSUFFICIENT_DESKTOP_MODEL_QUOTA: 'Unable to update Assignment. ' +
        'The selected desktop model does not have enough capacity to enable this change. ' +
        'Please reduce the capacity for this assignment or buy more capacity and try again.',
    UPDATE_ASSIGNMENT_UNSUPPORTED_GOLD_PATTERN_AGENT_VERSION: 'Expanding pools with ' +
        'gold patterns having agent version older than 16.6 is not supported with the current ' +
        'agent pairing mode.',
    UPDATE_ASSIGNMENT_ILLEGAL_SIZE_CHANGE:
        'Assignment update failed. Illegal capacity change.',
    UPDATE_ASSIGNMENT_ILLEGAL_SIZE_CHANGE_REFRESH: 'Unable to update Assignment. ' +
        'This Assignment is undergoing refresh at this moment, and its capacity cannot ' +
        'be changed during this process. Please try again later.',
    UPDATE_ASSIGNMENT_ILLEGAL_SIZE_CHANGE_USERS_LOGGED_IN: 'Unable to update Assignment. ' +
        'Entered Capacity is less than total no. of Desktops in use for this Assignment. ' +
        'Please enter suitable capacity and try again.',
    UPDATE_ASSIGNMENT_GRAPHICS_UNSUPPORTED: 'Unable to update Assignment. Selected Desktop ' +
        'supports 3D Graphics, however this feature is not enabled for this tenant. Please check ' +
        'with your service provider.',
    UPDATE_ASSIGNMENT_DESKTOP_MANAGER_RETRIEVAL_FAILED: 'Unable to update Assignment. ' +
        'Selected Pod in Definition tab is invalid. Please select valid Pod and try again.',
    UPDATE_ASSIGNMENT_INSUFFICIENT_COMPUTE_CAPACITY: 'Unable to update Assignment. Does ' +
        'not have enough capacity to create this assignment. Please reduce the capacity for this ' +
        'assignment or buy more capacity and try again.',
    UPDATE_ASSIGNMENT_DESKTOP_MODEL_RETRIEVAL_FAILED: 'Unable to update Assignment. ' +
        'Selected Desktop Model in Definition tab is invalid. Please select valid Desktop ' +
        'Model and try again.',
    UPDATE_ASSIGNMENT_ILLEGAL_REMOTE_APP_CHANGE_GP_VERS: 'Assignment update failed. ' +
        'No additions of remote applications or assignment expansions are allowed if the image ' +
        'version has changed. Refresh is required',
    UPDATE_ASSIGNMENT_APPLICATION_NOT_FOUND: 'Assignment update failed. Unable to locate an ' +
        'application in the application catalog using the application ID passed in and related ' +
        'to the image associated with the assignment',
    UPDATE_ASSIGNMENT_ILLEGAL_CHANGE_REFRESH: 'Assignment update failed. No changes are ' +
        'allowed to an assignment that is in the refresh process',
    UPDATE_ASSIGNMENT_GOLD_PATTERN_DISABLED: 'Assignment update failed.Image associated ' +
        'with the assignment is disabled.',
    UPDATE_ASSIGNMENT_ILLEGAL_GRAPHICS_CHANGE: 'Unable to update the Assignment. The 3D ' +
        'graphics configuration of an existing assignment cannot be changed.',
    UPDATE_ASSIGNMENT_FAILED_TO_TRANSMIT_APP_CHANGES: 'Assignment was updated, but it could ' +
        'not transmit the Remote Application changes down to the RDS Servers.',
    UPDATE_ASSIGNMENT_HOTPLUG_SIZE_CHANGE_ERROR: 'Unable to update the Assignment. The ' +
        'hot-plug setting cannot be changed at the same time the capacity is changed.',
    UPDATE_ASSIGNMENT_HOTPLUG_CONFLICTING_TASKS_ERROR: 'Unable to update the Assignment. ' +
        'The hot-plug setting cannot be changed while other tasks are running for the same ' +
        'assignment. Please try again later.',
    UPDATE_ASSIGNMENT_ILLEGAL_GP_CHANGE_UATASK: 'Unable to update the assignment because ' +
        'gold pattern has update agents task running.',
    UPDATE_ASSIGNMENT_ILLEGAL_SIZE_CHANGE_UATASK: 'Unable to update the assignment because ' +
        'update agents task is running or queued.',
    UPDATE_ASSIGNMENT_POOL_TASK_POOL_EXPANSION_ERROR: 'Unable to modify pool, a pool ' +
        'expansion operation is in progress.',
    UPDATE_ASSIGNMENT_POOL_TASK_DELETE_ERROR: 'Unable to modify pool, a delete operation is in progress',
    UPDATE_ASSIGNMENT_POOL_TASK_VM_MIGRATION_ERROR: 'Unable to modify pool, VM migration operation is in progress.',

    CANNOT_REVERT_IMAGE_MORE_INFO: 'The selected image is in use by assignments. Please ' +
        'ensure that this image is not in use by any assignments and try again.',
    CANNOT_REVERT_IMAGE_MORE_INFO_RDSH: 'The selected image is in use by an RDSH Farm. ' +
        'Please ensure that this image is not in use by an RDSH Farm and try again.',
    CANNOT_REVERT_IMAGE: 'Image cannot be converted to a desktop.',
    REVERT_IMAGE_CONFIRMATION:
        'Are you sure you want to convert the selected image to desktop?',
    REVERT_IMAGE_FAILED: 'Unable to convert the image to desktop. Please try again.',
    REVERT_SUCCEEDED_UNRESERVE_FAILED: 'Unable to complete the convert image process. ' +
        'Image is no longer a valid Image. Please try again.',
    NO_POOLS_AVAILABLE_FOR_REFRESH:
        'No assignments found containing Desktops that can be refreshed at this time.',
    REFRESH_DYNAMIC_POOL_INFO1: 'This action will push an image refresh to Floating ' +
        'and RDSH Assignments based on previous version of this image. Please select the one ' +
        'or more Assignments below to refresh all desktops/servers in those Assignments.',
    REFRESH_DYNAMIC_POOL_INFO2: 'You can reserve a percentage (0-99) of VMs in the ' +
        'assignment to always be available during the refresh.',
    RESERVE_VM_PERCENTAGE: 'Reserve VM percentage:',
    REFRESH_RESERVE_VALID_INTEGER_REQUIRED:
        'A valid integer between 0 and 99 is required in this field.',
    FAILED_TO_FETCH_ASSIGNMENT_LIST: 'Unable to retrieve list of assignments. ' +
        'Click try again to reload, or click Cancel to go back.',
    NAV_MONITOR_LNK: 'Monitor Link',
    DRAG_COLUMN_GROUP: 'Drag column here to group by...',
    RELEASE: 'Release',
    BUILD: 'Build',
    ABOUT_STATEMENT: 'This is a small blurb about Horizon Cloud Manager release. ' +
        'It shows the release notes and release credits here.',
    COPYRIGHT: '\u00a9 1998-2021 VMware, Inc. All rights reserved.',
    TUTORIAL: 'Tutorial:',
    TERMS_OF_SERVICE_LINK: '<a href="{0}" target="_blank" rel="noopener">Click here</a> ' +
        'to open Terms of Service in a new window.',
    TERMS_OF_SERVICE_TEXT: 'Please read the below terms of services agreement carefully ' +
        'before using the service. By clicking \'Accept\' below, you acknowledge that you have ' +
        'read, understood and agreed to these terms of service. If you do not agree to these ' +
        'terms of service click \'Decline\'.',
    TERMS_OF_SERVICE: 'Terms Of Service',
    I_AGREE: 'I Agree',
    DISAGREE: 'Disagree',
    DISAGREE_MESG: '{0} will not get updated for selected assignments.',
    ACCEPT_TERMS_OF_SERVICE_FAILED: 'Failed to accept terms of service',
    MANAGING_INVENTORY: 'Managing your inventory',
    INVENTORY_OVERVIEW: 'Inventory Overview',
    TOPICS: 'Topics:',
    REMOTE_APPS: 'Applications',
    NOT_AVAILABLE: 'NA',
    DOWNLOAD_CERTIFICATE: 'Download Certificate',
    DASHBOARD_REFRESH: 'Next refresh in {0}',
    OVERVIEW: 'Overview',
    REFRESH_NOW: 'Refresh Now',
    N_MIN: '{0} min',
    N_SEC: '{0} sec',
    CAPACITY_CHART_TITLE: 'Desktop Capacity Allocation',
    USAGE_TITLE: 'Connections',
    CONNECTION_TITLE: 'Connection States',
    OTHER: 'Other',
    DESKTOP_ALREADY_ASSIGNED: 'The desktop is already assigned to {0}.',
    DESKTOP_MULTIPLE_USERS: 'This Dedicated Desktop is being assigned to ' +
        'more than one User. A desktop can only be used by one user at a time.',
    DESKTOP_ALREADY_ASSIGNED_WARNING: 'This Dedicated Desktop is already assigned to {0}. A desktop can only be used by one user at a time. When multiple users are assigned to the Desktop and a user is already logged in, other users will be unable to log-in and see an error message. </br> Click "Continue" to proceed with assigning this desktop to multiple users  or "Cancel" to go back and remove current user assignment.',
    ASSIGN_USER: 'Assign User',
    CONTINUE: 'Continue',
    IDLE: 'Idle',
    IDLE_PERCENTAGE: '{0}% Idle',
    REMOVE_USER: 'Remove User',
    REMOVE_DEDICATED_POOL_GROUP: 'You are about to remove Groups. ' +
        'Do you want users of these Groups to keep assigned Desktops?',
    REMOVE_DEDICATED_POOL_GROUP_DESC: 'Users will appear as entitled to this ' +
        'assignment if desktops are kept.',
    REMOVE_USER_WITH_ASSIGNED_DESK:
        'You are about to remove users who may have assigned desktops.',
    REMOVE_USER_WITH_ASSIGNED_DESK_DESC:
        'Following users assigned to the desktop will be removed: {0}.',
    REMOVE_USER_WITH_POOL_ASSOCIATION:
        'Please remove the user from the Assignment so they cannot associate with it.',
    REMOVE_USER_WITH_POOL_ASSOCIATION_MSG:
        'This action will unassign selected user(s) from {0} and close any active sessions.',
    IMAGE_OFFLINE: 'The associated Image is offline.',
    APP_MAPPING_REMOVED: 'Application mappings will be removed.',
    APP_MAPPING_REMOVED_DESC:
        'All application mappings will be removed if the server count is reduced to 0.',
    CANNOT_SELECT_APPS_SERVER_ZERO: 'Cannot select applications when the servers count is 0.',
    SEE_ALL: 'See all...',
    CAP_MIN: 'Min',
    RSA: 'RSA SecurID',
    ENTITY: 'Entity',
    TARGET: 'Target',
    NATIVE_APPS: 'Native Application',
    CUSTOMIZATION_SERVICE: 'Customization',
    NOW: 'Now',
    NEXT_LOGON: 'Next Logon',
    TYPE_COLON: 'Type:',
    SIZE_COLON: 'Size:',
    DESKTOP_MODEL_TYPE_COLON: 'Type:',
    DESKTOP_MODEL_TYPE_DYNAMIC: 'dynamic',
    DESKTOP_MODEL_TYPE_SELECTABLE: 'selectable',
    DESKTOP_MODEL_TYPE_STATIC: 'static',
    REMOTE: 'Remote',
    NATIVE: 'Native',
    LOCAL: 'Local',
    SERVICE_NAME_COLON: 'Assignment Name:',
    SERVICE_NAME_HELP_TEXT: 'Assignment Name Help Text',
    APP_OS_HELP_TEXT: 'App OS Help text',
    COMP_NAME_PREFIX_COLON: 'Computer Name Prefix:',
    COMP_NAME_PREFIX_MAX_LENGTH:
        'Computer name prefix can not be more than 64 characters long.',
    COMP_NAME_PREFIX_HELP_TEXT: 'Comp name prefix help text',
    EFFECTIVE_COLON: 'Effective:',
    EFFECTIVE_HELP_TEXT: 'Effective help text',
    ASSIGNED_USERS: 'Assigned Users',
    ITEM_COUNT: '{0} item(s)',
    POOL_NEEDS_REFRESH: 'The Assignment needs to be refreshed using a Push Update from ' +
        'the Image screen because a newer version is available.',
    TEST_AUTH: 'Test Authentication',
    PASSCODE_COLON: 'Passcode:',
    TEST_TWO_FACTOR_AUTH_RSA_STRING:
        'Enter your credentials to verify the authentication is configured correctly.',
    TEST_TWO_FACTOR_AUTH_RSA_DT_AUTHENTICATION_FAILURE:
        'Failed to authenticate using RSA SecurID. Please try again.',
    TEST_TWO_FACTOR_AUTH_RSA_DT_INVALID_INPUT:
        'Invalid RSA username or passcode. Please try again.',
    TEST_TWO_FACTOR_AUTH_RADIUS_DT_AUTHENTICATION_FAILURE:
        'Failed to authenticate using the RADIUS method. Please try again.',
    TEST_TWO_FACTOR_AUTH_RADIUS_DT_INVALID_INPUT:
        'Invalid RADIUS username or passcode. Please try again.',
    NEW_RSA_CONFIGURED: 'Successfully created 2nd Factor Auth (RSA).',
    RSA_CONF_FILE_UPLOAD_FAILED: 'Failed to upload RSA configuration file. Please try again.',
    CONFIGURING_RSA_FAILED: 'Failed to create 2nd Factor Auth (RSA). Please try again.',
    EDIT_TWO_FACT_AUTH_RSA: 'Edit: RSA SecurID',
    EDIT_TWO_FACT_AUTH_RADIUS: 'Edit: RADIUS',
    RSA_EDITED: 'Successfully updated 2nd Factor Auth (RSA).',
    RADIUS_EDITED: 'Successfully updated 2nd Factor Auth (Radius).',
    EDITING_RSA_FAILED: 'Failed to edit 2nd Factor Auth (RSA). Please try again.',
    EDITING_RADIUS_FAILED: 'Failed to edit 2nd Factor Auth (RADIUS). Please try again.',
    RSA_TEST_AUTH_SUCCESSFUL: 'Successfully authenticated 2nd Factor Auth (RSA).',
    RADIUS_TEST_AUTH_SUCCESSFUL: 'Successfully authenticated 2nd Factor Auth (Radius).',
    DISABLE_RSA_CONFIRMATION:
        'Are you sure you want to disable RSA SecurID 2 Factor Authentication?',
    RSA_DISABLE_SUCCESSFUL: '2nd Factor Auth (RSA) has been disabled successfully.',
    RSA_DISABLE_FAILED: 'Failed to disable 2nd Factor Auth (RSA). Please try again.',
    RSA_RESTART_AGENT: 'Restart Local RSA Agent',
    RSA_REMOVE_OFFLINE_FILES: 'Remove Offline RSA files',
    RSA_CLEAR_LOCAL_NODE: 'Clear RSA Local Node Secret File',
    RESTART_RSA_AGENT_CONFIRMATION: 'Are you sure you want to restart Local RSA Agent?',
    RESTART_RSA_AGENT_SUCCESSFUL: 'Successfully Restarted Local RSA Agent',
    RESTART_RSA_AGENT_FAILED: 'Failed to restart Local RSA Agent. Please try again.',
    CLEAR_LOCAL_NODE_CONFIRMATION: 'Are you sure you want to clear Local Node Secret File?',
    CLEAR_LOCAL_NODE_SUCCESSFUL: 'Successfully Cleared Local Node Secret File',
    CLEAR_LOCAL_NODE_FAILED: 'Failed to clear Local Node Secret File. Please try again.',
    REMOVE_OFFLINE_FILES_CONFIRMATION:
        'Are you sure you want to remove Offline RSA files across Tenant Appliances?',
    REMOVE_OFFLINE_FILES_SUCCESSFUL: 'Successfully Removed Offline RSA files',
    REMOVE_OFFLINE_FILES_FAILED:
        'Failed to remove Offline RSA files across Tenant Appliances. Please try again.',
    TEST_TWO_FACTOR_AUTH_RADIUS_STRING:
        'Enter your credentials to verify the authentication is configured correctly.',
    NEW_RADIUS_CONFIGURED: '2nd Factor Auth (RADIUS) created successfully.',
    CONFIGURING_RADIUS_FAILED: 'Failed to create 2nd Factor Auth (RADIUS). Please try again.',
    DISABLE_RADIUS_CONFIRMATION:
        'Are you sure you want to disable RADIUS 2 Factor Authentication?',
    RADIUS_DISABLE_SUCCESSFUL: '2nd Factor Auth (RADIUS) disabled successfully.',
    RADIUS_DISABLE_FAILED: 'Failed to disable 2nd Factor Auth (RADIUS). Please try again.',
    EDIT_GENERAL_SETTINGS_SUCCEEDED: 'Successfully updated General Settings.',
    EDIT_GENERAL_SETTINGS_FAILED:
        'Failed to update all the General Settings. Please check the values and try again.',
    EDIT_GENERAL_SETTINGS_SECTION_SUCCEEDED: 'Successfully updated {0} Setting.',
    EDIT_GENERAL_SETTINGS_SECTION_FAILED:
        'Failed to update {0} Setting. Please check the values and try again.',
    EDIT_MONITORING_SETTINGS_FAILED_DAAS:
        'Failed to update Monitoring Setting. Please check the values and try again. ' +
        'For non-Horizon Cloud customer, Cloud Monitoring feature is not supported yet and could not be configured.',
    VALID_URL_REQUIRED: 'A valid URL is required in this field.',
    UNIQUE_URL_REQUIRED: 'A unique URL is required in this field.',
    VALID_EMAIL_REQUIRED: 'A valid Email is required in this field.',
    VALID_PHONE_REQUIRED: 'A valid Phone Number is required in this field.',
    VALID_TIMEOUTVAL_REQUIRED: 'A valid integer between 1 and 10080 is required.',
    CLIENT_IDLE_TIMEOUT_LARGE:
        'Idle User Timeout can not be greater than the Broker Session Timeout.',
    CLIENT_IDLE_TIMEOUT_SMALL:
        'Idle User Timeout can not be smaller than the Heartbeat Interval.',
    SUPER_ADMIN_DESC:
        'Super Admin has full control of the tenant and make any changes to this system.',
    READONLY_ADMIN_DESC: 'Read only Admin can only view the details of the tenant ' +
        'and can not make any changes to this system.',
    APPSTACKS: 'AppStacks',
    APPSTACK_COLON: 'AppStack:',
    ACTIVE_USER: 'Active User',
    ACTIVE_USERS: 'Active Users',
    HOST_COMPUTER: 'Host Computer',
    APP_VOLUMES_AGENT: 'App Volumes Agent',
    APPS_NO_COLON: 'Applications',
    VCENTER: 'vCenter',
    VCENTER_COLON: 'vCenter:',
    VCENTER_LOCATION: 'vCenter Location',
    SERVICES: 'Assignments',
    OPERATING_SYSTEM: 'Operating system',
    COPY_NEW_DESKTOP: 'New Desktop',
    DESKTOP_ERROR_NAME_MAX_LENGTH: 'The desktop name cannot exceed {0} characters.',
    APP_BUNDLE_NAME_MAX_LENGTH: 'The new Name cannot be more than 100 characters long.',
    COPY_IMAGE_TEXT:
        'The Image will be copied as a Desktop, which can be used to create a new Image.',
    COPY_IMAGE_ERROR: 'Failed to initiate the copy of the selected Image. Please try again.',
    COPY_IMAGE_DT_RESOURCE_ALREADY_EXIST: 'Failed to initiate the copy of the selected ' +
        'Image. A VM with the same name already exists.',
    COPY_IMAGE_SUCCEEDED: 'The Image copy is in progress.',
    COPY: 'Copy',
    COPY_COLON: 'Duplicate:',
    SESSIONS: 'Sessions',
    APPSTACKS_COUNT: '{0} AppStacks',
    APPSTACK_COUNT: '{0} AppStack',
    WRITABLE_VOLUME_COLON: 'Writable Volume:',
    WRITABLE_VOLUME_DELETE_WARNING: 'Deleting an Assignment that has Writable Volume turned ' +
        'on will only disable the Writable Volume.  Create a new Assignment with the same OS, ' +
        'Computer Prefix and Users to allow them access to their Writable Volume again.',
    FILE_NAME: 'File Name:',
    FILE_TYPE: 'File Type:',
    TEMPLATE: 'Template:',
    CAPTURE_VERSION: 'AppCapture Version:',
    SHOW_ALL_NOTIFICATIONS: 'Show all',
    CLEAR_ALL_NOTIFICATIONS: 'Clear all',
    NO_NEW_NOTIFICATION: 'You don\'t have any notifications at this time.',
    RESYNC_VM: 'Recover',
    RESYNC_VM_CONFIRMATION: 'Would you like to recover Desktops that encountered ' +
        'an error during the previous Image update?',
    RESYNC_VM_MORE_INFO: 'Changes will not be made if all the desktops ' +
        'were successfully updated previously.',
    RESYNC_VM_SUCCEEDED: 'Desktop recovery is in progress.',
    RESYNC_VM_ERROR: 'Failed to initiate the recovery of Desktops in the ' +
        'selected Assignment. Please try again.',
    NGVC_EDIT_ASSIGNMENT_SUCCEEDED: 'Successfully edited the Assignment. ' +
        'The Image update is in progress on the Desktops.',
    NGVC_EDIT_ASSIGNMENT_RESYNC_FAILED: 'The Assignment was edited successfully, but The Image update failed to update on the Desktops.  Please try again by clicking the "Recover" button.',
    NGVC_EDIT_ASSIGNMENT: 'The Image update is in progress on the Desktops.',
    NGVC_EDIT_ASSIGNMENT_FAILED_RESYNC_FAILED: 'The Image update on the Desktops failed.',
    NGVC_EDIT_IMAGE_MESSAGE: 'Selecting a new Image will initiate an Image update ' +
        'on the Desktops when changes are saved.',
    REFRESH_NGVC_POOL: 'This action will update any instant clone Assignments using ' +
        'this Image. Please select the one or more Assignments below to refresh all ' +
        'desktops/servers in those Assignments.',
    GETTING_STARTED_TITLE: 'Getting Started',
    INFRASTRUCTURE_TITLE: 'Infrastructure',
    INFRASTRUCTURE_HELP_TEXT: 'Issues related to Active Directory, NTP Service, Hypervisor Manager, ' +
        'Azure Service, AD Domain, App Volumes, vIDM, Cloud Connector, Connection Server, Universal Broker, Virtual Center, Gateway, Saml Authentication, SSO Connector.',
    SMART_NODE: 'Horizon Cloud Pod',
    SMARTNODE_DESC: 'Cloud connection working.',
    UPDATE: 'Update',
    UPDATED: 'updated',
    SCHEDULE_UPDATE: 'Schedule Update',
    PICK_DATE_TIME: 'Pick Date and Time',
    UPDATE_SOFTWARE_VERSION_HEADER: 'Update Software Version',
    UPDATE_SOFTWARE_VERSION_TEXT: 'New version is available for update.',
    UPDATE_SOFTWARE_VERSION_NOTIFICATION_TEXT: 'New Software version update available, v{0}.',
    UPGRADE_SCHEDULED_SUCCESSFULLY: 'Pod upgrade scheduled successfully.',
    POD_UPGRADE_UNDERWAY_NOTIFICATION_TEXT: 'Currently, Horizon Cloud Pod upgrade is ' +
        'in progress. Please try again later.',
    UPGRADE_FAILED: 'Pod cannot be scheduled at this time.',
    SMARTNODE_UPGRADE_NOT_AVAILABLE: 'There is no upgrade version available for this pod.',
    SMARTNODE_PAST_DATE_ERROR: 'Selected date and time cannot be in the past.',
    SMARTNODE_INVALID_DATE_ERROR: 'Date and time must use the format M/D/YYYY 12:00 AM.',
    COLLECT_LOGS: 'Collect Logs',
    COLLECT_LOGS_ERROR: 'Unable to download pod Logs at this time.',
    COLLECT_LOGS_SUCCESS: 'Pod logs are downloaded successfully.',
    COLLECT_LOGS_APPLIANCE_SUCCESS: 'Appliance logs are downloaded successfully for : {0}',
    COLLECT_LOGS_APPLIANCE_ERROR: 'Unable to download logs at this time for : {0}',
    GENERAL_SETUP: 'General Setup',
    IMPORT_VM: 'Import VM',
    GETTING_STARTED_IMPORT_VM_DESC_CLARITY: 'At least one image is required. This image will be ' +
        'used as the OS on your virtual desktops. Depending on the mode of your deployment, ' +
        'you can <a href=\'#/app/imported-vms\' linkIdentifier="portalLinkInAstro">import</a> an OS image and convert it into an  ' +
        '<a href=\'#/templates\'>image</a>.',
    GETTING_STARTED_IMPORT_VM_DESC: 'At least one image is required. This image will be ' +
        'used as the OS on your virtual desktops. Depending on the mode of your deployment, ' +
        'you can <a href=\'#/setup/imported\'>import</a> an OS image and convert it into an  ' +
        '<a href=\'#/templates\'>image</a>.',
    GETTING_STARTED_IMS_AZURE_IMPORT_VM_DESC: 'To import a Microsoft Azure VM and create an image that must be published individually ' +
        'to each Horizon Cloud pod on Microsoft Azure, click the button.<br/>To import an image that automatically replicates to other pods ' +
        'on the same cloud platform (VMware SDDC or Microsoft Azure) when published, go to ' +
        '<a href="#/app/image-catalog" linkIdentifier="portalLinkInAstro">Inventory>Images - Multi-Pod</a>.',
    DESKTOP_SERVICE: 'Desktop Assignment',
    APP_SERVICE: 'Application Assignment',
    COMMON_CAPTURE: 'AppCapture',
    MS_AZURE_BRACKETS: '(Microsoft Azure)',
    VMWARE_SDDC_BRACKETS: '(VMware SDDC)',
    CREATE_NEW_APP_SERVICE: 'Create New Application Assignment',
    CREATE_NEW_SHARE_LOCATION: 'Customization Share Location',
    CREATE_NEW_CUSTOM_SERVICE: 'Create a New Customization Assignment',
    CONFIG: 'Configure',
    CHOOSE: 'Choose',
    HIDE_GETTING_STARTED_HEADER: 'Are you sure you want to hide the Getting Started Wizard?',
    SHOW_GETTING_STARTED_HEADER: 'Are you sure you want to show the Getting Started page?',
    HIDE_GETTING_STARTED_WARNING: 'You can find it under Settings.',
    GETTING_STARTED_SMARTNODE_DESC:
        'To add a Horizon Cloud Pod, follow the Getting Started instructions.',
    GETTING_STARTED_AD_DESC: 'Register your domain to add administrators, grant permissions, ' +
        'and assign desktops and applications to users.',
    GETTING_STARTED_RBAC_DESC: 'Role based access allows you to control who has access to ' +
        'this management console based on their roles.',
    GETTING_STARTED_VROPS_DESC:
        'Ensure that the vROps server is deployed and running before configuring.',
    GETTING_STARTED_COMMON_CAPTURE_DESC: 'Run the App Volumes capture tool to ' +
        'scan your available applications and add them. Complete this step outside the Getting ' +
        'Started, before creating an Application Assignment.',
    GETTING_STARTED_COMMON_CAPTURE_VROPS: 'Run the App Volumes capture tool to leverage ' +
        'VMware vRealize Operations Manager to provide real-time systems health and user ' +
        'experience performance data.Complete this step outside the Getting Started Wizard, ' +
        'using an API to get the data before creating an application assignment.',
    GETTING_STARTED_APP_DESC:
        'Create your first set of applications and assign them to users.',
    GETTING_STARTED_IMAGE_DESC: 'At least one image is required. ' +
        'This image will be used as the OS on your virtual desktop(s).',
    GETTING_STARTED_IMS_AZURE_IMAGE_DESC: 'To create an image that must be published individually ' +
        'to each Horizon Cloud pod on Microsoft Azure, click the button.<br/>To create an image that ' +
        'automatically replicates to other pods on the same cloud platform (VMware SDDC or Microsoft Azure) when published, ' +
        'go to <a href="#/app/image-catalog" linkIdentifier="portalLinkInAstro">Inventory>Images - Multi-Pod</a>. At least one image is required.',
    GETTING_STARTED_DESKTOP_DESC: 'Create a desktop assignment that ' +
        'assigns users to desktops provisioned by a desktop farm.',
    GETTING_STARTED_LOCATION_DESC:
        'Configure the Customization Share Location to enable Customization capabilities.',
    GETTING_STARTED_VCENTER_DESC:
        'Register the vCenter Location you would like to use for Application delivery.',
    GETTING_STARTED_APP_FILE_SHARE_DESC: 'Register one or more CIFS file share(s) where ' +
        'you will copy the applications generated by AppCapture.',
    GETTING_STARTED_CUSTOM_SERVICE_DESC:
        'Manage what your end users see and control application access.',
    GETTING_STARTED_CAPACITY_HELP: 'Add capacity using either an private data center ' +
        'hybrid cloud solution or the Cloud hosting solution. During this process, ' +
        'pods will be added to enable desktop and application delivery.',
    GETTING_STARTED_VMWARE_SDDC_CAPACITY_HELP: 'Add a VMware SDDC capacity using either an private data center ' +
        'hybrid cloud solution or the Cloud hosting solution. During this process, ' +
        'pods will be added to enable desktop and application delivery.',
    GETTING_STARTED_GENERAL_HELP:
        'Settings needed to ensure effective and secure delivery of assignments.',
    GETTING_STARTED_APP_HELP: 'Allows for delivery of Applications to Virtual Desktops.',
    GETTING_STARTED_DESKTOP_HELP: 'Dedicated or Floating desktops running Microsoft Windows.',
    GETTING_STARTED_VMWARE_SDDC_DESKTOP_HELP: 'Dedicated or Floating desktops running VMware SDDC.',
    GETTING_STARTED_H7_DESKTOP_DESC: 'Create a desktop assignment that assigns users to desktops from VMware SDDC pods.',
    GETTING_STARTED_CUSTOMIZATION_HELP:
        'Manage Application personalization and end user environment settings.',
    GETTING_STARTED_PAGE_SWITCH_TEXT: 'Show at Startup',
    GETTING_STARTED_PREFERENCES: 'Getting Started Preferences',
    GETTING_STARTED_DEFAULT_LANDING: 'Make this default landing page',
    GETTING_STARTED_TO_UNLOCK_ITEM_DESC: 'To unlock, complete:',
    CREATE_IMAGE: 'Create Image',
    CREATE_NEW_DESKTOP_SERVICE: 'Create New Desktop Assignment',
    CREATE_NEW_APPLICATION_ASSIGNMENT: 'Create New Application Assignment',
    EXPORT_DATA: 'Export Data',
    EXPORTED_REPORTS: 'Exported Reports',
    DATACENTER_NAME_COLON: '{0}:',
    PERCENTAGE_COMPLETED: '{0}% completed',
    PERCENTAGE_LOADING: '{0}% loading...',
    STEP_COMPLETED: '{0} of {1} completed',
    REQUIRED: 'Required',
    COMPLETE: 'Complete',
    INCOMPLETE: 'Incomplete',
    VM_NAME: 'VM Name',
    LOCKED: 'Locked',
    IDM: 'Workspace ONE Access',
    URL: 'URL:',
    HTML_ACCESS: 'HTML Access',
    POOL_FARM_OPTIONS: 'Pool/Farm Options',
    ENABLE_CLIENT_RETRY: 'Enable Client Retry',
    POOL_FARM_OPTIONS_HELP_TEXT:
        'Manage what happens when a user tries to connect to a powered-off virtual machine.',
    POOL_FARM_OPTIONS_EDIT_HELP_TEXT: 'Enable Client Retry shows the end user a retry ' +
        'message if they try to access a powered-off Client VM',
    HTML_ACCESS_FOR_RDSH: 'HTML Access for RDSH Applications:',
    HTML_ACCESS_CREDS_CLEANUP: 'Cleanup credentials when tab is closed:',
    ENABLE_HTML_ACCESS_MESSAGE: 'Enabling the HTML access for RDSH applications also implies following:<br><br><ul style="list-style-type:disc"><li>All desktops have been upgraded to Horizon Agent 6.1.1 or newer.</li><li>The Access Point 2.0 remote access gateaway has already been deployed (confirm with your Service Provider).</li><li>Enabling this version means that users cannot connect to Desktops running older Horizon Agents via Blast.</li></ul><br>Are you sure you want to enable HTML access?',
    DISABLE_HTML_ACCESS_MESSAGE: 'Disabling the HTML access for RDSH applications also implies following:<br><br><ul style="list-style-type:disc"><li>All desktops are running Horizon Agent 6.1.1 or newer.</li><li>Disabling this version means that users can only make Blast connections to desktops running Horizon Agent 6.1.0 or newer.</li></ul><br>Are you sure you want to revert to the previous client?',
    REPORTS: 'Reports',
    BACK_LINK: '< Back',
    MAPPING_TYPE: 'Mapping Type',
    USER_MAPPING: 'User Mapping',
    GROUP_MAPPING: 'Group Mapping',
    DESKTOP_MAPPING: 'Desktop Mapping',
    MAPPED_USERS: 'Mapped Users',
    MAPPED_USER_GROUPS: 'Mapped User Groups',
    MODEL: 'Model',
    BACKUP_COLON: 'Backup:',
    BACKUP_IMAGE_SUCCEEDED: 'Image backup in progress',
    BACKUP_IMAGE_MAX_BACKUP_COUNT_EXCEEDED: 'Failed to create a Backup for the Image. ' +
        'This Image already has the maximum number of allowed backups. Please delete one ' +
        'or more backups and try again.',
    BACKUP_IMAGE_NOTES_MAX_SIZE_EXCEEDED:
        'Failed to create a Backup for the Image. Invalid Backup description.',
    BACKUP_IMAGE_OPERATION_FAILED:
        'Failed to create a Backup for the Image. Please try again.',
    BACKUP_IMAGE_VM_NOT_POWERED_OFF: 'Failed to create a Backup for the Image. ' +
        'Please check the status of the image and try again.',
    DELETE_BACKUP_CONFIRMATION: 'Are you sure you want to delete the selected backup?',
    DELETE_BACKUP_SUCCEEDED: 'Backup deleted successfully.',
    DELETE_BACKUP_INFO: 'The selected backup will be permanently deleted.',
    DELETE_BACKUP_ERROR:
        'Unable to delete this backup due to internal server error. Please try again.',
    ROLLBACK_CONFIRMATION:
        'Are you sure you want to rollback this Image to the selected backup?',
    ROLLBACK_IN_PROGRESS: 'Image rollback in progress',
    ROLLBACK_INFO: 'The Image will be rolled back to selected backup. A \'Push Update\' ' +
        'will be required to refresh the associated Assignments.',
    ROLLBACK_ERROR:
        'Unable to rollback this image due to internal server error. Please try again.',
    ACTUAL_CAPACITY_COLON: 'Actual Capacity:',
    REQUESTED_CAPACITY_COLON: 'Requested Capacity:',
    DAYS_TO_GO: '{0} Day(s) to go',
    GO: 'Go',
    VROPS: 'vRops',
    CONFIG_VROPS: 'Configure vROps',
    DELETE_VROPS_MSG: 'Delete vROps',
    DELETE_VROPS_DESC: 'Are you sure you want to delete the vROps?',
    SERVICE_TYPE: 'Assignment Type',
    SMARTNODE_NOTICE: '{0} update is scheduled at {1}',
    SMARTNODE_NOTICE_WITH_TIMEZONE: '{0} update is scheduled at {1} {2}',
    SMARTNODE_NOTICE_NOW: '{0} update is scheduled to happen now!',
    SMARTNODE: 'Horizon Cloud Pod',
    SMARTNODE_MANAGER: 'Horizon Cloud Pod Manager',
    RESOURCE_MANAGER: 'Resource Manager',
    TENANT_APPLIANCE: 'Tenant Appliance',
    COMPACT_APPLIANCE: 'Compact Appliance',
    SMARTNODE_MANAGER_ISSUES: 'Horizon Cloud Pod Manager Issues',
    RESOURCE_MANAGER_ISSUES: 'Resource Manager Issues',
    TENANT_APPLIANCE_ISSUES: 'Tenant Appliance Issues',
    COMPACT_APPLIANCE_ISSUES: 'Compact Appliance Issues',
    PROBLEM_DETECTED_CONTACT_OPS: 'Problem detected. Contact Ops.',
    SOURCE_LABEL: 'Source',
    APPLIANCES: 'Pods',
    APPLIANCES_COLON: 'Appliances:',
    READY: 'Ready',
    AGENT: 'Agent',
    APPSTACK_IMAGE: 'Appstack/Image',
    WRITABLE_VOLUME: 'Writable Vol.',
    WRITABLE_FILENAME: 'Filename',
    LOCATION: 'Location',
    SERVICE: 'Assignment',
    CREATED_ON: 'Created on',
    ENABLE: 'Enable',
    ENABLE_COLON: 'Enable:',
    ADD_CAPACITY: 'Add Capacity',
    ADD_MICROSOFT_AZURE_CAPACITY: 'Add Microsoft Azure Capacity',
    LOGON_THRESHOLD: 'Logon Threshold',
    LATENCY_THRESHOLD: 'Latency Threshold',
    CRITICAL: 'Critical',
    ICA: 'ICA',
    APP_SERVICES: 'Application Assignments',
    STORAGE_SERVICE: 'Storage Service',
    NO_ISSUE_DETECTED: 'No issue detected',
    NO_PCOIP_ISSUE: 'No PCoIP issue',
    NO_ICA_ISSUE: 'No ICA issue',
    LAST_REFRESH: 'last refresh',
    IMPORTED_VMS: 'Imported VMs',
    IMPORTED_VMS_HYDRA: 'Imported VMs',
    UTILITIES: 'Utility VMs',
    UTILITIES_COLON: 'Utility VMs:',
    UTILITIES_TEXT: 'Use Utility VMs for infrastructure-related capabilities such as DHCP '+
        'or domain controller functions. Utility VMs can be migrated to imported VMs.',
    IMPORTED_VMS_TEXT: 'Import VMs to convert to images for use in the desktop assignment and farm creation process.',
    IMPORTED_VMS_TEXT_WITH_DM: 'Import VMs to convert to images for use in the desktop creation process, ' +
        'migrate to dedicated desktop assignments, or designate as Utility VMs.',
    MULTI_DM: 'Operation cannot be performed',
    INFO_FOR_MULTI_DM: 'Please select VMs that belongs to same Desktop Manager.',
    INFO_FOR_MULTI_NODE: 'Please select VMs that belongs to same pod.',
    INFO_LICENSE_EXPIRED_FOR_A_POD: 'Cannot sync Horizon subscription license with pod {0}. Service has been disrupted. Resolve the Cloud Connector issue(s) to restore service.',
    INFO_LICENSE_EXPIRED_FOR_PODS: 'Cannot sync Horizon subscription license with {0} pods. Service has been disrupted. Resolve the Cloud Connector issue(s) to restore service.',
    INFO_BROKER_UPGRADE_REQUIRED: 'Schedule the Universal Broker transition for Horizon Cloud pods on Microsoft Azure to enable multi-cloud assignment capabilities. ' +
        'This transition is required.',
    INFO_BROKER_UPGRADE_REQUIRED_DETAIL_MODAL: 'Multi-pod, multi-site VDI assignments provided by Universal Broker are now available for Horizon pods on Microsoft Azure.',
    INFO_BROKER_UPGRADE_PRE_REQ_ERROR: 'The transition to Universal Broker is required but cannot be scheduled until errors are resolved. Resolve the errors, ' +
        'then schedule the transition on the Broker page.',
    INFO_BROKER_UPGRADE_RESCHEDULE: 'Universal Broker transition was unsuccessful and has been canceled. Contact VMware Support to reschedule this update.',
    INFO_BROKER_UPGRADE_SCHEDULED: 'Universal Broker transition is scheduled for {0}.',
    INFO_BROKER_UPGRADE_IN_PROGRESS: 'Universal Broker transition is in progress. The Horizon Administration Console is read-only until the transition completes.',
    INFO_BROKER_UPGRADE_UPCOMING: 'Broker Upgrade is expected to start in next few minutes.',
    INFO_LICENSE_ISSUE_FOR_A_POD:'Cannot sync Horizon subscription license with pod {0}. Resolve this issue within {1} days to avoid service disruption.',
    INFO_LICENSE_ISSUE_FOR_PODS:'Cannot sync Horizon subscription license with {0} pods. Resolve this issue within {1} days to avoid service disruption.',
    INFO_SITE_SELECTION: 'Associate the pod with a new or existing site, or use the Default-Site provided.',
    RESET_AGENT_PAIRING_NOT_AVAILABLE: 'Reset agent pairing is not supported for this pod version. '+
        'Contact VMware support to upgrade the pod, and try again.',
    OPERATION_INVALID: 'Cannot reset agent pairing',
    MIGRATE: 'Migrate',
    MIGRATE_DESC_IMPORTED_VM: 'This action will migrate the Selected VM(s) to a Dedicated ' +
        'Desktop Assignment. Once initiated, the progress and status of migration can be ' +
        'monitored under activities.',
    MIGRATE_TO_UTILITY_VMS: 'Migrate To Utility VMs',
    LAUNCH_CONSOLE: 'Launch Console',
    FARM_TEXT: 'Create a farm, which is a collection of Remote Desktop Services (RDS) hosts, '+
        'to provide multiple end users with session-based desktops or remote applications.',
    MIGRATE_TO_IMPORTED_VMS: 'Migrate To Imported VMs',
    MIGRATE_TO_ASSIGNMENT: 'Migrate To Assignment',
    MIGRATE_VM_TITLE: 'Migrate VM(s)',
    MIGRATE_SELECT_POOL: 'Custom Assignment',
    MIGRATE_TO: 'Migrate To:',
    MIGRATE_SELECTED_VMS: 'Selected VM(s):',
    MIGRATION_COMPLETED_SUCCESS: 'Migration Completed Successfully',
    MIGRATION_INITIATED_SUCCESS: 'Migration request has been submitted successfully. Please ' +
        'check the Activity screen for more details.',
    MIGRATION_FAILED: 'Failed to migrate selected VM(s).',
    LAUNCH_CONSOLE_FAILED: 'Failed to launch Console access for the selected VM. Please ' +
        'check, if the VM is powered on.',
    MIGRATION_SEARCH_ASSIGNMENT_HELP: 'Search dedicated desktop assignments that can be ' +
        'used for migration. Assignments searched will have same Desktop Manager ' +
        'as that of selected VM(s).',
    MIGRATION_ASSIGNMENT_TYPE_HELP: 'Assignment Type for the selected Desktop Assignment.',
    MIGRATION_IMAGE_TYPE_HELP: 'Image Type used for the selected Desktop Assignment.',
    MIGRATION_DESKTOP_MODEL_HELP: 'Desktop Model for the selected Desktop Assignment.',
    ASSIGNMENT_NAME_COLON: 'Assignment Name:',
    WIN_SERVER_2K12_64: 'Windows Server 2012 64 bit',
    UBUNTU_64: 'Ubuntu 64 bit',
    WIN_7_64: 'Windows 7 64 bit',
    WIN_8: 'Windows 8',
    WINDOWS: 'Windows',
    CONVERT_TO_IMAGE: 'Convert to Image',
    NEW_NAME: 'New Name',
    VM_RENAME_ERROR_NAME_MAX_LENGTH: 'The name cannot exceed 15 characters.',
    NEWVM_NAMES_HELP_TEXT: 'Enter a new name for this imported VM. It needs to start with ' +
        'a letter [a-Z] and contain only letters [a-Z], dashes [-], ' +
        'and numbers and cannot exceed 15 characters.',
    RENAME_COLON: 'Rename:',
    RENAMEPATTERN_TASK: 'Renaming VM {0}',
    RENAME_VM_SUCCEEDED: 'Rename request has been submitted successfully. ' +
        'Check the Activity screen for more details.',
    RENAME_APP_BUNDLE_SUCCEEDED: 'Application renamed successfully.',
    EDIT_VM_RENAME_FAILED: 'Unable to rename VM. Please check if the Horizon Agent is ' +
        'installed and running on the VM and try again.',
    EDIT_DESC_SUCCEEDED: 'Utility item updated successfully.',
    EDIT_VM_ERROR: 'Unable to update VM due to internal server error. Please try again.',
    EDIT_VM_ONLY_RENAME_PASS: 'Rename request has been sent successfully. ' +
        'Unable to update description due to internal server error, try again.',
    EDIT_VM_ONLY_UPDATE_PASS: 'Only VM description updated, unable to rename VM. ' +
        'Please check if the Horizon Agent is installed and running on the VM and try again.',
    VM_DESCRIPTION_EMPTY: 'Description cannot be empty.',
    CONVERT_IMAGE_NOT_SUPPORTED: 'Unable to Convert to Image',
    CONVERT_IMAGE_NOT_SUPPORTED_MESSAGE: 'The selected Utility item is being used as ' +
        'an Appliance and cannot be converted into Image.',
    CONVERT_IMAGE_STATUS: 'Convert Image to Desktop request has been submitted ' +
        'successfully. Check the Activity screen for more details.',
    DELETE_VM_NOT_SUPPORTED: 'Unable to delete',
    DELETE_VM_NOT_SUPPORTED_MESSAGE:
        'Following selected Utility item is being used as an Appliance and cannot be deleted.',
    THRESHOLD_SETTINGS: 'Threshold Settings',
    APPSTACK_ATTACH_FAILURES: 'ApplicationStack Attach Failures',
    WRITEABLE_VOLUME_CAP: 'Writable Volume Capactity',
    WARNING_THRESHOLD_SEC: 'Warning Threshold (sec)',
    WARNING_THRESHOLD_MS: 'Warning Threshold (ms)',
    CRITICAL_THRESHOLD_SEC: 'Critical Threshold (sec)',
    CRITICAL_THRESHOLD_MS: 'Critical Threshold (ms)',
    LOCATION_SEARCH_STRING: 'City Search',
    SEARCHING_IN_PROGRESS: 'Searching in progress...',
    CITY_NAME_COLON: 'City Name:',
    APP_FILE_SHARE: 'File Servers',
    FILE_SHARE_LOCATION: 'FileShare Location',
    CPU_COLON: 'CPU:',
    DISK_COLON: 'Disk:',
    NO_APPSHARE_PRESENT: 'You have no applications. To add new applications, add appshares ' +
        'in the Settings menu. Once appshares are saved, applications will be scanned and will ' +
        'be displayed here automatically.',
    INFRASTRUCTURE: 'Infrastructure ({0})',
    USER_EXPERIENCE: 'User Experience ({0})',
    SELECT_ALL_APP_IN_GROUP: 'Selecting an application from an application group will ' +
        'select all the applications from the same group. Do you want to continue?',
    UNSELECT_ALL_APP_IN_GROUP: 'Un-selecting an application from an application group ' +
        'will un-select all the applications from the same group. Do you want to continue?',
    UPLOAD_CERTIFICATE: 'Upload Certificate',
    CERTIFICATES: 'Certificates',
    UPLOAD_CA_CERTIFICATE: 'Upload CA Certificate File:',
    UPLOAD_SSL_CERTIFICATE: 'Upload SSL Certificate File:',
    UPLOAD_SSL_KEY: 'Upload SSL Key File:',
    VALID_CERTIFICATE: 'Valid Certificate',
    CERTIFICATE_UPLOADED: 'Certificate uploaded successfully',
    CERTIFICATE_UPLOAD_ERROR: 'Unable to Upload!',
    POD_CERTIFICATES_UPLOAD_SUCCESS: 'Pod certificates uploaded successfully.',
    CERTIFICATE_UPLOAD_ERROR_MESSAGE:
        'There was an error in uploading the certificate. Please try again.',
    COMMAND_LINE_PARAM: 'Command Line Parameter',
    OPTIONAL: 'Optional',
    LOCATION_COLON: 'Location:',
    INVALID_THRESHOLD_MESSAGE: 'Warning threshold cannot be greater than critical.',
    ACCEPT_ALL_CERT_COLON: 'Accept All cert:',
    UPLOAD_CERT_FILE: 'Upload Cert File:',
    CEIP_DESC: 'The CEIP provides VMware with information that enables VMware to improve ' +
        'its products and services, to fix problems, and to advise you on how best to deploy and ' +
        'use our products. As part of the CEIP, VMware collects technical information about your ' +
        'organization\'s use of VMware products and services on a regular basis in association ' +
        'with your organization\'s VMware license key(s). This information does not personally ' +
        'identify any individual. For additional information regarding the CEIP, please see the ' +
        'Trust & Assurance Center at <a target=\'_blank\' rel=\'noopener\'' +
        'href=\'http://www.vmware.com/trustvmware/ceip.html\'>' +
        'http://www.vmware.com/trustvmware/ceip.html</a>.',
    JOIN_CEIP: 'Join the VMware Customer Experience Improvement Program',
    CEIP_LABEL: 'Customer Experience Improvement Program (CEIP)',
    CEIP: 'CEIP',
    GIVE_FEEDBACK_LABEL: 'Give Feedback',
    FEEDBACK_INFO: 'Click Give Feedback to send VMware a message from your email account ' +
        'regarding your experience with our service. We will follow up with you using your email ' +
        'address, and will use your feedback in conjunction with relevant account information to ' +
        'address problems, and improve our products and services. You are responsible for ' +
        'ensuring that your feedback (including any attachments or screenshots) does not contain ' +
        'any confidential, sensitive, or personal information.',
    PRIVACY_INFO: 'For more information, please review VMware\'s Privacy Notice ' +
        'at <a target=\'_blank\' rel=\'noopener\' href=\'{0}\'>{1}</a>.',
    PRIVACY_LINK: 'https://www.vmware.com/help/privacy.html',
    PRIVACY_NOTICE: 'Privacy Notice',
    PRIVACY_NOTICE_INFO: 'This product is powered by VMware. For information about how your ' +
        'company handles information collected through this product, please contact your ' +
        'company. For information about how VMware handles information collected through this ' +
        'product, such as analytics, click here <a target=\'_blank\' rel=\'noopener\' href=\'{0}\'>{1}</a>.',
    YES_I_UNDERSTAND: 'Yes, I Understand',
    WHATS_NEW: 'What\'s New',
    WHATS_NEW_TITLE: 'What\'s New in Horizon Cloud',
    WHATS_NEW_UPGRADE_TITLE: 'Upgrade your Horizon Cloud on Azure pod(s) now to get the latest Horizon Cloud features!',
    ERROR_LOADING_WHATS_NEW: 'Sorry, we are having trouble displaying this information. ' +
        'Please try again in a few minutes. If the issue persists, please contact VMware support.',
    NODES_NOT_AVAILABLE_ERROR: 'Sorry, There are no Microsoft Azure pods available.',
    WHATS_NEW_INFO: 'Select "What\'s New" from the Help menu to view these notes at any time.',
    WHATS_NEW_TOGGLE_LABEL: 'Continue to show this notification',
    WHATS_NEW_READ_MORE_TEXT:
        '<p>Read about new and existing features below and visit our <a href="https://communities.vmware.com/community/vmtn/horizon-cloud-service/content?filterID=contentstatus%5Bpublished%5D%7Eobjecttype%7Eobjecttype%5Bthread%5D" target="_blank" rel="noopener">community site</a> for tips, tricks, and to ask any questions!</p>',
    BETA_LABEL: 'Beta',
    BETA_LABEL_LOWERCASE: 'beta',
    CUSTOMIZATION_BETA_TEXT: 'For VMware App Volumes 3.0, Customizations is a Beta feature. ' +
        ' When creating or editing configurations for production implementations, use the ' +
        'standalone UEM&#174; console (not the App Volumes console) and a separate file share. ' +
        'Customizations created, edited, and assigned using the VMware App Volumes 3.0 console ' +
        'are intended only for non-production environments.<br><br>Additionally, Customizations ' +
        'created with one console should not be edited with another; i.e., do not create a ' +
        'Customization with the standalone UEM console and edit it with the VMware ' +
        'App Volumes 3.0 console, or vice-versa.',
    GENERAL_SETTINGS_NETWORK_HELP: 'A list of your network(s) that are currently being ' +
        'used. Please contact your service provider to edit or add new Network(s).',
    ASSIGN_ACTIVE_DIRECTORY_MSG:
        'Assign default Domain for each of your Data Centers by clicking Edit.',
    DISPLAY_ACTIVE_DIRECTORY_MSG: 'The default domain is the AD domain that appears first in the ' +
        'domain selection list on the Horizon Cloud Console login screen. Click Edit to change the default domain.',
    REMOTE_DESKTOP_SESSION_MSG: 'Controls whether to delete credentials of the broker ' +
        'session when a HTML Access portal connection tab is closed. Click Edit to change this.',
    DEFAULT_CLINT_PROTOCOL_MSG: 'The default Client Protocol is shown. Click Edit to define ' +
        'your default client protocol by choosing Blast or PCoIP.',
    LOCAL_ACCOUNT_MSG: 'Displays the temporary local account if one exists. Click Edit to ' +
        'enable or disable the local administrative account and choose a role ' +
        'and set the password.',
    CONTACT_INFO_MSG: 'Lists the contact information for the Administrator and ' +
        'Technical Contact.',
    ADD_NETWORK_MSG: 'Please contact your service provider to edit or add new Network(s).',
    ADD_ACTIVE_DIRECTORY_MSG: 'Assign the default Active Directory domain for your environment.',
    CHANGE_TIMEOUT_SETTINGS_MSG: 'Assign or change the timeout setting for each portal.',
    EDIT_REMOTE_DESKTOP_SESSION_MSG: 'Controls whether to delete credentials of the broker ' +
        'session when a HTML Access portal connection tab is closed.',
    DEFINE_CLIENT_PROTOCOL_MSG:
        'Define your default client protocol by choosing Blast or PCoIP from the dropdown.',
    EDIT_LOCAL_ADMIN_ACCOUNT_MSG: 'Enable or disable the local administrative account, ' +
        'chose a role and enter your desired password.',
    UNABLE_TO_EDIT_CONTACT_INFO: 'You cannot edit the contact information.',
    UPLOAD_CERT_MSG: 'The Upload certificate allows you to upload the browser ' +
        'certificate needed to ensure it is a trusted site.Click the Upload Certificate ' +
        'button to select the certificate you want to upload.',
    UNABLE_TO_UPLOAD_CERT_MSG: 'Unable to upload the certificate. ' +
        'The certificate you are attempting to upload is invalid.',
    SUPPORT_LABEL: 'Support',
    DEFAULT_OU: 'Default OU:',
    DEFAULT_OU_HELP_TEXT: 'Enter the AD Organizational Unit for the desktop image resources ' +
        'using the distinguished name (OU=My Organization,DC=MyDomain,etc.) The default is ' +
        'CN=Computers. The OU and each path in a nested OU can contain any combination of ' +
        'letters, numbers, special characters, and spaces, ' +
        'and can have a maximum of 64 characters.',
    OU_PATTERN_INVALID: 'Each OU path cannot exceed 64 characters and must use the ' +
        'distinguished name (OU=My Organization,DC=MyDomain,etc.).',
    REGISTER_NEW_ACTIVE_DIRECTORY_MSG: 'You do not have an Active Directory registered. ' +
        'Register one or more Active Directories so you can assign new services or give ' +
        'administrative access to your user groups.',
    REGISTER_NEW_ACTIVE_DIRECTORY_INFO_MSG: 'Welcome! Registering an Active Directory is ' +
        'simple. Enter your bind credential to register a new Active Directory. For an advanced ' +
        'user case, expand Advanced Properties to view additional fields.',
    REGISTER_NEW_ACTIVE_DIRECTORY_NAME_MSG:
        'Enter the name the name of the Active Directory you want to bind to.',
    REGISTER_NEW_ACTIVE_DIRECTORY_NAME_ERROR_MSG:
        'An Active Directory with that name does not exist.',
    REGISTER_NEW_ACTIVE_DIRECTORY_DOMAIN_NAME_MSG: 'Enter the name of the Domain Name Server.',
    REGISTER_NEW_ACTIVE_DIRECTORY_PROTOCOL_MSG:
        'Choose the protocol used by your Active Directory.',
    REGISTER_NEW_ACTIVE_DIRECTORY_BIND_USERNAME_MSG:
        'Enter the Bind Username from your Active Directory.',
    REGISTER_NEW_ACTIVE_DIRECTORY_BIND_PASSWORD_MSG:
        'Enter the Bind Password for your Bind Username from your AD.',
    REGISTER_NEW_ACTIVE_DIRECTORY_BIND_FAILURE_MSG: 'We were unable to contact the Active ' +
        'Directory. Please contact your Active Directory Administrator to make sure your AD is ' +
        'working properly or that correct username and password were given.',
    REGISTER_NEW_ACTIVE_DIRECTORY_DOMAIN_REGISTER_SUCCESS_MSG: 'Successfully registered ' +
        'Domain. Would you like to add Domain Join details now? If you do not have Domain Join ' +
        'credentials, don\'t worry, you can perform this task later.',
    REGISTER_NEW_ACTIVE_DIRECTORY_DOMAIN_JOIN_INFO: 'Domain Join allows your Virtual ' +
        'Desktop to authenticate with the Active Directory by entering your credentials below.',
    REGISTER_NEW_ACTIVE_DIRECTORY_JOIN_USERNAME: 'Enter your Join Username so the VMs ' +
        'provisioned will be allowed to join the customer\'s domain.',
    REGISTER_NEW_ACTIVE_DIRECTORY_JOIN_PASSWORD: 'Enter your Join Password so the VMs ' +
        'provisioned will be allowed to join the customer\'s domain.',
    REGISTER_NEW_ACTIVE_DIRECTORY_PRIMARY_DNS: 'Enter your Primary DNS Server IP address.',
    REGISTER_NEW_ACTIVE_DIRECTORY_SECONDARY_DNS:
        'Enter your Secondary DNS Server IP address if you have one.',
    REGISTER_NEW_ACTIVE_DIRECTORY_DOMAIN_JOIN_SUCCESS:
        'Successfully saved your Domain Join information.',
    REGISTER_NEW_ACTIVE_DIRECTORY_ADD_SUPER_ADMIN: 'It\'s recommended that you assign at ' +
        'least one user group in this domain to have the Super Administrator role. This will ' +
        'enable their Active Directory credentials for authentication. Would you like to add ' +
        'Super Administrator Users now?',
    REGISTER_NEW_ACTIVE_DIRECTORY_LIST_VIEW: 'Your registered Active Directory is ' +
        'displayed. Register additional Active Directories or edit the Domain Bind or ' +
        'Domain Join details.',
    REGISTER_NEW_ACTIVE_DIRECTORY_ADVANCED_PROPERTIES: 'For an advanced user case, expand ' +
        'Advanced Properties to view additional fields',
    REGISTER_NEW_ACTIVE_DIRECTORY_ADVANCED_PROPERTIES_CONTEXT: 'The field is pre-populated ' +
        'based on \'DNS Domain Name\' you entered. Manually change the value if desired.',
    REGISTER_NEW_ACTIVE_DIRECTORY_ADVANCED_PROPERTIES_PORT: 'This field is pre-populated ' +
        'based on the default value for the \'Protocol\' selected. ' +
        'Manually change the value if desired.',
    REGISTER_NEW_ACTIVE_DIRECTORY_ADVANCED_PROPERTIES_DOMAIN_CONTROLLER:
        'Enter a value for the Domain Controller/IP',
    REGISTER_NEW_ACTIVE_DIRECTORY_ADVANCED_PROPERTIES_ADD_AUX:
        'Clicking on \'Add Auxiliary Bind Account\' will allow you to add one additional Bind ' +
        'Username and Password which will be used if the primary Bind Username and Password ' +
        'does not work.',
    REGISTER_NEW_ACTIVE_DIRECTORY_ADVANCED_PROPERTIES_ADD_AUX_USERNAME:
        'Enter the Bind Username from your AD.',
    REGISTER_NEW_ACTIVE_DIRECTORY_ADVANCED_PROPERTIES_ADD_AUX_PASSWORD:
        'Enter the Bind Password for your Bind Username from your AD.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_INSTRUCTIONS:
        'Edit your Domain Bind information.  Changes made to made Domain ' +
        'Bind may require you to update Domain Join information.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_NAME:
        'The name cannot be changed after the initial Domain Bind.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_DNS_DOMAIN_NAME:
        'Edit the name of the Domain Name Server.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_PROTOCOL:
        'Choose the protocol used by your Active Directory.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_BIND_USERNAME:
        'Enter an alternative Bind Username from your Active Directory.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_BIND_PASSWORD:
        'Enter an alternative Bind Password for your Bind Username from your AD.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_ADVANCED_PROPERTIES:
        'For an advanced user case, expand Advanced Properties to view additional fields',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_ADVANCED_PROPERTIES_CONTEXT:
        'The field is pre-populated based on \'DNS Domain Name\' you entered. ' +
        'Manually change the value if desired.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_ADVANCED_PROPERTIES_PORT:
        'This field is pre-populated based on the default value for the \'Protocol\' selected. ' +
        'Manually change the value if desired.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_ADVANCED_PROPERTIES_DOMAIN_CONTROLLER:
        'Enter a value for the Domain Controller/IP',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_ADVANCED_PROPERTIES_ADD_AUX:
        'Clicking on \'Add Auxiliary Bind Account\' will allow you to add one additional Bind ' +
        'Username and Password which will be used if the primary Bind Username and ' +
        'Password does not work.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_ADVANCED_PROPERTIES_ADD_AUX_USERNAME:
        'Enter the Bind Username from your AD.',
    REGISTER_NEW_ACTIVE_DIRECTORY_EDIT_DOMAIN_BIND_ADVANCED_PROPERTIES_ADD_AUX_USERNAME_PASSWORD:
        'Enter the Bind Password for your Bind Username from your AD.',
    ACTIVE_SESSIONS: 'Active sessions',
    SETTINGS_ROLES_PERM_SUPER_ADMIN_MAIN: 'The User Groups assigned to the Super ' +
        'Administrator role will have full control of the tenant and are allowed to make any ' +
        'changes to this system. For example the user group with this role can configure ' +
        'inventory, edit all settings, create assignments, etc.',
    SETTINGS_ROLES_PERM_EDIT_SUPER_ADMIN_NO_SUPER_ADMIN_ASSIGNED:
        'There currently are no User Groups assigned to the Super Administrator Role. ' +
        'Click Add to assign User Groups to the Super Administrator Role.',
    SETTINGS_ROLES_PERM_EDIT_SUPER_ADMIN_ADD_EDIT: 'This page allows you to manage the ' +
        'assignment of User Groups for the Super Administrator role. Search your Active ' +
        'Directory to add more Super Administrator Users by finding the desired User Groups ' +
        'and select to add. Remove Super Admin Users by clicking on the X in the list below.',
    SETTINGS_ROLES_PERM_EDIT_SUPER_ADMIN_ADD_EDIT_USER_GROUP:
        'Search your Active Directory by typing the User Group name in the search bar. ' +
        'Click on the User Group name in the results to add it to the Super Administrator Role ' +
        'list. If the User Group cannot be found, confirm that it exists in the Active Directory ' +
        'by contacting your AD Administrator.',
    SETTINGS_ROLES_PERM_EDIT_SUPER_ADMIN_ADD_EDIT_ADD_SUCCESS: 'Successfully updated User ' +
        'Group for super administrator role.',
    SETTINGS_ROLES_PERM_HELP_DESK_ADMIN_MAIN: 'The User Groups who are assigned the Help ' +
        'Desk Administrator Role will have partial control of the tenant and are limited to ' +
        'power and disconnect operations.',
    SETTINGS_ROLES_PERM_EDIT_HELP_DESK_ADMIN_EDIT_USERS_NO_ADMIN: 'There currently are no ' +
        'User Groups assigned to the Help Desk Administrator Role. Click Add to assign User ' +
        'Groups to the Help Desk Administrator Role.',
    SETTINGS_ROLES_PERM_EDIT_HELP_DESK_ADMIN_ADD_EDIT: 'This page allows you to manage the ' +
        'assignment of User Groups for the Help Desk Administrator role. Search your Active ' +
        'Directory to add more Help Desk Administrator Users by finding the desired User Groups ' +
        'and select to add. Remove Help Desk Admin Users by clicking on the X in the list below.',
    SETTINGS_ROLES_PERM_EDIT_HELP_DESK_ADMIN_ADD_EDIT_GROUPS: 'Search your Active Directory ' +
        'by typing the User Group name in the search bar. Click on the User Group name in the ' +
        'results to add it to the Help Desk Administrator Role list. If the User Group cannot ' +
        'be found, confirm that it exists in the Active Directory by contacting your ' +
        'AD Administrator.',
    SETTINGS_ROLES_PERM_EDIT_HELP_DESK_ADMIN_ADD_SUCCESS: 'Successfully updated user groups ' +
        'for helpdesk administrator role.',
    SETTINGS_ROLES_PERM_READ_ONLY_ADMIN: 'The User Groups who are assigned the Read Only ' +
        'Administrator Role have view only access where some items may be clickable for ' +
        'exploration purposes only.',
    SETTINGS_ROLES_PERM_READ_ONLY_ADMIN_EDIT_NO_USER: 'There currently are no User Groups ' +
        'assigned to the Read Only Administrator Role. Click Add to assign User Groups to the ' +
        'Read Only Administrator Role.',
    SETTINGS_ROLES_PERM_READ_ONLY_ADMIN_EDIT_ADD_EDIT: 'This page allows you to manage the ' +
        'assignment of User Groups for the Read Only Administrator role. Search your Active ' +
        'Directory to add more Read Only Administrator Users by finding the desired User Groups ' +
        'and select to add. Remove Read Only Admin Users by clicking on the X in the list below.',
    SETTINGS_ROLES_PERM_READ_ONLY_ADMIN_EDIT_ADD_EDIT_GROUPS: 'Search your Active Directory ' +
        'by typing the User Group name in the search bar. Click on the User Group name in the ' +
        'results to add it to the Read Only Administrator Role list. If the User Group cannot ' +
        'be found, confirm that it exists in the Active Directory by contacting your AD ' +
        'Administrator',
    SETTINGS_ROLES_PERM_READ_ONLY_ADMIN_ADD_SUCCESS: 'Successfully updated user groups ' +
        'for read-only administrator role.',
    UPLOAD_CERT_WARNING: 'This console will be unresponsive for all Administrators while ' +
        'the certificate(s) are applied.',
    SYSTEM_OFFLINE_TITLE: 'System is now under maintenance',
    SYSTEM_OFFLINE_MESSAGE: 'This system is temporary offline for updates or has been ' +
        'restarted by another administrator. Please try back again in 10 minutes.',
    SUBNET_REMOVE_FROM_POD_TITLE: 'Deleting subnet(s) for the pod?',
    SUBNET_REMOVE_FROM_POD_CONTENT: 'Subnet(s) used in assignments will not be deleted. ' +
        'You can see the subnet(s) which failed deletion in Monitor -> Activity -> Audit Logs.',
    CERT_UPLOAD_ERROR_UPLOAD_CERTFICATE_FAILED: 'Unable to upload certificates. ' +
        'Failed to install certificate on appliance.',
    CERT_UPLOAD_ERROR_INVALID_SSL_CERTIFICATE: 'Unable to upload certificates. ' +
        'A problem with the SSL certificate file caused upload to fail.',
    CERT_UPLOAD_ERROR_INVALID_CA_CERTIFICATE: 'Unable to upload certificates. ' +
        'A problem with the CA certificate file caused upload to fail.',
    CERT_UPLOAD_ERROR_INVALID_SSL_CERTIFICATE_KEY: 'Unable to upload certificates. ' +
        'A problem with the private key caused upload to fail.',
    CERT_UPLOAD_ERROR_CERTIFICATE_SIGNATURE_CHECK_FAILED: 'Unable to upload certificates. ' +
        'The CA certificate and the SSL certificate are invalid - signature check failed.',
    CERT_UPLOAD_ERROR_CERTIFICATE_EXPIRED:
        'Unable to upload certificates. The certificates have expired.',
    CERT_UPLOAD_ERROR_MODULUS_VARIFICATION_FAILED: 'Unable to upload certificates. ' +
        'Failed to verify the modulus of the SSL Certificate.',
    CERT_UPLOAD_ERROR_PUBLIC_PRIVATE_KEY_CHECK_FAILED: 'Unable to upload certificates. ' +
        'The SSL private and public key check failed. Please try again.',
    REPORTING_LAST_REFRESHED: 'Last Refreshed',
    REPORTING_REFRESH_NOW: 'Refresh Now',
    REPORTING_ALERT_WITH_FILTERS_APPLIED: 'Filters applied results in more than {0} items. ' +
        'Please use different filters to reduce the results or export to see the entire data.',
    REPORTING_ALERT_WITHOUT_FILTERS_APPLIED: 'This report has more than {0} items. Please ' +
        'use different filters to reduce the results or export to see the entire data.',
    N_ITEM_COUNT: '{0} - {1} of {2} Item',
    N_ITEMS_COUNT: '{0} - {1} of {2} Items',
    EXPORT_TITLE: 'Export',
    EXPORT_COMPLETE_DATA: 'Do you want to export entire data?',
    EXPORT_REPORTS: 'Export Data to Reports',
    EXPORT_REPORT_COMPILATION_IN_PROGRESS: 'Report Compilation In Progress',
    EXPORT_REPORT_READY: 'Report Generated Successfully',
    EXPORT_ALL_DATA: 'All Data',
    EXPORT_FILTERED_DATA: 'Filtered Data',
    EXPORT_COMPLETE_DATA_MESSAGE: 'Some filters are applied on this screen. Do you want to ' +
        'export data as per these filters or all data?',
    EXPORT_DOWNLOAD: 'Download',
    EXPORT_REPORT_COMPILATION_IN_PROGRESS_MESSAGE1: 'Hang in there, compiling the report, ' +
        'it may take some time.',
    EXPORT_REPORT_COMPILATION_IN_PROGRESS_MESSAGE2: 'Next step, download this report.',
    EXPORT_REPORT_READY_MESSAGE: 'Please click on the download button to download',
    EXPORT_ERROR_SCHEDULE_JOB: 'Error While Scheduling Job',
    EXPORT_ERROR_WHILE_POLLING_JOB_DETAILS: 'Some problem occurred while generating the ' +
        'report, please try later.',
    EXPORT_ERROR_WHILE_DOWNLOAD_FILE: 'Some problem occurred while downloading file. ' +
        'Please try later.',
    EULA_LABEL: 'VMWARE END USER LICENSE AGREEMENT',
    EULA_CONTENT_0: 'EULA Terms will go here',
    HORIZON7: 'Horizon',
    BUY_HORIZON_LICENSE_TITLE: 'Buy Horizon subscription License',
    BUY_HORIZON_LICENSE_DESCRIPTION: 'A Horizon subscription license was not found. ' +
        '<a href=\'https://www.vmware.com/products/horizon.html\' ' +
        'target=\'_blank\' rel=\'noopener\'>Learn more</a> about VMware Horizon.',
    VIEW_DETAILS_DESC: 'View',
    DOWNLOAD: 'Download',
    HORIZON_7_INFRA_SUMMARY: 'Summary',
    HORIZON_7_TITLE_COLON: 'Horizon:',
    HORIZON_7_STATUS_COLON: 'Status:',
    HORIZON_7_LOCATION_COLON: 'Location:',
    HORIZON_7_NUM_ALLOCATED_SOURCES_COLON: 'No. of Allocated Sources:',
    HORIZON_7_NUM_ACTIVE_SESSIONS_COLON: 'No. of Active Sessions:',
    HORIZON_7_NUM_CONNECTION_SERVERS_COLON: 'No. of Connection Servers:',
    HORIZON_7_NUM_SECURITY_SERVERS_COLON: 'No. of Security Servers:',
    HORIZON_7_VERSION_COLON: 'Horizon Version:',
    HORIZON_7_ADAPTER_VERSION_COLON: 'Adapter Version:',
    HORIZON_7_INFRA_STATUS_OK: 'OK',
    HORIZON_7_DESKTOP_SESSION: 'Desktop',
    HORIZON_7_RDSH_SESSION: 'RDSH Session',
    HORIZON_7_INFRA_CLOUD_CONNECTION_WORKING: 'Cloud Connection Working',
    HORIZON_7_CLOUD_CONNECTION_NOT_WORKING: 'One or More Pods Not Currently Connected',
    HORIZON_7_CLOUD_CONNECTION_UNKNOWN:
        'Connection status for one or more pods is currently unknown',
    HORIZON_7_CHECK_CLOUD_CONNECTION_DESC: 'Checking Pods Connector Status',
    HORIZON_7_TEXT_HEALTH_STATUS_WARNING:
        'Warning: The health of one or more components cannot be determined at this time',
    HORIZON_7_HELP_TEXT_STATUS: 'Wem Help Text Status',
    HORIZON_7_HELP_TEXT_LOCATION: 'Wem Help Text Location',
    HORIZON_7_HELP_TEXT_NUM_ALLOCATED_SOURCES: 'Wem Help Text Allocated Sessions',
    HORIZON_7_HELP_TEXT_NUM_ACTIVE_SESSIONS: 'Wem Help Text Active Sessions',
    HORIZON_7_HELP_TEXT_NUM_SECURITY_SERVERS: 'Wem Help Text Security Servers',
    HORIZON_7_HELP_TEXT_HORIZON_VERSION: 'Wem Help Text Horizon Version',
    HORIZON_7_HELP_TEXT_ADAPTER_VERSION: 'Wem Help Text Adapter Version',
    REMOTE_APP: 'Remote Application',
    CUSTOM_APP: 'Custom Application',
    REMOTE_APP_DESC: 'You can import applications from RDSH images.  To do this, ' +
        'you need to first install applications to an RDSH image and then publish it. ' +
        'Once published, the system will automatically scan this RDSH image for applications ' +
        'installed in it. This scan will include all applications found under the Start - ' +
        'All Programs menu in Windows. If you would like to install applications to an existing ' +
        'RDSH image and then publish it, click on the Image button to the right.',
    CUSTOM_APP_DESC: 'You can alternatively add applications specifying their names and ' +
        'paths on the image. This is not recommended, but could be used in some situations ' +
        'such as Thin Applictaion launches. To add a custom application, you must specify the ' +
        'application path to launch and optional details such as the icon you want to use for ' +
        'display.  If you already have this applictaion ready, click on the Custom button ' +
        'to the right.',
    NEW_APP: 'New Application',
    CHANGE_LOG_DETAILS: 'Change Log Details',
    NEW_APP_DESC: 'There are 2 ways you can add an application to your inventory.',
    APP_PATH: 'Application Path:',
    PATH: 'Path',
    UPGRADE_ERROR_INFO: 'Unable to update pod because one or more errors need to be resolved.',
    CUSTOM_APP_NAME_HELP: 'Name of the application to define',
    CUSTOM_APP_PATH_HELP:
        'Location of the application executable on the VM, e.g., Z:\\Customapps\\app.exe',
    CUSTOM_APP_DESKTOP_MANAGER_HELP_TEXT: 'Selected data center is configured with multiple ' +
        'pods. Please choose specific pod to create/update this app.',
    CUSTOM_APP_FARM_HELP_TEXT:
        'Choose the farm from which you would like to add the application.',
    CUSTOM_APP_IMAGE_LABEL: 'RDSH Images to use with:',
    CUSTOM_APP_IMAGE_HELP: 'Select the images you want to use the application with',
    CUSTOM_APP_ICON_LABEL: 'Icon File:',
    CUSTOM_APP_ICON_HELP: 'Select a 32 x 32 PNG as the icon (optional)',
    CUSTOM_APP_ICON_HINT: '(32 x 32 .png)',
    CUSTOM_APP_VERSION_HELP: 'Version number of the app (optional)',
    CUSTOM_APP_PUBLISHER_HELP: 'Publisher of the application (optional)',
    CREATE_CUSTOM_APP_SUCCEEDED: 'Custom application added successfully',
    CREATE_CUSTOM_APP_ERROR_IMAGE_HAS_NO_CATALOG: 'Unable to create application. ' +
        'The image has no application catalog. Please convert the VM to an image or wait for the ' +
        'current conversion to finish and try again.',
    CREATE_CUSTOM_APP_ERROR_NO_CATALOGS_FOUND: 'Unable to create application. There are no ' +
        'application catalogs. Please try converting the desired VM to an image or wait for any ' +
        'currently running conversions to finish.',
    CREATE_CUSTOM_APP_ERROR_APP_NAME_TOO_LONG: 'Unable to create application, because its ' +
        'name exceeds 128 characters. Please enter a shorter name.',
    CREATE_CUSTOM_APP_ERROR_APP_FILEPATH_TOO_LONG: 'Unable to create application, because ' +
        'its path exceeds 256 characters. Please enter a shorter file path.',
    CREATE_CUSTOM_APP_ERROR_APP_FILEPATH_EXISTS: 'Unable to create application, because ' +
        'the file path is already in use. Please enter a different file path.',
    CREATE_CUSTOM_APP_GOLD_PATTERN_RETRIEVAL_FAILED: 'Unable to load all images applicable ' +
        'for custom applications. Please try again.',
    CREATE_CUSTOM_APP_DESKTOP_MANAGER_RETRIEVAL_FAILED: 'Unable to load all pods for custom ' +
        'application image selection. Please try again.',
    CREATE_CUSTOM_APP_ICON_UPLOAD_FAILED: 'Custom application created, but the icon upload ' +
        'failed. Please edit the application and try again.',
    CREATE_CUSTOM_PARAMS_HELP_TEXT: 'Command Line Parameters for this application.',
    CREATE_CUSTOM_START_FOLDER_HELP_TEXT:
        'Enter the place in Windows from which the application will be launched.',
    EDIT_APP: 'Edit Application',
    MODIFY_CUSTOM_APP_SUCCEEDED: 'Custom application updated successfully',
    MODIFY_CUSTOM_APP_ERROR_IMAGE_HAS_NO_CATALOG: 'Unable to update application. The image ' +
        'has no application catalog. Please convert the VM to an image or wait for the current ' +
        'conversion to finish and try again.',
    MODIFY_CUSTOM_APP_ERROR_NO_CATALOGS_FOUND: 'Unable to update application. There are no ' +
        'application catalogs. Please try converting the desired VM to an image or wait for any ' +
        'currently running conversions to finish.',
    MODIFY_CUSTOM_APP_ERROR_APP_NAME_TOO_LONG: 'Unable to update application, because its ' +
        'name exceeds 128 characters. Please enter a shorter name.',
    MODIFY_CUSTOM_APP_ERROR_APP_FILEPATH_TOO_LONG: 'Unable to update application, because ' +
        'its path exceeds 256 characters. Please enter a shorter file path.',
    MODIFY_CUSTOM_APP_ERROR_APP_FILEPATH_EXISTS: 'Unable to update application, because the ' +
        'file path is already in use. Please enter a different file path.',
    MODIFY_CUSTOM_APP_ERROR_APP_ID_NOT_FOUND: 'Unable to update application. No application ' +
        'matching its reference ID was found. Please contact your service provider.',
    MODIFY_CUSTOM_APP_ICON_UPLOAD_FAILED: 'Updated application, but the icon upload failed. ' +
        'Please edit the application and try again.',
    MODIFY_CUSTOM_APP_CONF: 'You are about to update an application of several images.',
    MODIFY_CUSTOM_APP_CONF_PROMPT: 'Are you sure you want to update this application?',
    DELETE_CUSTOM_APP_CONFIRMATION:
        'Are you sure you want to delete <strong>{0}</strong> application?',
    DELETE_CUSTOM_APP_MORE_INFO:
        'This action will remove <strong>{0}</strong> application from the inventory.',
    DELETE_CUSTOM_APP_SUCCEEDED: 'Custom application deleted successfully',
    HIDE_APP_BUNDLE_CONFIRMATION: 'Are you sure you want to hide this application?',
    HIDE_APP_BUNDLE_MORE_INFO:
        'This will delete the application from all assignments in addition.',
    HIDE_LIST: 'Hide List',
    EDIT_DELETE_CUSTOM_APPS_ONLY: 'Edit and delete only supported for custom applications',
    REMOTE_TYPE: 'Remote',
    CUSTOM_TYPE: 'Custom',
    NAME_COLON: 'Name:',
    VERSION_COLON: 'Version:',
    PUBLISHER_COLON: 'Publisher:',
    LINUX_32: 'Linux 32 bit',
    LINUX_64: 'Linux 64 bit',
    UBUNTU_32: 'Ubuntu 32 bit',
    WIN_XP: 'Windows XP',
    WIN_VISTA: 'Windows Vista',
    WIN_7: 'Windows 7',
    WIN_8_64: 'Windows 8 64 bit',
    WIN_10: 'Windows 10',
    WIN_10_64: 'Windows 10 64 bit',
    WIN_SERVER_2K16_64: 'Windows Server 2016 64 bit',
    WIN_SERVER_2K19_64: 'Windows Server 2019 64 bit',
    WIN_SERVER_2K8R2_64: 'Windows Server 2008 R2 64 bit',
    WIN_10_WVD_64: 'Windows 10 Enterprise multi-session',
    DAAS_APPLIANCE: 'Desktone Appliance',
    CREATE_VM_IMAGE: 'Create Virtual Machine Image',
    GETTING_STARTED_VM_IMAGE_DESC: 'At least one virtual machine image is required. The applications ' +
        'installed on this image will be available to be assigned.',
    APP_INVENTORY: 'Application Inventory',
    APP_INVENTORY_DESC: 'Review and edit existing applications or import custom applications.',
    VALID_TENANT_ADDRESS_REQUIRED: 'A valid Tenant Address is required.',
    VALID_TENANT_ADDRESS_PREFIX_REQUIRED:
        'Tenant Address should not have prefix "https://" or "http://".',
    VALID_IDM_PREFIX_REQUIRED: 'Workspace ONE Access URL must start with "https://".',
    VALID_URL_PREFIX_REQUIRED: 'URL must start with "https://".',
    DOWNLOAD_IMAGE_BOOTSTRAP: 'Download Bootstrap',
    DOWNLOAD_BOOTSTRAP_NODE_HELPTEXT: 'Select a pod to download the bootstrap for.',
    DOWNLOAD_AGENT_BOOTSTRAP_FILE: 'Download Image Bootstrap and Certificate File',
    DOWNLOAD_AGENT_BOOTSTRAP_MESSAGE:
        'Please specify a password which will be used to encrypt the zip file.',
    DOWNLOAD_AGENT_BOOTSTRAP_MESSAGE_ENZO: 'Please select the location and pod and specify ' +
        'a password which will be used to encrypt the zip file.',
    DOWNLOAD_IMAGE_BOOTSTRAP_SUCCESS: 'Download Image Bootstrap in progress',
    DOWNLOAD_BOOTSTRAP_PASSWORD_HELPTEXT: 'Specify a password to be used to encrypt the bootstrap file so the file\u2019s content is secure. This password must be entered when running keytool to pair the agent with the pod.  The password must be password of 8-20 characters containing at least one each of the following: lowercase letter, uppercase letter, number, and symbol (!@#$%^&*).',
    DOWNLOAD_BOOTSTRAP_CONFIRM_PASSWORD_HELPTEXT:
        'Re-enter the password you specified above to confirm it.',
    NEW_PASSWORD_COLON: 'New Password:',
    CONFIRM_NEW_PASSWORD_COLON: 'Confirm New Password:',
    PASSWORD_HELP_TEXT1: 'Passwords must be between 8 and 20 characters.',
    PASSWORD_HELP_TEXT2: 'Password must contain one lower, uppercase letter, one number, ' +
        'one symbol (!@#$%/^&*) and no whitespace.',
    REFRESH_IMAGE_PASSWORD: 'Refresh Password',
    WARNING_REFRESH_IMAGE_PASSWORD: 'Refresh Image password',
    CONFIRM_REFRESH_IMAGE_PASSWORD: 'Caution: Once this password has been refreshed, ' +
        'any image which has not been bootstrapped yet, needs to be bootstrapped with latest ' +
        'agent bootstrap file.',
    REFRESH_IMAGE_PASSWORD_SUCCESS: 'Successfully refreshed image password.',
    REFRESH_IMAGE_PASSWORD_FAILED: 'Refresh Image Password Failed.',
    DOWNLOAD_BOOTSTRAP_DT_INVALID_INPUT_ERROR_MESSAGE:
        'Unable to download image bootstrap file. Password entered is not valid.',
    DOWNLOAD_BOOTSTRAP_DT_7ZIP_ERROR_MESSAGE:
        'Unable to download image bootstrap file. Error occured while compressing/decompressing.',
    DOWNLOAD_BOOTSTRAP_DT_UNKNOWN_INTERNAL_ERROR_MESSAGE:
        'Unable to download image bootstrap file. Unknown error occured.',
    AGENT_PAIRING: 'Agent Pairing',
    AGENT_PAIRING_MSG:
        'Sets a policy on the tenant which will allow/disallow any legacy (pre-16.6.0) agents',
    ENABLE_AGENT_PAIRING: 'Agent Pairing Mode:',
    AGENT_PAIRING_CONFIRM_MSG:
        'Updating \'Agent Pairing\' policy will impact the functionality of legacy (pre-16.6.0) ' +
        'agents or un-bootstrapped 16.6.0 agents on Dedicated Desktops.',
    AGENT_PAIRING_MODE_15: '15.3 Compatibility Mode',
    AGENT_PAIRING_MODE_16_UPGRADE: '16.6 Upgrade Mode',
    AGENT_PAIRING_MODE_16: '16.6 Mode',
    AGENT_PAIRING_MODE_HELP: 'Sets a policy on the tenant which determines the access of ' +
        'legacy (pre-16.6.0) and 16.6.0 agents. <br>Setting this to \'15.3 Compatibility Mode\' ' +
        'will allow legacy and 16.6.0 agents to be paired with Desktop Manager. <br>Setting this ' +
        'to \'16.6 Upgrade Mode\' will restrict legacy agents, but will allow un-bootstrapped ' +
        '16.6.0 agents on Persistent Desktops and bootstrapped 16.6.0 agents. Setting this ' +
        'to \'16.6 Mode\' will allow only bootstrapped 16.6.0 agents to be paired. ' +
        '<br>For fresh installs policy will be set to \'16.6 Mode\' and for upgraded setups it ' +
        'will be \'15.3 Compatibility Mode\'.',
    DEFAULT_PROTOCOL_COLON: 'Default Protocol:',
    BLAST: 'BLAST',
    PCOIP: 'PCOIP',
    CONSOLE: 'Console',
    REPORTING_REFRESHED: '{0} - {1} {2}',
    GO_TO_APPS: 'Go to Applications',
    GO_TO_IMAGES: 'Go to Images',
    NO_APPS_MESSAGE: 'There are no Applications. Please import some applications ' +
        'in order to create an Application assignment.',
    NO_IMAGS_MESSAGE: 'There are no Images. Please create one or more images ' +
        'in order to create a Desktop assignment.',
    USER_DOMAIN_DETAILS: '{0}\\{1}',
    UGRAD_AEGENT: 'Update Agent',
    AGENT_UGRADE: 'Agent Update',
    SOFTWARE: 'Software',
    AGREEMENTS: 'Agreements',
    AGENT_UPGRADE_NOT_POSSIBLE_MESSAGE:
        'Agent updates are only available for Dedicated Desktops.',
    AGENT_UPGRADE_NOT_POSSIBLE_QUOTA_NOT_AVAILABLE_HEADER:
        'Unable to update the Agents for the selected image(s).',
    AGENT_UPGRADE_NOT_POSSIBLE_QUOTA_NOT_AVAILABLE_MESSAGE:
        'The duplicate images created during the Agent update would exceed the remaining ' +
        'capacity.  You have {0} out of {1} spaces remaining in your image capacity.',
    VM_OPERATION_NOT_POSSIBLE_DAAS_AGENT_NOT_ACTIVE_MESSAGE:
        'Selected VM Operation ({0}) is allowed only for VM(s) having Active Horizon Agent. ' +
        'Please ensure that Horizon Agent is installed and running for selected VM(s).',
    NO_AGENT_UPDATE_AVAILABLE:
        'No Agent Updates Available. Check back here at a later time to ' +
        'see if there are any Agent updates available.',
    AGENT_UPDATE_NOT_AVAILABLE_DUE_MIGRATED_VMS: 'Unable to update agent because the assignment includes VMs that don’t match the image OS type. ' +
        'Migrate the VMs to a different assignment and try again. View image details on the Assignments Summary page.',
    HORIZON_AGENT: 'Horizon Agent',
    DAAS_AGENT: 'Daas Agent',
    DAAS_AGENT_WITH_VERSION: '{0} ({1})',
    LATEST: 'Latest',
    VIEW_AGENT: 'View Agent',
    LIST_OF_SOFTWARE: 'List of Software',
    LIST_OF_AGGREMENTS: 'List of Agreements',
    VM_UPDATE_RESERVATION_TITLE: 'VMs Update Reservation',
    AAU_SKIP_DISCONNECTED_ACTIVE_SESSIONS: 'Skip Disconnected and Active Sessions',
    AAU_RETRY_SKIPPED_VM_TITLE: 'Retry agent update on skipped VMs',
    AAU_ENABLE_ROLLBACK: 'Enable Rollback:',
    AAU_FAILURE_THRESHOLD: 'Failure Threshold:',
    AAU_ROLLBACK_FAILED_THRESHOLD: 'VMs Rollback and Failure Threshold',
    AAU_FAILED_THRESHOLD_USER_INFO: 'Enter the maximum number of VMs allowed to have agent update failures before the agent update process stops.',
    AAU_ROLLBACK_USER_INFO: 'Provide the ability to roll back to the existing agent on a VM if the agent update fails.',
    AAU_FAILURE_THRESHOLD_RANGE: 'Enter a value less than {0} to avoid having to manage a large number of failed VMs.',
    AAU_FAILURE_THRESHOLD_MIN_VALUE: 'Enter a value greater than 0.',
    AAU_SKIP_VMS_WITH_LOGGED_IN_USER_INFO:
        'Select to skip the Horizon Agent update for active or disconnected sessions',
    AAU_SKIP_VMS_WITH_LOGGED_IN_USER_COLON: 'Skip VMs with Logged-in User:',
    AAU_RETRY_SKIPPED_VMS_INFO:
        'Select to automatically retry the Agent update for skipped VMs every {0} minutes',
    AAU_RETRY_SKIPPED_VMS_COLON: 'Retry Skipped VMs:',
    AAU_JOB_TIMEOUT_INFO: 'Enter the number of minutes (minimum={0}, maximum={1}) to retry ' +
        'the Agent update on skipped VMs. Update will be attempted every {2} minutes until ' +
        'timeout is reached or all VMs are updated. Errors will not be retried.',
    AAU_JOB_TIMEOUT_COLON: 'Job Timeout:',
    AVAILABLE_VM_TO_USERS_LABEL_COLON: 'Available VMs to Users:',
    AVAILABLE_VM_TO_USERS_INFO:
        'Enter the percentage(0 to 99) of the pool which should be up during upgrade.',
    VER: 'v',
    COMMAND_LINE: 'Command Line',
    FOR_AGENT: 'For {0}',
    AGREE: 'Agree',
    SELECTED_ASSIGNMENTS: 'Selected Assignments',
    SELECTED_IMAGES: 'Selected Images',
    POOL_AGENT_UPDATE_STARTED: 'Successfully initiated agent update.',
    AGENT_UPDATE_ERROR: 'Failed to start Agent update on the selected {0}.',
    AGENT_UPDATE_NOT_ALL_AGENT_SELECTED_WARNING_HEADER:
        'Are you sure you do not want to update all Agents now?',
    AGENT_UPDATE_NOT_ALL_AGENT_SELECTED_WARNING_MESSAGE:
        'It is recommended that all Agents be updated simultaneously. This better utilizes your ' +
        'image capacity because image duplicates are created during agent updates.',
    MULTI_AGENT_UPDATE_ERROR: 'Failed to start Agent update on some of the selected {0}. ' +
        'Successfully initiated Agent Updates can be monitored through Activity screen.',
    ERROR_MESSAGE_FOR_BACKUP_COUNT:
        'Some problem occurred while checking for current backup count.',
    BACKUP_COUNT_CONFIRMATION_HEADER_FOR_OVERWRITE:
        'Are you sure , you want to overwrite image backup : {0}',
    BACKUP_COUNT_CONFIRMATION_MESSAGE_FOR_OVERWRITE:
        'Max allowed backups already exist for this image and existing backup will be ' +
        'overwritten. Please click OK to proceed. In case if it fails, please delete ' +
        'existing image backup and retry.',
    IMAGE_TYPE: 'Image Type',
    IMAGE_TYPE_COLON: 'Image Type:',
    IMAGE_TYPE_TRADITIONAL_CLONE: 'Traditional Clone',
    IMAGE_TYPE_INSTANT_CLONE: 'Instant Clone',
    IMAGE_NAME: 'Image Name',
    FLOATING_FC_VDI: 'Floating Desktop - Traditional Clone',
    DEDICATED_FC_VDI: 'Dedicated Desktop - Traditional Clone',
    FLOATING_IC_VDI: 'Floating Desktop - Instant Clone',
    DEDICATED_IC_VDI: 'Dedicated Desktop - Instant Clone',
    AZURE_APP_VOL_ASSIGNMENTS: 'Azure App Volumes Assignment',
    DETAILS: 'Details',
    INVALID_IMAGE_ERROR_MESSAGE: 'Please select a valid image to continue',
    IMAGE_FILTERED_MESSAGE: 'Select an available image from the list. Images that do not match the disk size of the desktop model, are not shown. To add images that were filtered, update the policy "disk.size.allowed.deviation.percent" from your service provider and increase the deviation.',
    IMAGE_FILTERED_MESSAGE_VM: 'Select an available virtual machine image from the list. Images that do not match the disk size of the desktop model, are not shown. To add images that were filtered, update the policy "disk.size.allowed.deviation.percent" from your service provider and increase the deviation.',
    DESKTOP_IMAGE_FILTERED_MESSAGE: 'Select the image to use for the assignment.',
    FARM_IMAGE_FILTERED_MESSAGE: 'Select the image to use for the farm.',
    RDSH: 'RDSH',
    ASSIGN_IMAGE: 'Assign Image',
    SELECT_ONE_OR_MORE_FARM_TO_REASSIGN: 'Select one or more farm to re-assign the image.',
    SELECT_ONE_OR_MORE_POOL_TO_REASSIGN:
        'Select one or more assignment to re-assign the image.',
    FARM_IMAGE_REASSIGN_SUCCESS: 'Successfully re-assigned image for the selected farm(s).',
    POOL_IMAGE_REASSIGN_SUCCESS:
        'Successfully re-assigned image for the selected assignment(s).',
    FARM_IMAGE_REASSIGN_FAILED:
        'Image re-assignment FAILED for the one or more selected farm(s).',
    POOL_IMAGE_REASSIGN_FAILED:
        'Image re-assignment FAILED for the one or more selected assignment(s).',
    BULK_ASSIGN_IMAGE: 'Bulk Assign Image',
    IMAGE_PREFIX_INSTANT_CLONE: '[IC]',
    IMAGE_PREFIX_TRADITIONAL_CLONE: '[TC]',
    IMAGE_NAME_TYPE_STRING: '{0} - {1}',
    USED_SIZE: 'Used Size',
    LAST_USED: 'Last Used',
    WRITABLE_VOLUME_ASSIGNMENT_DESC: 'Assign writable volumes to users with desktop ' +
        'sessions where user-installed apps persist.',
    WRITABLE_VOLUME_ASSIGNMENTS: 'Writable Volume Assignments',
    WRITABLE_VOLUMES: 'Writable Volumes',
    WRITABLE_VOLUME_SIZE_ERROR: 'Size can not be lower than {0} MB.',
    WRITABLE_VOLUME_TYPE_COLON: 'Writable Volume Type:',
    WRITABLE_VOLUME_SIZE_COLON: 'Writable Volume Size:',
    WRITABLE_VOLUME_UIA: 'Writable Volume - UIA',
    WRITABLE_VOLUME_UIA_PROFILE: 'Writable Volume - UIA + Profile',
    WRITABLE_VOLUME_TYPE_UIA: 'UIA',
    WRITABLE_VOLUME_TYPE_UIA_PROFILE: 'UIA + Profile',
    NO_VIEW_AGENT_UPDATE_AVAILABLE: 'Command Line Arguments are not required for the ' +
        'Agent(s) you\'ve chosen. Click Submit to complete the Agent update.',
    ADD_FILESHARE: 'Add Fileshare',
    AGENT_FILESHARE_LOCATION: 'Add Agent Fileshare location',
    ADD_FILESHARE_MESSAGE: 'You have no agent updates in the system. Add an agent update ' +
        'file share location to get agents in the system.',
    AGENTS: 'Agents',
    NO_FILESHARE_SUPPORT:
        'Fileshares are not supported since there are no pods connected that support fileshares.',
    BASE_COLON: 'Base:',
    ADDON_COLON: 'Addon:',
    DATASTORE_COLON: 'Datastore:',
    STORAGE: 'Storage',
    FREE_SPACE: 'Free Space',
    DOWNLOAD_FULL_SERVICE_REPORT: 'Download Full Service Report',
    DOWNLOAD_FULL_SERVICE_REPORT_CONFIRM:
        'Do you want to download the full service report in csv format?',
    DOWNLOAD_LOGS: 'Download Logs',
    GENERATE_LOGS: 'Generate Logs',
    LOGS: 'Logs',
    EXPIRY_TIME: 'Expiry Time',
    DATE_CREATED: 'Date Created',
    DT_UNABLE_TO_RETRIEVE_LOG_DOWNLOAD_PATH: 'Unable to retrieve log download path.',
    DT_RESOURCE_READ_ERROR: 'Error while trying to retrieve details of VM Logs.',
    DT_ONGOING_REQUEST_GENERATE_DCT_TASK: 'Task for log generation is already running for this VM.',
    GET_VM_LOG_LIST_FAILED: 'VM log list retrieval failed.',
    LOG_GENERATION_FAILED: 'Log generation failed.',
    LOG_MANAGER_INFO_FAIL: 'Log manager url information retrieval failed.',
    LOG_GENERATION_SUCCESS: 'Log generation initiated. Check activities for the progress.',
    GENERATE_AGENT_DCT: 'Generating logs bundle for {0}. You can download a successfully generated log from Logs tab in Reports page.',
    DELETE_LOG_SUCCESS: 'Successfully deleted the logs.',
    DELETE_LOG_FAIL_FOR_ONE_OR_MORE: 'Log deletion failed for one or more selected VMs.',
    DT_DCT_LOG_GENERATION_FAILED: 'Failed to request log generation.',
    DT_LOG_DELETE_FAILED: 'Unable to delete the log.',
    DT_DOWNLOAD_DCT_LOG_UNSUPPORTED: 'Download of VM logs is not supported as this feature is disabled.',
    DT_AGENT_NOT_RUNNING: 'Agent is not running.',
    DT_VM_FILE_SHARE_NOT_FOUND: 'VM file share not found.',
    DT_VM_FILE_SHARE_NOT_MOUNTED: 'VM file share is not mounted on the tenant.',
    DT_INSUFFICIENT_FILE_SHARE_SPACE: 'Insufficient capacity on the vm file share.',
    STORAGE_TYPES: 'Storage Types',
    IMAGES_PROVISIONED_AND_UTILITY_VMS: 'Images, Provisioned and Utility VMs',
    USER_WRITABLE_VOLUMES: 'User Writable Volumes',
    TIME_OUT_MSG_ENZO:
        'Lists the timeout settings for the Client.  Click Edit to change these settings.',
    TIME_OUT_MSG_DAAS: 'Lists the timeout settings for the Client and the User Portal.  ' +
        'Click Edit to change these settings.',
    LAST_90_DAYS: 'Last 90 days',
    LAST_1_YEAR: 'Last 1 year',
    RDP: 'RDP',
    PERIOD: 'Period',
    DESKTOP_HEALTH: 'Desktop Health',
    DESKTOP_USAGE: 'Utilization',
    ASSIGNMENT_CONCURRENCY: 'Concurrency',
    CLOUD_SERVICE_PLATFORM: 'Cloud Service Provider',
    CLOUD_SERVICE_PLATFORM_PENDING: 'Pending',
    CLOUD_SERVICE_PLATFORM_COMPLETED: 'Completed',
    CLOUD_SERVICE_PROVIDER_BANNER_MESSAGE: 'Onboard VMware Cloud Services Platform to unlock more capability!',
    INFO_CLOUD_SERVICE_PLATFORM: 'Select to enabled VMware Cloud Services Engagement Platform.',
    EDGE_DEPLOYMENT_PROVISIONING_STATE_PENDING: `Edge deployment pending.`,
    EDGE_DEPLOYMENT_PROVISIONING_STATE_DEPLOYING: `Edge deployment in progress.`,
    EDGE_DEPLOYMENT_PROVISIONING_STATE_DEPLOYED: `Monitoring activated.`,
    EDGE_DEPLOYMENT_PROVISIONING_STATE_DELETING: `Edge deployment deleting.`,
    EDGE_DEPLOYMENT_PROVISIONING_STATE_DELETED: `Edge deployment deleted.`,
    EDGE_DEPLOYMENT_PROVISIONING_STATE_FAILED: `Monitoring activation failed.`,
    ADVANCED_HORIZON_MONITORING_NOT_SUPPORTED: `Monitoring not supported.`,
    ADVANCED_MONITORING: 'Horizon Advanced Monitoring',
    INFO_ADVANCED_MONITORING: `Select to enable Horizon Advanced Monitoring to get benefit of Actionable Insights on all connected
    services, On-demand troubleshooting and better log collection for faster GSS turnaround.`,
    ACTIVATE: 'Activate',
    ADVANCED_HORIZON_MONITORING_EDGE_DEPLOYMENT_SUCCESS: `Edge deployment submitted successfull for {0} Pods.`,
    ADVANCED_HORIZON_MONITORING_EDGE_DEPLOYMENT_SUCCESS_INFO: `Edge deployment would take 15-30 minutes time.`,
    ADVANCED_MONITORING_ACTIVATED_MESSAGE: '{0} of {1} pod(s) activated',
    ADVANCED_INFRASTRUCTURE_MONITORING_TITLE: `Horizon Infrastructure Monitoring`,
    ADVANCED_INFRASTRUCTURE_MONITORING_ACTIVATED_TITLE: `Horizon Infrastructure Monitoring Activated!`,
    ADVANCED_INFRASTRUCTURE_MONITORING_FAILED_BANNER_TEXT: `Something went wrong during activation.
    <a href=\'#/app/general-settings\' linkIdentifier="portalLinkInAstro" spaApplicationUnmountDefaultTime="">View details</a>.`,
    ADVANCED_INFRASTRUCTURE_MONITORING_BANNER_TEXT: `Activate Horizon Infrastructure Monitoring for a global view and insights into
    infrastructure health and status.
    <a href=\'https://docs.vmware.com/en/VMware-Horizon-Cloud-Service/services/context?id=hcs-hydra-inframtr1\' target=\'_blank\' rel=\'noopener\'>
    View Docs</a>`,
    ADVANCED_INFRASTRUCTURE_MONITORING_ACTIVATED_BANNER_TEXT: `Infrastructure monitoring is now active! To learn about all
    of its capabilities <a href=\'https://docs.vmware.com/en/VMware-Horizon-Cloud-Service/services/context?id=hcs-hydra-inframtr1\'
    target=\'_blank\' rel=\'noopener\'>View Docs.</a>.`,
    ADVANCED_INFRASTRUCTURE_MONITORING_CPS_PENDING_BANNER_TEXT: `Horizon Infrastructure Monitoring delivers a global view and
    advanced insights into infrastructure health and status. Onboard Cloud Services Engagement Platform before activation.
    <a href=\'https://docs.vmware.com/en/VMware-Horizon-Cloud-Service/services/context?id=hcs-hydra-inframtr1\' target=\'_blank\'
    rel=\'noopener\'>View Docs</a>`,
    MONITORING: 'Monitoring',
    MONITORING_GET_STARTED_CMSPRIVACY: 'User Session Information',
    MONITORING_GET_STARTED_CMSPRIVACYOPS_DESC: 'Enable user session information for ' +
        'utilization, trending and historical analysis.',
    MONITORING_GET_STARTED_SWITCH_TITLE: 'Switch Usage Data Collection',
    SESSION_DATA_DISCLAIMER_TITLE: 'Session Data Disclaimer',
    SESSION_DATA_DISCLAIMER: 'The Session Data feature provides details regarding login times, session duration, and average' +' session length on a per-user basis for historical viewing and analysis. If you enable this feature, VMware will' + ' collect this information and maintain it for the duration of your subscription. Disabling the feature will delete' + ' previously collected session information regarding session usage. If you disable this feature, V`Mware will only collect ' + '  this information for a limited period of time and obscure the user name to enable real-time administration, but'+' the data cannot be utilized for historical or aggregated viewing of information. You can enable or disable the Session' + ' Data feature at any time in General Settings.',
    MONITORING_GET_STARTED_SWTICH: 'Switch',
    CLOUD_MONITORING_SERVICE: 'Cloud Monitoring Service',
    ENABLE_DATA_COLLECTION: 'Allow Data Collection',
    SESSION_DATA: 'Session Data',
    SESSION_DATA_HELP_TEXT: 'Select to allow the collection of session data, including desktop, application, and user data, by the Cloud Monitoring Service.',
    MONITORING_SERVICE_REQUIRED_DATA_COLLECTION: 'Cloud Monitoring Service must be enabled for historical or aggregated viewing of information.',
    MONITORING_ENABLE: 'Enable User Session Information:',
    MONITORING_MSG: 'Collect and store session, application, and desktop data for monitoring and reporting purposes.',
    CLOUD_MONITORING_SERVICE_HELP_TEXT: 'Select to allow the Horizon Cloud Monitoring Service to collect and store session, application, and desktop data from connected pods for monitoring and reporting purposes.',
    MONITORING_PRIVACY_MODE_CONFIG_CALL_SUCCESS:
        'Successfully updated Cloud Monitoring Service.',
    MONITORING_PRIVACY_MODE_CONFIG_CALL_FAILED: 'Unable to update Cloud Monitoring Service.',
    MONITORING_HEALTH: 'Health',
    MONITORING_UNHEALTH: 'Alert',
    MONITORING_OFFLINE: 'Offline',
    MONITORING_PEAK_CONCURRENCY: 'Peak Concurrency',
    MONITORING_TOTAL_UNIQUE_USERS: 'Users',
    MONITORING_ACCESSED_VMS_PERCENTAGE: 'Desktop Used (%)',
    MONITORING_ASSIGNMENT: 'Assignment/Farm',
    MONITORING_DESKTOP: 'Desktop/Server',
    MONITORING_CPU_PERCENTAGE: 'CPU (%)',
    MONITORING_MEMORY_PERCENTAGE: 'Memory (%)',
    MONITORING_DISK_IOPS: 'Disk IOPS',
    MONITORING_PROTOCOL_LATENCY: 'Protocol Latency (ms)',
    MONITORING_PROTOCOL_BANDWIDTH: 'Protocol Bandwidth (kbit/sec)',
    MONITORING_INTERACTIVE_DURATION: 'Interactive Duration (s)',
    MONITORING_PROFILE_LOAD_TIME: 'Profile Load Time (s)',
    MONITORING_SHELL_START_TIME: 'Shell Start Time (s)',
    MONITORING_TOTAL_TIME: 'Total Time (s)',
    MONITORING_FIREWALL: 'Firewall',
    MONITORING_FIREWALL_SERVICE_DESC: 'Firewall service is not running',
    MONITORING_FIREWALL_RULE_DESC: 'Firewall rule is not configured properly',
    MONITORING_FIREWALL_DESC_TEMPLATE: 'Rule {0}',
    MONITORING_PORT: 'Port',
    MONITORING_PORT_DESC_TEMPLATE: 'Port(s) are not accessible: {0}',
    MONITORING_SERVICE: 'Service',
    MONITORING_SERVICE_DESC_TEMPLATE:
        'The following service(s) are not in running status: {0}',
    MONITORING_DHCP: 'DHCP',
    MONITORING_DHCP_DESC: 'The IP is configured as a static IP',
    MONITORING_BAD_IP_DESC: 'The IP address is 169.x.x.x.',
    MONITORING_BAD_IP_NA: 'N/A',
    MONITORING_SLEEP_POLICY: 'Sleep Policy',
    MONITORING_SLEEP_POLICY_DESC: 'System is configured to sleep/hibernate after a long ' +
        'idle. This could be caused by custom power management setting, or group policy',
    MONITORING_DESKTOP_HEALTH_POLICY_DESC: 'Unhealthy: {0}',
    MONITORING_RDP_DESC: 'The remote desktop setting needs to be configured to "All connections from computers running any version of Remote Desktop"',
    MONITORING_DOMAIN_TRUST_RELATIONSHIP: 'Domain Trust Relationship',
    MONITORING_DOMAIN_TRUST_RELATIONSHIP_DESC: 'Domain trust relationship is not enabled',
    MONITORING_REMOTE_ASSISTANCE_STATUS: 'Remote Assistance',
    MONITORING_RA_STATUS_DESC: 'Remote assistance needs to be enabled',
    MONITORING_RDP: 'RDP',
    MONITORING_PASS: 'Pass',
    MONITORING_ALL_DESKTOPS: 'All desktops',
    MONITORING_DESKTOPS_WITH_ERROR: 'Desktops with error',
    MONITORING_DESKTOP_IP: 'IP Address',
    MONITORING_WINDOWS: 'Windows',
    MONITORING_MAC: 'Mac',
    MONITORING_LINUX: 'Linux',
    MONITORING_BROWSER: 'Browser',
    MONITORING_OTHERS: 'Others',
    MONITORING_CATEGORY_COLON: '{0}:',
    MONITORING_DURATION_OVER_4_HOURS: 'Over 4 hour',
    MONITORING_DURATION_1_TO_4_HOURS: '1 to 4 hour',
    MONITORING_DURATION_10_TO_60_MINS: '10 to 60 minutes',
    MONITORING_DURATION_UNDER_10_MINS: 'Under 10 minutes',
    MONITORING_MAX_CONCURRENT_SESSIONS: 'Max Concurrent Sessions',
    MONITORING_UNIQUE_USERS: 'Unique Users',
    MONITORING_MAX_CONCURRENT_USERS: 'Max Concurrent Users',
    MONITORING_TOTAL_CAPACITY: 'Total Capacity',
    MONITORING_ACCESS: 'Access',
    MONITORING_ACCESS_EXTERNAL: 'External',
    MONITORING_ACCESS_INTERNAL: 'Internal',
    MONITORING_SERVICE_TYPE: 'Service Type',
    MONITORING_SERVICE_TYPE_APPSESSION: 'Remote Applications',
    MONITORING_SERVICE_TYPE_DESKTOP: 'Desktop',
    MONITORING_SERVICE_TYPE_SESSION: 'Session Desktops',
    MONITORING_ACTIVE_SESSIONS: 'Active Sessions',
    MONITORING_DISCONNECTED_SESSIONS: 'Disconnected Sessions',
    MONITORING_USER_NAME: 'User Name',
    MONITORING_TOTAL_CONNS: 'Total Connections',
    MONITORING_WEEKLY_AVER: 'Weekly Average(hrs)',
    MONITORING_SESSION_AVER: 'Session Average(hrs)',
    MONITORING_LAST_LOGIN_TIME: 'Last Login Time',
    MONITORING_POWER_OFF_TIME: 'Power Off Time',
    MONITORING_DESKTOP_HEALTH_DETAILS: 'Desktop Health Details',
    MONITORING_DESKTOP_PERFORMANCE: 'Desktop Performance',
    MONITORING_NO_ERRORS: 'No Errors',
    MONITORING_USER_SESSION_TREND: 'User and Sessions Trend',
    MONITORING_PROTOCOL: 'Protocol',
    MONITORING_CLIENT: 'Client',
    MONITORING_SESSION_DURATION: 'Session Duration(hrs)',
    MONITORING_SEARCH_USERS: 'Search Users',
    MONITORING_ERROR_FIREWALL_COLON: 'Firewall',
    MONITORING_ERROR_PORT_COLON: 'Port',
    MONITORING_ERROR_SERVICE_COLON: 'Service',
    MONITORING_ERROR_DHCP_COLON: 'DHCP',
    MONITORING_ERROR_BAD_IP_COLON: 'Bad IP',
    MONITORING_ERROR_SLEEP_POLICY_COLON: 'Sleep Policy',
    MONITORING_ERROR_DOMAIN_TRUST_RELATIONSHIP_COLON: 'Domain Trust Relationship',
    MONITORING_ERROR_RDP_COLON: 'RDP',
    MONITORING_ERROR_REMOTE_ASSISTANCE_STATUS_COLON: 'Remote Assistance',
    MONITORING_ERROR_POWER_COLON: 'VM Online',
    MONITORING_ERROR_DESKTOP_HEALTH_COLON: 'Desktop Health',
    MONITORING_SESSION_HISTORY: 'Session History',
    MONITORING_SESSION_HISTORY_CSV_FILE_NAME: 'sessionhistory',
    EDIT_ASSIGNMENT_MODE: 'Edit Assignment Mode',
    CREATE_ASSIGNMENT_DUPLICATE:
        'Assignment with this name already exists.Please enter a different name',
    EDIT_ASSIGNMENT_MODE_COLON: 'Edit Assignment Mode:',
    EDIT_ASSIGNMENT_DESC: 'This action will convert the assignment mode as ' +
        'Online or Offline. Once converted as Offline, assignment will be down for mainte' +
        'nance and users can\'t launch desktops for this assignment.',
    MAINTENANCE_NOTICE_COLON: 'Maintenance Notice:',
    MAINTENANCE_DEFAULT_MSG: 'Maintenance is being performed. Please try again later.',
    ASSIGNMENT_MODE_COLON: 'Assignment Mode:',
    ASSIGNMENT_MODE_UPDATE_SUCCESSFUL: 'Assignment Mode Updated Successfully',
    MAINTENANCE_MSG_TOO_LONG:
        'Maintenance Notice should not exceed more than 128 chars. Please enter a shorter message.',
    MAINTENANCE_MSG_TOO_LONG_ERROR_MSG: 'This field should not exceed more than {0} chars.',
    ADD_IDM: 'New Identity Manager',
    EDIT_IDM: 'Edit Identity Manager',
    CONFIGURE_IDM: 'Configure Workspace ONE Access',
    FORCE_REMOTE_USERS_TO_IDM: 'Force Remote Users to Workspace ONE Access:',
    FORCE_INTERNAL_USERS_TO_IDM: 'Force Internal Users to Workspace ONE Access:',
    USER_ACCOUNT_CONFIGURATION: 'User Account Configuration',
    USER_ACCOUNT_CONFIG_MSG: 'Controls whether to allow end user access directly from the ' +
        'client or via Workspace ONE portal only. Click Edit to change these settings.',
    EDIT_USER_ACCOUNT_CONFIG_MSG: 'Controls whether to allow end user access directly from ' +
        'the client or via Workspace ONE portal only.',
    DOWNLOAD_IDM_LOGS_TOOLTIP: 'Download Workspace ONE Access Logs for all the tenants',
    DOWNLOAD_IDM_LOGS: 'Download Workspace ONE Access Logs',
    IDM_ENABLED_SUB_TITLE_MSG: 'Add, edit, and configure the identity management providers to use with your Horizon Cloud environment.',
    IDM_DISABLED_SUB_TITLE_MSG:
        'Please contact your service provider to enable Workspace ONE Access.',
    IDENTITY_MANAGER: 'Identity Management',
    TENANT_ADDRESS: 'Tenant Address',
    TIMEOUT_SSO_TOKEN: 'Timeout SSO Token',
    IDM_URL: 'Workspace ONE Access URL',
    DATA_CENTER: 'Data Center',
    CLIENT_ACCESS_FQDN_COLON: 'Client Access FQDN:',
    TIMEOUT_SSO_TOKEN_COLON: 'Timeout SSO Token:',
    WORKSPACE_ONE_ACCESS: "VMware Workspace ONE Access",
    WORKSPACE_ONE_ACCESS_URL_COLON: 'Workspace ONE Access Metadata URL:',
    VMWARE_WORKSPACE_ONE_ACCESS_URL_COLON: 'VMware Workspace ONE Access Metadata URL:',
    DATA_CENTER_COLON: 'Data Center:',
    NAV_IDM: 'Identity Management',
    IDM_ADDED_SUCCESSFULLY: 'Workspace ONE Access has been added successfully',
    IDM_DELETED_SUCCESSFULLY: 'Workspace ONE Access has been deleted successfully',
    IDM_UPDATED_SUCCESSFULLY: 'Workspace ONE Access has been updated successfully',
    IDM_CONFIGURE_SUCCESSFULLY: 'Workspace ONE Access has been configured successfully',
    DELETE_IDM_CONFIRMATION_TITLE:
        'Are you sure you want to delete the selected Workspace ONE Access?',
    DELETE_IDM_CONFIRMATION_DETAIL: 'This will permanently remove the Workspace ONE Access.',
    TRUESSO_CONFIG_HEADER: 'True SSO Configuration',
    TRUESSO_CONFIG_HELP_MSG:
        'To set the configuration, first import the Pairing Token on the Enrollment Servers.',
    DOWNLOAD_TRUESSO_PAIRING_LINK: 'Download Pairing Token',
    TRUESSO_CONFIG_DESC_MSG: 'No True SSO Configuration added. It helps in connecting ' +
        'to desktops and RDSH applications without entering AD credentials.',
    IDM_NOT_CONFIGURED_TITLE_MSG: 'Workspace ONE Access is not set up in the system',
    IDM_NOT_CONFIGURED_BODY_MSG: 'True SSO cannot be configured without Workspace ONE Access ' +
        'being set up. Please configure Workspace ONE Access first.',
    SETUP_IDM: 'Set up Workspace ONE Access',
    TRUESSO_CONFIG_TITLE: 'True SSO Config',
    PRIMARY_ES_COLON: 'Primary Enrollment Server:',
    SECONDARY_ES_COLON: 'Secondary Enrollment Server:',
    VALID_ES_FQDN_REQUIRED: 'Valid fully qualified hostname is required.',
    CERT_AUTHORITITES_COLON: 'Certificate Authorities:',
    TEST_PAIRING: 'Test Pairing',
    ES_NOT_PAIRED_MSG:
        'Enrollment Server could not be paired. Check the input and token import.',
    KEY_LENGTH_COLON: 'Key Length:',
    HASH_ALGORITHM_COLON: 'Hash Algorithm:',
    TRUESSO_CONFIG_CREATE_SUCCESS_MSG: 'True SSO has been configured successfully',
    TRUESSO_CONFIG_UPDATE_SUCCESS_MSG: 'True SSO configuration updated successfully',
    TRUESSO_ENV_INFO_FAILED_MSG:
        'There was an error fetching available templates. Please try again in a moment.',
    DELETE_TRUESSO_MSG: 'Are you sure you want to delete the True SSO configuration?',
    DELETE_TRUESSO_DESC:
        'Users will be prompted for passwords upon connecting to desktops and applications.',
    DELETE_TRUESSO_SUCCEEDED: 'True SSO configuration deleted successfully',
    TRUESSO_ADD_ES_FAILED_MSG:
        'There was an error adding the Enrollment Server. Please try again in a moment.',
    TRUESSO_CHECK_PAIRING_FAILED_MSG:
        'There was an error testing the pairing of the Enrollment Server. ' +
        'Please try again in a moment.',
    TRUESSO_CONFIG_DELETE_ERROR: 'There was an error deleting the configuration.',
    PROBLEMS_DETECTED: 'Problems detected',
    MIN_VMS: 'Min VMs',
    MAX_VMS: 'Max VMs',
    MIN_VMS_COLON: 'Min VMs:',
    MAX_VMS_COLON: 'Max VMs:',
    MIN_DESKTOPS: 'Min Desktops',
    MIN_DESKTOPS_COLON: 'Min Desktops:',
    MAX_DESKTOPS_COLON: 'Max Desktops:',
    MIN_DESKTOPS_HELP_TEXT:
        'Enter the minimum number of usable desktops that can run at the same time.',
    MAX_DESKTOPS_HELP_TEXT:
        'Enter the maximum number of usable desktops that can run at the same time.',
    EDIT_MIN_DESKTOPS_HELP_TEXT:
        'Optionally edit the minimum number of usable desktops that can run at the same time.',
    EDIT_MAX_DESKTOPS_HELP_TEXT:
        'Optionally edit the maximum number of usable desktops that can run at the same time.',
    CONCURRENT_QUIESCING_DESKTOPS_COLON: 'Concurrent Quiescing Desktops:',
    CONCURRENT_QUIESCING_DESKTOPS_HELP_TEXT: 'Enter the number of desktops that can be ' +
        'concurrently quiesced, or paused to achieve a consistent state for image updates. ' +
        'Image updates are performed for all VMs in a floating pool, and for unassigned VMs ' +
        'in a dedicated pool.',
    EDIT_CONCURRENT_QUIESCING_DESKTOPS_HELP_TEXT: 'Optionally modify the number of desktops ' +
        'that can be concurrently quiesced, or paused to achieve a consistent state for image ' +
        'updates. Image updates are performed for all VMs in a floating pool, and for ' +
        'unassigned VMs in a dedicated pool.',
    POWER_MANAGEMENT_AGGRESSIVENESS_VDI_HELP_TEXT: 'Select the threshold of utilization for ' +
        'a new desktop. Optimized Performance has a lower utilization threshold and uses more ' +
        'power, making capacity available faster. Optimized Power has a higher utilization ' +
        'threshold and uses less power, potentially helping minimize costs.',
    LOG_OFF_DISCONNECTED_SESSIONS_VDI_HELP_TEXT: 'Select when a disconnected session is ' +
        'logged off. The session is lost when a disconnected session is logged off.',
    MAX_SESSION_LIFETIME_VDI_HELP_TEXT: 'Enter the maximum number of minutes for a session.',
    EDIT_MAX_SESSION_LIFETIME_VDI_HELP_TEXT:
        'Optionally change the maximum number of minutes for a session.',
    SCHEDULE_POWER_MANAGEMENT_VDI_HELP: 'Configure weekly recurring schedules for the ' +
        'minimum number of usable desktops to help optimize savings and performance. You can add ' +
        'a maximum of 10 schedules. If any time overlaps between schedules, the largest value of ' +
        'minimum desktops is applied.',
    SCHEDULE_POWER_MANAGEMENT_MIN_DESKTOPS_HELP: 'Enter the minimum number of unassigned ' +
        'desktops to power on during this time period. Fewer available desktops will save costs, ' +
        'but might impact end-user system performance.',
    SCHEDULE_POWER_MANAGEMENT_DEDICATED_MIN_DESKTOPS_HELP:
        'The minimum number of unassigned desktops to power on during this time period. ' +
        'Min Desktops defaults to 0 for a dedicated pool when all desktops are assigned.',
    SCHEDULE_MIN_DESKTOPS_FIELD_REQUIRED: 'Min Desktops field cannot be empty',
    SCHEDULE_MIN_DESKTOPS_VALID_INTEGER_REQUIRED:
        'A valid integer is required in Min Desktops field',
    SCHEDULE_MIN_DESKTOPS_POSITIVE_INTEGER_REQUIRED:
        'An integer greater than or equal to 0 is required in Min Desktops field',
    SCHEDULE_MIN_DESKTOPS_MAX_ERROR:
        'Number of Min Desktops should be less than or equal to Max Desktops \'{0}\'',
    SCHEDULE_CONFLICT_VDI_WARNING_MSG: 'There are two or more overlapping schedules, ' +
        'the largest value of Min Desktops will be applied.',
    OCCUPANCY: 'Occupancy',
    FARMS: 'Farms',
    FARM_TYPE: 'Type',
    FARM_TYPE_COLON: 'Farm Type:',
    FARM_NAME: 'Farm Name',
    FARM_NAME_COLON: 'Name:',
    FARM_SIZE_COLON: 'Farm Size:',
    FARM_SIZE: 'Farm Size',
    SESSIONS_PER_SERVER_COLON: 'Sessions Per Server:',
    RE_PRISTINING: 'Rolling Maintenance',
    LOAD_BALANCING_SETTINGS: 'Load Balancing Settings',
    LOAD_INDEX: 'Load Index',
    LOAD_INDEX_CONFIGURATION: 'Session Host Load balancing settings',
    CPU_USAGE_THRESHOLD_COLON: 'CPU Usage Threshold:',
    MEMORY_USAGE_THRESHOLD_COLON: 'Memory Usage Threshold:',
    DISK_QUEUE_LENGTH_THRESHOLD_COLON: 'Disk Queue Length Threshold:',
    DISK_READ_LATENCY_THRESHOLD_COLON: 'Disk Read Latency Threshold:',
    DISK_WRITE_LATENCY_THRESHOLD_COLON: 'Disk Write Latency Threshold:',
    LOAD_INDEX_THRESHOLD_COLON: 'Load Index Threshold:',
    LOGIN_THRESHOLD_HELP_TEXT: 'Enter the limit for the number of VM logins during a specified time interval in seconds.',
    CPU_USAGE_THRESHOLD_HELP_TEXT: 'Specify the percentage of CPU usage at which the VM reports 100% usage.The default is 90%.',
    MEMORY_USAGE_THRESHOLD_HELP_TEXT: 'Specify the percentage of memory usage at which the VM reports 100% usage when calculating the load index.The default is 90%.',
    DISK_QUEUE_LENGTH_THRESHOLD_HELP_TEXT: 'Enter the threshold for the average number of read and write requests queued for the selected disk during the specified time interval.The default is 0.',
    DISK_READ_LATENCY_THRESHOLD_HELP_TEXT: 'Enter the threshold for the average time of read data from the disk in milliseconds.The default is 0.',
    DISK_WRITE_LATENCY_THRESHOLD_HELP_TEXT: 'Enter the threshold for the average time of write of data to the disk in milliseconds.The default is 0.',
    LOAD_INDEX_THRESHOLD_HELP_TEXT: 'Specify the percentage above which a VM cannot accept new sessions.The default is 90%.',
    LOGIN_THRESHOLD_WARNING_MESSAGE: 'Enter a number from {0} to {1}.',
    LOAD_INDEX_WARNING_MESSAGE: 'Enter a percentage from {0} to {1}.',
    LOAD_INDEX_MINIMUM_WARNING_MESSAGE: 'Minimum is 0.',
    LOGIN_THRESHOLD_COLON: 'Login Threshold:',
    LOGIN_PER: 'logins every',
    MAX_LOGIN: '10 logins max.',
    MAX_SESSIONS: '300 seconds max.',
    LOGIN_THRESHOLD_INFO: '{0} logins every {1} seconds',
    LOAD_INDEX_THRESHOLD_INFO: '{0} Percent',
    DISK_THRESHOLD_INFO: '{0} Milliseconds',
    RE_PRESTINING_COLON: 'Rolling Maintenance:',
    RE_PRESTINING_TYPE_COLON: 'Maintenance Type:',
    SESSION_COUNT: 'Session',
    SCHEDULED: 'Scheduled',
    EVERY_SESSION: 'Every Session',
    RE_PRESTINING_RECURRENCE_COLON: 'Recurrence:',
    RE_PRESTINING_RECURRENCE_EVERY_COLON: 'Recurrence Every:',
    RECURRENCE_DAY_COLON: 'Recurrence Day:',
    RECURRENCE_TIME_COLON: 'Time:',
    RECURRENCE_START_HOUR_COLON: 'Scheduled Hour:',
    REPRISTINE_ACTION_COLON: 'VM Action:',
    REPRISTINE_SERVER_OPTIONS: 'Server Options',
    CONCURRENT_QUIESCING_VMS_COLON: 'Concurrent Quiescing VMs:',
    CONCURRENT_QUIESCING_SERVERS_COLON: 'Concurrent Quiescing Servers:',
    CONCURRENT_QUIESCING_VMS_HELP_TEXT: 'Enter the number of virtual machines that can be ' +
        'concurrently down for maintenance.  During this process, virtual machines will be providing ' +
        'service, but will not be used for any new sessions.',
    POWEROFF: 'PowerOff',
    WEEKLY: 'Weekly',
    DAILY: 'Daily',
    HOUR: 'Hour',
    REMINAING_SERVER_COLON: 'Remaining Servers:',
    UTC_HOUR_INFO_HELP_TEXT: 'Time in UTC at which the Farm Rolling Maintenance will ' +
        'kick-in. Valid value should be between 00-23.',
    REPRISTINE_ACTION_HELP_TEXT: 'Select the action to take for virtual machines needing ' +
        'maintenance. With the Restart choice, the affected virtual machines are rebooted. With the ' +
        'Rebuild choice, the affected virtual machines are deleted then re-provisioned ' +
        'using the latest image.',
    ALLOW_FIRST_SERVER_EMPTY_COLON_HELP_TEXT: 'Duration in minutes long the first server ' +
        'in a farm can live without any sessions before it can be retired if it has no sessions.',
    POWER_MANAGEMENT_AGGRESSIVENESS: 'Power Management',
    POWER_MANAGEMENT_AGGRESSIVENESS_COLON: 'Power Management Mode:',
    SCHEDULE_POWER_MANAGEMENT: 'Schedule Power Management',
    SCHEDULE_POWER_MANAGEMENT_HELP: 'To help optimize savings and performance, you can ' +
        'optionally configure weekly, recurring schedules for the minimum number of usable ' +
        'virtual machines in this farm. Enter an identifying name for each schedule, then select the ' +
        'day(s), start and end times, timezone, and the minimum number of virtual machines you would ' +
        'like available for this schedule. A maximum of 10 schedules can be added. If there ' +
        'are any overlapping times between schedules, the largest value of Min virtual machines is applied.',
    SCHEDULE_POWER_MANAGEMENT_TIME_ZONE_HELP: 'Select the time zone closest to the ' +
        'location of your users. Daylight savings time is applied automatically if applicable.',
    SCHEDULE_POWER_MANAGEMENT_MIN_VMS_HELP: 'Enter the minimum number of usable virtual machines ' +
        'you would like to make available during this time period. Making less virtual machines available ' +
        'will save costs, but may impact system performance for the end users.',
    SCHEDULE_POWER_MANAGEMENT_MAXIMUM_HELP: 'Only Maximum 10 Schedules can be applied',
    DAY_S: 'Day(s)',
    SCHEDULE_NAME_FIELD_REQUIRED: 'Schedule Name field cannot be empty',
    SCHEDULE_NAME_DUPLICATE: 'The Schedule Name already exists.',
    SCHEDULE_NAME_LENGTH_ERROR_MSG: 'The Schedule Name should be between 2 to 32 characters',
    SCHEDULE_MIN_VMS_FIELD_REQUIRED: 'Min VMs field cannot be empty',
    SCHEDULE_MIN_VMS_VALID_INTEGER_REQUIRED:
        'A valid integer is required in Min VMs field',
    SCHEDULE_MIN_VMS_POSITIVE_INTEGER_REQUIRED:
        'An integer greater than or equal to 0 is required in Min VMs field',
    SCHEDULE_MIN_VMS_MAX_ERROR:
        'Number of Min VMs should be less than or equal to Max VM \'{0}\'',
    SCHEDULE_DAYS_FIELD_REQUIRED: 'Select at least one day',
    SCHEDULE_CONFLICT_WARNING_MSG:
        'There are two or more overlapping schedules, ' +
        'the largest value of Min VMs will be applied.',
    QUIESCING_VM_GT_NUM_VMS_ERROR:
        'Concurrent Quiescing VMs should be between 1 and {0} for VMs: {1}',
    QUIESCING_VM_GT_NUM_MAX_VMS_ERROR:
        'Concurrent Quiescing VMs should be between 1 and {0} for Max VMs: {1}',
    QUIESCING_VM_GT_MIN_NUM_VMS_ERROR:
        'Concurrent Quiescing VMs should be {0} for VMs: {1}',
    QUIESCING_VM_GT_MIN_NUM_MAX_VMS_ERROR:
        'Concurrent Quiescing VMs should be {0} for Max VMs: {1}',
    SESSION_LIMIT_VM_DENSITY:
        'Sessions should be greater than or equal to Sessions Per VM : {0}',
    SESSION_LIMIT_SERVER_DENSITY:
        'Sessions should be greater than or equal to Sessions Per Server : {0}',
    ALLOW_FIRST_SERVER_EMPTY_COLON: 'First Server Empty Duration:',
    INVALID_HOUR_DAY_ERROR: 'Valid hours between 00 and 23 is required for ' +
        'Scheduled Hour. Please use a valid format like 00',
    TIMEOUT_HANDLING: 'Timeout Handling',
    EMPTY_SESSION_TIMEOUT_COLON: 'Empty Session Timeout:',
    WHEN_TIMEOUT_OCCURS_COLON: 'When Timeout Occurs:',
    LOG_OFF_DISCONNECTED_SESSIONS_COLON: 'Log Off Disconnected Sessions:',
    CREATE_FARMS: 'Create New RDSH Farms',
    MANAGEMENT: 'Management',
    LOAD_BALANCING: 'Load Balancing',
    REMOTE_DESKTOPS: 'Desktops',
    FARM_NAME_HELP_TEXT: 'Give a friendly name to help identify the farm in the system. ' +
        'It must start with a letter [a-Z] and contains only letters [a-Z], dashes [-], ' +
        'and numbers.',
    FARM_PATTERN_INVALID: 'Farm name must contain only letters [a-Z], dashes [-], ' +
        'and numbers. It cannot start with non-alphabetic characters.',
    PREFERRED_PROTOCOL_COLON: 'Preferred Protocol:',
    TIMEOUT_HANDELING_SETUP: 'Timeout Handling',
    SESSION_PER_VM: 'Sessions per VM:',
    SESSION_SMALL: 'sessions',
    NEW_FARM: 'New Farm',
    MAX_CAPACITY: 'Max Capacity: {0} sessions',
    MAX_CAPACITY_NOCOLON: 'Max Capacity',
    MAX_CAPACITY_COLON: 'Max Capacity:',
    MAX_SESSIONS_LIMITATION: '{0} sessions (Max Capacity)',
    FUTURE_ESTIMATE_COST: 'future estimated max cost ${0}/month',
    ON_AFTER: 'Rolling Maintenance After:',
    TIMEOUT_AFTER: 'Timeout After',
    TIMEOUT_AFTER_COLON: 'Timeout After:',
    TIMEOUT_NEVER: 'Never',
    TIMEOUT_IMMEDIATE: 'Immediate',
    CREATE_FARM_SUCCEEDED: 'Farm creation in progress.',
    MODIY_FARM_SUCCEEDED: 'Farm modification in progress.',
    ROLLING_MAINT_HELP_TXT:
        'Rolling Maintenance Type. Valid Options can be Scheduled or Sessions',
    ROLLING_MAINT_REC_HELP_TXT: 'Rolling Maintenance Recurrence.',
    ROLLING_MAINT_REC_DAY_HELP_TXT: 'Day of Week When Rolling Maintenance Gets Triggered.',
    CREATE_FARM_FAILED: 'Farm creation failed.',
    MODIY_FARM_FAILED: 'Farm modification failed.',
    HIGH: 'High',
    LOW: 'Low',
    MEDIUM: 'Medium',
    AVAILABLE_CAPACITY_COLON: 'Available Capacity:',
    DESCRIPTION_TOO_LENGTHY: 'Description should not be above 128 characters.',
    VALID_MAX_VMS_REQUIRED: 'A valid integer greater than 1 is required for Max VMs',
    VALID_SESSION_PER_VM_REQUIRED:
        'A valid integer between 1 and 100 is required for Session Per VM',
    VALID_MIN_SERVER_REQUIRED: 'A valid integer between 1 and 100 is required for Min Server',
    MIN_MAX_ERROR: 'Number of Min VMs should be less than Max VMs.',
    MAX_VM_ZERO_EMPTY_FARM_INFO: 'Max VMs set to 0 results in empty farm.',
    FARM_TYPE_HELP_TEXT: 'RDSH Farm can be of Remote Application or Remote Desktops',
    VALID_MAX_DESKTOPS_REQUIRED: 'A valid integer greater than 1 is required for Max Desktops',
    MIN_MAX_DESKTOP_ERROR: 'Number of Min Desktops should be less than Max Desktops.',
    MAX_DESKTOP_REDUCE_ERROR:
        'Number of Max Desktops should not be less than existing Max Desktops {0}',
    MAX_DESKTOP_REDUCE_QUIESCING_ERROR:
        'Number of Max Desktops must be greater than number of Concurrent Quiescing Desktops {0}',
    MAX_VMS_REDUCE_QUIESCING_ERROR:
        'Number of Max VMs must be greater than number of Concurrent Quiescing VMs {0}',
    MAX_VMS_REDUCE_POWER_MIN_VMS_ASSIGNMENT_ERROR:
        'Must be greater than or equal to {0}, the largest minimum VMs value for any power management schedule for this assignment.',
    MAX_VMS_REDUCE_POWER_MIN_VMS_FARM_ERROR:
        'Must be greater than or equal to {0}, the largest minimum VMs value for any power management schedule for this farm.',
    VMS_REDUCE_QUIESCING_ERROR:
        'Number of VMs must be greater than number of Concurrent Quiescing VMs {0}',
    DESKTOP_MAX_AVAILABLE: 'Desktops cannot exceed {0}, the number of available desktops',
    DESKTOP_MAX_DEPLOYABLE: 'Desktops cannot exceed {0} (deployed desktops plus remaining available desktops)',
    QUIESCING_DESKTOP_GT_NUM_DESKTOPS_ERROR:
        'Concurrent Quiescing Desktops should be between 1 and {0} for Desktops: {1}',
    QUIESCING_DESKTOP_GT_NUM_MAX_DESKTOPS_ERROR:
        'Concurrent Quiescing Desktops should be between 1 and {0} for Max Desktops: {1}',
    QUIESCING_DESKTOP_GT_MIN_NUM_DESKTOPS_ERROR:
        'Concurrent Quiescing Desktops should be {0} for Desktops {1}',
    QUIESCING_DESKTOP_GT_MIN_NUM_MAX_DESKTOPS_ERROR:
        'Concurrent Quiescing Desktops should be {0} for Max Desktops: {1}',
    SERVER_NAME: 'Server Name',
    NODE: 'Pod',
    POD: 'Pod',
    SESSION_DETAILS: 'Session Details',
    SESSION_DETAILS_MESSAGE_PLACEHOLDER: 'Session Details Message Placeholder',
    RE_PRESTINING_AFTER_COLON: 'Re-Pristing after:',
    EDIT_FARM_MODE: 'Edit Farm Mode',
    EDIT_FARM_MODE_COLON: 'Edit Farm Mode: {0}',
    EDIT_FARM_DESC: 'This action will convert the farm mode as Online or Offline. ' +
        'Once converted as Offline, farm will be down for maintenance and ' +
        'users can\'t launch desktops for this farm.',
    FARM_MODE_COLON: 'Farm Mode:',
    FARM_TAKEN_OFFLINE_SUCCESSFUL: 'Successfully took the farm offline.',
    FARM_TAKEN_ONLINE_SUCCESSFUL: 'Successfully brought the farm online',
    EDIT_FARM_IMAGE_OFFLINE:
        'The original Image for this Farm is no longer available. Please select a new Image.',
    TIMEOUT_AFTER_MINUTES: 'Timeout After {0} Minutes',
    ADD_REMOTE_APPLICATION_DEFINITION: 'New',
    REMOTE_TYPE_AUTO: 'Remote - Automatic',
    REMOTE_TYPE_MANUAL: 'Remote - Manual',
    FARM: 'Farm',
    FARM_COLON: 'Farm:',
    REMOTE_APPLICATION_DEFINITION: 'Remote Applications Definition',
    REMOTE_APPLICATION_TYPE: 'Remote Application Type',
    MANUAL_APPLICATION: 'Manual Application',
    REMOTE_APPLICATION_DEFINITION_WITH_TYPE: 'Remote Applications Definition - {0}',
    AUTOMATIC: 'Automatic',
    MANUAL: 'Manual',
    RDSH_FARM_DETAILS: 'RDSH Farm Details',
    REMOTE_APPLICATION_SUMMARY_EDIT_MESSAGE:
        'Note : Edit DisplayName, Params, Start Folder for the selected apps',
    ENTITLE_USERS_MESSAGE: 'Entitle users after this wizard finishes',
    DISPLAY_NAME: 'Display Name',
    DISPLAY_NAME_COLON: 'Display Name:',
    START_FOLDER_COLON: 'Start Folder:',
    START_FOLDER: 'Start Folder',
    PARAMETERS_COLON: 'Parameters:',
    PARAMETERS: 'Parameters',
    ICON_FILE_COLON: 'Icon File:',
    APPLICATION_CREATED_SUCCESSFULLY: 'Application Created Successfully',
    APPLICATION_CREATION_FAILED: 'Application Creation Failed',
    REMOTE_APPS_AUTOMATIC_MSG: 'Please select applications from the set of discovered ' +
        'applications available in RDSH Farm. Selected Applications will be shown ' +
        'in  application catalog.',
    REMOTE_APPS_MANUAL_MSG: 'To add a Manual application, you must specify the application ' +
        'path to launch and optional details such as the icon you want to use for display.',
    APPSTACK: 'AppStack',
    SMARTNODE_DETAILS: 'Pod Details',
    NODE_COLON: 'Pod:',
    APPLICATION_COLON: 'Application:',
    APPLICATION_NAME_INVALID_PATTERN: 'Application name must contain only letters [a-Z], ' +
        'dashes [-], and numbers. It cannot start with non-alphabetic characters.',
    DELETE_MANUAL_APPS_ONLY: 'Delete is only supported for Remote Manual applications',
    EDIT_REMOTE_APPS_ONLY:
        'Edit is only supported for Remote (Automatic and Manual) applications',
    DELETE_REMOTE_APPS_ONLY:
        'Delete is only supported for Remote (Automatic and Manual) applications',
    REMOTE_APP_UPDATED_SUCCESSFULLY: 'Remote Application Updated Successfully.',
    REMOTE_APP_UPDATED_FAILED: 'Remote Application Update Failed.',
    DISPLAY_NAME_APP_HELP_TEXT: 'Display Name For Remote Application',
    START_FOLDER_APP_HELP_TEXT: 'Start Folder For Remote Application',
    PARAMETERS_APP_HELP_TEXT: 'Parameters For Remote Application',
    DELETE_REMOTE_APP_SUCCEEDED: 'Remote application deleted successfully',
    DELETE_REMOTE_APP_FAILED: 'Remote application deletion failed',
    REMOTE_AUTOMATIC_APP_DESC: 'You can import applications from RDSH Farms, created using ' +
        'RDSH Image.The system will scan this RDSH farm for applications installed in it. This ' +
        'scan will include all applications found under the Start - All Programs menu in ' +
        'Windows. Click on the Automatic button to the right to select the RDSH Farm and ' +
        'applications installed in it.',
    REMOTE_MANUAL_APP_DESC: 'You can alternatively add applications specifying their names ' +
        'and paths on the image. This is not recommended, but could be used in some situations ' +
        'such as Thin Application launches. To add a custom application, you must specify the ' +
        'application path to launch and optional details such as the icon you want to use for ' +
        'display.  If you already have this application ready, click on the Manual button to ' +
        'the right.',
    REMOTE_NAME_INVALID_DISPLAY_NAME:
        'Display Name can not be empty. Please provide a valid display name.',
    DELETE_NO_EMPTY_FARM_DETAIL: 'Farm that contains servers cannot be deleted. Please edit ' +
        'your farm and set the capacity to zero to delete all servers from the farm and try again.',
    DELETE_NO_EMPTY_FARM: 'Unable to delete this farm.',
    DELETE_FARM_MSG: 'Are you sure you want to delete {0} farm?',
    DELETE_FARM_DESC: 'This will permanently delete <strong>{0}</strong> farm. Active user ' +
        'sessions will be interrupted and any unsaved data from these sessions will be ' +
        'permanently lost.',
    DELETE_FARM_SUCCEEDED: 'Farm has been deleted successfully.',
    DELETE_FARM_INITIATED: 'Farm deletion is initiated successfully.',
    UNABLE_TO_DELETE_APPLICATIONS_WITH_ASSIGNMENTS: 'Applications that has assignments ' +
        'cannot be deleted. Please edit or delete your assignment to delete this application.',
    DELETE_NO_EMPTY_APPLICATION: 'Unable to delete this application.',
    ASSIGNMENT_UNABLE_TO_DELETE_WITH_VALID_ENTITLEMENTS: 'Unable to delete assignments ' +
        'with valid entitlements.',
    ASSIGNMENT_DT_RESOURCE_NOT_FOUND: 'Invalid assignment, please choose a valid assignment.',
    VALID_SERVERS_REQUIRED: 'A valid positive integer is required for Servers',
    BUILDING_POD: 'Building pod:',
    ERROR_IN_BUILDING_NODE: 'Error in building pod',
    ADD_HORIZON7_ON_PREM_CAPACITY: 'Private Data Center Capacity',
    MICROSOFT_AZURE_CAPACITY: 'Microsoft Azure Capacity',
    ENZO_NODE_DETECTED: '{0} Private Data Center Pod Detected',
    ENZO_NODES_DETECTED: '{0} Private Data Center Pods Detected',
    AZURE_NODE_ADDED: '{0} Microsoft Azure Pod Added',
    AZURE_NODES_ADDED: '{0} Microsoft Azure Pods Added',
    NODE_ADDED: '{0} Pod Added',
    NODES_ADDED: '{0} Pods Added',
    VIEW_ONPREM_NODE_ADDED: '{0} Private Data Center Pod Added',
    VIEW_ONPREM_NODES_ADDED: '{0} Private Data Center Pods Added',
    VIEW_VMC_NODE_ADDED: '{0} VMware Cloud on AWS Pod Added',
    VIEW_VMC_NODES_ADDED: '{0} VMware Cloud on AWS Pods Added',
    ON_PREMISES_CAPACITY_DESC_DETECT: 'Learn how to add private data center capacity...',
    ENZO_CAPACITY_EMPTY_TOOLTIP: 'Connection Lost.',
    AZURE_CAPACITY_DESC_EMPTY: 'Host your environment in Microsoft Azure&#174; Cloud. ' +
        'Select <strong>Add</strong> to get started.',
    CLOUD_CAPACITY_DESC_EMPTY: 'Host your environment in Microsoft Azure&#174; ' +
        'Cloud & VMware Cloud on AWS. Click <strong>Add</strong> to get started.',
    VMC_CAPACITY_DESC_EMPTY: 'Host your environment in VMware Cloud on AWS. ' +
        'Select <strong>Add</strong> to get started.',
    AZURE_CAPACITY_DESC_ADDED: 'Learn how to add Microsoft Azure&#174; capacity...',
    VIEW_VMC_CAPACITY_DESC_ADDED: 'Learn how to add VMware Cloud on AWS capacity...',
    CAPACITY_POD_DESC_BEFORE_AD: 'After you complete the domain bind for the first pod, ' +
        'you can add additional pods on the Capacity page.',
    DUMMY_HELP_TEXT: 'Dummy Help Text',
    SUBSCRIPTION_NAME_PATTERN_INVALID: 'Invalid Subscription Name',
    SUBSCRIPTION_DETAILS_INVALID: 'Invalid subscription details.',
    MICROSOFT_AZURE_SUBSCRIPTION: 'Microsoft Azure Subscription',
    SUBSCRIPTION: 'Subscription',
    SUBSCRIPTION_COLON: 'Subscription:',
    SUBSCRIPTION_DETAILS: 'Subscription Details',
    MANAGE_SUBSCRIPTIONS: 'Manage Subscriptions',
    MANAGE: 'Manage',
    INVALID_DETAILS_OR_INSUFFICIENT_PERMISSIONS:
        'Invalid subscription details or insufficient permissions.',
    UPDATE_NOW: 'Update now',
    POD_SETUP: 'Pod Setup',
    SCHEDULE: 'Schedule',
    RESCHEDULE: 'Reschedule',
    SUBCRIPTION_SUB_HEADER_ADD:
        'Please enter your Microsoft Azure subscription information below.',
    CHOOSE_AZURE_SUBSCRIPTION:
        'Choose the Microsoft Azure subscription you want to apply or add a new one.',
    SUBCRIPTION_SUB_HEADER: 'Microsoft Azure Subscription Details',
    APPLY_SUBSCRIPTION: 'Apply Subscription:',
    ADD_NEW: 'Add New',
    SUBSCRIPTION_NAME: 'Subscription Name:',
    POD_SUBSCRIPTION_NAME: 'Pod Subscription Name:',
    EXT_GATEWAY_SUBSCRIPTION_NAME: 'External Gateway Subscription Name:',
    POD_SUBSCRIPTION: 'Pod Subscription',
    EX_GATEWAY_SUBSCRIPTION: 'External Gateway Subscription',
    AZURE_ENV: 'Environment:',
    SUBSCRIPTION_ID: 'Subscription ID:',
    DOMAIN_INFO: 'Domain Info:',
    CLIENT_ID: 'Client ID:',
    APP_SECRET: 'Application Secret:',
    DIRECTOR_ID: 'Directory ID:',
    APPLICATION_ID: 'Application ID:',
    APPLICATION_KEY: 'Application Key:',
    SUBCRIPTION_DUPLICATE_NAME: 'This subscription name already exists.',
    SUBNET_OVERLAP: 'Entered Subnet is overlapping.',
    DESKTOP_SUBNET_OVERLAP: 'Subnet is overlapping with management and/or DMZ subnets.',
    MGMT_SUBNET_OVERLAP: 'Subnet is overlapping with VM and/or DMZ subnets.',
    DMZ_SUBNET_OVERLAP: 'Subnet is overlapping with management and/or VM subnets.',
    EXT_GATEWAY_SUBNET_OVERLAP: 'Subnet is overlapping with other management, VM and/or DMZ subnets.',
    POD_SETUP_SUB_HEADER: 'Enter details to configure and connect the pod.',
    NETWORKING: 'Networking',
    NODE_ID: 'Pod ID:',
    POD_NAME: 'Pod Name:',
    POD_ID: 'Pod ID:',
    POD_TYPE: 'Pod Type',
    POD_TYPE_COLON: 'Pod Type:',
    AZURE_REGION: 'Microsoft Azure Region:',
    POD_RESOURCE_TAGS: 'Pod Resource Tags',
    POD_AZURE_RESOURCE_TAGS_LABEL: 'Pod Resource Tags:',
    UAG_AZURE_RESOURCE_TAGS_LABEL: 'Unified Access Gateway Resource Tags:',
    INHERTIT_AZURE_TAGS_INFO: 'Add this pod\'s Azure resource tags to the Unified Access Gateway(s) you have enabled.',
    HIGH_AVAILABILITY: 'High Availability',
    HIGH_AVAILABILITY_COLON: 'High Availability:',
    HIGH_AVAILABILITY_REPLICAS_COLON: 'Number of Replicas:',
    VIRTUAL_NETWORK: 'Virtual Network:',
    VIRTUAL_NETWORK_WITHOUT_COLON: 'Virtual Network',
    DESKTOP_NETWORK: 'Desktop Network',
    MANAGEMENT_SUBNET_CIDR: 'Management Subnet (CIDR):',
    MANAGEMENT_SUBNET: 'Management Subnet:',
    DESKTOP_SUBNET_CIDR: 'VM Subnet (CIDR):',
    DESKTOP_SUBNET_CIDR_PRIMARY: "VM Subnet (CIDR) - Primary:",
    INHERIT_POD_TAGS_COLON: "Inherit Pod Tags:",
    DESKTOP_SUBNET_ADDITIONAL: "VM Subnet - Additional:",
    DESKTOP_SUBNET_ADDITIONAL_INFO: 'Select the subnet(s) to use for VDI desktop VMs and RDSH farm VMs. ' +
        'By default the primary subnet is used first. ' +
        'Configure network security groups (NSG) for multiple subnets with rules appropriate for your organization.',
    DESKTOP_SUBNET: 'VM Subnet:',
    VM_SUBNETS: 'VM Subnet(s)',
    DESKTOP_SUBNET_PRIMARY: "VM Subnet - Primary:",
    SPECIFY_VM_SUBNETS: "Specify VM Subnet(s):",
    SPECIFIED_VM_SUBNETS: "Specified VM Subnet(s):",
    SPECIFIY_ASSIGNMENT_VM_SUBNETS_HELP_TEXT: "Specify a subnet(s) to use for the VMs in this assignment.",
    SPECIFIY_FARM_VM_SUBNETS_HELP_TEXT: "Specify a subnet(s) to use for the VMs in this farm.",
    SELECTED_SUBNET_SLASH_TOTAL_SUBNET: "{0}/{1}",
    DMZ_SUBNET_CIDR: 'DMZ Subnet (CIDR):',
    DMZ_SUBNET: 'DMZ Subnet:',
    SELECT_FROM_SUBNET: 'Use Existing Subnet:',
    SELECT_FROM_SUBNET_INFO: 'Select to choose from a list of existing subnets with ' +
        'supported addresses. Unselect to enter a new subnet manually.',
    NUM_ADDRESSES: '({0} addresses)',
    IP_RANGE_MIN: 'IP Range Min:',
    IP_RANGE_MAX: 'IP Range Max:',
    NTP_SERVERS: 'NTP Servers:',
    NETWORK_PROXY: 'Network Proxy',
    USE_NETWORK_PROXY_COLON: 'Use Proxy:',
    NETWORK_PROXY_ENDPOINT_COLON: 'Proxy:',
    NETWORK_PROXY_PORT_COLON: 'Port:',
    NETWORK_PROXY_AUTHENTICATED_COLON: 'Proxy Authicated:',
    NETWORK_PROXY_INFO:
        'Select if you need to use a Proxy to achieve outbound internet access.',
    NETWORK_PROXY_ENDPOINT_INFO: 'Enter the hostname or IP of your proxy server.',
    NETWORK_PROXY_ENDPOINT_PATTERN:
        'Enter the hostname or IP address of the authentication server.',
    NETWORK_PROXY_PORT_INFO:
        'Enter your port number specified in your proxy server configuration.',
    NETWORK_PROXY_USERNAME_HELP_TEXT:
        'Enter your user name if required by your proxy server configuration (optional).',
    NETWORK_PROXY_PASSWORD_HELP_TEXT:
        'Enter your password if required by your proxy server configuration (optional).',
    NETWORK_PROXY_VERIFY_PASSWORD_HELP_TEXT: 'Re-enter your password.',
    UNIFIED_ACCESS_GATEWAY: 'Unified Access Gateway',
    INTERNET_ENABLED_DESKTOPS_COLON: 'Internet Enabled Desktops:',
    FQDN_COLON: 'FQDN:',
    LOAD_BALANCER_FQDN_COLON: 'Load Balancer FQDN:',
    PUBLIC_IP_ENABLED_COLON: 'Public IP Enabled:',
    CERTIFICATE: 'Certificate:',
    VALIDATE_SUCCESSFUL: 'Pod and Gateway configurations validated successfully.',
    VALIDATE_ERROR_MESG: 'Following validation failed, please check values and try again.',
    VALIDATE_ERROR: 'Pod configuration validation error',
    AZ_SUMMARY_SUB_HEADER:
        'Review your Subscription and Pod configuration details before submitting the information.',
    AZURE_CAP_SUMMARY: 'Microsoft Azure Capacity Summary',
    POD_DETAILS: 'Pod Details',
    AP_GATEWAY: 'AP Gateway',
    REQUIRED_ASTRICK: '* Required',
    INVALID_SUBSCRIPTION_MESSAGE: 'Subscription information is incorrect or incomplete. ' +
        'Please also check that this Microsoft Azure Service Principal is entitled with either ' +
        'the Contributor role or if using a Custom Role, has the necessary permissions granted. ' +
        'This can be done using the Microsoft Azure Portal.',
    NECESSARY_ACTIONS: 'Necessary Actions',
    DUPLICATE_POD_SUBSCRIPTION_MESSAGE: 'Resource credential id for the pod already exists.',
    DUPLICATE_EXTERNAL_GATEWAY_SUBSCRIPTION_MESSAGE: 'Resource credential id for the external gateway already exists.',
    SUBNET_MASK_INVALID: 'This subnet mask is invalid.',
    NTP_NAME_INVALID:
        'The NTP name can contain only lowercase letters, periods(.), and numbers.',
    AZ_POD_ADDED: 'Microsoft Azure Pod Added successfully',
    NAME_HELP_TEXT: 'Enter the name of the Microsoft Azure Pod, the name given will be ' +
        'used in the Microsoft Azure Pod and by VMware to refer to this Microsoft Azure Pod.',
    LOCATION_HELP_TEXT: 'Enter the name and / or location of you datacenter.',
    DESCRIPTION_HELP_TEXT: 'Optional field to describe the Microsoft Azure Pod.',
    CIDR_HELP: 'min/28 required and /22 recommended.',
    DESKTOP_NETWORK_IP_MIN: 'Starting IP address for the range of IP addresses on your ' +
        'desktop network, these IP addresses will be assigned to virtual appliances internal ' +
        'to the Horizon Cloud Pod. Please ensure the range includes at least {0} IP addresses. ' +
        'The IP range provided will not be used for desktop VMs; your desktop network should ' +
        'have a range of DHCP managed dynamic IP addresses that will be used by the desktop VMs.',
    DESKTOP_NETWORK_IP_MAX: 'Ending IP address for the range of IP addresses on your ' +
        'desktop network. Please ensure the range includes at least {0} IP addresses. The IP ' +
        'range provided will not be used for desktop VMs; your desktop network should have a ' +
        'range of DHCP managed dynamic IP addresses that will be used by the desktop VMs.',
    DESKTOP_NETWORK_DNS_SERVER: 'Enter the list of DNS servers to use for name resolution, ' +
        'separated by commas (for example 198.51.100.1, 198.51.100.2).',
    DESKTOP_NETWORK_NTP_SERVER: 'Enter the list of NTP servers to use for time ' +
        'synchronization, separated by commas (for example 198.51.100.1, 198.51.100.2).',
    DESKTOP_NETWORK_IP_RANGE:
        'Please verify the range of IP addresses on your desktop network.',
    FQDN_PREFIX_REQUIRED: 'FQDN cannot start with http:// or https://.',
    FQDN_UNDERSCORE_NOT_ALLOWED: 'FQDN cannot contain underscores [ _ ].',
    CERT_UPLOADED: 'Certificate uploaded',
    ADDING_MORE_VIEW_ON_PREM_CAPACITY: 'To add a Horizon pod (Private Data Center), please ' +
        '<a href=\'http://www.vmware.com/go/download-horizoncloudconnector\' ' +
        'target=\'_blank\' rel=\'noopener\'>download</a> and install the Horizon Cloud Connector.',
    ADDING_MORE_VIEW_CAPACITY_EXT: 'The Cloud Connector is required to connect a pod with Horizon Cloud.',
    ADDING_MORE_AZURE_CAPACITY: 'Adding Microsoft Azure capacity is easy. Go to the ' +
        'Capacity page (Settings > Capacity), and select New > Microsoft Azure. You will be asked for your ' +
        'cloud subscription information, so have that information available.',
    ADDING_MORE_VIEW_VMC_CAPACITY: 'You can add VMware Cloud on AWS capacity in two ways: ' +
        'Go to Settings > Capacity and select New > VMware Cloud on AWS, or ' +
        '<a href=\'http://www.vmware.com/go/download-horizoncloudconnector\' ' +
        'target=\'_blank\' rel=\'noopener\'>download</a> and install the Horizon Cloud Connector. ' +
        'The Cloud Connector is required to connect a pod with Horizon Cloud. ' +
        '<a href=\'http://www.vmware.com/go/hcs-add-vmc-capacity-doc\' ' +
        'target=\'_blank\' rel=\'noopener\'>Learn more</a>',
    ADDING_VIEW_VMC_CAPACITY_DOWNLOAD_INFO: 'To add a VMware Cloud on AWS pod, ' +
        'please <a href=\'http://www.vmware.com/go/download-horizoncloudconnector\' target=\'_blank\' rel=\'noopener\'>download</a>' +
        ' and install the Horizon Cloud Connector.',
    GOTO_CAPACITY_PAGE: 'Go to Capacity Page now',
    ADDING_MORE_VIEW_ON_PREM_CAPACITY_TITLE: 'Adding On-Premises Capacity',
    ADDING_MORE_AZURE_CAPACITY_TITLE: 'Adding Microsoft Azure Cloud Capacity',
    ADDING_MORE_VIEW_VMC_CAPACITY_TITLE: 'Adding VMware Cloud on AWS Capacity',
    ATTACH_DETACH_NOTIFICATION_TITLE: 'Attach/Detach',
    CREATE: 'Create',
    FARM_CREATE_INSUFFICIENT_COMPUTE_CAPACITY: 'The RDSH Farm could not be created. Does not have ' +
        'enough capacity to create this farm. Please reduce the capacity for this farm or ' +
        'buy more capacity and try again.',
    FARM_CREATE_INVALID_SESSIONS_PER_SERVER_ERROR: 'The RDSH Farm could not be created. ' +
        'Sessions per server should be greater than zero',
    FARM_UPDATE_INVALID_SESSIONS_PER_SERVER_ERROR: 'The RDSH Farm could not be updated. ' +
        'Sessions per server should be greater than zero',
    FARM_DELETE_IN_USE_ERROR: 'The RDSH Farm could not be deleted. Ensure there are no ' +
        'assignments for this farm and try again.',
    FARM_TASK_DELETE_ERROR: 'The RDSH Farm could not be deleted. Ensure there are no ongoing ' +
        'tasks for this farm and try again.',
    FARM_RESOURCE_DELETE_ERROR: 'Your request could not be completed by the system because ' +
        'an unexpected internal error occurred. Try again later and contact your service ' +
        'provider if the issue persists.',
    FARM_CREATE_MIN_SERVERS_GREATER_THAN_MAX_SERVERS_ERROR: 'The RDSH Farm could not be created. ' +
        'Min Servers Cannot be greater than Max Servers.',
    FARM_UPDATE_MIN_SERVERS_GREATER_THAN_MAX_SERVERS_ERROR: 'The RDSH Farm could not be updated. ' +
        'Min Servers Cannot be greater than Max Servers.',
    FARM_CREATE_DUPLICATE_POOL_NAME_ERROR: 'The RDSH Farm could not be created. Farm Name entered in ' +
        'Definition tab is already in use. Please enter different Farm Name and try again.',
    FARM_UPDATE_DUPLICATE_POOL_NAME_ERROR: 'The RDSH Farm could not be updated. Farm Name entered in ' +
        'Definition tab is already in use. Please enter different Farm Name and try again.',
    FARM_CREATE_INVALID_OCCUPANCY_PRESET_MODE_ERROR: 'The RDSH Farm could not be created. ' +
        'Invalid Power Management Mode.',
    FARM_UPDATE_INVALID_OCCUPANCY_PRESET_MODE_ERROR: 'The RDSH Farm could not be updated. ' +
        'Invalid Power Management Mode.',
    FARM_CREATE_INVALID_FARM_ID_ERROR:
        'The RDSH farm could not be created. Confirm the details for this farm and try again.',
    FARM_UPDATE_INVALID_FARM_ID_ERROR:
        'The RDSH farm could not be updated. Confirm the details for this farm and try again.',
    FARM_CREATE_MISSING_POOL_POLICIES: 'The RDSH Farm could not be created. Policies must be ' +
        'specified. Please confirm Farm details and try again.',
    FARM_UPDATE_MISSING_POOL_POLICIES: 'The RDSH Farm could not be updated. Policies must be ' +
        'specified. Please confirm Farm details and try again.',
    FARM_CREATE_GOLD_PATTERN_VIRTUAL_MACHINE_NOT_FOUND: 'The RDSH Farm could not be created. ' +
        'Selected Image cannot be found. Please select a different Image and try again.',
    FARM_UPDATE_GOLD_PATTERN_VIRTUAL_MACHINE_NOT_FOUND: 'The RDSH Farm could not be updated. ' +
        'Selected Image cannot be found. Please select a different Image and try again.',
    FARM_CREATE_INCOMPATIBLE_GOLD_PATTERN_OS_TYPE: 'The RDSH Farm could not be created. Selected ' +
        'Image cannot be found. Please select a different Image and try again.',
    FARM_UPDATE_INCOMPATIBLE_GOLD_PATTERN_OS_TYPE: 'The RDSH Farm could not be updated. Selected ' +
        'Image cannot be found. Please select a different Image and try again.',
    FARM_CREATE_RDSH_ROLE_NOTENABLED_FOR_GOLD_PATTERN: 'The RDSH Farm could not be created. ' +
        'Selected Image is not supported with this farm type. ' +
        'Please select a different Image and try again.',
    FARM_UPDATE_RDSH_ROLE_NOTENABLED_FOR_GOLD_PATTERN: 'The RDSH Farm could not be updated. ' +
        'Selected Image is not supported with this farm type. ' +
        'Please select a different Image and try again.',
    FARM_CREATE_NO_SESSION_BASED_DESKTOP_MODELS_WITH_QUOTA_REMAINING:
        'The RDSH Farm could not be created. The selected desktop model does not have enough ' +
        'capacity to create this farm. Please reduce the capacity for this farm and try again.',
    FARM_CREATE_INVALID_SESSION_PROFILE_ID: 'The RDSH Farm could not be created. The generated session ' +
        'profile ID for a session pool is either missing or invalid.',
    FARM_UPDATE_INVALID_SESSION_PROFILE_ID: 'The RDSH Farm could not be updated. The generated session ' +
        'profile ID for a session pool is either missing or invalid.',
    FARM_CREATE_INVALID_POOL_NAME:
        'The RDSH Farm could not be created. The Farm name specified is invalid.',
    FARM_UPDATE_INVALID_POOL_NAME:
        'The RDSH Farm could not be updated. The Farm name specified is invalid.',
    FARM_UPDATE_ERROR_GOLD_PATTERN_POWERED_ON: 'Unable to take farm offline because the image is' +
        ' powered on. Republish the image and try again.',
    FARM_CREATE_RESOURCE_ALREADY_EXIST: 'The RDSH Farm could not be created. Farm Name entered in ' +
        'Definition tab is already in use. Please enter different Farm Name and try again.',
    FARM_UPDATE_RESOURCE_ALREADY_EXIST: 'The RDSH Farm could not be updated. Farm Name entered in ' +
        'Definition tab is already in use. Please enter different Farm Name and try again.',
    FARM_CREATE_INVALID_REMOTE_APP_NAME: 'The RDSH Farm could not be created. Selected application ' +
        'cannot be found. Please remove this Application and try again.',
    FARM_UPDATE_INVALID_REMOTE_APP_NAME: 'The RDSH Farm could not be updated. Selected application ' +
        'cannot be found. Please remove this Application and try again.',
    FARM_CREATE_INVALID_DOMAIN: 'The RDSH Farm could not be created. Selected Domain in Definition ' +
        'tab is invalid or is not a registered domain. Please select valid registered ' +
        'Domain and try again.',
    FARM_UPDATE_INVALID_DOMAIN: 'The RDSH Farm could not be updated. Selected Domain in Definition ' +
        'tab is invalid or is not a registered domain. Please select valid registered ' +
        'Domain and try again.',
    FARM_CREATE_INVALID_PATTERN_TYPE: 'The RDSH Farm could not be created. Invalid Pattern Type.',
    FARM_UPDATE_INVALID_PATTERN_TYPE: 'The RDSH Farm could not be updated. Invalid Pattern Type.',
    FARM_CREATE_INCOMPATIBLE_POOL_DISK_PERSISTENCE_TYPE: 'The RDSH Farm could not be created. ' +
        'The pool\'s disk persistence setting is not compatible with the pool type',
    FARM_UPDATE_INCOMPATIBLE_POOL_DISK_PERSISTENCE_TYPE: 'The RDSH Farm could not be updated. ' +
        'The pool\'s disk persistence setting is not compatible with the pool type',
    FARM_CREATE_INCOMPATIBLE_REMOTE_PROTOCOL: 'The RDSH Farm could not be created. The specified ' +
        'protocol is not compatible with the specified pool type.',
    FARM_UPDATE_INCOMPATIBLE_REMOTE_PROTOCOL: 'The RDSH Farm could not be updated. The specified ' +
        'protocol is not compatible with the specified pool type.',
    FARM_CREATE_GOLD_PATTERN_DATACENTER_NOT_FOUND: 'The RDSH Farm could not be created. Datacenter ' +
        'details not found for selected Image.',
    FARM_UPDATE_GOLD_PATTERN_DATACENTER_NOT_FOUND: 'The RDSH Farm could not be updated. Datacenter ' +
        'details not found for selected Image.',
    FARM_CREATE_INSUFFICIENT_DESKTOP_MODEL_QUOTA: 'The RDSH Farm could not be created. The selected ' +
        'desktop model does not have enough capacity to create this assignment. Please reduce ' +
        'the capacity for this assignment or buy more capacity and try again.',
    FARM_CREATE_INSUFFICIENT_PROTOCOL_QUOTA: 'The RDSH Farm could not be created. The remaining ' +
        'protocol quota for one or more protocols is insufficient to satisfy the ' +
        'provisioning request.',
    FARM_UPDATE_INSUFFICIENT_PROTOCOL_QUOTA: 'The RDSH Farm could not be updated. The remaining ' +
        'protocol quota for one or more protocols is insufficient to satisfy the ' +
        'provisioning request.',
    FARM_CREATE_INVALID_VM_ROOT_NAME: 'The RDSH Farm could not be created. VM name validation failed.',
    FARM_UPDATE_INVALID_VM_ROOT_NAME: 'The RDSH Farm could not be updated. VM name validation failed.',
    FARM_CREATE_INVALID_ORGANIZATIONAL_UNIT: 'The RDSH Farm could not be created. Computer OU ' +
        'entered in Definition tab is invalid. Please enter valid Computer OU and try again.',
    FARM_UPDATE_INVALID_ORGANIZATIONAL_UNIT: 'The RDSH Farm could not be updated. Computer OU ' +
        'entered in Definition tab is invalid. Please enter valid Computer OU and try again.',
    FARM_UPDATE_ILLEGAL_GP_CHANGE: 'The RDSH Farm could not be updated. Illegal image change.',
    FARM_CREATE_DUPLICATE_POOL_NAME: 'The RDSH Farm could not be created. Assignment Name entered ' +
        'in Definition tab is already in use. Please enter different Assignment Name ' +
        'and try again.',
    FARM_UPDATE_DUPLICATE_POOL_NAME: 'The RDSH Farm could not be updated. Assignment Name entered ' +
        'in Definition tab is already in use. Please enter different Assignment Name ' +
        'and try again.',
    FARM_CREATE_DUPLICATE_VM_ROOT_NAME: 'The RDSH Farm could not be created. VM Name entered in ' +
        'Definition tab already exists. Please enter different VM Name and try again.',
    FARM_UPDATE_DUPLICATE_VM_ROOT_NAME: 'The RDSH Farm could not be updated. VM Name entered in ' +
        'Definition tab already exists. Please enter different VM Name and try again.',
    FARM_CREATE_INVALID_POOL_SIZE: 'The RDSH Farm could not be created. Invalid assignment size.',
    FARM_UPDATE_INVALID_POOL_SIZE: 'The RDSH Farm could not be updated. Invalid assignment size.',
    FARM_UPDATE_ILLEGAL_CHANGE_REFRESH: 'The RDSH Farm could not be updated. No changes are allowed ' +
        'to an assignment that is in the refresh process.',
    FARM_CREATE_NUM_QUIESCING_SERVERS_INVALID: 'The RDSH Farm could not be created. Concurrent ' +
        'Quiescing Servers provided in Management Tab cannot be less than 1 if Number of ' +
        'Servers/Max Servers is greater than 0.',
    FARM_UPDATE_NUM_QUIESCING_SERVERS_INVALID: 'The RDSH Farm could not be updated. Concurrent ' +
        'Quiescing Servers provided in Management Tab cannot be less than 1 if Number of ' +
        'Servers/Max Servers is greater than 0.',
    FARM_CREATE_NUM_QUIESCING_SERVERS_GREATER_THAN_MAX_SERVERS: 'The RDSH Farm could not be created. ' +
        'Concurrent Quiescing Servers provided in Management Tab cannot be greater than Number ' +
        'of Servers/Max Servers for a farm.',
    FARM_UPDATE_NUM_QUIESCING_SERVERS_GREATER_THAN_MAX_SERVERS: 'The RDSH Farm could not be updated. ' +
        'Concurrent Quiescing Servers provided in Management Tab cannot be greater than Number ' +
        'of Servers/Max Servers for a farm.',
    FARM_CREATE_REPRISTINING_INVALID_TYPE:
        'The RDSH Farm could not be created. RePristining Type is invalid.',
    FARM_UDPATE_REPRISTINING_INVALID_TYPE:
        'The RDSH Farm could not be updated. RePristining Type is invalid.',
    FARM_CREATE_REPRISTINING_SCHEDULE_NOT_SET:
        'The RDSH Farm could not be created. Repristining Schedule is not set.',
    FARM_UPDATE_REPRISTINING_SCHEDULE_NOT_SET:
        'The RDSH Farm could not be updated. Repristining Schedule is not set.',
    FARM_CREATE_REPRISTINING_SCHEDULE_INVALID_FREQUENCY:
        'The RDSH Farm could not be created. Repristining Schedule Frequency is not valid.',
    FARM_UPDATE_REPRISTINING_SCHEDULE_INVALID_FREQUENCY:
        'The RDSH Farm could not be updated. Repristining Schedule Frequency is not valid.',
    FARM_CREATE_REPRISTINING_INVALID_HOUR_OF_DAY: 'The RDSH Farm could not be created. Hour Details ' +
        'provided under Repristining in Management Tab is invalid.',
    FARM_UPDATE_REPRISTINING_INVALID_HOUR_OF_DAY: 'The RDSH Farm could not be updated. Hour Details ' +
        'provided under Repristining in Management Tab is invalid.',
    FARM_CREATE_REPRISTINING_INVALID_DAY_OF_WEEK: 'The RDSH Farm could not be created. Day provided ' +
        'under Repristining in Management Tab is invalid.',
    FARM_UPDATE_REPRISTINING_INVALID_DAY_OF_WEEK: 'The RDSH Farm could not be updated. Day provided ' +
        'under Repristining in Management Tab is invalid.',
    FARM_UPDATE_DT_GOLD_PATTERN_DISABLED: 'Farm(s) cannot be edited if the image is offline. ' +
        'Please bring the image online and try again',
    FARM_DT_GOLD_PATTERN_DISABLED_TITLE: 'Image is offline so this Farm cannot be edited',
    FARM_UPDATE_HOTPLUG_SIZE_CHANGE_ERROR: 'The RDSH Farm could not be updated. The hot-plug setting ' +
        'cannot be changed at the same time the farm size is changed.',
    FARM_UPDATE_HOTPLUG_CONFLICTING_TASKS_ERROR: 'The RDSH Farm could not be updated. The hot-plug ' +
        'setting cannot be changed while other tasks are running for the same farm. ' +
        'Please try again later.',
    FARM_UPDATE_ILLEGAL_GP_CHANGE_UATASK:
        'Unable to modify the farm because gold pattern has update agents task running.',
    FARM_UPDATE_ILLEGAL_SIZE_CHANGE_UATASK:
        'Unable to modify the farm because update agents task is running or queued.',
    FARM_DELETE_ERROR_PENDING_INVENTORY_UPDATE: 'Unable to delete the farm because ' +
        'inventory updates are in progress. Please wait a few minutes and try again.',
    POOL_DELETE_ERROR_PENDING_INVENTORY_UPDATE: 'Unable to delete the assignment ' +
        'because inventory updates are in progress. Please wait a few minutes and try again.',
    POOL_TASK_DELETE_ERROR: 'The Delete or Expand operation of assignment is already ' +
        'in progress. Please try again later.',
    DESKTOP_TASK_ALREADY_EXISTS:
        'The desktop task is already in progress. Please try again later.',
    RAD_MANUAL_RAD_INPUT_DATA_MISSING: 'Unable to {0} Manual RAD, Input Data missing ' +
        'while creating Manual Application Definition.',
    RAD_MANUAL_RAD_INVALID_FILE_PATH:
        'Invalid File Path while {0} Remote Application Definition.',
    RAD_EMPTY_DISPLAY_NAME: 'Unable to {0} Remote Application Definition, DisplayName ' +
        'cannot be be empty. Please provide a valid DisplayName and try again.',
    RAD_INVALID_RAD_ID: 'Unable to {0} Remote Application Definition. Please confirm ' +
        'application details and try again.',
    RAD_DELETE_ERROR: 'Unable to {0} Remote Application Definition with assignments. ' +
        'Please update assignment and try again.',
    RDSH_ENTITLEMENT_ASSIGNMENT_NAME_NULL: 'Unable to {0} Assignment. Assignment Name ' +
        'provided in the definition cannot be null.',
    RDSH_ENTITLEMENT_ASSIGNMENT_SESSION_APP_DEFINITIONS_NOT_SET: 'Unable to {0} Assignment. ' +
        'Please associate one or more application to Assignment.',
    RDSH_ENTITLEMENT_ASSIGNMENT_NAME_IN_USE: 'Unable to {0} Assignment. Assignment Name ' +
        'entered in Definition tab is already in use. Please enter different Assignment Name ' +
        'and try again.',
    RDSH_ENTITLEMENT_ASSIGNMENT_FARM_ID_NULL:
        'Unable to {0} Assignment. Please confirm details and try again.',
    RDSH_ENTITLEMENT_ASSIGNMENT_UPDATE_INVALID_ID:
        'Unable to {0} Assignment. Please confirm details and try again.',
    RDSH_ENTITLEMENT_ASSIGNMENT_TYPE_INVALID:
        'Unable to {0} Assignment. Assignment Type provided is invalid.',
    URL_REDIRECTION_CONFIG_INVALID_ID:
        'Unable to {0} Customization. Please confirm details and try again.',
    URL_REDIRECTION_CONFIG_INVALID_NAME: 'Unable to {0} Customization. Customization Name ' +
        'entered in Definition tab is invalid. Please enter different Name and try again.',
    URL_REDIRECTION_ASSIGNMENT_NAME_IN_USE: 'Unable to {0} Customization. Assignment Name ' +
        'is in use, please use a different name.',
    URL_REDIRECT_DUPLICATE_URL_REDIRECTION_CONFIG_NAME: 'Unable to {0} Customization. Name ' +
        'entered in Definition tab is in use. Please enter different Name and try again.',
    URL_REDIRECT_INVALID_URL_REDIRECTION_HANDLER: 'Unable to {0} Customization. Invalid URL ' +
        'Redirection Configuration Handler. Please correct and try again.',
    URL_REDIRECT_CONFIG_DOES_NOT_EXIST: 'Unable to {0} Customization. Specified Config ' +
        'Doesnot Exists. Please verify and try again.',
    RAD_AUTO_APP_FAILURE: 'There are issues while creating Remote Application Definition. ' +
        'Please try again after corrections. If the issue still persists, please contact your ' +
        'system administrator.',
    AUTO_RAD_EMPTY_DISPLAY_NAME: 'Empty DisplayName',
    AUTO_RAD_INPUT_DATA_MISSING: 'Invalid Input Data',
    AUTO_RAD_INVALID_FILE_PATH: 'Invalid File Path',
    URL_CONFIGURATIONS: 'URL Configurations',
    URL_REDIRECTION_CONFIGURATION_TEXT: 'Create a URL redirection configuration to define ' +
        'which URLs should be opened locally on the client machine and which should be opened ' +
        'using the remote desktop or a specific remote application. For example, you can define ' +
        'a rule to have links open in the specified remote application and not on the client ' +
        'machine when users open http links their emails.',
    URL_PATTERNS: 'URL Patterns',
    HANDLERS: 'Handlers',
    ACTIVE_COLON: 'Active:',
    URL_REDIRECTION: 'URL Redirection',
    NEW_URL_REDIRECT_CONFIG: 'New URL Redirection Configuration',
    URL_REDIRECT_CONFIG: 'URL Redirection Configuration',
    RULES: 'Rules',
    RULES_COLON: 'Rules:',
    URL_CONFIG_INVALID_PATTERN: 'URL Redirection Customization name must contain only ' +
        'letters [a-Z], dashes [-], and numbers. It cannot start with non-alphabetic characters.',
    CONFIG_HANDLERS: 'Configuration',
    URL_PATTERN: 'URL Pattern',
    URL_PATTERN_COLON: 'URL Pattern:',
    HANDLERS_COLON: 'Handlers:',
    RESOURCE_TYPE: 'Resource Type',
    RESOURCE_TYPE_COLON: 'Resource Type:',
    TARGET_RESOURCE: 'Target Resource',
    TARGET_RESOURCE_COLON: 'Target Resource:',
    STRICT_MATCH: 'Strict Match',
    STRICT_MATCH_COLON: 'Strict Match:',
    ADD_CONFIG_HANDLER: 'New Configuration Handler',
    EDIT_CONFIG_HANDLER: 'Edit Configuration Handler',
    SCHEME: 'Scheme',
    SCHEME_COLON: 'Scheme:',
    URL_REDIRECT_CREATED_SUCCESSFULLY: 'URL Redirection Config Created Successfully',
    URL_REDIRECT_UPDATED_SUCCESSFULLY: 'URL Redirection Config Updated Successfully',
    URL_REDIRECT_DELETED_SUCCESSFULLY: 'URL Redirection Config Deleted Successfully',
    MIN_PATTERNS_ERROR: 'Minimum one URL-Pattern is required',
    CONFIG_HANDLER_PATTERN_INVALID: 'Config Handler name must contain only letters ' +
        '[a-Z], dashes [-], and numbers. It cannot start with non-alphabetic characters.',
    DELETE_URL_CONFIG_MSG: 'This will permanently delete the URL Redirection Configuration',
    DELETE_URL_CONFIG_DESC:
        'Are you sure you want to delete this URL Redirection Configuration?',
    URL_CONFIG_HANDLER_NAME_HELP_TEXT: 'Enter a unique configuration handler name.  ' +
        'It must contain only letters [a-Z], dashes{-}, and numbers.  ' +
        'It cannot start with non-alphabetic characters.',
    URL_CONFIG_SCHEME_NAME_HELP_TEXT: 'Enter the URI scheme type for the URL-patterns ' +
        'entered.This specifies schemes to consider when matching \'scheme-less\' URL-Patterns ' +
        'defined above.For example, any content for the URL-patterns specified that uses or ' +
        'matches the http protocol will be redirected.',
    URL_CONFIG_RESOURCE_TYPE_HELP_TEXT: 'Determine if the redirected URL content will be ' +
        'redirected to an application or desktop.',
    URL_CONFIG_TARGET_RESOURCE_HELP_TEXT: 'Enter the name of the target resource for the ' +
        'type you selected.  For example, an application or assignment name.',
    RDSH_DESKTOP_MODEL_COLON: 'Server Model:',
    URL_REDIRECT_STRICT_MATCH_TEXT: 'Select to search the selected resource type for ' +
        'the exact match to the text provided in the target resource field.<br>For example, if ' +
        'Chrome is entered and the user does not have it, a default browser will be used.<br>If ' +
        'No is selected, the content will be redirected the next best match.<br>For example, if ' +
        'Chrome is entered but is not installed on the desktop, a default browser will be used.',
    DELETE_SERVER_CONFIRMATION: 'Are you sure you want to delete the selected servers?',
    DELETE_SERVER_NAME_CONFIRMATION: 'Are you sure you want to delete the server {0}?',
    DELETE_SERVER_MORE_INFO: 'This will permanently delete the servers.',
    DELETE_SERVER_STARTED: 'Delete server request has been sent successfully.',
    WEEK_DAY_SUNDAY: 'Sunday',
    WEEK_DAY_MONDAY: 'Monday',
    WEEK_DAY_TUESDAY: 'Tuesday',
    WEEK_DAY_WEDNESDAY: 'Wednesday',
    WEEK_DAY_THURSDAY: 'Thursday',
    WEEK_DAY_FRIDAY: 'Friday',
    WEEK_DAY_SATURDAY: 'Saturday',
    MAX_SESSION_LIFE_TIME_MESSAGE_COLON: 'Session Lifetime Reminder Message:',
    GRACE_PERIOD_COLON: 'Grace Period:',
    RDSH_FARM_POLICY_PARAMS: 'RDSH Farm',
    RDSH_FARM_POLICY_PARAMS_HELP_TEXT: 'Policy Params Defined For RDSH Farms.',
    MAX_SESSION_LIFE_TIME_HELP_TEXT: 'Enter a message to remind users that they will be ' +
        'logged off after a specified grace period.',
    GRACE_PERIOD_HELP_TEXT: 'Enter an interval of time after which a user is logged off ' +
        'following the session lifetime reminder message.',
    MAX_SESSION_MSG_TOO_LONG: 'Message for this field should not exceed 128 chars.',
    VALID_GRACE_PERIOD_REQUIRED: 'Valid Grace Period should be greater than 0 mins.',
    VALID_DURATION_REQUIRED:
        'An integer greater than or equal to {0} is required in this field.',
    VIEW_COLON: 'View by:',
    CAPACITY_WITH_TYPE: '{0}, <small>{1} Pod</small>',
    CAPACITIES_WITH_TYPE: '{0}, <small>{1} Pods</small>',
    CAPACITY_WITHOUT_TYPE: '{0} Pod',
    CAPACITIES_WITHOUT_TYPE: '{0} Pods',
    NODE_COUNT: '{0} Pod',
    NODES_COUNT: '{0} Pods',
    POD_COUNT: '{0} Pod',
    PODS_COUNT: '{0} Pods',
    VERSION_NO_COLON: 'Version No. :',
    STATE: 'State',
    SUCCESS: 'Success',
    FAILED: 'Failed',
    BATCH_POWER_ON_ERROR: 'An error occured during power on.',
    BATCH_POWER_OFF_ERROR: 'An error occured during power off.',
    BATCH_SUSPEND_ERROR: 'An error occured during suspend.',
    BATCH_LOGOFF_ERROR: 'An error occured during logoff.',
    BATCH_DISCONNECT_ERROR: 'An error occured during disconnect.',
    BATCH_RESUME_ERROR: 'An error occured during resume.',
    BATCH_RESET_ERROR: 'An error occured during reset.',
    CONFIGURE_RDSH_ENABLED_NODES_MSG: 'At least one RDSH capable ' +
        'pod(Application or Desktop) is required for RDSH Farms. ' +
        'Please contact your system administrator.',
    START_TIME: 'Start Time',
    END_TIME: 'End Time',
    ALL_DAY: 'All Day',
    EDIT_LOCATION: 'Edit Location',
    INSTALLED: 'Installed on all servers in farm',
    NOT_INSTALLED: 'Not installed in any of the servers',
    PARTIAL_INSTALLED: 'Partially available on some of the servers',
    VERIFICATION_DISABLED: 'Validation is disabled',
    CUSTOM_APP_AVAILABLE_ON_FARM: 'Application available on Farm:',
    CUSTOM_APPLICATION_PATH_INVALID:
        'Invalid path value. Path should start with \\\\  or drive letter.',
    SCHEME_LENGTH_ERROR_MSG: 'The scheme entry must be between 2 and 32 characters.',
    DUPLICATE_CONFIG_HANDLER: 'A rule already exists with this {0}',
    URL_REDIRECT_NAME_HELP: 'It must start with a letter [a-Z] and contains only ' +
        'letters [a-Z], dashes [-], and numbers.',
    URL_REDIRECT_ACTIVE_HELP: 'Select to have this configuration active.',
    URL_REDIRECT_LOCATION_HELP: 'Select a location to get a refined list of pods ' +
        'available to store the URL redirection configuration.',
    URL_REDIRECT_NODE_HELP: 'Select a pod to store the URL redirection configuration.',
    URL_REDIRECT_DESCRIPTION_HELP: 'Optionally provide a description that will help you ' +
        'remember details for this URL redirect configuration.',
    URL_REDIRECT_PATTERN_HELP: 'Define what URL patterns will be intercepted on the client side.  For example, if you type "http://google.*", all URLs that include the text google are redirected to the remote desktop or application.  If you type .* (dot star), all URLs are redirected to the remote desktop or application.',
    SUMMARY_COLON: 'Summary:',
    TOTAL_SESSIONS: '{0}% ({1}/{2} sessions)',
    FILESHARE_COLON: 'Fileshare:',
    TENANT_APPLIANCE_IP_COLON: 'Pod Manager Load Balancer IP:',
    ALLOCATED_COLON: 'Allocated:',
    ALLOCATED_DISK_SPACE_COLON: 'Allocated Disk Space:',
    ACTIVE_SESSION_COLON: 'Active Session:',
    DESKTOP_SESSIONS_COLON: 'Desktop Sessions:',
    DESKTOP_SESSIONS: 'Desktop Sessions',
    APPLICATION_SESSIONS_COLON: 'Application Sessions:',
    APPLICATION_SESSIONS: 'Application Sessions',
    DESKTOP_IN_USE_COLON: 'Desktop in Use:',
    APPS_IN_USE_COLON: 'Applications in Use:',
    ASSETS: 'Assets',
    ALLOCATED_MODEL: 'Allocated Model',
    TOTAL_ALLOCATED_COLON: 'Total Allocated Model:',
    MODEL_NAMES: '{0}:',
    POD_CERTIFICATES: 'Pod Certificates',
    NO_CERTIFICATE_UPLOADED: 'No certificate uploaded.',
    UPDATE_RESCHEDULE: 'Reschedule',
    CA_CERTIFICATE: 'CA Certificate:',
    SSL_CERTIFICATE: 'SSL Certificate:',
    MODEL_INFORMATIONS: 'These are the various Models that have been allocated to the users.',
    MODEL_HELP_TEXT: 'Select the desired model to be used for this {0}.',
    MODEL_DETAIL_LINK: '<p>For more information, ' +
        '<a href=\'https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes\' ' +
        'target=\'_blank\' rel=\'noopener\'>view details</a>.</p>',
    USER_EDITED_SUCCESSFULLY: 'User has been edited successfully.',
    FARMS_COLON: 'Farms:',
    UNIFIED_ACCESS_CERTIFICATE: 'Unified Access Certificate:',
    SUBNET_MASK: 'Subnet Mask:',
    ALLOCATED_CAPACITY_FULL: 'You are approaching your total capacity.',
    MAX_SESSION_LIFETIME: 'Max Session Lifetime:',
    NEW_LOCATION: 'New Location',
    CREATE_NEW_LOCATION_FAILED: 'Failed to create a new Location.',
    CREATE_LOCATION_GENERIC_ERROR:
        'An internal error occured while trying to create a new location.',
    NEW_LOCATION_ADDED: 'Successfully created a new location.',
    NEW_NODE_ADDED: 'New pod has been created successfully.',
    CAPACITY_LOCATION_ALREADY_EXISTS: 'A location by this name already exists.',
    LOCATION_CREATED: 'Successfully created {0} location.',
    ADD_APPLIANCES: 'Would you like to add pods now?',
    UNABLE_TO_DELETE_LOCATION: 'Unable to delete location',
    CANNOT_DELETE_LOCATION_WITH_NODES: 'A location containing pods cannot be deleted.',
    LOCATION_DELETED_SUCCESSFULLY: 'Successfully deleted the location.',
    LEARN_MORE: 'Learn More',
    DESKTONE_NODE_OFFLINE: 'The pod {0} is offline.',
    DESKTONE_FETCH_HEALTH_FAILED: 'Unable to retrieve health for {0} pod.',
    DESKTONE_FETCH_HEALTH_FAILED_CLUSTER: 'Unable to retrieve health for {0} pod on pod appliance {1}.',
    DESKTONE_HEALTH_OTHER_ISSUE: 'Other health issue',
    DESKTONE_HEALTH_OTHER_ISSUE_CLUSTER: 'Other health issue on pod appliance {0}.',
    DESKTONE_ACTIVEDIRECTORYSTATUS_UNKNOWN: 'The AD status could not be retrieved.',
    DESKTONE_ACTIVEDIRECTORYSTATUS_UNKNOWN_CLUSTER: 'The AD status could not be retrieved on pod appliance {0}.',
    DESKTONE_HYPERVISORMANAGERSTATUS_UNKNOWN:
        'The hypervisor service status could not be retrieved.',
    DESKTONE_HYPERVISORMANAGERSTATUS_UNKNOWN_CLUSTER:
        'The hypervisor service status could not be retrieved on pod appliance {0}.',
    DESKTONE_NTPSERVICE_UNKNOWN: 'The NTP services status could not be retrieved.',
    DESKTONE_NTPSERVICE_UNKNOWN_CLUSTER: 'The NTP services status could not be retrieved on pod appliance {0}.',
    DESKTONE_APPVOLUMESERVICESTATISTICS_UNKNOWN: 'The AVM status could not be retrieved.',
    DESKTONE_APPVOLUMESERVICESTATISTICS_UNKNOWN_CLUSTER: 'The AVM status could not be retrieved on pod appliance {0}.',
    DESKTONE_FILESHARESTATUS_UNKNOWN: 'The file share status could not be retrieved.',
    DESKTONE_FILESHARESTATUS_UNKNOWN_CLUSTER: 'The file share status could not be retrieved on pod appliance {0}.',
    DESKTONE_HYPERVISORMANAGERSTATUS_ERROR: 'The hypervisor service is unavaliable.',
    DESKTONE_HYPERVISORMANAGERSTATUS_ERROR_CLUSTER: 'The hypervisor service is unavaliable on pod appliance {0}.',
    DESKTONE_APPVOLUMESERVICESTATISTICS_ERROR: 'The App Volumes Service is unavailable.',
    DESKTONE_APPVOLUMESERVICESTATISTICS_ERROR_CLUSTER: 'The App Volumes Service is unavailable on pod appliance {0}.',
    DESKTONE_FILESHARESTATUS_OPERATIONALSTATUS_WARN: 'File share ({0}) is unavailable.',
    DESKTONE_FILESHARESTATUS_OPERATIONALSTATUS_WARN_CLUSTER: 'File share ({1}) on pod appliance {0} is unavailable.',
    DESKTONE_FILESHARESTATUS_STATUS_WARN: 'File share ({0}) is unavailable.',
    DESKTONE_FILESHARESTATUS_STATUS_WARN_CLUSTER: 'File share ({1}) on pod appliance {0} is unavailable.',
    DESKTONE_FILESHARESTATUS_OPERATIONALSTATUSDESCRIPTION_WARN:
        'File share ({0}) is unavailable.',
    DESKTONE_FILESHARESTATUS_OPERATIONALSTATUSDESCRIPTION_WARN_CLUSTER:
        'File share ({1}) on pod appliance {0} is unavailable.',
    DESKTONE_ACTIVEDIRECTORYSTATUS_RESPONSETIME_ERROR:
        'AD Service({0}) is taking too long to respond.',
    DESKTONE_ACTIVEDIRECTORYSTATUS_RESPONSETIME_ERROR_CLUSTER:
        'AD Service({1}) on pod appliance {0} is taking too long to respond.',
    DESKTONE_ACTIVEDIRECTORYSTATUS_COMMUNICATIONSTATUS_ERROR: 'AD Service({0}) is down.',
    DESKTONE_ACTIVEDIRECTORYSTATUS_COMMUNICATIONSTATUS_ERROR_CLUSTER: 'AD Service({1}) on pod appliance {0} is down.',
    DESKTONE_ACTIVEDIRECTORYSTATUS_OPERATIONALSTATUS_ERROR: 'AD Service({0}) is down.',
    DESKTONE_ACTIVEDIRECTORYSTATUS_OPERATIONALSTATUS_ERROR_CLUSTER: 'AD Service({1}) on pod appliance {0} is down.',
    DESKTONE_ACTIVEDIRECTORYSTATUS_RESPONSETIME_WARN:
        'AD Service({0}) is taking too long to respond.',
    DESKTONE_ACTIVEDIRECTORYSTATUS_RESPONSETIME_WARN_CLUSTER:
        'AD Service({1}) on pod appliance {0} is taking too long to respond.',
    DESKTONE_NTPSERVICE_STARTED_WARN: 'NTP Service({0}) is down.',
    DESKTONE_NTPSERVICE_STARTED_WARN_CLUSTER: 'NTP Service({1}) on pod appliance {0} is down.',
    DESKTONE_NTPSERVICE_OPERATIONALSTATUS_WARN_5: 'NTP Service({0}) is in sync, ' +
        'but at least one configured time servers is not reachable or was rejected.',
    DESKTONE_NTPSERVICE_OPERATIONALSTATUS_WARN_5_CLUSTER: 'NTP Service({1}) on pod appliance {0} is in sync, ' +
        'but at least one configured time servers is not reachable or was rejected.',
    DESKTONE_NTPSERVICE_OPERATIONALSTATUS_WARN_6:
        'NTP Service({0}) is either down or not in sync.',
    DESKTONE_NTPSERVICE_OPERATIONALSTATUS_WARN_6_CLUSTER:
        'NTP Service({1}) on pod appliance {0} is either down or not in sync.',
    DESKTONE_NTPSERVICE_SYNCSTATE_WARN: 'NTP Service({0}) is not synchronized.',
    DESKTONE_NTPSERVICE_SYNCSTATE_WARN_CLUSTER: 'NTP Service({1}) on pod appliance {0} is not synchronized.',
    DESKTONE_AZURESERVICE_UNKNOWN: 'The Microsoft Azure status could not be queried.',
    DESKTONE_AZURESERVICE_UNKNOWN_CLUSTER: 'The Microsoft Azure status on pod appliance {0} could not be queried.',
    DESKTONE_AZURESERVICE_VIRTUALMACHINESREMAINING_ERROR:
        'There are no virtual machines available in the Microsoft Azure subscription.',
    DESKTONE_AZURESERVICE_VIRTUALMACHINESREMAINING_ERROR_CLUSTER:
        'There are no virtual machines available in the Microsoft Azure subscription on pod appliance {0}.',
    DESKTONE_AZURESERVICE_VIRTUALMACHINESREMAINING_WARN:
        'There are only a few remaining virtual machines available ' +
        'in the Microsoft Azure subscription.',
    DESKTONE_AZURESERVICE_VIRTUALMACHINESREMAINING_WARN_CLUSTER:
        'There are only a few remaining virtual machines available ' +
        'in the Microsoft Azure subscription on pod appliance {0}.',
    DESKTONE_AZURESERVICE_COREREMAINING_ERROR:
        'There are no cores available in the Microsoft Azure subscription.',
    DESKTONE_AZURESERVICE_COREREMAINING_ERROR_CLUSTER:
        'There are no cores available in the Microsoft Azure subscription on pod appliance {0}.',
    DESKTONE_AZURESERVICE_COREREMAINING_WARN:
        'There are only a few remaining cores available in the Microsoft Azure subscription.',
    DESKTONE_AZURESERVICE_COREREMAINING_WARN_CLUSTER:
        'There are only a few remaining cores available in the Microsoft Azure subscription on pod appliance {0}.',
    DESKTONE_AZURESERVICE_STANDARDDV2FAMILYREMAINING_WARN:
        'There are only a few remaining cores available for the Dv2 family of VMs ' +
        '(used by RDSH servers) in the Microsoft Azure subscription.',
    DESKTONE_AZURESERVICE_STANDARDDV2FAMILYREMAINING_WARN_CLUSTER:
        'There are only a few remaining cores available for the Dv2 family of VMs ' +
        '(used by RDSH servers) in the Microsoft Azure subscription on pod appliance {0}.',
    DESKTONE_AZURESERVICE_STANDARDDV2FAMILYREMAINING_ERROR:
        'There are no cores available for the Dv2-series VMs (used by RDSH servers) ' +
        'in the Microsoft Azure subscription.',
    DESKTONE_AZURESERVICE_STANDARDDV2FAMILYREMAINING_ERROR_CLUSTER:
        'There are no cores available for the Dv2-series VMs (used by RDSH servers) ' +
        'in the Microsoft Azure subscription on pod appliance {0}.',
    DESKTONE_AZURESERVICE_STANDARDAV2FAMILYREMAINING_WARN:
        'There are only a few remaining cores available for the Av2-series VMs ' +
        '(used by the Unified Access Gateways) in the Microsoft Azure subscription.',
    DESKTONE_AZURESERVICE_STANDARDAV2FAMILYREMAINING_WARN_CLUSTER:
        'There are only a few remaining cores available for the Av2-series VMs ' +
        '(used by the Unified Access Gateways) in the Microsoft Azure subscription on pod appliance {0}.',
    DESKTONE_AZURESERVICE_STANDARDAV2FAMILYREMAINING_ERROR:
        'There are no remaining cores available for the Av2-series VMs ' +
        '(used by the Unified Access Gateways) in the Microsoft Azure subscription.',
    DESKTONE_AZURESERVICE_STANDARDAV2FAMILYREMAINING_ERROR_CLUSTER:
        'There are no remaining cores available for the Av2-series VMs ' +
        '(used by the Unified Access Gateways) in the Microsoft Azure subscription on pod appliance {0}.',
    DESKTONE_AZURESERVICE_STANDARDFFAMILYREMAINING_WARN:
        'There are only a few remaining cores available for F-series VMs ' +
        '(used by deployment jumpbox) in the Microsoft Azure subscription.',
    DESKTONE_AZURESERVICE_STANDARDFFAMILYREMAINING_WARN_CLUSTER:
        'There are only a few remaining cores available for F-series VMs ' +
        '(used by deployment jumpbox) in the Microsoft Azure subscription on pod appliance {0}.',
    DESKTONE_AZURESERVICE_STANDARDFFAMILYREMAINING_ERROR:
        'There are no remaining cores available for the F-series VMs ' +
        '(used by deployment jumpbox) in the Microsoft Azure subscription.',
    DESKTONE_AZURESERVICE_STANDARDFFAMILYREMAINING_ERROR_CLUSTER:
        'There are no remaining cores available for the F-series VMs ' +
        '(used by deployment jumpbox) in the Microsoft Azure subscription on pod appliance {0}.',
    DESKTONE_CLOUDBROKERCLIENTSTATUS_ERROR:
        'Pod cannot connect to Universal Broker.',
    DESKTONE_CLOUDBROKERCLIENTSTATUS_ERROR_CLUSTER:
        'Pod cannot connect to Universal Broker on pod appliance {0}.',
    ISSUES_DETECTED: 'Issues Detected',
    ISSUE_DETECTED: 'Issue Detected',
    ISSUES: 'Issues',
    READ_MORE: 'Read more',
    DASHBOARD_REFRESH_MESSAGE: 'Last refreshed - {0} {1}',
    EDIT_AZURE_SUBSCRIPTION: 'Edit {0}',
    EDIT_SUBSCRIPTION_SUCCESSFUL: 'Subscription was successfully edited.',
    DELETE_SUBSCRIPTION: 'Remove Subscription',
    NO_NODES_AVL: 'no pods available.',
    AZURE_CLOUD_HOSTING: 'Microsoft\u00ae Azure',
    AZURE_CLOUD_HOSTING_INFO: 'Host desktops and applications on Horizon Cloud on Azure. ' +
        'To add Microsoft Azure pods, click Select.',
    ON_PREMISES_INFO: 'Host desktops and applications on private data center ' +
        '(Powered by VMware SDDC). Private Data Center pods are',
    ON_PREMISES_INFO_MORE: 'Host desktops and applications on private data center ' +
        '(Powered by VMware SDDC). Private Data Center pods are discovered and appear in your console. ' +
        'To learn more, click Select.',
    HYBRID_HOSTING: 'Private Data Center',
    HYBRID_HOSTING_INFO: 'Host your desktops & apps private data center',
    LOCATION_ADDED_SUCCESSFULLY: 'Successfully created new location.',
    LOCATION_EDITED_SUCCESSFULLY: 'Successfully edited the location.',
    EDIT_LOCATION_FAILED: 'Failed to edit Location.',
    CONFIRM_DELETE_LOCATION: 'Are you sure you want to delete this location?',
    DELETE_SUBSCRIPTION_CONFIRM: 'Are you sure you want to remove subscription {0}?',
    DELETE_SUBSCRIPTION_INFO: 'This action will remove all the subscription details. ' +
        'To use this subscription for adding a pod you will need to add the subscription again.',
    SUBSCRIPTION_DELETED_SUCCESSFULLY: 'Subscription has been deleted successfully.',
    DELETE_SUBSCRIPTION_FAILED: 'Failed to delete subscription',
    SUBSCRIPTION_ACTIVE_ERROR: 'This subscription has active pods/sessions.',
    CAPACITY_USED: 'Used',
    PERCENT_OF_LIMITS: '{0}% of limits',
    VIEW_SUBSCRIPTION_LIMITS: 'Subscription Limits',
    VIEW_SUBSCRIPTION_LIMITS_COLON: 'Subscription Limits:',
    VIEW_SUBSCRIPTION_CLOSED: 'Subscription View Dialog closed.',
    VIEW_NAME: 'Name',
    VIEW_REGION: 'Region',
    VIEW_PERCENT: 'Percent',
    VIEW_GLOBAL_SUMMARY: 'Global Summary',
    ON_PREMISES: 'Private Data Center',
    VMWARE_CLOUD_ON_AWS: 'VMware Cloud on AWS',
    MICROSOFT_AZURE: 'Microsoft Azure',
    POD_VIEW_AVS: 'Azure VMware Solution',
    POD_VIEW_DELL_EMC: 'VMware Cloud on Dell EMC',
    POD_VIEW_GOOGLE: 'Google Cloud VMware Engine',
    POD_VIEW_ORACLE: 'Oracle Cloud VMware Solution',
    ASSIGNMENTS_MICROSOFT_AZURE: 'Assignments - Microsoft Azure',
    VDI_DESKTOPS: 'VDI Desktops',
    RDSH_DESKTOPS_APPS: 'RDSH Desktops & Apps',
    ASSIGNMENTS_RDSH_DESKTOPS_APPS: 'Assignments - RDSH Desktops & Apps',
    VDI_DESKTOPS_APP_VOLUMES: 'VDI Desktops & Apps',
    DESKTOPS_APPS: 'Desktops & Apps',
    ASSIGNMENTS_DESKTOPS_APPS: 'Assignments - Desktops & Apps',
    MICROSOFT_AZURE_DESKTOPS_APPS: 'Microsoft Azure Desktops & Apps',
    ASSIGNMENTS_MICROSOFT_AZURE_DESKTOPS_APPS: 'Assignments - Microsoft Azure Desktops & Apps',
    DESKTOPS_APP_VOLUMES: 'Desktops & App Volumes',
    DESKTOPS_RDSH: 'Desktops & RDSH',
    HORIZON_ENTERPRISE_APP_VOLUMES: 'VMware SDDC & App Volumes',
    HORIZON_ENTERPRISE: 'VMware SDDC',
    SDDC_TOOLTIP_KEY_VALUE_LABEL: '{0}: {1} {2}',
    MICROSOFT_AZURE_COMMA: 'Microsoft Azure&#174;,',
    ON_PREMISES_COMMA: 'Private Data Center,',
    VMWARE_SDDC: 'VMware SDDC',
    VMWARE_SDDC_COMMA: 'VMware SDDC,',
    VMWARE_SDDC_PLATFORM: 'VMware SDDC Platform',
    OTHER_PLATFORMS: 'Other Platforms',
    SDDC_VIEW_VMC_DOWNLOAD_LINK: 'http://www.vmware.com/go/download-horizoncloudconnector',
    INFO_VMWARE_SDDC_MODAL_TITLE: 'Select the capacity platform for this Horizon pod.',
    INFO_VMWARE_SDDC_VIEW_VMC_AWS: `To add a Horizon pod on VMware Cloud on AWS, click Add. <br>
        Or, click Download to connect the pod using the Horizon Cloud Connector.`,
    INFO_VMWARE_SDDC_OTHER_PLATFORMS: `
        To add a Horizon pod on the following platforms, click Download to connect the pod using the Horizon Cloud Connector:
        <ul>
          <li>VMware Cloud on Dell EMC</li>
          <li>Azure VMware Solution</li>
          <li>Google Cloud VMware Engine</li>
          <li>Oracle Cloud VMware Solution</li>
          <li>On-premises in your private data center</li>
          <li>Any other platform not listed here</li>
        </ul>
      `,
    VMWARE_SDDC_DESCRIPTION: 'Deploy or connect a Horizon pod on a VMware SDDC-based platform into \n' +
        'a public cloud or private data center.',
    VMWARE_CLOUD_ON_AWS_COMMA: 'VMware Cloud on AWS,',
    CLOUD: 'Cloud',
    MIXED: 'Mixed',
    ADD_CLOUD_CAPACITY: 'Add Cloud Capacity',
    APPLY_SUBSCRIPTION_INFO: 'Select the name of a previously entered subscription or ' +
        'select <strong>Add New</strong> to enter new subscription information.',
    SUBSCRIPTION_NAME_INFO: 'When adding new subscription information, give a friendly ' +
        'name to identify the subscription from previously entered subscriptions.',
    AZURE_ENVIRONMENT_INFO:
        'Select the Microsoft Azure environment associated with your Microsoft Azure subscription. For example, ' +
        'select "Azure - Commercial" if you use <a href=\'https://portal.azure.com\' target=\'_blank\' rel=\'noopener\'>' +
        'https://portal.azure.com</a>, or "Azure - US Government" if you use ' +
        '<a href=\'https://portal.azure.us\' target=\'_blank\' rel=\'noopener\'>https://portal.azure.us</a>.',
    SUBSCRIPTION_ID_INFO: 'Enter your Microsoft Azure subscription ID (in UUID form). ' +
        'You can obtain this UUID in the Microsoft Azure portal\'s Subscriptions area.',
    DIRECTORY_ID_INFO: 'Enter your Microsoft Azure AD Directory ID (in UUID form). ' +
        'You can obtain this UUID from your Microsoft Azure Active Directory properties in ' +
        'the Microsoft Azure portal.',
    APPLICATION_ID_INFO: 'Enter the application ID (in UUID form) associated with the ' +
        'service principal you created in the Microsoft Azure portal. Creating an application ' +
        'registration and its associated service principal in your Microsoft Azure Active ' +
        'Directory is a prerequisite.',
    APPLICATION_KEY_INFO: 'Enter the key value for the service principal\'s authentication ' +
        'key that you created in the Microsoft Azure portal. Creating this key is a prerequisite.',
    POD_NAME_INFO: 'Enter a friendly name to identify this pod from your other pods. ' +
        'The name should contain only letters [a-Z], dashes [-] and numbers.',
    POD_LOCATION_INFO: 'Select a city to represent the pod location, or click Add to specify a new city.',
    AZURE_REGION_INFO: 'Select the physical geographic Microsoft Azure region into ' +
        'which you want the pod to be deployed. The available regions are determined by the ' +
        'previously selected Microsoft Azure environment.',
    HIGH_AVAILABILITY_INFO: 'Select to enable high availability (requires agent version 19.3.0 or ' +
        'later on all assignments and images).',
    HIGH_AVAILABILITY_REPLICAS_INFO: 'Enter the number of replicas for high availability.',
    HIGH_AVAILABILITY_DOWNGRADE_INFO: 'Open support ticket to disable high availability after enabled.',
    VIRTUAL_NETWORK_INFO: 'Select an existing Virtual Network from your Microsoft Azure ' +
        'region into which the Horizon Cloud Service Pod will be deployed. If you need to ' +
        'create a new virtual network for this purpose, this can be done ' +
        'from the Microsoft Azure portal.',
    VIRTUAL_NETWORK_EMPTY: 'Please add a Virtual Network for this region in Microsoft Azure',
    POD_DESCRIPTION_INFO:
        'Optionally provide a description that will help you remember details for this pod',
    MGMT_SUBNET_INFO: 'Enter a subnet (in CIDR notation) to which the pod and Unified ' +
        'Access Gateway instances get connected, such as 192.160.0.50/27. Minimum: /27.',
    MGMT_SUBNET_SELECT_INFO: 'Select a subnet to which the pod and Unified Access Gateway in' +
        'stances get connected. Minimum supported address is /27.',
    MGMT_SUBNET_DISPLAY_INFO: 'The subnet to which the pod and Unified Access Gateway in' +
    'stances are connected',
    DESKTOP_SUBNET_INFO: 'Enter the subnet (in CIDR notation) to use for end-user desktops and applications on this pod, ' +
        'such as 192.160.1.50/27. Minimum: /27. Recommended: /22.',
    DESKTOP_SUBNET_SELECT_INFO: 'Select a subnet to use for end-user desktops and applications on this pod. ' +
        'Minimum supported address is /27.',
    DESKTOP_SUBNET_DISPLAY_INFO: 'The subnet for end-user desktops and applications on this pod.',
    NTP_SERVER_INFO: 'Enter the list of NTP servers to use for time synchronization, ' +
        'separated by commas (for example time.example.com, 10.11.12.13).',
    ACCESS_GATEWAY_FQDN_INFO: 'Enter the fully qualified domain name (FQDN), such as ' +
        'myApps.example.com, that your end users will use to access the service. ' +
        'Underscores [ _ ] are not allowed. You must own the domain and have a ' +
        'certificate that can validate it.',
    DMZ_SUBNET_INFO: 'Enter the subnet (in CIDR notation) for the DMZ network that will be ' +
        'configured to connect the Unified Access Gateway instances to the load balancer. ' +
        'Recommended: /28.',
    DMZ_SUBNET_SELECT_INFO: 'Select a subnet for the DMZ network that will be configured ' +
        'to connect the Unified Access Gateway instances to the load balancer. ' +
        'Minimum supported address is /28.',
    DMZ_SUBNET_DISPLAY_INFO: 'The subnet for the DMZ network that is configured ' +
    'to connect the Unified Access Gateway instances to the load balancer.',
    UPLOAD_CERT_INFO: 'Upload the certificate that the Unified Access Gateway will use to ' +
        'allow clients to trust connections to the Unified Access Gateway ' +
        'running in Microsoft Azure.',
    EDIT_NODE_BY_NAME: 'Edit: {0}',
    EDIT_POD: 'Edit Pod',
    SUBSCRIPTION_ID_INFO_EDIT: 'This is your Microsoft Azure subscription ID (in UUID form) ' +
        'obtained from the Microsoft Azure portal\'s Subscriptions area.',
    DIRECTORY_ID_INFO_EDIT:
        'This is your Microsoft Azure AD Directory ID (in UUID form) obtained from your ' +
        'Microsoft Azure Active Directory properties in the Microsoft Azure portal.',
    APPLICATION_ID_INFO_EDIT: 'Optionally edit the application ID (in UUID form) associated ' +
        'with the service principal you created in the Microsoft Azure portal. Creating an ' +
        'application registration and its associated service principal in your Microsoft Azure ' +
        'Active Directory is a prerequisite.',
    APPLICATION_KEY_INFO_EDIT: 'Optionally change the key value for the service principal\'s ' +
        'authentication key that you created in the Microsoft Azure portal. ' +
        'This key is a prerequisite.',
    EDIT_POD_SUCCEEDED: 'Pod details have been edited successfully.',
    EDIT_POD_FAILED: 'Failed to edit pod details. Please try again.',
    CONFIRM_DELETE_POD: 'Are you sure you want to delete pod - {0}?',
    CONFIRM_DELETE_POD_INFO: 'This action will delete all the data stored on the pod, ' +
        'including all Images and Farms. Any users with connected sessions will be disconnected ' +
        'immediately and therefore data loss could occur.',
    DELETE_VIEW_POD_INFO: 'Delete View Pod',
    DELETE_VIEW_POD_INSTRUCTION_TEXT: 'To delete the pod, log in to the Cloud Connector and ' +
        'unplug the connector. ' +
        '<a href=\'http://www.vmware.com/go/hcs-add-vmc-capacity-doc\' target=\'_blank\' rel=\'noopener\'>Learn More</a>',
    CONFIRM_DISCONNECT_VIEW_POD: 'Are you sure you want to disconnect pod - {0}?',
    DISCONNECT_VIEW_POD_INSTRUCTION_TEXT: 'This action will remove the pod from the ' +
        'Horizon Cloud Console.',
    CANNOT_DISCONNECT_VIEW_POD_INFO: 'Unable to disconnect pod',
    CANNOT_DISCONNECT_VIEW_POD_INSTRUCTION_TEXT: 'Assignments are associated with this pod. To disconnect the pod, please delete the assignments and try again.',
    DISCONNECT_POD_FAILED: 'Unable to disconnect pod. Please try again.',
    ENTER_POD_NAME_TO_DELETE_COLON: 'Enter the pod name to confirm:',
    DISCONNECT_POD_SUCCEEDED: 'Successfully disconnected pod {0}.',
    DELETE_POD_SUCCEEDED: 'Pod deletion in progress.',
    DELETE_POD_FAILED: 'Failed to delete pod. Please try again.',
    FARM_DESCRIPTION_HELP_TEXT:
        'Provide a description that will help identify the farm in the system.',
    FARM_TYPE_RADIO_HELP_TEXT: 'Select the assignment type this farm will be used for.  ' +
        'This selection should be kept in mind when selecting the virtual machine size as desktop ' +
        'assignments may require more capacity.',
    FARM_LOCATION_HELP_TEXT: 'Select a location to get a refined list of pods.',
    FARM_NODE_HELP_TEXT: 'Select a pod for this farm.',
    PREFERRED_PROTOCOL_HELP_TEXT:
        'Choose either PCoIP or Blast protocol as the default protocol for the end user session.',
    PREFERRED_CLIENT_TYPE_HELP_TEXT:
        'Choose which source to use to launch assignments associated with this farm.',
    POOLS_PREFERRED_CLIENT_TYPE_HELP_TEXT:
        'Choose which source to use to launch assignments associated with this pool.',
    DOMAIN_HELP_TEXT: 'Select the domain you would like to use for this farm.',
    JOIN_DOMAIN_HELP_TEXT: 'Select to join the domain.  If you unselect, you will ' +
        'manually need to go to the virtual machine to join to the domain before you can connect to ' +
        'the Active Directory.',
    MIN_VMS_COLON_HELP_TEXT: 'Enter the minimum number of usable virtual machines in this farm ' +
        'so not all virtual machines are running at the same time.',
    MAX_VMS_COLON_HELP_TEXT: 'Enter the maximum number of virtual machines that can exist at ' +
        'any one time so not all virtual machines will be running at the same time.',
    SESSION_PER_VM_HELP_TEXT:
        'Select the total number of sessions you want to allow per virtual machine.',
    VM_NAMES_HELP_TEXT: 'By default, the virtual machine name is given as all the virtual machines for this ' +
        'farm.  Enter the name for all the sessions which will have numbers appended to it ' +
        '(virtual machine name 1, virtual machine name 2, etc.) and must start with a letter and can contain ' +
        'only letters, dashes, and numbers.',
    FARM_RUN_SCRIPT_HELP_TEXT: 'Optionally enter the full executable path of a script that ' +
        'will run after the system preparation is complete.',
    RE_PRESTINING_TYPE_COLON_HELP_TEXT: 'Select whether a scheduled or session maintenance ' +
        'type is preferred.  Rolling maintenance triggers a virtual machine refresh.  With scheduled, ' +
        'the refresh is triggered daily or weekly according to the parameters you enter.  ' +
        'With session, the refresh is triggered when the number of sessions you can enter have ' +
        'been logged on.  In both cases, ' +
        'the refresh won\'t happen until the end user is logged off.',
    RE_PRESTINING_RECURRENCE_COLON_HELP_TXT: 'Select the frequency, daily or weekly, with ' +
        'which the virtual machine refresh should be scheduled.',
    RECURRENCE_DAY_COLON_HELP_TXT:
        'Select the day of the week for the virtual machine refresh to be scheduled.',
    RECURRENCE_START_HOUR_COLON_HELP_TEXT:
        'Enter the time of day for the virtual machine refresh to be scheduled.',
    ON_AFTER_HELP_TEXT: 'Enter the number of logged on sessions you prefer to trigger a ' +
        'virtual machine refresh.  The refresh won\'t happen until the end users are logged off.',
    POWER_MANAGEMENT_AGGRESSIVENESS_HELP_TEXT: 'Select the threshold of virtual machine utilization ' +
        'for this farm at which a new virtual machine is spun up and drained respectively.  ' +
        'With an Optimized Performance selection, a new virtual machine is spun up sooner, making ' +
        'capacity readily available for a possible enhanced user experience.  With an Optimized ' +
        'Power selection, the virtual machine will have a higher utilization rate before spinning up a ' +
        'new virtual machine, which may help minimize costs.',
    EMPTY_SESSION_TIMEOUT_HELP_TEXT:
        'Enter how many minutes it takes for an idle session to timeout, or choose never.',
    EDIT_EMPTY_SESSION_TIMEOUT_HELP_TEXT: 'Optionally change how many minutes it takes for ' +
        'an idle session to timeout, or choose never.',
    WHEN_TIMEOUT_OCCURS_HELP_TEXT: 'If a timeout occurs, choose to disconnect the session ' +
        'or log off.  With disconnect, the session is disconnected from the network and ' +
        'preserved in memory.  Log off ends the session completely and credentials will need ' +
        'to be re-entered.',
    MAX_SESSION_LIFETIME_HELP_TEXT: 'Enter the maximum number of minutes for the session.',
    LOG_OFF_DISCONNECTED_SESSIONS_HELP_TEXT: 'Determine when a disconnected session is ' +
        'logged off. Select Never, Immediate, or After how many entered minutes. When a ' +
        'disconnected session is logged off, the session is lost.',
    ISSUES_DETECTED_NODE: 'Issues detected across Pod.',
    ISSUES_DETECTED_NODES: 'Issues detected across Pods.',
    DEPLOYMENT_ERROR: 'Deployment Error.',
    ONLINE_WITH_ISSUE_UNKNOWN: 'Online with unknown Issues.',
    ONLINE_WITH_ISSUE_WARN: 'Online with warnings.',
    ONLINE_WITH_ISSUE_ERROR: 'Online with Errors.',
    ONLINE_WITH_ISSUE: 'Online with Issues.',
    IN_PROGRESS: 'In Progress',
    INSTALLING: 'Installing',
    PROGRESS: 'Progress',
    SYNCING: 'Syncing',
    UPGRADING: 'Upgrading',
    FARM_SIZE_ZERO_ERROR:
        'There are no applications available to add from this farm because it has no servers.',
    FARM_NOT_READY_ERROR: 'Applications are not currently available for this farm. ' +
        'The server has been powered off or deleted because of rolling maintenance ' +
        'or power management.',
    MANUAL_APP_NAME_HELP: 'Give a friendly name to identify the application in the system.',
    MANUAL_APP_LOCATION_HELP: 'Select a location to get a refined list of pods.',
    MANUAL_APP_NODE_HELP: 'Select a pod in which you would like to select a farm from.',
    MANUAL_APP_VERSION_HELP:
        'Enter the version of this application. It must be a numeric value.',
    MANUAL_APP_PATH_HELP: 'Type the path to retrieve the application from.',
    MANUAL_APP_ICON_HELP: 'Select an icon that will help you identify this application. ' +
        'File formats supported are PNG, JPG, and ICON up to 4MB.',
    MANUAL_APP_AVAILABLE_HELP: 'Select to validate the application path.  If the ' +
        'application is not available on the farm, it will not be validated.  For example, ' +
        'thin applications or applications stored in the local directory.',
    MANUAL_APP_PARAMS_HELP_TEXT:
        'Enter the publisher information for this application, i.e. Microsoft.',
    MANUAL_APP_PUBLISHER_HELP:
        'Enter the publisher information for this application, i.e. Microsoft.',
    PREPARING: 'Preparing',
    CONNECTING: 'Connecting',
    BUILDING: 'Building',
    NOTCONNECTED: 'Not Connected',
    DOWNLOADING: 'Downloading',
    URL_CONFIG_TITLE_DESC: 'Create a URL redirection configuration to define which URLs ' +
        'should be opened locally on the client machine and which should be opened using the ' +
        'remote desktop or a specific remote application. For example, you can define a rule ' +
        'to have links open in the specified remote application and not on the client machine ' +
        'when users open http links their emails.',
    SESSION_ALLOCATION_STATE: 'Session Allocation State',
    SESSION_ALLOCATION_STATE_UNAVAILABLE: 'Unavailable',
    SESSION_ALLOCATION_STATE_AVAILABLE: 'Available',
    SESSION_ALLOCATION_STATE_QUIESCING: 'Quiescing',
    SESSION_ALLOCATION_STATE_DRAINING: 'Draining',
    SESSION_ALLOCATION_STATE_DELETING: 'Deleting',
    SESSION_ALLOCATION_STATE_AGENT_UPDATING: 'Updating Agent',
    SESSION_ALLOCATION_STATE_ADMIN_DELETED: 'Admin Deleted',
    SESSION_ALLOCATION_STATE_AGENT_ROLLBACKING: 'Rollbacking Agent',
    CAPACITY_HELP_TEXT: 'Capacity utilization measures how much of a pod\'s virtual CPU resources (vCPUs) are ' +
        'in use compared to the total vCPUs potentially available based on the pod\'s underlying capacity infrastructure.',
    ALLOCATED_DISK_SPACE_HELP_TEXT: 'Total Allocated Disc Space',
    DESKTOP_APP_UTILIZATION_HELP_TEXT: 'Desktop & App Utilization percentage is a measure ' +
        'of user activity in terms of sessions in use versus max sessions possible. The overall ' +
        'percentage is calculated by adding all active sessions across all pods and dividing by ' +
        'the sum of the maximum number of sessions across all pods.',
    WORKSPACE_ONE_ACCESS_HELP_TEXT: 'Items that integrate with your VMware Workspace ONE Access solution.',
    BROWSER_CERTIFICATES_HELP_TEXT: 'A list of certificates that have been installed on ' +
        'this pod to indicate the information shared by this pod is secure.',
    UNIFIED_ACCESS_GATEWAY_HELP_TEXT: 'Internet Enabled Desktops details',
    GLOBAL_LOCATION_HELP_TEXT: 'Select a location to get a refined list of pods.',
    GLOBAL_NODE_HELP_TEXT: 'Select a pod from the list.',
    AUDIT_LOGS: 'Audit Logs',
    AUDIT_LOGS_FILE: 'Audit_Logs',
    SELECT_APP_APPSTACK: 'Select this option to add applications from App Stacks that are ' +
        'stored in a FileShare location.  App Stacks are a bundle of applications that have been ' +
        'created using the common capture tool.',
    SELECT_APP_FARM: 'Select this option to add remote applications from a farm.  A farm is ' +
        'a collection of VMs that provides users with session-based desktops and applications.',
    SELECT_APP_MANUAL: 'Select this option to manually specify an application that might not ' +
        'have been automatically identified on the farm.',
    GO_TO_FILESHARE: 'Go To Fileshare',
    NEW_APPLICATION: 'New Application',
    ATTRIBUTES: 'Attributes',
    NEW_APPLICATION_DESC:
        'There are {0} ways you can add a new Application to your inventory.',
    IMAGE_NAME_HELP: 'Give a unique name to the image that will be used as ' +
        'the operating system on your virtual desktop(s).',
    COMPANY_NAME_HELP: 'Enter the name that will appear as the default in the ' +
        'desktop that are created with this image.',
    TIMEZONE_HELP: 'Setting a time zone here will be the default time zone for ' +
        'the desktop that are created with this image.',
    CREATE_FARM: 'Create Desktop Farm',
    CREATE_APP_FARM: 'Create Application Farm',
    APP_FARM_DESC: 'Create a farm of virtual machines that will be used to provision applications.',
    GETTING_STARTED_FARM_DESC:
        'Create a farm of virtual machines that will be used to provision desktops.',
    DESTINATION_DESKTOP: 'Destination Desktop',
    DESTINATION_POD: 'Destination Pod',
    VIRTUAL_MACHINE_DETAILS: 'Virtual Machine Details',
    SERVER_MODEL_COLON: 'Server Model:',
    ADMIN_CREDENTIAL_FOR_DESKTOP: 'Admin Credential for Desktop',
    ENABLE_PUBLIC_IP_ADDRESS_COLON: 'Enable Public IP Address:',
    MARKETPLACE_NAME_HELP_TEXT: 'Give a unique name to the desktop that will be used to ' +
        'create an image.  This image will used as the operating system on the virtual desktops.',
    MARKETPLACE_NAME_PATTERN_WARNING: 'Name must contain only letters [a-Z], dashes [-], ' +
        'and numbers. It cannot start with non-alphabetic characters.',
    MARKETPLACE_DESCRIPTION_HELP_TEXT:
        'Provide a description for the desktop that will be used to create an image.',
    MARKETPLACE_LOCATION_HELP_TEXT:
        'Select a location to get a refined list of pods avaiable to store the desktop.',
    MARKETPLACE_NODE_HELP_TEXT: 'Select a pod to serve the desktop from.',
    MARKETPLACE_OS_HELP_TEXT:
        'Select the operating system to use from the Microsoft Azure Marketplace.',
    MARKETPLACE_SERVER_MODEL_HELP_TEXT:
        'Choose the server model:  Small: D2_v2 2 CPU | 7 Gb Memory | 100 SSD  Medium: D3_v2 4 ' +
        'CPU  | 14 Gb Memory | 200 SSD  Large: D4_v2 8 CPU |28 Gb Memory | | 400 GB SSD GPU: ' +
        'NV6 6 CPU | 56 Gb Memory | 380 SSD',
    MARKETPLACE_DOMAIN_HELP_TEXT: 'Select the domain you would like to use for this desktop.',
    MARKETPLACE_ENABLE_PUBLIC_IP_ADDRESS_HELP_TEXT: 'Select to configure a public IP ' +
        'address so you can access the VM through an RDP connection.',
    MARKETPLACE_USERNAME_HELP_TEXT: 'Create the admin username that will be used for the local admin account to access the VM\'s operating system, and also used during the convert to image process. This username can be a maximum of 15 characters in length, cannot end in a period ("."), and not a username that isn\'t allowed in Microsoft Azure, like "guest" or "administrator".',
    AZURE_VM_USER_NAME_INVALID_WARNING: 'Usernames can be a maximum of 15 characters in length, cannot end in a period ("."), and not a username that isn\'t allowed in Microsoft Azure, like "guest" or "administrator".',
    MARKETPLACE_PASSWORD_HELP_TEXT: 'Create the password to use with the entered Username for the local admin account to access the VM\'s operating system. Passwords must be 12 - 123 characters in length and meet 3 out of the following 4 complexity requirements: contain lower case characters, have upper case characters, have a digit, contain a special character(!@#$%/^&*). Also, do not use a password that isn\'t allowed in Microsoft Azure, like "Password1".',
    MARKETPLACE_PASSWORD_PATTERN_WARNING: 'Passwords must be 12 - 123 characters in length and meet 3 out of the following 4 complexity requirements: contain lower case characters, have upper case characters, have a digit, contain a special character(!@#$%/^&*). Also, do not use a password that isn\'t allowed in Microsoft Azure, like "Password1".',
    MARKETPLACE_VERIFY_PASSWORD_HELP_TEXT: 'Re-enter the password to use with the entered ' +
        'Username for the local admin account to access the VM\'s operating system.',
    DO_YOU_HAVE_LICENSE_COLON: 'Do you have a {0} License: ',
    DO_YOU_HAVE_WINDOWS_LICENSE_COLON: 'Do you have a valid license for this Windows OS: ',
    WINDOWS_SERVER_LICENSE_CONFIRM: 'I confirm that I have an eligible Windows license with ' +
    'Software Assurance or {0} subscription to apply this Azure Hybrid Benefit.',
    WINDOWS_CLIENT_LICENSE_CONFIRM: 'I confirm that I have an eligible Windows license with ' +
    'Software Assurance to apply this benefit.',
    FARM_WINDOWS_SERVER_LICENSE_CONFIRM: 'I confirm that I have eligible Windows licenses ' +
    'with Software Assurance or {0} subscription to apply this Azure Hybrid Benefit.',
    POOL_WINDOWS_CLIENT_LICENSE_CONFIRM: 'I confirm that I have eligible Windows licenses ' +
    'with Software Assurance to apply this benefit.',
    WINDOWS_OS_LICENSE_CONFIRM: 'I confirm that I have an eligible license for this Windows OS.',
    WVD_OS_LICENSE_ASSIGNMENT_HELP_TEXT: 'An eligible license for Windows OS is required to deploy and use this assignment. ' +
        'See <a href="http://www.vmware.com/go/mslicensing" target="_blank" rel="noopener">Windows Virtual Desktop pricing</a> for information on eligible licenses applicable to this service, ' +
        'which provides Windows Virtual Desktop capability. Select the checkbox to confirm that you have a valid license ' +
        'that entitles you to this Windows OS and all appropriate end-user licensing.',
    WVD_OS_LICENSE_FARM_HELP_TEXT: 'An eligible license for Windows OS is required to deploy and use this farm. ' +
        'See <a href="http://www.vmware.com/go/mslicensing" target="_blank" rel="noopener">Windows Virtual Desktop pricing</a> for information on eligible licenses applicable to this service, ' +
        'which provides Windows Virtual Desktop capability. Select the checkbox to confirm that you have a valid license ' +
        'that entitles you to this Windows OS and all appropriate end-user licensing.',
    WINDOWS_OS_LICENSE_HELP_TEXT: 'If you own Windows license(s) with active Software ' +
        'Assurance (SA), use Azure Hybrid Benefit to save compute cost.',
    WINDOWS_CLIENT_LICENSE_HELP_TEXT: 'If you own Windows license(s) with active Software ' +
        'Assurance (SA), use Azure Hybrid Benefit to save compute cost.',
    WINDOWS_SERVER_LICENSE_HELP_TEXT: 'If you own Windows license(s) with active Software ' +
        'Assurance (SA) or have an active {0} subscription, ' +
        'use Azure Hybrid Benefit to save compute cost.',
    ADVANCED_OPTIONS: 'Advanced Options',
    HORIZON_AGENT_FEATURES: 'Horizon Agent Features',
    HORIZON_AGENT_FEATURES_INFO: 'Horizon agent features installed by default for VM ' +
        'preparation are already enabled. Disable these features if you do not want them installed.',
    HORIZON_AGENT_FEATURES_DISABLED_INFO: 'All the Horizon Agent features except USB Redirection ' +
    'and Help Desk will be disabled for a Windows 7 OS.',
    FLASH_MMR_REDIRECTION_COLON: 'Enable Flash MMR:',
    FLASH_MMR_REDIRECTION_HELP_TEXT: 'Select to have Flash content sent to the client ' +
        'system and played in a Flash container window using the Flash Player ActiveX version.',
    '3D_SUPPORT_RDSH_COLON': '3D support in RDSH:',
    '3D_SUPPORT_RDSH_HELP_TEXT': 'Select to have support for vGPU powered 3D RDS hosts.',
    '3D_SUPPORT_WIN10_COLON': '3D Support in Windows 10 Multi-Session:',
    '3D_SUPPORT_WIN10_HELP_TEXT': 'Select to support vGPU powered 3D multi-session hosts.',
    MMR_TERMINAL_SERVICE_COLON: 'MMR for Terminal Services:',
    MMR_TERMINAL_SERVICE_HELP_TEXT: 'Select to deliver the multimedia stream directly ' +
        'to client computers. The multimedia stream is processed, that is, decoded, on the ' +
        'client system. The client system plays the media content, thereby offloading the demand ' +
        'on the terminal service host.',
    CLIENT_DRIVE_REDIRECTION_COLON: 'Client Drive Redirection:',
    CLIENT_DRIVE_REDIRECTION_HELP_TEXT: 'Select to share folders and drives on your ' +
        'local system with remote desktops and applications.',
    SFB_URL_REDIRECTION_COLON: 'Skype for Business:',
    SFB_URL_REDIRECTION_HELP_TEXT: 'Select to make optimized audio and video calls with ' +
        'Skype for Business inside a virtual desktop without negatively affecting the virtual ' +
        'infrastructure and overloading the network.',
    WEB_CAM_SUPPORT_COLON: 'Webcam Support (Real Time Audio Video RTAV):',
    WEB_CAM_SUPPORT_HELP_TEXT: 'Select to run Skype, Webex, Google Hangouts, and other ' +
        'online conferencing applications on remote desktops with client local webcam ' +
        'and audio devices.',
    SMART_CARD_COLON: 'Smart Card:',
    SMART_CARD_HELP_TEXT: 'Select to redirect smart cards from client to remote ' +
        'sessions for both SSO and in-session leverage.',
    THIN_PRINT_COLON: 'Thin Print:',
    VMW_PRINT_COLON: 'VMware Print:',
    THIN_PRINT_HELP_TEXT: 'Select to allow end users to print to any printer available on their ' +
        'client computers without installing additional drivers.',
    VMWARE_PRINT_HELP_TEXT: 'Select to allow the installation and use of native ' +
        'VMware integrated printing, which allows end users to use any printer available on their ' +
        'client computers without installing additional drivers.',
    SCANNER_REDIRECTION_COLON: 'Scanner Redirection:',
    SCANNER_REDIRECTION_HELP_TEXT: 'Select to enable redirection of scanning and ' +
        'imaging devices that are connected to the user\'s local client system so those devices ' +
        'can be used with the desktop or remote application.',
    USB_REDIRECTION_COLON: 'USB Redirection:',
    USB_REDIRECTION_HELP_TEXT: 'Select to enable redirection of USB devices that are ' +
        'connected to the user\'s local client system so those devices can be used with ' +
        'the desktop or remote application.',
    URL_REDIRECTION_COLON: 'URL Redirection:',
    URL_REDIRECTION_HELP_TEXT: 'Select to collect performance data from monitored ' +
        'software and hardware objects in your Horizon environment and provide predictive ' +
        'analysis and real-time information about problems in your Horizon infrastructure. ',
    SERIAL_PORT_REDIRECTION: 'Serial Port Redirection:',
    SERIAL_PORT_REDIRECTION_HELP_TEXT: 'Select to enable devices connected to serial ' +
        'ports on the user\'s local client system so those devices can be used with the ' +
        'remote desktop or application.',
    GEOLOCATION_REDIRECTION: 'Geolocation Redirection:',
    GEOLOCATION_REDIRECTION_HELP_TEXT: 'Select to allow the geolocation information ' +
        'of the client system to be used by Internet Explorer in remote desktops.',
    HELP_DESK: 'Help Desk:',
    HELP_DESK_HELP_TEXT: 'Select to install the Help Desk.',
    VIRTUAL_MACHINE_ADMIN_CREDENTIALS_NO_COLON: 'Admin Credentials for the Virtual Machine',
    MARKETPLACE_MODAL_TITLE: 'Import Virtual Machine - Marketplace',
    IMPORT_VM_MODAL_TITLE: 'Import Virtual Machine',
    MARKETPLACE_IMPORT_INITIATED_SUCCESS: 'Successfully initiated the import of {0} from ' +
        'the Microsoft Azure Marketplace.',
    MARKETPLACE_IMPORT_PREP_WARNING: 'The VM takes several minutes to prepare. It will ' +
        'appear in the list when it is ready to use.',
    ADD_YOUR_OWN: 'Add Your Own',
    ADD_YOUR_OWN_DESCRIPTION: 'Select this option to import an operating system image that ' +
        'you have prepared offline by preinstalling the Horizon Cloud Agent components.',
    FROM_MARKET_PLACE: 'From Marketplace',
    FROM_MARKET_PLACE_DESCRIPTION: 'Select this option to import a Windows OS Virtual ' +
        'Machine from the Microsoft Azure Marketplace, which will be automatically ' +
        'configured with the Horizon Cloud Agent components.',
    NUM_APPLICATION_CREATED_SUCCESSFULLY: 'Successfully found and added {0} new applications.',
    ASSIGNMENT_TYPE_HELP: 'Choosing Native will launch the applications directly within the ' +
        'VDI desktop. Choosing Remote will provide users with the Remote application that will ' +
        'launch on a shared session running on a server.',
    DESKTOP_ASSIGN_DOMAIN_HELP_TEXT: 'Select the domain name for this assignment. ' +
        'The domain selected determines users available in the user step of this flow.',
    DESKTOP_ASSIGN_JOIN_DOMAIN_HELP_TEXT: 'It is recommended that Join Domain be set to \u201CYes\u201D. \u00A0If it is set to \u201CNo\u201D, you will manually need to go to the server to join to the Domain before you can connect to the Active Directory.',
    DEFAULT_PROTOCOL_HELP_TEXT: 'Select the default protocol for the end-user session.',
    DESKTOP_ASSIGN_CAPACITY_HELP_TEXT: 'Enter the capacity up to the maximum remaining.',
    DESKTOP_ASSIGN_CAPACITY_MAX_COUNT_HELP_TEXT: 'Enter the capacity up to the maximum ' +
        'remaining. Maximum desktop count for this POD is {0}, the max remaining capacity is {1}.',
    NATIVE_APP_COMP_NAME_PREFIX_HELP_TEXT: 'Optionally add a computer name prefix ' +
        'that limits application access to users that log in to a desktop assignment ' +
        'with an identical prefix. For example, only users with the computer name "XYZComputer" ' +
        'can access the application assignment on the desktop assignment "XYZAssignment."',
    NATIVE_APP_OS_HELP_TEXT: 'Select the OS that will be used to determine compatible VDIs ' +
        'to which applications will be delivered for this assignment.',
    DUPLICATE_PATTERNS_ERROR: 'The Url Pattern already exists.',
    APP_ENT_PARTIAL_APPS_ERROR: 'Some of the applications are not available after GP reseal.',
    APP_ENT_PARTIAL_FARMS_ERROR:
        'Some of the applications are not available because one or more servers are offline.',
    WARNING_TAKE_ASSIGNMENT_OFFLINE:
        'Are you sure you want to take the selected assignment offline?',
    WARNING_TAKE_FARM_OFFLINE: 'Are you sure you want to take the selected farm offline?',
    AUTO_SCAN_FARM: 'Auto-Scan from Farm',
    MANUALLY_FROM_FARM: 'Manually from Farm',
    IMPORT_FROM_APPSTACK: 'Import from AppStack',
    FARM_FAILED_DT_DOMAIN_DNSSERVER_LOOKUP_ERROR: 'Domain DNS Server is empty',
    POOL_FAILED_DT_DOMAIN_ACCESSINFO_LOOKUP_ERROR: 'Domain accessInfo not found',
    CREATE_ASSIGNMENT_FAILED_DT_DOMAIN_DNSSERVER_LOOKUP_ERROR: 'Domain DNS Server is empty',
    CREATE_ASSIGNMENT_FAILED_DT_DOMAIN_ACCESSINFO_LOOKUP_ERROR: 'Domain accessInfo not found',
    DELETING_POD_STATUS: 'Deleting pod',
    NODE_PLURAL: 'pods',
    NODE_SINGULAR: 'pod',
    PARTIAL_RESPONSE_LIST_PAGE_MESSAGE:
        'Real time data unavailable from {0} {1} out of {2} {3}.',
    PARTIAL_RESPONSE_TRUESSO_MESSAGE: 'The Pairing Token you have downloaded only contains ' +
        'certificates from {0} of your pod(s) out of {1}. You may want to rectify any ' +
        'connection issues and fetch a new Pairing Token.',
    PARTIAL_TEST_PAIRING_TRUESSO_MESSAGE: 'Test Pairing is OK for {0} of your pod(s) ' +
        'out of {1}. Either {2} pod(s) are offline or Test Pairing is not completed.',
    POD_NAME_INVALID: 'Invalid pod name',
    POD_NAME_ALREADY_EXIST: 'A Pod with this name already exists.',
    CONFIGURATION_NAME_INVALID: 'Invalid configuration name',
    DISPLAY_NAME_INVALID: 'Invalid display name',
    HINT_NAME_INVALID: 'Invalid hint name',
    ID_SUFFIX_NAME_INVALID: 'Invalid ID suffix name',
    FARM_VMS: 'FarmVMs',
    FARM_SESSIONS: 'FarmSessions',
    LOCATION_NAME_INVALID:
        'Location name must contain only letters [a-Z], dashes [-], underscore[ _ ] and numbers.',
    CITY_NAME_INVALID: 'Invalid city name',
    LOCATION_NAME_INFO:
        'Start typing a city name to identify the pod\'s location and select from the list of valid options.',
    LOCATION_NAME_INPUT_OR_SELECT_INFO: 'Enter a friendly name to identify this location ' +
        'or select a location in your location list.',
    LOCATION_CITY_NAME_INFO: 'Select a city which your location belongs to. The location ' +
        'would use the original coordinates or keep as unknown if city field is unset.',
    AUXILIARY_BIND_CREATE_UPDATE_ERROR: 'Domain Bind Completed Successfully, but was unable ' +
        'to configure the auxiliary bind account. Please check that the auxilary bind account ' +
        'credentials are valid, and that the account is not disabled or locked out. You can ' +
        'update this after the Domain Join process completes via Settings->Active Directory and ' +
        'then editing the Domain Bind information.',
    AUXILIARY_BIND_MANDATORY_INFO_MESSAGE:
        'At least one Primary and one Auxiliary Account should be present.',
    OPTIMIZE_PERFORMANCE: 'Optimized Performance',
    OPTIMIZE_POWER: 'Optimized Power',
    OPTIMIZE_BALANCED: 'Balanced',
    ALL_POD_OFFLINE_WARNING_HEADING: 'No pods are online or available.',
    ALL_POD_OFFLINE_WARNING_BODY: 'Administration capabilities are limited and many management operations ' +
        'are unavailable as a result. To access full administration capabilities, ensure that at least ' +
        'one pod is online and available',
    DESKTOP_ADMIN_CRENTIALS_HELP: 'Account credentials for a valid administrator account in ' +
        'the selected image VM. The system uses these credentials to prepare the image for use. ' +
        'The username and password are subject to specific complexity and other limitations. See ' +
        'the product documentation for details.',
    EDIT_SUBSCRIPTION_NAME_INFO: 'Optionally modify the subscription name to identify it ' +
        'from previously entered subscription.',
    CONTEXT_HELP_TEXT: 'Type the LDAP naming context relevant for the DNS domain name, ' +
        'such as dc=qa-tenantb,dc=hdaas,dc=com.',
    CONFIRM_TAKE_OFFLINE_FARM: 'Once converted to offline, it will be down for maintenance ' +
        'and users will not be able to launch desktops from this farm.',
    CONFIRM_TAKE_OFFLINE_ASSIGNMENTS:
        'Users will be unable to access any desktops of this assignment.',
    SAVE_DOMAIN_JOIN_FAILURE_MESSAGE_TITLE: 'Domain Join could not be performed.',
    SAVE_DOMAIN_JOIN_FAILURE_MESSAGE: 'To continue, make sure the Domain controller is ' +
        'properly configured and reachable on the network. Also, check to make sure that the IP ' +
        'address, username and password provided are correct and ' +
        'that the user account is not disabled or locked out.',
    DOMAIN_JOIN_USER_INSUFFICIENT_PERMS:
        'The domain join user \'{0}\' lacks the following permissions in the OU:',
    DOMAIN_JOIN_USER_INSUFFICIENT_PERMS_FIX_MSG: 'Please grant these permissions to the ' +
        'domain account for the specified OU and try again.  Make sure that the permissions ' +
        'apply to the correct OU and to all its child objects.',
    PERMISSION_CC: 'Create Computer',
    PERMISSION_DC: 'Delete Computer',
    PERMISSION_CR: 'Reset Password',
    PERMISSION_RP: 'Read All Properties',
    PERMISSION_WP: 'Write All Properties',
    PERMISSION_LC: 'List Contents',
    PERMISSION_RC: 'Read Permissions',
    SAVE_DOMAIN_BIND_FAILURE_MESSAGE_TITLE: 'Selected Active Directory cannot be registered.',
    SAVE_DOMAIN_BIND_FAILURE_MESSAGE: 'To register, make sure the Domain controller is ' +
        'properly configured and reachable on the network. Check to see if the port of the ' +
        'provided IP address is valid and reachable. Ensure DNS is functioning correctly and ' +
        'can resolve the Domain controller. Also, make sure the Domain Bind username and ' +
        'password provided are correct and the Domain Bind account is not disabled or locked out.',
    CONFIRM_TAKE_OFFLINE_URL_CUSTOMIZATION:
        'Any customizations made to the users\' environments associated ' +
        'with this assignment will not be applied.',
    EDIT_FARM_NAME_HELP_TEXT: 'Optionally modify this name to help identify this farm from ' +
        'your other farms.  The name needs to start with a letter [a-Z] and contain only ' +
        'letters [a-Z], dashes [-], and numbers.',
    EDIT_FARM_DESCRIPTION_HELP_TEXT: 'Optionally edit or provide a description that will ' +
        'help identify the farm in the system.',
    EDIT_MIN_VMS_COLON_HELP_TEXT: 'Optionally edit the minimum number of usable virtual machines ' +
        'in this farm so not all virtual machines are running at the same time.',
    EDIT_MAX_VMS_COLON_HELP_TEXT: 'Optionally edit the maximum number of virtual machines that ' +
        'can exist at any one time so not all virtual machines will be running at the same time.',
    EDIT_FARM_COMPUTER_OU_HELP_TEXT: 'Optionally change the Active Directory (AD) ' +
        'Organizational Unit where VMs will be located in the format OU=myorganization,' +
        'DC=mydomain,DC=com. Do not include spaces. You cannot enter a nested OU. If you have a ' +
        'nested OU, look up the  distinguished name information for the nested OU in your AD ' +
        'setup and enter the OU= part of the distinguished name.',
    EDIT_FARM_RUN_SCRIPT_HELP_TEXT: 'Optionally edit or enter the full executable path of a ' +
        'script that will run after the system preparation is complete.',
    EDIT_RECURRENCE_START_HOUR_TEXT: 'Optionally edit the time of day (in UTC) for the ' +
        'virtual machine refresh to be scheduled.',
    EDIT_ON_AFTER_HELP_TEXT: 'Optionally edit the number of logged on sessions you prefer ' +
        'to trigger a virtual machine refresh.  The refresh won\'t happen until the end users ' +
        'are logged off.',
    EDIT_CONCURRENT_QUIESCING_VMS_HELP_TEXT: 'Optionally modify the number of virtual machines ' +
        'that can be concurrently down for maintenance.  During this process, virtual machines will be ' +
        'providing service, but will not be used for any new sessions.',
    EDIT_MAX_SESSION_LIFETIME_HELP_TEXT:
        'Optionally change the maximum number of minutes for the session.',
    NEW_FARM_VMS_HELP_TEXT: 'Enter the number of virtual machines that can run at the same time.',
    NEW_FARM_VMS_MAX_COUNT_HELP_TEXT: 'Enter the number of virtual machines that can run at the ' +
        'same time. Maximum virtual machine count for this POD is {0}, the max remaining capacity is {1}.',
    EDIT_SESSION_PER_VM_HELP_TEXT:
        'This is the total number of sessions you want to allow per virtual machine.',
    DNS_NAME_INVALID: 'The DNS domain name is invalid.',
    IMAGE_DOMAIN_HELP: 'Select a domain from the drop-down list.',
    IMAGE_TYPE_INSTANT_CLONE_HELP: 'Select to create an instant clone image, an image ' +
        'type that uses VMware\'s NGVC technology to create VMs instantly for an assignment. ' +
        'Unselect to create a traditional clone image, an image type that does full image ' +
        'cloning when creating assignments.',
    LICENSE_KEY_HELP: 'Enter your license key.',
    IMAGE_LOCATION_COLON:
        'Select a location to get a refined list of pods available to store the desktop.',
    SERVICE_NAME_HELP: 'Give a friendly name to identify the assignment in the system.  ' +
        'It needs to start with a letter [a-Z] and contain only letters [a-Z], ' +
        'dashes [-], and numbers.',
    COMP_NAME_PREFIX_COLON_HELP: 'Optionally enter a prefix. Entering a prefix limits ' +
        'access to the writable volume assignment to authorized users who log in to a desktop ' +
        'assignment that has the same prefix at the beginning of its name. If you leave this ' +
        'option blank, all authorized users can access the new writable volume assignment ' +
        'regardless of the desktop assignments they are logged in to.',
    UV_TYPE_HELP: 'UIA is default.',
    UV_SIZE_HELP: 'Enter the size of the writable volume each user in this assignment ' +
        'will receive.  Min is 5 GB and max is 2000 GB.',
    ASSIGNMENT_PREFERRED_CLIENT_TYPE_HELP_TEXT: 'Select Browser or Horizon Client.',
    SESSION_DESKTOP_FARM_HELP_TEXT: 'Select a farm. Only farms configured to deliver remote ' +
        'desktops can be used for a session desktop assignment and cannot be used in more than ' +
        'one session desktop assignment.',
    CUSTOMIZATION_ASSIGNMENT: '{0} - {1}',
    CONFIG_HANDLER_LIST: 'Configuration Handlers',
    HANDLER_NAME_FIELD_REQUIRED: 'Name cannot be empty',
    HANDLER_SCHEME_FIELD_REQUIRED: 'The scheme field cannot be empty.',
    TARGET_RESOURCE_FIELD_REQUIRED: 'The target resource field cannot be empty.',
    CUSTOMIZATIONS: 'Customizations',
    CUSTOMIZATIONS_ASSIGNMENT_INFO:
        'Assign customization settings conditionally to customize users\' environments.',
    CUSTOMIZATIONS_DEPRECATE_WARNING_MESSAGE:
        'Customizations will be deprecated in an upcoming release.',
    URL_REDIRECTION_CUSTOMIZATION_NAME_HELP: 'Give a friendly name to help you identify the ' +
        'URL redirection customization assignment in the system.  It must start with a ' +
        'letter [a-Z] and contains only letters [a-Z], dashes [-], and numbers.',
    URL_REDIRECT_PATTERNS: 'URL-Pattern',
    URL_REDIRECT_PATTERNS_COLON: 'URL-Pattern:',
    URL_REDIRECT_PATTERNS_WITH_COUNT: 'URL-Patterns: {0} Total',
    ADD_ROW: 'Add a row',
    CUSTOMIZATION_CREATED_SUCCESSFULLY: 'Successfully created customization assignment {0}.',
    CUSTOMIZATION_UPDATED_SUCCESSFULLY: 'Successfully updated customization assignment {0}.',
    CUSTOMIZATION_DELETED_SUCCESSFULLY: 'Successfully deleted customization assignment.',
    CUSTOMIZATION_CREATION_FAILED: 'The customization assignment was not created.',
    CUSTOMIZATION_URL_REDIRECT_PATTERNS_HELP: 'Define the URL patterns to intercept on the ' +
        'client side. URLs are case sensitive. You can intercept all URLs using .* or multiple ' +
        'URLs using http://.*, *.domain.com, and so on. Press Enter to add multiple patterns.',
    TARGET_RESOURCE_TOO_LONG_ERROR_MSG: 'The target resource entry cannot exceed more ' +
        'than {0} characters.',
    ENTER: 'Enter',
    ITEMS_ENTERED: '{0} entered',
    MORE_TAGS: 'more...',
    SUPER_ADMIN_ACCESS_TEXT: 'Provide the Active Directory domain information and ' +
        'domain bind account credentials. Primary and auxiliary domain bind accounts ' +
        'will automatically be granted Super Administrator access for recovery purposes.',
    NETBIOS_NAME_HELP_TEXT: 'Enter the Active Directory domain name.',
    NETBIOS_NAME_SELECT_HELP_TEXT: 'Select the Active Directory domain name.',
    NETBIOS_NAME_SELECTED_HELP_TEXT: 'Selected Active Directory domain name.',
    DNS_DOMAIN_NAME_HELP_TEXT: 'Enter the fully qualified Active Directory domain name.',
    DNS_DOMAIN_NAME_SELECTED_HELP_TEXT: 'Fully qualified Active Directory domain name.',
    PROTOCOL_HELP_TEXT: 'LDAP is the only supported protocol.',
    DOMAIN_BIND_ACCOUNT_USERNAME_HELP_TEXT: 'Enter the domain bind username. ' +
        'The domain bind account can be a normal user account with read-only access ' +
        'to Active Directory, but can never expire or be locked out. Primary and ' +
        'auxiliary domain bind accounts will automatically be granted Super Administrator ' +
        'access for recovery purposes.',
    DOMAIN_BIND_ACCOUNT_PASSWORD_HELP_TEXT: 'Enter the domain bind password.',
    AUX_DOMAIN_BIND_ACCOUNT_USERNAME_HELP_TEXT: 'Enter your auxiliary account user name. ' +
        'Primary and auxiliary domain bind accounts will automatically be granted ' +
        'Super Administrator access for recovery purposes.',
    AUX_DOMAIN_BIND_ACCOUNT_PASSWORD_HELP_TEXT: 'Enter your auxiliary account password.',
    AD_PORT_HELP_TEXT: 'You should not modify this field unless you are using a ' +
        'non-standard port. The default for this field is: LDAP -> 389.',
    TWO_FACTOR_AUTH_METHOD_HELP_TEXT:
        'Select either the Radius or RSA SecurID protocol method.',
    MAINTAIN_USER_NAME_HELP_TEXT: 'Select to maintain the username during ' +
        'authentication. If unselected, the username field is not locked and the ' +
        'user can enter a different name.',
    EXTERNAL_CONNECTIONS_HELP_TEXT: 'Change the default from yes to no if you do not wish ' +
        'to use external connections only. A No setting will ask to perform 2nd factor ' +
        'authentication for all instances.',
    USER_PORTAL_NAME_HELP_TEXT: 'Enter the name that distinguishes the type of Radius ' +
        'authentication being used. The name needs to start with a letter [a-Z] and contain ' +
        'only letters [a-Z], dashes [-], and numbers.',
    HOST_NAME_IP_ADDRESS_HELP_TEXT:
        'Enter the DNS name or IP address of the authentication server.',
    SHARED_SECRET_HELP_TEXT: 'Enter the secret for communicating with the server. The value ' +
        'must be identical to the server configured value. Click the hide icon to mask the ' +
        'field value with dots.',
    AUTHENTICATION_PORT_HELP_TEXT: 'Enter the UDP port configured to send or receive ' +
        'authentication traffic. For example, 1812, or you may enter a valid 4 digit number.',
    ACCOUNTING_PORT_HELP_TEXT: 'UDP port configured to send or receive accounting traffic. ' +
        'For example, 1813, or you may enter a valid 4 digit number.',
    MECHANISM_HELP_TEXT: 'Choose an authentication protocol used by your Radius system that ' +
        'you want to use to securely exchange credentials.',
    '2FACTOR_SERVER_TIMEOUT_HELP_TEXT': 'Enter the amount of time in seconds before a ' +
        'message is given to indicate that the server is taking too long to reply.',
    '2FACTOR_MAX_RETRIES_HELP_TEXT':
        'Enter the maximum number of times to retry failed requests.',
    REALM_PREFIX_HELP_TEXT: 'Enter the name and delimiter of the realm that comes before ' +
        'the user name during authentication.',
    REALM_SUFFIX_HELP_TEXT: 'Enter the name and delimiter of the realm that comes after ' +
        'the user name during authentication.',
    AUXILIARY_SERVER_HELP_TEXT: 'Select to enable the auxiliary server to setup a ' +
        'secondary server if the primary server is not responding.',
    DATACENTER_NAME_COLON_HELP_TEXT:
        'Select the domain to use as the default Active Directory domain.',
    VIEW_CLIENT_HEARTBEAT_INTERVAL_HELP_TEXT: 'Enter a time in minutes that controls the ' +
        'interval between Horizon Client heartbeats and the connected state. These heartbeats ' +
        'report to the broker the amount of idle time that has passed. Setting the activity ' +
        'heartbeats at longer intervals might reduce network traffic and increase performance.',
    VIEW_CLIENT_IDLE_USER_HELP_TEXT: 'Enter the maximum time that a user can be idle while ' +
        'connected to the tenant. When this maximum is reached, the user is disconnected from ' +
        'all active Horizon Client Desktop sessions. The user must reauthenticate to reaccess ' +
        'the Horizon Client. Set the Client Idle User timeout to be at least double the Client ' +
        'Heartbeat Interval to avoid unexpected disconnects from desktops.',
    VIEW_CLIENT_BROKER_SESSION_HELP_TEXT: 'Enter the maximum time that a Horizon Client ' +
        'instance can be connected to the tenant before its authentication expires. The timeout ' +
        'count starts each time you authenticate. When this timeout occurs, you can continue to ' +
        'work. The Client Broker Session timeout must be at least equal to the sum of the Client ' +
        'Heartbeat Interval and the Client Idle User timeout.',
    USER_PORTAL_TIMEOUT_HELP_TEXT: 'Enter the length of time one can be on the user portal ' +
        'when attempting to broker a connection before a user needs to log in again.',
    MONITORING_ENABLE_HELP_TEXT: 'Select to allow user and domain data to be used by ' +
        'the Cloud Monitoring Service (CMS) for reports on the Reports page. If No is selected ' +
        'the Unique User Summary feature of the Utilization report and the Session History ' +
        'report are not provided.',
    HTML_ACCESS_CREDS_CLEANUP_HELP_TEXT: 'Select to delete credentials of the broker ' +
        'session when a HTML Access portal connection tab is closed.',
    CONTACT_INFO_NAME_HELP_TEXT: 'Enter the name of the administrator.',
    CONTACT_INFO_PHONE_HELP_TEXT: 'Enter the administrator\'s phone number.',
    CONTACT_INFO_EMAIL_HELP_TEXT: 'Enter the administrator\'s email address.',
    CONTACT_INFO_CELLPHONE_HELP_TEXT: 'Enter the administrator\'s cell phone number.',
    TECH_CONTACT_NAME_HELP_TEXT: 'Enter the name of the technical contact.',
    TECH_CONTACT_PHONE_HELP_TEXT: 'Enter the technical contact\'s phone number.',
    TECH_CONTACT_EMAIL_HELP_TEXT: 'Enter the technical contact\'s email address.',
    TECH_CONTACT_CELLPHONE_HELP_TEXT: 'Enter the technical contact\'s cell phone number.',
    VMWARE_IDM_URL_COLON_HELP_TEXT:
        'Type your VMware Workspace ONE Access environment\'s SAML IdP metadata URL.',
    TIMEOUT_SSO_TOKEN_COLON_HELP_TEXT: 'Enter the amount of time in minutes before the ' +
        'session will time out. The default is zero (0).',
    IDM_NODE_COLON_HELP_TEXT: 'Select a pod for Workspace ONE Access.',
    IDM_DATA_CENTER_COLON_HELP_TEXT: 'Select a Data Center for Workspace ONE Access.',
    IDM_TENANT_ADDRESS_COLON_HELP_TEXT: 'Enter the fully-qualified domain name (FQDN) of the Horizon Cloud tenant.' +
        ' This tenant is the Horizon Cloud floating tenant host.',
    DOMAIN_JOIN_USERNAME_HELP:
        'Enter your join user name so the VMs provisioned will be allowed to join the domain.',
    AUX_DOMAIN_JOIN_USERNAME_HELP:
        'Optionally add an auxiliary join account to use as a backup to the primary account.',
    DOMAIN_JOIN_PASSWORD_HELP:
        'Enter your join password so the VMs provisioned will be allowed to join the domain.',
    PRIMARY_DNS_SERVER_IP_HELP: 'Enter your primary DNS server IP address.',
    PRIMARY_DNS_SERVER_EDIT_HELP: 'Changing Primary DNS requires a support ticket.',
    SECONDARY_DNS_SERVER_IP_HELP:
        'Enter your secondary DNS server IP address if you have one.',
    SECONDARY_DNS_SERVER_EDIT_HELP: 'Changing Secondary DNS requires a support ticket.',
    EDIT_MANUAL_APP_NAME_HELP: 'Optionally modify this name to help identify this ' +
        'application from your other apps.  The name needs to start with a letter [a-Z] and ' +
        'contain only letters [a-Z], dashes [-], and numbers.',
    EDIT_CREATE_CUSTOM_START_FOLDER_HELP_TEXT: 'Optionally edit the place in Windows ' +
        'from which the application will be launched.',
    IMPORT_IMAGE_STATUS: '({0})',
    IMPORT_IMAGE_STATUS_PENDING: 'Pending',
    IMPORT_IMAGE_STATUS_PREPARING: 'Preparing',
    IMPORT_IMAGE_STATUS_CREATING_VM: 'Creating VM',
    IMPORT_IMAGE_STATUS_INSTALLING_ROLES: 'Installing Roles',
    IMPORT_IMAGE_STATUS_JOINING_DOMAIN: 'Domain Joining',
    IMPORT_IMAGE_STATUS_RESTARTING_VM: 'Restarting VM',
    IMPORT_IMAGE_STATUS_INSTALLING_AGENTS: 'Installing Agents',
    IMPORT_IMAGE_STATUS_BOOTSTRAPPING: 'Bootstrapping',
    IMPORT_IMAGE_STATUS_READY: 'Import Successful',
    IMPORT_IMAGE_STATUS_DELETE_PENDING: 'Pending',
    IMPORT_IMAGE_STATUS_DELETING: 'Deleting',
    IMPORT_IMAGE_STATUS_FAILED: 'Failed',
    IMPORT_IMAGE_STATUS_RETRY_PENDING: 'Pending',
    EMPTY_SPACE_INVALID: 'The {0} entered cannot have spaces in between.',
    INCLUDE_GPU_COLON: 'Include GPU:',
    INCLUDE_GPU_HELP_TEXT: 'Select to provide GPU-backed hardware. If this toggle is ' +
        'dimmed, that means your Microsoft Azure subscription in the selected ' +
        'pod\'s region does not support GPU hardware.',
    INCLUDE_DOMAIN_JOIN_COLON: 'Domain Join:',
    INCLUDE_DOMAIN_JOIN_HELP_TEXT: 'Select to enable Domain Join for this desktop.',
    URL_REDIRECT_PATTERNS_TITLE: 'URL-Patterns',
    NO_PODS_CAPACITY_AVAILABLE: 'No Pods Available.',
    RESET_AGENT_PAIRING: 'Reset Agent Pairing',
    STATUS_IN_PROGRESS: 'In Progress...',
    RESET_AGENT_PAIRINIG_INITIATED_SUCCESS: 'Successfully initiated the Agent pairing reset.',
    AGENT_ROLLBACK_INITIATED_SUCCESS: 'Agent rollback initiated successfully.',
    AGENT_ROLLBACK_IS_AVAILABLE: 'The agent updates have failed on some desktops. For a limited time it is possible to roll back' +
        ' to the previous agent from the Desktops page.',
    NOT_PAIRED: 'Not Paired',
    RESET_AGENT_PAIRINIG_TASK: 'Resetting Agent Pairing on {0}',
    AGENT_STATUS_TEXT: 'VM is On but Agents may encounter connectivity issues.',
    RESET_AGENT_PAIRING_INVALID_VM_IDs: 'Unable to Repair Agent. An empty list of VM ids ' +
        'are passed OR if the pool id is that of a reserved pool.',
    RESET_AGENT_PAIRING_INVALID_PATTERN_IDs:
        'Unable to Repair Agent. An empty list of patternIds are passed.',
    RESET_AGENT_PAIRING_UNSUPPORTED_PATTERN_TYPE: 'Unable to Repair Agent. A dynamic ' +
        'pattern is present among the pattern ids passed.',
    RESET_AGENT_PAIRING_INVALID_POOL_ID: 'Unable to Repair Agent. The passed pool id is ' +
        'empty or invalid or corresponds to a special pool.',
    RESET_AGENT_PAIRING_INVALID_VM_ID_FOR_POOL: 'Unable to Repair Agent. At least one of ' +
        'the VM ids passed doesn\'t belong to the passed pool id.',
    UIA_ACCESS_ERROR: 'Admin Portal Access is denied, Please contact your service provider.',
    ALERT_TYPE_COLON: 'Alert Type:',
    EMAIL_NO_COLON: 'Email',
    NOTIFICATIONS_INFO_MSG: 'Enter email addresses for the users you would like to receive ' +
        'notifications for items like failing tasks and network issues affecting ' +
        'system uptime and VM creation.',
    EDIT_NOTIFICATION_EMAIL: 'Edit Notification Email',
    EMAIL_INFO_MSG: 'Enter or paste the email addresses, separated by a comma, ' +
        'for the users you want to receive notifications. If this field is left blank, ' +
        'no email notifications will be sent. If you would like certain users to stop ' +
        'receiving notifications, remove their email addresses here.',
    VALID_EMAIL_SINGLE: 'Enter a valid email address.',
    VALID_EMAIL_MULTIPLE: 'Enter valid email addresses separated by a comma.',
    ADD_NEW_RSA: 'Add New RSA SecurID',
    ADD_NEW_RADIUS: 'Add New Radius',
    ADD_NONE: 'None',
    TZID_AFRICA_ABIDJAN: 'Africa/Abidjan (UTC+00:00)',
    TZID_AFRICA_ACCRA: 'Africa/Accra (UTC+00:00)',
    TZID_AFRICA_ADDIS_ABABA: 'Africa/Addis Ababa (UTC+03:00)',
    TZID_AFRICA_ALGIERS: 'Africa/Algiers (UTC+01:00)',
    TZID_AFRICA_ASMARA: 'Africa/Asmara (UTC+03:00)',
    TZID_AFRICA_ASMERA: 'Africa/Asmera (UTC+03:00)',
    TZID_AFRICA_BAMAKO: 'Africa/Bamako (UTC+00:00)',
    TZID_AFRICA_BANGUI: 'Africa/Bangui (UTC+01:00)',
    TZID_AFRICA_BANJUL: 'Africa/Banjul (UTC+00:00)',
    TZID_AFRICA_BISSAU: 'Africa/Bissau (UTC+00:00)',
    TZID_AFRICA_BLANTYRE: 'Africa/Blantyre (UTC+02:00)',
    TZID_AFRICA_BRAZZAVILLE: 'Africa/Brazzaville (UTC+01:00)',
    TZID_AFRICA_BUJUMBURA: 'Africa/Bujumbura (UTC+02:00)',
    TZID_AFRICA_CAIRO: 'Africa/Cairo (UTC+02:00)',
    TZID_AFRICA_CASABLANCA: 'Africa/Casablanca (UTC+00:00)',
    TZID_AFRICA_CEUTA: 'Africa/Ceuta (UTC+01:00)',
    TZID_AFRICA_CONAKRY: 'Africa/Conakry (UTC+00:00)',
    TZID_AFRICA_DAKAR: 'Africa/Dakar (UTC+00:00)',
    TZID_AFRICA_DAR_ES_SALAAM: 'Africa/Dar es Salaam (UTC+03:00)',
    TZID_AFRICA_DJIBOUTI: 'Africa/Djibouti (UTC+03:00)',
    TZID_AFRICA_DOUALA: 'Africa/Douala (UTC+01:00)',
    TZID_AFRICA_EL_AAIUN: 'Africa/El Aaiun (UTC+00:00)',
    TZID_AFRICA_FREETOWN: 'Africa/Freetown (UTC+00:00)',
    TZID_AFRICA_GABORONE: 'Africa/Gaborone (UTC+02:00)',
    TZID_AFRICA_HARARE: 'Africa/Harare (UTC+02:00)',
    TZID_AFRICA_JOHANNESBURG: 'Africa/Johannesburg (UTC+02:00)',
    TZID_AFRICA_JUBA: 'Africa/Juba (UTC+03:00)',
    TZID_AFRICA_KAMPALA: 'Africa/Kampala (UTC+03:00)',
    TZID_AFRICA_KHARTOUM: 'Africa/Khartoum (UTC+03:00)',
    TZID_AFRICA_KIGALI: 'Africa/Kigali (UTC+02:00)',
    TZID_AFRICA_KINSHASA: 'Africa/Kinshasa (UTC+01:00)',
    TZID_AFRICA_LAGOS: 'Africa/Lagos (UTC+01:00)',
    TZID_AFRICA_LIBREVILLE: 'Africa/Libreville (UTC+01:00)',
    TZID_AFRICA_LOME: 'Africa/Lome (UTC+00:00)',
    TZID_AFRICA_LUANDA: 'Africa/Luanda (UTC+01:00)',
    TZID_AFRICA_LUBUMBASHI: 'Africa/Lubumbashi (UTC+02:00)',
    TZID_AFRICA_LUSAKA: 'Africa/Lusaka (UTC+02:00)',
    TZID_AFRICA_MALABO: 'Africa/Malabo (UTC+01:00)',
    TZID_AFRICA_MAPUTO: 'Africa/Maputo (UTC+02:00)',
    TZID_AFRICA_MASERU: 'Africa/Maseru (UTC+02:00)',
    TZID_AFRICA_MBABANE: 'Africa/Mbabane (UTC+02:00)',
    TZID_AFRICA_MOGADISHU: 'Africa/Mogadishu (UTC+03:00)',
    TZID_AFRICA_MONROVIA: 'Africa/Monrovia (UTC+00:00)',
    TZID_AFRICA_NAIROBI: 'Africa/Nairobi (UTC+03:00)',
    TZID_AFRICA_NDJAMENA: 'Africa/Ndjamena (UTC+01:00)',
    TZID_AFRICA_NIAMEY: 'Africa/Niamey (UTC+01:00)',
    TZID_AFRICA_NOUAKCHOTT: 'Africa/Nouakchott (UTC+00:00)',
    TZID_AFRICA_OUAGADOUGOU: 'Africa/Ouagadougou (UTC+00:00)',
    'TZID_AFRICA_PORTO-NOVO': 'Africa/Porto-Novo (UTC+01:00)',
    TZID_AFRICA_SAO_TOME: 'Africa/Sao Tome (UTC+00:00)',
    TZID_AFRICA_TIMBUKTU: 'Africa/Timbuktu (UTC+00:00)',
    TZID_AFRICA_TRIPOLI: 'Africa/Tripoli (UTC+02:00)',
    TZID_AFRICA_TUNIS: 'Africa/Tunis (UTC+01:00)',
    TZID_AFRICA_WINDHOEK: 'Africa/Windhoek (UTC+02:00)',
    TZID_AMERICA_ADAK: 'America/Adak (UTC-10:00)',
    TZID_AMERICA_ANCHORAGE: 'America/Anchorage (UTC-09:00)',
    TZID_AMERICA_ANGUILLA: 'America/Anguilla (UTC-04:00)',
    TZID_AMERICA_ANTIGUA: 'America/Antigua (UTC-04:00)',
    TZID_AMERICA_ARAGUAINA: 'America/Araguaina (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/BUENOS_AIRES': 'America/Buenos Aires (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/CATAMARCA': 'America/Catamarca (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/COMODRIVADAVIA': 'America/Argentina/ComodRivadavia (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/CORDOBA': 'America/Cordoba (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/JUJUY': 'America/Jujuy (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/LA_RIOJA': 'America/Argentina/La Rioja (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/MENDOZA': 'America/Mendoza (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/RIO_GALLEGOS': 'America/Argentina/Rio Gallegos (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/SALTA': 'America/Argentina/Salta (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/SAN_JUAN': 'America/Argentina/San Juan (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/SAN_LUIS': 'America/Argentina/San Luis (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/TUCUMAN': 'America/Argentina/Tucuman (UTC-03:00)',
    'TZID_AMERICA_ARGENTINA/USHUAIA': 'America/Argentina/Ushuaia (UTC-03:00)',
    TZID_AMERICA_ARUBA: 'America/Aruba (UTC-04:00)',
    TZID_AMERICA_ASUNCION: 'America/Asuncion (UTC-03:00)',
    TZID_AMERICA_ATIKOKAN: 'America/Atikokan (UTC-05:00)',
    TZID_AMERICA_ATKA: 'America/Atka (UTC-10:00)',
    TZID_AMERICA_BAHIA: 'America/Bahia (UTC-03:00)',
    TZID_AMERICA_BAHIA_BANDERAS: 'America/Bahia Banderas (UTC-06:00)',
    TZID_AMERICA_BARBADOS: 'America/Barbados (UTC-04:00)',
    TZID_AMERICA_BELEM: 'America/Belem (UTC-03:00)',
    TZID_AMERICA_BELIZE: 'America/Belize (UTC-06:00)',
    'TZID_AMERICA_BLANC-SABLON': 'America/Blanc-Sablon (UTC-04:00)',
    TZID_AMERICA_BOA_VISTA: 'America/Boa Vista (UTC-04:00)',
    TZID_AMERICA_BOGOTA: 'America/Bogota (UTC-05:00)',
    TZID_AMERICA_BOISE: 'America/Boise (UTC-07:00)',
    TZID_AMERICA_BUENOS_AIRES: 'America/Buenos Aires (UTC-03:00)',
    TZID_AMERICA_CAMBRIDGE_BAY: 'America/Cambridge Bay (UTC-07:00)',
    TZID_AMERICA_CAMPO_GRANDE: 'America/Campo Grande (UTC-03:00)',
    TZID_AMERICA_CANCUN: 'America/Cancun (UTC-05:00)',
    TZID_AMERICA_CARACAS: 'America/Caracas (UTC-04:30)',
    TZID_AMERICA_CATAMARCA: 'America/Catamarca (UTC-03:00)',
    TZID_AMERICA_CAYENNE: 'America/Cayenne (UTC-03:00)',
    TZID_AMERICA_CAYMAN: 'America/Cayman (UTC-05:00)',
    TZID_AMERICA_CHICAGO: 'America/Chicago (UTC-06:00)',
    TZID_AMERICA_CHIHUAHUA: 'America/Chihuahua (UTC-07:00)',
    TZID_AMERICA_CORAL_HARBOUR: 'America/Coral Harbour (UTC-05:00)',
    TZID_AMERICA_CORDOBA: 'America/Cordoba (UTC-03:00)',
    TZID_AMERICA_COSTA_RICA: 'America/Costa Rica (UTC-06:00)',
    TZID_AMERICA_CRESTON: 'America/Creston (UTC-07:00)',
    TZID_AMERICA_CUIABA: 'America/Cuiaba (UTC-03:00)',
    TZID_AMERICA_CURACAO: 'America/Curacao (UTC-04:00)',
    TZID_AMERICA_DANMARKSHAVN: 'America/Danmarkshavn (UTC+00:00)',
    TZID_AMERICA_DAWSON: 'America/Dawson (UTC-08:00)',
    TZID_AMERICA_DAWSON_CREEK: 'America/Dawson Creek (UTC-07:00)',
    TZID_AMERICA_DENVER: 'America/Denver (UTC-07:00)',
    TZID_AMERICA_DETROIT: 'America/Detroit (UTC-05:00)',
    TZID_AMERICA_DOMINICA: 'America/Dominica (UTC-04:00)',
    TZID_AMERICA_EDMONTON: 'America/Edmonton (UTC-07:00)',
    TZID_AMERICA_EIRUNEPE: 'America/Eirunepe (UTC-05:00)',
    TZID_AMERICA_EL_SALVADOR: 'America/El Salvador (UTC-06:00)',
    TZID_AMERICA_ENSENADA: 'America/Ensenada (UTC-08:00)',
    TZID_AMERICA_FORT_NELSON: 'America/Fort Nelson (UTC-07:00)',
    TZID_AMERICA_FORT_WAYNE: 'America/Fort Wayne (UTC-05:00)',
    TZID_AMERICA_FORTALEZA: 'America/Fortaleza (UTC-03:00)',
    TZID_AMERICA_GLACE_BAY: 'America/Glace Bay (UTC-04:00)',
    TZID_AMERICA_GODTHAB: 'America/Godthab (UTC-03:00)',
    TZID_AMERICA_GOOSE_BAY: 'America/Goose Bay (UTC-04:00)',
    TZID_AMERICA_GRAND_TURK: 'America/Grand Turk (UTC-04:00)',
    TZID_AMERICA_GRENADA: 'America/Grenada (UTC-04:00)',
    TZID_AMERICA_GUADELOUPE: 'America/Guadeloupe (UTC-04:00)',
    TZID_AMERICA_GUATEMALA: 'America/Guatemala (UTC-06:00)',
    TZID_AMERICA_GUAYAQUIL: 'America/Guayaquil (UTC-05:00)',
    TZID_AMERICA_GUYANA: 'America/Guyana (UTC-04:00)',
    TZID_AMERICA_HALIFAX: 'America/Halifax (UTC-04:00)',
    TZID_AMERICA_HAVANA: 'America/Havana (UTC-05:00)',
    TZID_AMERICA_HERMOSILLO: 'America/Hermosillo (UTC-07:00)',
    'TZID_AMERICA_INDIANA/INDIANAPOLIS': 'America/Indianapolis (UTC-05:00)',
    'TZID_AMERICA_INDIANA/KNOX': 'America/Indiana/Knox (UTC-06:00)',
    'TZID_AMERICA_INDIANA/MARENGO': 'America/Indiana/Marengo (UTC-05:00)',
    'TZID_AMERICA_INDIANA/PETERSBURG': 'America/Indiana/Petersburg (UTC-05:00)',
    'TZID_AMERICA_INDIANA/TELL_CITY': 'America/Indiana/Tell City (UTC-06:00)',
    'TZID_AMERICA_INDIANA/VEVAY': 'America/Indiana/Vevay (UTC-05:00)',
    'TZID_AMERICA_INDIANA/VINCENNES': 'America/Indiana/Vincennes (UTC-05:00)',
    'TZID_AMERICA_INDIANA/WINAMAC': 'America/Indiana/Winamac (UTC-05:00)',
    TZID_AMERICA_INDIANAPOLIS: 'America/Indianapolis (UTC-05:00)',
    TZID_AMERICA_INUVIK: 'America/Inuvik (UTC-07:00)',
    TZID_AMERICA_IQALUIT: 'America/Iqaluit (UTC-05:00)',
    TZID_AMERICA_JAMAICA: 'Jamaica (UTC-05:00)',
    TZID_AMERICA_JUJUY: 'America/Jujuy (UTC-03:00)',
    TZID_AMERICA_JUNEAU: 'America/Juneau (UTC-09:00)',
    'TZID_AMERICA_KENTUCKY/LOUISVILLE': 'America/Louisville (UTC-05:00)',
    'TZID_AMERICA_KENTUCKY/MONTICELLO': 'America/Kentucky/Monticello (UTC-05:00)',
    TZID_AMERICA_KNOX_IN: 'America/Knox IN (UTC-06:00)',
    TZID_AMERICA_KRALENDIJK: 'America/Kralendijk (UTC-04:00)',
    TZID_AMERICA_LA_PAZ: 'America/La Paz (UTC-04:00)',
    TZID_AMERICA_LIMA: 'America/Lima (UTC-05:00)',
    TZID_AMERICA_LOS_ANGELES: 'America/Los Angeles (UTC-08:00)',
    TZID_AMERICA_LOUISVILLE: 'America/Louisville (UTC-05:00)',
    TZID_AMERICA_LOWER_PRINCES: 'America/Lower Princes (UTC-04:00)',
    TZID_AMERICA_MACEIO: 'America/Maceio (UTC-03:00)',
    TZID_AMERICA_MANAGUA: 'America/Managua (UTC-06:00)',
    TZID_AMERICA_MANAUS: 'America/Manaus (UTC-04:00)',
    TZID_AMERICA_MARIGOT: 'America/Marigot (UTC-04:00)',
    TZID_AMERICA_MARTINIQUE: 'America/Martinique (UTC-04:00)',
    TZID_AMERICA_MATAMOROS: 'America/Matamoros (UTC-06:00)',
    TZID_AMERICA_MAZATLAN: 'America/Mazatlan (UTC-07:00)',
    TZID_AMERICA_MENDOZA: 'America/Mendoza (UTC-03:00)',
    TZID_AMERICA_MENOMINEE: 'America/Menominee (UTC-06:00)',
    TZID_AMERICA_MERIDA: 'America/Merida (UTC-06:00)',
    TZID_AMERICA_METLAKATLA: 'America/Metlakatla (UTC-09:00)',
    TZID_AMERICA_MEXICO_CITY: 'America/Mexico City (UTC-06:00)',
    TZID_AMERICA_MIQUELON: 'America/Miquelon (UTC-03:00)',
    TZID_AMERICA_MONCTON: 'America/Moncton (UTC-04:00)',
    TZID_AMERICA_MONTERREY: 'America/Monterrey (UTC-06:00)',
    TZID_AMERICA_MONTEVIDEO: 'America/Montevideo (UTC-03:00)',
    TZID_AMERICA_MONTREAL: 'America/Montreal (UTC-05:00)',
    TZID_AMERICA_MONTSERRAT: 'America/Montserrat (UTC-04:00)',
    TZID_AMERICA_NASSAU: 'America/Nassau (UTC-05:00)',
    TZID_AMERICA_NEW_YORK: 'America/New York (UTC-05:00)',
    TZID_AMERICA_NIPIGON: 'America/Nipigon (UTC-05:00)',
    TZID_AMERICA_NOME: 'America/Nome (UTC-09:00)',
    TZID_AMERICA_NORONHA: 'America/Noronha (UTC-02:00)',
    'TZID_AMERICA_NORTH_DAKOTA/BEULAH': 'America/North Dakota/Beulah (UTC-06:00)',
    'TZID_AMERICA_NORTH_DAKOTA/CENTER': 'America/North Dakota/Center (UTC-06:00)',
    'TZID_AMERICA_NORTH_DAKOTA/NEW_SALEM': 'America/North Dakota/New Salem (UTC-06:00)',
    TZID_AMERICA_OJINAGA: 'America/Ojinaga (UTC-07:00)',
    TZID_AMERICA_PANAMA: 'America/Panama (UTC-05:00)',
    TZID_AMERICA_PANGNIRTUNG: 'America/Pangnirtung (UTC-05:00)',
    TZID_AMERICA_PARAMARIBO: 'America/Paramaribo (UTC-03:00)',
    TZID_AMERICA_PHOENIX: 'America/Phoenix (UTC-07:00)',
    TZID_AMERICA_PORT_OF_SPAIN: 'America/Port of Spain (UTC-04:00)',
    'TZID_AMERICA_PORT-AU-PRINCE': 'America/Port-au-Prince (UTC-05:00)',
    TZID_AMERICA_PORTO_ACRE: 'America/Porto Acre (UTC-05:00)',
    TZID_AMERICA_PORTO_VELHO: 'America/Porto Velho (UTC-04:00)',
    TZID_AMERICA_PUERTO_RICO: 'America/Puerto Rico (UTC-04:00)',
    TZID_AMERICA_RAINY_RIVER: 'America/Rainy River (UTC-06:00)',
    TZID_AMERICA_RANKIN_INLET: 'America/Rankin Inlet (UTC-06:00)',
    TZID_AMERICA_RECIFE: 'America/Recife (UTC-03:00)',
    TZID_AMERICA_REGINA: 'America/Regina (UTC-06:00)',
    TZID_AMERICA_RESOLUTE: 'America/Resolute (UTC-06:00)',
    TZID_AMERICA_RIO_BRANCO: 'America/Rio Branco (UTC-05:00)',
    TZID_AMERICA_ROSARIO: 'America/Rosario (UTC-03:00)',
    TZID_AMERICA_SANTA_ISABEL: 'America/Santa Isabel (UTC-08:00)',
    TZID_AMERICA_SANTAREM: 'America/Santarem (UTC-03:00)',
    TZID_AMERICA_SANTIAGO: 'America/Santiago (UTC-03:00)',
    TZID_AMERICA_SANTO_DOMINGO: 'America/Santo Domingo (UTC-04:00)',
    TZID_AMERICA_SAO_PAULO: 'America/Sao Paulo (UTC-02:00)',
    TZID_AMERICA_SCORESBYSUND: 'America/Scoresbysund (UTC-01:00)',
    TZID_AMERICA_SHIPROCK: 'America/Shiprock (UTC-07:00)',
    TZID_AMERICA_SITKA: 'America/Sitka (UTC-09:00)',
    TZID_AMERICA_ST_BARTHELEMY: 'America/St Barthelemy (UTC-04:00)',
    TZID_AMERICA_ST_JOHNS: 'America/St Johns (UTC-03:30)',
    TZID_AMERICA_ST_KITTS: 'America/St Kitts (UTC-04:00)',
    TZID_AMERICA_ST_LUCIA: 'America/St Lucia (UTC-04:00)',
    TZID_AMERICA_ST_THOMAS: 'America/St Thomas (UTC-04:00)',
    TZID_AMERICA_ST_VINCENT: 'America/St Vincent (UTC-04:00)',
    TZID_AMERICA_SWIFT_CURRENT: 'America/Swift Current (UTC-06:00)',
    TZID_AMERICA_TEGUCIGALPA: 'America/Tegucigalpa (UTC-06:00)',
    TZID_AMERICA_THULE: 'America/Thule (UTC-04:00)',
    TZID_AMERICA_THUNDER_BAY: 'America/Thunder Bay (UTC-05:00)',
    TZID_AMERICA_TIJUANA: 'America/Tijuana (UTC-08:00)',
    TZID_AMERICA_TORONTO: 'America/Toronto (UTC-05:00)',
    TZID_AMERICA_TORTOLA: 'America/Tortola (UTC-04:00)',
    TZID_AMERICA_VANCOUVER: 'America/Vancouver (UTC-08:00)',
    TZID_AMERICA_VIRGIN: 'America/Virgin (UTC-04:00)',
    TZID_AMERICA_WHITEHORSE: 'America/Whitehorse (UTC-08:00)',
    TZID_AMERICA_WINNIPEG: 'America/Winnipeg (UTC-06:00)',
    TZID_AMERICA_YAKUTAT: 'America/Yakutat (UTC-09:00)',
    TZID_AMERICA_YELLOWKNIFE: 'America/Yellowknife (UTC-07:00)',
    TZID_ANTARCTICA_CASEY: 'Antarctica/Casey (UTC+08:00)',
    TZID_ANTARCTICA_DAVIS: 'Antarctica/Davis (UTC+07:00)',
    TZID_ANTARCTICA_DUMONTDURVILLE: 'Antarctica/DumontDUrville (UTC+10:00)',
    TZID_ANTARCTICA_MACQUARIE: 'Antarctica/Macquarie (UTC+11:00)',
    TZID_ANTARCTICA_MAWSON: 'Antarctica/Mawson (UTC+05:00)',
    TZID_ANTARCTICA_MCMURDO: 'Antarctica/McMurdo (UTC+13:00)',
    TZID_ANTARCTICA_PALMER: 'Antarctica/Palmer (UTC-03:00)',
    TZID_ANTARCTICA_ROTHERA: 'Antarctica/Rothera (UTC-03:00)',
    TZID_ANTARCTICA_SOUTH_POLE: 'Antarctica/South Pole (UTC+13:00)',
    TZID_ANTARCTICA_SYOWA: 'Antarctica/Syowa (UTC+03:00)',
    TZID_ANTARCTICA_TROLL: 'Antarctica/Troll (UTC+00:00)',
    TZID_ANTARCTICA_VOSTOK: 'Antarctica/Vostok (UTC+06:00)',
    TZID_ARCTIC_LONGYEARBYEN: 'Arctic/Longyearbyen (UTC+01:00)',
    TZID_ASIA_ADEN: 'Asia/Aden (UTC+03:00)',
    TZID_ASIA_ALMATY: 'Asia/Almaty (UTC+06:00)',
    TZID_ASIA_AMMAN: 'Asia/Amman (UTC+02:00)',
    TZID_ASIA_ANADYR: 'Asia/Anadyr (UTC+12:00)',
    TZID_ASIA_AQTAU: 'Asia/Aqtau (UTC+05:00)',
    TZID_ASIA_AQTOBE: 'Asia/Aqtobe (UTC+05:00)',
    TZID_ASIA_ASHGABAT: 'Asia/Ashgabat (UTC+05:00)',
    TZID_ASIA_ASHKHABAD: 'Asia/Ashkhabad (UTC+05:00)',
    TZID_ASIA_BAGHDAD: 'Asia/Baghdad (UTC+03:00)',
    TZID_ASIA_BAHRAIN: 'Asia/Bahrain (UTC+03:00)',
    TZID_ASIA_BAKU: 'Asia/Baku (UTC+04:00)',
    TZID_ASIA_BANGKOK: 'Asia/Bangkok (UTC+07:00)',
    TZID_ASIA_BEIRUT: 'Asia/Beirut (UTC+02:00)',
    TZID_ASIA_BISHKEK: 'Asia/Bishkek (UTC+06:00)',
    TZID_ASIA_BRUNEI: 'Asia/Brunei (UTC+08:00)',
    TZID_ASIA_CHITA: 'Asia/Chita (UTC+09:00)',
    TZID_ASIA_CHOIBALSAN: 'Asia/Choibalsan (UTC+08:00)',
    TZID_ASIA_CHONGQING: 'Asia/Chongqing (UTC+08:00)',
    TZID_ASIA_CHUNGKING: 'Asia/Chungking (UTC+08:00)',
    TZID_ASIA_COLOMBO: 'Asia/Colombo (UTC+05:30)',
    TZID_ASIA_DACCA: 'Asia/Dacca (UTC+06:00)',
    TZID_ASIA_DAMASCUS: 'Asia/Damascus (UTC+02:00)',
    TZID_ASIA_DHAKA: 'Asia/Dhaka (UTC+06:00)',
    TZID_ASIA_DILI: 'Asia/Dili (UTC+09:00)',
    TZID_ASIA_DUBAI: 'Asia/Dubai (UTC+04:00)',
    TZID_ASIA_DUSHANBE: 'Asia/Dushanbe (UTC+05:00)',
    TZID_ASIA_GAZA: 'Asia/Gaza (UTC+02:00)',
    TZID_ASIA_HARBIN: 'Asia/Harbin (UTC+08:00)',
    TZID_ASIA_HEBRON: 'Asia/Hebron (UTC+02:00)',
    TZID_ASIA_HO_CHI_MINH: 'Asia/Ho Chi Minh (UTC+07:00)',
    TZID_ASIA_HONG_KONG: 'Asia/Hong Kong (UTC+08:00)',
    TZID_ASIA_HOVD: 'Asia/Hovd (UTC+07:00)',
    TZID_ASIA_IRKUTSK: 'Asia/Irkutsk (UTC+08:00)',
    TZID_ASIA_ISTANBUL: 'Europe/Istanbul (UTC+02:00)',
    TZID_ASIA_JAKARTA: 'Asia/Jakarta (UTC+07:00)',
    TZID_ASIA_JAYAPURA: 'Asia/Jayapura (UTC+09:00)',
    TZID_ASIA_JERUSALEM: 'Asia/Jerusalem (UTC+02:00)',
    TZID_ASIA_KABUL: 'Asia/Kabul (UTC+04:30)',
    TZID_ASIA_KAMCHATKA: 'Asia/Kamchatka (UTC+12:00)',
    TZID_ASIA_KARACHI: 'Asia/Karachi (UTC+05:00)',
    TZID_ASIA_KASHGAR: 'Asia/Kashgar (UTC+06:00)',
    TZID_ASIA_KATHMANDU: 'Asia/Kathmandu (UTC+05:45)',
    TZID_ASIA_KATMANDU: 'Asia/Katmandu (UTC+05:45)',
    TZID_ASIA_KHANDYGA: 'Asia/Khandyga (UTC+09:00)',
    TZID_ASIA_KOLKATA: 'Asia/Kolkata (UTC+05:30)',
    TZID_ASIA_KRASNOYARSK: 'Asia/Krasnoyarsk (UTC+07:00)',
    TZID_ASIA_KUALA_LUMPUR: 'Asia/Kuala Lumpur (UTC+08:00)',
    TZID_ASIA_KUCHING: 'Asia/Kuching (UTC+08:00)',
    TZID_ASIA_KUWAIT: 'Asia/Kuwait (UTC+03:00)',
    TZID_ASIA_MACAO: 'Asia/Macao (UTC+08:00)',
    TZID_ASIA_MACAU: 'Asia/Macau (UTC+08:00)',
    TZID_ASIA_MAGADAN: 'Asia/Magadan (UTC+10:00)',
    TZID_ASIA_MAKASSAR: 'Asia/Makassar (UTC+08:00)',
    TZID_ASIA_MANILA: 'Asia/Manila (UTC+08:00)',
    TZID_ASIA_MUSCAT: 'Asia/Muscat (UTC+04:00)',
    TZID_ASIA_NICOSIA: 'Europe/Nicosia (UTC+02:00)',
    TZID_ASIA_NOVOKUZNETSK: 'Asia/Novokuznetsk (UTC+07:00)',
    TZID_ASIA_NOVOSIBIRSK: 'Asia/Novosibirsk (UTC+06:00)',
    TZID_ASIA_OMSK: 'Asia/Omsk (UTC+06:00)',
    TZID_ASIA_ORAL: 'Asia/Oral (UTC+05:00)',
    TZID_ASIA_PHNOM_PENH: 'Asia/Phnom Penh (UTC+07:00)',
    TZID_ASIA_PONTIANAK: 'Asia/Pontianak (UTC+07:00)',
    TZID_ASIA_PYONGYANG: 'Asia/Pyongyang (UTC+08:30)',
    TZID_ASIA_QATAR: 'Asia/Qatar (UTC+03:00)',
    TZID_ASIA_QYZYLORDA: 'Asia/Qyzylorda (UTC+06:00)',
    TZID_ASIA_RANGOON: 'Asia/Rangoon (UTC+06:30)',
    TZID_ASIA_RIYADH: 'Asia/Riyadh (UTC+03:00)',
    TZID_ASIA_SAIGON: 'Asia/Saigon (UTC+07:00)',
    TZID_ASIA_SAKHALIN: 'Asia/Sakhalin (UTC+10:00)',
    TZID_ASIA_SAMARKAND: 'Asia/Samarkand (UTC+05:00)',
    TZID_ASIA_SEOUL: 'Asia/Seoul (UTC+09:00)',
    TZID_ASIA_SHANGHAI: 'Asia/Shanghai (UTC+08:00)',
    TZID_ASIA_SINGAPORE: 'Singapore (UTC+08:00)',
    TZID_ASIA_SREDNEKOLYMSK: 'Asia/Srednekolymsk (UTC+11:00)',
    TZID_ASIA_TAIPEI: 'Asia/Taipei (UTC+08:00)',
    TZID_ASIA_TASHKENT: 'Asia/Tashkent (UTC+05:00)',
    TZID_ASIA_TBILISI: 'Asia/Tbilisi (UTC+04:00)',
    TZID_ASIA_TEHRAN: 'Asia/Tehran (UTC+03:30)',
    TZID_ASIA_TEL_AVIV: 'Asia/Tel Aviv (UTC+02:00)',
    TZID_ASIA_THIMBU: 'Asia/Thimbu (UTC+06:00)',
    TZID_ASIA_THIMPHU: 'Asia/Thimphu (UTC+06:00)',
    TZID_ASIA_TOKYO: 'Asia/Tokyo (UTC+09:00)',
    TZID_ASIA_UJUNG_PANDANG: 'Asia/Ujung Pandang (UTC+08:00)',
    TZID_ASIA_ULAANBAATAR: 'Asia/Ulaanbaatar (UTC+08:00)',
    TZID_ASIA_ULAN_BATOR: 'Asia/Ulan Bator (UTC+08:00)',
    TZID_ASIA_URUMQI: 'Asia/Urumqi (UTC+06:00)',
    'TZID_ASIA_UST-NERA': 'Asia/Ust-Nera (UTC+10:00)',
    TZID_ASIA_VIENTIANE: 'Asia/Vientiane (UTC+07:00)',
    TZID_ASIA_VLADIVOSTOK: 'Asia/Vladivostok (UTC+10:00)',
    TZID_ASIA_YAKUTSK: 'Asia/Yakutsk (UTC+09:00)',
    TZID_ASIA_YEKATERINBURG: 'Asia/Yekaterinburg (UTC+05:00)',
    TZID_ASIA_YEREVAN: 'Asia/Yerevan (UTC+04:00)',
    TZID_ATLANTIC_AZORES: 'Atlantic/Azores (UTC-01:00)',
    TZID_ATLANTIC_BERMUDA: 'Atlantic/Bermuda (UTC-04:00)',
    TZID_ATLANTIC_CANARY: 'Atlantic/Canary (UTC+00:00)',
    TZID_ATLANTIC_CAPE_VERDE: 'Atlantic/Cape Verde (UTC-01:00)',
    TZID_ATLANTIC_FAEROE: 'Atlantic/Faeroe (UTC+00:00)',
    TZID_ATLANTIC_FAROE: 'Atlantic/Faroe (UTC+00:00)',
    TZID_ATLANTIC_JAN_MAYEN: 'Atlantic/Jan Mayen (UTC+01:00)',
    TZID_ATLANTIC_MADEIRA: 'Atlantic/Madeira (UTC+00:00)',
    TZID_ATLANTIC_REYKJAVIK: 'Atlantic/Reykjavik (UTC+00:00)',
    TZID_ATLANTIC_SOUTH_GEORGIA: 'Atlantic/South Georgia (UTC-02:00)',
    TZID_ATLANTIC_ST_HELENA: 'Atlantic/St Helena (UTC+00:00)',
    TZID_ATLANTIC_STANLEY: 'Atlantic/Stanley (UTC-03:00)',
    TZID_AUSTRALIA_ACT: 'Australia/ACT (UTC+11:00)',
    TZID_AUSTRALIA_ADELAIDE: 'Australia/Adelaide (UTC+10:30)',
    TZID_AUSTRALIA_BRISBANE: 'Australia/Brisbane (UTC+10:00)',
    TZID_AUSTRALIA_BROKEN_HILL: 'Australia/Broken Hill (UTC+10:30)',
    TZID_AUSTRALIA_CANBERRA: 'Australia/Canberra (UTC+11:00)',
    TZID_AUSTRALIA_CURRIE: 'Australia/Currie (UTC+11:00)',
    TZID_AUSTRALIA_DARWIN: 'Australia/Darwin (UTC+09:30)',
    TZID_AUSTRALIA_EUCLA: 'Australia/Eucla (UTC+08:45)',
    TZID_AUSTRALIA_HOBART: 'Australia/Hobart (UTC+11:00)',
    TZID_AUSTRALIA_LHI: 'Australia/LHI (UTC+11:00)',
    TZID_AUSTRALIA_LINDEMAN: 'Australia/Lindeman (UTC+10:00)',
    TZID_AUSTRALIA_LORD_HOWE: 'Australia/Lord Howe (UTC+11:00)',
    TZID_AUSTRALIA_MELBOURNE: 'Australia/Melbourne (UTC+11:00)',
    TZID_AUSTRALIA_NSW: 'Australia/NSW (UTC+11:00)',
    TZID_AUSTRALIA_NORTH: 'Australia/North (UTC+09:30)',
    TZID_AUSTRALIA_PERTH: 'Australia/Perth (UTC+08:00)',
    TZID_AUSTRALIA_QUEENSLAND: 'Australia/Queensland (UTC+10:00)',
    TZID_AUSTRALIA_SOUTH: 'Australia/South (UTC+10:30)',
    TZID_AUSTRALIA_SYDNEY: 'Australia/Sydney (UTC+11:00)',
    TZID_AUSTRALIA_TASMANIA: 'Australia/Tasmania (UTC+11:00)',
    TZID_AUSTRALIA_VICTORIA: 'Australia/Victoria (UTC+11:00)',
    TZID_AUSTRALIA_WEST: 'Brazil/West (UTC-04:00)',
    TZID_AUSTRALIA_YANCOWINNA: 'Australia/Yancowinna (UTC+10:30)',
    TZID_BRAZIL_ACRE: 'Brazil/Acre (UTC-05:00)',
    TZID_BRAZIL_DENORONHA: 'Brazil/DeNoronha (UTC-02:00)',
    TZID_BRAZIL_EAST: 'Brazil/East (UTC-02:00)',
    TZID_BRAZIL_WEST: 'Brazil/West (UTC-04:00)',
    TZID_CET: 'CET (UTC+01:00)',
    TZID_CST6CDT: 'SystemV/CST6CDT (UTC-06:00)',
    TZID_CANADA_ATLANTIC: 'Canada/Atlantic (UTC-04:00)',
    TZID_CANADA_CENTRAL: 'US/Central (UTC-06:00)',
    'TZID_CANADA_EAST-SASKATCHEWAN': 'Canada/East-Saskatchewan (UTC-06:00)',
    TZID_CANADA_EASTERN: 'US/Eastern (UTC-05:00)',
    TZID_CANADA_MOUNTAIN: 'US/Mountain (UTC-07:00)',
    TZID_CANADA_NEWFOUNDLAND: 'Canada/Newfoundland (UTC-03:30)',
    TZID_CANADA_PACIFIC: 'US/Pacific (UTC-08:00)',
    TZID_CANADA_SASKATCHEWAN: 'Canada/Saskatchewan (UTC-06:00)',
    TZID_CANADA_YUKON: 'Canada/Yukon (UTC-08:00)',
    TZID_CHILE_CONTINENTAL: 'Chile/Continental (UTC-03:00)',
    TZID_CHILE_EASTERISLAND: 'Chile/EasterIsland (UTC-05:00)',
    TZID_CUBA: 'Cuba (UTC-05:00)',
    TZID_EET: 'EET (UTC+02:00)',
    TZID_EST5EDT: 'SystemV/EST5EDT (UTC-05:00)',
    TZID_EGYPT: 'Egypt (UTC+02:00)',
    TZID_EIRE: 'Eire (UTC+00:00)',
    TZID_ETC_GMT: 'GMT (UTC+00:00)',
    'TZID_ETC_GMT+0': 'Etc/GMT+0 (UTC+00:00)',
    'TZID_ETC_GMT+1': 'Etc/GMT+1 (UTC-01:00)',
    'TZID_ETC_GMT+10': 'Etc/GMT+10 (UTC-10:00)',
    'TZID_ETC_GMT+11': 'Etc/GMT+11 (UTC-11:00)',
    'TZID_ETC_GMT+12': 'Etc/GMT+12 (UTC-12:00)',
    'TZID_ETC_GMT+2': 'Etc/GMT+2 (UTC-02:00)',
    'TZID_ETC_GMT+3': 'Etc/GMT+3 (UTC-03:00)',
    'TZID_ETC_GMT+4': 'Etc/GMT+4 (UTC-04:00)',
    'TZID_ETC_GMT+5': 'Etc/GMT+5 (UTC-05:00)',
    'TZID_ETC_GMT+6': 'Etc/GMT+6 (UTC-06:00)',
    'TZID_ETC_GMT+7': 'Etc/GMT+7 (UTC-07:00)',
    'TZID_ETC_GMT+8': 'Etc/GMT+8 (UTC-08:00)',
    'TZID_ETC_GMT+9': 'Etc/GMT+9 (UTC-09:00)',
    'TZID_ETC_GMT-0': 'Etc/GMT-0 (UTC+00:00)',
    'TZID_ETC_GMT-1': 'Etc/GMT-1 (UTC+01:00)',
    'TZID_ETC_GMT-10': 'Etc/GMT-10 (UTC+10:00)',
    'TZID_ETC_GMT-11': 'Etc/GMT-11 (UTC+11:00)',
    'TZID_ETC_GMT-12': 'Etc/GMT-12 (UTC+12:00)',
    'TZID_ETC_GMT-13': 'Etc/GMT-13 (UTC+13:00)',
    'TZID_ETC_GMT-14': 'Etc/GMT-14 (UTC+14:00)',
    'TZID_ETC_GMT-2': 'Etc/GMT-2 (UTC+02:00)',
    'TZID_ETC_GMT-3': 'Etc/GMT-3 (UTC+03:00)',
    'TZID_ETC_GMT-4': 'Etc/GMT-4 (UTC+04:00)',
    'TZID_ETC_GMT-5': 'Etc/GMT-5 (UTC+05:00)',
    'TZID_ETC_GMT-6': 'Etc/GMT-6 (UTC+06:00)',
    'TZID_ETC_GMT-7': 'Etc/GMT-7 (UTC+07:00)',
    'TZID_ETC_GMT-8': 'Etc/GMT-8 (UTC+08:00)',
    'TZID_ETC_GMT-9': 'Etc/GMT-9 (UTC+09:00)',
    TZID_ETC_GMT0: 'GMT0 (UTC+00:00)',
    TZID_ETC_GREENWICH: 'Greenwich (UTC+00:00)',
    TZID_ETC_UCT: 'UCT (UTC+00:00)',
    TZID_ETC_UTC: 'UTC (UTC+00:00)',
    TZID_ETC_UNIVERSAL: 'Universal (UTC+00:00)',
    TZID_ETC_ZULU: 'Zulu (UTC+00:00)',
    TZID_EUROPE_AMSTERDAM: 'Europe/Amsterdam (UTC+01:00)',
    TZID_EUROPE_ANDORRA: 'Europe/Andorra (UTC+01:00)',
    TZID_EUROPE_ATHENS: 'Europe/Athens (UTC+02:00)',
    TZID_EUROPE_BELFAST: 'Europe/Belfast (UTC+00:00)',
    TZID_EUROPE_BELGRADE: 'Europe/Belgrade (UTC+01:00)',
    TZID_EUROPE_BERLIN: 'Europe/Berlin (UTC+01:00)',
    TZID_EUROPE_BRATISLAVA: 'Europe/Bratislava (UTC+01:00)',
    TZID_EUROPE_BRUSSELS: 'Europe/Brussels (UTC+01:00)',
    TZID_EUROPE_BUCHAREST: 'Europe/Bucharest (UTC+02:00)',
    TZID_EUROPE_BUDAPEST: 'Europe/Budapest (UTC+01:00)',
    TZID_EUROPE_BUSINGEN: 'Europe/Busingen (UTC+01:00)',
    TZID_EUROPE_CHISINAU: 'Europe/Chisinau (UTC+02:00)',
    TZID_EUROPE_COPENHAGEN: 'Europe/Copenhagen (UTC+01:00)',
    TZID_EUROPE_DUBLIN: 'Europe/Dublin (UTC+00:00)',
    TZID_EUROPE_GIBRALTAR: 'Europe/Gibraltar (UTC+01:00)',
    TZID_EUROPE_GUERNSEY: 'Europe/Guernsey (UTC+00:00)',
    TZID_EUROPE_HELSINKI: 'Europe/Helsinki (UTC+02:00)',
    TZID_EUROPE_ISLE_OF_MAN: 'Europe/Isle of Man (UTC+00:00)',
    TZID_EUROPE_ISTANBUL: 'Europe/Istanbul (UTC+02:00)',
    TZID_EUROPE_JERSEY: 'Europe/Jersey (UTC+00:00)',
    TZID_EUROPE_KALININGRAD: 'Europe/Kaliningrad (UTC+02:00)',
    TZID_EUROPE_KIEV: 'Europe/Kiev (UTC+02:00)',
    TZID_EUROPE_LISBON: 'Europe/Lisbon (UTC+00:00)',
    TZID_EUROPE_LJUBLJANA: 'Europe/Ljubljana (UTC+01:00)',
    TZID_EUROPE_LONDON: 'Europe/London (UTC+00:00)',
    TZID_EUROPE_LUXEMBOURG: 'Europe/Luxembourg (UTC+01:00)',
    TZID_EUROPE_MADRID: 'Europe/Madrid (UTC+01:00)',
    TZID_EUROPE_MALTA: 'Europe/Malta (UTC+01:00)',
    TZID_EUROPE_MARIEHAMN: 'Europe/Mariehamn (UTC+02:00)',
    TZID_EUROPE_MINSK: 'Europe/Minsk (UTC+03:00)',
    TZID_EUROPE_MONACO: 'Europe/Monaco (UTC+01:00)',
    TZID_EUROPE_MOSCOW: 'Europe/Moscow (UTC+03:00)',
    TZID_EUROPE_NICOSIA: 'Europe/Nicosia (UTC+02:00)',
    TZID_EUROPE_OSLO: 'Europe/Oslo (UTC+01:00)',
    TZID_EUROPE_PARIS: 'Europe/Paris (UTC+01:00)',
    TZID_EUROPE_PODGORICA: 'Europe/Podgorica (UTC+01:00)',
    TZID_EUROPE_PRAGUE: 'Europe/Prague (UTC+01:00)',
    TZID_EUROPE_RIGA: 'Europe/Riga (UTC+02:00)',
    TZID_EUROPE_ROME: 'Europe/Rome (UTC+01:00)',
    TZID_EUROPE_SAMARA: 'Europe/Samara (UTC+04:00)',
    TZID_EUROPE_SAN_MARINO: 'Europe/San Marino (UTC+01:00)',
    TZID_EUROPE_SARAJEVO: 'Europe/Sarajevo (UTC+01:00)',
    TZID_EUROPE_SIMFEROPOL: 'Europe/Simferopol (UTC+03:00)',
    TZID_EUROPE_SKOPJE: 'Europe/Skopje (UTC+01:00)',
    TZID_EUROPE_SOFIA: 'Europe/Sofia (UTC+02:00)',
    TZID_EUROPE_STOCKHOLM: 'Europe/Stockholm (UTC+01:00)',
    TZID_EUROPE_TALLINN: 'Europe/Tallinn (UTC+02:00)',
    TZID_EUROPE_TIRANE: 'Europe/Tirane (UTC+01:00)',
    TZID_EUROPE_TIRASPOL: 'Europe/Tiraspol (UTC+02:00)',
    TZID_EUROPE_UZHGOROD: 'Europe/Uzhgorod (UTC+02:00)',
    TZID_EUROPE_VADUZ: 'Europe/Vaduz (UTC+01:00)',
    TZID_EUROPE_VATICAN: 'Europe/Vatican (UTC+01:00)',
    TZID_EUROPE_VIENNA: 'Europe/Vienna (UTC+01:00)',
    TZID_EUROPE_VILNIUS: 'Europe/Vilnius (UTC+02:00)',
    TZID_EUROPE_VOLGOGRAD: 'Europe/Volgograd (UTC+03:00)',
    TZID_EUROPE_WARSAW: 'Europe/Warsaw (UTC+01:00)',
    TZID_EUROPE_ZAGREB: 'Europe/Zagreb (UTC+01:00)',
    TZID_EUROPE_ZAPOROZHYE: 'Europe/Zaporozhye (UTC+02:00)',
    TZID_EUROPE_ZURICH: 'Europe/Zurich (UTC+01:00)',
    TZID_GB: 'GB (UTC+00:00)',
    'TZID_GB-EIRE': 'GB-Eire (UTC+00:00)',
    TZID_GMT: 'GMT (UTC+00:00)',
    TZID_GMT0: 'GMT0 (UTC+00:00)',
    TZID_GREENWICH: 'Greenwich (UTC+00:00)',
    TZID_HONGKONG: 'Hongkong (UTC+08:00)',
    TZID_ICELAND: 'Iceland (UTC+00:00)',
    TZID_INDIAN_ANTANANARIVO: 'Indian/Antananarivo (UTC+03:00)',
    TZID_INDIAN_CHAGOS: 'Indian/Chagos (UTC+06:00)',
    TZID_INDIAN_CHRISTMAS: 'Indian/Christmas (UTC+07:00)',
    TZID_INDIAN_COCOS: 'Indian/Cocos (UTC+06:30)',
    TZID_INDIAN_COMORO: 'Indian/Comoro (UTC+03:00)',
    TZID_INDIAN_KERGUELEN: 'Indian/Kerguelen (UTC+05:00)',
    TZID_INDIAN_MAHE: 'Indian/Mahe (UTC+04:00)',
    TZID_INDIAN_MALDIVES: 'Indian/Maldives (UTC+05:00)',
    TZID_INDIAN_MAURITIUS: 'Indian/Mauritius (UTC+04:00)',
    TZID_INDIAN_MAYOTTE: 'Indian/Mayotte (UTC+03:00)',
    TZID_INDIAN_REUNION: 'Indian/Reunion (UTC+04:00)',
    TZID_IRAN: 'Iran (UTC+03:30)',
    TZID_ISRAEL: 'Israel (UTC+02:00)',
    TZID_JAMAICA: 'Jamaica (UTC-05:00)',
    TZID_JAPAN: 'Japan (UTC+09:00)',
    TZID_KWAJALEIN: 'Pacific/Kwajalein (UTC+12:00)',
    TZID_LIBYA: 'Libya (UTC+02:00)',
    TZID_MET: 'MET (UTC+01:00)',
    TZID_MST7MDT: 'SystemV/MST7MDT (UTC-07:00)',
    TZID_MEXICO_BAJANORTE: 'Mexico/BajaNorte (UTC-08:00)',
    TZID_MEXICO_BAJASUR: 'Mexico/BajaSur (UTC-07:00)',
    TZID_MEXICO_GENERAL: 'Mexico/General (UTC-06:00)',
    TZID_NZ: 'NZ (UTC+13:00)',
    'TZID_NZ-CHAT': 'NZ-CHAT (UTC+13:45)',
    TZID_NAVAJO: 'Navajo (UTC-07:00)',
    TZID_PRC: 'PRC (UTC+08:00)',
    TZID_PST8PDT: 'SystemV/PST8PDT (UTC-08:00)',
    TZID_PACIFIC_APIA: 'Pacific/Apia (UTC+14:00)',
    TZID_PACIFIC_AUCKLAND: 'Pacific/Auckland (UTC+13:00)',
    TZID_PACIFIC_BOUGAINVILLE: 'Pacific/Bougainville (UTC+11:00)',
    TZID_PACIFIC_CHATHAM: 'Pacific/Chatham (UTC+13:45)',
    TZID_PACIFIC_CHUUK: 'Pacific/Chuuk (UTC+10:00)',
    TZID_PACIFIC_EASTER: 'Pacific/Easter (UTC-05:00)',
    TZID_PACIFIC_EFATE: 'Pacific/Efate (UTC+11:00)',
    TZID_PACIFIC_ENDERBURY: 'Pacific/Enderbury (UTC+13:00)',
    TZID_PACIFIC_FAKAOFO: 'Pacific/Fakaofo (UTC+13:00)',
    TZID_PACIFIC_FIJI: 'Pacific/Fiji (UTC+13:00)',
    TZID_PACIFIC_FUNAFUTI: 'Pacific/Funafuti (UTC+12:00)',
    TZID_PACIFIC_GALAPAGOS: 'Pacific/Galapagos (UTC-06:00)',
    TZID_PACIFIC_GAMBIER: 'Pacific/Gambier (UTC-09:00)',
    TZID_PACIFIC_GUADALCANAL: 'Pacific/Guadalcanal (UTC+11:00)',
    TZID_PACIFIC_GUAM: 'Pacific/Guam (UTC+10:00)',
    TZID_PACIFIC_HONOLULU: 'Pacific/Honolulu (UTC-10:00)',
    TZID_PACIFIC_JOHNSTON: 'Pacific/Johnston (UTC-10:00)',
    TZID_PACIFIC_KIRITIMATI: 'Pacific/Kiritimati (UTC+14:00)',
    TZID_PACIFIC_KOSRAE: 'Pacific/Kosrae (UTC+11:00)',
    TZID_PACIFIC_KWAJALEIN: 'Pacific/Kwajalein (UTC+12:00)',
    TZID_PACIFIC_MAJURO: 'Pacific/Majuro (UTC+12:00)',
    TZID_PACIFIC_MARQUESAS: 'Pacific/Marquesas (UTC-09:30)',
    TZID_PACIFIC_MIDWAY: 'Pacific/Midway (UTC-11:00)',
    TZID_PACIFIC_NAURU: 'Pacific/Nauru (UTC+12:00)',
    TZID_PACIFIC_NIUE: 'Pacific/Niue (UTC-11:00)',
    TZID_PACIFIC_NORFOLK: 'Pacific/Norfolk (UTC+11:00)',
    TZID_PACIFIC_NOUMEA: 'Pacific/Noumea (UTC+11:00)',
    TZID_PACIFIC_PAGO_PAGO: 'Pacific/Pago Pago (UTC-11:00)',
    TZID_PACIFIC_PALAU: 'Pacific/Palau (UTC+09:00)',
    TZID_PACIFIC_PITCAIRN: 'Pacific/Pitcairn (UTC-08:00)',
    TZID_PACIFIC_POHNPEI: 'Pacific/Pohnpei (UTC+11:00)',
    TZID_PACIFIC_PONAPE: 'Pacific/Ponape (UTC+11:00)',
    TZID_PACIFIC_PORT_MORESBY: 'Pacific/Port Moresby (UTC+10:00)',
    TZID_PACIFIC_RAROTONGA: 'Pacific/Rarotonga (UTC-10:00)',
    TZID_PACIFIC_SAIPAN: 'Pacific/Saipan (UTC+10:00)',
    TZID_PACIFIC_SAMOA: 'US/Samoa (UTC-11:00)',
    TZID_PACIFIC_TAHITI: 'Pacific/Tahiti (UTC-10:00)',
    TZID_PACIFIC_TARAWA: 'Pacific/Tarawa (UTC+12:00)',
    TZID_PACIFIC_TONGATAPU: 'Pacific/Tongatapu (UTC+13:00)',
    TZID_PACIFIC_TRUK: 'Pacific/Truk (UTC+10:00)',
    TZID_PACIFIC_WAKE: 'Pacific/Wake (UTC+12:00)',
    TZID_PACIFIC_WALLIS: 'Pacific/Wallis (UTC+12:00)',
    TZID_PACIFIC_YAP: 'Pacific/Yap (UTC+10:00)',
    TZID_POLAND: 'Poland (UTC+01:00)',
    TZID_PORTUGAL: 'Portugal (UTC+00:00)',
    TZID_ROK: 'ROK (UTC+09:00)',
    TZID_SINGAPORE: 'Singapore (UTC+08:00)',
    TZID_SYSTEMV_AST4: 'SystemV/AST4 (UTC-04:00)',
    TZID_SYSTEMV_AST4ADT: 'SystemV/AST4ADT (UTC-04:00)',
    TZID_SYSTEMV_CST6: 'SystemV/CST6 (UTC-06:00)',
    TZID_SYSTEMV_CST6CDT: 'SystemV/CST6CDT (UTC-06:00)',
    TZID_SYSTEMV_EST5: 'SystemV/EST5 (UTC-05:00)',
    TZID_SYSTEMV_EST5EDT: 'SystemV/EST5EDT (UTC-05:00)',
    TZID_SYSTEMV_HST10: 'SystemV/HST10 (UTC-10:00)',
    TZID_SYSTEMV_MST7: 'SystemV/MST7 (UTC-07:00)',
    TZID_SYSTEMV_MST7MDT: 'SystemV/MST7MDT (UTC-07:00)',
    TZID_SYSTEMV_PST8: 'SystemV/PST8 (UTC-08:00)',
    TZID_SYSTEMV_PST8PDT: 'SystemV/PST8PDT (UTC-08:00)',
    TZID_SYSTEMV_YST9: 'SystemV/YST9 (UTC-09:00)',
    TZID_SYSTEMV_YST9YDT: 'SystemV/YST9YDT (UTC-09:00)',
    TZID_TURKEY: 'Turkey (UTC+02:00)',
    TZID_UCT: 'UCT (UTC+00:00)',
    TZID_US_ALASKA: 'US/Alaska (UTC-09:00)',
    TZID_US_ALEUTIAN: 'US/Aleutian (UTC-10:00)',
    TZID_US_ARIZONA: 'US/Arizona (UTC-07:00)',
    TZID_US_CENTRAL: 'US/Central (UTC-06:00)',
    'TZID_US_EAST-INDIANA': 'US/East-Indiana (UTC-05:00)',
    TZID_US_EASTERN: 'US/Eastern (UTC-05:00)',
    TZID_US_HAWAII: 'US/Hawaii (UTC-10:00)',
    'TZID_US_INDIANA-STARKE': 'US/Indiana-Starke (UTC-06:00)',
    TZID_US_MICHIGAN: 'US/Michigan (UTC-05:00)',
    TZID_US_MOUNTAIN: 'US/Mountain (UTC-07:00)',
    TZID_US_PACIFIC: 'US/Pacific (UTC-08:00)',
    'TZID_US_PACIFIC-NEW': 'US/Pacific-New (UTC-08:00)',
    TZID_US_SAMOA: 'US/Samoa (UTC-11:00)',
    TZID_UTC: 'UTC (UTC+00:00)',
    TZID_UNIVERSAL: 'Universal (UTC+00:00)',
    'TZID_W-SU': 'W-SU (UTC+03:00)',
    TZID_WET: 'WET (UTC+00:00)',
    TZID_ZULU: 'Zulu (UTC+00:00)',
    ERROR_OK: 'ERROR_OK',
    ERROR_AUTH_TOKEN_EXPIRED: 'ERROR_AUTH_TOKEN_EXPIRED',
    ERROR_AUTH_TOKEN_NOT_CONFIGURED: 'ERROR_AUTH_TOKEN_NOT_CONFIGURED',
    ERROR_AUTH_TOKEN_UNEXPECTED_KEY_TYPE: 'ERROR_AUTH_TOKEN_UNEXPECTED_KEY_TYPE',
    ERROR_AUTH_TOKEN_PARSE_JWT: 'ERROR_AUTH_TOKEN_PARSE_JWT',
    ERROR_AUTH_TOKEN_VERIFY_JWT: 'ERROR_AUTH_TOKEN_VERIFY_JWT',
    ERROR_BAD_REQUEST: 'ERROR_BAD_REQUEST',
    ERROR_DATA_MODEL_VIOLATION: 'ERROR_DATA_MODEL_VIOLATION',
    ERROR_IMAGES_CUSTOM_SCRIPT_ERROR: 'ERROR_IMAGES_CUSTOM_SCRIPT_ERROR',
    ERROR_IMAGES_UNKNOWN_AZURE_ERROR: 'ERROR_IMAGES_UNKNOWN_AZURE_ERROR',
    ERROR_INPUT_INVALID_PROPERTY: 'ERROR_INPUT_INVALID_PROPERTY',
    ERROR_INPUT_MISSING_PROPERTY: 'ERROR_INPUT_MISSING_PROPERTY',
    ERROR_KEYSTORE_ACCESS: 'ERROR_KEYSTORE_ACCESS',
    ERROR_LOGIN: 'ERROR_LOGIN',
    ERROR_NESTED_REQUEST_FAILED: 'ERROR_NESTED_REQUEST_FAILED',
    ERROR_NODE_NOT_CONNECTED: 'ERROR_NODE_NOT_CONNECTED',
    ERROR_NOT_AUTHENTICATED: 'ERROR_NOT_AUTHENTICATED',
    ERROR_NOT_AUTHORIZED: 'ERROR_NOT_AUTHORIZED',
    ERROR_PASSWORD_HASHING: 'ERROR_PASSWORD_HASHING',
    ERROR_PERSISTENCE_DUPLICATE_KEY_ERROR: 'ERROR_PERSISTENCE_DUPLICATE_KEY_ERROR',
    ERROR_PERSISTENCE_ERROR: 'ERROR_PERSISTENCE_ERROR',
    ERROR_RESOURCE_IN_USE: 'ERROR_RESOURCE_IN_USE',
    ERROR_RESOURCE_ALREADY_EXISTS: 'ERROR_RESOURCE_ALREADY_EXISTS',
    ERROR_RESOURCE_NOT_FOUND: 'ERROR_RESOURCE_NOT_FOUND',
    ERROR_RESOURCE_NOT_FOUND_GENERAL: 'ERROR_RESOURCE_NOT_FOUND_GENERAL',
    ERROR_RESOURCE_NOT_MODIFIABLE: 'ERROR_RESOURCE_NOT_MODIFIABLE',
    ERROR_UNKNOWN_ERROR: 'ERROR_UNKNOWN_ERROR',
    ERROR_RANGE_NOT_SATISFIABLE: 'ERROR_RANGE_NOT_SATISFIABLE',
    ERROR_SITE_LENGTH: 'The site name can contain 3 to 64 characters',
    ERROR_SERVER_CONFIGURATION: 'ERROR_SERVER_CONFIGURATION',
    ERROR_SMARTNODE_ATTACHED: 'ERROR_SMARTNODE_ATTACHED',
    ERROR_SERVICE_UNAVAILABLE: 'ERROR_SERVICE_UNAVAILABLE',
    ERROR_METHOD_NOT_SUPPORTED: 'ERROR_METHOD_NOT_SUPPORTED',
    ERROR_NO_NODES_FOR_TENANT: 'ERROR_NO_NODES_FOR_TENANT',
    ERROR_MULTIPLE_POSSIBLE_NODES_FOR_TENANT: 'ERROR_MULTIPLE_POSSIBLE_NODES_FOR_TENANT',
    ERROR_CIDR_RANGE_OVERLAP_DETECTED: 'ERROR_CIDR_RANGE_OVERLAP_DETECTED',
    NO_GATEWAY_PRESENT_FOR_POD: 'No gateway present for this pod.',
    UAG_ERROR_AUTHENTICATION_GENERIC: 'Failed to create authentication for the Internet ' +
        'Enabled Desktops associated with this pod.',
    UAG_ERROR_CREDENTIAL_GENERIC:
        'Failed to create certificate for the Internet Enabled Desktops associated with this pod.',
    UAG_ERROR_CREDENTIAL_RADIUS_GENERIC:
        'Failed to create credentials for the Radius shared secret. Please try again.',
    UAG_ERROR_GATEWAY_SET_GENERIC: 'Failed to create Internet Enabled Desktops for the pod.',
    UAG_ERROR_NODE_GENERIC: 'Failed to register pod. Please try again.',
    UAG_ERROR_DEPLOYER_GENERIC: 'Failed to deploy the pod in Microsoft Azure.',
    UAG_ERROR_FETCH_NEW_CAPABILITY_GENERIC:
        'Pod deployed successfully, but failed to get new capability.',
    UAG_UPDATE_STATUS_COLON: 'Update status:',
    UAG_UPDATE_FAILED: 'Update has failed',
    UAG_UPDATE_FAILED_RETRY_PENDING: 'Update failed, retry pending',
    UAG_UPDATE_IN_PROGRESS: 'Update is in progress',
    UAG_UPDATE_IN_SYNC: 'Synchronized',
    UAG_UPDATE_PENDING: 'Update pending',
    CANCEL_TASKS: 'Cancel Tasks',
    TASKS_NOT_ALL_CANCELLED_MSG:
        'Not all tasks could be cancelled. Please refresh the tasks list.',
    TASKS_ALL_CANCELLED_MSG: 'Successfully submitted cancellation.',
    TASKS_SOME_UNSUPPORTED_MSG: 'Cancellation failed because some selected tasks ' +
        'are not cancellable. Please try again.',
    UAG_MANDATORY: 'At least one gateway must be configured.',
    UAG_SETUP_SUB_HEADER: 'Set up external and internal Unified Access ' +
        'Gateways for this pod.',
    GATEWAY_SETTINGS: 'Gateway Settings',
    DEPLOY_GATEWAY_SETTINGS: 'Deploy Gateway Settings',
    UPDATE_GATEWAY_SETTINGS: 'Update Gateway Settings',
    HA_SETTINGS: 'High Availability Settings',
    POD_SETTINGS: 'Pod Settings',
    HA_UAG_SETUP_DYNAMIC_DEPLOY_WARNING: 'This action starts the Gateway settings ' +
    'deployment process and updates the high availability pod. Would you like to continue?',
    HA_UAG_SETUP_DYNAMIC_DEPLOY_WARNING_TITLE: 'Deploy Gateway Settings and Update High Availability Pod',
    HA_DEPLOY_WARNING: 'This action updates the high availability pod. Would you like to continue?',
    HA_DEPLOY_TITLE: 'Update High Availability Pod',
    UAG_SETUP_DYNAMIC_DEPLOY_WARNING: 'Clicking Save & Exit starts the ' +
        'gateway deployment process. Would you like to continue?',
    UAG_SETUP_EDIT_WARNING: 'Updating the FQDN or Certificate disconnects existing ' +
        'user connections. Would you like to continue?',
    HA_UAG_SETUP_EDIT_WARNING: '<ul><li>Updates the Gateway settings and disconnects existing user connections.</li>' +
    '<li>Updates the high availability pod.</li></ul>',
    HA_UAG_SETUP_EDIT_WARNING_TITLE: 'Update Gateway Settings and High Availability Pod',
    UAG_AUTH_SETTINGS: '2 Factor Authentication',
    UAG_ENABLE_AUTHENTICATION: 'Enable 2 Factor Authentication?',
    UAG_AUTH_TYPE: '2 Factor Auth Method:',
    DELETE_EXT_UAG: 'Delete External Gateway?',
    DELETE_INT_UAG: 'Delete Internal Gateway?',
    DELETE_UAG_SUCCESS: 'Successfully deleted gateway.',
    DELETE_UAG_FAILED: 'Failed to delete gateway.',
    ENABLE_PUBLIC_IP_QUES: 'Enable Public IP?',
    ENABLE_PUBLIC_IP_HELP_TEXT: 'Select to enable load balancer public IP deployment for external gateway sets',
    GATEWAY_SESSION_TIMEOUT_HELP_TEXT: 'Enter the amount of time in seconds for gateway session timeout.',
    MIN_UAG_SESSION_TIMEOUT_REQUIRED: 'Session timeout value should be minimum {0} milliseconds.',
    MILLISECONDS: 'Milliseconds',
    EDIT_POD_SUB_HEADER: 'Edit details for this pod.',
    DISPLAY_HINT_COLON: 'Display Hint:',
    NAME_ID_SUFFIX_COLON: 'Name ID Suffix:',
    NUM_OF_ITERATIONS_COLON: 'Number of Iterations:',
    RADIUS_PROPERTIES: 'Radius Properties',
    RSA_PROPERTIES: 'RSA Properties',
    PRIMARY_SERVER_PROPERTIES: 'Primary Server Properties',
    SECONDARY_SERVER_PROPERTIES: 'Secondary Server Properties',
    AUTH_NAME_COLON: 'Authentication Name:',
    DNS_ADDRESSES_COLON: 'DNS Addresses:',
    SHOW_DETAILS: 'show details',
    SHOW_LIST: 'Show List',
    ROUTES_COLON: 'Routes:',
    ENABLE_RESOURCE_GROUP_DEPLOYMENT: 'Deployment',
    USE_AVAILABILITY_SETS: 'Use Availability Set:',
    USE_AVAILABILITY_SETS_INFO : 'Distribute virtual desktops across Microsoft Azure infrastructure to ensure that end users can access desktops during expected and unexpected Azure outages.',
    USE_EXISTING_RESOURCE_GROUP: 'Use Existing Resource Group?',
    RESOURCE_GROUP: 'Resource Group',
    USE_EXISTING_RESOURCE_GROUP_INFO: 'Select to choose from a list of existing resource groups. Leave unselected if you do not want to specify a resource group.',
    RESOURCE_GROUP_INFO: 'Select resource group to deploy External Gateway',
    EXTERNAL_UAG: 'External Gateway',
    INTERNAL_UAG: 'Internal Gateway',
    ENABLE_EXTERNAL_UAG_Q: 'Enable External Gateway?',
    ENABLE_INTERNAL_UAG_Q: 'Enable Internal Gateway?',
    EXTERNAL_UAG_ENABLED_INFO: 'Select to include a load balancer and gateway instances ' +
        'that enable access to desktops and applications for users outside your corporate network.',
    INTERNAL_UAG_ENABLED_INFO: 'Select to include a load balancer and gateway instances ' +
        'that enable access to desktops and applications for users within your corporate network.',
    EXTERNAL_UAG_AUTH_ENABLED_INFO: 'Select to add a new or existing 2-factor ' +
        'authentication to the external gateway.',
    EXTERNAL_UAG_AUTH_ENABLED_INFO_DISABLE: '2FA can not be disabled, as Universal Broker Radius 2FA is enable',
    INTERNAL_UAG_AUTH_ENABLED_INFO: 'Select to add a new or existing 2-factor ' +
        'authentication to the internal gateway.',
    EXTERNAL_UAG_HELP_TEXT: 'External Gateway details.',
    INTERNAL_UAG_HELP_TEXT: 'Internal Gateway details.',
    UAG_STATUS: '{0}, {1}',
    UAG_PENDING_DEPLOYING: 'Gateways for Internet Enabled Desktops are being deployed.',
    VALIDATING_CONFIG: 'Validating Configuration',
    ADDING_AZURE_POD: 'Adding a Microsoft Azure Pod',
    UAG_DNS_ADDRESSES_INFO: 'Enter the DNS Addresses as comma separated values such as ' +
        '192.168.1.20, 192.178.1.20, etc.',
    UAG_ROUTES_INFO:
        'Enter Routes with a space between addresses "x.x.x.x/x(space)x.x.x.x". Separate multiple Route values using a comma such as <br> 192.168.1.0/28 192.168.1.17, <br> 192.168.1.32/28 192.168.1.49, etc.',
    UAG_AUTH_TYPE_INFO: 'Select from a list of existing 2-factor authentication ' +
        'configurations or add a new one.',
    UAG_AUTH_NAME_INFO: 'Enter a name to recognize this configuration. The name needs to ' +
        'start with a letter [a-Z] and contain only letters [a-Z], dashes [-], and numbers.',
    UAG_RAD_DISPLAY_HINT_INFO: 'Enter the display hint for this Radius configuration. ' +
        'The hint name needs to start with a letter [a-Z] and contain only letters [a-Z], ' +
        'dashes [-], and numbers.',
    UAG_RAD_NAME_ID_SUFFIX_INFO: 'Enter the Name ID suffix for this Radius configuration. ' +
        'The name needs to start with a letter [a-Z] or [@] and can contain only letters [a-Z], ' +
        'dashes[-], dots[.] and numbers.',
    UAG_RAD_NUM_OF_ITERS_INFO: 'Enter the number of iterations a user is allowed to try ' +
        'authenticating with.',
    UAG_RAD_MAINTAIN_USERNAME_INFO: 'Select if users must enter the same username for ' +
        'RADIUS as for their Active Directory authentication to Horizon Cloud. Unselect to ' +
        'allow users to enter a different username.',
    EDITING_POD_AND_UAG: 'Editing pod and gateway settings',
    BUILD_INFO_COLON: 'Build Version:',
    SUPPORT_DETAILS: 'Please keep these details handy when contacting support:',
    SUPPORT_LINK: 'Click here to proceed to VMware Knowledge Base.',
    WARNING_SESSION_EXPIRE: 'Your session will end in {0} seconds due to inactivity. Click ' +
        'anywhere if you want to continue your session.',
    WARNING_SESSION_EXPIRE_TITLE: 'Your Session is About to Expire',
    ADMIN_PORTAL_TIMEOUT: 'Admin Portal Timeout:',
    ADMIN_PORTAL_TIMEOUT_HELP_TEXT: 'Enter the duration of time allowed to elapse before ' +
        'requiring users to log back in',
    VALID_ADMIN_TIMEOUTVAL_REQUIRED: 'A valid integer between 30 and 180 is required.',
    VMWARE_HORIZON_DAAS: 'VMware Horizon DaaS',
    VMWARE_HORIZON_CLOUD: 'Horizon Cloud',
    VMWARE_HORIZON_UNIVERSAL_CONSOLE: 'Horizon Universal Console',
    VMWARE_CLOUD_ON_AWS_CAPACITY: 'VMware Cloud on AWS Capacity',
    VMWARE_CLOUD_ON_AWS_INFO:
        'Host desktops and applications on VMware Cloud on AWS ' +
        '(Powered by VMware SDDC). VMware Cloud',
    VMWARE_CLOUD_ON_AWS_INFO_MORE1: 'Host desktops and applications on VMware Cloud on AWS ' +
        '(Powered by VMware SDDC). VMware Cloud on AWS pods are either discovered and ' +
        'appear in the Horizon Universal Console',
    VMWARE_CLOUD_ON_AWS_INFO_MORE2:
        '(<a href=\'http://www.vmware.com/go/hcs-add-vmc-capacity-doc\' target=\'_blank\' rel=\'noopener\'>Learn more</a>) or can ' +
        'be added in the Horizon Universal Console. To add VMware Cloud on AWS pods, click Select.',
    VMWARE_CLOUD: 'VMware Cloud',
    HELPDESK_TITLE: 'Help Desk Tool',
    HELPDESK_DESCRIPTION: 'Click the Search icon at the top of the page and enter a ' +
        'username to view user session status and perform troubleshooting and ' +
        'maintenance in real time.',
    SESSION_FILTER: 'Session Filter',
    ACTIVITY_FILTER: 'Activity Filter',
    WRITABLE_VOLUME_FILTER: 'Writable Volume Filter',
    CUSTOMIZATION_FILTER: 'Customization Filter',
    APPLICATION_FILTER: 'Application Filter',
    ASSIGNMENT_FILTER: 'Assignment Filter',
    HELPDESK_COMPUTER_NAME: 'Computer Name',
    HELPDESK_PROTOCOL: 'Protocol',
    HELPDESK_CONNECTION_TIME: 'Connection Time',
    HELPDESK_WORKLOAD: 'Workload',
    HELPDESK_POD_TYPE: 'Pod Type',
    LOGGEDOFF: 'Logged Off',
    HELPDESK_SESSION_PROCESSES: 'Processes',
    HELPDESK_CLIENT: 'Client',
    CLIENT_WITH_COLON: 'Client:',
    HELPDESK_CLIENT_IP_NO_COLON: 'Client IP',
    HELPDESK_CLIENT_NAME_NO_COLON: 'Client Name',
    HELPDESK_CLIENT_OS_NO_COLON: 'Client OS',
    HELPDESK_CLIENT_VERSION_NO_COLON: 'Client Version',
    TX_BANDWIDTH_NO_COLON: 'TX Bandwidth',
    FRAME_RATE_NO_COLON: 'Frame Rate',
    PACKET_LOSS_NO_COLON: 'Packet Loss',
    AGENT_VERSION_NO_COLON: 'Agent Version',
    HELPDESK_VIEW_AGENT_VERSION_COLON: 'View Agent Version:',
    HELPDESK_DAAS_AGENT_VERSION_COLON: 'DaaS Agent Version:',
    HELPDESK_GET_CLIENT_INFO_FAILURE: 'An error occurred getting client info.',
    HELPDESK_GET_VM_INFO_FAILURE: 'An error occurred getting VM info.',
    HELPDESK_GET_SMART_NODE_INFO_FAILURE: 'An error occurred getting pod info.',
    HELPDESK_STATE_DURATION_NO_COLON: 'State Duration',
    HELPDESK_GET_STATE_INFO_FAILURE: 'An error occurred getting session state info.',
    HELPDESK_LOGON_TIME_COLON: 'Logon Time:',
    LOGON_TIME_NO_COLON: 'Logon Time',
    HELPDESK_LOGON_DURATION_COLON: 'Logon Duration:',
    HELPDESK_RETRIEVE_LEGACY_DATA: 'Retrieve Legacy Data',
    HELPDESK_RETRIEVE_LEGACY_DATA_INFO: 'Select to retrieve data for events generated prior to the last Connection Server update.',
    LOGON_DURATION_NO_COLON: 'Logon Duration',
    LOGOFF_TIME_NO_COLON: 'Logoff Time',
    HELPDESK_SESSION_DURATION_NO_COLON: 'Session Duration',
    GATEWAY_NAME_NO_COLON: 'Gateway Name',
    GATEWAY_ADDRESS_NO_COLON: 'Gateway Address',
    HELPDESK_GET_UNIFIED_ACCESS_GATEWAY_INFO_FAILURE:
        'An error occured getting Gateway info.',
    HELPDESK_OS_VERSION_NO_COLON: 'OS Version',
    HELPDESK_POOL_NO_COLON: 'Pool',
    SFB_STATUS_NO_COLON: 'Skype Status',
    HELPDESK_CONNECTION_SERVER_NO_COLON: 'Connection Server',
    S4B_STATUS_OPTIMIZED: 'Optimized',
    S4B_STATUS_FALLBACK: 'Fallback',
    S4B_STATUS_OPTIMIZED_VERSION_MISMATCH: 'Optimized (version-mismatch)',
    S4B_STATUS_FALLBACK_VERSION_MISMATCH: 'Fallback (version-mismatch)',
    S4B_STATUS_CONNECTING: 'Connecting',
    S4B_STATUS_DISCONNECTED: 'Disconnected',
    S4B_STATUS_UNDEFINED: 'Undefined',
    HELPDESK_PERFORMANCE_INVALID_AGENT_ERROR_MESSAGE:
        'Session detail not available, please update the agent version.',
    HELPDESK_SESSION_INFO_NOT_COMPLETE_ERROR_MESSAGE:
        'Some of session detail information are not available as agent version is not the ' +
        'latest. Please update the agent version.',
    HELPDESK_CLIENT_MISSING_HELP_INFO: 'Some of Client information are not available, ' +
        'because the session is disconnected or is not connected through BLAST or PCOIP.',
    HELPDESK_CLOSE_BLASE_METRICS: 'Less',
    HELPDESK_BLAST_METRICS: 'BLAST Metrics',
    HELPDESK_BLAST_SESSION_COUNTERS: 'BLAST Session Counters',
    HELPDESK_BLAST_IMAGING_COUNTERS: 'BLAST Imaging Counters',
    HELPDESK_BLAST_AUDIO_COUNTERS: 'BLAST Audio Counters',
    HELPDESK_BLAST_CDR_COUNTERS: 'BLAST CDR Counters',
    ESTIMATED_BANDWIDTH_UPLINK_NO_COLON: 'Estimated Bandwidth (Uplink)',
    PACKET_LOSS_UPLINK_NO_COLON: 'Packet Loss (Uplink)',
    TRANSMITTED_BYTES_NO_COLON: 'Transmitted Bytes',
    RECEIVED_BYTES_NO_COLON: 'Received Bytes',
    HELPDESK_GET_DISPLAY_PROTOCOL_PERFORMANCE_FAILURE:
        'An error occurred getting display protocol performance info.',
    UNIT_FPS: '{0} FPS',
    UNIT_KBPS: '{0} kbps',
    UNIT_MBPS: '{0} Mbps',
    UNIT_KBYTE: '{0} KB',
    UNIT_MBYTE: '{0} MB',
    UNIT_BYTE: '{0} B',
    UNIT_KILOBYTES_PER_SEC: '{0} KB/s',
    HELPDESK_SEND_MESSAGE: 'Send Message',
    HELPDESK_MACHINES_SEND_MESSAGE_SUCCESS: 'The message was sent to selected active session.',
    HELPDESK_MACHINES_SEND_MESSAGE_FAILURE:
        'Error occured while sending message to selected active session.',
    HELPDESK_DISCONNECT_SESSION_SUCCESS: 'The session was disconnected.',
    HELPDESK_DISCONNECT_SESSION_FAILURE: 'An error occurred during disconnect.',
    HELPDESK_DISCONNECT_SPECIFIC_SESSION_SUCCESS: 'The session on computer {0} was disconnected.',
    HELPDESK_DISCONNECT_SPECIFIC_SESSION_FAILURE: 'An error occurred during disconnecting the ' +
        'session on computer {0}.',
    HELPDESK_LOGOFF: 'Logoff',
    HELPDESK_LOGOFF_SESSION_SUCCESS: 'The session was logged off.',
    HELPDESK_LOGOFF_SESSION_FAILURE: 'An error occurred during logoff.',
    HELPDESK_LOGOFF_SPECIFIC_SESSION_SUCCESS: 'The session on computer {0} was logged off.',
    HELPDESK_LOGOFF_SPECIFIC_SESSION_FAILURE: 'An error occurred during logoff the session on ' +
        'computer {0}.',
    HELPDESK_REMOTE_ASSISTANCE: 'Remote Assistance',
    HELPDESK_REMOTE_ASSISTANCE_DESC:
        'A Remote Assistance Invitation file will be downloaded. ' +
        'Are you sure you want to continue?',
    HELPDESK_REMOTE_ASSISTANCE_SUCCESS:
        'A Remote Assistance Invitation file has been generated.',
    HELPDESK_REMOTE_ASSISTANCE_FAILURE:
        'An error occured during requesting Remote Assistance Invitation file.',
    HELPDESK_WS1_ASSIST: 'Workspace ONE Assist',
    HELPDESK_WS1_ASSIST_DESC: 'Do you want to connect to remote desktop with Workspace ONE Assist?',
    HELPDESK_WS1_ASSIST_SUCCESS: 'Successfully connected to remote desktop with Workspace ONE Assist.',
    HELPDESK_WS1_ASSIST_FAILURE: 'Failed to connect to remote desktop with Workspace ONE Assist.',
    HELPDESK_RESET_VM_SUCCESS: 'Reset request has been sent successfully.',
    HELPDESK_RESET_VM_FAILURE: 'An error occurred during reset.',
    HELPDESK_RESET_SPECIFIC_VM_SUCCESS: 'Reset request on the VM {0} has been sent successfully.',
    HELPDESK_RESET_SPECIFIC_VM_FAILURE: 'An error occurred during resetting the VM {0}.',
    HELPDESK_RESTART_VM_SUCCESS: 'Restart request has been sent successfully.',
    HELPDESK_RESTART_VM_FAILURE: 'An error occurred during restart.',
    HELPDESK_RESTART_SPECIFIC_VM_SUCCESS: 'Restart request on the VM {0} has been sent ' +
        'successfully.',
    HELPDESK_RESTART_SPECIFIC_VM_FAILURE: 'An error occurred during restarting the VM {0}.',
    HELPDESK_FEATURE_NOT_INSTALLED_WARNING: 'The Horizon Help Desk feature is not installed ' +
        'with this desktop agent.',
    HELPDESK_PERFORMANCE_DATA_OPTION_LABEL: 'Performance Data:',
    HELPDESK_PERFORMANCE_DATA_OPTION_HISTORICAL: 'Historical',
    AUTHENTICATION: 'Authentication',
    CPA: 'CPA',
    CLOUD_POD_ARCHITECTURE: 'Cloud Pod Architecture',
    VM_START: 'VM Start',
    PROTOCOL_CONNECTION: 'Protocol Connection',
    GPO_LOAD: 'GPO Load',
    LOGON_SCRIPT: 'Logon Script',
    PROFILE_LOAD: 'Profile Load',
    INTERACTIVE: 'Interactive',
    HELPDESK_SESSION_CPU: 'Session CPU',
    HELPDESK_HOST_CPU: 'Host CPU',
    HELPDESK_SESSION_MEMORY: 'Session Memory',
    HELPDESK_HOST_MEMORY: 'Host Memory',
    HELPDESK_PROCESSES_WITH_COLON: 'Processes:',
    HELPDESK_SESSION_LATENCY: 'Latency',
    HELPDESK_ESTIMATED_BANDWIDTH: 'Estimated Bandwidth',
    HELPDESK_DISK_IOPS: 'Disk IOPS',
    HELPDESK_DISK_WRITE: 'Write',
    HELPDESK_DISK_LATENCY: 'Disk Latency',
    HELPDESK_AVERAGE_READ_COLON: 'Average Read:',
    HELPDESK_AVERAGE_WRITE_COLON: 'Average Write:',
    HELPDESK_LOGON_SEGMENTS: 'Logon Segments',
    HELPDESK_CPU_USAGE: 'CPU Usage',
    HELPDESK_MEMORY_USAGE: 'Memory Usage',
    HELPDESK_PROTOCOL_LATENCY: 'Protocol Latency',
    HELPDESK_STORAGE_USAGE: 'Disk Performance',
    HELPDESK_MILLISECOND_UNIT: '{0} ms',
    HELPDESK_SECOND_UNIT: '{0} s',
    HELPDESK_MINUTE_UNIT: '{0} m',
    HELPDESK_IO_PER_SECOND_UNIT: '{0} IOPS',
    HELPDESK_AVERAGE_IOPS_COLON: 'Average IOPS:',
    HELPDESK_AVERAGE_LATENCY_COLON: 'Average Latency:',
    HELPDESK_SESSION_LOGON_TIME_COLON: 'Session Logon Time:',
    HELPDESK_DESKTOP_MANAGER_NO_COLON: 'Desktop Manager',
    HELPDESK_SMART_NODE_COLON: 'Pod:',
    HELPDESK_USER_EXPERIENCE_METRICS: 'User Experience Metrics',
    HELPDESK_GET_LOGON_TIMING_FAILURE: 'Error occurs while getting logon timing.',
    HELPDESK_SESSION_APPLICATION_NOT_AVAILABLE_FOR_UNSUPPORTED_AGENT:
        'Session application not available, please update the agent version.',
    HELPDESK_HOST_CPU_WITH_COLON: 'Host CPU:',
    HELPDESK_HOST_MEMORY_WITH_COLON: 'Host Memory:',
    RUNNING: 'Running',
    NOT_RESPONDING: 'Not Responding',
    HELPDESK_LOGON_SEGMENTS_HELP_INFO: 'Logon segments display breakdown of the logon time between client and server. ' +
        'In a re-connected session, only a subset of the segments will be displayed. If no data, verify VMLM is enabled for the agent.',
    HELPDESK_SESSION_PROCESS_NOT_AVAILABLE_FOR_UNSUPPORTED_AGENT:
        'Session process not available, please update the agent version.',
    HELPDESK_END_PROCESS: 'End Process',
    HELPDESK_END_APPLICATION: 'End Application',
    END_TASK: 'End Task',
    N_APPS: 'Apps ({0})',
    N_BACKGROUND_PROCESSES: 'Background processes ({0})',
    HELPDESK_PROCESS_HELP_INFO: 'CPU & Memory also include resource consumption of hidden processes.',
    HELPDESK_PROCESS_APPLICATION_FAILURE: 'An error occurred getting process info.',
    HELPDESK_END_APPLICATION_DIALOG_MSG: 'Do you want to end application {0}?',
    HELPDESK_END_APPLICATION_SUCCESS_MSG: 'Successfully ended application {0}.',
    HELPDESK_END_APPLICATION_FAILURE_MSG: 'Error occurred while end application {0}?',
    HELPDESK_END_PROCESS_DIALOG_MESSAGE: 'Do you want to end process {0}?',
    HELPDESK_END_PROCESS_FAILURE_MESSAGE: 'Error occurs while end process {0}.',
    HELPDESK_END_PROCESS_SUCCESS_MESSAGE: 'Successfully killed process {0}.',
    HELPDESK_END_TASK_DIALOG_MSG: 'Do you want to end task {0}?',
    HELPDESK_PROCESS_GRID_TITLE_PROCESS_NAME: 'Process Name',
    HELPDESK_PROCESS_GRID_TITLE_DISK: 'Disk',
    HELPDESK_DURATION_HOUR: '{0} Hour',
    HELPDESK_DURATION_HOURS: '{0} Hours',
    HELPDESK_DURATION_DAY: '{0} Day',
    HELPDESK_DURATION_DAYS: '{0} Days',
    HELPDESK_MESSAGE: 'Message',
    RESOURCE: 'Resource',
    HELPDESK_EVENT_ONLY: 'Help Desk Event Only',
    HELPDESK_FAILED_TO_GET_ACTIVITY_MSG: 'Failed to fetch activities for pod {0}',
    HELPDESK_FAILED_TO_LIST_NODE: 'Failed to list all pods',
    MONITORING_TOP_APPLICATIONS: 'Top Applications',
    MONITORING_APPLICATION_NAME: 'Application Name',
    MONITORING_MAJOR_VERSION: 'Major Version',
    MONITORING_TOTAL_USAGE_DURATION: 'Total Usage Duration',
    MONITORING_APP_USAGE_FILE: 'Top Application Usage',
    TOOLTIP_DATE: 'Date : {0}',
    APP_UTILIZATION: 'Application Utilization : {0}%',
    VDI_UTILIZATION: 'Desktop Utilization : {0}%',
    CAPACITY_UTILIZATION: 'Capacity Utilization : {0}%',
    PROTOCOL_PCOIP: 'PCoIP',
    PROTOCOL_BLAST: 'Blast Extreme',
    PROTOCOL_RDP: 'RDP',
    IDENTITY_MANAGEMENT_TENANT_INFO:
        'Optionally Add Details to configure your Workspace ONE Access Tenant.',
    WS_ONE_DETAILS_ADDED_SUCCESS: 'Details added successfully.',
    IDENTITY_MANAGEMENT_TENANT_INFO_WITH_BROKER_CONFIGURED: 'Since Broker is configured, Workspace ONE Access Tenant confguration can not be set',
    IDENTITY_MANAGER_TENANT_AVAILABILITY:
        '(Workspace ONE Access Tenant with name <strong>{0}</strong> already exists.)',
    IDENTITY_MANAGER_TENANT: 'Workspace ONE Access Tenant:',
    WS_ONE_ACCESS_TENANT: 'Workspace ONE Access Tenant',
    WS_ONE_ACCESS_CONFIG: 'Workspace ONE Access Configuration',
    IDM_DATA_CENTER_REGION: 'Data Center Region:',
    IDM_TENANT_NAME: 'Tenant Name:',
    IDM_TENANT_DATA_CENTER_HELP_TEXT:
        'Select the Data Center Region for the Workspace ONE Access Tenant.',
    IDM_TENANT_NAME_HELP_TEXT: 'Name of the VMware Workspace ONE Access tenant. ' +
        'Only alphanumeric characters are allowed and length should be less than 64 characters.',
    IDM_USERNAME_HELP_TEXT: 'Username to be used for the admin account for your tenant. ' +
        'Only alphanumeric characters are allowed and length should be less than 64 characters.',
    IDM_EMAIL_HELP_TEXT: 'Email address of the admin account user.',
    IDM_TENANT_NAME_EXISTS: 'Tenant name already exists.',
    USERNAME_EXISTS: 'Username already exists.',
    UNABLE_TO_VALIDATE: 'Unable to validate Tenant Name.',
    ALPHANUMERIC_ALLOWED_ONLY: 'Only Alphanumeric characters are allowed.',
    MODEL_COLON: 'Model:',
    DISK_TYPE_COLON: 'Disk Type:',
    DISK_SIZE_COLON: 'Disk Size:',
    GIGABYTES: 'Gigabytes',
    DISK_TYPE_HELP_TEXT: 'Select a supported disk type from the available options. Disk type options ' +
        'are based on the VM model selected, and the Azure subscription and region.',
    DISK_SIZE_HELP_TEXT: 'Enter the OS disk size in GiB for the VMs in this assignment. The size must be ' +
        'equal to or greater than the base image OS disk size, and cannot exceed the ' +
        'largest size (typically 1024 GiB) supported by the selected VM model.',
    DISK_SIZE_VALIDATION_MESSAGE: 'VM disk size must be greater than or equal to {0} GiB ' +
        '(base image OS disk size) and less than or equal to {1} GiB ' +
        '(largest size supported by the selected VM model).',
    DISK_SIZE_INFO_MESSAGE: 'Increasing the disk size might require guest OS operations on the resulting VMs. ' +
        'Details: <a href=\'https://docs.vmware.com/en/VMware-Horizon-Cloud-Service/services/context?id=hc_hydra_2_2_10\' ' +
        'target=\'_blank\' rel=\'noopener\'>Required Administrator Actions when Disk Size is Increased</a>',
    Standard_LRS: 'Standard HDD',
    Premium_LRS: 'Premium SSD',
    StandardSSD_LRS: 'Standard SSD',
    UltraSSD_LRS: 'Ultra SSD',
    REFRESH_REPLICA_IMAGES: 'Refreshing replica images for {0}',
    DELETE_REPLICA_IMAGES: 'Deleting replica images for {0}',
    REFRESHING_REPLICA_VMS: 'Refreshing Replica VM(s)',
    DELETING_REPLICA_VMS: 'Deleting Replica VM(s)',
    OPTIMIZE_WINDOWS_IMAGE: 'Optimize Windows Image:',
    REMOVE_WINDOWS_STORE_APPS: 'Remove Windows Store Apps:',
    OPTIMIZE_WINDOWS_IMAGE_HELP_TEXT: 'Select to optimize Windows on image import. ' +
        'This disables physical desktop features for more efficient VM performance and ' +
        'capacity utilization, and helps avoid Microsoft Windows Sysprep issues. Learn more at ' +
        '<a href=\'http://www.vmware.com/info?id=1488\' ' +
        'target=\'_blank\' rel=\'noopener\'>http://www.vmware.com/info?id=1488</a>.',
    REMOVE_WINDOWS_STORE_APPS_HELP_TEXT: 'Select to remove Windows Store apps, ' +
        'also known as AppX packages, and disable automatic app and Windows Store updates and ' +
        'downloads. This improves performance and helps avoid Microsoft Windows Sysprep issues. ' +
        'Learn more at <a href=\'http://www.vmware.com/info?id=1501\' ' +
        'target=\'_blank\' rel=\'noopener\'>http://www.vmware.com/info?id=1501</a>.',
    ENCRYPT_DISKS: 'Encrypt Disks:',
    ENCRYPT_DISKS_POOLS_HELP_TEXT: 'Select to encrypt disks for all desktops in this ' +
        'pool. After the pool is published, encryption cannot be changed.',
    ENCRYPT_DISKS_FARMS_HELP_TEXT: 'Select to encrypt disks for all servers in this ' +
        'farm. After the farm is published, encryption cannot be changed.',
    INVALID_NUMERIC_RANGE_ERROR: 'Value must be between {0} and {1}',
    POWER_OFF_PROTECT_TIME: 'Power Off Protect Time:',
    POWER_OFF_PROTECT_TIME_POOL_HELP_TEXT: 'Enter the number of minutes (from 1 to 60) a VM ' +
        'is protected from powering off after powering on due to a headroom error, or if a user ' +
        'logout, admin power on, or admin assignment occurs outside a schedule. The default is 30.',
    POWER_OFF_PROTECT_TIME_FARM_HELP_TEXT: 'Enter the number of minutes (from 1 to 60) a VM ' +
        'is protected from powering off after powering on due to a headroom error. ' +
        'The default is 30.',
    AGENT_NOT_PAIRED: 'Agent is not paired',
    AGENT_ERR_INACTIVE: 'Agent is inactive',
    AGENT_ERR_FAILURE: 'Agent error occurred',
    AGENT_ERR_DISABLED: 'Agent is disabled',
    AGENT_ERR_INVALID_IP: 'Invalid agent IP',
    AGENT_ERR_NEED_REBOOT: 'VM needs to be restarted',
    AGENT_ERR_PROTOCOL_FAILURE: 'Agent protocols are not ready to accept connections',
    AGENT_ERR_STARTUP_IN_PROGRESS: 'Agent startup in progress',
    AGENT_ERR_DOMAIN_FAILURE:
        'Agent domain information is not found or is not fully accessible',
    AGENT_ERR_UPDATING: 'Agent update in progress',
    AGENT_ERR_SVI_CUSTOMIZING: 'SVI customization is in progress or has failed',
    AGENT_ERR_DAAS_AGENT_FAILURE: 'Horizon Agent is not running',
    AGENT_ERR_UNKNOWN_VM_POWERING_ON_OFF: 'Retrieving agent status',
    AGENT_ERR_UNKNOWN: 'Unable to retrieve agent status',
    AGENT_TS_ROLE_MISMATCH: 'RDSH role is not installed properly',
    SERVER_DENSITY_REDUCTION_INFO: 'Decreasing sessions per server might temporarily cause ' +
        'total utilization to exceed 100% until current session users log off.',
    DOMAIN_IN_USE_CANNOT_BE_DELETED:
        'Domain - {0} is currently being used and cannot be deleted.',
    DOMAIN_UNABLE_TO_DELETE: 'Unable to delete Domain - {0}',
    DOMAIN_DELETED_SUCCESSFULLY: 'Domain deleted successfully',
    DELETE_DOMAIN_CONFIRMATION: 'Are you sure you want to delete domain ?',
    DELETE_DOMAIN_MORE_INFO: 'This will permanently delete the domain. Once deleted ' +
        'successfully, you will be logged out of the system.',
    POOL_ENCRYPT_VM_TASK: 'Encrypting desktop in assignment {0}',
    FARM_ENCRYPT_VM_TASK: 'Encrypting server {0} in farm {1}',
    SESSION_TYPE: 'Session Type:',
    SESSION_TYPE_NO_COLON: 'Session Type',
    VDI: 'VDI',
    MIGRATE_VM: 'Migrate VM(s)',
    MIGRATE_POOL_VMS_RENAME: 'Select to rename the VM(s) using the destination ' +
        'assignment\'s naming convention (assignment prefix + next available number in sequence).',
    MIGRATE_DESC_IMPORTED_VM_POOL: 'Migrate Selected VM(s) to a different desktop ' +
        'assignment. Selected VM(s) must be logged off and have the same domain, OU and graphics ' +
        'settings as the target assignment. Selected VM(s) should be domain joined and have the ' +
        'same CPU and Memory as that of target assignment. View migration progress and status ' +
        'in Monitor > Activity.',
    MIGRATION_VM_INVALID_REQUEST_ACTIVE_SESSIONS: '{0} - sessions are still active',
    MIGRATION_VM_TASK_ALREADY_EXISTS: '{0} - tasks are still in progress',
    MIGRATION_VM_NO_SUFFICIENT_CAPACITY_DESKTOP_MODEL:
        'Destination assignment has insufficient capacity',
    MIGRATION_VM_INSUFFICIENT_COMPUTE_CAPACITY:
        'Destination assignment has insufficient vCPU or memory',
    MIGRATION_VM_INCOMPATIBLE_DOMAIN: 'Source domain and Destination domain do not match',
    MIGRATION_VM_INCOMPATIBLE_OU: 'Source OU and Destination OU do not match',
    MIGRATION_VM_MAX_VM_COUNT: 'Destination assignment has reached the maximum VM count',
    MIGRATION_VM_INCOMPATIBLE_GRAPHICS_SETTINGS:
        'Source and Destination desktop manager graphics settings do not match',
    MIGRATION_VM_INVALID_CPU_AND_MEMORY:
        '{0} - must have the same CPU and memory as destination assignment',
    MIGRATION_VM_NOT_IN_DOMAIN: '{0} - not in the domain',
    MIGRATE_POOL_VM_TASK: 'Migrating desktop {0} to designated pool',
    MIGRATE_POOL_VM_CLONE_TASK: 'Cloning desktop {0} to designated pool',
    RENAME_VM_COLON: 'Rename VM:',
    MIGRATION_SEARCH_POOL_HELP: 'Select the destination assignment name',
    MIGRATION_ERROR_HEADER: 'Could not migrate VM(s)',
    MIGRATION_PARTIAL_ERROR_HEADER: 'Following VM(s) were not migrated',
    MIGRATION_IN_PROGRESS: 'Migration In Progress',
    GETTING_STARTED_IMPORT_VM_DESC_LOCKED: 'At least one image is required. This image will ' +
        'be used as the OS on your virtual desktops. Depending on the mode of your deployment, ' +
        'you can import an OS image and convert it into an image.',
    PAGER_MSG_DISPLAY: '{0} - {1} of {2} items',
    PAGER_MSG_EMPTY: 'No items to display',
    PAGER_MSG_FIRST: 'Go to the first page',
    PAGER_MSG_LAST: 'Go to the last page',
    PAGER_MSG_NEXT: 'Go to the next page',
    PAGER_MSG_PREVIOUS: 'Go to the previous page',
    PAGER_MSG_MORE_PAGES: 'More pages',
    PAGER_MSG_ITEMS_PER_PAGE: 'items per page',
    'BUTTONS.CANCEL': 'Cancel',
    'BUTTONS.OK': 'Ok',
    PROCEED_MIGRATING_OTHERS: 'Proceed',
    MIGRATION_VMS_SUCCESS_DESC_WITHOUT_PROCEED:
        'VM(s) could not be migrated for the following reasons.',
    MIGRATION_VMS_SUCCESS_DESC_WITH_PROCEED: '{0} out of {1} VM(s) could not be migrated ' +
        'for the following reasons. You can still proceed with migration for {2}',
    OUTBOUND_PROXY_OPTIONS: 'Outbound Proxy Options',
    OUTBOUND_PROXY_OPTIONS_HELP_TEXT: 'The outbound proxy configuration is displayed. ' +
        'Click Edit to change your outbound proxy.',
    OUTBOUND_PROXY_OPTIONS_CONFIG_HELP_TEXT: 'Configure the outbound proxy.',
    AGENT_UPDATES: 'Agent Updates',
    FAILURE_THRESHOLD_COLON: 'Failure Threshold:',
    AGENT_UPDATES_HELPTEXT: 'Define the default failure threshold for all assignments.',
    PROXY_VALIDATION_URL: 'Proxy Validation URL:',
    PROXY_VALIDATION_STATUS: 'Proxy Status:',
    PROXY_VALIDATION_URL_HELP_TEXT: 'Enter a test URL to validate the outbound proxy. ' +
        'The default is https://www.vmware.com.',
    VALIDATED: 'Validated',
    VALIDATE_PROXY_FAILURE: 'Unable to validate proxy',
    VALIDATING: 'Validating',
    TEST_PROXY_CONNECTION: 'Test Proxy Connection',
    RECTIFY: 'Rectify',
    POST_RELOCATION_CUSTOMIZATION_FAILED: 'Post-relocation customization failed',
    VM_RECTIFICATION_SUCCESS: 'Rectification initiated successfully for selected VM(s)',
    VM_RECTIFICATION_ERROR:
        'An error occurred while initiating the rectification for selected VM(s)',
    NSX_CLOUD_MANAGED_COLON: 'NSX Cloud Managed:',
    NSX_CLOUD_MANAGED_POOLS_HELP_TEXT:
        'Select to support NSX Cloud networking and security management for this assignment.',
    NSX_CLOUD_MANAGED_FARMS_HELP_TEXT:
        'Select to support NSX Cloud networking and security management for this farm.',
    MIGRATE_RELOCATE_POOL_VM: 'Request to relocate virtual machine {0}',
    MIGRATE_POST_RELOCATE_CUSTOMIZATION:
        'Request to perform post-relocation customization on virtual machine {0}',
    VMWARE_CLOUD_AUTH: 'VMware Cloud Authorization',
    HLCM_VMC_HORIZON_BACKEND_NETWORK_COLON: 'Horizon Backend Network:',
    HLCM_VMC_HORIZON_BACKEND_NETWORK: 'Horizon Backend Network',
    APP_VOLUMES: 'App Volumes',
    HLCM_VMC_DEPLOY_TITLE: 'Add VMware Cloud on AWS Capacity',
    HLCM_VMC_REFRESH_TOKEN: 'VMware Cloud OAuth Refresh Token:',
    HLCM_VMC_HOW_TO_OBTAIN_TOKEN: 'How to obtain this token',
    ORGANIZATION_COLON: 'Organization:',
    CIDR_COLON: 'CIDR:',
    SDDC_COLON: 'SDDC:',
    NETWORK_NAME_COLON: 'Network Name:',
    SUBNET_COLON: 'Subnet:',
    EXT_SUBNET_COLON: 'External Subnet:',
    INT_SUBNET_COLON: 'Internal Subnet:',
    HLCM_VMC_VCENTER: 'vCenter:',
    HLCM_VMC_H7CS_INFO: 'Horizon Connection Server Information',
    HLCM_VMC_CS_NAME_PATTERN: 'Connection Server Name Pattern:',
    IP_RANGE_COLON: 'IP Range:',
    HLCM_VMC_CS_IP_RANGE: 'Connection Server IP Range:',
    UAG_INFO: 'Gateway Information',
    HLCM_VMC_DMZ_EXT_NETWORK: 'DMZ External Network',
    HLCM_VMC_DMZ_EXT_NETWORK_COLON: 'External Network:',
    HLCM_VMC_EXT_IP_ADDRESS_RANGE: 'External Network  IP Range:',
    HLCM_VMC_DMZ_INT_NETWORK_COLON: 'Internal Network:',
    HLCM_VMC_DMZ_INT_NETWORK: 'DMZ Internal Network',
    HLCM_VMC_INT_IP_ADDRESS_RANGE: 'Internal Network IP Range:',
    ADMIN_PASSWORD: 'Administrator Password:',
    ADMIN_PASSWORD_CONFIRM: 'Confirm Administrator Password:',
    HLCM_VMC_CERT: 'Certificate:',
    HLCM_VMC_CS_CERT: 'Certificate for Connection Server {0}:',
    HLCM_VMC_UAG_CERT: 'Gateway Certificate:',
    HLCM_VMC_APPV_MGR_INFO: 'App Volumes Manager Information',
    HLCM_VMC_APPV_MGR_IP_RANGE: 'App Volumes Manager IP Range:',
    HLCM_VMC_SQL_USERNAME: 'SQL Username:',
    HLCM_VMC_SQL_PASSWORD: 'SQL Password:',
    HLCM_VMC_SQL_PASSWORD_CONFIRM: 'Confirm SQL Password:',
    HLCM_VMC_HC_CONNECTOR: 'Horizon Cloud Connector',
    VM_NAME_COLON: 'VM Name:',
    CLOUD_CONNECTOR_NAME_COLON: 'Cloud Connector Name:',
    HLCM_VMC_IP_ADDRESS_FOR_VM: 'IP Address for VM:',
    HLCM_VMC_AD_INFO: 'Active Directory Information',
    HLCM_VMC_DEPLOY_AD: 'Deploy AD and DNS Server:',
    HLCM_VMC_DOMAIN_NAME: 'Domain Name:',
    ADMINISTRATOR_USERNAME: 'Administrator Username:',
    HLCM_VMC_DNS_SERVER_IPS: 'DNS Server IPs:',
    HLCM_VMC_WIN_TMP: 'Windows Template / OVA',
    HLCM_VMC_WIN_SVR_TMP: 'Windows Server Template:',
    HLCM_VMC_UAG_NAME_PATTERN: 'Gateway Name Pattern:',
    SQL_SERVER_COLON: 'SQL Server:',
    SQL_SERVER: 'SQL Server',
    HLCM_VMC_MANUAL_DEPLOYER_DEPLOY: '2. Import the OVA file to the vCenter server, on the ' +
        'Horizon backend network.',
    HLCM_VMC_COPY_KEY_INDICATOR: 'When asked for the Activation Key, copy and use the key.',
    HLCM_VMC_KEY_COPIED_MSG: 'Activation key copied',
    HLCM_VMC_KEY_COPY_FAIL_MSG: 'Activation key copy failed.',
    VALIDATION: 'Validation',
    RE_VALIDATION: 'Re-validate',
    HLCM_VMC_ENV_VALIDATED: '{0} Validated:',
    HLCM_VMC_VALIDATION_FAILED: 'Validation Failed.',
    HLCM_VMC_MANUAL_DEPLOYER_OCUPIED: '3. Manual Deployer is working.',
    HLCM_VMC_VALIDATING_MSG: 'Validating VMC Information',
    INTERNET: 'Internet',
    ESXI: 'ESXi',
    HLCM_VMC_CREATE_NEW_BACKEND_NETWORK: 'Create New Backend Network',
    CREATE_BACKEND_NETWORK_SUCCESSFULLY: 'Create new Horizon backend network successfully.',
    HLCM_VMC_NETWORK_ALREADY_CREATED: 'Horizon Backend Network already created:',
    HLCM_VMC_VALIDATION_FAILED_MSG: 'VMware Cloud on AWS Validation failed.',
    HLCM_VMC_VALIDATION_AWS_LINK: 'Go to AWS https://console.aws.amazon.com/support/cases#/create to increase your AWS limit.',
    HLCM_VMC_AUTH_METHOD: 'Authentication Method:',
    HLCM_VMC_WIN_INT_AUTH: 'Windows Integrated Authentication',
    HLCM_VMC_SQL_CATALOG_NAME: 'Name of SQL Database:',
    HLCM_VMC_SQL_OVERWRITE_EXISTING_DB: 'Overwrite Existing Database (If Any):',
    HLCM_CREATE_NEW_NETWORK_LABEL: '--Create New Network--',
    HLCM_VMC_UPLOAD_CERT_ERR_MSG: 'Upload Certificate Error',
    HLCM_VMC_UPLOAD_SUCCESSFUL_MSG: 'Upload Certificate Successful',
    HLCM_VMC_WINDOWS_INT_AUTH: 'Windows Integrated Authentication',
    HLCM_VMC_SQL_AUTH: 'Server Authentication',
    HLCM_VMC_DEPLOY_ERROR_MSG: 'Error starting vmc deployment',
    HLCM_VMC_POD_NAME_COLON: 'Pod Name:',
    HLCM_VMC_HORIZON_ADMIN_GROUP_COLON: 'Horizon Administrator Group:',
    CREATE_LOCATION_FAIL_MSG: 'Error occurs when creating location',
    HLCM_VMC_POD_SETUP: 'Pod Setup',
    HLCM_VMC_CLOUD_CONNECTOR_IP_ADDRESS: 'Cloud Connector IP Address:',
    HLCM_VMC_APPV_MGR_NAME_PATTERN: 'App Volumes Manager Name Pattern:',
    HLCM_VMC_HELP_REFRESH_TOKEN:
        'Enter your VMware Cloud OAuth Key located in your VMware Cloud Console.',
    HLCM_VMC_HELP_ORGANIZATION: 'Select the Organization that corresponds to the group or ' +
        'line of business subscribed to VMware Cloud on AWS services.',
    HLCM_VMC_HELP_SDDC:
        'Select the Software-Defined Data Center (SDDC) associated with your Organization.',
    HLCM_VMC_HELP_VC:
        'The vCenter IP that is associated with your  Software-Defined Data Center (SDDC).',
    HLCM_VMC_HELP_POD_NAME: 'Enter a friendly name identifying this Pod from your other Pods.',
    HLCM_VMC_HELP_LOCATION: 'Select an existing location or select Add to specify a new ' +
        'one. Pods are grouped by location according to the names you provide.',
    HLCM_VMC_HELP_VM_NAME_PATTERN_H7: 'Enter a friendly naming pattern for the Horizon ' +
        'Connection Server VMs. This can be up to 13 characters as the VMs will be appended with ' +
        'a unique number. Example, Horizon-CS.',
    HLCM_VMC_HELP_UAG_NAME_PATTERN: 'Enter a friendly naming pattern for the Gateway VMs. This ' +
        'can be up to 13 characters as the VMs will be appended a unique number. ' +
        'Example, Horizon-UAG.',
    HLCM_VMC_HELP_HORIZON_BACKEND_NETWORK: 'Create a new VMware Cloud Logical Network or ' +
        'select an existing network to deploy the Horizon environment on.',
    HLCM_VMC_HELP_HORIZON_BACKEND_NETWORK_CS: 'The network that the Horizon Connection ' +
        'Server will be connected to.',
    HLCM_VMC_HELP_HORIZON_BACKEND_NETWORK_CLOUD_CONNECTOR:
        'The network that the Horizon Cloud Connector will be connected to.',
    HLCM_VMC_HELP_HORIZON_BACKEND_NETWORK_APPV:
        'The network that the App Volumes Manager will be connected to.',
    HLCM_VMC_HELP_NEW_NETWORK_NAME: 'Enter the name of the VMware Cloud Logical Network to ' +
        'create on the Software-Defined Data Center (SDDC).',
    HLCM_VMC_HELP_NEW_NETWORK_SUBNET: 'Specify the Gateway IP/Prefix length of the ' +
        'Horizon Backend Network. eg: 10.101.10.1/24.',
    HLCM_VMC_HELP_POD_DESCRIPTION: 'Provide a description to help you remember the details ' +
        'for this Pod. Optional.',
    HLCM_VMC_HELP_CS_IP_RANGE: 'Enter the IP Address Range that will be used for the Horizon ' +
        'Connection Server VMs. The IP Address Range is from the Horizon Cloud Backend Network.',
    HLCM_VMC_HELP_CS_ADMIN_GROUP: 'Enter the Active Directory Group that will be granted ' +
        'access to the Horizon Administrator Console.',
    HLCM_VMC_HELP_APPV_MGR_IP_ADDRESS: 'Enter the IP Address Range that will be used ' +
        'for the App Volumes Manager VMs. The IP Address Range is from the Horizon Cloud ' +
        'Backend Network.',
    HLCM_VMC_HELP_AUTH_METHOD: 'Enter the Authentication Method that will be used to ' +
        'connect to the SQL Server.',
    HLCM_VMC_HELP_SQL_DB_NAME:
        'Enter the name of the SQL Database for the App Volumes Manager.',
    HLCM_VMC_HELP_SQL_OVERWRITE_EXISTING_DB:
        'Select to overwrite the existing App Volumes database.',
    HLCM_VMC_HELP_DMZ_NET: 'Create a new VMware Cloud Logical Network or select an ' +
        'existing network to deploy the gateway.',
    HLCM_VMC_HELP_DMZ_EXT_SUBNET: 'Specify the Gateway IP/Prefix length of the ' +
        'DMZ External Network. eg: 172.16.10.1/24.',
    HLCM_VMC_HELP_DMZ_INT_SUBNET: 'Specify the Gateway IP/Prefix length of the ' +
        'DMZ Internal Network. eg: 172.26.10.1/24.',
    HLCM_VMC_HELP_EXT_IP_RANGE: 'Enter the IP Address Range that will be used for the gateway ' +
        'VMs. The IP Address Range is from the DMZ External Network.',
    HLCM_VMC_HELP_INT_IP_RANGE: 'Enter the IP Address Range that will be used for the gateway ' +
        'VMs. The IP Address Range is from the DMZ Internal Network.',
    HLCM_VMC_HELP_CS_CERT: 'Upload the certificate in a .pfx format for the Horizon ' +
        'Connection Server that will be used to allow clients to trust connections to the ' +
        'Horizon Connection Server.',
    HLCM_VMC_HELP_UAG_ADMIN_PASSWORD: 'Enter the Administrator Password for the gateway.',
    HLCM_VMC_HELP_UAG_CERT: 'Upload the certificate in a .pfx format for the gateway that will ' +
        'be used to allow clients to trust connections to the gateway.',
    HLCM_VMC_HELP_CERT_UPLOAD: 'Select a certificate file to upload',
    HLCM_VMC_HELP_VM_NAME_PATTERN_APPV: 'Enter a friendly naming pattern for the App ' +
        'Volumes Manager VMs. This can be up to 13 characters as the VMs will be appended a ' +
        'unique number. Example, Horizon-AVM.',
    HLCM_VMC_HELP_SQL_FQDN:
        'Enter the SQL Server FQDN that will be used by App Volumes Manager.',
    HLCM_VMC_HELP_SQL_USERNAME:
        'Enter the username for the SQL Authentication for the SQL Server.',
    HLCM_VMC_HELP_SQL_PASSWORD:
        'Enter the password for the SQL Authentication for the SQL Server.',
    HLCM_VMC_HELP_HC_CONNECTOR: 'Enter a friendly naming pattern for the Horizon Cloud ' +
        'Connector VMs. This can be up to 13 characters as the VMs will be appended a unique ' +
        'number. Example, Horizon-CC.',
    HLCM_VMC_HELP_HC_IP_FOR_CONNECTOR_VM:
        'Enter the IP Address for the Horizon Cloud Connector.',
    HLCM_VMC_HELP_HC_DEPLOY_AD_SWITCH: 'Whether to Deploy a New AD and DNS Server',
    HLCM_VMC_HELP_DOMAIN_ADMIN_USERNAME: 'Enter the domain administrator username that has ' +
        'permissions to join computers to Active Directory.',
    HLCM_VMC_HELP_DOMAIN_ADMIN_PASSWORD: 'Enter your domain administrator password. ' +
        'This account should be able to join computers to the Active Directory domain and ' +
        'the password should be set to never expire.',
    HLCM_VMC_HELP_DNS_SERVER_IPS: 'To reach the specified Active Directory Domain, ' +
        'specify the DNS Server IPs.',
    HLCM_VMC_HELP_WIN_SVR_TEMPLATE: 'The Windows Server Template that will be used for ' +
        'the Horizon Infrastructure.',
    HLCM_VMC_HOW_TO_OBTAIN_REFRESH_TOKEN: 'How to obtatin Refresh Token',
    HLCM_VMC_LOGIN_FAILURE_MSG: 'OAuth Refresh Token failed to validate. Please ' +
        'regenerate the token and try again.',
    HLCM_VMC_LOGIN_TOKEN_INVALID_MSG: 'OAuth Refresh Token failed to validate. Please ' +
    'regenerate the token with correct roles and try again.',
    HLCM_VMC_LOAD_ORG_FAILURE_MSG: 'Organization failed to load. Please check the ' +
        'OAuth Refresh Token and try again.',
    HLCM_VMC_LIST_SDDC_FAILURE_MSG: 'SDDC failed to load. Make sure your Organization ' +
        'contains a valid SDDC and try again.',
    HLCM_VMC_QUERY_EXIST_POD_FAILURE_MSG: 'Error occurs while querying existing pods. ',
    HLCM_VMC_POD_DEPLOYMENT_PROCESSING_MSG: 'There are ongoing deployment on this region, please change to another region or retry later.',
    HLCM_VMC_VALIDATE_VCENTER_FAILURE_MSG: 'Failed to access vCenter. Please make sure ' +
        'your vCenter can be accessed from the Internet.',
    HLCM_VMC_VALIDATE_NSXT_FAILURE_MSG:
        'The VMware NSX version for this SDDC is not supported.',
    HLCM_VMC_GET_RESOURCE_CFG_FAILURE_MSG: 'Failed to get Resource Config from SDDC',
    HLCM_VMC_GET_HORIZON_BACKEND_NET_FAIL_MSG: 'Failed to get Horizon backend network',
    HLCM_VMC_SDDC_VALIDATE_SUCCESS_MSG: 'SDDC Information Validated',
    HLCM_VMC_HELP_SQL_PASSWORD_CONFIRM: 'Confirm SQL password',
    HLCM_VMC_HELP_DOMAIN_NAME: 'Enter the fully quailified Active Directory domain name.',
    HLCM_VMC_START_DEPLOY_ERROR: 'Error happens when starting deploying VMC on AWS',
    HLCM_VMC_HELP_WIN_USERNAME:
        'Enter the username for the Windows Integrated Authentication to access the SQL Server.',
    HLCM_VMC_HELP_WIN_PASSWORD:
        'Enter the password for the Windows Integrated Authentication to access the SQL Server.',
    HLCM_VMC_VALIDATE_UAG_PASSWORD_FAIL_MSG: 'Passwords must be 8 to 32 characters long, ' +
        'contain at least one uppercase and one lowercase letter, one digit, and one special ' +
        'character, which includes ! @ # $ % * ( ).',
    HLCM_VMC_VALIDATE_AD_PASSWORD_FAIL_MSG: 'Passwords must be at least 8 characters long, ' +
        'contain at least three of the following: one uppercase and one lowercase ' +
        'letter, one digit, and one special character.',
    HLCM_VMC_VALIDATE_IP_RANGE_FAIL: 'IPs or IP ranges seperated by ",". eg. 192.168.0.10 or 192.168.0.10-192.168.0.20 or 192.168.0.10, 192.168.0.12-192.168.0.20',
    HLCM_VMC_GET_REFRESH_TOKEN_URL: 'http://www.vmware.com/info?id=1498',
    SLOW_NETWORK_DETECTED: 'Slow network detected.',
    HLCM_VMC_VALIDATE_IP_RANGE_NOT_IN_SCOPE_MSG:
        'IP range contains IPs do not belong to the specific subnet.',
    HLCM_VMC_NOT_QUALIFIED_WIN_DOMAIN_USERNAME_FORMAT_MSG: 'User name should be Windows ' +
        'domain username format. eg. domain.local\\user or user@domain.local.',
    HLCM_VMC_NOT_QUALIFIED_SQL_USERNAME: 'User name does not match SQL username format.',
    HLCM_VMC_DUPLICATE_NETWORK_SELECTION:
        'Network is in use. Choose another network to proceed.',
    HLCM_VMC_NAME_VALIDATION_MSG: 'Only uppercase, lowercase, digits and [-] are allowed.',
    HLCM_VMC_VM_PATTERN_INVALID: 'VM name must contain only letters [a-Z], dashes [-], ' +
        'and numbers. It cannot start with non-alphabetic characters. It can contain no longer ' +
        'than 12 characters',
    HLCM_VMC_VALID_HOST_REQUIRED: 'Valid fully qualified hostname or IP address is required.',
    INVALID_CIDR_FORMAT: 'Invalid CIDR format.',
    HLCM_VMC_DUPLICATE_VM_NAME: 'VM name or name pattern duplicate with other VMs.',
    HLCM_VMC_DUPLICATE_DNS_IPADDRESS: 'Duplicate DNS IP address is not allowed.',
    HLCM_VMC_UPLOAD_CERT_PASSWORD: 'Enter the password for the uploaded certificate.',
    HLCM_VMC_REFRESH_TOKEN_FORMAT_INVALID: 'Refresh token format is not correct.',
    HLCM_VMC_DUPLICATE_WITH_EXISTING_NETWORK_NAME:
        'New network name duplicated with existing networks.',
    HLCM_VMC_SQL_DB_NAME_VALIDATION_MSG:
        'SQL server database name cannot be longer than 128 characters.',
    HLCM_VMC_VALIDATE_SDDC_CAPACITY_FAILURE_MSG:
        'Selected SDDC does not have enough available capacity.',
    HLCM_VMC_CS_HAS_INSUFFICIENT_IPS:
        'Connection Server requires at least 3 IPs in IP range.',
    HLCM_VMC_SUBNET_OVERLAP_MSG: 'Subnet duplicates with existing subnets.',
    HLCM_VMC_AD_BINDING_WARNING_MSG: 'The domain that has been configured for the Horizon ' +
        '7 Connection Server does not match any domains currently configured for the Horizon ' +
        'Cloud Service. Without matching domains, the service will not be fully functional. ' +
        'Please update and review the domains you are configuring for the ' +
        'VMware SDDC Connection Server.',
    HLCM_DESC_LENGTH_INVALID_MSG: 'Description allows only ASCII characters and can not be more than 200 characters long.',
    HLCM_VMC_POD_NAME_VALIDATION_MSG: 'Only uppercase, lowercase, digits and [-] are ' +
        'allowed. Pod name cannot can not be more than 100 characters long.',
    HLCM_VMC_VC_USER_NAME_HELP: 'VMware Cloud vCenter username',
    HLCM_VMC_VC_PASSWORD_HELP: 'VMware Cloud vCenter password',
    HLCM_VMC_USE_CUSTOM_VC_CREDENTIAL: 'Have you changed the default vCenter Credentials?',
    HLCM_VMC_HELP_USE_CUSTOM_VC_CREDENTIAL: 'If set to yes, custom vCenter credential ' +
        'will be used for deployment.',
    HLCM_ADD_POD_INFO_MSG: 'The pod must be placed into Managed state before assignments can be added to it.',
    HLCM_VMC_CLOUD_CONFIG_DESC: 'Please provide the required credentials to create Amazon and VMware Cloud on AWS ' +
        'components along with configuring Regional Settings.',
    HLCM_VMC_SEGMENT_OPTION_DISPLAY: '{0}  ({1})',
    HLCM_EC2_SDDC_DETAILS: 'Software-Defined Data Center',
    HLCM_EC2_VMC_NEW_POD: 'New Pod - VMware Cloud on AWS',
    HLCM_EC2_VMC_API_TOKEN: 'VMware Cloud on AWS API Token:',
    H7_INFRASTRUCTURE: 'VMware SDDC Components',
    AWS_ACCESS_KEY_ID: 'AWS Access Key ID:',
    CREATE_ASSIGNMENT: 'Assignment created successfully',
    POD_DEPLOYMENT: 'Pod saved successfully.',
    AWS_SECRET_ACCESS_KEY: 'AWS Secret Access Key:',
    AWS_KEY_PAIR: 'AWS Key Pair:',
    AWS_REGION: 'AWS Region:',
    HLCM_EC2_POD_SETUP_DESC: 'Enter information to configure and connect the pod.',
    HLCM_EC2_AWS_AZ: 'AWS Availability Zone {0} (AZ):',
    HLCM_EC2_NUM_OF_SESSIONS: 'Number of Sessions:',
    HLCM_EC2_USE_EXISTING_VPC: 'Use Existing AWS Virtual Private Cloud (VPC):',
    HLCM_EC2_HORIZON_SUBNET: 'Horizon Subnet (CIDR):',
    VPC: 'VPC:',
    HLCM_EC2_HORIZON_MGMT_SUBNET: 'Horizon Management Subnet (CIDR):',
    HLCM_EC2_HORIZON_PUBLIC_SUBNET: 'Horizon Public Subnet (CIDR):',
    HLCM_EC2_AWS_MGMT_SUBNET: 'AWS Management Subnet in Availability Zone {0}:',
    HLCM_EC2_AWS_PUBLIC_SUBNET: 'AWS Public Subnet in Availability Zone {0}:',
    HLCM_EC2_CREATE_AWS_DS: 'Create new Active Directory using AWS Directory Service',
    HLCM_EC2_REUSE_AD: 'Reuse Existing Active Directory',
    HLCM_EC2_NETBIOS_NAME: 'NetBIOS Name:',
    HLCM_EC2_DNS_IP_ADDRESSES: 'DNS IP Addresses:',
    HLCM_EC2_HORIZON_COMPUTER_OU: 'Horizon Infrastructure Computer OU:',
    HLCM_EC2_AD_SERVICE_UERNAME: 'Service Username:',
    HLCM_EC2_AD_SERVICE_PASSWORD: 'Service Password:',
    HLCM_EC2_SQL_MASTER_USERNAME: 'Master Username:',
    HLCM_EC2_SQL_MASTER_PASSWORD: 'Master Password:',
    HLCM_EC2_AWS_RDS_SQL: ' AWS RDS SQL',
    HLCM_EC2_MS_SQL_SERVER: 'MS SQL Server',
    HLCM_EC2_CREATE_AWS_RDS: 'Create AWS RDS SQL Server',
    HLCM_EC2_REUSE_SQL: 'Reuse Existing SQL Server',
    HLCM_EC2_EXISTING_SQL_SERVER_TYPE: 'Existing SQL Server Type:',
    HLCM_EC2_FQDN_OR_IP: 'FQDN / IP:',
    PORT_NUMBER_COLON: 'Port Number:',
    AUTH_METHOD_COLON: 'Auth Method:',
    SQL_AUTHENTICATION: 'SQL Authentication',
    HLCM_EC2_AWS_DB_INSTANCE_NAME: 'AWS DB Instance Name:',
    HLCM_EC2_H7_INFRA_DESC: 'Enter your VMware SDDC Infrastructure Information. This will be used to build the Pod.',
    HLCM_EC2_CS_NAME_PATTERN: 'Server Name Pattern:',
    HLCM_EC2_CS_ADMIN_GROUP: 'Administrator Group:',
    HLCM_EC2_CS_EVENTS_DB_NAME: 'Events Database Name Pattern:',
    HLCM_EC2_CERTIFICATE: 'Certificate of Load Balancer:',
    CLOUD_CONNECTOR: 'Cloud Connector',
    HLCM_EC2_CC_NAME_PATTERN: 'Cloud Connector Name Pattern:',
    APPLIENCE_PASSWORD: 'Appliance Password:',
    CFM_APPLIENCE_PASSWORD: 'Confirm Appliance Password:',
    DEPLOY_AVM: 'Deploy App Volumes:',
    HLCM_EC2_AVM_DB_NAME: 'App Volumes Database Name Pattern:',
    HLCM_EC2_GATEWAY_DESC: 'Set up External Unified Access Gateways for this Pod.',
    HLCM_EC2_DEPLOY_UAG: 'Deploy Gateway:',
    NAME_PATTERN: 'Name Pattern:',
    ADMIN_PASSWORD_COLON: 'Admin Password:',
    HLCM_EC2_NEW_SDDC_DESC: 'An SDDC is created in VMware Cloud on AWS.',
    HLCM_EC2_NEW_SDDC_DETAILS: 'VMware Cloud on AWS SDDC Details',
    SDDC_NAME_COLON: 'SDDC Name:',
    HLCM_EC2_SDDC_MGMT_NETWORK_CIDR: 'SDDC Management Network CIDR:',
    HLCM_EC2_NUMBER_OF_HOSTS: 'Number of Hosts:',
    HLCM_EC2_RDS_SERVER_ADDRESS: 'Server Address:',
    HLCM_EC2_PAIRTING_SUBSCRIPTION: 'Pairing Subscription',
    HLCM_EC2_PAIRING_DESC_INFO: 'We will take you to the next step upon successful completion.',
    HLCM_EC2_PAIRING_DESC_TIME: 'This can take up to one minute.',
    HLCM_EC2_PAIRING_DESC_TIP: 'Please be patient.',
    HLCM_EC2_NOT_VMC_SUPPORTED_AZ: 'VMC currently unavailable',
    HLCM_EC2_NOT_USABLE_AZ: 'Not usable AZ',
    HLCM_EC2_RECOMMENDED: 'Recommended',
    HLCM_EC2_SUBSCRIPTION_PAIRING_ERROR_MSG: 'Subscription pairing error. Please try again in a few minutes. If the issue persists, please contact VMware support.',
    HLCM_EC2_SUMMARY_DESC: 'Confirm configuration settings before submitting.',
    HLCM_EC2_SDDC_NETWORK_INSTRUCTION1: 'Specify a private subnet range (RFC 1918) to be used for vCenter Server, NSX Manager, and ESXi hosts.',
    HLCM_EC2_SDDC_NETWORK_INSTRUCTION2: 'Choose a range that will not conflict with other networks you will connect to this SDDC.',
    HLCM_EC2_SDDC_NETWORK_INSTRUCTION3: 'Minimum CIDR sizes: /23 for up to 27 hosts, /20 for up to 251 hosts, /16 for up to 4091 hosts.',
    HLCM_EC2_SDDC_NETWORK_INSTRUCTION4: 'Reserved CIDRs: 172.17.0.0/16, 10.0.0.0/15, 172.31.0.0/16.',
    HLCM_EC2_SDDC_NETWORK_CIDR_INVALID_WARNING: ' This is not a valid CIDR range for the Management Subnet. Please specify a private subnet range (RFC 1918) of size /23. /20, or /16.',
    HLCM_EC2_SDDC_NETWORK_CIDR_RESERVED_WARNING: '172.17.0.0/16, 10.0.0.0/15 and 172.31.0.0/16 are reserved CIDR ranges. Please specify a different CIDR that does not conflict with the reserved CIDRs.',
    LOG: 'Log',
    HLCM_EC2_GET_LOG_ERROR: 'Get Log file error',
    SUBSCRIPTION_INFO: 'Subscription Information',
    HLCM_EC2_NUM_OF_SESSIONS_INVALID_FORMAT: 'Number of Sessions only accept numbers 1-10000',
    HLCM_EC2_INVALID_HORIZON_SUBNET_MSG: 'Subnet must be in CIDR format and only /20 is allowed.',
    HLCM_EC2_NON_PRIVATE_CIDR: 'The CIDR must be an IPv4 private network range.',
    HLCM_EC2_SUBNET_NOT_IN_VPC_CIDR: 'This subnet should be in selected VPC CIDR scope',
    HLCM_EC2_HELP_AZ: 'Select an AWS Availability Zone (AZ) for the VMware SDDC pod. The AZ must be supported by VMware Cloud on AWS.',
    HLCM_EC2_HELP_AZ_NON_FIRST_POD: 'AWS Availability Zone for deployment',
    HLCM_EC2_INVALID_AZ_MSG: 'VMware Cloud on AWS is not currently available on the selected AZ.',
    HLCM_EC2_AZ_DUPLICATE_MSG: 'The second Availability Zone must be different from the first Availability Zone.',
    HLCM_EC2_INVALID_MGMT_SUBNET_FORMAT: 'Enter a subnet in CIDR format for the VMware SDDC pod. Only /22 is allowed',
    HLCM_EC2_INVALID_PUBLIC_SUBNET_FORMAT: 'Enter a subnet in CIDR format for the VMware SDDC pod. Only /24 is allowed',
    HLCM_EC2_INVALID_SUBNET_MSG: 'VMware Cloud on AWS is not currently available on the AZ of the selected subnet.',
    HLCM_EC2_AZ_OVERLAP: 'This [management/public] subnet must be in a different availability zone than the other [management/public] subnet.',
    HLCM_EC2_AZ_DEVIDE_ERROR_MSG: 'The AWS public subnet must be in the same Availability Zone as the AWS management subnet.',
    HLCM_EC2_DUPLICATE_SUBNET: 'CIDR Address overlaps with existing Subnet CIDR',
    HLCM_EC2_VM_PATTERN_INVALID: 'Name cannot exceed 7 characters. It must start with a letter [a-Z] and contain only letters [a-Z], dashes [-], and numbers.',
    NETBIOS_INVALID: 'The NetBIOS name format is invalid.',
    HLCM_EC2_AD_USER_NAME_INVALID: 'Active Directory user name is invalid. User name should not contain " / \\ [ ] : ; | = , + * ? < >, with no more than 104 characters long.',
    HLCM_EC2_AD_OU_INVALID_FORMAT: 'Active Directory OU format is invalid.',
    HLCM_EC2_HELP_FQDN_OR_IP_NOT_VALID: 'FQDN or IP is invalid.',
    HLCM_EC2_NOT_VALID_DB_USER_NAME: 'SQL Server username is invalid.',
    HLCM_EC2_EVENT_DB_INVALID_FORMAT: 'The name can contain only ASCII characters and cannot exceed 100 characters.',
    HLCM_EC2_AVM_INVALID_DB_NAME: 'The name can contain only ASCII characters and cannot exceed 100 characters.',
    HLCM_EC2_INVALID_DNS_ADDRESS: 'Invalid DNS Address',
    HLCM_EC2_INVALID_SDDC_NAME: 'SDDC name cannot exceed 128 characters.',
    HLCM_EC2_DEPLOY_LB: 'Deploy Load Balancer',
    HLCM_EC2_FOR_CS_LB: 'Certificate for Connection Server load balancer',
    HLCM_EC2_SQL_PASSWORD_INVALID: 'Passwords must be 8 to 32 characters, ' +
        'contain at least 1 uppercase and 1 lowercase letter, 1 number or 1 special ' +
        'character, except \'/\', \'@\', \'"\', and space.',
    HLCM_EC2_AD_PASSWORD_INVALID: 'Passwords must be 8 to 32 characters long, ' +
        'contain at least one uppercase and one lowercase letter, one digit or one special character',
    HLCM_EC2_NOT_ENOUGH_HOSTS: 'There are not enough hosts for creating new SDDC. This may cause deployment failure.',
    HLCM_EC2_NO_ROUTE_TABLE_ASSOCIATED: 'No route table associated with this AWS public subnet.',
    HLCM_EC2_AWS_CRED_INVALID: 'AWS access key ID or AWS Secret access key is incorrect.',
    HLCM_EC2_SUBNET_OVERLAP_MSG: 'Subnet duplicates with existing subnets.',
    HLCM_EC2_TARGET_NETWORKS: 'Target Networks:',
    LARGE: 'Large',
    SMALL: 'Small',
    HLCM_EC2_PROD_HOST_CTX: '3 hosts by default and cannot be changed.',
    SERVICE_ACCOUNT_INFO: 'Service Account Information',
    HLCM_EC2_ERROR_LIST_AWS_CERTIFICATES: 'Error happens when listing AWS certificates',
    HLCM_EC2_REGIONAL_SETTINGS_DESC: 'Specify regional gateway settings. This is shared by all pods in the region.',
    HLCM_EC2_REGIONAL_SETINGS: 'Regional Settings',
    HLCM_EC2_EXT_ACCESS: 'External Access',
    HLCM_EC2_ENABLE_EXT_ACCESS: 'Enable External Access',
    HLCM_EC2_LOAD_BALANCER_FQDN: 'Load Balancer FQDN:',
    HLCM_EC2_LOAD_BALANCER_CERTIFICATE: 'Load Balancer Certificate:',
    HLCM_EC2_INT_ACCESS: 'Internal Access',
    HLCM_EC2_INVALID_FQDN_FORMAT: 'FQDN format is invalid.',
    HLCM_EC2_CERT_TYPE: 'Certificate Type:',
    HLCM_EC2_CERT_TYPE_WILD_CARD: 'Wildcard',
    HLCM_EC2_CERT_TYPE_PER_UAG: 'Per Gateway',
    HLCM_EC2_CERT_TYPE_SELF_SIGNED: 'Self-signed',
    HLCM_EC2_UAG_CERT: 'Certificate for Gateway {0}:',
    HLCM_EC2_UAG_FQDN: 'FQDN for Gateway {0}:',
    HLCM_EC2_UAG_LABEL: 'Gateway {0}:',
    HLCM_EC2_CERT_NAME_LABEL: 'Certificate Name {0}',
    HLCM_EC2_CERT_CN_NOT_MATCH_FQDN: 'FQDN should match the certificate Common Name.',
    HLCM_EC2_DUPLICATE_UAG_CERT_FQDN: 'Each Gateway must have a unique FQDN.',
    HLCM_EC2_UNIQUE_FQDN_PER_UAG: 'Unique FQDNs Per Gateway',
    HLCM_EC2_PER_UAG_CERT_SECTION: 'Certificate/FQDN Pairs',
    HLCM_EC2_HELP_VMC_REFRESH_TOKEN: 'Enter the VMware Cloud API token from the VMware Cloud Console.',
    HLCM_EC2_HELP_REGION: 'Select the VMware Cloud on AWS region to deploy the VMware SDDC pod.',
    HLCM_EC2_HELP_POD_NAME: 'The pod name needs to start with a letter [a-Z] and contain only letters [a-Z], dashes [-], and numbers. It cannot exceed 100 characters.',
    HLCM_EC2_HELP_LOCATION: 'Select or enter the geographic location of the pod (city, state/province, country).',
    HLCM_EC2_HELP_NUM_OF_SESSIONS: 'Enter the total number of sessions to support with this pod. This will also size the underlying infrastructure.',
    HCLM_EC2_HELP_USE_EXISTING_VPC: 'Select to use an existing VPC to deploy the VMware SDDC pod.',
    HLCM_EC2_HELP_HORIZON_SUBNET: 'Enter a subnet in CIDR format for the VMware SDDC pod. Only /20 is allowed.',
    HLCM_EC2_HELP_AWS_VPC: 'AWS VPC where all deployed subnets locate.',
    HLCM_EC2_HELP_HZN_MGMT_SUBNET: 'Enter a subnet in CIDR format for the VMware SDDC pod. Only /22 is allowed.',
    HLCM_EC2_HELP_HZN_PUBLIC_SUBNET: 'Enter a subnet in CIDR format for the Unified Access Gateway DMZ. Only /24 is allowed',
    HLCM_EC2_HELP_AWS_MGMT_SUBNET1: 'Select an existing subnet for the shared management infrastructure. The subnet must be supported by VMware Cloud on AWS.',
    HLCM_EC2_HELP_AWS_MGMT_SUBNET2: 'Select an existing subnet for the shared management infrastructure. The subnet must be in a different availability zone than the AWS management subnet in AZ 1 and be supported by VMware Cloud on AWS.',
    HLCM_EC2_HELP_AWS_PUBLIC_SUBNET1: 'Select an existing subnet for the AWS DMZ. The subnet must be in the same availability zone as the AWS management subnet in AZ 1 and be supported by VMware Cloud on AWS.',
    HLCM_EC2_HELP_AWS_PUBLIC_SUBNET2: 'Select an existing subnet for the AWS DMZ. The subnet must be in the same availability zone as the AWS management subnet in AZ 2 and be supported by VMware Cloud on AWS.',
    HLCM_EC2_HELP_DNS_DOMAIN_NAME_CREATE: 'Enter the fully qualified Active Directory domain name for the AWS Directory Service.',
    HLCM_EC2_HELP_DNS_DOMAIN_NAME_REUSE: 'Enter the fully qualified Active Directory domain name.',
    HLCM_EC2_HELP_DNS_DOMAIN_NAME_READ_ONLY: 'The fully qualified Active Directory domain name.',
    HLCM_EC2_HELP_NETBIOS_NAME_CREATE: 'Enter the Active Directory domain name for the AWS Directory Service. Maximum of 15 characters, can\'t contain the following characters: `\\ / : * ? " < > |`. It must not start with `.`.',
    HLCM_EC2_HELP_NETBIOS_NAME_REUSE: 'Enter the Active Directory domain name.',
    HLCM_EC2_HELP_DNS_IP_ADDRESS: 'Enter the DNS IP addresses. Separate with a comma',
    HLCM_EC2_DNS_IP_ADDRESS_NOT_VALID: 'Not valid DNS IP Address format',
    HLCM_EC2_HELP_AD_USER_NAME_CREATE: 'Only \"Admin\" is allowed.',
    HLCM_EC2_HELP_AD_USER_NAME_REUSE: 'Enter the Active Directory user account to use for the VMware SDDC pod. The account must be able to join computers to the Active Directory domain.',
    HLCM_EC2_HELP_AD_OU: 'Enter the AD Organizational Unit for the VMware SDDC pod using the distinguished name (OU=My Organization,DC=MyDomain,etc.) The OU and each path in a nested OU can contain any combination of letters, numbers, special characters, and spaces, and can have a maximum of 64 characters.',
    HLCM_EC2_HLCM_SQL_TYPE: 'Select the SQL Server type to use with the VMware SDDC pod.',
    HLCM_EC2_HELP_SQL_FQDN_OR_IP: 'Enter the FQDN or IP address of the SQL Server.',
    HLCM_EC2_HELP_SQL_PORT_NUM: 'Enter the port number of the SQL Server.',
    HLCM_EC2_HELP_SQL_AUTH_METHOD: 'SQL Server is the only supported authentication method.',
    HLCM_EC2_HELP_INSTANCE_NAME: 'Select an existing AWS database instance name.',
    HLCM_EC2_HELP_AWS_RDS_SERVER_ADDRESS: 'The server address associated with the existing AWS database instance.',
    HLCM_EC2_HELP_DB_USERNAME_RDS_CREATE: 'Enter a username for the AWS RDS SQL Server. The name can contain letters [a-Z], and numbers. The name must start with a letter. The name can contain 1-25 characters.',
    HLCM_EC2_HELP_DB_USERNAME_RDS_REUSE: 'Enter the SQL username for connecting to the SQL server. The name can contain letters [a-Z], dashes [-], and numbers, but cannot be only numbers.',
    HLCM_EC2_HELP_DB_USERNAME_MSSQL_REUSE: 'Enter the SQL username for connecting to the SQL server.',
    HLCM_EC2_HELP_DB_SIZE: 'Size of the Database. \nSmall – 50 GB (Sufficient for 5K users for 3 months of data). \nMedium – 200 GB (Sufficient for 20K users for 3 months of data). \nLarge – 500 GB (Sufficient for 50K users for 3 months of data).',
    HLCM_EC2_HELP_CS_CERT: 'Select Certificate for Connection Server',
    HLCM_EC2_HELP_EVENTS_DB_NAME_CREATE: 'Enter the name pattern (100 characters maximum) of the events database to create on the SQL Server.',
    HLCM_EC2_HELP_EVENTS_DB_NAME_REUSE: 'Enter the name pattern (100 characters maximum) of the events database to use on the SQL Server. A new database will be created if one does not exist.',
    HLCM_EC2_HELP_CC_APPLIANCE_PASSWORD: 'Enter the Horizon Cloud Connector appliance password. '+
    'The password should not contain long monotonic character sequences and must be 8 to 32 characters long, ' +
    'contain at least one uppercase and one lowercase letter, one digit, and one special ' +
    'character, which includes ! @ # $ % * ( ).',
    HLCM_EC2_HELP_DEPLOY_AVM: 'Select to deploy VMware App Volumes.',
    HLCM_EC2_HELP_DEPLOY_UAG: 'Select to deploy Unified Access Gateway.',
    HLCM_EC2_HELP_UAG_FQDN: 'Enter the FQDN that will be used on the Unified Access Gateway to connect to the VMware SDDC pod.',
    HLCM_EC2_HELP_SDDC_NAME: 'Enter the SDDC name (128 characters maximum) for VMware SDDC desktops and apps.',
    HLCM_EC2_HELP_SDDC_MGMT_NETWORK_CIDR: 'Enter the SDDC Management Network CIDR. Minimum /23 for up to 27 hosts, /20 for up to 251 hosts, /16 for up to 4091 hosts.',
    HLCM_EC2_HELP_NUM_OF_HOSTS: 'Select the number of hosts in the SDDC.',
    HLCM_EC2_HELP_AVM_DB_NAME_CREATE: 'Enter the name pattern of the App Volumes database to create on the SQL Server (100 characters maximum).',
    HLCM_EC2_HELP_AVM_DB_NAME_REUSE: 'Enter the name pattern of the App Volumes database (100 characters maximum) to use on the SQL Server. The database will be created if not exists.',
    HLCM_EC2_SIZING_DATA_ERROR_MSG: 'Get sizing data error',
    HLCM_EC2_EIP: 'Elastic IP Limits',
    HLCM_EC2_INSTANCE: 'EC2 Instance Limits',
    HLCM_AWS_USER_PERMISSION: 'AWS User Permissions',
    HLCM_EC2_STACK: 'CloudFormation Stack Limits',
    HLCM_EC2_HELP_SQL_PASSWORD: 'The password can contain 8 to 32 printable ASCII characters, except / " @ and space.',
    HLCM_EC2_HELP_LB_CERT: 'Select the certificate to use for the load balancer.',
    HLCM_EC2_HELP_LB_CERT_AVM: 'Select the certificate to use for the load balancer.',
    HLCM_EC2_HELP_DEPLOY_LB: 'Select to deploy the internal load balancer for the connection server.',
    HLCM_EC2_HELP_DEPLOY_LB_AVM: 'Select to deploy the internal load balancer for the App Volumes.',
    HLCM_EC2_VALIDATION_EIP_LIMITS_FAIL: 'Need {0} Elastic IP, Available {1}, please update your AWS limits and try again.',
    HLCM_EC2_VALIDATION_EC2_INSTANCE_LIMITS_FAIL: 'Need {0} EC2 instances, Available {1}, please update your AWS limits and try again.',
    HLCM_EC2_VALIDATION_STACK_LIMITS_FAIL: 'Need {0} CloudFormation Stack, Available {1}, please update your AWS limits and try again.',
    HLCM_EC2_VALIDATION_USER_PERMISSION_LIMITS_FAIL: 'Insufficient AWS user permissions, please update your AWS permissions and try again.',
    HLCM_EC2_HELP_VM_NAME_PATTERN_H7: 'Enter a naming pattern for the servers in this pod. The name cannot exceed 7 characters and must start with a letter [a-Z] and contain only letters [a-Z], dashes [-], and numbers. The name will be appended with a unique number for each server (server1, server2, etc.).',
    HLCM_EC2_HELP_CS_ADMIN_GROUP: 'Enter the Active Directory group that will receive access to the Horizon Administrator Console.',
    HLCM_EC2_HELP_HC_CONNECTOR: 'Enter a naming pattern for the Cloud Connector. The name cannot exceed 7 characters and must start with a letter [a-Z] and contain only letters [a-Z], dashes [-], and numbers. The name will be appended with a unique number for each Cloud Connector (CC1, CC2, etc.).',
    HLCM_EC2_ADMIN_GROUP_INVALID_MSG: 'Name can contain 1 to 63 printable ASCII characters. Name cannot consist solely of numbers, periods (.), or spaces. Name cannot contain any of the following characters: # , + " \\ < > ;',
    HLCM_EC2_HELP_UAG_NAME_PATTERN: 'Enter a naming pattern for the Unified Access Gateway VMs. The name cannot exceed 7 characters and must start with a letter [a-Z] and contain only letters [a-Z], dashes [-], and numbers. The name will be appended with a unique number for each Gateway (Gateway1, Gateway2, etc.).',
    HLCM_EC2_HELP_UAG_CERT: 'Upload the certificate in .pfx format for the Unified Access Gateway that will allow clients to trust connections.',
    HLCM_EC2_HELP_EXT_LB_FQDN: 'Enter the FQDN of the load balancer for external access.',
    HLCM_EC2_HELP_EXT_CERT: 'Select the certificate of the load balancer for external access.',
    HLCM_EC2_HELP_INT_LB_FQDN: 'Enter the FQDN of the load balancer for internal access.',
    HLCM_EC2_HELP_INT_CERT: 'Select the certificate of the load balancer for internal access.',
    HLCM_EC2_HELP_CERT_TYPE: 'Select the type of gateway certificate to upload.',
    HLCM_EC2_CERT_UPLOAD_ERROR: 'An error occurred when uploading the certificate.',
    HLCM_EC2_CERT_DATE_NOT_VALID: 'Certificate expired.',
    HLCM_EC2_CERT_PASSWORD_NOT_VALID: 'Certificate password is not correct.',
    HLCM_EC2_VALIDATION_DUPLICATE_CREDENTIAL_ERROR: 'Duplicate Subscription.',
    US_EAST_1: 'US East (N. Virginia)',
    US_WEST_2: 'US West (Oregon)',
    EU_WEST_2: 'EU (London)',
    EU_CENTRAL_1: 'EU Central (Frankfurt)',
    AP_SOUTHEAST_2: 'Asia Pacific (Sydney)',
    AP_NORTHEAST_1: 'Asia Pacific (Tokyo)',
    EU_WEST_1: 'EU (Ireland)',
    US_WEST_1: 'US West (N. California)',
    AP_SOUTH_1: 'Asia Pacific (Mumbai)',
    AP_SOUTHEAST_1: 'Asia Pacific (Singapore)',
    EU_WEST_3: 'EU (Paris)',
    CA_CENTRAL_1: 'Canada (Central)',
    AP_NORTHEAST_2: 'Asia Pacific (Seoul)',
    SA_EAST_1: 'South America (São Paulo)',
    BUNDLE_VERSION: 'Bundle Version',
    HLCM_EC2_GREEN_EXISTING_AD_MSG: 'Cannot create new VPC, when there are domains configured for the Horizon Cloud Service.',
    HLCM_EC2_CPA: 'Cloud Pod Architecture',
    HLCM_EC2_CPA_INITIALIZE: 'Initialize Cloud Pod Architecture',
    HLCM_EC2_CPA_JOIN_EXISTING: 'Join an existing pod federation',
    HLCM_EC2_CPA_NAME: 'Federation Name:',
    HLCM_EC2_CPA_NAME_INVALID: 'Federation name must be 1 to 64 characters.',
    HLCM_EC2_CPA_NAME_HELP: 'Enter a name for this pod federation. The name can contain 1 to 64 characters. ',
    HLCM_EC2_CS_HOSTNAME: 'Connection Server Hostname/IP:',
    HLCM_EC2_CS_HOSTNAME_HELP: 'Enter the hostname or IP address of any Horizon Connection Server instance in any federation that has been initialized or is already joined to the federation.',
    HLCM_EC2_CS_HOSTNAME_INVALID: 'Connection Server FQDN or IP address is invalid.',
    HLCM_EC2_CPA_USERNAME: 'User name (username@domain):',
    HLCM_EC2_USERNAME_DOMAIN_INVALID: 'Username must be in the format username@domain.',
    HLCM_EC2_DOMAIN_INVALID: 'Domain is invalid',
    HLCM_EC2_USERNAME_INVALID: 'Username is invalid. Username cannot contain " / \\ [ ] : ; | = , + * ? < > and cannot exceed 104 characters.',
    HLCM_EC2_CREDENTIALS_INVALID: 'The username or password is incorrect.',
    HLCM_EC2_USERNAME_HELP: 'Enter the Horizon administrator username for the initialized federation in the format username@domain.',
    HLCM_EC2_PASSWORD_HELP: 'Enter the Horizon administrator password.',
    HLCM_EC2_JOIN_EXTERNAL_CPA_MSG: 'Only Use Existing VPC is allowed when joining an existing pod federation',
    HLCM_EC2_VPC_DHCP_OPTIONS_WARNING: 'The DHCP options of this VPC is not using the same domain with pod federation, this will cause joining pod federation failure.',
    HLCM_EC2_CPA_QUERY_ERR: 'Unable to retrieve existing pod federation information. Please try again.',
    HLCM_EC2_POD_IN_CPA_MESSAGE: 'Pod {0} is already in a federation. Pod {1} will be added to the existing federation. Enter the Connection Server username and password for {2}.',
    HLCM_VMC_HELP_UAG_CERT_UPLOAD: 'Select the certificate that the Unified Access Gateway will use to allow clients to trust connections to the gateway in VMware Cloud on AWS.',
    HLCM_VMC_HELP_UAG_CERT_FQDN: 'Enter the fully qualified domain name (FQDN), such as myApps.example.com, that your end users will use to access the service. You must own the domain and have a certificate that can validate it.',
    HLCM_VMC_EC2_LOADING_CREDENTIAL_ERROR: 'Error happens querying credentials from service',
    HLCM_VMC_EC2_DUPLICATE_SUBSCRIPTION_NAME: 'The input subscription name duplicates with existing subscription names.',
    HLCM_VMC_EC2_INVALID_SUBSCRIPTION_NAME_PATTERN: 'Subscription name can only be 1 to 64 characters and accepts only letters [a-Z] numbers and dashes [-].',
    HLCM_VMC_EC2_SUBSCRIPTION_INVALID: 'This subscription is not valid.',
    EXISTING: 'Existing',
    VC_USERNAME_COLON: 'vCenter Username:',
    VC_PASSWORD_COLON: 'vCenter Password:',
    VC_CONFIRM_PASSWORD_COLON: 'Confirm vCenter Password:',
    DASHBOARD_NODE_RETRIEVE_FAILURE: 'Not able to fetch pod information.',
    ISSUE: 'Issue',
    DASHBOARD_SESSIONS: 'Sessions (VDI & RDSH)',
    DASHBOARD_SESSION: 'Session (VDI & RDSH)',
    PODS: 'Pods',
    SITES: 'Sites',
    SITE_NAME_ALREADY_EXIST:
        'This site name is already in use. Please choose another name.',
    SYSTEM_ISSUES: 'System Issues',
    TYPE_OF_POD: 'Type of Pod',
    WARN: 'Warn',
    HEALTH_INFO_RETRIEVE_FAILURE: 'Not able to fetch health information.',
    CMS_HEALTH_INFO_RETRIEVE_FAILURE: 'Not able to fetch infrastructure health information.',
    DASHBOARD_MAP_RETRIEVE_FAILURE: 'Failed to refresh pod location and health information.',
    DASHBOARD_MAP_ISSUES_TITLE: 'Global Footprint - Health',
    DASHBOARD_MAP_SESSION_TITLE: 'Global Footprint - Sessions',
    DASHBOARD_MAP_HEALTHY_LEGEND: 'Healthy deployment location',
    DASHBOARD_MAP_UNHEALTHY_LEGEND: 'Unhealthy deployment location',
    DASHBOARD_FILTER_TITLE: 'Show Pods',
    NUMBER_OF_SESSIONS: 'Number of Sessions',
    UNHEALTHY_DEPLOYMENT: 'Unhealthy Deployment',
    HEALTHY_DEPLOYMENT: 'Healthy Deployment',
    POOL_FARM_NAME: 'Pool/Farm Name',
    DASHBOARD_OPTIONS_TITLE: 'Show',
    LOCATIONS: 'Locations',
    DASHBOARD_POD_COUNT: '{0} Pods',
    DASHBOARD_ONE_POD_COUNT: '{0} Pod',
    DASHBOARD_N_APPLICATIONS: '{0} Applications',
    DASHBOARD_N_APPLICATION: '{0} Application',
    DASHBOARD_MAP_UNKNOWN_LOCATION: 'Cannot find location for the pod(s)',
    ON_PREM: 'VMware SDDC',
    VMC_POD_TYPE: 'Horizon VMC',
    AZURE: 'Microsoft Azure',
    DASHBOARD_LOCATION_RETRIEVE_FAILURE: 'Not able to fetch location information for pods.',
    DASHBOARD_LOCATION_RETRIEVE_PARTIAL_FAILURE:
        'Not able to fetch location for some of pods.',
    DASHBOARD_SESSION_RETRIEVE_FAILURE_POD_OFFLINE: 'Not able to fetch sessions for pod {0} ' +
        'because pod is offline.',
    DASHBOARD_SESSION_TREND_RETRIEVE_FAILURE: 'Not able to fetch session utilization for '+
        'location {0}.',
    DASHBOARD_SESSION_TREND_RETRIEVE_COMMON_FAILURE: 'Not able to fetch session utilization.',
    DASHBOARD_SESSION_RETRIEVE_COMMON_FAILURE: 'Not able to fetch sessions for pod {0}.',
    DASHOBARD_HISTORICAL_SESSION_RETRIEVE_COMMON_FAILURE: 'Not able to fetch historical session list.',
    DASHBOARD_USER_RETRIEVE_COMMON_FAILURE: 'Not able to fetch user information for user {0}.',
    MAX_CONNECTED: 'Max. Connected',
    CAPACITY_REMAINING: 'Capacity Remaining',
    VIEW: 'View',
    VIEW_DETAILS: 'View Details',
    VIEW_STATUS: 'View Status',
    VIEW_ERRORS: 'View Errors',
    VIEW_ALL: 'View All',
    ALL_PODS: 'All Pods',
    DASHBOARD_CAPACITY_TOOLTIP_DESKTOP: 'Desktop',
    DASHBOARD_CAPACITY_TOOLTIP_DISK: 'Disk',
    DASHBOARD_UTILIZATION_DESKTOP: '{0}% Desktop',
    DASHBOARD_UTILIZATION_APPLICATION: '{0}% Application',
    DASHBOARD_CAPACITY_CPU_PERCENTAGE: '{0}% CPU',
    DASHBOARD_CAPACITY_MEMORY_PERCENTAGE: '{0}% Memory',
    DASHBOARD_CAPACITY_DISK_PERCENTAGE: '{0}% Disk',
    CAPACITY_ALLOCATED: 'Capacity (Allocated)',
    DASHBOARD_REMAIN_CAPACITY: 'Remaining capacity',
    DASHBOARD_CAPACITY_RETRIEVE_FAILURE:
        'Not able to fetch capacity and utilization information.',
    DASHBOARD_CAPACITY_INFO_FOR_HORIZON: 'Measured as average CPU, memory & storage usage ' +
        'from vCenter(s) hosting connected Horizon pods.',
    DASHBOARD_CAPACITY_INFO_FOR_AUZRE: 'Desktop (%) measured is number of connected to ' +
        'allocated desktops across Azure pods, and Capacity (%) is allocated desktop.',
    DASHBOARD_SESSION_AXIS_TITLE: 'No. of Sessions',
    VM_HOSTED_APPS: 'VM Hosted Apps',
    DASHBOARD_SESSION_VDI: 'VDI Desktops',
    DASHBOARD_SESSION_RDSH_DESKTOP: 'RDSH Desktops',
    DASHBOARD_SESSION_RDSH_APP: 'RDSH Applications',
    DASHBOARD_SESSION_RETRIEVE_FAILURE:
        'Not able to fetch session and connection statistics information.',
    NUMBER: 'Number',
    DASHBOARD_CONNECTION_STATISTICS_TITLE: 'Connection Statistics',
    ANDROID: 'Android',
    IOS: 'IOS',
    HORIZON_DOMAIN_API_ERROR: 'The domain status could not be fetched.',
    HORIZON_VCENTER_API_ERROR: 'The Virtual Center status could not be fetched.',
    HORIZON_COMPOSER_API_ERROR: 'The View Composer could not be fetched.',
    HORIZON_CS_API_ERROR: 'The connection server status could not be fetched.',
    HORIZON_EVENT_DB_API_ERROR: 'The Event DB status could not be fetched.',
    HORIZON_FARM_API_ERROR: 'The farm status could not be fetched.',
    HORIZON_POD_API_ERROR: 'The pod status could not be fetched.',
    HORIZON_SAML_API_ERROR: 'The Saml Authentication status could not be fetched.',
    HORIZON_SECURITY_SERVER_API_ERROR: 'The security server status could not be fetched.',
    HORIZON_CERT_SSO_API_ERROR: 'The certificate status for SSO could not be fetched.',
    HORIZON_VIEWADAPTER_API_ERROR: 'The status of Cloud Connector could not be fetched.',
    HORIZON_LICENSE_API_ERROR: 'The status of Horizon Subscription Service could not be fetched.',
    HORIZON_DOMAIN_STATUS_WARN: 'Domain {0} for connection server {1} status warning. ' +
        'Limited trust relationship detected. Some features will not be available.',
    HORIZON_DOMAIN_STATUS_ERROR: 'Domain {0} for connection server {1} status error ' +
        'detected. Domain can not be contacted.',
    HORIZON_DOMAIN_STATUS_UNKNOWN: 'Unable to determine status of domain {0} for ' +
        'connection server {1}.',
    HORIZON_DOMAIN_CONTACT_UNCANCTABLE: 'No domain controllers appear to be present on the ' +
        'network for domain {0} for connection server {1}.',
    HORIZON_DOMAIN_CONTACT_CANNOTBIND: 'Cannot bind to the domain controller for domain {0} ' +
        'for connection server {1}.',
    HORIZON_DOMAIN_CONTACT_UNKNOWN: 'Cannot determine accessibility for domain {0} for ' +
        'connection server {1}.',
    HORIZON_DOMAIN_TRUST_UNKNOWN: 'The trust relationship could not be determined fro ' +
        'domain {0} for connection server {1}.',
    HORIZON_VCENTER_STATUS_DOWN:
        'The connection from connection server {0} to Virtual Center server {1} was down.',
    HORIZON_VCENTER_STATUS_RECONNECTING: 'The connection from connection server {0} to ' +
        'Virtual Center server {1} was lost and is being reconnected to.',
    HORIZON_VCENTER_STATUS_UNKNOWN: 'Connection state from connection server {0} to ' +
        'Virtual Center server {1} is unknown.',
    HORIZON_VCENTER_STATUS_INVALIDCREDENTIALS: 'The supplied credentials from connection ' +
        'server {0} cannot be used to authenticate to the Virtual Center server {1}.',
    HORIZON_VCENTER_STATUS_CANNOTLOGIN: 'The connection server {0} cannot login to the ' +
        'Virtual Center server {1}.',
    HORIZON_VCENTER_STATUS_NOT_YET_CONNECTED: 'Connection server {0} has not yet connect ' +
        'to Virtual Center server {1}.',
    HORIZON_VCENTER_HOST_DISCONNECTED:
        'The host {0} is disconnected from Virtual Center server {1}.',
    HORIZON_VCENTER_HOST_NOT_RESPONDING:
        'The host {0} for Virtual Center Server {1} is not responding.',
    HORIZON_VCENTER_DATASTORE_NOT_ACCESSIBLE: 'The datastore {0} with path {1} for Virtual ' +
        'Center Server {2} is not accessible.',
    HORIZON_COMPOSER_STATUS_MALFORMED_URL: 'The connection from connection server {0} to ' +
        'View Composer server {1} was not possible due to a mal-formed url.',
    HORIZON_COMPOSER_STATUS_ERROR: 'Error occurred when connecting  from connection server ' +
        '{0} to View Composer server {1}.',
    HORIZON_COMPOSER_STATUS_CERT_ERROR: 'Connection from connection server {0} to View ' +
        'Composer server {1} encountered certificate validation error.',
    HORIZON_CS_DEFAULT_CERTIFICATE: 'A self-signed certificate is installed on server {0}. ' +
        'Install a certificate that can be validated on this server and by clients that ' +
        'will connect to View.',
    HORIZON_CS_CERTIFICATE_INVALID: 'Certificate on connection server {0} is invalid. ' +
        'Invalid Reason:',
    CS_CERTIFICATE_INVALID_REASON_EXPIRED: 'Server\'s certificate has expired.',
    CS_CERTIFICATE_INVALID_REASON_INVALID_USAGE: 'Server\'s certificate usage is invalid.',
    CS_CERTIFICATE_INVALID_REASON_NAME_MISMATCH:
        'Server\'s certificate subject name does not match the server\'s External URL.',
    CS_CERTIFICATE_INVALID_REASON_NOT_TRUSTED: 'Server\'s certificate is not trusted.',
    CS_CERTIFICATE_INVALID_REASON_NOT_YET_VALID: 'Server\'s certificate is not valid yet.',
    CS_CERTIFICATE_INVALID_REASON_REVOKED: 'Server\'s certificate has been revoked.',
    CS_CERTIFICATE_INVALID_REASON_CANT_CHECK_REVOKED:
        'Server\'s certificate cannot be checked.',
    CS_CERTIFICATE_INVALID_REASON_OFFLOADED: 'The certificate is not applicable because ' +
        'it is for a secure gateway instance where SSL offloading has been configured.',
    HORIZON_CS_CERTIFICATE_EXPIRE_CLOSE: 'Certificate on connection server {0} is about ' +
        'to expire. The expire date is {1}.',
    HORIZON_CS_STATUS_NOT_RESPONDING: 'The connection server {0} is not responding.',
    HORIZON_CS_STATUS_UNKNOWN: 'The status of connection server {0} is not known.',
    HORIZON_EVENT_DB_NOT_CONFIGURED: 'No events database configured',
    HORIZON_EVENT_DB_CONNECTING:
        'The connection is connecting to the database {0} in database server {1}.',
    HORIZON_EVENT_DB_DISCONNECTED:
        'The connection is disconnected from the database {0} in database server {1}.',
    HORIZON_EVENT_DB_RECONNECTING:
        'The connection is reconnecting to the database {0} in database server {1}.',
    HORIZON_EVENT_DB_ERROR: 'There is an error with the database connection to the ' +
        'database {0} in database server {1}.',
    HORIZON_FARM_HEALTH_WARNING: 'One or more server(s) for farm {0} is either in ' +
        'warning or error state, or servers have a mixed set of reported and ' +
        'unreported load values.',
    HORIZON_FARM_HEALTH_ERROR: 'One or more server(s) for farm {0} is in error state ' +
        'or automated farm provisioning error.',
    HORIZON_FARM_HEALTH_DISABLED: 'Farm {0} is disabled',
    HORIZON_FARM_RDS_UNREACHABLE: 'RDS Server Host {0} is unreachable',
    HORIZON_FARM_RDS_ALL_APPLICATION_MISSING: 'None of the application pools on ' +
        'RDS Server {0} are available.',
    HORIZON_FARM_RDS_APPLICATION_MISSING: 'Some application pools on RDS Server ' +
        '{0} are partially available.',
    HORIZON_FARM_RDS_DISABLED: 'RDS Server Host {0} is disabled',
    HORIZON_POD_ENDPOINT_UNCHECKED: 'PodEndpoint was offline and it just came back ' +
        'online but the system has not verified that it is functional.',
    HORIZON_POD_ENDPOINT_OFFLINE: 'PodEndpoint is offline or unreachable.',
    HORIZON_SAML_STATUS_ERROR: 'Error occurred when connecting from connection server ' +
        '{0} to SAML authenticator {1}.',
    HORIZON_SECURITY_SERVER_NOT_RESPONDING: 'The security server {0} is not responding.',
    HORIZON_SECURITY_SERVER_UNKNOWN: 'The status of the security server {0} is not known.',
    HORIZON_SECURITY_SERVER_CERTIFICATE_INVALID: 'Certificate on security server {0} is ' +
        'invalid. Invalid Reason:',
    HORIZON_SECURITY_SERVER_CERTIFICATE_EXPIRE_CLOSE: 'Certificate on security server ' +
        '{0} is about to expire. The expire date is {1}.',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    HORIZON_ENROLL_SERVER_UNREACHABLE_ON_POD: 'The {0} enrollment server {1} for SSO ' +
        'connector {2} cannot be contacted by the True SSO configuration service.',
    HORIZON_ENROLL_SERVER_UNREACHABLE_ON_BROKER: 'The {0} enrollment server {1} for SSO ' +
        'connector {2} cannot be contacted to manage sessions on this connection server.',
    HORIZON_CERTSSO_CONNECTION_ESTABLISHING: 'The {0} enrollment server {1}\'s connection ' +
        'to the domain {2} is still being established.',
    HORIZON_CERTSSO_CONNECTION_FAILED: 'The {0} enrollment server {1}\'s connection to the ' +
        'domain {2} is stopping or in a problematic state.',
    HORIZON_CERTSSO_REPLICATION_DEGRADED: 'The {0} enrollment server {1} has read the ' +
        'enrollment properties at least once, but has not been able to reach a domain controller ' +
        'for domain {2} for some time.',
    HORIZON_CERTSSO_NOT_FOUND:
        'This domain {2} does not exist on the {0} enrollment server {1}.',
    HORIZON_CERTSSO_REPLICATION_PENDING: 'The {0} enrollment server {1} has not yet read ' +
        'the enrollment properties from a domain controller for domain {2}.',
    HORIZON_CERTSSO_REPLICATION_FAILED: 'The {0} enrollment server {1} has read the ' +
        'enrollment properties at least once but either has not been able to reach a domain ' +
        'controller for domain {2} for an extended time or another issue exists.',
    HORIZON_CERTSSO_CERTIFICATE_NOT_VALID: 'A valid enrollment certificate for this domain ' +
        '{2}\'s forest is not installed on the {0} enrollment server {1}, or it may have expired.',
    HORIZON_CERTSSO_TEMP_SUPPORTED_NOT_OPTIMAL: 'The template {2} of the {0} enrollment ' +
        'server {1} does not have the optimal properties for True SSO.',
    HORIZON_CERTSSO_TEMP_NO_CAPABILITY: 'The template {2} of the {0} enrollment server {1}  ' +
        'does not support True SSO: Incorrect Capabilities.',
    HORIZON_CERTSSO_TEMP_ENABLED_BUT_UNUSABLE: 'The template {2} of the {0} enrollment ' +
        'server {1} is smartcard logon enabled, but cannot be used.',
    HORIZON_CERTSSO_TEMP_NOT_FOUND: 'The template {2} of the {0} enrollment server {1} does ' +
        'not exist on the {1} enrollment server domain.',
    HORIZON_CERTSSO_SERVER_CONNECTED_DEGRADED: 'The {0} enrollment server {1} has connected ' +
        'to the certificate server {2}, but the certificate server is in a degraded state.',
    HORIZON_CERTSSO_SERVER_DISCONNECTED: 'The {0} enrollment server {1} is not connected to ' +
        'the certificate server {2}.',
    HORIZON_CERTSSO_SERVER_SERVICE_UNAVAILABLE: 'The {0} enrollment server {1} can connect ' +
        'to the certificate server {2}, but the service is unavailable.',
    HORIZON_CERTSSO_SERVER_NOT_FOUND: 'The certificate server {2} of the {0} enrollment ' +
        'server {1} does not exist in the domain.',
    HORIZON_CERTSSO_SERVER_CERTIFICATE_NOT_YET_VALID: 'The certificate for certificate ' +
        'server {2} of the {0} enrollment server {1} is not yet valid.',
    HORIZON_CERTSSO_SERVER_CERTIFICATE_UNKNOWN: 'The certificate status is unknown on the ' +
        'certificate server {2} of the {0} enrollment server {1}.',
    HORIZON_CERTSSO_SERVER_CERTIFICATE_INVALID: 'The certificate is corrupt or unable to be ' +
        'used on the certificate server {2} of the {0} enrollment server {1}.',
    HORIZON_CERTSSO_SERVER_CERTIFICATE_EXPIRED: 'The certificate has expired on the ' +
        'certificate server {2} of the {0} enrollment server {1}.',
    HORIZON_CERTSSO_SERVER_CERTIFICATE_NOT_TRUSTED: 'The certificate is not in the NTAuth ' +
        '(Enterprise) store on the certificate server {2} of the {0} enrollment server {1}.',
    HORIZON_CERTSSO_SERVER_CERTIFICATE_TEMPLATE_NOT_PUBLISHED: 'The {0} enrollment server ' +
        '{1} reported the template configured for True SSO is ' +
        'not published on certificate server {2}.',

    HORIZON_VIEWADAPTER_INSTANCE_STATUS_NOT_INITIALIZED: 'The status of Cloud Connector is not initialized',
    HORIZON_VIEWADAPTER_INSTANCE_STATUS_UNKNOWN: 'The status of Cloud Connector is unknown',
    HORIZON_VIEWADAPTER_INSTANCE_STATUS_WARN: 'The status of Cloud Connector is warn',
    HORIZON_VIEWADAPTER_INSTANCE_STATUS_ERROR: 'The status of Cloud Connector is error',

    HORIZON_VIEWADAPTER_INSTANCE_COMPONENT_ISSUE: 'Component: {0}',
    HORIZON_LICENSE_ISSUE: 'Cannot sync Horizon subscription license. Resolve this issue within {0} days to avoid service disruption.',
    HORIZON_LICENSE_EXPIRED: 'Cannot sync Horizon subscription license. Service has been disrupted. Resolve the Cloud Connector issue(s) to restore service.',
    HORIZON_LICENSE_ISSUE_UNKNOWN: 'The status of Horizon subscription license is unknown.',

    POD_MANAGER: 'Pod Manager',
    GATEWAY: 'Gateway',
    COMPONENT_NAME: 'Component Name',
    VIDM: 'vIDM',
    INFRA_COMPONENT_OFFLINE: 'The {0} is offline.',
    INFRA_COMPONENT_UNREACHABLE: 'The {0} is unreachable.',
    INFRA_COMPONENT_INVALID_CERTIFICATES: 'One or more {0} certificates are invalid.',
    INFRA_COMPONENT_UNKNOWN: 'The {0} status is unknown.',
    INFRA_COMPONENT_SERVICE_DISRUPTED: 'One or more {0} services are disrupted.',
    INFRA_COMPONENT_UNDEFINED_ISSUE: 'The {0} issue: {1}.',
    GENERIC_DISPLAY_NAME_WITH_COLON: '{0}:',
    TOTAL_ISSUES: 'Total Issues ({0})',
    DELIVERY: 'Delivery ({0})',
    DELIVERY_HELP_TEXT: 'Issues related to UEM, JMP, File Share, ' +
        'Health Service, View Composer, Event Database, Farm, Horizon Pod, ' +
        'Security Server, Horizon Subscription License Service, Other.',
    ALL_POD_TYPES: 'All Pod Types',
    ALL_LOCATIONS: 'All Locations',
    LICENSE_TYPE: 'License Type:',
    NO_LICENSE: 'No License',
    CONFIRMATION_REQUIRED: 'Confirmation is required.',
    OPTIMIZE_WINDOWS_IMAGE_USER_CONFIRM: 'Have you optimized Windows image?',
    OPTIMIZE_WINDOWS_IMAGE_USER_CONFIRM_HELP_TEXT: 'The OS optimization tool must be run on ' +
        'the Windows image prior to Import to enable or disable Windows features and system ' +
        'services. This helps to improve Windows performance, ' +
        'as per Daas recommendations and best practices.',
    DESKTOP_NAME_COLON: 'Desktop Name:',
    DESKTOP_TO_IMPORT: 'Desktop to Import',
    HORIZON_CLOUD_CP_CONNECTIVITY: 'Horizon Control Plane Connectivity',
    VMWARE_PACKAGE_REPO_CONNECTIVITY: 'VMware Software Package Connectivity from Management Subnet',
    HORIZON_CLOUD_CDN_CONNECTIVITY: 'Horizon Cloud CDN Connectivity from Management Subnet',
    MICROSOFT_PACKAGE_REPO_CONNECTIVITY: 'Microsoft Package Repo Connectivity',
    AZURE_UBUNTU_PACKAGE_REPO_CONNECTIVITY: 'Azure Ubuntu Package Repo Connectivity',
    UBUNTU_SNAP_REPO_CONNECTIVITY: 'Ubuntu Snapshot Repo Connectivity',
    UBUNTU_PACKAGE_REPO_CONNECTIVITY: 'Ubuntu Package Repo Connectivity',
    UBUNTU_SECURITY_PACKAGE_REPO_CONNECTIVITY: 'Ubuntu Security Package Repo Connectivity',
    AZURE_LOGIN_SERVICE_CONNECTIVITY: 'Azure Login Service Connectivity',
    AZURE_API_SERVICE_CONNECTIVITY: 'Azure API Service Connectivity',
    AZURE_AD_CONNECTIVITY: 'Azure Active Directory Connectivity',
    HORIZON_CLOUD_CDN_TENANT_CONNECTIVITY: 'Horizon Cloud CDN Connectivity from Tenant Subnet',
    CMS_CONNECTIVITY: 'Cloud Monitoring Service Connectivity',
    IMPORT_VM_FROM_FILESHARE_INITIATED:
        'Successfully initiated the import of {0} from file share.',
    IMPORT_DESKTOP_FILESHARE: 'Import Desktop - File Share',
    DATA_CENTER_HELP_TEXT:
        'Select a data center to get a refined list of pods available to store the desktop.',
    POD_HELP_TEXT: 'Select a pod to serve the desktop from.',
    FILE_SHARE_HELP_TEXT:
        'Select the file share that contains the desktop you want to import.',
    DESKTOP_HELP_TEXT: 'Select the OVA or OVF file to import.',
    AZURE_ONLY_REPORTS: 'Only Horizon Cloud on Azure reports are displayed. Reports are ' +
        'currently unavailable for VMware SDDC pods.',
    AZURE_ONLY_ACTIVITY: 'Only Horizon Cloud on Azure activity is displayed. Activity is ' +
        'currently unavailable for VMware SDDC pods.',
    AZURE_ONLY_UTILITY_VMs: 'Only Horizon Cloud on Azure Utility VMs are displayed. Utility ' +
        'VMs are currently unavailable for VMware SDDC pods.',
    AZURE_ONLY_APPLICATIONS: 'Only Horizon Cloud on Azure applications are displayed. ' +
        'Applications is currently unavailable for VMware SDDC pods. ' +
        '||Go to the VMware SDDC Administrator console to manage desktops and applications.',
    AZURE_ONLY_FARMS: 'Only Horizon Cloud on Azure farms are displayed. Farms is currently ' +
        'unavailable for VMware SDDC pods. ||Go to the ' +
        'VMware SDDC Administrator console to manage desktops and applications.',
    AZURE_ONLY_VMSIZES: 'VM Types & Sizes is applicable only to Horizon Cloud on Azure',
    AZURE_ONLY_IMAGES: 'Only Horizon Cloud on Azure images are displayed.',
    AZURE_ONLY_IMAGES_NEW: 'Images can be created only for Azure pods',
    AZURE_ONLY_IMPORTED_VMS: 'Imported VMs is applicable only to Horizon Cloud on Azure',
    AZURE_ONLY_GENERAL_SETUP: 'The following settings are applicable only to Horizon Cloud on Azure: RDSH Farm, ' +
        'Desktop Assignment Options, ||Domain Security Settings, Monitoring. Go to the Horizon View Administrator console to configure ' +
        'these settings for Horizon View (VMware SDDC).',
    AZURE_ONLY_GENERAL_SETUP_EDIT: 'The below changes will update only Azure pods ' +
        'in the environment',
    HORIZON_7_ONLY_IMAGE_MANAGEMENT_SETTINGS_EDIT: 'The below setting is applicable only for VMware SDDC images.',
    AZURE_ONLY_IDM: 'Only Horizon Cloud on Azure Workspace ONE Access are displayed. ' +
        'Workspace ONE Access is currently unavailable for VMware SDDC pods. ' +
        '||Go to the VMware SDDC Administrator console to manage ' +
        'desktops and applications.',
    AZURE_ONLY_USER_SEARCH_ASSIGNMENTS: 'Only Horizon Cloud on Azure assignments are ' +
        'displayed. Assignment is currently ||unavailable for VMware SDDC pods. ' +
        'Go to the VMware SDDC Administrator console to manage ' +
        'desktops and applications.',
    AZURE_ONLY_USER_SEARCH_DESKTOPS: 'Only Horizon Cloud on Azure desktops are displayed. ' +
        'Desktop is currently || unavailable for VMware SDDC pods. ' +
        'Go to the VMware SDDC Administrator console to manage desktops.',
    AZURE_ONLY_USER_SEARCH_APPLICATIONS: 'Only Horizon Cloud on Azure applications are ' +
        'displayed. Application is currently || unavailable for VMware SDDC pods. ' +
        'Go to the VMware SDDC Administrator console to ' +
        'manage applications.',
    ONlY_AZURE_FUNCTIONALITY_DESC: '<p>This page is available only for customers who have ' +
        'deployed a Horizon Cloud on Azure Pod. To learn more about Horizon Cloud on Azure, ' +
        'contact your VMware representative. </p><p>If you believe you received this message ' +
        'in error, please contact VMware Support.</p>',
    MORE_INFO: 'More Info...',
    NODE_VERSION: 'Pod Version:',
    POD_VERSION: 'Pod Version:',
    TENANT_APPLIANCE_VERSION: 'Tenant Appliance Version:',
    POOL_NAME: 'Pool Name',
    VMWARE_TOOLS: 'VMware Tools',
    TOOLS_STATUS: 'Tools Status',
    AGENT_VERSIONS: 'Agent Versions',
    ROLE_ASSIGNMENT_FAILURE:
        'Following role assignments are not created successfully. Please try again.',
    ROLE_ASSIGNMENT_FAILURE_MSG:
        'An unknown Gateway error has occurred. Please try again. If the issue persists, contact VMware Support.',
    CREATE_PACKAGE: 'Create Package',
    CREATE_DESKTOP_FOR_PACKAGE: 'Creating Desktop for Application Capture',
    CREATE_PACKAGE_DESC:
        'Select this option to create a new application package by manually ' +
        'installing an application.',
    CREATE_PACKAGE_INITIATED_SUCCESSFULLY: 'Successfully initiated the request to create ' +
        'a new application package. When a VM is available, you can launch the Blast URL ' +
        'from Monitor > Notifications.',
    CREATE_PACKAGE_DESKTOP_CREATION_DESC: 'A desktop is required to capture the applications for the package. No desktops were found, so the package name has been saved and a new desktop is being created. Desktop creation takes up to 15 minutes. When the desktop is ready you will be notified and can start the application package capture.',
    CREATE_PACKAGE_INITIATED_FAILURE: 'Could not create a new application package. Please try again later.',
    CREATE_PACKAGE_ALREADY_IN_PROGRESS: 'Request to create a new package is already ' +
        'initiated. Please wait until the request completes and try again.',
    CREATE_PACKAGE_GOLDPATTERN_IMAGE_NOT_FOUND: 'At least one image is required. This ' +
        'image will be used as the OS on your virtual desktop(s) used to capture applications.',
    IMPORT_PACKAGE: 'Import Package',
    IMPORT_PACKAGE_DESC: 'Select this option to import existing application packages ' +
        'created on a different system or environment.',
    IMPORT_PACKAGE_INITIATED_SUCCESSFULLY: 'Successfully initiated the request to import ' +
        'an application package. You can view imported applications in Inventory > Applications.',
    IMPORT_PACKAGE_INITIATED_NO_FILESHARE: 'Staging fileshare is not available currently ' +
        'to initiate import of an application package.',
    IMPORT_PACKAGE_INITIATED_FAILURE: 'Some problem occured while initiating the request to ' +
        'import an application package. Please try again later.',
    REMOTE_CAPS: 'REMOTE',
    NATIVE_CAPS: 'NATIVE',
    APPLICATION_STORAGE_COLON: 'Application Storage:',
    APPLICATION_STORAGE: 'Application Storage',
    STAGING_STORAGE_COLON: 'Staging Storage:',
    DELIVERY_STORAGE_COLON: 'Delivery Storage:',
    STAGING_STORAGE: 'Staging Storage',
    DELIVERY_STORAGE: 'Delivery Storage',
    NO_DOMAIN_JOIN_INFO: 'You have not performed Domain Join operation. Importing VM ' +
        'requires Domain Join step to be complete. Please complete the ' +
        '<a href=\'#/domains\'>step</a> and then import the VM.',
    DOMAIN_JOIN_INVALID_ORGANIZATIONAL_UNIT: 'The default OU entered is invalid. ' +
        'Please enter the valid OU and try again.',
    CREATED_NO_COLON: 'created',
    IMPORTED_DESKTOP: 'Imported Desktop',
    UTILITY_SERVER: 'Utility Server',
    PATTERN_DESKTOP: 'Pattern Desktop',
    RECYCLE_DESKTOP: 'Recycle Desktop',
    NETWORK_HELP_TEXT: 'Select the target network in the pod.',
    IMPORT_VM_SYSPREP_WARN: 'Disabling this feature can cause Microsoft Windows ' +
        'Sysprep issues to occur when the VM is published as an image. Learn more at {0}',
    OPTIMIZE_WINDOWS_IMAGE_KB_LINK: '<a href=\'http://www.vmware.com/info?id=1488\' ' +
        'target=\'_blank\' rel=\'noopener\'>http://www.vmware.com/info?id=1488</a>.',
    REMOVE_WINDOWS_STORE_KB_LINK: '<a href=\'http://www.vmware.com/info?id=1501\' ' +
        'target=\'_blank\' rel=\'noopener\'>http://www.vmware.com/info?id=1501</a>.',
    NETWORK_FARM_TOOLTIP_TEXT: 'Select the network you want this farm to use.',
    NETWORK_ASSIGNMENT_TOOLTIP_TEXT: 'Select the network you want this assignment to use.',
    POOL_HELP_TEXT_WHEN_ALL_DESKTOPS_DELETED: 'Deleting all desktops with "Reduce assignment size ?" selected will result in an empty assignment. If unselected, the minimum and maximum assignment sizes of {0} and {1} will be maintained.',
    POOL_HELP_TEXT_WHEN_VM_RECREATED: 'Reduces the maximum assignment size from {0} to {1} and the minimum size from {2} to {3}. If unselected, {4} desktops will be recreated to maintain the minimum assignment size of {5}',
    POOL_HELP_TEXT_WHEN_MAX_REMAIN_GREATER_THAN_MIN: 'Reduces the maximum assignment size from {0} to {1} and maintain the minimum size of {2}. If unselected, the minimum and maximum assignment sizes of {3} and {4} will be maintained.',
    FARM_HELP_TEXT_WHEN_ALL_SERVERS_DELETED: 'Deleting all servers with "Reduce assignment size ?" selected will result in an empty farm. If unselected, the minimum and maximum farm sizes of {0} and {1} will be maintained.',
    FARM_HELP_TEXT_WHEN_VM_RECREATED: 'Reduces the maximum farm size from {0} to {1} and the minimum size from {2} to {3}. If unselected, {4} servers will be recreated to maintain the minimum farm size of {5}.',
    FARM_HELP_TEXT_WHEN_MAX_REMAIN_GREATER_THAN_MIN: 'Reduces the maximum farm size from {0} to {1} and maintain the minimum size of {2}. If unselected, the minimum and maximum farm sizes of {3} and {4} will be maintained.',
    WORKSPACE_ONE_REDIRECTION: 'Workspace One Redirection',
    WORKSPACE_ONE_REDIRECTION_COLON: 'Workspace One Redirection:',
    WORKSPACE_ONE_REDIRECTION_HELP_TEXT: 'Select to enable automatic Workspace ONE redirection for this identity provider.',
    VIDM_DEFAULT_WORKSPACEONE_REDIRECTION_DUPLICATE: 'The redirection URL is enabled for a different Workspace ONE Access. Please check the Workspace ONE Access configuration and try again.',
    AV_AGENT_INSTALL: 'App Volumes Agent:',
    AV_AGENT_INSTALL_HELP: 'Select to install the App Volumes Agent on the desktop.',
    AV_AGENT_INSTALL_HELP_DOMAIN_DISABLED: 'Domain Join must be enabled to install App Volumes Agent on the desktop.',
    CAPACITY_OVER_USAGE_WARNING: 'The standard capacity has been overused. Click on \'More\' to view the details',
    RECONFIGURE_DESKTOP: 'Reconfigure Desktop:',
    RECONFIGURE_DESKTOP_HELP_TEXT: 'Select to reconfigure desktop specifications to a standard desktop model.',
    OVER_USAGE: 'Over Usage:',
    DESKTOP_SPECIFICATIONS_RETRIEVAL_FAILURE: 'Unable to retrieve the specifications for the desktop. Please select another desktop for import.',
    CHANGE_STATE: 'Change State',
    CHANGE_POD_STATE: 'Change Pod State',
    CURRENT_STATE: 'Current State',
    CHANGE_TO: 'Change to',
    POD_STATE_COLON: 'Pod State:',
    CHANGE_POD_STATE_HELP_TEXT: 'Change the pod state from monitored to managed.',
    CHANGE_POD_STATE_INSTRUCTION: 'Change the pod state from monitored to managed. When a pod is managed, you can create assignments using that pod in the Horizon Universal Console. ' +
        'To change a pod from managed to monitored, you must disconnect the pod and add it to the Horizon Universal Console again.',
    CHANGE_POD_STATE_SUCCESS: 'Successfully changed the pod {0} to managed state.',
    MANAGED: 'Managed',

    MONITORED: 'Monitored',
    CS_VERSION_NOT_SUPPORTED: 'Cloud management is not supported for this pod version. Please make sure the pod version is 7.9 or later and try again.',
    CONNECTOR_VERSION_NOT_SUPPORTED: 'Cloud management is not supported for this connector version. Please make sure the cloud connector version is 1.3 or later and try again.',
    CPA_NOT_ENABLED: 'Pod is not in a Cloud Pod Architecture federation. Please join the pod to a federation and try again.',
    NOT_PART_OF_REQUIRED_FEDERATION: 'Pod is not in the same federation as the managed pods. Please join the pod to the same federation and try again.',
    /* UEM Properties */
    UEM: 'UEM',
    UEM_N_INVENTORY: '{0} Customization',
    UEM_N_INVENTORIES: '{0} Customizations',
    UEM_INVENTORIES: 'Customizations',
    UEM_NAME_TITLE: 'Name:',
    UEM_NAME_TITLE_NO_COLON: 'Name',
    UEM_TYPE_TITLE: 'Type:',
    UEM_TYPE_TITLE_NO_COLON: 'Type',
    UEM_PROFILES: 'Customization Assignments',
    UEM_PROFILE: 'Customization Assignment',
    UEM_N_PROFILE: '{0} Customization Assignment',
    UEM_N_PROFILES: '{0} Customization Assignments',
    UEM_PUSH: 'Push',
    UEM_SERVICE: 'New Customization Assignment',
    UEM_PROFILE_NAME_COLON: 'Name:',
    UEM_PROFILE_NAME_HELP_TEXT: 'Customization Assignment name help text',
    UEM_PROFILE_DESCRIPTION: 'Description:',
    UEM_PROFILE_DESCRIPTION_COLON: 'Description:',
    UEM_DESCRIPTION_TITLE: 'Description',
    UEM_PROFILE_NAME_TITLE: 'Customization Assignment Name:',
    UEM_PROFILE_DESCRIPTION_HELP_TEXT: 'Customization Assignment description help text',
    UEM_CONDITIONS: 'Conditions',
    UEM_GROUPS: 'User Groups',
    UEM_MODIFIED_TITLE: 'Modified:',
    UEM_MODIFIED_TITLE_NO_COLON: 'Modified',
    UEM_USAGE: 'Usage',
    UEM_PROPERTIES: 'Properties',
    UEM_SETTINGS: 'Settings',
    UEM_ASSIGNMENTS: 'Assignments',
    UEM_SAVE: 'Save',
    UEM_PERMANENT: 'Permanent',
    UEM_EVERY_TIME: 'Every time',
    UEM_FIRST_TIME: 'First time',
    UEM_REMOVE_LOGOFF: 'Every time but remove at logoff',
    UEM_VARIABLE_NAME: 'Variable Name:',
    UEM_MOUNT: 'Set:',
    UEM_MAP_COLON: 'Map:',
    UEM_PATH: 'Path',
    UEM_DISPLAY_NAME: 'Display Name',
    UEM_DISPLAY_NAME_COLON: 'Display Name:',
    UEM_DEFAULT_PRINTER: 'Default Printer',
    UEM_RUN_ASYNC: 'Run Asynchronously',
    UEM_RUN_ASYNC_COLON: 'Run Asynchronously:',
    UEM_SHORTCUT_NAME: 'Shortcut Name',
    UEM_TARGET: 'Target',
    UEM_OS_ARCHITECTURE: 'OS Architecture',
    UEM_SHOWON_DESKTOP: 'Desktop',
    UEM_SHOWON_QUICKLAUNCH: 'Quick Launch',
    UEM_SHOWON_PROGRAMFOLDER: 'Programs Folder',
    UEM_VARIABLE_VALUE: 'Variable Value',
    UEM_TRIGGER: 'Trigger:',
    UEM_APPLY_IF_IP_CHANGE: 'Apply only if IP has changed:',
    UEM_ACTION: 'Action:',
    UEM_SHOW_MESSAGE_COLON: 'Show Message:',
    UEM_TRIGGER_TITLE: 'Title:',
    UEM_TRIGGER_MESSAGE: 'Message:',
    UEM_DISMISS_AUTOMATIC: 'Dismiss automatically:',
    UEM_USER_TO_DISMISS: 'Allow user to dismiss:',
    UEM_CUSTOMIZATIONS: 'Customizations',
    UEM_ARGUMENT: 'Argument:',
    UEM_ADMX_SETTINGS: 'ADMX Settings',
    UEM_LOCK_WORKSTATION: 'Lock Workstation',
    UEM_UNLOCK_WORKSTATION: 'Unlock Workstation',
    UEM_DISCONNECT_SESSION: 'Disconnect Session',
    UEM_RECONNECT_SESSION: 'Reconnect Session',
    UEM_CONDITIONS_INSTRUCTIONS: 'instructions about conditions will go here. todo: get content from instruction document',
    UEM_AND: 'and',
    UEM_OR: 'or',
    UEM_NOT: 'not',
    UEM_AND_NOT: 'and not',
    UEM_OR_NOT: 'or not',
    UEM_COMPUTER: 'Computer battery',
    UEM_ENV_VAR: 'Environment variable',
    UEM_REG_KEY: 'Registry key',
    UEM_COMMAND: 'Command',
    UEM_COMMAND_COLON: 'Command:',
    UEM_EXIT_CODE: 'Exit code of command',
    UEM_CMD_TIMEOUT: 'Command timeout',
    UEM_FILE_PATH: 'File or folder path',
    UEM_FILE_VER: 'File version check',
    UEM_PRODUCT_VER: 'Product version check',
    UEM_COMPUTER_GRP: 'Computer Group',
    UEM_USER_GRP: 'User Group',
    UEM_IP_ADDRESS: 'IP address',
    UEM_TERMINAL_SRVR_IP_ADDR: 'Terminal server IP address',
    UEM_TERMINAL_SRVR_CLIENT: 'Terminal server client name',
    UEM_OS_VERSION: 'OS version',
    UEM_CMP_OBJECT: 'Computer object',
    UEM_REG_KEY_VAL: 'Registry key value',
    UEM_CMP_ORG_UNIT: 'Computer organizational unit',
    UEM_USER_ORG_UNIT: 'User organizational unit',
    UEM_EQUALS: 'equals to',
    UEM_NOT_EQUAL: 'not equal to',
    UEM_LESS: 'less than',
    UEM_LE: 'less than or equal to',
    UEM_GREATER: 'greater than',
    UEM_GE: 'greater than or equal to',
    UEM_EXISTS: 'exists',
    UEM_STARTS: 'starts with',
    UEM_ENDS: 'ends with',
    UEM_CONTAINS: 'contains',
    UEM_MEMBER: 'member of',
    UEM_BETWEEN: 'is between',
    UEM_BACK_TO_UEM_PROFILES: 'Back to All UEM Profiles',
    UEM_OS_32: 'x86 (32 bit)',
    UEM_OS_64: 'x64 (64 bit)',
    UEM_CMP_HAS_BATTERY: 'Has a battery',
    UEM_RUN_ON_BATTERY: 'Running on battery',
    UEM_SECONDS: 'secs',
    UEM_SECONDS_LABEL: 'Seconds',
    UEM_OS_VER_WIN_7: 'Windows 7',
    UEM_OS_VER_WIN_8: 'Windows 8',
    UEM_OS_VER_WIN_8_1: 'Windows 8.1',
    UEM_OS_VER_WIN_10: 'Windows 10',
    UEM_OS_VER_SRVR_2008: 'Windows Server 2008',
    UEM_OS_VER_SRVR_2008_R2: 'Windows Server 2008 R2',
    UEM_OS_VER_SRVR_2012: 'Windows Server 2012',
    UEM_OS_VER_SRVR_2012_R2: 'Windows Server 2012 R2',
    UEM_OS_VER_SRVR_2016: 'Windows Server 2016',
    UEM_REG_KEY_HKLM: 'HKLM',
    UEM_REG_KEY_HKCU: 'HKCU',
    UEM_REG_KEY_HKCR: 'HKCR',
    UEM_DIRECT_MEMBER: 'Direct member',
    UEM_IGNORE_DOMAIN: 'Ignore domain',
    UEM_VALUE: 'Value',
    UEM_SELECT_CONDITION: 'Select Condition',
    UEM_SETTING_TYPE_PERSONALIZATION: 'Personalization',
    UEM_SETTING_TYPE_GPO: 'ADMX-based Settings',
    UEM_SETTING_TYPE_APPBLOCKING: 'Application Blocking Settings',
    UEM_SETTING_TYPE_DRIVEMAPPING: 'Drive Mappings',
    UEM_SETTING_TYPE_ENVVAR: 'Environment Variables',
    UEM_SETTING_TYPE_FTA: 'File Type Associations',
    UEM_SETTING_TYPE_FILE: 'Files and Folders',
    UEM_SETTING_TYPE_FOLDERREDIRECTION: 'Folder Redirection',
    UEM_SETTING_TYPE_HORIZON: 'Horizon Smart Policies',
    UEM_SETTING_TYPE_IMPORTTASK: 'Logon Tasks',
    UEM_SETTING_TYPE_EXPORTTASK: 'Logoff Tasks',
    UEM_SETTING_TYPE_PRINTERMAPPING: 'Printer Mappings',
    UEM_SETTING_TYPE_REG: 'Registry Settings',
    UEM_SETTING_TYPE_SHORTCUT: 'Shortcuts',
    UEM_SETTING_TYPE_TRIGGEREDTASK: 'Triggered Tasks',
    UEM_SETTING_TYPE_MUI: 'Windows Settings\\Display Language',
    UEM_SETTING_TYPE_HIDEDRIVES: 'Windows Settings\\Hide Drives',
    UEM_SETTING_TYPE_POLICY: 'Windows Settings\\Policy Settings',
    UEM_SETTING_GPO_DISABLED: 'Disabled',
    UEM_SETTING_DRIVEMAPPING_LOCAL: 'Drive letter:',
    UEM_SETTING_DRIVEMAPPING_REMOTE: 'Remote path:',
    UEM_SETTING_DRIVEMAPPING_FRIENDLY: 'Friendly name:',
    UEM_SETTING_DRIVEMAPPING_USERNAME: 'User name:',
    UEM_SETTING_DRIVEMAPPING_PASSWORD: 'Password:',
    UEM_SETTING_DRIVEMAPPING_SKIPIFEXISTS: 'Skip if drive letter is in use:',
    UEM_SETTING_DRIVEMAPPING_RUNONCE: 'Run once:',
    UEM_SETTING_DRIVEMAPPING_ASYNC: 'Run asynchronously:',
    UEM_SETTING_DRIVEMAPPING_UNDO: 'Undo at logoff:',
    UEM_SETTING_DRIVEMAPPING_DISABLED: 'Disabled:',
    UEM_SETTING_DRIVEMAPPING_DESCRIPTION: 'Descriptions:',
    UEM_SETTING_ENVVAR_VALUE: 'Value:',
    UEM_SETTING_ENVVAR_VAR: 'Variable name:',
    UEM_SETTING_ENVVAR_RUNONCE: 'Run once:',
    UEM_SETTING_ENVVAR_DISABLED: 'Disabled:',
    UEM_SETTING_FTA_EXTENSION: 'Extension:',
    UEM_SETTING_FTA_COMMAND: 'Command:',
    UEM_SETTING_FTA_ARGS: 'Arguments:',
    UEM_SETTING_FTA_ICONPATH: 'Icon path:',
    UEM_SETTING_FTA_ICONINDEX: 'Icon index:',
    UEM_SETTING_FTA_DESCRIPTION: 'Descriptions:',
    UEM_SETTING_FTA_RUNONCE: 'Run once:',
    UEM_SETTING_FTA_UNDO: 'Undo at logoff:',
    UEM_SETTING_FTA_DISABLED: 'Disabled:',
    UEM_SETTING_FTA_PHASE: 'Run task:',
    UEM_SETTING_HIDEDRIVES_DRIVEMASK: 'Hide drivers:',
    UEM_SETTING_HIDEDRIVES_DISABLED: 'Disabled:',
    UEM_SETTING_POLICY_COMMON: 'Remove common program groups from start menu:',
    UEM_SETTING_POLICY_DESKTOP: 'Prevent desktop changing background:',
    UEM_SETTING_POLICY_CONTROL: 'Prohibit access to the Control Panel:',
    UEM_SETTING_POLICY_RUN: 'Remove Run command from Start Menu:',
    UEM_SETTING_POLICY_DISABLED: 'Disabled:',
    UEM_SETTING_IMPORTTASK_COMMAND: 'Command:',
    UEM_SETTING_IMPORTTASK_WAITTIME: 'Timeout:',
    UEM_SETTING_IMPORTTASK_PHASE: 'Run task:',
    UEM_SETTING_IMPORTTASK_RUNONCE: 'Run once:',
    UEM_SETTING_IMPORTTASK_ASYNC: 'Run asynchronously:',
    UEM_SETTING_IMPORTTASK_DISABLED: 'Disabled:',
    UEM_SETTING_EXPORTTASK_COMMAND: 'Command:',
    UEM_SETTING_EXPORTTASK_WAITTIME: 'Timeout:',
    UEM_SETTING_EXPORTTASK_PHASE: 'Run task:',
    UEM_SETTING_EXPORTTASK_RUNONCE: 'Run once:',
    UEM_SETTING_EXPORTTASK_ASYNC: 'Run asynchronously:',
    UEM_SETTING_EXPORTTASK_DISABLED: 'Disabled:',
    UEM_SETTING_PRINTERMAPPING_REMOTE: 'Remote path:',
    UEM_SETTING_PRINTERMAPPING_DEFAULT: 'Default printer:',
    UEM_SETTING_PRINTERMAPPING_RUNONCE: 'Run once:',
    UEM_SETTING_PRINTERMAPPING_ASYNC: 'Run asynchronously:',
    UEM_SETTING_PRINTERMAPPING_UNDO: 'Undo at logoff:',
    UEM_SETTING_PRINTERMAPPING_DISABLED: 'Disabled:',
    UEM_SETTING_SHORTCUT_LNK: 'Shortcut name:',
    UEM_SETTING_SHORTCUT_PATH: 'Target:',
    UEM_SETTING_SHORTCUT_ARGS: 'Arguments:',
    UEM_SETTING_SHORTCUT_STARTIN: 'Start in:',
    UEM_SETTING_SHORTCUT_SHOWCMD: 'Run:',
    UEM_SETTING_SHORTCUT_SHOWCMD_NORMAL: 'Normal Window',
    UEM_SETTING_SHORTCUT_SHOWCMD_MINIMIZED: 'Minimized',
    UEM_SETTING_SHORTCUT_SHOWCMD_MAXIMIZED: 'Maximized',
    UEM_SETTING_SHORTCUT_COMMENT: 'Comment:',
    UEM_SETTING_SHORTCUT_ICONPATH: 'Icon path:',
    UEM_SETTING_SHORTCUT_ICONINDEX: 'Icon index:',
    UEM_SETTING_SHORTCUT_DESKTOP: 'Add to desktop:',
    UEM_SETTING_SHORTCUT_QUICKLAUNCH: 'Add to quick Launch bar:',
    UEM_SETTING_SHORTCUT_PROGRAMSMENU: 'Programs folder:',
    UEM_SETTING_SHORTCUT_SKIPIFEXISTS: 'Skip if Shortcut already exists:',
    UEM_SETTING_SHORTCUT_RUNONCE: 'Run once:',
    UEM_SETTING_SHORTCUT_ASYNC: 'Run asynchronously:',
    UEM_SETTING_SHORTCUT_UNDO: 'Undo at logoff:',
    UEM_SETTING_SHORTCUT_TAG: 'Tag:',
    UEM_SETTING_SHORTCUT_DISABLED: 'Disabled:',
    UEM_SETTING_TRIGGEREDTASK_T: 'Trigger:',
    UEM_SETTING_TRIGGEREDTASK_C: 'Action:',
    UEM_SETTING_TRIGGEREDTASK_I: 'IP Address change only:',
    UEM_SETTING_TRIGGEREDTASK_A: 'Arguments:',
    UEM_SETTING_TRIGGEREDTASK_CAPTION: 'Caption:',
    UEM_SETTING_TRIGGEREDTASK_MESSAGE: 'Message:',
    UEM_SETTING_TRIGGEREDTASK_BUTTON: 'Button:',
    UEM_SETTING_TRIGGEREDTASK_TIMEOUT: 'Close automatically after:',
    UEM_SETTING_TRIGGEREDTASK_DISABLED: 'Disabled:',
    UEM_SETTING_MUI_LANG: 'Language:',
    UEM_SETTING_MUI_RUNONCE: 'Run once:',
    UEM_SETTING_MUI_ARCHIVE: 'Archive:',
    UEM_SETTING_MUI_DISABLED: 'Disabled:',
    UEM_SETTING_FILE_DISABLED: 'Disabled:',
    UEM_SETTING_FILE_RUNONCE: 'Run once:',
    UEM_SETTING_FILE_ARCHIVE: 'Archive:',
    UEM_SETTING_FILE_PHASE: 'Apply settings:',
    UEM_SETTING_REG_DISABLED: 'Disabled:',
    UEM_SETTING_REG_RUNONCE: 'Run once:',
    UEM_SETTING_REG_ARCHIVE: 'Archive:',
    UEM_DIRECT_FLEX_REFRESH: 'DirectFlex Refresh',
    UEM_USER_ENV_REFRESH: 'User Environment Refresh:',
    UEM_RUN_CUSTOM_CMD: 'Run Custom Command',
    UEM_DISPLAY_MSG: 'Display Message',
    UEM_MASK_TYPE_FTA: 'File type associations',
    UEM_MASK_TYPE_SHORTCUTS: 'Shortcuts',
    UEM_MASK_TYPE_PRINTER: 'Printers',
    UEM_MASK_TYPE_ADMX: 'ADMX-based settings',
    UEM_MASK_TYPE_DRIVE_MAPPINGS: 'Drive mappings',
    UEM_MASK_TYPE_HORIZON: 'Horizon Smart Policies',
    UEM_MASK_TYPE_APPBLOCKING: 'Application Blocking Settings',
    UEM_MASK_TYPE_ENV_VAR: 'Environment variables',
    UEM_BTN_ENABLE_A: 'Message box disappears when user clicks \'OK\' button or after timeout has passed.',
    UEM_BTN_ENABLE_N: 'Message box disappears after timeout has passed.',
    UEM_BTN_ENABLE_O: 'OK button in message box becomes enabled after timeout has passed; user must click \'OK\'.',
    UEM_SHOW_CMD_NORMAL: 'Normal window (default)',
    UEM_SHOW_CMD_MAX: 'Maximized',
    UEM_SHOW_CMD_MIN: 'Minimized',
    UEM_ASSIGNMENT: 'Customization',
    UEM_ASSIGNMENT_INFO: 'Assign Customization settings conditionally to customize user\'s environment.',
    UEM_DELETE_CUSTOMIZATION_MSG: 'Are you sure you want to delete this Customization Assignment?',
    UEM_DELETE_CUSTOMIZATION_DESC: 'This action will delete this Customization Assignment and it will no longer apply to the users/desktops',
    UEM_DELETE_CUSTOMIZATION_SUCCEEDED: 'Customization Assignment has been deleted',
    UEM_YES: 'Yes',
    UEM_NO: 'No',
    UEM_RUN_TASK_PRE: 'Before profile archive import',
    UEM_RUN_TASK_AFTER: 'After profile archive import',
    NO_FILE_SHARE: 'There are no Customizations. To Import existing Customizations from Customization console, add Customization share locations in Settings menu. Once Customization share locations are saved, Customizations will be scanned and show here automatically.',
    UEM_IS: 'Is',
    UEM_NEW_CUSTOMIZATION: 'New Customization',
    UEM_EDIT_CUSTOMIZATION: 'Edit Customization',
    UEM_CUSTOMIZATION_NAME_HELP: 'Temporary Help Text for name',
    UEM_PATH_COLON: 'Path:',
    UEM_DRIVE_LETTER_COLON: 'Drive Letter:',
    UEM_SKIP_IF_LETTER_INUSE: 'Skip if letter in use',
    UEM_RUN_TASK_COLON: 'Run Task:',
    UEM_EXECUTE_COLON: 'Execute:',
    UEM_TIMEOUT_COLON: 'Timeout:',
    UEM_ICON_COLON: 'Icon:',
    UEM_TYPE_COLON: 'Type:',
    UEM_CREATE_COLON: 'Create:',
    UEM_BEFORE_PROFILE_IMPORT: 'Before Profile Archive import',
    UEM_AFTER_PROFILE_IMPORT: 'After Profile Archive import',
    UEM_BEFORE_PROFILE_EXPORT: 'Before Profile Archive export',
    UEM_AFTER_PROFILE_EXPORT: 'After Profile Archive export',
    UEM_RESOLVE_32_TO_64_COLON: 'Resolve 32 bit program files for 64 bit?:',
    UEM_IMPORT_FROM_SHORTCUT_COLON: 'Import from Shortcut:',
    UEM_DRIVE_MAPPINGS: 'Drive Mapping',
    UEM_ENV_VARIABLES: 'Environment Variable',
    UEM_FILE_TYPE_ASSOCIATIONS: 'File Type Association',
    UEM_LOGON_TASKS: 'Logon Task',
    UEM_LOGOFF_TASKS: 'Logoff Task',
    UEM_PRINTER_MAPPINGS: 'Printer Mapping',
    UEM_SHORTCUTS: 'Shortcut',
    UEM_TRIGGERED_TASKS: 'Triggered Task',
    UEM_HIDE_DRIVES: 'Hide Drive',
    UEM_DIRECT_FLEX: 'DirectFlex Refresh',
    UEM_CUSTOMIZATION_REFRESH: 'Customization Refresh',
    UEM_RUN_CUSTOM_COMMAND: 'Run Custom Command',
    UEM_SHOW_MESSAGE: 'Show Message',
    UEM_SHOWON: 'Show on:',
    UEM_SKIP_IF_SHORTCUT_EXISTS: 'Skip if shortcut exists:',
    UEM_COMMENT_COLON: 'Comment:',
    UEM_WINDOW_COLON: 'Window:',
    UEM_STARTIN_COLON: 'Start in:',
    UEM_PROGRAM_FOLDER_COLON: 'Program Folder:',
    UEM_NORMAL: 'Normal',
    UEM_MAXIMIZED: 'Maximized',
    UEM_MINIMIZED: 'Minimized',
    UEM_DELETE_POLICY_HEADER: 'Delete Customization',
    UEM_DELETE_POLICY_WARNING: 'This action will permanently delete the Customization {0}. This will remove it from all the Assignments and Customization profiles it is used in.',
    UEM_DELETE_POLICY_SUCCEEDED: 'Customization {0} deleted Successfully',
    UEM_CUSTOMIZATION_CREATION_SUCCEEDED: 'New customization created successfully',
    UEM_CUSTOMIZATION_EDIT_SUCCEEDED: 'Customization edited successfully',
    UEM_CUSTOMIZATION_PATTERN_INVALID: 'Cannot contain these characters \'\\./:\*?"<>\'.',
    UEM_CUSTOMIZATION_PATH_INVALID: 'Path must start with \'\\\\\' or should be a valid path.',
    UEM_VC_NAME_INCORRECT_PATTERN: 'Variable Name cannot contain "=".',
    UEM_INVALID_PATH: 'Invalid Path name characters used.',
    UEM_ICON_INDEX_LIMIT: 'Icon index is in the range of 1-65535.',
    UEM_SECONDS_LIMIT: 'exceeded the limit of 9999 seconds.',
    UEM_COMMENTS_TITLE: 'Comments',
    UEM_TAGS_TITLE: 'Tags',
    UEM_COMMENTS_TITLE_COLON: 'Comments:',
    UEM_TAGS_TITLE_COLON: 'Tags:',
    UEM_PRE_DEFINED_SETTINGS: 'Pre-defined Settings',
    UEM_NO_PRE_DEFINED_MESSAGE: 'No pre-defined settings available.',
    UEM_MORE_TEXT: 'More',
    UEM_LESS_TEXT: 'Less',
    UEM_SETTING_COMMON_YES: 'Yes',
    UEM_SETTING_COMMON_NO: 'No',
    UEM_SETTING_COMMON_ASYNC: 'Asynchronous:',
    UEM_SETTING_COMMON_DISABLED: 'Disabled',
    UEM_SETTING_COMMON_DISABLED_LABEL: 'Disabled:',
    UEM_SETTING_COMMON_ENABLED: 'Enabled',
    UEM_SETTING_COMMON_LABEL: 'Description:',
    UEM_SETTING_COMMON_RUNONCE: 'Run Once:',
    UEM_SETTING_COMMON_TAG: 'Tag:',
    UEM_SETTING_COMMON_UNDO: 'Undo:',
    UEM_SETTING_COMMON_PHASE: 'Run Task:',
    UEM_SETTING_COMMON_PRE: 'Before profile archive import',
    UEM_SETTING_COMMON_AFTER: 'After profile archive import',
    UEM_SETTING_PERSONALIZATION_TYPE: 'Type',
    UEM_SETTING_PERSONALIZATION_DEFAULT: 'Default Settings',
    UEM_SETTING_PERSONALIZATION_PARTIAL: 'Partially Enforced Settings',
    UEM_SETTING_PERSONALIZATION_DEFAULT_PARTIAL: 'Default Settings with Partial Enforcement',
    UEM_SETTING_PERSONALIZATION_FULL: 'Fully Enforced Settings',
    UEM_SETTING_PERSONALIZATION_INDEX: 'File Index',
    UEM_SETTING_PERSONALIZATION_INDEX2: 'File Index 2',
    UEM_SETTING_PERSONALIZATION_NAME: 'Name',
    UEM_SETTING_PERSONALIZATION_LABEL: 'Description',
    UEM_SETTING_APPBLOCKING_SUBTYPE: 'Type',
    UEM_SETTING_APPBLOCKING_PATH: 'Path',
    UEM_SETTING_APPBLOCKING_HASH: 'Hash',
    UEM_SETTING_APPBLOCKING_ALLOW: 'Allow',
    UEM_SETTING_APPBLOCKING_BLOCK: 'Block',
    UEM_SETTING_APPBLOCKING_NAMES: 'Process Names',
    UEM_SETTING_APPBLOCKING_TITLE: 'Message Title',
    UEM_SETTING_APPBLOCKING_TEXT: 'Message Text',
    UEM_SETTING_APPBLOCKING_TIMEOUT: 'Message Timeout',
    UEM_SETTING_FOLDERREDIRECTION_PATH: 'Path',
    UEM_SETTING_FOLDERREDIRECTION_DESKTOP: 'Desktop',
    UEM_SETTING_FOLDERREDIRECTION_DOCUMENTS: 'Documents',
    UEM_SETTING_FOLDERREDIRECTION_DOWNLOADS: 'Downloads',
    UEM_SETTING_FOLDERREDIRECTION_FAVORITES: 'Favorites',
    UEM_SETTING_FOLDERREDIRECTION_MUSIC: 'Music',
    UEM_SETTING_FOLDERREDIRECTION_PICTURES: 'Pictures',
    UEM_SETTING_FOLDERREDIRECTION_PROGRAMSMENU: 'Programs Menu',
    UEM_SETTING_FOLDERREDIRECTION_VIDEOS: 'Videos',
    UEM_SETTING_FOLDERREDIRECTION_APPDATA: 'AppData',
    UEM_SETTING_FOLDERREDIRECTION_APPDATAPATH: 'AppData Path',
    UEM_SETTING_FOLDERREDIRECTION_DESKTOP_REDIRECT: 'Redirect Desktop Folder',
    UEM_SETTING_FOLDERREDIRECTION_DOCUMENTS_REDIRECT: 'Redirect Documents Folder',
    UEM_SETTING_FOLDERREDIRECTION_DOWNLOADS_REDIRECT: 'Redirect Downloads Folder',
    UEM_SETTING_FOLDERREDIRECTION_FAVORITES_REDIRECT: 'Redirect Favorites Folder',
    UEM_SETTING_FOLDERREDIRECTION_MUSIC_REDIRECT: 'Redirect Music Folder',
    UEM_SETTING_FOLDERREDIRECTION_PICTURES_REDIRECT: 'Redirect Pictures Folder',
    UEM_SETTING_FOLDERREDIRECTION_PROGRAMSMENU_REDIRECT: 'Redirect Programs Menu Folder',
    UEM_SETTING_FOLDERREDIRECTION_VIDEOS_REDIRECT: 'Redirect Videos Folder',
    UEM_SETTING_FOLDERREDIRECTION_APPDATA_REDIRECT: 'Redirect AppData Folder',
    UEM_SETTING_HORIZON_USB: 'USB Redirection:',
    UEM_SETTING_HORIZON_LOCALPRINTING: 'Printing:',
    UEM_SETTING_HORIZON_CLIPBOARD: 'Clipboard:',
    UEM_SETTING_HORIZON_CLIPBOARD_ALL: 'Allow All',
    UEM_SETTING_HORIZON_CLIPBOARD_TO_AGENT: 'Allow copy from client to agent',
    UEM_SETTING_HORIZON_CLIPBOARD_TO_CLIENT: 'Allow copy from agent to client',
    UEM_SETTING_HORIZON_DRIVEREDIRECTION: 'Client Drive Redirection:',
    UEM_SETTING_HORIZON_DRIVEREDIRECTION_ALL: 'Allow All',
    UEM_SETTING_HORIZON_DRIVEREDIRECTION_READONLY: 'Read-only',
    UEM_SETTING_HORIZON_HTMLACCESSFILETRANSFER: 'HTML Access File Transfer:',
    UEM_SETTING_HORIZON_HTMLACCESSFILETRANSFER_ALL: 'Allow All',
    UEM_SETTING_HORIZON_HTMLACCESSFILETRANSFER_TO_AGENT: 'Allow upload from client to agent',
    UEM_SETTING_HORIZON_HTMLACCESSFILETRANSFER_TO_CLIENT: 'Allow download from agent to client',
    UEM_SETTING_HORIZON_PCOIPPROFILE: 'Bandwidth Profile:',
    UEM_SETTING_HORIZON_PCOIPPROFILE_HIGHSPEEDLAN: 'High-speed LAN',
    UEM_SETTING_HORIZON_PCOIPPROFILE_LAN: 'LAN',
    UEM_SETTING_HORIZON_PCOIPPROFILE_DEDICATEDWAN: 'Dedicated WAN',
    UEM_SETTING_HORIZON_PCOIPPROFILE_BROADBANDWAN: 'Broadband WAN',
    UEM_SETTING_HORIZON_PCOIPPROFILE_LOWSPEEDWAN: 'Low-speed WAN',
    UEM_SETTING_HORIZON_PCOIPPROFILE_EXTREMELYLOWSPEED: 'Extremely Low Connection',
    UEM_SETTING_MASK_TYPE_FTA: 'File type associations',
    UEM_SETTING_MASK_TYPE_SHORTCUTS: 'Shortcuts',
    UEM_SETTING_MASK_TYPE_PRINTER: 'Printers',
    UEM_SETTING_MASK_TYPE_ADMX: 'ADMX-based settings',
    UEM_SETTING_MASK_TYPE_DRIVE_MAPPINGS: 'Drive mappings',
    UEM_SETTING_MASK_TYPE_HORIZON: 'Horizon Smart Policies',
    UEM_SETTING_MASK_TYPE_APPBLOCKING: 'Application Blocking',
    UEM_SETTING_MASK_TYPE_ENV_VAR: 'Environment variables',
    UEM_SETTING_DIRECT_FLEX_REFRESH: 'DirectFlex Refresh',
    UEM_SETTING_USER_ENV_REFRESH: 'User Environment Refresh:',
    UEM_SETTING_RUN_CUSTOM_CMD: 'Run Custom Command',
    UEM_SETTING_DISPLAY_MSG: 'Display Message',
    UEM_SETTING_BTN_ENABLE_A: 'Message box disappears when user clicks \'OK\' button or after timeout has passed.',
    UEM_SETTING_BTN_ENABLE_N: 'Message box disappears after timeout has passed.',
    UEM_SETTING_BTN_ENABLE_O: 'OK button in message box becomes enabled after timeout has passed; user must click \'OK\'.',
    UEM_SETTING_LOCK_WORKSTATION: 'Lock Workstation',
    UEM_SETTING_UNLOCK_WORKSTATION: 'Unlock Workstation',
    UEM_SETTING_DISCONNECT_SESSION: 'Disconnect Session',
    UEM_SETTING_RECONNECT_SESSION: 'Reconnect Session',
    /** wem properties*/
    WEM_APPSTACKS_CANT_BE_DELETED: 'Selected AppStacks cannot be deleted.',
    WEM_APPSTACKS_CANT_BE_DELETED_DETAILS: 'One or more selected AppStacks are in use and cannot be deleted.<br>To delete these AppStacks make sure either the user is logged off or turn off the desktop from the associated vCenter.',
    WEM_DELETE_APPSTACKS_CONFIRMATION: 'Are you sure you want to delete selected AppStack(s)?',
    WEM_DELETE_APPSTACKS_CONFIRMATION_DETAILS: 'This action will remove the AppStack(s) and associated applications.',
    WEM_DELETE_APPSTACK_FROM_FILESHARE_INFO: 'Manually delete AppStack(s) immediately from the file share, else they will get imported on next sync.',
    WEM_NO_APPSTACKS_PRESENT: 'No AppStack(s) were found. Make sure an application fileshare is added and imported successfully.',
    WEM_DELETE_APPSTACK_SUCCEEDED: 'AppStack(s) deleted successfully.',
    WEM_STORAGE_MGMT: 'Storage Management',
    WEM_APP_SHARES: 'File Shares',
    WEM_FILE_SHARE_LOCATIONS: 'Source Paths',
    WEM_FILE_SHARE_LOCATION: 'Source Path:',
    WEM_FILE_SHARE_LOCATION_NO_COLON: 'Source Path',
    WEM_NEW_FILE_SHARE_LOCATIONS: 'New File Share',
    WEM_ADD_MORE_LOCATIONS: 'Add more locations',
    WEM_ADD_FILE_SHARE_LOCATION: 'Add a FileShare location here.',
    WEM_APPLICATIONS: 'Applications',
    WEM_APPLICATIONS_SLASH_IMAGES: 'Applications/Images',
    WEM_CUSTOMIZATIONS: 'Customizations',
    WEM_AGENTS: 'Agents',
    WEM_PHYSICAL: 'Physical',
    WEM_VIRTUAL: 'Virtual',
    WEM_DATA_CENTERS: 'Destination vCenters:',
    WEM_DATA_CENTERS_NO_COLON: 'Destination vCenters',
    WEM_DATA_PODS: 'Destination Pod:',
    WEM_DATA_PODS_NO_COLON: 'Destination Pod',
    WEM_LAST_SYNC: 'Last Sync',
    WEM_LAST_SYNC_COLON: 'Last Sync:',
    WEM_SYNC: 'Import',
    WEM_SYNC_NOW: 'Sync now',
    WEM_VALIDATE: 'Validate',
    WEM_SYNC_COLON: 'Import:',
    WEM_HOT_PATCH: 'Hot Patch',
    WEM_HOT_PATCH_COLON: 'Hot Patch:',
    WEM_SECURITY_VALIDATION: 'Security Validation',
    WEM_HOT_PATCH_INFO: 'All other Agent updates are imported automatically.',
    WEM_HOT_PATCH_HELP: 'Enter the File Hash you received by email to import the hot patch. Click Validate to perform a security validation.',
    WEM_FILE_HASH_COLON: 'File Hash:',
    WEM_HOT_PATCH_CREATION_ERROR: 'The security validation failed so the import from FileShare could not be initiated.',
    WEM_FILE_HASH_MAX_LENGTH: 'The new Name can not be more than 64 characters long.',
    WEM_SYNC_HOT_PATCH_SUCCEEDED: 'Successfully completed the security validation and initiated the import from FileShare.',
    WEM_LOCATIONS: 'Locations',
    WEM_LOCATION: 'Location',
    CREATE_FILESHARE_SUCCEEDED: 'Successfully added the FileShare.',
    WEM_NAME: 'Name',
    WEM_NAME_COLON: 'Name:',
    WEM_PATH: 'Path',
    WEM_PATH_COLON: 'Path:',
    WEM_TYPE: 'Type',
    WEM_TYPE_COLON: 'Type:',
    WEM_DOMAIN_COLON: 'Domain:',
    WEM_USERNAME_COLON: 'Username:',
    WEM_USERNAME_PLACEHOLDER: 'Username',
    WEM_PASSWORD_PLACEHOLDER: 'Password',
    WEM_PASSWORD_COLON: 'Password:',
    WEM_AVMANAGER: 'AV Manager',
    WEM_REGISTRATION_SUCCEEDED: 'Successfully registered AV Manager {0}.',
    WEM_UPDATED_SUCCEEDED: 'Successfully updated AV Manager {0}.',
    WEM_NEW_AVMANAGER: 'New AV Manager',
    WEM_EDIT_AVMANAGER: 'Edit AV Manager',
    WEM_AV_MANAGER_NAME_HELP: 'Type a friendly name of the new AV Manager to be used within the system.',
    WEM_AV_MANAGER_PATH_HELP: 'Enter the URL for the App Volumes Manager. It should in the format ip:port.',
    WEM_AV_MANAGER_VC_HELP: 'Select one or multiple vCenters you would like this AV Manager to communicate with.',
    WEM_EDIT_FILE_SHARE: 'Edit File Share',
    WEM_APPVOLUME: 'App Volumes',
    WEM_MIRAGE: 'Mirage',
    WEM_REQUIRED: 'Required',
    WEM_SERVICE_URL: 'Service URL',
    WEM_CREATE_FILESHARE_SUCCEEDED: 'Successfully added FileShare {0}.',
    WEM_CREATE_AGENT_FILESHARE_SUCCEEDED: 'The FileShare for Agent update has been added successfully.',
    WEM_CREATE_AGENT_FILESHARE_INFO: 'The system is scanning for updates. Check back here at a later time to view your updates.',
    WEM_SYNC_APPSHARE_SUCCEEDED: 'Successfully initiated import from FileShare {0}.',
    WEM_SYNC_WRITABLE_SUCCEEDED: 'Successfully initiated syncing of writable volumes.',
    WEM_EDIT_APPSHARE_SUCCEEDED: 'Successfully updated FileShare {0}.',
    WEM_DELETE_SUCCEEDED: 'AV Manager {0} has been deleted successfully.',
    WEM_DELETE_SERVICE_HEADER: 'Are you sure you want to remove this AV Manager?',
    WEM_DELETE_SERVICE_WARNING: 'This action will permanently remove the AV Manager {0}. Deleting this AV Manager is not recommended unless it is not being used.',
    WEM_DELETE_APPSHARE_HEADER: 'Are you sure you want to remove this FileShare?',
    WEM_DELETE_APPSHARE_WARNING: 'This action will permanently remove the FileShare {0}.It is recommended not to remove the FileShare, unless it is not being used anywhere.',
    WEM_DELETE_APPLICATION_SHARE_WARNING: 'Removing this FileShare will stop importing any new application files from this location. However, applications already imported from this location will not be impacted.',
    WEM_DELETE_APPSHARE_SUCCEEDED: 'FileShare {0} has been removed successfully.',
    WEM_UPDATE: 'Update',
    WEM_FILESHARE_PATTERN_INVALID: 'FileShare path must start with \'\\\\\' or should be a valid path.',
    WEM_FIX_IT: 'Fix It',
    WEM_AV_MANAGER: 'AV Manager',
    WEM_VCENTER: 'vCenter',
    WEM_FILE_SHARE: 'File Share',
    WEM_APP_SHARE: 'File Share',
    WEM_UEM_SHARE: 'UEM Share',
    WEM_NEW_VCENTER: 'New vCenter',
    WEM_EDIT_VCENTER: 'Edit: {0}',
    WEM_HOSTNAME_COLON: 'Hostname:',
    WEM_VC_USERNAME_COLON: 'vCenter Username:',
    WEM_VC_PASSWORD_COLON: 'vCenter Password:',
    WEM_ESX_USERNAME_COLON: 'ESX Username:',
    WEM_ESX_PASSWORD_COLON: 'ESX Password:',
    WEM_APPSTACK_DATASTORE_PREFIX_COLON: 'Appstack Datastore Prefix:',
    WEM_WRITABLE_DATASTORE_PREFIX_COLON: 'Writable Datastore Prefix:',
    WEM_HOSTNAME: 'Hostname',
    WEM_AV_MANAGERS: 'AV Managers',
    WEM_APPSTACK_PREFIX: 'Appstack Prefix',
    WEM_WRITABLE_PREFIX: 'Writable Prefix',
    WEM_AV_MANAGERS_COLON: 'AV Managers:',
    WEM_ADD_VC_SUCCEEDED: 'Successfully added vCenter.',
    WEM_EDIT_VC_SUCCEEDED: 'Successfully updated vCenter.',
    WEM_REMOVE_VC_SUCCEEDED: 'vCenter has been removed successfully.',
    WEM_REMOVE_VC_MSG: 'Are you sure you want to remove this vCenter?',
    WEM_REMOVE_VC_DESC: 'Removing this vCenter will remove all FileShare locations using this vCenter.Removing this vCenter is not recommended unless it is not being used.',
    WEM_VCENTER_CAPTION: '{0} vCenter',
    WEM_VCENTERS_CAPTION: '{0} vCenters',
    WEM_FILESHARE_CAPTION: '{0} FileShare',
    WEM_FILESHARES_CAPTION: '{0} FileShares',
    WEM_INFRASTRUCTURE: 'Infrastructure',
    WEM_NODE: 'Node',
    WEM_EDIT_NODE: 'Edit : {0}',
    WEM_DESCRIPTION_COLON: 'Description:',
    WEM_HARDWARE_DESCRIPTION: 'Hardware Description',
    WEM_MANAGEMENT: 'Management',
    WEM_DESKTOP: 'Desktop',
    WEM_IP_RANGE_MIN_COLON: 'IP Range Min:',
    WEM_IP_RANGE_MAX_COLON: 'IP Range Max:',
    WEM_DESKTOP_GATEWAY_COLON: 'Desktop Network Gateway:',
    WEM_DESKTOP_SUBNET_MASK_COLON: 'Desktop Network Subnet Mask:',
    WEM_EDIT_NODE_SUCCEEDED: 'Edit successful.',
    WEM_EDIT_NODE_FAILED: 'Failed to save your changes, please try again.',
    WEM_APPLIANCE: 'Appliance',
    WEM_FQDN: 'FQDN',
    WEM_TENANT_IP: 'Tenant Appliance IP Address',
    WEM_READY: 'Ready',
    WEM_APP_DS_PREFIX_MAX_LENGTH: 'The AppStack Datastore Prefix cannot be more than 50 characters long.',
    WEM_VC_NAME_MAX_LENGTH: 'The vCenter Name cannot be more than 100 characters long.',
    WEM_PRIMARY_COLON: 'Primary :',
    WEM_SECONDARY_COLON: 'Secondary :',
    WEM_FLOAT_COLON: 'Float :',
    WEM_SMART_NODE_SUMMARY_COLON: 'Horizon Air Hybrid:',
    WEM_TOTAL_ALLOCATED_DESKTOP: 'Total Allocated Desktops:',
    WEM_AVAILABLE_DESKTOP_CAPACITY: 'Available Desktop Capacity:',
    WEM_AVAILABLE_DISK_SPACE_CAPACITY: 'Available Disk space Capacity:',
    WEM_LOW_CAPACITY_WARNING: 'Capacity is running low.',
    WEM_NO_OF_ACTIVE_SESSIONS: 'No. of Active Sessions:',
    WEM_VERSION_NO: 'Software Version:',
    WEM_SMART_NODE_UPGRADE_SCHEDULE_TZ: '(Update to v{0} is Scheduled at {1} {2})',
    WEM_SMART_NODE_UPGRADE_SCHEDULE: '(Update to v{0} is Scheduled at {1})',
    WEM_ALLOCATED_DESKTOP_MODEL: 'Allocated Desktop Model',
    WEM_ALLOCATED: 'Allocated',
    WEM_NO_VC_MESSAGE: 'Currently there is not a vCenter registered. At least one vCenter and AV Manager are required to add an App FileShare. Register a new vCenter by clicking on the New button.',
    WEM_ADD_VC_DESC: 'Enter information into the fields below so you can save your new vCenter in the system.',
    WEM_EDIT_VC_DESC: 'Edit the desired vCenter information below and click the Save button.',
    WEM_VC_NAME_HELP_TEXT: 'Type a friendly name of the new vCenter to be used within the system.',
    WEM_VC_HOSTNAME_HELP_TEXT: 'Provide the hostname or IP address of the vCenter.',
    WEM_VC_ESX_UNAME_HELP_TEXT: 'Enter the ESX Username. It is a required field for those that use VMDK AppStacks or other VMware Infrastructure Management.',
    WEM_VC_ESX_PWORD_HELP_TEXT: 'Enter the ESX Password. It is a required field for those that use VMDK appstacks or other VMware Infrastructure Management.',
    WEM_VC_APPSTACK_DS_HELP_TEXT: 'Enter prefix or regular expressions for datastores where applications should be hosted from. If not specified, any datastore will be used for saving the appstack.',
    WEM_VC_WVOL_HELP_TEXT: 'Turning on writable volume allows users to install their own apps or persist app profiles.',
    WEM_VC_WRITABLE_DATASTORE_PREFIX: 'Enter prefix or regular expressions for datastores where writable volumes will be hosted from.',
    WEM_VC_AV_HELP_TEXT: 'Select one or multiple AV Managers you would like this vCenter to pair with.',
    WEM_NO_AV_DESC: 'Currently there is not an AV Manager registered. At least one AV Manager and vCenter is required to add an App FileShare. Click the new button to register a new AV Manager.',
    WEM_NEW_AV_DESC: 'Enter information into the fields below so you can save your new AV Manager in the system.',
    WEM_NO_FS_DESC: 'Currently there is not a FileShare registered. At least one AV Manager and vCenter is required to add an Application FileShare, but not Customization FileShare. Customization FileShare allows the system to deliver Customization entities to users. Click new to register a new Application or Customization FileShare.',
    WEM_NEW_FS_DESC: 'Add an existing Customization or Application FileShare for the system to utilize. Customization FileShare is used to store configuration of user environment settings such as printers, shortcuts, etc. App FileShare is the location where the customer had uploaded their AppStacks that were generated using the AppCapture tool. The App Volumes platform will scan this file share for importing applications to the vCenter datastores that the FileShare is configured to.  Click the Save button to connect Astro to the FileShare and start importing. Click the Save button to connect Astro to the FileShare and start importing.',
    WEM_FS_NAME_DESC: 'Type a friendly name of the new FileShare to be used within the system.',
    WEM_FS_TYPE_DESC: 'Select the FileShare type to be Application or Customization. Use Customization FileShare for importing User Environment Management data. Use Application FileShare for importing applications.',
    WEM_FS_PATH_DESC: 'Type the path of the host system to retrieve information from.',
    WEM_FS_VC_DESC: 'Select one or multiple vCenters you would like Apps found on this FileShare to be copied to. We recommend using all vCenters.',
    WEM_VROPS_DESC: 'The App Volumes monitoring dashboard leverages VMware vRealize Operations Manager to provide real-time systems health and user experience performance data. You may use it directly or use an API to get the data to display on the dashboard. Enter information in the fields below to connect to vROps.',
    WEM_VROPS_UNAME_DESC: 'Enter the administrator password for the vRealize Operations Manager',
    WEM_VROPS_PATH_DESC: 'Enter your vRealize Operations Manager in the format of https://server.com/',
    WEM_CONFIGURE_VROPS: 'Configure vROps',
    WEM_DATA_CENTERS_USAGES: 'Data Center Usage:',
    WEM_ACTIVE_SESSIONS: '{0} active sessions',
    WEM_ACTIVE_SESSION: '{0} active session',
    WEM_HEALTH: 'Health',
    WEM_REMOVE_CUSTSHARE_HEADING: 'Are you sure you want to remove this Customization FileShare?',
    WEM_REMOVE_CUSTSHARE_CONFIRMATION: 'Removing this FileShare will disable Customization capabilities. Without Customization FileShare, the system cannot deliver Customization entities to users.',
    WEM_SMART_NODE_UPGRADE_AVAILABLE: '(New update available v{0})',
    WEM_RELEASE_NOTES: 'Release Notes v{0}',
    WEM_APPSTACKS: 'AppStacks',
    WEM_WRITABLE_VOLUMES: 'Writable Volumes',
    WEM_NO_WRITABLE_VOLUMES_PRESENT: 'No writable volumes were found.',
    WEM_DELETE_WRITABLE_VOLUMES_SUCCEEDED: 'Writable volumes are being deleted. Please sync after a few seconds.',
    WEM_WRITABLE_VOLUMES_DELETE_FAILED: 'Failed to delete following writable volumes:',
    WEM_WRITABLE_VOLUME_DELETE_ERROR: 'There was an error in deleting the writable volume(s). Please try again.',
    WEM_APPSTACKS_DELETE_FAILED: 'Failed to delete following Appstacks:',
    WEM_APPSTACKS_DELETE_ERROR: 'There was an error in deleting the Appstack(s). Please try again.',
    WEM_DELETE_WRITABLE_VOLUME_CONFIRMATION: 'Are you sure you want to delete selected writable volume(s)?',
    WEM_DELETE_WRITABLE_VOLUME_CONFIRMATION_DETAILS: 'This action will remove the writable volume(s).',
    WEM_WRITABLE_DISABLED: 'Writable volume disabled successfully',
    WEM_WRITABLE_ENABLED: 'Writable volume enabled successfully',
    WEM_DESTINATION_LOCATION: 'Destination Location:',
    WEM_DESTINATION_NODE: 'Destination Pod:',
    WEM_NAME_COLON_HELP: 'Enter the name of the File Share.',
    WEM_DOMAIN_COLON_HELP: 'Select the domain for the File Share.',
    WEM_USERNAME_COLON_HELP: 'Enter the admin user name for the File Share.',
    WEM_PASSWORD_COLON_HELP: 'Enter the admin password for the File Share.',
    WEM_TYPE_COLON_HELP: 'Select the type of File Share this is based on what the File Share contains. Agents File Shares are used only to import agent software updates. Applications/Images File Shares are used to import AppStacks. VM File Shares are used to import desktops.',
    WEM_FILE_SHARE_LOCATION_HELP: 'Enter the network path to the File Share.',
    WEM_DATA_PODS_HELP: 'Enter which of the multiple pods on the tenant to use.',
    WEM_DESTINATION_LOCATION_HELP: 'Select a location to get a refined list of pods.',
    WEM_DESTINATION_NODE_HELP: 'Select a pod for the File Share.',
    /* Workspace One Intelligence Strings */
    WORKSPACE_ONE_INTELLIGENCE_INTEGRATION: 'Workspace ONE Intelligence Integration',
    WORKSPACE_ONE_INTELLIGENCE_INTEGRATION_INFO: 'Do you authorize sending data from Horizon Cloud to Workspace One Intelligence?',
    WORKSPACE_ONE_INTELLIGENCE_INTEGRATION_ERROR: 'We are unable to complete service activation for the following reason:',
    WORKSPACE_ONE_INTELLIGENCE_CMS_ENABLED: 'Cloud Monitoring Service is enabled.',
    WORKSPACE_ONE_INTELLIGENCE_CMS_DISABLED: 'Cloud Monitoring Service is disabled.',
    WORKSPACE_ONE_INTELLIGENCE_CMS_SESSION_DATA_ENABLED: 'Cloud Monitoring Service - Session Data is enabled.',
    WORKSPACE_ONE_INTELLIGENCE_CMS_SESSION_DATA_DISABLED: 'Cloud Monitoring Service - Session Data is disabled.',
    WORKSPACE_ONE_INTELLIGENCE_UNKNOWN_ERROR: 'Unable to complete service activation due to service dependencies at this time. Try again in a few minutes. Contact VMware Technical Support if problem persists.',
    WORKSPACE_ONE_INTELLIGENCE_PERMISSION_ERROR: 'A user with Super Administrator role is required to authorize this service.',
    WORKSPACE_ONE_INTELLIGENCE_REGION_MISMATCH: 'The Workspace One Intelligence tenant is in region {0}, and Horizon Cloud tenant is in region {1}. Click ACCEPT if this is correct for your organization and you authorize sending data to a different region. Click DECLINE and contact VMware support if you believe this is an error.',
    WORKSPACE_ONE_INTELLIGENCE_ONBOARD_SUCCESS: 'Workspace One Intelligence service activation completed successfully.',
    WORKSPACE_ONE_INTELLIGENCE_ONBOARD_FAIL: 'Authorization has failed: {0}. Please try again or contact VMware support if problem persists.',
    CMS_REGION_US_EAST_N_VIRGINIA: 'US East (N. Virginia)',
    CMS_REGION_EU_FRANKFURT: 'Europe (Frankfurt)',
    CMS_REGION_EU_LONDON: 'Europe (London)',
    CMS_REGION_AP_TOKYO: 'Asia Pacific (Tokyo)',
    CMS_REGION_AP_SYDNEY: 'Asia Pacific (Sydney)',
    WORKSPACE_ONE_INTELLIGENCE_REGION_AP_TOKYO: 'Asia Pacific (Tokyo)',
    WORKSPACE_ONE_INTELLIGENCE_REGION_AP_SYDNEY: 'Asia Pacific (Sydney)',
    WORKSPACE_ONE_INTELLIGENCE_REGION_CANADA_CENTRAL: 'Canada (Central)',
    WORKSPACE_ONE_INTELLIGENCE_REGION_EU_FRANKFURT: 'Europe (Frankfurt)',
    WORKSPACE_ONE_INTELLIGENCE_REGION_EU_IRELAND: 'Europe (Ireland)',
    WORKSPACE_ONE_INTELLIGENCE_REGION_US_WEST_OREGON: 'US West (Oregon)',
    WORKSPACE_ONE_INTELLIGENCE_REGION_EU_LONDON: 'Europe (London)',
    /*Below source key:value form ng7 assets en.json file*/
    PRODUCT_TITLE: 'Horizon Cloud',
    BUTTONS_LOGOUT: 'Logout',
    DOMAIN_SECURITY: 'Domain Security',
    DOMAIN_SECURITY_SETTINGS: 'Domain Security Settings',
    DOMAIN_SECURITY_SETTINGS_HELP_TEXT: 'Select how to display domain information on the client login page. Changes to these settings can take up to 5 minutes to take effect.',
    SECURE_DOMAIN_LIST_LABEL: 'Show *DefaultDomain* Only:',
    HIDE_DOMAIN_LIST_LABEL: 'Hide Domain Field:',
    HIDE_DOMAIN_LIST_HELP_TEXT: 'Hide the domain field on the client login page',
    NEW_APPLICATION_PACKAGE: 'New Application Package',
    DESKTOP_CREATION_IN_PROGRESS: 'Desktop creation in progress',
    READY_TO_CAPTURE: 'Desktop ready for application capture',
    CAPTURE_IN_PROGRESS: 'Application capture in progress',
    LOCATION_APP_CAPTURE_HELP: 'Select a location to get a refined list of nodes.',
    NODE_APP_CAPTURE_HELP: 'Select a node for the application package.',
    IMAGE_APP_CAPTURE_HELP: 'Select the image that will be used to create a desktop for the application package.',
    START_CAPTURE: 'Start Capture',
    START_CAPTURE_SUCCESS: 'Capture Initiated Successfully',
    CAPTURE_SESSION_IN_PROGRESS: 'An application package capture is already in progress. Please wait until the capture is complete and try again.',
    START_CAPTURE_FAILURE: 'Some problem occured while initiating the capture',
    CANCEL_CAPTURE: 'Cancel Capture',
    CAPTURE: 'Capture',
    APPLICATION_PATTERN_INVALID: 'Application name must contain only letters [a-Z], ' +
        'dashes [-], and numbers. It cannot start with non-alphabetic characters.',
    CANCEL_CAPTURE_MSG: 'Are you sure you want to cancel the application package capture?',
    CANCEL_CAPTURE_DESC: 'This action will permanently delete the package, and you will have to create a new package.',
    CANCEL_CAPTURE_SUCCESS: 'Cancel Capture Initiated Successfully',
    CANCEL_CAPTURE_FAILURE: 'Some problem occured while intitating the cancel capture.',
    WEM_APP_CAPTURE_IMAGES_NOT_AVAILABLE: 'No Images Found',
    WEM_APP_CAPTURE_IMAGES_NOT_AVAILABLE_DESC: 'To create an application package, an image is required, and the App Volumes agent must be installed on the image. The image will run on the desktop used to create the package.Go to Inventory > ',
    WEM_APP_CAPTURE_IMAGES_NOT_AVAILABLE_DESC_NOTE: ' to create an image.',
    WEM_APP_CAPTURE_IMAGES_WITH_AV_AGENT_NOT_AVAILABLE: 'No Images with App Volumes Agent Were Found',
    WEM_APP_CAPTURE_IMAGES_WITH_AV_AGENT_NOT_AVAILABLE_DESC_NOTE: ' and install the agent on the imported VM you want to create the image from. Then, convert the imported VM to an image.',
    WEM_APP_CAPTURE_IMAGES_WITH_AV_AGENT_NOT_AVAILABLE_DESC: 'To create an application package, the App Volumes agent must be installed on the image. Go to Inventory > ',
    WEM_APP_CAPTURE_PODS_WITH_UAG_NOT_AVAILABLE: 'Unified Access Gateway Not Enabled',
    WEM_APP_CAPTURE_PODS_WITH_UAG_NOT_AVAILABLE_DESC_NOTE: ' select the pod, and enable gateway in Gateway Settings.',
    WEM_APP_CAPTURE_PODS_WITH_UAG_NOT_AVAILABLE_DESC: 'To create and store the application package, gateway must be enabled on the pod(s).Go to Settings > ',
    WEM_APP_CAPTURE_APPVOLUMES_NOT_ENABLED: 'App Volume is not enabled',
    WEM_APP_CAPTURE_APPVOLUMES_NOT_ENABLED_DESC: 'Application package cannot be created because App Volume is not enabled.',
    WEM_APP_CAPTURE_APPVOLUMES_NOT_ENABLED_DESC_NOTE: 'Please contact your service provider to enable the App Volume capability.',
    WEM_APP_CAPTURE_APPVOLUMES_NOT_CONFIGURED: 'App Volume is not configured',
    WEM_APP_CAPTURE_APPVOLUMES_NOT_CONFIGURED_DESC: 'Application package cannot be created because App Volume is not configured.',
    WEM_APP_CAPTURE_APPVOLUMES_NOT_CONFIGURED_DESC_NOTE: 'Please contact your service provider to configure the App Volume.',
    SECURE_DOMAIN_LIST_HELP_TEXT: 'Hide all actual domain names on the client login page and show the name *DefaultDomain* instead.',
    LOGIN_WELCOME_PRODUCT_NAME: '<h3 class="welcome">Welcome to</h3><span>VMware Horizon Cloud</span>',
    GATEWAY_ID: 'Gateway ID:',
    MANAGEMENT_IP: 'Management IP:',
    SHOW_APPLIANCE_DETAILS: 'Show Appliance Details',
    HIDE_APPLIANCE_DETAILS: 'Hide Appliance Details',
    STANDARD_CAPACITY_COLON: 'Standard Capacity:',
    ALL_POSSIBLE_FS_TYPES_EXIST: 'Only one VM file share type and one Agent file share type are allowed. ' +
        'To create a new VM or Agent file share type, first remove an existing file share.',
    IMAGES_PROVISIONED_IMPORTED_AND_UTILITY_VMS: 'Images, Provisioned, Imported and Utility VMs',
    FARM_UPDATE_REPRISTINING_INVALID_TYPE: 'The RDSH Farm could not be updated. RePristining Type is invalid.',
    IMPORT_VM_DESKTOP_MODEL_HELP_TEXT: 'Select a standard desktop model configuration from the list of available options.',
    NAME_ALREADY_EXIST: 'This name already exist.',
    'tzid-america-argentina-buenos-aires': 'America/Buenos Aires (UTC-03:00)',
    'tzid-america-argentina-catamarca': 'America/Catamarca (UTC-03:00)',
    'tzid-america-argentina-comodrivadavia': 'America/Argentina/ComodRivadavia (UTC-03:00)',
    'tzid-america-argentina-cordoba': 'America/Cordoba (UTC-03:00)',
    'tzid-america-argentina-jujuy': 'America/Jujuy (UTC-03:00)',
    'tzid-america-argentina-la-rioja': 'America/Argentina/La Rioja (UTC-03:00)',
    'tzid-america-argentina-mendoza': 'America/Mendoza (UTC-03:00)',
    'tzid-america-argentina-rio-gallegos': 'America/Argentina/Rio Gallegos (UTC-03:00)',
    'tzid-america-argentina-salta': 'America/Argentina/Salta (UTC-03:00)',
    'tzid-america-argentina-san-juan': 'America/Argentina/San Juan (UTC-03:00)',
    'tzid-america-argentina-san-luis': 'America/Argentina/San Luis (UTC-03:00)',
    'tzid-america-argentina-tucuman': 'America/Argentina/Tucuman (UTC-03:00)',
    'tzid-america-argentina-ushuaia': 'America/Argentina/Ushuaia (UTC-03:00)',
    'tzid-america-indiana-indianapolis': 'America/Indianapolis (UTC-05:00)',
    'tzid-america-indiana-knox': 'America/Indiana/Knox (UTC-06:00)',
    'tzid-america-indiana-marengo': 'America/Indiana/Marengo (UTC-05:00)',
    'tzid-america-indiana-petersburg': 'America/Indiana/Petersburg (UTC-05:00)',
    'tzid-america-indiana-tell-city': 'America/Indiana/Tell City (UTC-06:00)',
    'tzid-america-indiana-vevay': 'America/Indiana/Vevay (UTC-05:00)',
    'tzid-america-indiana-vincennes': 'America/Indiana/Vincennes (UTC-05:00)',
    'tzid-america-indiana-winamac': 'America/Indiana/Winamac (UTC-05:00)',
    'tzid-america-kentucky-louisville': 'America/Louisville (UTC-05:00)',
    'tzid-america-kentucky-monticello': 'America/Kentucky/Monticello (UTC-05:00)',
    'tzid-america-north-dakota-beulah': 'America/North Dakota/Beulah (UTC-06:00)',
    'tzid-america-north-dakota-center': 'America/North Dakota/Center (UTC-06:00)',
    'tzid-america-north-dakota-new-salem': 'America/North Dakota/New Salem (UTC-06:00)',
    'tzid-etc-gmt-plus-0': 'Etc/GMT+0 (UTC+00:00)',
    'tzid-etc-gmt-plus-1': 'Etc/GMT+1 (UTC-01:00)',
    'tzid-etc-gmt-plus-10': 'Etc/GMT+10 (UTC-10:00)',
    'tzid-etc-gmt-plus-11': 'Etc/GMT+11 (UTC-11:00)',
    'tzid-etc-gmt-plus-12': 'Etc/GMT+12 (UTC-12:00)',
    'tzid-etc-gmt-plus-2': 'Etc/GMT+2 (UTC-02:00)',
    'tzid-etc-gmt-plus-3': 'Etc/GMT+3 (UTC-03:00)',
    'tzid-etc-gmt-plus-4': 'Etc/GMT+4 (UTC-04:00)',
    'tzid-etc-gmt-plus-5': 'Etc/GMT+5 (UTC-05:00)',
    'tzid-etc-gmt-plus-6': 'Etc/GMT+6 (UTC-06:00)',
    'tzid-etc-gmt-plus-7': 'Etc/GMT+7 (UTC-07:00)',
    'tzid-etc-gmt-plus-8': 'Etc/GMT+8 (UTC-08:00)',
    'tzid-etc-gmt-plus-9': 'Etc/GMT+9 (UTC-09:00)',
    VMWARE_CLOUD_ON_AWS_MANUAL_DEPLOY_INFO: 'To add VMware Cloud on AWS capacity, ' +
        '<a href=\'http://www.vmware.com/go/download-horizoncloudconnector\' target=\'_blank\' rel=\'noopener\'>download</a> ' +
        'and install the Horizon Cloud Connector. The Cloud Connector is required to connect a pod with Horizon Cloud.',
    HELPDESK_END_PROCESS_MESSAGE_FAILURE: 'Error occurs while end process {0}.',
    HELPDESK_END_PROCESS_MESSAGE_SUCCESS: 'Successfully killed process {0}.',
    HLCM_VMC_BACKEND_NETWORK_IP_POOL: 'Backend Network IP Pool:',
    HLCM_VMC_CONFIG_DEPLOYER: 'Configure Deployer',
    HLCM_VMC_MANUAL_DEPLOYER_DOWNLOAD_OVA: '1. Download the deployer OVA file',
    DOWNLOAD_OVA: 'Download OVA',
    HLCM_VMC_MANUAL_DEPLOYER_CONNECTION_STATUS: '3. Waiting for deployer',
    COPY_KEY: 'Copy key',
    HLCM_VMC_GET_KEY: 'Pairing Key for Deployer',
    /* Upgrade errors used by the upgrade service */
    ENUM_UPGRADE_ERROR_AZURE_FAMILY_LIMIT_INSUFFICIENT: 'Insufficient size for family {0} for pod {1}',
    ENUM_UPGRADE_ERROR_AZURE_INSUFFICIENT_CORES: 'Insufficient cores for pod {0}',
    ENUM_UPGRADE_ERROR_AZURE_INSUFFICIENT_VMS: 'Insufficient VMs for pod {0}',
    ENUM_UPGRADE_ERROR_AZURE_POD_OFFLINE: 'Azure pod {0} is offline',
    ENUM_UPGRADE_ERROR_AZURE_POD_UNKNOWN_ERROR: 'An unknown error has occurred for pod {0}',
    ENUM_UPGRADE_ERROR_AZURE_SKU_UNAVAILABLE: 'SKU unavailable for pod {0}',
    ENUM_UPGRADE_ERROR_CAPACITY_VALIDATION_ERROR: 'Insufficient capacity to deploy jumpbox for pod {0}',
    ENUM_UPGRADE_ERROR_FINALIZE_TIMEOUT: 'Finalize step has timed out for pod {0}',
    ENUM_UPGRADE_ERROR_JUMPBOX_CREATION_ERROR: 'Failed to deploy jumpbox for pod {0}',
    ENUM_UPGRADE_ERROR_MIGRATE_ERROR: 'Error during migration for pod {0}',
    ENUM_UPGRADE_ERROR_NIC_CREATE_ERROR: 'Error creating NIC for pod {0}',
    ENUM_UPGRADE_ERROR_NODE_UNKNOWN_ERROR: 'Unknown error while deploying pod {0}',
    ENUM_UPGRADE_ERROR_NODE_VM_CREATE_ERROR: 'Error creating pod VM for pod {0}',
    ENUM_UPGRADE_ERROR_PREPARE_TIMEOUT: 'Prepare step has timed out for pod {0}',
    ENUM_UPGRADE_ERROR_UAG_UNKNOWN_ERROR: 'Unknown error deploying gateway for pod {0}',
    ENUM_UPGRADE_ERROR_UAG_VM_CREATE_ERROR: 'Error creating gateway VM for pod {0}',
    /* Upgrade error action types used by the upgrade service */
    ENUM_UPGRADE_ERROR_ACTION_CUSTOMER_ACTIONABLE: 'Customer actionable',
    ENUM_UPGRADE_ERROR_ACTION_OPS_ACTIONABLE: 'Ops actionable',
    ENUM_UPGRADE_ERROR_ACTION_RETRYABLE: 'Retryable',
    CONFIG_VM_SIZES: 'VM Types & Sizes',
    VALIDATE_VM_SIZES: 'Validate VM Sizes',
    VALIDATE_VM_SIZES_DESC: 'Validates the seleted Azure model sizes for specific region and subscription.',
    CONFIG_VM_SIZES_DESC: 'Determine which Azure model sizes are allowed and customize model display names.',
    CONFIG_VM_SIZES_SUBTITLE: 'Optionally select which VM types and sizes to allow, add sizes to favorites, or customize how VM names are displayed.',
    FAVORITE: 'Favorite',
    N_SERIES: '{0} Series',
    CONFIG_VM_SIZES_UPDATE_SUCCESS: 'Successfully updated selected VM sizes.',
    CONFIG_VM_SIZES_UPDATE_ERROR: 'Could not update selected VM sizes. Please try again.',
    RECOMMENDED: 'Recommended',
    CONFIG_PATTERN_INVALID: 'Tags need to start with a letter [a-Z] and can contain only letters [a-Z], dashes [-], spaces, and numbers. Multiple tags can be added as a comma-separated list.',
    VCPUS: '{0} vCPU',
    DISK_CAPACITY: '{0} G Disk',
    VM_CONFIG_DESC: '{0}, {1}, {2}',
    VM_SIZES: 'VM Types & Sizes',
    VM_SIZES_DISABLED_SUB_TITLE_MSG:
        'Please contact your service provider to enable VM Sizes.',
    MODELS_COLON: 'Models:',
    FILTER_MODELS: 'Filter Models:',
    ADD_FILTER: 'Add',
    REMOVE_FILTER: 'Remove',
    EQUAL_FILTER: 'equals',
    FROM_FILTER: 'from',
    TO_FILTER: 'to',
    VMS_RECOMMENDED :'VMware Recommended',
    GPU_HIGH_PERF: 'GPU and High Performance',
    FAVORITES: 'Favorites',
    SERIES: 'Series',
    NOT_SUBSCRIBED: 'Not Subscribed',
    MICROSOFT_AZURE_SUBSCRIPTION_COLON: 'Microsoft Azure Subscription:',
    MICROSOFT_AZURE_REGION_COLON: 'Microsoft Azure Region:',
    GATEWAY_INFO_ERROR_DESC: 'Could not retrieve appliance info for : {0}',
    FILTER_MODEL_HELP_TEXT: 'Filter available VM models by series, type, tag, CPU or Memory.',
    MODEL_VM_CONFIG_HELP: 'Select the Azure VM size for the {0}. Some VM sizes are not available in all regions.',
    VALID_CPU_CORES_REQUIRED: 'A valid number of CPUs is required.',
    VALID_MEMORY_REQUIRED: 'A valid number in GB is required.',
    TAG: 'Tag',
    TAGS: 'Tags',
    TAGS_NUMBER : '+{0}',
    VM_SIZES_NOT_CONFIG_REGION: 'VM Types & Sizes are not configured for this region. Contact VMware Support for more information.',
    VM_SIZES_LIST_ERROR: 'Unable to fetch VM Types & Sizes for this region. Please contact your Horizon representative for more information.',
    NUM_USERS: '{0} Users',
    NUM_VMS: '{0} VMs',
    SEARCH_HERE: 'Search here',
    BROKER: 'Broker',
    BROKERING: 'Brokering',
    AZURE_BROKER: 'Azure Broker',
    CLOUD_BROKER: 'Cloud Broker',
    CLOUD_BROKER_TITLE: 'Universal Broker',
    BROKER_SELECTION_SUCCESS: 'Successfully saved Broker preference',
    BROKER_SELECTION_FAILED: 'Unable to save the Broker preference',
    INITIATED_BROKER_ENABLE: 'Initiated enabling of Horizon Universal Broker',
    BROKER_ENABLE_SUCCESS: 'Successfully enabled Horizon Universal Broker',
    BROKER_ENABLE_FAILED: 'Unable to enable Horizon Universal Broker',
    BROKER_CONFIG_UPDATE_SUCCESS: 'Successfully updated Horizon Universal Broker configuration',
    VIEW_BROKER: 'View Broker',
    CLOUD_BROKER_ENABLEMENT_ERROR: 'Cloud broker enablement failed, please contact VMware customer support team.',
    VIEW_BROKERING_DESC: 'Go To Flex Console To Edit',
    VIEW_BROKERING_LINK: 'Go To Flex Console To Edit',
    MULTIMEDIA_REDIRECTION_COLON: 'Multimedia Redirection',
    USB_ACCESS_COLON: 'USB Access',
    CLIENT_CREDENTIAL_CLEAN_UP_COLON: 'Client Credential Cleanup',
    IMAGE_MANAGEMENT_SETTINGS: 'Image Management Settings',
    IMAGE_MANAGEMENT_SETTINGS_HELP_TEXT: 'Lists the image management settings for VMware SDDC. Click Edit to change these settings.',
    EDIT_IMAGE_MANAGEMENT_SETTINGS_HELP_TEXT: 'Enter settings to optimize the image replication process.',
    MAX_CONCURRENT_IMAGE_REPLICATION_COLON: 'Image Replication Maximum: ',
    MAX_CONCURRENT_IMAGE_REPLICATION_HELP_TEXT: 'Enter the maximum number of images that can be concurrently replicated at a given time. The default is 3.',
    UEM_NAV_TITLE: 'User Environment',
    AZURE_VM_SIZE_TAG_RECOMMENDED: 'VMware Recommended',
    MANAGEMENT_SUBNET_WITH_SQL_SERVICE_MSG: 'Select a SQL service endpoint-enabled subnet',
    MANAGEMENT_SUBNET_WITH_SQL_SERVICE_INFO: 'Select a management subnet with service endpoints for Azure SQL Database enabled.',
    USER_ACTIVITY_TS: '{0} {1}',
    CLUSTER_STATUS_COLON: 'Cluster Status:',
    AGENT_VERSION_INCOMPATIBLE_ERROR: 'The selected image has an agent version incompatible with high availability. Update the agent version to 19.3.0 or later to continue.',
    BROKER_NEXT_TOOLTIP: 'Universal Broker supports both cloud and private data center workloads across Horizon deployments. ' +
        'Currently supports VMware SDDC deployments and plans to support Horizon Cloud on Microsoft Azure in the near future.',
    SITE: 'Site',
    SITE_COLON: 'Site:',
    UNABLE_TO_FETCH_SITES: 'Unable to fetch site information.',
    PERCENT_OF_LIMITS_SUMMARY: '({0}% of limits)',
    DEPLOY_GATEWAY_POD_DIFFERENT_SUBSCRIPTION: 'Use a Different Subscription for External Gateway: ',
    DEPLOY_GATEWAY_POD_DIFFERENT_VNET: 'Use a Different Virtual Network: ',
    DEPLOY_GATEWAY_POD_DIFFERENT_VNET_HELP_TEXT: 'Select to deploy the external gateway into a different Virtual Network (VNet) to utilize advanced Azure features.',
    DEPLOY_GATEWAY_POD_DIFFERENT_SUBSCRIPTION_HELP_TEXT: 'Select to deploy the external gateway into a separate subscription to utilize advanced Azure features.',
    BASIC: 'Basic',
    STANDARD: 'Standard',
    LOAD_BALANCER: 'Load Balancer',
    LOAD_BALANCER_TYPE: 'Load Balancer Type: ',
    LOAD_BALANCER_SKU_HELP_TEXT: 'Select whether to use Azure Standard Load Balancer, which provides a Microsoft SLA, or Basic Load Balancer.',
    DEPLOYMENT_STATUS_COLON: 'Deployment Status: ',
    CONNECTION_STATUS_COLON: 'Connection Status: ',
    EXTERNAL_IP_COLON: 'External IP: ',
    PUBLIC_IP_HORIZON_FQDN_COLON: 'Public IP for Horizon FQDN: ',
    PUBLIC_IP_HORIZON_FQDN_HELP_TEXT: 'Enter the public IP that is assigned to the Horizon FQDN.',
    PUBLIC_IP_COLON: 'Public IP: ',
    PRIVATE_IP_COLON: 'Private IP: ',
    NOT_APPLICABLE: 'N/A',
    EXTERNAL_GATEWAY_VIRTUAL_NETWORK_HELP_TEXT: 'Select an existing Virtual Network from the Microsoft Azure region into which the external gateway will be deployed. To create a new Virtual Network, go to the Microsoft Azure portal.',
    EXTERNAL_GATEWAY_MGMT_SUBNET_HELP_TEXT: 'Enter a subnet (in CIDR notation) for the Unified Access Gateway management subnet that must be accessible from the pod, such as 192.160.0.50/27. Minimum: /27.',
    BACKEND_SUBNET_CIDR: 'Back End Subnet (CIDR): ',
    BACKEND_SUBNET_CIDR_HELP_TEXT: 'Enter the subnet (in CIDR notation) for the Unified Access Gateway back end subnet that must be accessible to the pod, such as 192.160.1.50/27. Minimum: /27 Recommended: /22',
    BACKEND_SUBNET: 'Back End Subnet: ',
    BACKEND_SUBNET_HELP_TEXT: 'Select the subnet for the Unified Access Gateway back end subnet that must be accessible to the pod.',
    FRONTEND_SUBNET_CIDR: 'Front End Subnet (CIDR): ',
    FRONTEND_SUBNET: 'Front End Subnet: ',
    FRONTEND_SUBNET_CIDR_HELP_TEXT: 'Enter the subnet (in CIDR notation) for the Unified Access Gateway front end subnet, such as 192.160.1.50/27. Minimum: /27 Recommended: /22',
    FRONTEND_SUBNET_HELP_TEXT: 'Select the subnet for the Unified Access Gateway front end subnet.',
    CPU_HELP_TEXT: 'Select the number of CPU cores for the custom VM.',
    MEMORY_HELP_TEXT: 'Select the amount of Memory in GB for the custom VM.',
    N_PERCENT_CPU_ALLOCATED: '{0}% CPU Allocated',
    N_PERCENT_MEMORY_ALLOCATED:'{0}% Memory Allocated',
    DESKTOP_MODEL_CPU_COLON: 'Desktop Model CPU:',
    DESKTOP_MODEL_MEMORY_COLON: 'Desktop Model Memory:',
    DESKTOP_MODEL_CPU_HELP_TEXT: 'Select the number of CPU cores for the custom VM.',
    DESKTOP_MODEL_MEMORY_HELP_TEXT: 'Select the amount of Memory in GB for the custom VM.',
    DEPLOYMENT_ID: 'Deployment ID:',
    COMPUTER_OU_UPDATED_TEXT: 'The computer account for VMs created after the OU update will be created in the updated OU. The computer account for existing VMs will be moved to the updated OU after the user logs off.',
    FARM_COMPUTER_OU_UPDATED_TEXT: 'Computer accounts for new VMs will be created in the updated OU. Computer accounts for existing VMs will move to the updated OU during scheduled maintenance or after user logoff.',
    DESKTOP_ASSIGNMENT_OPTIONS: 'Desktop Assignment Options',
    ENABLE_DEDICATED_DESKTOP_ASSIGNMENT_NAME: 'Enable Dedicated Desktop Assignment Name',
    USER_LOGIN_MODE: 'User Login Mode',
    ALLOW_LOGINS: 'Allow Logins (Active)',
    DRAINING: 'Draining',
    DRAINING_UNTIL_RESTART: 'Draining Until Restart',
    PREVENT_NEW_LOGINS_AND_CONNECTION: 'Prevent New Logins and Reconnections (Disabled)',
    PREVENT_NEW_LOGINS_ONLY: 'Prevent New Logins Only (Drain)',
    PREVENT_NEW_LOGINS_DRAIN_UNTIL_RESTART: 'Prevent New Logins (Drain) Until Restart',
    USER_LOGIN_MODE_SUCCESS_MESSAGE: 'Successfully set user login mode.',
    ALLOW_LOGINS_MESSAGE: 'This action allows user logins for new connections and reconnections. Do you want to continue?',
    PREVENT_NEW_LOGINS_AND_CONNECTION_MESSAGE: 'This action prevents user logins for new connections and reconnections. Existing connections are not affected but farm capacity might be impacted. Do you want to continue?',
    USER_LOGIN_MODE_NOT_POSSIBLE_INVALID_DAAS_STATE: 'Could not set mode because Horizon Agent status must be Active, Disabled, Draining, or Draining Until Restart.',
    USER_LOGIN_MODE_UNSUPPORTED_AGENT_VERSION: 'Could not set mode because Horizon Agent version is earlier than 20.1.0. Update the Horizon Agent and try again.',
    USER_LOGIN_MODE_ERROR_MESSAGE: 'Unable to set {0} mode for a few VMs due to a registry error. Please try again or contact VMware support to resolve.',
    PREVENT_NEW_LOGINS_ONLY_MESSAGE: 'This action prevents user logins for new connections. Existing connections and reconnections are not affected but farm capacity might be impacted. Do you want to continue?',
    PREVENT_NEW_LOGINS_DRAIN_UNTIL_RESTART_MESSAGE: 'This action prevents user logins for new connections until the VM is restarted, existing connections and reconnections are allowed. Farm capacity might be impacted. After the VM is restarted, user login mode will be set to "Allow Logins." Do you want to continue?',
    DT_SERVER_LOGIN_MODE_ERROR_MESSAGE: 'An error occurred while setting Server Login Mode for selected VMs.',
    DT_POWER_SCHEDULE_MIN_VMS_EXCEED_ASSIGNMENT_MAX_VMS: 'Maximum VMs value must be greater than or equal to the largest minimum VMs value for any power management schedule for this assignment.',
    DT_POWER_SCHEDULE_MIN_VMS_EXCEED_FARM_MAX_VMS: 'Maximum VMs value must be greater than or equal to the largest minimum VMs value for any power management schedule for this farm.',
    USER_LOGIN_MODE_VM_ERROR_MESSAGE: 'Unable to set {0} mode for VMs {1} due to a registry error. Please try again or contact VMware support to resolve.',
    DESKTOP_ASSIGNMENT_OPTIONS_EDIT_HELP_TEXT: 'Display the assignment name on the assigned, dedicated desktop when an end user logs in from a Horizon Client.',
    DESKTOP_ASSIGNMENT_OPTIONS_HELP_TEXT: 'Select how to display desktop information on the Horizon Client page. Changes to these settings can take up to 5 minutes to take effect.',
    CREATE_VDI_ASSIGNMENT_INFO: 'Create a dedicated/ floating VDI desktop assignment',
    CREATE_ADD_ON_ASSIGNMENT_INFO: 'Deliver applications directly within a VDI desktop using App Volumes.',
    CREATE_REMOTE_ASSIGNMENT_INFO: 'Deliver applications on a shared session running on a server.',
    CREATE_SESSION_ASSIGNMENT_INFO: 'Create non-persistent RDSH based desktop assignment',
    NEW_FARM_APP_DISABLED_TOOLTIP: 'Only Desktops can be selected because this is the Getting Started>Desktop Assignment wizard. To select a different farm type, return to the Getting Started page, or go to the Farms page.',
    NEW_FARM_DESKTOP_DISABLED_TOOLTIP: 'Only Applications can be selected because this is the Getting Started>Application Assignment wizard. To select a different farm type, return to the Getting Started page, or go to the Farms page.',
    VGPU_PROFILE_HELP_TEXT: 'Select a profile configured for vGPU-enabled images.',
    REPLICA_COUNT_COLON: 'Replica Count:',
    GATEWAY_REPLICA_COUNT_HELP_TEXT: 'Enter the number of Unified Access Gateway replicas to deploy. Minimum: {0}. Maximum: {1}.',
    VM_MODEL_COLON: 'VM Model: ',
    GATEWAY_VM_MODEL_HELP_TEXT: 'Select a Microsoft Azure model for the Unified Access Gateway. Once saved, this cannot be edited. ',
    MASS_DELETE_PROTECTION: 'Deletion Protection',
    MASS_DELETE_DEDICATED_DESKTOP: 'Mass Delete Dedicated Desktop:',
    MASS_DELETE_DEDICATED_DESKTOP_PER_HOUR: 'Dedicated Desktops<br>(Desktops per Assignment per Hour):',
    PER_HOUR: '(per hour):',
    MAX_DELETE_ASSIGNMENT: 'Max Desktop Deletions:',
    MAX_DELETE_ASSIGNMENT_INFO: 'Define the maximum number of desktops that can be deleted for this assignment.',
    MASS_DELETE_QUOTA_COLON: 'Mass Delete Quota:',
    MASS_DELETE_PROTECTION_INFO: 'Controls the rate at which desktops can be deleted per assignment per hour.',
    DEDICATED_VDI_COLON: 'Dedicated Desktops:',
    DEDICATED_VDI_MASS_DELETE_INFO: 'Define how many desktops can be deleted per assignment per hour.',
    DELETE_PER_HOUR: '{0} deletes/hour',
    DELETE_UNLIMITED: 'Unlimited',
    DELETE_NOT_ALLOWED: 'None',
    DELETE_CUSTOM: 'Custom',
    ENABLE_DELETE_PROTECTION: 'Prevent Deletions',
    ENABLE_DELETE_PROTECTION_TITLE: 'Prevent deletions',
    ENABLE_DELETE_PROTECTION_DESC: 'This action prevents system-generated desktop deletions for this ' +
    'assignment. Users with the appropriate permissions are not impacted and can still delete desktops. ' +
    'Do you want to continue?',
    DISABLE_DELETE_PROTECTION: 'Allow Deletions',
    DISABLE_DELETE_PROTECTION_TITLE: 'Allow deletions',
    DISABLE_DELETE_PROTECTION_DESC: 'This action allows desktop deletions for this assignment as ' +
    'defined in General Settings>Deletion Protection. Do you want to continue?',
    WARNING_MODIFY_DELETE_PROTECTION_ASSIGNMENT:
    'Are you sure you want to {0} delete protection for assignment?',
    DESCRIPTION_MODIFY_DELETE_PROTECTION_ASSIGNMENT:
    'This action will change the deletion protection setting to unlimited for this assignment. ' +
    'Do you want to continue?',
    DELETE_PROTECTION_UPDATE_SUCCESSFUL: 'Deletion Protection updated successfully',
    DELETE_PROTECTED_COLON: 'Deletion Protected:',
    SOFT_DELETED_VM: 'Desktop was deleted from the data source and is unavailable. ' +
    'Go to More > Delete to delete the desktop from the Horizon Universal Console.',
    SOFT_DELETED_USER_MAPPING: 'User was deleted from the data source and is unavailable. ' +
    'Select the user and click Save to unassign them from the assignment.',
    ENABLE_SMALL_CASE: 'enable',
    DISABLE_SMALL_CASE: 'disable',
    MASS_DELETE_PROTECTION_ENABLED_INFO: '{0} is deletion protected. Select Allow Deletions to allow desktop deletions for this assignment.',
    NODE_ONLINE_NOTIFICATION_LOGOUT_LOGIN_TITLE: 'Pod(s) are now online',
    NODE_ONLINE_NOTIFICATION_LOGOUT_LOGIN_MESSAGE: 'One or more pods are now online. You will be logged out now and can log back in to access the pod(s).',
    HUB_INTEGRATION: 'Hub Integration',
    HUB_INTEGRATION_NOTICE_BROWNFIELD_NO_CONFIG_EXISTS: 'Successfully enabled Universal Broker and multi-cloud assignment capabilities. ' +
        'Now, activate Workspace ONE Access and Intelligent Hub to provide end users with identity-based single sign-on access ' +
        'to their digital workspace.',
    HUB_INTEGRATION_NOTICE_BROWNFIELD_CONFIG_EXISTS: 'Successfully transitioned to Universal Broker and multi-cloud assignments. ' +
        'To optimize end-user access and identity management, activate Workspace ONE Intelligent Hub.',
    START: 'START',
    VMWARE_SDDC_PODS: 'Horizon pods on VMware SDDC',
    SYNC_TRUE_SSO_SUCCESS: 'True SSO synced successfully.',
    SYNC_TRUE_SSO_FAILED: 'Could not sync True SSO from Horizon pods on VMware SDDC. Try again.',
    TRUESSO_NOT_CONFIGURED_FOR_ALL_VIEW_PODS: 'True SSO is required to sync Horizon pods on VMware SDDC, but is not configured on one ' +
        'or more pods. In Horizon Console, configure True SSO on the pods and try again.',
    INFO_UNSUPPORTED_CC_VERSION: 'One or more VMware SDDC pods has an unsupported Horizon Cloud Connector version. Update to the latest ' +
        'Cloud Connector version to avoid connection failures.',
    INFO_RDSH_INTERNAL_CANNOT_DELETE: 'Cannot delete assignment {0} from RDSH Desktops & Apps. ' +
        'Go to VDI Desktops & Apps to delete this assignment.',
    MCW_TRANSITION_MODAL_TITLE: 'Getting Started with Universal Broker and Multi-Cloud Assignments',
    MCW_TRANSITION_MODAL_CAPTION: 'Universal Broker provides a single URL for end users to access virtual desktops and ' +
        'apps on premises or in the cloud, with built-in DNS load balancing and geolocation awareness for the best possible experience. ' +
        'Multi-cloud assignments enable you to create VDI assignments that span multiple pods and sites.',
    MCW_TRANSITION_PREREQUISITES_SCHEDULING: 'Prerequisites and Scheduling',
    MCW_TRANSITION_ACTIVATE_INTELLIGENT_HUB: 'Workspace ONE Intelligent Hub',
    MCW_TRANSITION_CLEAN_UP_WORKSPACE_ONE_ACCESS: 'Clean Up Legacy Workspace ONE Access',
    MCW_TRANSITION_UPDATE_CARD_DESCRIPTION: `First, complete the Universal Broker prerequisites:
        <a href=\'http://www.vmware.com/go/Horizon-UB-Transition\' target=\'_blank\' rel=\'noopener\'>Universal Broker prerequisites</a>.
        Then, click START to schedule your transition to Universal Broker and multi-cloud assignments.`,
    MCW_TRANSITION_RECONNECT_CARD_DESCRIPTION: `Leverage Intelligent Hub to enable multi-factor authentication and single sign-on to
        virtual desktops and apps, for more secure access and improved user experience. </br></br>
        <a href=\'https://docs.vmware.com/en/VMware-Horizon-Cloud-Service/services/context?id=hcs-hydra-learn-ub-hub\' target=\'_blank\'
        rel=\'noopener\'>Learn more about Intelligent Hub</a>`
};
