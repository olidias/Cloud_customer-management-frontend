// @flow

function getEnvironmentVariable(name: string, defaultValue: string): string {
  return process.env[name] != null ? process.env[name] : defaultValue
}

export const customerSelfServiceBackend = getEnvironmentVariable(
  "REACT_APP_CUSTOMER_SELF_SERVICE_BACKEND",
  "http://localhost:8080"
)
export const customerManagementBackend = getEnvironmentVariable(
  "REACT_APP_CUSTOMER_MANAGEMENT_BACKEND",
  "http://customer-management-customer-management-backend.e4ff.pro-eu-west-1.openshiftapps.com/"
)
