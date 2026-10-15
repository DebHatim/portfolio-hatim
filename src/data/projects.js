import { date } from "astro:schema";

export const projectsConfig = [
  {
    id: "orders",
    date: "10/2026",
    image: "/projects/orders.gif",
    stack: ["Java 21", "Spring Boot 4.1", "Spring Cloud Gateway", "Apache Kafka", "Docker", "Redis", "Observability"],
    github: "https://github.com/DebHatim/pedidos-microservicios",
    live: "https://productos.hatimdebboun.dev"
  },
  {
    id: "alerts",
    date: "07/2026",
    image: "/projects/alerts.gif",
    stack: ["Java 21", "Spring Boot 3.5", "Apache Kafka", "React", "WebSocket", "Security", "JWT", "MySQL", "Docker"],
    github: "https://github.com/DebHatim/alertas-tiempo-real",
    live: "https://alertas.hatimdebboun.dev"
  },
  {
    id: "reservations",
    date: "05/2026",
    image: "/projects/reservations.png",
    stack: ["Java 21", "Spring Boot 4.0", "Spring Security", "JPA/Hibernate", "MySQL", "Thymeleaf"],
    github: "https://github.com/DebHatim/reservasSpringBoot",
    live: null
  }
];