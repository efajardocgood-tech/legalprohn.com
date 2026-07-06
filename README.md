# 🏛️ Landing Page - Abogado Eduardo Fajardo

Landing page profesional para servicios legales especializados en blindaje corporativo, disputas comerciales y asesoría legal estratégica.

**Estado:** ✅ Producción  
**Versión:** 2.0  
**Última Actualización:** Julio 6, 2026

---

## 🌐 Acceso en Vivo

- **GitHub Pages:** https://TU_USUARIO.github.io/TU_REPOSITORIO/
- **Manus Platform:** https://legalpage-fz7xpflb.manus.space

---

## ✨ Características

### Secciones
- ✅ Hero Section con CTA principal
- ✅ Beneficios (3 tarjetas)
- ✅ Presentación Personal (con foto)
- ✅ Proceso de Trabajo (3 pasos)
- ✅ Testimonios (3 reseñas)
- ✅ Formulario de Contacto
- ✅ FAQ (5 preguntas)
- ✅ CTA Final
- ✅ Footer completo

### Integraciones
- ✅ Botón flotante de WhatsApp
- ✅ Modal de Google Calendar
- ✅ Formulario de contacto
- ✅ Navegación suave

### Despliegue
- ✅ GitHub Pages automático
- ✅ Node.js 22 LTS (compatible con Node.js 24)
- ✅ Sin errores de deprecación

---

## 🚀 Inicio Rápido

### 1. Instalación Local
```bash
# Descomprimir
unzip landing-page-completa.zip
cd landing-legal-profesional

# Instalar dependencias
npm install -g pnpm
pnpm install

# Ejecutar en desarrollo
pnpm dev
```

### 2. Personalizar
- Email: `client/src/pages/Home.tsx`
- WhatsApp: `client/src/components/WhatsAppButton.tsx`
- Google Calendar: `client/src/components/CalendlyModal.tsx`

### 3. Desplegar en GitHub Pages
```bash
# El archivo .github/workflows/deploy.yml ya está incluido
# Solo necesitas hacer push

git add .
git commit -m "Initial commit"
git push origin main
```

### 4. Configurar GitHub Pages
1. Ve a **Settings** de tu repositorio
2. En el menú izquierdo, busca **Pages**
3. En **Build and deployment**, selecciona **GitHub Actions**
4. ¡Listo! Se desplegará automáticamente

---

## 📁 Estructura

```
landing-legal-profesional/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions (YA INCLUIDO)
├── client/
│   ├── src/
│   │   ├── pages/Home.tsx          # Página principal
│   │   ├── components/
│   │   │   ├── WhatsAppButton.tsx
│   │   │   ├── CalendlyModal.tsx
│   │   │   └── ui/
│   │   ├── index.css
│   │   └── App.tsx
│   └── index.html
├── package.json
├── vite.config.ts
├── .gitignore
└── README.md
```

---

## 🛠️ Stack Técnico

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| React | 19 | Framework UI |
| TypeScript | 5.6 | Tipado estático |
| Tailwind CSS | 4 | Estilos |
| Vite | 7 | Build tool |
| pnpm | 10 | Package manager |
| Node.js | 22 LTS | Runtime |

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Azul Marino | #0A192F | Fondos, header, footer |
| Azul Real | #005CBB | Títulos, iconos |
| Cyan | #00A8E8 | Botones CTA |
| Blanco | #FFFFFF | Fondos limpios |
| Gris | #1C2434 | Tipografía |

---

## ✏️ Personalización

### Cambiar Email
**Archivo:** `client/src/pages/Home.tsx`
```typescript
<span>tu-email@dominio.com</span>
```

### Cambiar WhatsApp
**Archivo:** `client/src/components/WhatsAppButton.tsx` (línea 14)
```typescript
const whatsappUrl = `https://wa.me/TU_NUMERO?text=...`;
```

### Cambiar Google Calendar
**Archivo:** `client/src/components/CalendlyModal.tsx` (línea 10)
```typescript
window.open("https://calendar.app.google/TU_URL", "_blank");
```

### Cambiar Teléfono
**Archivo:** `client/src/pages/Home.tsx`
```typescript
<span>+504 XXXX-XXXX</span>
```

### Cambiar Colores
**Archivo:** `client/src/index.css`
```css
--color-primary: #005CBB;
--color-accent: #00A8E8;
```

---

## 🚀 Despliegue Automático

### GitHub Pages (Incluido)

El archivo `.github/workflows/deploy.yml` ya está configurado para:
- ✅ Usar Node.js 22 LTS (compatible con Node.js 24)
- ✅ Instalar dependencias con pnpm
- ✅ Compilar el proyecto
- ✅ Desplegar automáticamente en GitHub Pages

**Solo necesitas:**
1. Hacer push a `main`
2. Configurar GitHub Pages en Settings
3. ¡Listo! Se despliega automáticamente

### Ver Estado del Despliegue
1. Ve a **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages"
3. Espera a que termine (2-5 minutos)
4. Tu página estará en: `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

---

## 🔧 Solución: Error Node.js 24

**Problema:**
```
Node.js 20 is deprecated. Actions target Node.js 20 but forced to run on Node.js 24
```

**Solución (YA INCLUIDA):**
El archivo `deploy.yml` usa:
```yaml
node-version: '22.x'  # Node.js 22 LTS
```

Esto es compatible con Node.js 24 y no tendrá problemas de deprecación.

---

## 📊 Cambios Locales

Cada vez que hagas cambios:
```bash
# Hacer cambios en los archivos
git add .
git commit -m "Descripción del cambio"
git push origin main

# ¡Se despliega automáticamente en GitHub Pages!
```

---

## 🐛 Solucionar Problemas

### El workflow falla en "Build project"
```bash
pnpm install
pnpm build
```

Verifica que funciona localmente primero.

### La página no se ve correctamente
- Limpia caché: `Ctrl+Shift+R`
- Espera 5 minutos para que se propague
- Verifica que el workflow terminó exitosamente

### Permisos denegados
1. **Settings** → **Actions** → **General**
2. **Workflow permissions** → "Read and write permissions"
3. Guarda cambios

### Ver Logs del Workflow
1. Ve a **Actions** en tu repositorio
2. Haz clic en el workflow
3. Haz clic en "build"
4. Expande cada paso para ver detalles

---

## ✅ Checklist de Lanzamiento

- [ ] Personalicé email
- [ ] Personalicé WhatsApp
- [ ] Personalicé Google Calendar
- [ ] Cambié testimonios
- [ ] Cambié ubicación
- [ ] Probé en móvil
- [ ] Probé todos los botones
- [ ] Hice push a main
- [ ] Configuré GitHub Pages en Settings
- [ ] El workflow se ejecutó exitosamente
- [ ] Mi página está disponible en GitHub Pages

---

## 📚 Documentación Adicional

Consulta los archivos de documentación incluidos:
- `DOCUMENTACION_COMPLETA_CORREGIDA.md` - Guía completa
- `INICIO_RAPIDO_CORREGIDO.md` - Setup rápido (15 min)
- `README_PROYECTO.md` - Descripción general

---

## 📞 Soporte

### Recursos Útiles
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

## 🎯 Próximos Pasos

1. **Personaliza** tu información
2. **Prueba** localmente con `pnpm dev`
3. **Haz push** a main
4. **Configura** GitHub Pages en Settings
5. **Verifica** que funciona en vivo

---

## 📄 Licencia

Este proyecto es propiedad de Abogado Eduardo Fajardo.

---

**¡Tu landing page profesional está lista para GitHub Pages! 🎉**

*Última actualización: Julio 6, 2026*
