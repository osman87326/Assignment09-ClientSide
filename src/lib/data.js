const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_API_URL;

export async function getAllFacilities() {
    const res = await fetch(`${baseUrl}/facilities`)
    return await res.json();
}

export async function getFacilityById(id, token) {
    const res = await fetch(`${baseUrl}/facilities/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        },
    })
    return await res.json();
}

export async function getFacilityByEmail(email, token) {
    const res = await fetch(`${baseUrl}/facilitiesByEmail/${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return await res.json();
}

export async function getBookingData(email, token) {
    const res = await fetch(`${baseUrl}/myBookingsByEmail/${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return await res.json();
}
