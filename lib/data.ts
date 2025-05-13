// Project data
export interface Project {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
  stars: number
  forks: number
  progress: number
  fullDescription: string
  features: string[]
  technologies: string[]
  images: string[]
  demoUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: "mrjob",
    title: "MrJob",
    description:
      "Freelance platform built with Spring Boot, Angular 17, JWT, Jenkins, Docker",
    date: "Sep–Oct 2024",
    tags: ["Spring Boot", "Angular 17", "JWT", "Jenkins", "Docker"],
    stars: 12,
    forks: 3,
    progress: 85,
    fullDescription:
      "MrJob is a comprehensive freelance platform that connects clients with skilled professionals. The platform features a robust authentication system, project management tools, secure payment processing, and a rating system.",
    features: [
      "User authentication with JWT",
      "Project creation and bidding system",
      "Real-time messaging between clients and freelancers",
      "Secure payment integration",
      "Review and rating system",
      "Advanced search and filtering",
      "Responsive dashboard for both clients and freelancers",
    ],
    technologies: [
      "Spring Boot for backend API",
      "Angular 17 for frontend",
      "JWT for authentication",
      "MySQL database",
      "Docker for containerization",
      "Jenkins for CI/CD",
      "Swagger for API documentation",
    ],
    images: [
      "/mrjob-img/Home Page.png",
      "/mrjob-img/Search Tasks.png",
      "/mrjob-img/Task Info.png",
      "/mrjob-img/Create a Task.png",
      "/mrjob-img/Edit Profile.png",
      "/mrjob-img/Search Workers.png",
      
    ],
    demoUrl: "https://github.com/manbarmohamed/Fill-Rouge-front",
    repoUrl: "https://github.com/manbarmohamed/Fill-Rouge",
  },
  {
    id: "ebank",
    title: "E-bank Solution",
    description:
      "Online banking app with Angular, Spring Boot, and Spring Security",
    date: "Jul–Aug 2024",
    tags: ["Angular", "Spring Boot", "Spring Security"],
    stars: 8,
    forks: 2,
    progress: 90,
    fullDescription:
      "E-bank Solution is a secure online banking application that allows users to manage their accounts, transfer funds, pay bills, and track their spending. The application implements robust security measures to protect sensitive financial data.",
    features: [
      "Secure user authentication and authorization",
      "Account management and transaction history",
      "Fund transfers between accounts",
      "Bill payment system",
      "Spending analytics and reports",
      "Notification system for account activities",
      //"Two-factor authentication",
    ],
    technologies: [
      "Angular for frontend",
      "Spring Boot for backend",
      "Spring Security for authentication",
      "PostgreSQL database",
      "JWT for secure API communication",
      "Chart.js for data visualization",
      "Responsive design with Angular Material",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/manbarmohamed/bank_solution",
  },
  {
    id: "diabetes-tracker",
    title: "Diabetes Tracker",
    description:
      "Health tracking tool using Spring Boot, ChartJS, Thymeleaf, and MySQL",
    date: "June 2024",
    tags: ["Spring Boot", "ChartJS", "Thymeleaf", "MySQL"],
    stars: 6,
    forks: 1,
    progress: 75,
    fullDescription:
      "Diabetes Tracker is a health monitoring application designed to help users track their blood glucose levels, medication, diet, and exercise. The application provides visualizations and insights to help users manage their diabetes effectively.",
    features: [
      "Blood glucose level tracking",
      "Medication reminder system",
      "Diet and carbohydrate tracking",
      "Exercise logging",
      "Data visualization with charts and graphs",
      "Report generation for healthcare providers",
      "Goal setting and progress tracking",
    ],
    technologies: [
      "Spring Boot for backend",
      "Thymeleaf for server-side rendering",
      "Chart.js for data visualization",
      "MySQL database",
      "Bootstrap for responsive design",
      "Spring Security for user authentication",
      "RESTful API for mobile app integration",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    repoUrl: "https://github.com/manbarmohamed/DiabetesTrackerAngularBackEnd",
  },
  {
    id: "fixtrack-it-support",
    title: "FixTrack - IT Support Ticket Management System",
    description:
      "A Spring Boot and Angular-based system for managing technical support tickets, assets, and IT operations within organizations.",
    date: "June 2024",
    tags: ["Spring Boot", "PostgreSQL", "JWT", "Docker", "Angular"],
    stars: 5,
    forks: 2,
    progress: 80,
    fullDescription:
      "FixTrack is an internal IT support management system designed to streamline the handling of technical issues in an organization. It offers a structured ticketing workflow, role-based access control for Admins, Technicians, and Employees, and facilitates asset and technician management. Built with Spring Boot and Dockerized for easy deployment, FixTrack provides a secure, efficient backend ready for integration with an Angular frontend currently in progress.",
    features: [
      "Role-based access control (Admin, Technician, Employee)",
      "JWT-secured authentication system",
      "Structured ticket creation, assignment, and tracking",
      "Technician availability and status update management",
      "Equipment and asset management system",
      "Global exception handling with Spring @RestControllerAdvice",
      "Swagger/OpenAPI documentation for easy API exploration",
      "Dockerized setup for local development and deployment",
    ],
    technologies: [
      "Spring Boot 3",
      "Java 17",
      "PostgreSQL",
      "JWT for authentication",
      "MapStruct for DTO mapping",
      "Swagger / OpenAPI",
      "Docker & Docker Compose",
      "JUnit & Mockito for testing",
      "Angular (frontend in progress)",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    repoUrl: "https://github.com/manbarmohamed/FixTrack",
  },
  {
    id: "marketbridge-marketplace",
    title: "MarketBridge - Full Stack Marketplace Backend",
    description:
      "A Spring Boot-based backend for a marketplace platform supporting real-time chat, product listing, and advanced search with Elasticsearch.",
    date: "May 2024",
    tags: ["Spring Boot", "PostgreSQL", "Elasticsearch", "Docker", "WebSocket"],
    stars: 5,
    forks: 3,
    progress: 100,
    fullDescription:
      "MarketBridge is a robust backend system for a full-featured online marketplace. Built with Spring Boot, it enables users to post, search, and interact with products across various categories like real estate, vehicles, and electronics. It features real-time messaging via WebSocket, full-text search using Elasticsearch, secure JWT-based authentication, and a CI/CD pipeline using GitHub Actions and DockerHub. The project follows a clean modular structure for scalability and ease of maintenance.",
    features: [
      "Role-based user management with inheritance (Buyer, Seller)",
      "Product posting with multi-image support",
      "Advanced search using Elasticsearch",
      "Real-time buyer-seller chat via WebSocket",
      "Favorites and product comment system",
      "Secure JWT authentication (configurable)",
      "Swagger UI for REST API documentation",
      "CI/CD pipeline with GitHub Actions and DockerHub",
    ],
    technologies: [
      "Spring Boot 3.4.4",
      "Java 17",
      "PostgreSQL 15.3",
      "Elasticsearch 8.6.2",
      "Spring WebSocket",
      "JWT for authentication",
      "Maven",
      "JUnit 5 & Mockito",
      "Docker & Docker Compose",
      "GitHub Actions",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    repoUrl: "https://github.com/manbarmohamed/MarketBridge",
  },
  {
    id: "blog-management-system",
    title: "Blog Management System",
    description:
      "A comprehensive Spring Boot application for managing blog content with role-based access control.",
    date: "May 2024",
    tags: ["Spring Boot", "Spring Security", "MySQL", "JWT", "REST API"],
    stars: 0,
    forks: 0,
    progress: 100,
    fullDescription:
      "The Blog Management System is a full-featured web application built with Spring Boot, offering robust role-based access control to manage users, posts, categories, tags, likes, and comments. It supports visitor interactions, registered user engagement, and administrator control over platform content and users. The system ensures secure authentication and authorization mechanisms, facilitating a seamless blogging experience.",
    features: [
      "User Registration & Authentication",
      "Role-based access control (Admin, Registered User, Visitor)",
      "Post Creation, Editing, and Deletion",
      "Category & Tag Management",
      "Commenting System",
      "Like Feature",
      "Search & Filter Posts",
      "Password Reset & Profile Management",
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JPA / Hibernate",
      "MySQL or PostgreSQL",
      "Lombok",
      "MapStruct (optional for DTOs)",
      "Swagger/OpenAPI",
    ],
    images: [
      "/blog-img/Home.png",
      "/blog-img/Post Detail.png",
      "/blog-img/Search Page.png",
      "/blog-img/Category page.png",
      "/blog-img/New Post.png",
      "/blog-img/Profile.png",
     
    ],
    repoUrl: "https://github.com/manbarmohamed/Blog",
  },
];

// Blog post data
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  content: string
  tags: string[]
  coverImage: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "spring-boot-security-best-practices",
    title: "Spring Boot Security Best Practices in 2024",
    excerpt:
      "Learn the latest security best practices for Spring Boot applications to protect your data and users.",
    date: "May 10, 2024",
    author: "Mohamed Manbar",
    content: `
# Spring Boot Security Best Practices in 2024

Security is a critical aspect of any application, and Spring Boot provides robust tools to implement security measures. In this article, I'll share some best practices for securing your Spring Boot applications in 2024.

## 1. Use the Latest Spring Security Version

Always use the latest version of Spring Security to benefit from the latest security patches and features. Spring Security 6.x brings significant improvements over previous versions.

\`\`\`java
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-security:3.2.0'
}
\`\`\`

## 2. Implement Proper Authentication

JWT (JSON Web Tokens) has become the standard for stateless authentication in modern applications. Here's a simple implementation:

\`\`\`java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
}
\`\`\`

## 3. Secure Your Endpoints with Method-Level Security

Spring Security provides method-level security using annotations like @PreAuthorize:

\`\`\`java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or @userSecurity.isUserOwner(authentication, #id)")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        // Implementation
    }
}
\`\`\`

## 4. Implement CORS Properly

Cross-Origin Resource Sharing (CORS) is essential for web applications:

\`\`\`java
@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Arrays.asList("https://yourdomain.com"));
        config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
\`\`\`

## 5. Use Content Security Policy

Implement Content Security Policy headers to prevent XSS attacks:

\`\`\`java
@Component
public class SecurityHeadersFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        httpResponse.setHeader("Content-Security-Policy", 
            "default-src 'self'; script-src 'self' https://trusted-cdn.com");
        chain.doFilter(request, response);
    }
}
\`\`\`

## Conclusion

Security is an ongoing process, not a one-time implementation. Stay updated with the latest security vulnerabilities and patches, and regularly audit your application's security posture.

By following these best practices, you can significantly improve the security of your Spring Boot applications and protect your users' data from potential threats.
    `,
    tags: ["Spring Boot", "Security", "Java", "Web Development"],
    coverImage:
      "https://onurdesk.com/wp-content/uploads/2024/09/Spring-security.png",
    readTime: 8,
  },
  {
    id: "angular-17-new-features",
    title: "What's New in Angular 17: Features You Should Know",
    excerpt:
      "Explore the exciting new features and improvements in Angular 17 that will change how you build web applications.",
    date: "April 25, 2024",
    author: "Mohamed Manbar",
    content: `
# What's New in Angular 17: Features You Should Know

Angular 17 brings significant improvements and new features that enhance developer experience and application performance. Let's explore the most important changes.

## 1. Standalone Components by Default

Angular 17 makes standalone components the default, simplifying the development experience:

\`\`\`typescript
// Before Angular 17
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent { }

// Angular 17
@Component({
  selector: 'app-user',
  standalone: true, // Now default
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent { }
\`\`\`

## 2. Improved Performance with Signals

Angular 17 enhances the Signals API introduced in Angular 16:

\`\`\`typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
    <p>Count: {{ count() }}</p>
    <p>Doubled: {{ doubled() }}</p>
    <button (click)="increment()">Increment</button>
  \`
})
export class CounterComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  increment() {
    this.count.update(value => value + 1);
  }
}
\`\`\`

## 3. New Control Flow Syntax

Angular 17 introduces a more intuitive control flow syntax:

\`\`\`html
<!-- New @if syntax -->
@if (user) {
  <h1>Welcome, {{ user.name }}!</h1>
} @else {
  <h1>Please log in</h1>
}

<!-- New @for syntax -->
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}

<!-- New @switch syntax -->
@switch (status) {
  @case ('loading') {
    <loading-spinner />
  }
  @case ('error') {
    <error-message />
  }
  @default {
    <user-profile />
  }
}
\`\`\`

## 4. Improved Server-Side Rendering

Angular 17 enhances the Angular Universal experience with better hydration:

\`\`\`typescript
// main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration()
  ]
});
\`\`\`

## 5. Deferrable Views

Angular 17 introduces deferrable views for lazy loading components:

\`\`\`html
@defer {
  <heavy-component />
} @loading {
  <p>Loading...</p>
} @error {
  <p>Error loading component</p>
}
\`\`\`

## 6. Built-in Image Optimization

The new NgOptimizedImage directive provides automatic image optimization:

\`\`\`html
<img 
  ngSrc="profile.jpg" 
  width="200" 
  height="200" 
  priority
  alt="User profile"
/>
\`\`\`

## Conclusion

Angular 17 represents a significant step forward for the framework, with improvements that make development more intuitive and applications more performant. The new control flow syntax, standalone components by default, and enhanced signals API are particularly exciting changes that will improve the developer experience.

As you upgrade to Angular 17, take advantage of these new features to write cleaner, more maintainable code and deliver better experiences to your users.
    `,
    tags: ["Angular", "Web Development", "JavaScript", "TypeScript"],
    coverImage:
      "https://www.esenceweb.com/backend/uploads/angular-framework-tutorial-for-absolute-beginners.png",
    readTime: 6,
  },
  {
    id: "microservices-spring-boot",
    title: "Building Microservices with Spring Boot and Docker",
    excerpt:
      "A comprehensive guide to designing, implementing, and deploying microservices using Spring Boot and Docker.",
    date: "March 15, 2024",
    author: "Mohamed Manbar",
    content: `
# Building Microservices with Spring Boot and Docker

Microservices architecture has become the standard for building scalable, maintainable applications. In this guide, I'll walk you through creating a microservices ecosystem using Spring Boot and Docker.

## Understanding Microservices Architecture

Microservices architecture breaks down applications into small, independent services that communicate through APIs. Each service:

- Focuses on a specific business capability
- Can be developed, deployed, and scaled independently
- Has its own database (if needed)
- Communicates with other services through well-defined APIs

## Setting Up a Basic Microservice with Spring Boot

Let's create a simple user service:

\`\`\`java
@SpringBootApplication
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(userService.save(user));
    }
}
\`\`\`

## Service Discovery with Spring Cloud Netflix Eureka

Service discovery allows services to find and communicate with each other:

\`\`\`java
// In your main application class
@SpringBootApplication
@EnableEurekaClient
public class UserServiceApplication {
    // ...
}

// In application.yml
spring:
  application:
    name: user-service
    
eureka:
  client:
    serviceUrl:
      defaultZone: http://eureka-server:8761/eureka/
\`\`\`

## API Gateway with Spring Cloud Gateway

An API Gateway provides a single entry point for clients:

\`\`\`java
@SpringBootApplication
@EnableEurekaClient
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
}

// In application.yml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
          filters:
            - StripPrefix=1
\`\`\`

## Containerizing with Docker

Create a Dockerfile for each service:

\`\`\`dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/user-service-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

## Orchestrating with Docker Compose

Create a docker-compose.yml file to manage all services:

\`\`\`yaml
version: '3'
services:
  eureka-server:
    build: ./eureka-server
    ports:
      - "8761:8761"
    networks:
      - microservices-network
      
  gateway:
    build: ./gateway
    ports:
      - "8080:8080"
    depends_on:
      - eureka-server
    networks:
      - microservices-network
    environment:
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
      
  user-service:
    build: ./user-service
    depends_on:
      - eureka-server
      - user-db
    networks:
      - microservices-network
    environment:
      - SPRING_DATASOURCE_URL=jdbc:mysql://user-db:3306/userdb
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
      
  user-db:
    image: mysql:8.0
    networks:
      - microservices-network
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=userdb
    volumes:
      - user-db-data:/var/lib/mysql
      
networks:
  microservices-network:
    
volumes:
  user-db-data:
\`\`\`

## Implementing Circuit Breakers with Resilience4j

Circuit breakers prevent cascading failures:

\`\`\`java
@RestController
public class ProductController {

    @Autowired
    private RestTemplate restTemplate;
    
    @CircuitBreaker(name = "userService", fallbackMethod = "getUserFallback")
    @GetMapping("/products/{productId}/user/{userId}")
    public ResponseEntity<ProductUserResponse> getProductWithUser(
            @PathVariable Long productId, 
            @PathVariable Long userId) {
        
        Product product = productService.findById(productId);
        User user = restTemplate.getForObject(
            "http://user-service/users/" + userId, 
            User.class
        );
        
        return ResponseEntity.ok(new ProductUserResponse(product, user));
    }
    
    public ResponseEntity<ProductUserResponse> getUserFallback(
            Long productId, Long userId, Exception e) {
        
        Product product = productService.findById(productId);
        User defaultUser = new User(userId, "Unknown", "User");
        
        return ResponseEntity.ok(new ProductUserResponse(product, defaultUser));
    }
}
\`\`\`

## Monitoring with Spring Boot Actuator and Prometheus

Add monitoring to track service health:

\`\`\`java
// In build.gradle or pom.xml
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-actuator'
    implementation 'io.micrometer:micrometer-registry-prometheus'
}

// In application.yml
management:
  endpoints:
    web:
      exposure:
        include: health,info,prometheus
  metrics:
    export:
      prometheus:
        enabled: true
\`\`\`

## Conclusion

Building microservices with Spring Boot and Docker provides a powerful, scalable architecture for modern applications. By following the patterns outlined in this guide, you can create a robust microservices ecosystem that's easy to develop, deploy, and maintain.

Remember that microservices introduce complexity in terms of deployment, monitoring, and debugging. Start small, with just a few services, and expand as your team gains experience with the architecture.
    `,
    tags: ["Microservices", "Spring Boot", "Docker", "Java", "Cloud"],
    coverImage:
      "https://developer.okta.com/assets-jekyll/blog/java-microservices/java-microservices-01568db38a22ed4c956c02810fb88f859e486ea9b46b2339325db6588d888089.png",
    readTime: 12,
  },
];
