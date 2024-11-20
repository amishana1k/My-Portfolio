import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "This project involves designing and developing a website for a business startup. It focuses on creating a clean, responsive design with user-friendly navigation.",
    },
    {
      title: "E-Commerce Platform",
      description: "Development of a full-stack e-commerce platform with a custom user interface and integration of payment gateways for seamless transactions.",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using modern web technologies to showcase my work, projects, and skills in web development and design.",
    },
    {
      title: "Social Media Integration",
      description: "This project adds social media integration features to a website, allowing users to share content and login through social media platforms.",
    },
    {
      title: "Blog Platform",
      description: "Development of a blogging platform with content management features, allowing users to create, edit, and publish blog posts easily.",
    },
    {
      title: "Task Management App",
      description: "A task management application designed to help users organize their daily tasks with features like categorization, reminders, and a user-friendly interface.",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Explore some of the projects I have worked on, focusing on web development and design, combining creativity with functionality.</p>
                
                
                <Carousel>
                  {
                    projects.map((project, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <Row className="justify-content-center">
                            <Col md={8}>
                              <Card className="project-card">
                                <Card.Body>
                                  <Card.Title>{project.title}</Card.Title>
                                  <Card.Text>{project.description}</Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Carousel.Item>
                      )
                    })
                  }
                </Carousel>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
