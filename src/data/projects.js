export const projects = [
  {
    title: "Real-Time Price Alerts System",
    description:
      "Event-driven platform where users set price alerts and get instant push notifications via Kafka + WebSocket the moment a target price is hit, no polling.",
    stack: ["Java 21", "Spring Boot 3.5", "Apache Kafka", "WebSocket/STOMP", "Spring Security", "JWT", "React 19", "MySQL", "Docker"],
    github: "https://github.com/DebHatim/alertas-tiempo-real",
    live: "https://alertas.hatimdebboun.dev",
    highlights: [
      "Stateless JWT auth with resource-level authorization (IDOR prevention)",
      "Kafka producer/consumer decoupling, rate limiting with Bucket4j",
      "Full test suite (JUnit 5 + Mockito) with CI/CD via GitHub Actions",
      "Live deployment with automated tests + deploy on every push",
    ],
  },
  {
    title: "Hotel Reservation Management System",
    description:
      "REST API and backend web application for full hotel and reservation management, with role-based auth and double-booking prevention.",
    stack: ["Java 21", "Spring Boot", "Spring Security", "JPA/Hibernate", "MySQL", "Thymeleaf"],
    github: "https://github.com/DebHatim/reservasSpringBoot",
    live: null,
    highlights: [
      "Role-based authentication with Spring Security 6 + BCrypt",
      "Double-booking prevention algorithm with JPQL validation",
      "Admin panel with full CRUD, DTOs for layer decoupling",
    ],
  },
];