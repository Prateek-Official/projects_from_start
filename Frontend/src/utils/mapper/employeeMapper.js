export const employeeMapper = (data) => {
    return {
        name: data?.name ?? "",
        email: data?.email ?? "",
        phone: data?.phone ?? "",
        department: data?.department ?? ""
    }
}