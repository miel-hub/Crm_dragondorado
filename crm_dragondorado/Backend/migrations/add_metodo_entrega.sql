-- Agregar columna metodo_entrega a la tabla ventas
ALTER TABLE ventas 
ADD COLUMN metodo_entrega VARCHAR(20) DEFAULT 'pickup' AFTER estado;

-- Actualizar ventas existentes con valor por defecto
UPDATE ventas 
SET metodo_entrega = 'pickup' 
WHERE metodo_entrega IS NULL;
