export const API_URL = 'https://cademeupetapi.online/json';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_PUT(body, token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function PET_POST(formData, token) {
  return {
    url: API_URL + '/api/pet',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  };
}

export function PET_GET(id) {
  return {
    url: `${API_URL}/api/pet/${id}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function PETS_GET({ page, total, user, status, specie, region }) {
  return {
    url: `${API_URL}/api/pet/?_page=${page}&_total=${total}&_user=${user}&_status=${status}&_specie=${specie}&_region=${region}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function PET_DELETE(id, token) {
  return {
    url: `${API_URL}/api/pet/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function PET_STATUS_PUT(id, token) {
  return {
    url: `${API_URL}/api/pet/status/${id}`,
    options: {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function UFS_GET() {
  return {
    url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function PASSWORD_LOST(body) {
  return {
    url: API_URL + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body) {
  return {
    url: API_URL + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
