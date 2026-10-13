-- Parte 6: pedidos y delivery con seguimiento desde el CRM.
-- Ejecutar una sola vez sobre la base de datos existente.

ALTER TABLE ventas
  ADD COLUMN direccion_entrega VARCHAR(255) NULL AFTER metodo_entrega,
  ADD COLUMN referencia_entrega VARCHAR(255) NULL AFTER direccion_entrega,
  ADD COLUMN repartidor VARCHAR(255) NULL AFTER referencia_entrega,
  ADD COLUMN telefono_repartidor VARCHAR(30) NULL AFTER repartidor,
  ADD COLUMN tiempo_estimado_min INT NULL AFTER telefono_repartidor,
  ADD COLUMN entregado_en DATETIME NULL AFTER tiempo_estimado_min;

-- Valores recomendados para metodo_entrega:
-- pickup   = recoger en tienda
-- dine-in  = consumir en local
-- delivery = envío a domicilio

-- Estados usados por el flujo de pedidos:
-- por confirmar -> en preparacion -> en camino -> entregado
-- Para pickup, el estado intermedio puede ser por recoger.
