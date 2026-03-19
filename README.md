# Portfolio - Carlos Sullaez

Portfolio profesional desarrollado con Astro, React y TypeScript. Un sitio web moderno, rápido y optimizado para mostrar proyectos, habilidades y experiencia profesional.

---

## Descripción General

Este proyecto es un portafolio personal diseñado para mostrar de manera efectiva la trayectoria profesional, proyectos destacados y habilidades técnicas de un desarrollador Full Stack.

### Características Principales

- 🌙 **Dark/Light Mode** - Cambio de tema dinámico con persistencia en localStorage
- 📱 **Responsive Design** - Optimizado para todos los dispositivos (mobile, tablet, desktop)
- ⚡ **Alto Rendimiento** - Renderizado estático con React Islands para interactividad
- ♿ **Accesibilidad** - Navegación por teclado y ARIA labels
- 🔍 **SEO Optimizado** - Meta tags, Open Graph y estructura semántica
- 🎨 **Animaciones Suaves** - Transiciones y efectos con CSS

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| [Astro](https://astro.build/) | v6 | Framework principal |
| [React](https://react.dev/) | v19 | Componentes interactivos |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Lenguaje tipado |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Estilos |
| [Vite](https://vitejs.dev/) | - | Build tool |

---

## Arquitectura del Proyecto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── astro/           # Componentes estáticos (Server-Side Rendering)
│   │   │   ├── Header.astro    # Navegación con toggle de tema
│   │   │   ├── Footer.astro    # Pie de página con links
│   │   │   ├── Hero.astro      # Sección principal
│   │   │   ├── About.astro     # Información personal
│   │   │   ├── Skills.astro    # Habilidades técnicas
│   │   │   ├── Experience.astro # Timeline laboral
│   │   │   └── Education.astro # Formación académica
│   │   └── react/          # Componentes interactivos (Client Islands)
│   │       ├── ThemeToggle.tsx    # Interruptor de tema
│   │       ├── ProjectsSection.tsx # Grid de proyectos con filtros
│   │       └── ContactSection.tsx # Formulario de contacto
│   ├── data/
│   │   └── portfolio.ts     # Datos centralizados y tipados
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal con SEO
│   ├── pages/
│   │   └── index.astro      # Página principal
│   ├── styles/
│   │   └── global.css       # Estilos globales y Tailwind
│   └── types/
│       └── portfolio.ts     # Definiciones TypeScript
├── public/
│   └── favicon.svg          # Favicon
├── astro.config.mjs         # Configuración de Astro
├── package.json             # Dependencias
├── tsconfig.json            # Configuración TypeScript
└── README.md                # Este archivo
```

### Patrón de Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│                    Layout.astro                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              Script Inline (Head)                  │   │
│  │         - Detecta tema preferente                │   │
│  │         - Lee localStorage                        │   │
│  │         - Añade clase 'dark' al <html>          │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │                  Header.astro                    │   │
│  │  ┌─────────────────────────────────────────┐    │   │
│  │  │       ThemeToggle.tsx (client:load)      │    │   │
│  │  │   - Lee window.__theme                    │    │   │
│  │  │   - Toggle con useCallback               │    │   │
│  │  └─────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │                  Main Content                     │   │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐    │   │
│  │  │   Hero     │ │   About    │ │  Skills    │    │   │
│  │  │  (Astro)   │ │  (Astro)  │ │  (Astro)  │    │   │
│  │  └────────────┘ └────────────┘ └────────────┘    │   │
│  │  ┌────────────────────┐ ┌────────────────────┐    │   │
│  │  │ ProjectsSection.tsx│ │ ContactSection.tsx │    │   │
│  │  │  (client:visible) │ │  (client:visible)   │    │   │
│  │  └────────────────────┘ └────────────────────┘    │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │                  Footer.astro                     │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Diferencia entre Componentes

| Tipo | Renderizado | JavaScript | Uso |
|------|------------|------------|-----|
| **Astro** | Server-side | 0 KB | Contenido estático |
| **React** | Client-side | Solo cuando necesario | Interactividad |

---

## Requisitos Previos

- **Node.js:** >= 22.12.0
- **npm:** >= 10.x (o pnpm/yarn como alternativa)

Verificar versión instalada:

```bash
node --version
npm --version
```

---

## Instalación y Ejecución

### Paso 1: Clonar el repositorio

```bash
git clone <repository-url>
cd portfolio
```

### Paso 2: Instalar dependencias

```bash
npm install
```

Este comando instalará todas las dependencias definidas en `package.json`:

- `@astrojs/react` - Integración de React
- `@tailwindcss/vite` - Plugin de Tailwind para Vite
- `astro` - Framework principal
- `react` / `react-dom` - Librería de UI
- `tailwindcss` - Framework de estilos
- `typescript` / `@types/*` - Tipado

### Paso 3: Iniciar servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en: **http://localhost:4321**

---

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot reload |
| `npm run build` | Construye el proyecto para producción |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run astro` | Ejecuta comandos de Astro CLI |

### Otros comandos de Astro

```bash
npm run astro -- --help    # Ver todos los comandos disponibles
npm run astro -- add react # Añadir integración
npm run astro -- check     # Verificar tipos
```

---

## Desarrollo

### Estructura de Datos

Los datos del portfolio se encuentran centralizados en `src/data/portfolio.ts`:

```typescript
// Tipos definidos en src/types/portfolio.ts
export interface PersonalInfo {
  name: string;
  lastName: string;
  role: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
  cvUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}
```

### Personalización del Portfolio

Para actualizar tu información:

1. **Datos Personales:** Editar `src/data/portfolio.ts`
   ```typescript
   export const personalInfo: PersonalInfo = {
     name: 'Tu Nombre',
     lastName: 'Tu Apellido',
     role: 'Tu Rol',
     email: 'tu@email.com',
     // ...
   };
   ```

2. **Proyectos:** Modificar el array `projects` en el mismo archivo

3. **Experiencia:** Actualizar el array `experience`

4. **Estilos:** Editar `src/styles/global.css`

5. **Layout:** Modificar `src/layouts/Layout.astro`

---

## Dark Mode - Implementación

El sistema de temas está implementado con:

### 1. Script Inline (Head)
```javascript
// Se ejecuta ANTES del render para evitar flash
(function() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
  window.__theme = theme;
})();
```

### 2. Componente React (ThemeToggle)
```tsx
const toggleTheme = useCallback(() => {
  setIsDark(prev => {
    const newIsDark = !prev;
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    window.__theme = newIsDark ? 'dark' : 'light';
    return newIsDark;
  });
}, []);
```

### 3. Configuración Tailwind v4
```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

### Flujo de Funcionamiento

```
┌─────────────────────────────────────────────────────────┐
│ 1. Página carga (HTML)                                  │
│    ├── Script inline ejecuta                             │
│    ├── Lee localStorage / prefers-color-scheme          │
│    ├── Añade/clase 'dark' al <html>                     │
│    └── Guarda window.__theme                            │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 2. React se hidrata                                     │
│    ├── ThemeToggle.mounted = true                       │
│    ├── Lee window.__theme                               │
│    └── Inicializa isDark correctamente                 │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 3. Usuario hace clic en toggle                         │
│    ├── Toggle actualiza isDark                          │
│    ├── Actualiza DOM (clase 'dark')                    │
│    ├── Persiste en localStorage                         │
│    └── Sincroniza window.__theme                       │
└─────────────────────────────────────────────────────────┘
```

---

## Construir para Producción

```bash
npm run build
```

El build genera archivos optimizados en `dist/`:

- HTML pre-renderizado
- CSS minificado
- JavaScript code-split
- Assets optimizados

### Previsualizar Producción

```bash
npm run preview
```

---

## Deployment

El proyecto genera HTML estático optimizado. Opciones de despliegue:

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

1. Configurar GitHub Actions o
2. Subir contenido de `dist/` manualmente

### Cloudflare Pages

Conectar repositorio en dashboard.cloudflare.com

---

## Conceptos Técnicos Clave

### Astro Islands Architecture

Astro usa "Islands" para оптимизировать производительность:

- **Componentes Estáticos (.astro):**
  - Se renderizan en servidor
  - Generan HTML puro
  - 0 KB de JavaScript

- **Componentes Interactivos (.tsx):**
  - Se hidratan en cliente
  - Solo cargan JS cuando es necesario
  - Usa directivas: `client:load`, `client:visible`

```astro
---
// Componente Astro - Sin JavaScript
import Header from '../components/astro/Header.astro';
---

<!-- Componente React - Con JavaScript -->
<ThemeToggle client:load />
```

### Tailwind CSS v4 Características

- Importación directa: `@import "tailwindcss"`
- Custom variants: `@custom-variant dark`
- Mejor rendimiento
- Tree-shaking automático

### TypeScript Strict Mode

Configuración en `tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

---

## Solución de Problemas

### El tema no cambia visualmente

1. Verificar que `@custom-variant dark` está en `global.css`
2. Limpiar cache del navegador: `Ctrl+Shift+R` (Windows) o `Cmd+Shift+R` (Mac)
3. Desactivar extensiones de tema del navegador

### Error de hidratación

1. Ejecutar `npm run build` nuevamente
2. Verificar que todos los componentes tienen `client:*` o son `.astro`

### Error de tipos TypeScript

1. Ejecutar `npm run astro -- check`
2. Verificar imports y tipos en `src/types/`

---

## Licencia

Este proyecto es privado y fue creado para uso profesional.

---

## Autor

**Carlos Sullaez Butron**

- 📧 Email: csullaez@gmail.com
- 📱 Teléfono: +591 75821602
- 💼 LinkedIn: [linkedin.com/in/carlos-sullaez-butron](https://www.linkedin.com/in/carlos-sullaez-butron)
- 💻 GitHub: [github.com/carlossullaez](https://github.com/carlossullaez)
