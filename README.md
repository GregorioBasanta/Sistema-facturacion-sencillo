# 🧾 Sistema de Facturación para Proveedor de Internet

Este proyecto consiste en un **sistema de facturación** orientado a un negocio proveedor de internet.  
El sistema permite gestionar clientes y generar facturas con la informacion del cliente, su abono y algun extra sobre la factura.

## 🚀 Tecnologías
- **Lenguaje:** JavaScript (Node.js)
- **Framework:** Express.js 

## 📌 Entidades principales

- **Clientes**  
  Datos de los clientes (nombre, apellido, DNI, CUIL, dirección, plan de abono).
- **Facturas**  
  Documento que reúne la información de pago: abonos, datos del negocio y cliente.
- **Abonos**  
  Planes de internet ofrecidos por el negocio, con precio y características.

## 📂 Endpoints (MVP inicial)

En esta primera versión solo se implementará el **CRUD de clientes y la solicitud de una factura**.

### Clientes (`/api/clientes`)

- **GET /api/clientes**  
  → Lista todos los clientes.
  <img width="993" height="818" alt="image" src="https://github.com/user-attachments/assets/991af2ca-1acb-4f6b-b381-3c180fec105e" />


- **GET /api/clientes/:id**  
  → Obtiene un cliente por ID.
<img width="998" height="509" alt="image" src="https://github.com/user-attachments/assets/ba541ee8-8149-4fa1-a5a3-a77af237614f" />


- **POST /api/clientes**  
  → Crea un nuevo cliente.  
   **Body ejemplo**:
  ```json
    {
        "nombre": "Juan Pedro",
        "apellido": "Martinez",
        "dni": "27861395",
        "cuil": "20-27861395-1",
        "direccion": "Av. Libertador 456",
        "abono": 1
    }
  <img width="980" height="775" alt="image" src="https://github.com/user-attachments/assets/3739082a-8502-4138-a826-f1edb666f1b3" />

- **PUT /api/clientes/:id**
  → Actualiza un cliente existente.
  **Body ejemplo**:
  ```json
    {
        "nombre": "Juan Pedro",
        "apellido": "Martinez Perez",
        "dni": "27861395",
        "cuil": "20-27861395-1",
        "direccion": "Jualian Alvarez y Guemes",
        "abono": 3
    }
  <img width="959" height="783" alt="image" src="https://github.com/user-attachments/assets/46da92e0-8d2e-4556-b8b5-1d3b89bffff7" />

- **DELETE /api/clientes/:id**
  → Elimina un cliente.
<img width="969" height="306" alt="image" src="https://github.com/user-attachments/assets/56ab8c25-11ba-4e2d-acd0-5f81f5435854" />
  Hago un **GET /api/clientes/3** para mostrar que se elimino
  <img width="968" height="351" alt="image" src="https://github.com/user-attachments/assets/54e227b5-80ac-40dd-bb9f-1dbbbd80ee06" />

-**GET /api/clientes/:id/facturas**
  ->Me trae las facturas que tiene registradas el cliente con ese ID. (No llega a mostrar completa la segunda factura. Esa ademas no esta mockeada, la agregue al probar el endpoint de **POST /api/facturas** 
<img width="978" height="807" alt="image" src="https://github.com/user-attachments/assets/f993c4c3-1713-4bd9-968f-74b50428b2ce" />

- **GET /api/facturas**  
  → Lista todas las facturas.
  <img width="968" height="801" alt="image" src="https://github.com/user-attachments/assets/f4cc12a9-9102-47d8-a374-77f68e067386" />
(me quedo corta el screen, no llego a mostrar la segunda factura completa)

- **GET /api/facturas/:id** 
  → Obtiene una factura por ID.
<img width="981" height="711" alt="image" src="https://github.com/user-attachments/assets/e0ebba4e-4a84-461f-a098-f66a6ea28f1e" />

- **POST /api/facturas**  
  → Crea una nueva factura. Busco un cliente por ID para asociarlo con todos sus datos y no solo el ID
   **Body ejemplo**:
  ```json
    {
        "clienteId": 1,
        "fecha": "2025-10-01T00:00:00.000Z"
    }
<img width="971" height="797" alt="image" src="https://github.com/user-attachments/assets/f708300c-1998-4b8a-9dca-d1d5fd2f5416" />

- **No hago PUT de facturas, porque estas no se deberian poder cambiar** 

- **DELETE /api/facturas/:id**
  → Elimina una factura.
  <img width="974" height="318" alt="image" src="https://github.com/user-attachments/assets/544a4a85-1a64-465f-b50c-0e2ea493fbf9" />
    Hago un **GET /api/clientes/3** para mostrar que se elimino
  <img width="972" height="351" alt="image" src="https://github.com/user-attachments/assets/a5bc0f60-1bb5-4e9f-9d37-0f750928336d" />

## 🚀 Ejecucion de la API
  ->**Si se tiene el archivo package.json**
    -Solo se debe hacer el comando:
      npm install
      
  ->**Si no se tiene el archivo package.json**
    -Instalar Express, nodemon y npm. Comandos:
      npm install express
      npm install nodemon --save-dev
      npm install
    -Otras dependencias
      npm install cors dotenv morgan uuid

  
