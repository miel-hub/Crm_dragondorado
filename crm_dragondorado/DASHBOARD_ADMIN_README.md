# Dashboard de Administrador - Mi Dulce Tesoro

## Descripción

Vista de métricas y análisis del sistema CRM para administradores, que incluye:

- **Productos más vendidos**: Top 10 productos con mayor demanda del mes
- **Productos menos vendidos**: Top 10 productos con menor demanda del mes
- **Total de usuarios registrados**: Cantidad de nuevos registros en el mes seleccionado
- **Accesos por tipo**: Distribución de accesos QR durante el año, agrupados por tipo y mes
- **Resumen ejecutivo**: Ingresos totales, ventas, nuevos usuarios y accesos del mes

## Acceso

### Requisitos
- Usuario autenticado con `rol_usuario = 1` (Administrador)
- Solo los administradores pueden acceder a esta vista

### URL de acceso
```
http://localhost:5173/dashboard/admin
```

### Navegación
Los administradores pueden acceder desde el menú de usuario en el header:
1. Hacer clic en el icono de usuario (esquina superior derecha)
2. Seleccionar "Dashboard Admin" (aparece en azul)

## Características

### Filtros
- **Selector de mes**: Permite filtrar las métricas por mes específico
- **Selector de año**: Permite filtrar las métricas por año (2020 - presente)

### Protección de rutas
- La ruta está protegida con `AdminRoute` component
- Si un usuario no administrador intenta acceder, verá un mensaje de "Acceso Denegado"
- Los usuarios no autenticados serán redirigidos al login

## Endpoints del Backend

Todos los endpoints están protegidos con:
- `authenticateToken`: Middleware de autenticación
- `authorizeRoles([1])`: Middleware que solo permite rol de administrador

### Lista de endpoints

1. **GET** `/api/dashboard/productos-mas-vendidos?mes={mes}&anio={anio}`
   - Retorna los 10 productos más vendidos del mes

2. **GET** `/api/dashboard/productos-menos-vendidos?mes={mes}&anio={anio}`
   - Retorna los 10 productos menos vendidos del mes

3. **GET** `/api/dashboard/usuarios-registrados?mes={mes}&anio={anio}`
   - Retorna el total de usuarios registrados en el mes

4. **GET** `/api/dashboard/accesos-por-tipo?anio={anio}`
   - Retorna la cantidad de accesos agrupados por tipo y mes

5. **GET** `/api/dashboard/resumen?mes={mes}&anio={anio}`
   - Retorna un resumen con: total usuarios, ventas, accesos e ingresos

## Estructura de archivos

### Backend
```
Backend/
├── src/
│   ├── controllers/
│   │   └── dashboard.controller.js    # Controladores de métricas
│   ├── routes/
│   │   └── dashboard.routes.js        # Rutas protegidas del dashboard
│   └── middlewares/
│       └── auth.middleware.js         # Middleware de autenticación/autorización
```

### Frontend
```
Frontend/
├── src/
│   ├── app/
│   │   └── dashboard/
│   │       └── admin/
│   │           └── page.tsx           # Página principal del dashboard
│   ├── components/
│   │   └── dashboard/
│   │       ├── ProductosMasVendidosChart.tsx
│   │       ├── ProductosMenosVendidosChart.tsx
│   │       ├── TotalUsuariosCard.tsx
│   │       └── AccesosPorTipoChart.tsx
│   └── router/
│       ├── ReactRouter.tsx            # Configuración de rutas
│       └── AdminRoute.tsx             # Componente de protección de ruta
```

## Instalación y configuración

### Backend
```bash
cd Backend
npm install
```

Las rutas ya están integradas en `src/routes/rutas.js`:
```javascript
router.use('/dashboard', require('./dashboard.routes'));
```

### Frontend
```bash
cd Frontend
npm install
```

Las dependencias necesarias ya están instaladas:
- `recharts`: Para gráficos
- `lucide-react`: Para iconos
- Componentes UI de shadcn/ui

## Uso

1. Inicia el backend:
```bash
cd Backend
npm start
```

2. Inicia el frontend:
```bash
cd Frontend
npm run dev
```

3. Accede con un usuario administrador (rol_usuario = 1)

4. Navega a `/dashboard/admin` o usa el menú de usuario

## Ejemplo de datos retornados

### Productos más vendidos
```json
[
  {
    "id_producto": 1,
    "nombre_producto": "Bubble Tea de Fresa",
    "cantidad": 45
  }
]
```

### Accesos por tipo
```json
[
  {
    "mes": 11,
    "tipo_acceso": "QR1",
    "cantidad": 30
  }
]
```

## Notas técnicas

- Los gráficos son responsivos y se ajustan a diferentes tamaños de pantalla
- Las queries SQL están optimizadas con índices en las tablas principales
- Los datos se cargan en paralelo usando `Promise.all()` para mejor rendimiento
- La interfaz muestra un loader mientras carga los datos
- Los errores de autorización redirigen automáticamente al usuario

## Soporte

Para más información sobre la estructura del proyecto, consulta el archivo principal README.md
