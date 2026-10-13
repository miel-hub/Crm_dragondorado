# Parte 6: pedidos y delivery con seguimiento

Esta versión conecta el chatbot con el ciclo real de pedidos del CRM.

## Flujo implementado

1. El cliente selecciona **Delivery a domicilio** en el checkout.
2. El sistema guarda dirección y referencia junto con la venta.
3. Cocina prepara el pedido y registra repartidor, teléfono y tiempo estimado.
4. El pedido cambia a **En camino**.
5. El cliente pregunta en el chatbot: `¿Dónde está mi pedido?` o `estado del pedido #123`.
6. El chatbot consulta la venta del cliente y muestra el estado registrado por el personal.
7. Al entregar, el personal marca el pedido como **Entregado** y se guarda la fecha.

## Cambios técnicos

- `ventas` ahora guarda `direccion_entrega`, `referencia_entrega`, `repartidor`, `telefono_repartidor`, `tiempo_estimado_min` y `entregado_en`.
- Estados delivery: `por confirmar` → `en preparacion` → `en camino` → `entregado`.
- El widget del chatbot identifica consultas de seguimiento y consulta la base de datos.
- La consulta del chatbot solo devuelve pedidos del usuario autenticado.
- El panel de cocinero permite enviar un pedido preparado a reparto.
- El historial del cliente muestra dirección, repartidor y ETA cuando fueron registrados.

## Migración

Ejecuta una sola vez en MySQL:

```bash
mysql -u USUARIO -p NOMBRE_BD < Backend/migrations/add_delivery_tracking.sql
```

Después regenera Prisma y levanta el backend:

```bash
cd Backend
npm install
npx prisma generate
npm start
```

El sistema informa el tiempo estimado que registre el personal. No inventa una ubicación GPS ni un tiempo cuando esos datos no existen.
