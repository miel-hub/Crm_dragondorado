#!/bin/bash

# Script de deployment para AWS EC2
# Uso: ./deploy.sh

echo "🚀 Iniciando deployment..."

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Detener la aplicación
echo -e "${YELLOW}📦 Deteniendo aplicación...${NC}"
pm2 stop crm-backend || true

# 2. Actualizar código
echo -e "${YELLOW}📥 Actualizando código desde Git...${NC}"
git pull origin master

# 3. Instalar dependencias
echo -e "${YELLOW}📚 Instalando dependencias...${NC}"
npm ci --production

# 4. Generar Prisma Client
echo -e "${YELLOW}🔨 Generando Prisma Client...${NC}"
npx prisma generate

# 5. Ejecutar migraciones
echo -e "${YELLOW}🗄️ Ejecutando migraciones...${NC}"
npx prisma migrate deploy

# 6. Reiniciar aplicación
echo -e "${YELLOW}♻️ Reiniciando aplicación...${NC}"
pm2 restart crm-backend || pm2 start index.js --name "crm-backend"

# 7. Guardar configuración PM2
pm2 save

# 8. Verificar estado
echo -e "${GREEN}✅ Deployment completado!${NC}"
pm2 status
pm2 logs crm-backend --lines 20
