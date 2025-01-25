/* export const users = [
    { id: 1, username: "admin", password: "password123" },
    { id: 2, username: "user1", password: "password123" }
  ]; */
  
  export const propietarios = [
    { id: 1, nombre: "Juan Perez" },
    { id: 2, nombre: "Maria Gomez" },
    { id: 3, nombre: "Raul Gil"},
    { id: 4, nombre: "Luis Campos"},
    { id: 5, nombre: "Blanca Marquez"},
    { id: 6, nombre: "Maria Arenas"}
  ];
  
  export const apartamentos = [
    { id: 1, piso: 1, numero_apartamento: "1-A", id_propietario: 1 },
    { id: 2, piso: 1, numero_apartamento: "1-B", id_propietario: 2 },
    { id: 3, piso: 2, numero_apartamento: "2-A", id_propietario: 1 },
    { id: 4, piso: 2, numero_apartamento: "2-B", id_propietario: 1 },
    { id: 5, piso: 3, numero_apartamento: "3-A", id_propietario: 1 },
    { id: 6, piso: 3, numero_apartamento: "3-B", id_propietario: 1 },
  ];
  
  export const pagos = [
    { id: 1, fecha: new Date(), monto: 100, id_apartamento: 1 },
    { id: 2, fecha: new Date(), monto: 200, id_apartamento: 2 },
    { id: 3, fecha: new Date(), monto: 100, id_apartamento: 3 },
    { id: 4, fecha: new Date(), monto: 100, id_apartamento: 4 },
    { id: 5, fecha: new Date(), monto: 100, id_apartamento: 5 },
    { id: 6, fecha: new Date(), monto: 100, id_apartamento: 6 },
  ];
  