# Tesis2-LMS-Front

Cliente Angular 7 del LMS, con roles de alumno, docente y administrador. Incluye pantallas para cursos, matrícula, materiales, tareas, resultados, asistencia, mensajes, noticias y gestión de usuarios/departamentos; algunas pantallas conservan datos de ejemplo.

- Instalar: `npm ci`. El proyecto conserva `node-sass@4.5.3`; su instalación requiere una herramienta antigua compatible y puede fallar con Node moderno.
- Desarrollo: `npm start`; abrir http://localhost:4200.
- Compilar: `npm run build -- --prod`; salida en `dist/erp-front-end/`.
- Verificar: `npm test -- --watch=false` (Karma/Chrome), `npm run lint` y `npm run e2e` (Protractor/Chrome).

Configurar la URL de la API en `src/app/services/data.service.ts` y usar cuentas de la base de datos propia. Backend de este proyecto: [Tesis2-LMS-Back](https://github.com/Franccesco1907/Tesis2-LMS-Back); origen: [LMS-Backend-API](https://github.com/omob/LMS-Backend-API).
