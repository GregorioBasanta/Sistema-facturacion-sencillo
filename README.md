# 🧾 Sistema de Facturación para Proveedor de Internet

Este proyecto consiste en un **sistema de facturación** orientado a un negocio proveedor de internet.  
El sistema permite gestionar clientes y generar facturas con la informacion del cliente, su abono y algun extra sobre la factura.

## 🚀 Tecnologías
- **Lenguaje:** JavaScript (Node.js)
- **Framework:** Express.js 
- **Base de datos:** PostgreSQL (dockerizada). Para mas adelante, en principio seran mockeados los datos
- **ORM recomendado:** Prisma ORM
- **Contenedores:** Docker + Docker Compose. Para mas adelante, en principio no voy a dockerizar nada

## 📌 Entidades principales

- **Clientes**  
  Datos de los clientes (nombre, apellido, DNI, CUIL, dirección, plan de abono).
- **Facturas**  
  Documento que reúne la información de pago: abonos, datos del negocio y cliente.
- **Abonos**  
  Planes de internet ofrecidos por el negocio, con precio y características.

### En primera instancia no estara aplicado, solo me centrare en los clientes con abonos mensulares.
- **Productos**  
  Ítems adicionales que el cliente puede comprar (equipos, accesorios, etc.).

## 📂 Endpoints (MVP inicial)

En esta primera versión solo se implementará el **CRUD de clientes y la solicitud de una factura**.

### Clientes (`/api/clientes`)

- **GET /api/clientes**  
  → Lista todos los clientes.

- **GET /api/clientes/:id**  
  → Obtiene un cliente por ID.

- **POST /api/clientes**  
  → Crea un nuevo cliente.  
   **Body ejemplo**:
  ```json
    {
        "nombre": "Ana",
        "apellido": "Gómez",
        "dni": "98765432",
        "cuil": "20-98765432-1",
        "direccion": "Av. Libertador 456",
        "abonoId": 1
    }

- **PUT /api/clientes/:id**
  → Actualiza un cliente existente.

- **DELETE /api/clientes/:id**
  → Elimina un cliente.


- **GET /api/facturas**  
  → Lista todas las facturas.

- **GET /api/facturas/:id**    //En principio esta echo por el ID de la factura, habria que cambiarlo al DNI o CUIL del cliente, y un rango de fechas
  → Obtiene una factura por ID.

- **POST /api/facturas**  
  → Crea una nueva factura.  
   **Body ejemplo**:
  ```json
    {
        "cliente": 1,                          //Busca el cliente por el ID
        "fecha": "2025-10-01T00:00:00.000Z",
        "monto": 1200
    }

- **PUT /api/facturas/:id**
  → Actualiza una factura existente.

- **DELETE /api/facturas/:id**
  → Elimina una factura.


###  📈 Futuras mejoras
- Añadir mas clases como productos, por ejemplo.
- Implementar endpoints para Facturas, Abonos y Productos.
- Autenticación con JWT.
- Frontend para gestión visual.
- Reportes en PDF de facturas.
- Facturacion electronica con AFIP
