export const languages = {
    en: {
        'hero.hi': "Hi, I'm",
        'hero.subtitle': "Backend Developer · Java & Spring Boot",
        'hero.description': "I build backends where the architecture actually makes sense: event-driven systems, resource-level security, and pipelines that don't let untested code reach production. Currently looking for my first full-time role.",
        'hero.contactbutton.text': "Contact me",

        'stack.testing.text': "Testing & Quality",

        'projects.demobutton.text': "Live demo",

        'projects.alerts.title': "Real-Time Price Alerts System",
        'projects.alerts.description': "Event-driven platform where users set price alerts and get instant push notifications via Kafka + WebSocket the moment a target price is hit, no polling.",
        'projects.alerts.point1': "Kafka producer/consumer decoupling: price simulator publishes events, consumer evaluates active alerts and triggers real-time notifications",
        'projects.alerts.point2': "Instant WebSocket/STOMP notifications with resource-level authorization (IDOR prevention)",
        'projects.alerts.point3': "Stateless JWT auth with Spring Security and BCrypt; rate limiting on login with Bucket4j",
        'projects.alerts.point4': "Full test suite (JUnit 5 + Mockito) with CI/CD via GitHub Actions; single-command deploy with Docker Compose",

        'projects.reservations.title': "Hotel Reservation Management System",
        'projects.reservations.description': "REST API and backend web application for full hotel and reservation management, with role-based auth and double-booking prevention.",
        'projects.reservations.point1': "Role-based authentication and authorization (ROLE_USER / ROLE_ADMIN) with Spring Security 6 + BCrypt",
        'projects.reservations.point2': "Double-booking prevention algorithm in the service layer with JPQL validation",
        'projects.reservations.point3': "Admin panel with full CRUD and DTOs for layer decoupling",
        'projects.reservations.point4': "Layered MVC architecture with Bean Validation for data integrity",

        'contact.title': "Let's talk",
        'contact.subtitle': "Open to backend/full stack opportunities. Based in Barcelona.",
        'contact.copy': "Built with Astro + Tailwind CSS · Deployed via GitHub Actions"
    },
    es: {
        'hero.hi': "Hola, soy",
        'hero.subtitle': "Desarrollador Backend · Java & Spring Boot",
        'hero.description': "Construyo backends donde la arquitectura realmente tiene sentido: sistemas dirigidos por eventos, seguridad a nivel de recursos y procesos que impiden que el código sin probar llegue a producción. Actualmente busco mi primer empleo a tiempo completo.",
        'hero.contactbutton.text': "Contacta conmigo",

        'stack.testing.text': "Testing y Calidad",

        'projects.demobutton.text': "Demostración en vivo",

        'projects.alerts.title': "Sistema de alertas de precios en tiempo real",
        'projects.alerts.description': "Plataforma basada en eventos donde los usuarios configuran alertas de precios y reciben notificaciones push instantáneas a través de Kafka + WebSocket en el momento en que se alcanza un precio objetivo, sin necesidad de sondeo.",
        'projects.alerts.point1': "Desacoplamiento productor/consumidor de Kafka: el simulador de precios publica eventos, el consumidor evalúa las alertas activas y activa notificaciones en tiempo real.",
        'projects.alerts.point2': "Notificaciones instantáneas WebSocket/STOMP con autorización a nivel de recurso (prevención IDOR)",
        'projects.alerts.point3': "Autenticación JWT stateless con Spring Security y BCrypt; rate limiting en el inicio de sesión con Bucket4j.",
        'projects.alerts.point4': "Suite de tests completa (JUnit 5 + Mockito) con CI/CD a través de GitHub Actions; despliegue con un solo comando mediante Docker Compose",

        'projects.reservations.title': "Sistema de gestión de reservas hoteleras",
        'projects.reservations.description': "API REST y aplicación web de backend para la gestión integral de hoteles y reservas, con autenticación basada en roles y prevención de reservas duplicadas.",
        'projects.reservations.point1': "Autenticación y autorización basadas en roles (ROLE_USER / ROLE_ADMIN) con Spring Security 6 + BCrypt",
        'projects.reservations.point2': "Algoritmo de prevención de reservas duplicadas en la capa de servicio con validación JPQL",
        'projects.reservations.point3': "Panel de administración con CRUD completo y DTO para desacoplamiento de capas.",
        'projects.reservations.point4': "Arquitectura MVC por capas con Bean Validation para la integridad de los datos.",

        'contact.title': "Hablemos",
        'contact.subtitle': "Abierto a oportunidades de backend/full stack. Residente en Barcelona.",
        'contact.copy': "Creado con Astro + Tailwind CSS · Implementado mediante GitHub Actions"
    }
};